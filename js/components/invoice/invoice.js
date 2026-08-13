/* ============================================================
   RIVER — ELECTRONIC INVOICE ENGINE
   invoice.js
============================================================ */

(() => {

    "use strict";
  
  
    /* ==========================================================
       🟢 UPGRADE — CONFIGURATION
    ========================================================== */
  
    const CONFIG = {
  
      storageKey: "river_electronic_invoice",
  
      invoiceSequenceKey: "river_invoice_sequence",
  
      timezone: "Africa/Nairobi",
  
      timezoneLabel: "EAT",
  
      utcOffset: "UTC+03:00",
  
      defaultCurrency: "KES",
  
      defaultTaxRate: 16
  
    };
  
  
    /* ==========================================================
       🟢 UPGRADE — STATE
    ========================================================== */
  
    const state = {
  
      invoiceNumber: "",
  
      status: "issued",
  
      currency: "KES",
  
      paymentTerms: "Net 14",
  
      issueDate: "",
  
      dueDate: "",
  
      issueTimestampUTC: "",
  
      issueTimestampEAT: "",
  
      seller: {
  
        name: "River IT Solutions",
  
        address: "Nairobi, Kenya",
  
        email: "",
  
        phone: "",
  
        taxNumber: ""
  
      },
  
      client: {
  
        name: "",
  
        contact: "",
  
        address: "",
  
        email: "",
  
        phone: "",
  
        taxNumber: ""
  
      },
  
      items: [],
  
      discount: 0,
  
      amountPaid: 0,
  
      paymentMethod: "Bank Transfer",
  
      paymentReference: "",
  
      paymentInstructions: "",
  
      notes: "",
  
      terms:
        "Payment is due according to the terms stated on this invoice. Please use the invoice number as the payment reference."
  
    };
  
  
    /* ==========================================================
       DOM HELPERS
    ========================================================== */
  
    const $ = (id) => document.getElementById(id);
  
  
    const setText = (id, value) => {
  
      const element = $(id);
  
      if (!element) return;
  
      element.textContent = value ?? "";
  
    };
  
  
    const setValue = (id, value) => {
  
      const element = $(id);
  
      if (!element) return;
  
      element.value = value ?? "";
  
    };
  
  
    const getValue = (id) => {
  
      const element = $(id);
  
      return element ? element.value : "";
  
    };
  
  
    /* ==========================================================
       🟢 UPGRADE — DATE/TIME ENGINE
    ========================================================== */
  
    function now() {
  
      return new Date();
  
    }
  
  
    function toDateInputValue(date) {
  
      const parts = new Intl.DateTimeFormat(
        "en-CA",
        {
          timeZone: CONFIG.timezone,
  
          year: "numeric",
  
          month: "2-digit",
  
          day: "2-digit"
        }
      ).formatToParts(date);
  
  
      const values = {};
  
      parts.forEach(part => {
  
        if (part.type !== "literal") {
  
          values[part.type] = part.value;
  
        }
  
      });
  
  
      return `${values.year}-${values.month}-${values.day}`;
  
    }
  
  
    function formatEATDateTime(date) {
  
      return new Intl.DateTimeFormat(
        "en-GB",
        {
          timeZone: CONFIG.timezone,
  
          year: "numeric",
  
          month: "short",
  
          day: "2-digit",
  
          hour: "2-digit",
  
          minute: "2-digit",
  
          second: "2-digit",
  
          hour12: false
  
        }
      ).format(date) + " EAT";
  
    }
  
  
    function formatEATDate(dateString) {
  
      if (!dateString) return "—";
  
  
      const date = new Date(
        `${dateString}T00:00:00+03:00`
      );
  
  
      return new Intl.DateTimeFormat(
        "en-GB",
        {
          timeZone: CONFIG.timezone,
  
          year: "numeric",
  
          month: "short",
  
          day: "2-digit"
        }
      ).format(date);
  
    }
  
  
    function formatUTC(date) {
  
      return new Intl.DateTimeFormat(
        "en-GB",
        {
          timeZone: "UTC",
  
          year: "numeric",
  
          month: "short",
  
          day: "2-digit",
  
          hour: "2-digit",
  
          minute: "2-digit",
  
          second: "2-digit",
  
          hour12: false,
  
          timeZoneName: "short"
        }
      ).format(date);
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — INVOICE NUMBER GENERATOR
    ========================================================== */
  
    function generateInvoiceNumber() {
  
      const year = new Intl.DateTimeFormat(
        "en-US",
        {
          timeZone: CONFIG.timezone,
  
          year: "numeric"
        }
      ).format(now());
  
  
      let sequence = Number(
        localStorage.getItem(CONFIG.invoiceSequenceKey) || "0"
      );
  
  
      sequence += 1;
  
  
      localStorage.setItem(
        CONFIG.invoiceSequenceKey,
        String(sequence)
      );
  
  
      return `RIV-${year}-${String(sequence).padStart(6, "0")}`;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — DATE CALCULATIONS
    ========================================================== */
  
    function calculateDueDate(issueDate, terms) {
  
      if (!issueDate) return "";
  
  
      if (terms === "Due on receipt") {
  
        return issueDate;
  
      }
  
  
      const match = terms.match(/^Net\s+(\d+)$/i);
  
  
      if (!match) {
  
        return issueDate;
  
      }
  
  
      const days = Number(match[1]);
  
  
      const date = new Date(
        `${issueDate}T00:00:00+03:00`
      );
  
  
      date.setUTCDate(
        date.getUTCDate() + days
      );
  
  
      return toDateInputValue(date);
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — CURRENCY
    ========================================================== */
  
    const CURRENCY_SYMBOLS = {
  
      KES: "KES",
  
      USD: "$",
  
      EUR: "€",
  
      GBP: "£"
  
    };
  
  
    function currencyLabel() {
  
      return state.currency;
  
    }
  
  
    function formatMoney(value) {
  
      const number = Number(value) || 0;
  
  
      try {
  
        return new Intl.NumberFormat(
          "en-US",
          {
            minimumFractionDigits: 2,
  
            maximumFractionDigits: 2
          }
        ).format(number);
  
      } catch {
  
        return number.toFixed(2);
  
      }
  
    }
  
  
    function money(value) {
  
      const symbol =
        CURRENCY_SYMBOLS[state.currency]
        || state.currency;
  
  
      return `${symbol} ${formatMoney(value)}`;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — ITEM ENGINE
    ========================================================== */
  
    function createItem() {
  
      return {
  
        id:
          `${Date.now()}-${Math.random()
            .toString(36)
            .slice(2)}`,
  
        description: "",
  
        quantity: 1,
  
        unitPrice: 0,
  
        taxRate: CONFIG.defaultTaxRate
  
      };
  
    }
  
  
    function calculateItem(item) {
  
      const quantity =
        Math.max(0, Number(item.quantity) || 0);
  
  
      const unitPrice =
        Math.max(0, Number(item.unitPrice) || 0);
  
  
      const taxRate =
        Math.max(0, Number(item.taxRate) || 0);
  
  
      const subtotal =
        quantity * unitPrice;
  
  
      const tax =
        subtotal * (taxRate / 100);
  
  
      return {
  
        subtotal,
  
        tax,
  
        total: subtotal + tax
  
      };
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — INVOICE CALCULATIONS
    ========================================================== */
  
    function calculateInvoice() {
  
      let subtotal = 0;
  
      let tax = 0;
  
  
      state.items.forEach(item => {
  
        const calculated =
          calculateItem(item);
  
  
        subtotal += calculated.subtotal;
  
        tax += calculated.tax;
  
      });
  
  
      const discount =
        Math.min(
          Math.max(0, Number(state.discount) || 0),
          subtotal
        );
  
  
      const taxableSubtotal =
        Math.max(0, subtotal - discount);
  
  
      /*
        Tax is recalculated proportionally after
        a global discount.
      */
  
      const taxRatio =
        subtotal > 0
          ? tax / subtotal
          : 0;
  
  
      const adjustedTax =
        taxableSubtotal * taxRatio;
  
  
      const total =
        taxableSubtotal + adjustedTax;
  
  
      const paid =
        Math.max(0, Number(state.amountPaid) || 0);
  
  
      const balance =
        Math.max(0, total - paid);
  
  
      return {
  
        subtotal,
  
        discount,
  
        taxableSubtotal,
  
        tax: adjustedTax,
  
        total,
  
        paid,
  
        balance
  
      };
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — RENDER ITEM EDITOR
    ========================================================== */
  
    function renderItemEditor() {
  
      const container = $("invoiceItems");
  
      if (!container) return;
  
  
      container.innerHTML = "";
  
  
      if (!state.items.length) {
  
        const empty = document.createElement("div");
  
        empty.className =
          "invoice-items-empty";
  
        empty.textContent =
          "No invoice items. Add an item to begin.";
  
        container.appendChild(empty);
  
        return;
  
      }
  
  
      state.items.forEach(item => {
  
        const row =
          document.createElement("div");
  
  
        row.className =
          "invoice-item-row";
  
  
        row.dataset.itemId =
          item.id;
  
  
        row.innerHTML = `
  
          <input
            type="text"
            class="invoice-item-description"
            placeholder="Service or product"
            value="${escapeAttribute(item.description)}"
          >
  
          <input
            type="number"
            class="invoice-item-quantity"
            min="0"
            step="0.01"
            value="${item.quantity}"
          >
  
          <input
            type="number"
            class="invoice-item-price"
            min="0"
            step="0.01"
            value="${item.unitPrice}"
          >
  
          <input
            type="number"
            class="invoice-item-tax"
            min="0"
            step="0.01"
            value="${item.taxRate}"
          >
  
          <span class="invoice-item-amount">
            ${money(calculateItem(item).total)}
          </span>
  
          <button
            type="button"
            class="invoice-remove-item"
            aria-label="Remove invoice item"
            title="Remove item"
          >
            ×
          </button>
  
        `;
  
  
        container.appendChild(row);
  
      });
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — RENDER PREVIEW ITEMS
    ========================================================== */
  
    function renderPreviewItems() {
  
      const container =
        $("previewItems");
  
  
      if (!container) return;
  
  
      container.innerHTML = "";
  
  
      if (!state.items.length) {
  
        const row =
          document.createElement("tr");
  
  
        row.innerHTML = `
  
          <td colspan="5">
            No items added.
          </td>
  
        `;
  
  
        container.appendChild(row);
  
        return;
  
      }
  
  
      state.items.forEach(item => {
  
        const calculated =
          calculateItem(item);
  
  
        const row =
          document.createElement("tr");
  
  
        row.innerHTML = `
  
          <td>
            ${escapeHTML(
              item.description ||
              "Unspecified item"
            )}
          </td>
  
          <td>
            ${formatMoney(item.quantity)}
          </td>
  
          <td>
            ${money(item.unitPrice)}
          </td>
  
          <td>
            ${formatMoney(item.taxRate)}%
          </td>
  
          <td>
            ${money(calculated.total)}
          </td>
  
        `;
  
  
        container.appendChild(row);
  
      });
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — MAIN PREVIEW
    ========================================================== */
  
    function renderPreview() {
  
      const totals =
        calculateInvoice();
  
  
      setText(
        "previewInvoiceNumber",
        state.invoiceNumber
      );
  
  
      setText(
        "previewInvoiceStatus",
        state.status.replace("-", " ").toUpperCase()
      );
  
  
      setText(
        "previewIssueDate",
        formatEATDate(state.issueDate)
      );
  
  
      setText(
        "previewDueDate",
        formatEATDate(state.dueDate)
      );
  
  
      setText(
        "previewSellerName",
        state.seller.name ||
        "River IT Solutions"
      );
  
  
      setText(
        "previewSellerAddress",
        state.seller.address ||
        "—"
      );
  
  
      setText(
        "previewSellerContact",
        [
          state.seller.email,
          state.seller.phone
        ]
        .filter(Boolean)
        .join(" · ") || "—"
      );
  
  
      setText(
        "previewSellerTax",
        state.seller.taxNumber
          ? `Tax / Reg: ${state.seller.taxNumber}`
          : "—"
      );
  
  
      setText(
        "previewClientName",
        state.client.name ||
        "Client"
      );
  
  
      setText(
        "previewClientContact",
        state.client.contact ||
        "—"
      );
  
  
      setText(
        "previewClientAddress",
        state.client.address ||
        "—"
      );
  
  
      setText(
        "previewClientEmail",
        [
          state.client.email,
          state.client.phone
        ]
        .filter(Boolean)
        .join(" · ") || "—"
      );
  
  
      setText(
        "previewClientTax",
        state.client.taxNumber
          ? `Tax / Reg: ${state.client.taxNumber}`
          : "—"
      );
  
  
      setText(
        "previewPaymentTerms",
        state.paymentTerms
      );
  
  
      setText(
        "previewPaymentMethod",
        state.paymentMethod
      );
  
  
      setText(
        "previewPaymentReference",
        state.paymentReference ||
        "—"
      );
  
  
      setText(
        "previewSubtotal",
        money(totals.subtotal)
      );
  
  
      setText(
        "previewDiscount",
        money(totals.discount)
      );
  
  
      setText(
        "previewTax",
        money(totals.tax)
      );
  
  
      setText(
        "previewTotal",
        money(totals.total)
      );
  
  
      setText(
        "previewPaid",
        money(totals.paid)
      );
  
  
      setText(
        "previewBalance",
        money(totals.balance)
      );
  
  
      setText(
        "previewPaymentInstructions",
        state.paymentInstructions ||
        "—"
      );
  
  
      setText(
        "previewNotes",
        state.notes ||
        "—"
      );
  
  
      setText(
        "previewTimestamp",
        state.issueTimestampEAT ||
        "—"
      );
  
  
      setText(
        "previewStatus",
        state.status.replace("-", " ").toUpperCase()
      );
  
  
      renderPreviewItems();
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — FORM SYNCHRONISATION
    ========================================================== */
  
    function syncFormToState() {
  
      state.invoiceNumber =
        getValue("invoiceNumber");
  
  
      state.status =
        getValue("invoiceStatus");
  
  
      state.currency =
        getValue("invoiceCurrency");
  
  
      state.paymentTerms =
        getValue("paymentTerms");
  
  
      state.issueDate =
        getValue("issueDate");
  
  
      state.dueDate =
        getValue("dueDate");
  
  
      state.discount =
        Number(
          getValue("globalDiscount")
        ) || 0;
  
  
      state.amountPaid =
        Number(
          getValue("amountPaid")
        ) || 0;
  
  
      state.paymentMethod =
        getValue("paymentMethod");
  
  
      state.paymentReference =
        getValue("paymentReference");
  
  
      state.paymentInstructions =
        getValue("paymentInstructions");
  
  
      state.notes =
        getValue("invoiceNotes");
  
  
      state.terms =
        getValue("invoiceTerms");
  
  
      state.seller = {
  
        name: getValue("sellerName"),
  
        address: getValue("sellerAddress"),
  
        email: getValue("sellerEmail"),
  
        phone: getValue("sellerPhone"),
  
        taxNumber: getValue("sellerTaxNumber")
  
      };
  
  
      state.client = {
  
        name: getValue("clientName"),
  
        contact: getValue("clientContact"),
  
        address: getValue("clientAddress"),
  
        email: getValue("clientEmail"),
  
        phone: getValue("clientPhone"),
  
        taxNumber: getValue("clientTaxNumber")
  
      };
  
    }
  
  
    /* ==========================================================
       FORM → STATE
    ========================================================== */
  
    function syncStateToForm() {
  
      setValue(
        "invoiceNumber",
        state.invoiceNumber
      );
  
  
      setValue(
        "invoiceStatus",
        state.status
      );
  
  
      setValue(
        "invoiceCurrency",
        state.currency
      );
  
  
      setValue(
        "paymentTerms",
        state.paymentTerms
      );
  
  
      setValue(
        "issueDate",
        state.issueDate
      );
  
  
      setValue(
        "dueDate",
        state.dueDate
      );
  
  
      setValue(
        "globalDiscount",
        state.discount
      );
  
  
      setValue(
        "amountPaid",
        state.amountPaid
      );
  
  
      setValue(
        "paymentMethod",
        state.paymentMethod
      );
  
  
      setValue(
        "paymentReference",
        state.paymentReference
      );
  
  
      setValue(
        "paymentInstructions",
        state.paymentInstructions
      );
  
  
      setValue(
        "invoiceNotes",
        state.notes
      );
  
  
      setValue(
        "invoiceTerms",
        state.terms
      );
  
  
      setValue(
        "sellerName",
        state.seller.name
      );
  
  
      setValue(
        "sellerAddress",
        state.seller.address
      );
  
  
      setValue(
        "sellerEmail",
        state.seller.email
      );
  
  
      setValue(
        "sellerPhone",
        state.seller.phone
      );
  
  
      setValue(
        "sellerTaxNumber",
        state.seller.taxNumber
      );
  
  
      setValue(
        "clientName",
        state.client.name
      );
  
  
      setValue(
        "clientContact",
        state.client.contact
      );
  
  
      setValue(
        "clientAddress",
        state.client.address
      );
  
  
      setValue(
        "clientEmail",
        state.client.email
      );
  
  
      setValue(
        "clientPhone",
        state.client.phone
      );
  
  
      setValue(
        "clientTaxNumber",
        state.client.taxNumber
      );
  
  
      updateCurrencyLabels();
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — CURRENCY LABELS
    ========================================================== */
  
    function updateCurrencyLabels() {
  
      setText(
        "discountCurrency",
        currencyLabel()
      );
  
  
      setText(
        "paidCurrency",
        currencyLabel()
      );
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — DUE DATE
    ========================================================== */
  
    function updateDueDateFromTerms() {
  
      const issueDate =
        getValue("issueDate");
  
  
      const terms =
        getValue("paymentTerms");
  
  
      if (!issueDate) return;
  
  
      const dueDate =
        calculateDueDate(
          issueDate,
          terms
        );
  
  
      setValue(
        "dueDate",
        dueDate
      );
  
  
      state.dueDate = dueDate;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — SAVE
    ========================================================== */
  
    function saveInvoice() {
  
      syncFormToState();
  
  
      try {
  
        localStorage.setItem(
          CONFIG.storageKey,
          JSON.stringify(state)
        );
  
  
        setText(
          "invoiceSaveState",
          "Saved"
        );
  
  
        window.setTimeout(() => {
  
          setText(
            "invoiceSaveState",
            "Ready"
          );
  
        }, 1200);
  
      } catch (error) {
  
        console.warn(
          "River invoice could not be saved.",
          error
        );
  
      }
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — LOAD
    ========================================================== */
  
    function loadInvoice() {
  
      try {
  
        const saved =
          localStorage.getItem(
            CONFIG.storageKey
          );
  
  
        if (!saved) {
  
          initializeNewInvoice();
  
          return;
  
        }
  
  
        const parsed =
          JSON.parse(saved);
  
  
        Object.assign(
          state,
          parsed
        );
  
  
        if (!Array.isArray(state.items)) {
  
          state.items = [];
  
        }
  
  
        syncStateToForm();
  
        renderItemEditor();
  
        renderPreview();
  
      } catch (error) {
  
        console.warn(
          "River invoice could not be loaded.",
          error
        );
  
  
        initializeNewInvoice();
  
      }
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — NEW INVOICE
    ========================================================== */
  
    function initializeNewInvoice() {
  
      const current =
        now();
  
  
      state.invoiceNumber =
        generateInvoiceNumber();
  
  
      state.status =
        "issued";
  
  
      state.currency =
        CONFIG.defaultCurrency;
  
  
      state.paymentTerms =
        "Net 14";
  
  
      state.issueDate =
        toDateInputValue(current);
  
  
      state.dueDate =
        calculateDueDate(
          state.issueDate,
          state.paymentTerms
        );
  
  
      /*
        Preserve the exact moment the invoice
        was generated.
      */
  
      state.issueTimestampUTC =
        current.toISOString();
  
  
      state.issueTimestampEAT =
        formatEATDateTime(current);
  
  
      state.items = [
  
        createItem()
  
      ];
  
  
      state.discount = 0;
  
      state.amountPaid = 0;
  
      state.paymentMethod =
        "Bank Transfer";
  
      state.paymentReference = "";
  
      state.paymentInstructions = "";
  
      state.notes = "";
  
  
      syncStateToForm();
  
      renderItemEditor();
  
      renderPreview();
  
      saveInvoice();
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — NEW ITEM
    ========================================================== */
  
    function addItem() {
  
      state.items.push(
        createItem()
      );
  
  
      renderItemEditor();
  
      renderPreview();
  
      saveInvoice();
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — REMOVE ITEM
    ========================================================== */
  
    function removeItem(id) {
  
      state.items =
        state.items.filter(
          item => item.id !== id
        );
  
  
      renderItemEditor();
  
      renderPreview();
  
      saveInvoice();
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — ITEM EVENTS
    ========================================================== */
  
    function handleItemInput(event) {
  
      const row =
        event.target.closest(
          ".invoice-item-row"
        );
  
  
      if (!row) return;
  
  
      const id =
        row.dataset.itemId;
  
  
      const item =
        state.items.find(
          entry => entry.id === id
        );
  
  
      if (!item) return;
  
  
      if (
        event.target.classList.contains(
          "invoice-item-description"
        )
      ) {
  
        item.description =
          event.target.value;
  
      }
  
  
      if (
        event.target.classList.contains(
          "invoice-item-quantity"
        )
      ) {
  
        item.quantity =
          Number(event.target.value) || 0;
  
      }
  
  
      if (
        event.target.classList.contains(
          "invoice-item-price"
        )
      ) {
  
        item.unitPrice =
          Number(event.target.value) || 0;
  
      }
  
  
      if (
        event.target.classList.contains(
          "invoice-item-tax"
        )
      ) {
  
        item.taxRate =
          Number(event.target.value) || 0;
  
      }
  
  
      const amount =
        row.querySelector(
          ".invoice-item-amount"
        );
  
  
      if (amount) {
  
        amount.textContent =
          money(
            calculateItem(item).total
          );
  
      }
  
  
      renderPreview();
  
      saveInvoice();
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — GLOBAL INPUT EVENTS
    ========================================================== */
  
    function handleFormInput() {
  
      syncFormToState();
  
      renderPreview();
  
      saveInvoice();
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — EXPORT
    ========================================================== */
  
    function exportInvoice() {
  
      syncFormToState();
  
  
      const exportData = {
  
        ...state,
  
        calculations:
          calculateInvoice(),
  
        metadata: {
  
          timezone:
            CONFIG.timezone,
  
          timezoneLabel:
            CONFIG.timezoneLabel,
  
          utcOffset:
            CONFIG.utcOffset,
  
          exportedAtUTC:
            new Date().toISOString(),
  
          exportedAtEAT:
            formatEATDateTime(new Date())
  
        }
  
      };
  
  
      const blob =
        new Blob(
          [
            JSON.stringify(
              exportData,
              null,
              2
            )
          ],
          {
            type:
              "application/json"
          }
        );
  
  
      const url =
        URL.createObjectURL(blob);
  
  
      const anchor =
        document.createElement("a");
  
  
      anchor.href = url;
  
  
      anchor.download =
        `${state.invoiceNumber}.json`;
  
  
      document.body.appendChild(anchor);
  
  
      anchor.click();
  
  
      anchor.remove();
  
  
      URL.revokeObjectURL(url);
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — PRINT / PDF
    ========================================================== */
  
    function printInvoice() {
  
      syncFormToState();
  
      renderPreview();
  
      window.print();
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — HTML ESCAPING
    ========================================================== */
  
    function escapeHTML(value) {
  
      return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
  
    }
  
  
    function escapeAttribute(value) {
  
      return escapeHTML(value);
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — EVENT LISTENERS
    ========================================================== */
  
    function bindEvents() {
  
  
      const addItemButton =
        $("addItemButton");
  
  
      if (addItemButton) {
  
        addItemButton.addEventListener(
          "click",
          addItem
        );
  
      }
  
  
      const newInvoiceButton =
        $("newInvoiceButton");
  
  
      if (newInvoiceButton) {
  
        newInvoiceButton.addEventListener(
          "click",
          () => {
  
            const confirmed =
              window.confirm(
                "Create a new invoice? The current invoice will remain in your browser history only if you have exported it."
              );
  
  
            if (!confirmed) return;
  
  
            initializeNewInvoice();
  
          }
        );
  
      }
  
  
      const exportButton =
        $("exportInvoiceButton");
  
  
      if (exportButton) {
  
        exportButton.addEventListener(
          "click",
          exportInvoice
        );
  
      }
  
  
      const printButton =
        $("printInvoiceButton");
  
  
      if (printButton) {
  
        printButton.addEventListener(
          "click",
          printInvoice
        );
  
      }
  
  
      const itemContainer =
        $("invoiceItems");
  
  
      if (itemContainer) {
  
        itemContainer.addEventListener(
          "input",
          handleItemInput
        );
  
  
        itemContainer.addEventListener(
          "click",
          event => {
  
            const button =
              event.target.closest(
                ".invoice-remove-item"
              );
  
  
            if (!button) return;
  
  
            const row =
              button.closest(
                ".invoice-item-row"
              );
  
  
            if (!row) return;
  
  
            removeItem(
              row.dataset.itemId
            );
  
          }
        );
  
      }
  
  
      document
        .querySelectorAll(
          ".invoice-editor input, .invoice-editor select, .invoice-editor textarea"
        )
        .forEach(element => {
  
          element.addEventListener(
            "input",
            handleFormInput
          );
  
  
          element.addEventListener(
            "change",
            event => {
  
              if (
                event.target.id ===
                "paymentTerms"
              ) {
  
                updateDueDateFromTerms();
  
              }
  
  
              if (
                event.target.id ===
                "issueDate"
              ) {
  
                updateDueDateFromTerms();
  
              }
  
  
              handleFormInput();
  
            }
          );
  
        });
  
  
      const currency =
        $("invoiceCurrency");
  
  
      if (currency) {
  
        currency.addEventListener(
          "change",
          () => {
  
            syncFormToState();
  
            updateCurrencyLabels();
  
            renderItemEditor();
  
            renderPreview();
  
            saveInvoice();
  
          }
        );
  
      }
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — START
    ========================================================== */
  
    function init() {
  
      bindEvents();
  
      loadInvoice();
  
    }
  
  
    /* ==========================================================
       BOOT
    ========================================================== */
  
    if (
      document.readyState ===
      "loading"
    ) {
  
      document.addEventListener(
        "DOMContentLoaded",
        init
      );
  
    } else {
  
      init();
  
    }
  
  
  })();