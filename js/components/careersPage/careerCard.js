/* ============================================================
   RIVER — CAREER CARD
   careerCard.js

   🟢 UPGRADE — Reusable Career Card Web Component

   Usage:

   <career-card slug="software-engineer"></career-card>

   Data source:

   window.RIVER_CAREERS
   window.RiverCareers
   ============================================================ */


   (function () {

    "use strict";
  
  
    /* ==========================================================
       🟢 COMPONENT
       ========================================================== */
  
    class CareerCard extends HTMLElement {
  
  
      constructor() {
  
        super();
  
        this.attachShadow({
          mode: "open"
        });
  
      }
  
  
      connectedCallback() {
  
        this.render();
  
      }
  
  
      /* ========================================================
         🟢 UPGRADE — ROLE LOOKUP
         ======================================================== */
  
      get role() {
  
        const slug =
          this.getAttribute("slug");
  
  
        if (
          !slug ||
          !window.RiverCareers ||
          typeof window.RiverCareers.getRoleBySlug !== "function"
        ) {
  
          return null;
  
        }
  
  
        return (
          window.RiverCareers.getRoleBySlug(slug)
        );
  
      }
  
  
      /* ========================================================
         🟢 UPGRADE — HTML ESCAPING
         ======================================================== */
  
      escapeHTML(value) {
  
        if (
          value === null ||
          value === undefined
        ) {
  
          return "";
  
        }
  
  
        return String(value)
  
          .replace(
            /&/g,
            "&amp;"
          )
  
          .replace(
            /</g,
            "&lt;"
          )
  
          .replace(
            />/g,
            "&gt;"
          )
  
          .replace(
            /"/g,
            "&quot;"
          )
  
          .replace(
            /'/g,
            "&#039;"
          );
  
      }
  
  
      /* ========================================================
         🟢 UPGRADE — ROLE URL
         ======================================================== */
  
      getRoleUrl(role) {
  
        if (
          window.RiverCareers &&
          typeof window.RiverCareers.getRolePageUrl === "function"
        ) {
  
          return (
            window.RiverCareers.getRolePageUrl(
              role.slug
            )
          );
  
        }
  
  
        return (
          "career-role.html?role=" +
          encodeURIComponent(role.slug)
        );
  
      }
  
  
      /* ========================================================
         🟢 UPGRADE — RENDER
         ======================================================== */
  
      render() {
  
        const role =
          this.role;
  
  
        if (!role) {
  
          this.shadowRoot.innerHTML = "";
  
          return;
  
        }
  
  
        const title =
          this.escapeHTML(
            role.title
          );
  
  
        const department =
          this.escapeHTML(
            role.department || "River"
          );
  
  
        const type =
          this.escapeHTML(
            role.type || "Role"
          );
  
  
        const location =
          this.escapeHTML(
            role.location || "Flexible"
          );
  
  
        const workMode =
          this.escapeHTML(
            role.workMode || ""
          );
  
  
        const summary =
          this.escapeHTML(
            role.summary || ""
          );
  
  
        const experienceLevel =
          this.escapeHTML(
            role.experienceLevel || ""
          );
  
  
        const href =
          this.escapeHTML(
            this.getRoleUrl(role)
          );
  
  
        const featuredClass =
          role.featured
            ? " career-card--featured"
            : "";
  
  
        const slug =
          this.escapeHTML(
            role.slug
          );
  
  
        this.shadowRoot.innerHTML = `
  
          <style>
  
            :host {
  
              display:
                block;
  
            }
  
  
            * {
  
              box-sizing:
                border-box;
  
            }
  
  
            .career-card {
  
              position:
                relative;
  
              display:
                grid;
  
              grid-template-columns:
                minmax(0, 1fr)
                auto;
  
              gap:
                2rem;
  
              width:
                100%;
  
              padding:
                clamp(
                  1.5rem,
                  3vw,
                  2.5rem
                );
  
              background:
                rgba(
                  255,
                  255,
                  255,
                  0.72
                );
  
              border:
                1px solid
                rgba(
                  16,
                  20,
                  19,
                  0.10
                );
  
              border-radius:
                clamp(
                  1rem,
                  2vw,
                  1.5rem
                );
  
              box-shadow:
                0
                8px
                30px
                rgba(
                  16,
                  20,
                  19,
                  0.04
                );
  
              transition:
                transform 220ms ease,
                box-shadow 220ms ease,
                border-color 220ms ease,
                background 220ms ease;
  
              overflow:
                hidden;
  
            }
  
  
            .career-card::before {
  
              content:
                "";
  
              position:
                absolute;
  
              top:
                0;
  
              left:
                0;
  
              width:
                100%;
  
              height:
                3px;
  
              background:
                linear-gradient(
                  90deg,
                  #0d9488,
                  #5eead4,
                  #f59e0b
                );
  
              opacity:
                0;
  
              transition:
                opacity 220ms ease;
  
            }
  
  
            .career-card--featured::after {
  
              content:
                "Featured";
  
              position:
                absolute;
  
              top:
                1rem;
  
              right:
                1rem;
  
              padding:
                0.35rem
                0.65rem;
  
              border-radius:
                999px;
  
              background:
                #ccfbf1;
  
              color:
                #0d9488;
  
              font-family:
                monospace;
  
              font-size:
                0.62rem;
  
              font-weight:
                800;
  
              letter-spacing:
                0.05em;
  
              text-transform:
                uppercase;
  
            }
  
  
            .career-card:hover {
  
              transform:
                translateY(-5px);
  
              background:
                rgba(
                  255,
                  255,
                  255,
                  0.94
                );
  
              border-color:
                rgba(
                  13,
                  148,
                  136,
                  0.25
                );
  
              box-shadow:
                0
                18px
                45px
                rgba(
                  16,
                  20,
                  19,
                  0.09
                );
  
            }
  
  
            .career-card:hover::before,
            .career-card:focus-within::before {
  
              opacity:
                1;
  
            }
  
  
            .career-card__meta {
  
              display:
                flex;
  
              flex-wrap:
                wrap;
  
              align-items:
                center;
  
              gap:
                0.5rem;
  
              margin-bottom:
                0.8rem;
  
              font-family:
                monospace;
  
              font-size:
                0.72rem;
  
              line-height:
                1.4;
  
              letter-spacing:
                0.04em;
  
              text-transform:
                uppercase;
  
              color:
                #6b7280;
  
            }
  
  
            .career-card__department {
  
              color:
                #0d9488;
  
              font-weight:
                700;
  
            }
  
  
            .career-card__separator {
  
              opacity:
                0.45;
  
            }
  
  
            .career-card__title {
  
              margin:
                0;
  
              color:
                #101413;
  
              font-family:
                var(
                  --font-heading,
                  system-ui,
                  sans-serif
                );
  
              font-size:
                clamp(
                  1.35rem,
                  2.4vw,
                  1.8rem
                );
  
              line-height:
                1.15;
  
              letter-spacing:
                -0.025em;
  
            }
  
  
            .career-card__summary {
  
              max-width:
                65ch;
  
              margin:
                0.9rem
                0
                0;
  
              color:
                #4b5563;
  
              font-family:
                var(
                  --font-body,
                  system-ui,
                  sans-serif
                );
  
              font-size:
                clamp(
                  0.95rem,
                  1vw,
                  1.05rem
                );
  
              line-height:
                1.7;
  
            }
  
  
            .career-card__details {
  
              display:
                flex;
  
              flex-wrap:
                wrap;
  
              gap:
                0.55rem;
  
              margin-top:
                1.25rem;
  
            }
  
  
            .career-card__detail {
  
              display:
                inline-flex;
  
              align-items:
                center;
  
              min-height:
                2rem;
  
              padding:
                0.35rem
                0.7rem;
  
              border-radius:
                999px;
  
              background:
                #f3f4f6;
  
              color:
                #374151;
  
              font-size:
                0.78rem;
  
              line-height:
                1.3;
  
            }
  
  
            .career-card__action {
  
              align-self:
                center;
  
              display:
                inline-flex;
  
              align-items:
                center;
  
              justify-content:
                center;
  
              min-height:
                2.8rem;
  
              padding:
                0.7rem
                1rem;
  
              border-radius:
                0.7rem;
  
              background:
                #101413;
  
              color:
                #ffffff;
  
              text-decoration:
                none;
  
              font-family:
                var(
                  --font-body,
                  system-ui,
                  sans-serif
                );
  
              font-size:
                0.9rem;
  
              font-weight:
                700;
  
              white-space:
                nowrap;
  
              transition:
                transform 180ms ease,
                background 180ms ease;
  
            }
  
  
            .career-card__action:hover {
  
              transform:
                translateY(-2px);
  
              background:
                #0d9488;
  
            }
  
  
            .career-card__action:focus-visible {
  
              outline:
                3px solid
                rgba(
                  13,
                  148,
                  136,
                  0.35
                );
  
              outline-offset:
                3px;
  
            }
  
  
            .career-card__arrow {
  
              margin-left:
                0.45rem;
  
              transition:
                transform 180ms ease;
  
            }
  
  
            .career-card__action:hover
            .career-card__arrow {
  
              transform:
                translateX(3px);
  
            }
  
  
            @media (max-width: 680px) {
  
              .career-card {
  
                grid-template-columns:
                  1fr;
  
                gap:
                  1.25rem;
  
              }
  
  
              .career-card__action {
  
                justify-self:
                  start;
  
              }
  
  
              .career-card--featured::after {
  
                position:
                  static;
  
                display:
                  inline-flex;
  
                width:
                  fit-content;
  
                margin-top:
                  1rem;
  
              }
  
            }
  
  
            @media (prefers-reduced-motion: reduce) {
  
              .career-card,
              .career-card__action,
              .career-card__arrow {
  
                transition:
                  none;
  
              }
  
            }
  
  
            @media (prefers-color-scheme: dark) {
  
              .career-card {
  
                background:
                  rgba(
                    255,
                    255,
                    255,
                    0.045
                  );
  
                border-color:
                  rgba(
                    255,
                    255,
                    255,
                    0.12
                  );
  
              }
  
  
              .career-card:hover {
  
                background:
                  rgba(
                    255,
                    255,
                    255,
                    0.075
                  );
  
              }
  
  
              .career-card__title {
  
                color:
                  #f7f5ef;
  
              }
  
  
              .career-card__summary {
  
                color:
                  #b8c0bd;
  
              }
  
  
              .career-card__detail {
  
                background:
                  rgba(
                    255,
                    255,
                    255,
                    0.08
                  );
  
                color:
                  #d1d5db;
  
              }
  
            }
  
          </style>
  
  
          <article
            class="career-card${featuredClass}"
            aria-labelledby="career-title-${slug}"
          >
  
            <div>
  
              <div class="career-card__meta">
  
                <span class="career-card__department">
                  ${department}
                </span>
  
                <span
                  class="career-card__separator"
                  aria-hidden="true"
                >
                  ·
                </span>
  
                <span>
                  ${type}
                </span>
  
              </div>
  
  
              <h3
                id="career-title-${slug}"
                class="career-card__title"
              >
                ${title}
              </h3>
  
  
              ${
                summary
                  ? `
                    <p class="career-card__summary">
                      ${summary}
                    </p>
                  `
                  : ""
              }
  
  
              <div class="career-card__details">
  
                <span class="career-card__detail">
                  ${location}
                </span>
  
                ${
                  workMode
                    ? `
                      <span class="career-card__detail">
                        ${workMode}
                      </span>
                    `
                    : ""
                }
  
                ${
                  experienceLevel
                    ? `
                      <span class="career-card__detail">
                        ${experienceLevel}
                      </span>
                    `
                    : ""
                }
  
              </div>
  
            </div>
  
  
            <a
              class="career-card__action"
              href="${href}"
              aria-label="View ${title} role"
            >
  
              View role
  
              <span
                class="career-card__arrow"
                aria-hidden="true"
              >
                →
              </span>
  
            </a>
  
          </article>
  
        `;
  
      }
  
    }
  
  
    /* ==========================================================
       🟢 REGISTER COMPONENT
       ========================================================== */
  
    if (
      !customElements.get("career-card")
    ) {
  
      customElements.define(
        "career-card",
        CareerCard
      );
  
    }
  
  
    /* ==========================================================
       🟢 CAREERS PAGE RENDERER
       ========================================================== */
  
    function renderCareersPage() {
  
      const mount =
        document.getElementById(
          "careerRoles"
        );
  
  
      if (!mount) {
  
        return;
  
      }
  
  
      if (
        !window.RiverCareers ||
        typeof window.RiverCareers.getOpenRoles !== "function"
      ) {
  
        renderSystemError(
          mount
        );
  
        return;
  
      }
  
  
      const roles =
        window.RiverCareers.getOpenRoles();
  
  
      /* ========================================================
         🟢 EMPTY STATE
         ======================================================== */
  
      if (!roles.length) {
  
        mount.innerHTML = `
  
          <div class="careers-empty-state">
  
            <div
              class="careers-empty-state__face"
              aria-hidden="true"
            >
              ☺
            </div>
  
  
            <div>
  
              <p class="careers-empty-state__eyebrow">
                Nothing open right now
              </p>
  
              <h3 class="careers-empty-state__title">
                No open positions at the moment.
              </h3>
  
              <p class="careers-empty-state__text">
                That's okay. We don't want a great person to disappear
                just because we haven't written the right job description yet.
                If you think you'd be a good addition to River,
                we'd still love to hear from you.
              </p>
  
  
              <a
                class="careers-empty-state__link"
                href="#general-application"
              >
                Introduce yourself
  
                <span aria-hidden="true">
                  →
                </span>
  
              </a>
  
            </div>
  
          </div>
  
        `;
  
        return;
  
      }
  
  
      /* ========================================================
         🟢 OPEN ROLE CARDS
         ======================================================== */
  
      mount.innerHTML = "";
  
  
      const fragment =
        document.createDocumentFragment();
  
  
      roles.forEach(
        role => {
  
          const card =
            document.createElement(
              "career-card"
            );
  
  
          card.setAttribute(
            "slug",
            role.slug
          );
  
  
          fragment.appendChild(
            card
          );
  
        }
      );
  
  
      mount.appendChild(
        fragment
      );
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — SYSTEM ERROR
       ========================================================== */
  
    function renderSystemError(
      mount
    ) {
  
      mount.innerHTML = `
  
        <div class="careers-empty-state">
  
          <div
            class="careers-empty-state__face"
            aria-hidden="true"
          >
            ?
          </div>
  
          <div>
  
            <p class="careers-empty-state__eyebrow">
              Careers
            </p>
  
            <h3 class="careers-empty-state__title">
              We couldn't load the current roles.
            </h3>
  
            <p class="careers-empty-state__text">
              Please check back shortly or introduce yourself
              through the general application.
            </p>
  
            <a
              class="careers-empty-state__link"
              href="#general-application"
            >
              Introduce yourself
              <span aria-hidden="true">
                →
              </span>
            </a>
  
          </div>
  
        </div>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 SAFE INITIALIZATION
       ========================================================== */
  
    function initializeCareers() {
  
      renderCareersPage();
  
    }
  
  
    if (
      document.readyState === "loading"
    ) {
  
      document.addEventListener(
        "DOMContentLoaded",
        initializeCareers,
        {
          once: true
        }
      );
  
    } else {
  
      initializeCareers();
  
    }
  
  
  })();