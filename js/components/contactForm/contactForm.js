/**
 * =========================================================
 * RIVER IT SOLUTIONS
 * contactForm.js
 *
 * 🟢 FULL REDEVELOPMENT / CONTACT FORM SYSTEM
 *
 * Existing systems preserved:
 * - intl-tel-input
 * - E.164 phone storage
 * - real-time validation
 * - custom select system
 * - keyboard accessibility
 * - conditional IT team logic
 * - budget qualification
 * - Formspree submission
 * - double-submit protection
 * - GSAP interaction
 *
 * 🟢 NEW UPGRADES:
 * - WhatsApp fast-track contact
 * - Pre-filled WhatsApp project summary
 * - Book a Consultation path
 * - Contact-path tracking
 * - Better WhatsApp validation
 * - Better form-state handling
 * - Better error handling
 * - Better accessibility
 * - Better custom-select handling
 * - Better conditional-field handling
 * =========================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  "use strict";


  /* =====================================================
     DOM REFERENCES
  ===================================================== */

  const form =
      document.getElementById("contactForm");

  const status =
      document.getElementById("formStatus");

  const phoneInput =
      document.getElementById("phone");

  const phoneE164Input =
      document.getElementById("phone_e164");

  const teamCapacityGroup =
      document.getElementById("teamCapacityGroup");

  const hasTeamInput =
      document.getElementById("hasTeam");

  const whatsappButton =
      document.getElementById("whatsappContactButton");

  const consultationButton =
      document.getElementById("consultationButton");


  if (!form) {

      console.warn(
          "River Contact Form: #contactForm was not found."
      );

      return;
  }


  /* =====================================================
     🟢 UPGRADE:
     CONTACT CHANNEL CONFIGURATION
  ===================================================== */

  /*
   * IMPORTANT:
   *
   * Replace this with River's real WhatsApp number.
   *
   * Format:
   *
   * 2547XXXXXXXX
   *
   * Do NOT include:
   * + 
   * spaces
   * brackets
   * hyphens
   */

  const WHATSAPP_NUMBER =
      "254708790116";


  /*
   * 🟢 UPGRADE:
   * Consultation booking URL.
   *
   * Leave empty if you have not connected
   * Calendly / Cal.com / another booking system yet.
   *
   * If empty, the consultation button will
   * fall back to WhatsApp.
   */

  const CONSULTATION_URL =
      "";


  /* =====================================================
     🟢 UPGRADE:
     FORM STATE
  ===================================================== */

  let isSubmitting = false;

  let iti = null;


  /* =====================================================
     🟢 UPGRADE:
     STATUS SYSTEM
  ===================================================== */

  function setStatus(
      message,
      type = ""
  ) {

      if (!status) {
          return;
      }


      status.textContent =
          message;


      status.classList.remove(
          "success",
          "error"
      );


      if (type) {

          status.classList.add(
              type
          );
      }
  }


  /* =====================================================
     🟢 UPGRADE:
     SAFE FIELD VALUE HELPER
  ===================================================== */

  function getFieldValue(
      selector
  ) {

      const field =
          form.querySelector(
              selector
          );


      if (!field) {
          return "";
      }


      return String(
          field.value || ""
      ).trim();
  }


  /* =====================================================
     🟢 UPGRADE:
     GET CUSTOM SELECT VALUE
  ===================================================== */

  function getSelectValue(
      selector
  ) {

      const select =
          form.querySelector(
              selector
          );


      if (!select) {
          return "";
      }


      const hiddenInput =
          select.querySelector(
              "input[type='hidden']"
          );


      if (hiddenInput) {

          return String(
              hiddenInput.value || ""
          ).trim();
      }


      return "";
  }


  /* =====================================================
     🟢 UPGRADE:
     STATUS MESSAGE
  ===================================================== */

  function clearStatus() {

      if (!status) {
          return;
      }


      status.textContent =
          "";


      status.classList.remove(
          "success",
          "error"
      );
  }


  /* =====================================================
     🟢 UPGRADE:
     FIELD VALIDATION
  ===================================================== */

  function validateField(
      field
  ) {

      if (!field) {
          return true;
      }


      field.classList.remove(
          "valid",
          "invalid"
      );


      /*
       * Hidden fields should not
       * participate in validation.
       */

      if (
          field.type === "hidden" ||
          field.closest(".hidden") ||
          field.closest("[hidden]")
      ) {

          return true;
      }


      /*
       * Disabled fields should not
       * participate in validation.
       */

      if (field.disabled) {
          return true;
      }


      /*
       * Checkbox validation.
       */

      if (
          field.type ===
          "checkbox"
      ) {

          if (
              field.required &&
              !field.checked
          ) {

              field.classList.add(
                  "invalid"
              );

              return false;
          }


          return true;
      }


      /*
       * Empty optional fields
       * are valid.
       */

      if (
          !field.required &&
          !String(
              field.value || ""
          ).trim()
      ) {

          return true;
      }


      /*
       * HTML5 validation.
       */

      const valid =
          field.checkValidity();


      if (valid) {

          field.classList.add(
              "valid"
          );

      } else {

          field.classList.add(
              "invalid"
          );
      }


      return valid;
  }


  /* =====================================================
     🟢 UPGRADE:
     NORMAL INPUT EVENTS
  ===================================================== */

  const normalInputs =
      form.querySelectorAll(
          ".input:not(#phone)"
      );


  normalInputs.forEach(
      (input) => {

          input.addEventListener(
              "input",
              () => {

                  validateField(
                      input
                  );
              }
          );


          input.addEventListener(
              "blur",
              () => {

                  validateField(
                      input
                  );
              }
          );


          /*
           * GSAP interaction.
           */

          input.addEventListener(
              "focus",
              () => {

                  if (
                      typeof gsap !==
                      "undefined"
                  ) {

                      gsap.to(
                          input,
                          {
                              scale: 1.01,
                              duration: 0.2,
                              overwrite: true
                          }
                      );
                  }
              }
          );


          input.addEventListener(
              "blur",
              () => {

                  if (
                      typeof gsap !==
                      "undefined"
                  ) {

                      gsap.to(
                          input,
                          {
                              scale: 1,
                              duration: 0.2,
                              overwrite: true
                          }
                      );
                  }
              }
          );

      }
  );


  /* =====================================================
     🟢 UPGRADE:
     INTL TELEPHONE INPUT
  ===================================================== */

  if (
      phoneInput &&
      typeof window.intlTelInput ===
      "function"
  ) {

      iti =
          window.intlTelInput(
              phoneInput,
              {

                  initialCountry: "ke",

                  preferredCountries: [
                      "ke",
                      "us",
                      "gb",
                      "in"
                  ],

                  separateDialCode:
                      true,

                  nationalMode:
                      true,

                  autoPlaceholder:
                      "polite",

                  formatOnDisplay:
                      true,

                  utilsScript:
                      "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
              }
          );


      /* =================================================
         PHONE VALIDATION
      ================================================= */

      function validatePhone() {

          phoneInput.classList.remove(
              "valid",
              "invalid"
          );


          const value =
              phoneInput.value.trim();


          if (!value) {

              if (
                  phoneInput.required
              ) {

                  phoneInput.classList.add(
                      "invalid"
                  );

                  return false;
              }


              return true;
          }


          if (
              iti.isValidNumber()
          ) {

              phoneInput.classList.add(
                  "valid"
              );

              return true;
          }


          phoneInput.classList.add(
              "invalid"
          );


          return false;
      }


      /* =================================================
         🟢 UPGRADE:
         COUNTRY CHANGE
      ================================================= */

      phoneInput.addEventListener(
          "countrychange",
          () => {

              phoneInput.value =
                  "";


              phoneInput.classList.remove(
                  "valid",
                  "invalid"
              );


              if (
                  phoneE164Input
              ) {

                  phoneE164Input.value =
                      "";
              }
          }
      );


      /* =================================================
         🟢 UPGRADE:
         LIVE PHONE VALIDATION
      ================================================= */

      phoneInput.addEventListener(
          "input",
          () => {

              validatePhone();
          }
      );


      phoneInput.addEventListener(
          "blur",
          () => {

              validatePhone();
          }
      );


      /* =================================================
         🟢 UPGRADE:
         CLEAN PHONE PASTE
      ================================================= */

      phoneInput.addEventListener(
          "paste",
          (event) => {

              event.preventDefault();


              const clipboard =
                  event.clipboardData ||
                  window.clipboardData;


              if (!clipboard) {
                  return;
              }


              const pastedValue =
                  clipboard.getData(
                      "text"
                  );


              const cleaned =
                  pastedValue.replace(
                      /[^\d+]/g,
                      ""
                  );


              let formatted =
                  cleaned;


              /*
               * Keep only one +
               * and only at the beginning.
               */

              if (
                  formatted.includes("+")
              ) {

                  formatted =
                      "+" +
                      formatted
                          .replace(
                              /\+/g,
                              ""
                          );
              }


              phoneInput.value =
                  formatted;


              validatePhone();
          }
      );


      /* =================================================
         🟢 UPGRADE:
         BLOCK INVALID PHONE KEYS
      ================================================= */

      phoneInput.addEventListener(
          "keydown",
          (event) => {

              const allowedKeys = [

                  "Backspace",
                  "Delete",
                  "ArrowLeft",
                  "ArrowRight",
                  "ArrowUp",
                  "ArrowDown",
                  "Tab",
                  "Home",
                  "End"

              ];


              if (
                  allowedKeys.includes(
                      event.key
                  )
              ) {

                  return;
              }


              if (
                  event.ctrlKey ||
                  event.metaKey
              ) {

                  return;
              }


              /*
               * Allow + only at
               * the beginning.
               */

              if (
                  event.key === "+"
              ) {

                  if (
                      phoneInput.selectionStart ===
                      0 &&
                      !phoneInput.value.includes("+")
                  ) {

                      return;
                  }


                  event.preventDefault();

                  return;
              }


              /*
               * Allow digits only.
               */

              if (
                  !/^\d$/.test(
                      event.key
                  )
              ) {

                  event.preventDefault();
              }

          }
      );


  } else {

      console.warn(
          "River Contact Form: intl-tel-input could not initialise."
      );
  }


  /* =====================================================
     🟢 UPGRADE:
     CUSTOM SELECT SYSTEM
  ===================================================== */

  const customSelects =
      form.querySelectorAll(
          ".custom-select"
      );


  function closeAllSelects(
      except = null
  ) {

      customSelects.forEach(
          (select) => {

              if (
                  select ===
                  except
              ) {

                  return;
              }


              select.classList.remove(
                  "open"
              );


              const trigger =
                  select.querySelector(
                      ".select-trigger"
                  );


              if (trigger) {

                  trigger.setAttribute(
                      "aria-expanded",
                      "false"
                  );
              }
          }
      );
  }


  function updateSelectState(
      select,
      value
  ) {

      const group =
          select.closest(
              ".form-group"
          );


      if (value) {

          select.classList.add(
              "has-value",
              "valid"
          );


          select.classList.remove(
              "invalid"
          );


          if (group) {

              group.classList.add(
                  "has-value"
              );
          }

      } else {

          select.classList.remove(
              "has-value",
              "valid"
          );


          if (group) {

              group.classList.remove(
                  "has-value"
              );
          }
      }
  }


  function setSelectValue(
      select,
      option
  ) {

      if (
          !select ||
          !option
      ) {

          return;
      }


      const hiddenInput =
          select.querySelector(
              "input[type='hidden']"
          );


      const trigger =
          select.querySelector(
              ".select-trigger"
          );


      const triggerText =
          trigger
              ? trigger.querySelector(
                  ".select-trigger-text"
              )
              : null;


      const value =
          option.dataset.value ||
          option.getAttribute(
              "data-value"
          ) ||
          option.textContent.trim();


      const label =
          option.textContent.trim();


      if (hiddenInput) {

          hiddenInput.value =
              value;


          hiddenInput.dispatchEvent(
              new Event(
                  "change",
                  {
                      bubbles: true
                  }
              )
          );
      }


      if (triggerText) {

          triggerText.textContent =
              label;

      } else if (trigger) {

          /*
           * Preserve icons or other
           * elements inside trigger
           * when possible.
           */

          const textNode =
              Array.from(
                  trigger.childNodes
              ).find(
                  (node) =>
                      node.nodeType ===
                      Node.TEXT_NODE
              );


          if (textNode) {

              textNode.textContent =
                  label;
          }
      }


      select.dataset.value =
          value;


      updateSelectState(
          select,
          value
      );


      select.classList.remove(
          "open"
      );


      if (trigger) {

          trigger.setAttribute(
              "aria-expanded",
              "false"
          );
      }


      /*
       * Team logic can depend on
       * custom-select values.
       */

      updateTeamCapacity();
  }


  customSelects.forEach(
      (select) => {

          const trigger =
              select.querySelector(
                  ".select-trigger"
              );


          const options =
              select.querySelectorAll(
                  ".select-option"
              );


          if (!trigger) {
              return;
          }


          trigger.setAttribute(
              "aria-expanded",
              "false"
          );


          trigger.addEventListener(
              "click",
              (event) => {

                  event.preventDefault();
                  event.stopPropagation();


                  const isOpen =
                      select.classList.contains(
                          "open"
                      );


                  closeAllSelects(
                      select
                  );


                  if (!isOpen) {

                      select.classList.add(
                          "open"
                      );


                      trigger.setAttribute(
                          "aria-expanded",
                          "true"
                      );
                  }
              }
          );


          trigger.addEventListener(
              "keydown",
              (event) => {

                  if (
                      event.key ===
                      "Enter" ||
                      event.key ===
                      " "
                  ) {

                      event.preventDefault();

                      trigger.click();

                  } else if (
                      event.key ===
                      "Escape"
                  ) {

                      select.classList.remove(
                          "open"
                      );

                      trigger.setAttribute(
                          "aria-expanded",
                          "false"
                      );
                  }
              }
          );


          options.forEach(
              (option) => {

                  option.addEventListener(
                      "click",
                      () => {

                          setSelectValue(
                              select,
                              option
                          );
                      }
                  );


                  option.addEventListener(
                      "keydown",
                      (event) => {

                          if (
                              event.key ===
                              "Enter" ||
                              event.key ===
                              " "
                          ) {

                              event.preventDefault();

                              setSelectValue(
                                  select,
                                  option
                              );
                          }
                      }
                  );

              }
          );


          /*
           * Restore initial value
           * if one already exists.
           */

          const hiddenInput =
              select.querySelector(
                  "input[type='hidden']"
              );


          if (
              hiddenInput &&
              hiddenInput.value
          ) {

              const matchingOption =
                  Array.from(
                      options
                  ).find(
                      (option) =>
                          (
                              option.dataset.value ||
                              ""
                          ) ===
                          hiddenInput.value
                  );


              if (
                  matchingOption
              ) {

                  setSelectValue(
                      select,
                      matchingOption
                  );
              }
          }

      }
  );


  /* =====================================================
     🟢 UPGRADE:
     CLOSE SELECTS WHEN CLICKING OUTSIDE
  ===================================================== */

  document.addEventListener(
      "click",
      () => {

          closeAllSelects();
      }
  );


  /* =====================================================
     🟢 UPGRADE:
     CUSTOM SELECT VALIDATION
  ===================================================== */

  function validateCustomSelects() {

      let valid = true;


      customSelects.forEach(
          (select) => {

              const hiddenInput =
                  select.querySelector(
                      "input[type='hidden']"
                  );


              if (!hiddenInput) {
                  return;
              }


              const value =
                  String(
                      hiddenInput.value ||
                      ""
                  ).trim();


              const isRequired =
                  hiddenInput.required ||
                  select.dataset.required ===
                  "true";


              if (
                  isRequired &&
                  !value
              ) {

                  select.classList.add(
                      "invalid"
                  );

                  select.classList.remove(
                      "valid"
                  );


                  valid = false;

              } else if (value) {

                  select.classList.add(
                      "valid"
                  );

                  select.classList.remove(
                      "invalid"
                  );
              }
          }
      );


      return valid;
  }


  /* =====================================================
     🟢 UPGRADE:
     TEAM CAPACITY CONDITIONAL FIELD
  ===================================================== */

  function getHasTeamValue() {

      /*
       * First attempt:
       * regular input.
       */

      if (hasTeamInput) {

          return String(
              hasTeamInput.value ||
              ""
          ).trim().toLowerCase();
      }


      /*
       * Second attempt:
       * custom select.
       */

      const customValue =
          getSelectValue(
              "#hasTeamSelect"
          );


      return customValue
          .toLowerCase();
  }


  function updateTeamCapacity() {

      if (
          !teamCapacityGroup
      ) {

          return;
      }


      const value =
          getHasTeamValue();


      const teamExists =
          value === "yes" ||
          value === "true" ||
          value === "have-team" ||
          value === "existing-team" ||
          value === "i-have-a-team";


      if (teamExists) {

          teamCapacityGroup.classList.remove(
              "hidden"
          );


          teamCapacityGroup.hidden =
              false;


          const teamCapacityInput =
              teamCapacityGroup.querySelector(
                  "input, select, textarea"
              );


          if (
              teamCapacityInput
          ) {

              teamCapacityInput.disabled =
                  false;
          }

      } else {

          teamCapacityGroup.classList.add(
              "hidden"
          );


          teamCapacityGroup.hidden =
              true;


          const teamCapacityInput =
              teamCapacityGroup.querySelector(
                  "input, select, textarea"
              );


          if (
              teamCapacityInput
          ) {

              teamCapacityInput.disabled =
                  true;


              teamCapacityInput.classList.remove(
                  "valid",
                  "invalid"
              );


              /*
               * Do not leave stale
               * team capacity data.
               */

              if (
                  teamCapacityInput.type !==
                  "hidden"
              ) {

                  teamCapacityInput.value =
                      "";
              }
          }
      }
  }


  /*
   * Existing hasTeam field.
   */

  if (hasTeamInput) {

      hasTeamInput.addEventListener(
          "change",
          updateTeamCapacity
      );


      hasTeamInput.addEventListener(
          "input",
          updateTeamCapacity
      );
  }


  /*
   * Custom select containing
   * hasTeam.
   */

  const hasTeamSelect =
      form.querySelector(
          "#hasTeamSelect"
      );


  if (hasTeamSelect) {

      const hidden =
          hasTeamSelect.querySelector(
              "input[type='hidden']"
          );


      if (hidden) {

          hidden.addEventListener(
              "change",
              updateTeamCapacity
          );
      }
  }


  updateTeamCapacity();


  /* =====================================================
     🟢 UPGRADE:
     FORM VALIDATION
  ===================================================== */

  function validateForm() {

      let valid = true;


      /*
       * Normal fields.
       */

      const fields =
          form.querySelectorAll(
              ".input:not(#phone), input[type='checkbox'], textarea"
          );


      fields.forEach(
          (field) => {

              /*
               * Skip disabled fields.
               */

              if (field.disabled) {
                  return;
              }


              const fieldValid =
                  validateField(
                      field
                  );


              if (
                  !fieldValid
              ) {

                  valid = false;
              }
          }
      );


      /*
       * Custom selects.
       */

      if (
          !validateCustomSelects()
      ) {

          valid = false;
      }


      /*
       * Phone.
       */

      if (
          iti &&
          phoneInput
      ) {

          const phoneValue =
              phoneInput.value.trim();


          const phoneRequired =
              phoneInput.required;


          if (
              phoneRequired ||
              phoneValue
          ) {

              const phoneValid =
                  iti.isValidNumber();


              if (
                  !phoneValid
              ) {

                  phoneInput.classList.add(
                      "invalid"
                  );

                  phoneInput.classList.remove(
                      "valid"
                  );


                  valid = false;

              } else {

                  phoneInput.classList.add(
                      "valid"
                  );

                  phoneInput.classList.remove(
                      "invalid"
                  );
              }
          }
      }


      return valid;
  }


  /* =====================================================
     🟢 UPGRADE:
     GET FORM DATA FOR WHATSAPP
  ===================================================== */

  function getWhatsAppData() {

      return {

          firstName:
              getFieldValue(
                  "#firstName"
              ),

          lastName:
              getFieldValue(
                  "#lastName"
              ),

          email:
              getFieldValue(
                  "#email"
              ),

          phone:
              iti && phoneInput &&
              phoneInput.value.trim()
                  ? iti.getNumber()
                  : getFieldValue(
                      "#phone_e164"
                  ),

          projectType:
              getSelectValue(
                  "#projectType"
              ),

          solutionCategory:
              getSelectValue(
                  "#solutionCategory"
              ),

          budget:
              getSelectValue(
                  "#budget"
              ),

          urgency:
              getSelectValue(
                  "#urgency"
              ),

          architecture:
              getSelectValue(
                  "#architecture"
              ),

          scalability:
              getSelectValue(
                  "#scalability"
              ),

          modularity:
              getSelectValue(
                  "#modularity"
              ),

          hasTeam:
              getSelectValue(
                  "#hasTeamSelect"
              ) ||
              getFieldValue(
                  "#hasTeam"
              ),

          teamCapacity:
              getFieldValue(
                  "#teamCapacity"
              ),

          capabilities:
              getFieldValue(
                  "#capabilities"
              ),

          projectObjective:
              getFieldValue(
                  "#projectObjective"
              ),

          intendedUsers:
              getFieldValue(
                  "#intendedUsers"
              ),

          integrations:
              getFieldValue(
                  "#integrations"
              ),

          technicalEnvironment:
              getFieldValue(
                  "#technicalEnvironment"
              ),

          description:
              getFieldValue(
                  "#description"
              ),

          message:
              getFieldValue(
                  "#message"
              )
      };
  }


  /* =====================================================
     🟢 UPGRADE:
     WHATSAPP MESSAGE BUILDER
  ===================================================== */

  function buildWhatsAppMessage() {

      const data =
          getWhatsAppData();


      const name =
          [
              data.firstName,
              data.lastName
          ]
              .filter(Boolean)
              .join(" ");


      const lines = [

          "Hi, I'm interested in working with River IT Solutions.",

          "",

          name
              ? `Name: ${name}`
              : "",

          data.email
              ? `Email: ${data.email}`
              : "",

          data.phone
              ? `Phone: ${data.phone}`
              : "",

          data.projectType
              ? `Project type: ${data.projectType}`
              : "",

          data.solutionCategory
              ? `Solution category: ${data.solutionCategory}`
              : "",

          data.budget
              ? `Budget: ${data.budget}`
              : "",

          data.urgency
              ? `Timeline: ${data.urgency}`
              : "",

          data.architecture
              ? `Architecture: ${data.architecture}`
              : "",

          data.scalability
              ? `Scalability: ${data.scalability}`
              : "",

          data.modularity
              ? `Modularity: ${data.modularity}`
              : "",

          data.hasTeam
              ? `Existing team: ${data.hasTeam}`
              : "",

          data.teamCapacity
              ? `Team capacity: ${data.teamCapacity}`
              : "",

          data.capabilities
              ? `Required capabilities: ${data.capabilities}`
              : "",

          data.projectObjective
              ? `Project objective: ${data.projectObjective}`
              : "",

          data.intendedUsers
              ? `Intended users: ${data.intendedUsers}`
              : "",

          data.integrations
              ? `Integrations: ${data.integrations}`
              : "",

          data.technicalEnvironment
              ? `Technical environment: ${data.technicalEnvironment}`
              : "",

          data.description
              ? `Project description: ${data.description}`
              : "",

          data.message
              ? `Additional message: ${data.message}`
              : "",

          "",

          "I'd like to discuss the project with your team."
      ];


      return lines
          .filter(
              (line) =>
                  line !== null &&
                  line !== undefined
          )
          .join("\n");
  }


  /* =====================================================
     🟢 UPGRADE:
     WHATSAPP NUMBER VALIDATION
  ===================================================== */

  function isValidWhatsAppNumber() {

      return (
          /^\d{8,15}$/.test(
              WHATSAPP_NUMBER
          ) &&
          !WHATSAPP_NUMBER.includes(
              "XXXXXXXX"
          )
      );
  }


  /* =====================================================
     🟢 UPGRADE:
     OPEN WHATSAPP
  ===================================================== */

  function openWhatsApp() {

      if (
          !isValidWhatsAppNumber()
      ) {

          setStatus(
              "WhatsApp is not configured yet. Please use the project request form.",
              "error"
          );


          console.warn(
              "River Contact Form: Configure WHATSAPP_NUMBER in contactForm.js."
          );


          return;
      }


      const message =
          buildWhatsAppMessage();


      const encodedMessage =
          encodeURIComponent(
              message
          );


      const whatsappURL =
          `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


      /*
       * Track the selected
       * contact path.
       */

      setContactPath(
          "whatsapp"
      );


      /*
       * Open in a new tab/window.
       */

      window.open(
          whatsappURL,
          "_blank",
          "noopener,noreferrer"
      );
  }


  /* =====================================================
     🟢 UPGRADE:
     CONSULTATION PATH
  ===================================================== */

  function openConsultation() {

      setContactPath(
          "consultation"
      );


      /*
       * If a booking URL exists,
       * use it.
       */

      if (
          CONSULTATION_URL &&
          /^https?:\/\//i.test(
              CONSULTATION_URL
          )
      ) {

          window.open(
              CONSULTATION_URL,
              "_blank",
              "noopener,noreferrer"
          );


          return;
      }


      /*
       * Otherwise use WhatsApp
       * with a consultation-specific
       * message.
       */

      if (
          !isValidWhatsAppNumber()
      ) {

          setStatus(
              "Consultation booking is not configured yet. Please use the project request form.",
              "error"
          );


          return;
      }


      const data =
          getWhatsAppData();


      const name =
          [
              data.firstName,
              data.lastName
          ]
              .filter(Boolean)
              .join(" ");


      const lines = [

          "Hi, I'd like to book a consultation with River IT Solutions.",

          "",

          name
              ? `Name: ${name}`
              : "",

          data.email
              ? `Email: ${data.email}`
              : "",

          data.phone
              ? `Phone: ${data.phone}`
              : "",

          data.projectType
              ? `Project type: ${data.projectType}`
              : "",

          data.budget
              ? `Budget: ${data.budget}`
              : "",

          data.urgency
              ? `Timeline: ${data.urgency}`
              : "",

          data.projectObjective
              ? `Objective: ${data.projectObjective}`
              : "",

          "",

          "I'd like to discuss the project and determine the right technical approach."
      ];


      const message =
          lines.join("\n");


      const whatsappURL =
          `https://wa.me/${WHATSAPP_NUMBER}?text=${
              encodeURIComponent(
                  message
              )
          }`;


      window.open(
          whatsappURL,
          "_blank",
          "noopener,noreferrer"
      );
  }


  /* =====================================================
     🟢 UPGRADE:
     CONTACT PATH TRACKING
  ===================================================== */

  function setContactPath(
      path
  ) {

      let input =
          form.querySelector(
              "input[name='contact_path']"
          );


      if (!input) {

          input =
              document.createElement(
                  "input"
              );


          input.type =
              "hidden";


          input.name =
              "contact_path";


          form.appendChild(
              input
          );
      }


      input.value =
          path;
  }


  /* =====================================================
     🟢 UPGRADE:
     WHATSAPP BUTTON EVENT
  ===================================================== */

  if (
      whatsappButton
  ) {

      whatsappButton.addEventListener(
          "click",
          (event) => {

              event.preventDefault();


              openWhatsApp();
          }
      );
  }


  /* =====================================================
     🟢 UPGRADE:
     CONSULTATION BUTTON EVENT
  ===================================================== */

  if (
      consultationButton
  ) {

      consultationButton.addEventListener(
          "click",
          (event) => {

              event.preventDefault();


              openConsultation();
          }
      );
  }


  /* =====================================================
     🟢 UPGRADE:
     SUBMIT BUTTON STATE
  ===================================================== */

  function setSubmittingState(
      submitting
  ) {

      form.classList.toggle(
          "is-submitting",
          submitting
      );


      const submitButton =
          form.querySelector(
              ".submit-button"
          );


      if (
          submitButton
      ) {

          submitButton.disabled =
              submitting;


          /*
           * Preserve original label.
           */

          if (
              !submitButton.dataset
                  .originalText
          ) {

              submitButton.dataset
                  .originalText =
                  submitButton.textContent
                      .trim();
          }


          submitButton.textContent =
              submitting
                  ? "Sending…"
                  : submitButton.dataset
                      .originalText;
      }


      /*
       * Prevent accidental duplicate
       * WhatsApp / consultation clicks
       * while submitting.
       */

      if (
          whatsappButton
      ) {

          whatsappButton.disabled =
              submitting;
      }


      if (
          consultationButton
      ) {

          consultationButton.disabled =
              submitting;
      }
  }


  /* =====================================================
     🟢 UPGRADE:
     FORM SUBMISSION
  ===================================================== */

  form.addEventListener(
      "submit",
      async (event) => {

          event.preventDefault();


          if (
              isSubmitting
          ) {

              return;
          }


          clearStatus();


          /*
           * Form path is the
           * structured lead route.
           */

          setContactPath(
              "project_request"
          );


          const valid =
              validateForm();


          if (!valid) {

              setStatus(
                  "Please complete all required fields correctly.",
                  "error"
              );


              /*
               * Bring first invalid
               * field into view.
               */

              const firstInvalid =
                  form.querySelector(
                      ".invalid"
                  );


              if (
                  firstInvalid
              ) {

                  firstInvalid.scrollIntoView(
                      {
                          behavior:
                              "smooth",

                          block:
                              "center"
                      }
                  );


                  /*
                   * Focus the field when
                   * possible.
                   */

                  if (
                      typeof firstInvalid
                          .focus ===
                      "function"
                  ) {

                      setTimeout(
                          () => {

                              try {

                                  firstInvalid.focus(
                                      {
                                          preventScroll:
                                              true
                                      }
                                  );

                              } catch (
                                  error
                              ) {

                                  firstInvalid.focus();
                              }

                          },
                          400
                      );
                  }
              }


              return;
          }


          /* =================================================
             PHONE E.164
          ================================================= */

          if (
              iti &&
              phoneE164Input &&
              phoneInput &&
              phoneInput.value.trim()
          ) {

              const e164 =
                  iti.getNumber();


              phoneE164Input.value =
                  e164;
          }


          /* =================================================
             🟢 UPGRADE:
             SUBMISSION STATE
          ================================================= */

          isSubmitting =
              true;


          setSubmittingState(
              true
          );


          setStatus(
              "Sending your project request…"
          );


          /* =================================================
             FORM DATA
          ================================================= */

          const formData =
              new FormData(
                  form
              );


          /*
           * Ensure contact path
           * is included.
           */

          formData.set(
              "contact_path",
              "project_request"
          );


          /* =================================================
             FORMSPREE
          ================================================= */

          try {

              const response =
                  await fetch(
                      form.action,
                      {
                          method:
                              "POST",

                          body:
                              formData,

                          headers:
                              {
                                  Accept:
                                      "application/json"
                              }
                      }
                  );


              if (
                  response.ok
              ) {

                  setStatus(
                      "Request sent successfully. We will get back to you within 24 hours.",
                      "success"
                  );


                  /*
                   * 🟢 UPGRADE:
                   * Successful submission
                   * redirect.
                   */

                  setTimeout(
                      () => {

                          window.location.href =
                              "thankYou.html";

                      },
                      700
                  );


                  return;
              }


              /*
               * Formspree can return
               * structured errors.
               */

              let errorMessage =
                  "Submission failed. Please try again.";


              try {

                  const data =
                      await response.json();


                  if (
                      data &&
                      Array.isArray(
                          data.errors
                      )
                  ) {

                      const messages =
                          data.errors
                              .map(
                                  (error) =>
                                      error &&
                                      error.message
                                          ? error.message
                                          : ""
                              )
                              .filter(Boolean);


                      if (
                          messages.length
                      ) {

                          errorMessage =
                              messages.join(
                                  ", "
                              );
                      }
                  }

              } catch (
                  parseError
              ) {

                  /*
                   * Keep generic error.
                   */
              }


              setStatus(
                  errorMessage,
                  "error"
              );


          } catch (
              error
          ) {

              console.error(
                  "River Contact Form Error:",
                  error
              );


              setStatus(
                  "Network error. Please check your connection and try again.",
                  "error"
              );


          } finally {

              isSubmitting =
                  false;


              setSubmittingState(
                  false
              );
          }

      }
  );


  /* =====================================================
     🟢 UPGRADE:
     ENTERPRISE-FRIENDLY KEYBOARD SUPPORT
  ===================================================== */

  document.addEventListener(
      "keydown",
      (event) => {

          if (
              event.key !==
              "Escape"
          ) {

              return;
          }


          closeAllSelects();
      }
  );


  /* =====================================================
     🟢 UPGRADE:
     INITIAL CUSTOM SELECT STATE
  ===================================================== */

  customSelects.forEach(
      (select) => {

          const hiddenInput =
              select.querySelector(
                  "input[type='hidden']"
              );


          if (
              hiddenInput &&
              hiddenInput.value
          ) {

              updateSelectState(
                  select,
                  hiddenInput.value
              );
          }
      }
  );


  /* =====================================================
     🟢 UPGRADE:
     INITIAL FORM STATE
  ===================================================== */

  updateTeamCapacity();


  /* =====================================================
     🟢 UPGRADE:
     DEBUG / INITIALISATION MESSAGE
  ===================================================== */

  console.log(
      "River Contact Form: fully initialised."
  );

});