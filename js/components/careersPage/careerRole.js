/* ============================================================
   RIVER — CAREER ROLE PAGE
   careerRole.js

   🟢 UPGRADE — SINGLE REUSABLE ROLE DETAIL RENDERER

   URL examples:

   career-role.html?role=software-engineer

   career-role.html?role=frontend-engineer

   career-role.html?role=engineering-internship


   Architecture:

   URL
    ↓
   slug
    ↓
   RIVER_CAREERS
    ↓
   role record
    ↓
   renderer
    ↓
   reusable role page


   No separate HTML files are required per role.
   ============================================================ */


   (function () {

    "use strict";
  
  
    /* ==========================================================
       🟢 CONFIGURATION
       ========================================================== */
  
    const ROLE_PAGE =
      "career-role.html";
  
    const CAREERS_PAGE =
      "careers.html";
  
    const GENERAL_APPLICATION =
      "contact.html?subject=General%20Application";
  
  
    /* ==========================================================
       🟢 DOM HELPERS
       ========================================================== */
  
    function getMount() {
  
      return document.getElementById(
        "careerRoleApp"
      );
  
    }
  
  
    /* ==========================================================
       🟢 HTML ESCAPING
       ========================================================== */
  
    function escapeHTML(value) {
  
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
  
  
    /* ==========================================================
       🟢 ATTRIBUTE ESCAPING
       ========================================================== */
  
    function escapeAttribute(value) {
  
      return escapeHTML(
        value
      );
  
    }
  
  
    /* ==========================================================
       🟢 URL HELPERS
       ========================================================== */
  
    function getRoleSlug() {
  
      const params =
        new URLSearchParams(
          window.location.search
        );
  
  
      return (
        params
          .get("role")
          ?.trim()
          .toLowerCase() ||
        ""
      );
  
    }
  
  
    function getRoleUrl(slug) {
  
      return (
        ROLE_PAGE +
        "?role=" +
        encodeURIComponent(
          slug
        )
      );
  
    }
  
  
    function getGeneralApplicationUrl() {
  
      if (
        window.RiverCareers &&
        typeof window.RiverCareers.getGeneralApplicationUrl === "function"
      ) {
  
        return (
          window.RiverCareers
            .getGeneralApplicationUrl()
        );
  
      }
  
  
      return GENERAL_APPLICATION;
  
    }
  
  
    /* ==========================================================
       🟢 ARRAY NORMALIZATION
       ========================================================== */
  
    function normalizeArray(value) {
  
      if (
        !Array.isArray(value)
      ) {
  
        return [];
  
      }
  
  
      return value.filter(
        item =>
          item !== null &&
          item !== undefined &&
          String(item).trim() !== ""
      );
  
    }
  
  
    /* ==========================================================
       🟢 LIST RENDERER
       ========================================================== */
  
    function renderList(
      items,
      className = ""
    ) {
  
      const normalized =
        normalizeArray(
          items
        );
  
  
      if (!normalized.length) {
  
        return "";
  
      }
  
  
      return `
  
        <ul class="${className}">
  
          ${normalized
            .map(
              item => `
  
                <li>
  
                  <span
                    class="career-role-list__bullet"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
  
                  <span>
                    ${escapeHTML(item)}
                  </span>
  
                </li>
  
              `
            )
            .join("")
          }
  
        </ul>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 SECTION RENDERER
       ========================================================== */
  
    function renderContentSection({
      id,
      eyebrow,
      title,
      content,
      list
    }) {
  
      const hasContent =
        Boolean(
          content &&
          String(content).trim()
        );
  
  
      const hasList =
        normalizeArray(
          list
        ).length > 0;
  
  
      if (
        !hasContent &&
        !hasList
      ) {
  
        return "";
  
      }
  
  
      return `
  
        <section
          id="${escapeAttribute(id)}"
          class="career-role-section"
          aria-labelledby="${escapeAttribute(id)}-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-section-heading">
  
              <p class="career-role-eyebrow">
                ${escapeHTML(eyebrow)}
              </p>
  
              <h2
                id="${escapeAttribute(id)}-title"
              >
                ${escapeHTML(title)}
              </h2>
  
            </div>
  
  
            <div class="career-role-section-content">
  
              ${
                hasContent
                  ? `
                    <p class="career-role-section-lead">
                      ${escapeHTML(content)}
                    </p>
                  `
                  : ""
              }
  
  
              ${
                hasList
                  ? renderList(
                      list,
                      "career-role-list"
                    )
                  : ""
              }
  
            </div>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — STATUS LABEL
       ========================================================== */
  
    function getStatusLabel(
      role
    ) {
  
      if (
        role.status === "open"
      ) {
  
        return "Open";
  
      }
  
  
      if (
        role.status === "closed"
      ) {
  
        return "Closed";
  
      }
  
  
      return "Unavailable";
  
    }
  
  
    function getStatusClass(
      role
    ) {
  
      if (
        role.status === "open"
      ) {
  
        return "is-open";
  
      }
  
  
      if (
        role.status === "closed"
      ) {
  
        return "is-closed";
  
      }
  
  
      return "is-unavailable";
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — APPLICATION CONFIGURATION
       ========================================================== */
  
    function getApplication(
      role
    ) {
  
      const application =
        role &&
        role.application &&
        typeof role.application === "object"
          ? role.application
          : null;
  
  
      if (!application) {
  
        return {
  
          type: "general",
  
          url:
            getGeneralApplicationUrl(),
  
          label:
            "Introduce yourself",
  
          subject:
            "General Application"
  
        };
  
      }
  
  
      return {
  
        type:
          application.type ||
          "general",
  
        url:
          application.url ||
          getGeneralApplicationUrl(),
  
        label:
          application.label ||
          "Apply / Introduce yourself",
  
        subject:
          application.subject ||
          "General Application"
  
      };
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — DYNAMIC SEO
       ========================================================== */
  
    function updateSEO(
      role
    ) {
  
      const title =
        role
          ? `${role.title} | Careers at River`
          : "Career Opportunity | River";
  
  
      const description =
        role
          ? (
              role.summary ||
              `Explore the ${role.title} opportunity at River.`
            )
          : "Explore career opportunities at River.";
  
  
      document.title =
        title;
  
  
      const descriptionMeta =
        document.querySelector(
          'meta[name="description"]'
        );
  
  
      if (descriptionMeta) {
  
        descriptionMeta.setAttribute(
          "content",
          description
        );
  
      }
  
  
      const canonical =
        document.querySelector(
          'link[rel="canonical"]'
        );
  
  
      if (canonical) {
  
        const canonicalUrl =
          new URL(
            window.location.href
          );
  
  
        canonicalUrl.hash = "";
  
  
        canonical.setAttribute(
          "href",
          canonicalUrl.toString()
        );
  
      }
  
  
      /* --------------------------------------------------------
         🟢 UPGRADE — OpenGraph metadata
         -------------------------------------------------------- */
  
      setMeta(
        "property",
        "og:title",
        title
      );
  
  
      setMeta(
        "property",
        "og:description",
        description
      );
  
  
      setMeta(
        "property",
        "og:type",
        "website"
      );
  
    }
  
  
    function setMeta(
      attribute,
      name,
      content
    ) {
  
      let meta =
        document.querySelector(
          `meta[${attribute}="${name}"]`
        );
  
  
      if (!meta) {
  
        meta =
          document.createElement(
            "meta"
          );
  
  
        meta.setAttribute(
          attribute,
          name
        );
  
  
        document.head.appendChild(
          meta
        );
  
      }
  
  
      meta.setAttribute(
        "content",
        content
      );
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — BREADCRUMB
       ========================================================== */
  
    function renderBreadcrumb(
      role
    ) {
  
      return `
  
        <nav
          class="career-role-breadcrumb"
          aria-label="Breadcrumb"
        >
  
          <a
            href="${CAREERS_PAGE}"
            class="career-role-breadcrumb__link"
          >
            Careers
          </a>
  
          <span
            aria-hidden="true"
            class="career-role-breadcrumb__separator"
          >
            /
          </span>
  
          <span
            class="career-role-breadcrumb__current"
            aria-current="page"
          >
            ${escapeHTML(role.title)}
          </span>
  
        </nav>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — ROLE HERO
       ========================================================== */
  
    function renderHero(
      role
    ) {
  
      const statusLabel =
        getStatusLabel(
          role
        );
  
  
      const statusClass =
        getStatusClass(
          role
        );
  
  
      return `
  
        <section
          class="career-role-hero"
          aria-labelledby="career-role-title"
        >
  
          <div class="career-role-container">
  
  
            ${renderBreadcrumb(role)}
  
  
            <div class="career-role-hero__grid">
  
  
              <div class="career-role-hero__copy">
  
  
                <div class="career-role-hero__eyebrow-row">
  
                  <p class="career-role-eyebrow">
  
                    ${escapeHTML(
                      role.departmentLabel ||
                      role.department ||
                      "River"
                    )}
  
                  </p>
  
                  ${
                    role.featured
                      ? `
                        <span class="career-role-featured">
                          Featured opportunity
                        </span>
                      `
                      : ""
                  }
  
                </div>
  
  
                <h1
                  id="career-role-title"
                  class="career-role-hero__title"
                >
                  ${escapeHTML(role.title)}
                </h1>
  
  
                <p class="career-role-hero__summary">
                  ${escapeHTML(
                    role.summary ||
                    role.description ||
                    ""
                  )}
                </p>
  
  
                <div
                  class="career-role-meta"
                  aria-label="Role details"
                >
  
                  <span class="career-role-meta__item">
  
                    <strong>
                      Department
                    </strong>
  
                    <span>
                      ${escapeHTML(
                        role.department ||
                        "River"
                      )}
                    </span>
  
                  </span>
  
  
                  <span class="career-role-meta__item">
  
                    <strong>
                      Type
                    </strong>
  
                    <span>
                      ${escapeHTML(
                        role.type ||
                        "Role"
                      )}
                    </span>
  
                  </span>
  
  
                  <span class="career-role-meta__item">
  
                    <strong>
                      Location
                    </strong>
  
                    <span>
                      ${escapeHTML(
                        role.location ||
                        "Flexible"
                      )}
                    </span>
  
                  </span>
  
  
                  ${
                    role.workMode
                      ? `
                        <span class="career-role-meta__item">
  
                          <strong>
                            Work mode
                          </strong>
  
                          <span>
                            ${escapeHTML(
                              role.workMode
                            )}
                          </span>
  
                        </span>
                      `
                      : ""
                  }
  
  
                  <span class="career-role-meta__item">
  
                    <strong>
                      Status
                    </strong>
  
                    <span
                      class="
                        career-role-status
                        ${statusClass}
                      "
                    >
  
                      <span
                        class="career-role-status__dot"
                        aria-hidden="true"
                      ></span>
  
                      ${escapeHTML(
                        statusLabel
                      )}
  
                    </span>
  
                  </span>
  
                </div>
  
  
                ${
                  role.status === "open"
                    ? `
                      <div class="career-role-hero__actions">
  
                        <a
                          href="#application"
                          class="
                            career-role-button
                            career-role-button--primary
                          "
                        >
                          Apply / Introduce yourself
  
                          <span
                            aria-hidden="true"
                          >
                            →
                          </span>
  
                        </a>
  
  
                        <a
                          href="${CAREERS_PAGE}"
                          class="
                            career-role-button
                            career-role-button--secondary
                          "
                        >
                          Back to Careers
  
                        </a>
  
                      </div>
                    `
                    : `
                      <div class="career-role-hero__actions">
  
                        <a
                          href="${CAREERS_PAGE}"
                          class="
                            career-role-button
                            career-role-button--primary
                          "
                        >
                          See current opportunities
  
                          <span
                            aria-hidden="true"
                          >
                            →
                          </span>
  
                        </a>
  
  
                        <a
                          href="#general-application"
                          class="
                            career-role-button
                            career-role-button--secondary
                          "
                        >
                          Introduce yourself
  
                        </a>
  
                      </div>
                    `
                }
  
  
              </div>
  
  
              <!-- 🟢 UPGRADE — Playful role illustration -->
  
              <div
                class="career-role-hero__visual"
                aria-hidden="true"
              >
  
                <div class="career-role-illustration">
  
                  <div class="career-role-illustration__glow"></div>
  
  
                  <div class="career-role-illustration__window">
  
                    <div class="career-role-illustration__window-bar">
  
                      <span></span>
                      <span></span>
                      <span></span>
  
                    </div>
  
  
                    <div class="career-role-illustration__code">
  
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
  
                    </div>
  
  
                    <div class="career-role-illustration__face">
  
                      <span></span>
                      <span></span>
  
                      <b></b>
  
                    </div>
  
                  </div>
  
  
                  <div class="career-role-illustration__spark career-role-illustration__spark--one">
                    ✦
                  </div>
  
                  <div class="career-role-illustration__spark career-role-illustration__spark--two">
                    +
                  </div>
  
                  <div class="career-role-illustration__spark career-role-illustration__spark--three">
                    &lt;/&gt;
                  </div>
  
  
                  <div class="career-role-illustration__bubble">
  
                    <span>
                      Let's build.
                    </span>
  
                  </div>
  
                </div>
  
              </div>
  
  
            </div>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — WHY THIS ROLE EXISTS
       ========================================================== */
  
    function renderWhy(
      role
    ) {
  
      if (
        !role.why
      ) {
  
        return "";
  
      }
  
  
      return `
  
        <section
          class="
            career-role-section
            career-role-section--why
          "
          aria-labelledby="why-role-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-highlight">
  
              <div>
  
                <p class="career-role-eyebrow">
                  Why this role exists
                </p>
  
                <h2 id="why-role-title">
                  There's a real problem
                  <span>behind the job title.</span>
                </h2>
  
              </div>
  
  
              <p>
                ${escapeHTML(
                  role.why
                )}
              </p>
  
            </div>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — RESPONSIBILITIES
       ========================================================== */
  
    function renderResponsibilities(
      role
    ) {
  
      return renderContentSection({
  
        id:
          "what-youll-do",
  
        eyebrow:
          "The work",
  
        title:
          "What you'll do",
  
        list:
          role.responsibilities
  
      });
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — REQUIREMENTS
       ========================================================== */
  
    function renderRequirements(
      role
    ) {
  
      return `
  
        <section
          id="what-were-looking-for"
          class="career-role-section"
          aria-labelledby="requirements-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-section-heading">
  
              <p class="career-role-eyebrow">
                What we're looking for
              </p>
  
              <h2 id="requirements-title">
                Skills matter.
                <span>So does how you think.</span>
              </h2>
  
            </div>
  
  
            <div class="career-role-two-column">
  
  
              <div class="career-role-list-card">
  
                <div class="career-role-list-card__heading">
  
                  <span
                    class="career-role-list-card__icon"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
  
                  <h3>
                    Skills & experience
                  </h3>
  
                </div>
  
  
                ${renderList(
                  role.requirements,
                  "career-role-list"
                )}
  
              </div>
  
  
              <div class="career-role-list-card">
  
                <div class="career-role-list-card__heading">
  
                  <span
                    class="career-role-list-card__icon career-role-list-card__icon--warm"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
  
                  <h3>
                    Mindset
                  </h3>
  
                </div>
  
  
                ${renderList(
                  role.mindset,
                  "career-role-list"
                )}
  
              </div>
  
  
            </div>
  
  
            ${
              normalizeArray(
                role.niceToHave
              ).length
                ? `
                  <div class="career-role-nice">
  
                    <div>
  
                      <p class="career-role-eyebrow">
                        Nice to have
                      </p>
  
                      <h3>
                        Helpful, but not a gate.
                      </h3>
  
                    </div>
  
  
                    ${renderList(
                      role.niceToHave,
                      "career-role-list career-role-list--compact"
                    )}
  
                  </div>
                `
                : ""
            }
  
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — LEARNING
       ========================================================== */
  
    function renderLearning(
      role
    ) {
  
      const items =
        normalizeArray(
          role.learning
        );
  
  
      if (!items.length) {
  
        return "";
  
      }
  
  
      return `
  
        <section
          id="learning"
          class="
            career-role-section
            career-role-section--learning
          "
          aria-labelledby="learning-title"
        >
  
          <div class="career-role-container">
  
  
            <div class="career-role-learning">
  
              <div class="career-role-learning__copy">
  
                <p class="career-role-eyebrow">
                  Growth
                </p>
  
                <h2 id="learning-title">
                  What you'll learn
                  <span>and get to work on.</span>
                </h2>
  
                <p>
                  Especially for junior and internship opportunities,
                  we want the role to be about growth as well as contribution.
                </p>
  
              </div>
  
  
              <div class="career-role-learning__items">
  
                ${items
                  .map(
                    (
                      item,
                      index
                    ) => `
  
                      <article
                        class="career-role-learning-item"
                      >
  
                        <span>
                          ${String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )}
                        </span>
  
                        <p>
                          ${escapeHTML(
                            item
                          )}
                        </p>
  
                      </article>
  
                    `
                  )
                  .join("")
                }
  
              </div>
  
            </div>
  
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — WHO THIS IS FOR
       ========================================================== */
  
    function renderWho(
      role
    ) {
  
      if (
        !role.whoThisIsFor
      ) {
  
        return "";
  
      }
  
  
      return `
  
        <section
          id="who-this-is-for"
          class="career-role-section"
          aria-labelledby="who-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-human">
  
              <div class="career-role-human__character">
  
                <div
                  class="career-role-human__face"
                  aria-hidden="true"
                >
  
                  <span></span>
                  <span></span>
                  <b></b>
  
                </div>
  
                <span
                  class="career-role-human__hello"
                  aria-hidden="true"
                >
                  👋
                </span>
  
              </div>
  
  
              <div class="career-role-human__copy">
  
                <p class="career-role-eyebrow">
                  The human bit
                </p>
  
                <h2 id="who-title">
                  Who this role
                  <span>is for.</span>
                </h2>
  
                <p>
                  ${escapeHTML(
                    role.whoThisIsFor
                  )}
                </p>
  
              </div>
  
            </div>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — HOW WE WORK
       ========================================================== */
  
    function renderWorkflow(
      role
    ) {
  
      const items =
        normalizeArray(
          role.workflow
        );
  
  
      if (!items.length) {
  
        return "";
  
      }
  
  
      return `
  
        <section
          id="how-youll-work"
          class="career-role-section"
          aria-labelledby="workflow-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-section-heading">
  
              <p class="career-role-eyebrow">
                How you'll work
              </p>
  
              <h2 id="workflow-title">
                Understand →
                Build →
                Review →
                Ship →
                <span>Improve.</span>
              </h2>
  
            </div>
  
  
            <div class="career-role-workflow">
  
              ${items
                .map(
                  (
                    item,
                    index
                  ) => `
  
                    <article
                      class="career-role-workflow__step"
                    >
  
                      <span
                        class="career-role-workflow__number"
                      >
                        ${String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>
  
                      <p>
                        ${escapeHTML(
                          item
                        )}
                      </p>
  
                    </article>
  
                  `
                )
                .join("")
              }
  
            </div>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — APPLICATION
       ========================================================== */
  
    function renderApplication(
      role
    ) {
  
      const application =
        getApplication(
          role
        );
  
  
      const isOpen =
        role.status === "open";
  
  
      if (!isOpen) {
  
        return `
  
          <section
            id="application"
            class="
              career-role-section
              career-role-section--application
            "
            aria-labelledby="closed-role-title"
          >
  
            <div class="career-role-container">
  
              <div class="career-role-application career-role-application--closed">
  
                <div>
  
                  <p class="career-role-eyebrow">
                    This opportunity has closed
                  </p>
  
                  <h2 id="closed-role-title">
                    This specific role isn't
                    <span>accepting applications right now.</span>
                  </h2>
  
                  <p>
                    Roles change as projects and teams change.
                    You can still explore our current opportunities
                    or introduce yourself to River generally.
                  </p>
  
  
                  <div class="career-role-application__actions">
  
                    <a
                      href="${CAREERS_PAGE}"
                      class="
                        career-role-button
                        career-role-button--primary
                      "
                    >
                      See open roles
                      <span aria-hidden="true">
                        →
                      </span>
                    </a>
  
  
                    <a
                      href="#general-application"
                      class="
                        career-role-button
                        career-role-button--secondary
                      "
                    >
                      Make a general application
                    </a>
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </section>
  
        `;
  
      }
  
  
      return `
  
        <section
          id="application"
          class="
            career-role-section
            career-role-section--application
          "
          aria-labelledby="application-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-application">
  
              <div class="career-role-application__copy">
  
                <p class="career-role-eyebrow">
                  Ready?
                </p>
  
                <h2 id="application-title">
                  Tell us about
                  <span>yourself.</span>
                </h2>
  
                <p>
                  You don't need a perfect CV or a perfectly polished
                  story. Tell us what you've built, what you've learned,
                  what problems you enjoy solving and why River caught
                  your attention.
                </p>
  
  
                <div class="career-role-application__actions">
  
                  <a
                    href="${escapeAttribute(
                      application.url
                    )}"
                    class="
                      career-role-button
                      career-role-button--primary
                    "
                  >
  
                    ${escapeHTML(
                      application.label
                    )}
  
                    <span aria-hidden="true">
                      →
                    </span>
  
                  </a>
  
  
                  <a
                    href="${CAREERS_PAGE}"
                    class="
                      career-role-button
                      career-role-button--secondary
                    "
                  >
                    Back to Careers
                  </a>
  
                </div>
  
              </div>
  
  
              <div
                class="career-role-application__visual"
                aria-hidden="true"
              >
  
                <div class="career-role-application-character">
  
                  <div class="career-role-application-character__screen">
  
                    <span></span>
                    <span></span>
  
                    <b></b>
  
                  </div>
  
                  <span class="career-role-application-character__hand">
                    👋
                  </span>
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — GENERAL APPLICATION FALLBACK
       ========================================================== */
  
    function renderGeneralApplication() {
  
      return `
  
        <section
          id="general-application"
          class="
            career-role-section
            career-role-section--general
          "
          aria-labelledby="general-application-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-general">
  
              <div>
  
                <p class="career-role-eyebrow">
                  Didn't find your role?
                </p>
  
                <h2 id="general-application-title">
                  There may still be
                  <span>a place for you.</span>
                </h2>
  
              </div>
  
  
              <div>
  
                <p>
                  Great people don't always fit neatly into job titles.
                  If you think you could contribute to River,
                  introduce yourself.
                </p>
  
  
                <a
                  href="${getGeneralApplicationUrl()}"
                  class="
                    career-role-button
                    career-role-button--primary
                  "
                >
                  General application
  
                  <span aria-hidden="true">
                    →
                  </span>
  
                </a>
  
              </div>
  
            </div>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — RELATED ROLES
       ========================================================== */
  
    function renderRelatedRoles(
      role
    ) {
  
      let related = [];
  
  
      if (
        window.RiverCareers &&
        typeof window.RiverCareers.getRelatedRoles === "function"
      ) {
  
        related =
          window.RiverCareers.getRelatedRoles(
            role.slug,
            3
          );
  
      }
  
  
      if (!related.length) {
  
        return "";
  
      }
  
  
      return `
  
        <section
          id="related-roles"
          class="career-role-section career-role-section--related"
          aria-labelledby="related-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-section-heading">
  
              <p class="career-role-eyebrow">
                Keep exploring
              </p>
  
              <h2 id="related-title">
                Other open
                <span>opportunities.</span>
              </h2>
  
            </div>
  
  
            <div class="career-role-related-grid">
  
              ${related
                .map(
                  relatedRole => `
  
                    <article
                      class="career-role-related-card"
                    >
  
                      <div>
  
                        <p class="career-role-related-card__meta">
  
                          ${escapeHTML(
                            relatedRole.department ||
                            "River"
                          )}
  
                          <span aria-hidden="true">
                            ·
                          </span>
  
                          ${escapeHTML(
                            relatedRole.type ||
                            "Role"
                          )}
  
                        </p>
  
  
                        <h3>
                          ${escapeHTML(
                            relatedRole.title
                          )}
                        </h3>
  
  
                        <p>
                          ${escapeHTML(
                            relatedRole.summary ||
                            ""
                          )}
                        </p>
  
                      </div>
  
  
                      <a
                        href="${escapeAttribute(
                          getRoleUrl(
                            relatedRole.slug
                          )
                        )}"
                        aria-label="View ${escapeAttribute(
                          relatedRole.title
                        )} role"
                      >
                        View role
                        <span aria-hidden="true">
                          →
                        </span>
                      </a>
  
                    </article>
  
                  `
                )
                .join("")
              }
  
            </div>
  
  
            <div class="career-role-related-footer">
  
              <a
                href="${CAREERS_PAGE}"
                class="career-role-back-link"
              >
                ← View all careers
              </a>
  
            </div>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — INVALID ROLE
       ========================================================== */
  
    function renderInvalidRole() {
  
      updateSEO(
        null
      );
  
  
      const mount =
        getMount();
  
  
      if (!mount) {
  
        return;
  
      }
  
  
      mount.innerHTML = `
  
        <section
          class="
            career-role-error
            career-role-error--not-found
          "
          aria-labelledby="role-not-found-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-error__character">
              ?
            </div>
  
  
            <p class="career-role-eyebrow">
              Role not found
            </p>
  
  
            <h1 id="role-not-found-title">
              Hmm.
              <span>That opportunity doesn't exist.</span>
            </h1>
  
  
            <p>
              The role may have moved, closed or the link may be incorrect.
              Don't worry — the current River opportunities are still here.
            </p>
  
  
            <div class="career-role-error__actions">
  
              <a
                href="${CAREERS_PAGE}"
                class="
                  career-role-button
                  career-role-button--primary
                "
              >
                Back to Careers
                <span aria-hidden="true">
                  →
                </span>
              </a>
  
  
              <a
                href="${getGeneralApplicationUrl()}"
                class="
                  career-role-button
                  career-role-button--secondary
                "
              >
                Introduce yourself
              </a>
  
            </div>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — NO ROLE PARAMETER
       ========================================================== */
  
    function renderNoRole() {
  
      updateSEO(
        null
      );
  
  
      const mount =
        getMount();
  
  
      if (!mount) {
  
        return;
  
      }
  
  
      mount.innerHTML = `
  
        <section
          class="career-role-error"
          aria-labelledby="choose-role-title"
        >
  
          <div class="career-role-container">
  
            <div class="career-role-error__character">
              👋
            </div>
  
  
            <p class="career-role-eyebrow">
              Careers at River
            </p>
  
  
            <h1 id="choose-role-title">
              Looking for
              <span>something to build?</span>
            </h1>
  
  
            <p>
              Choose an opportunity from our current careers page
              and we'll bring you straight to the details.
            </p>
  
  
            <a
              href="${CAREERS_PAGE}"
              class="
                career-role-button
                career-role-button--primary
              "
            >
              Explore Careers
              <span aria-hidden="true">
                →
              </span>
            </a>
  
          </div>
  
        </section>
  
      `;
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — MAIN ROLE RENDER
       ========================================================== */
  
    function renderRole(
      role
    ) {
  
      const mount =
        getMount();
  
  
      if (!mount) {
  
        return;
  
      }
  
  
      updateSEO(
        role
      );
  
  
      mount.innerHTML = `
  
        ${renderHero(role)}
  
        ${renderWhy(role)}
  
        ${renderResponsibilities(role)}
  
        ${renderRequirements(role)}
  
        ${renderLearning(role)}
  
        ${renderWho(role)}
  
        ${renderWorkflow(role)}
  
        ${renderApplication(role)}
  
        ${renderGeneralApplication()}
  
        ${renderRelatedRoles(role)}
  
      `;
  
  
      /* --------------------------------------------------------
         🟢 UPGRADE — JSON-LD structured data
         -------------------------------------------------------- */
  
      injectStructuredData(
        role
      );
  
  
      /* --------------------------------------------------------
         🟢 UPGRADE — Scroll to hash after render
         -------------------------------------------------------- */
  
      requestAnimationFrame(
        () => {
  
          if (
            window.location.hash
          ) {
  
            const target =
              document.querySelector(
                window.location.hash
              );
  
  
            if (target) {
  
              target.scrollIntoView({
                behavior:
                  "smooth",
                block:
                  "start"
              });
  
            }
  
          }
  
        }
      );
  
    }
  
  
    /* ==========================================================
       🟢 UPGRADE — JOB POSTING STRUCTURED DATA
       ========================================================== */
  
    function injectStructuredData(
      role
    ) {
  
      const existing =
        document.getElementById(
          "river-career-jobposting-schema"
        );
  
  
      if (existing) {
  
        existing.remove();
  
      }
  
  
      if (
        role.status !== "open"
      ) {
  
        return;
  
      }
  
  
      const schema = {
  
        "@context":
          "https://schema.org",
  
        "@type":
          "JobPosting",
  
        title:
          role.title,
  
        description:
          role.description ||
          role.summary ||
          "",
  
        employmentType:
          mapEmploymentType(
            role.type
          ),
  
        hiringOrganization: {
  
          "@type":
            "Organization",
  
          name:
            "River"
  
        },
  
        jobLocation: {
  
          "@type":
            "Place",
  
          address: {
  
            "@type":
              "PostalAddress",
  
            addressLocality:
              role.location ||
              "Nairobi"
  
          }
  
        },
  
        url:
          window.location.href
  
      };
  
  
      const script =
        document.createElement(
          "script"
        );
  
  
      script.id =
        "river-career-jobposting-schema";
  
  
      script.type =
        "application/ld+json";
  
  
      script.textContent =
        JSON.stringify(
          schema
        );
  
  
      document.head.appendChild(
        script
      );
  
    }
  
  
    function mapEmploymentType(
      type
    ) {
  
      const value =
        String(
          type || ""
        ).toLowerCase();
  
  
      if (
        value.includes(
          "intern"
        )
      ) {
  
        return "INTERN";
  
      }
  
  
      if (
        value.includes(
          "part"
        )
      ) {
  
        return "PART_TIME";
  
      }
  
  
      if (
        value.includes(
          "contract"
        )
      ) {
  
        return "CONTRACTOR";
  
      }
  
  
      return "FULL_TIME";
  
    }
  
  
    /* ==========================================================
       🟢 INITIALIZATION
       ========================================================== */
  
    function initialize() {
  
      const mount =
        getMount();
  
  
      if (!mount) {
  
        return;
  
      }
  
  
      if (
        !window.RiverCareers ||
        typeof window.RiverCareers.getRoleBySlug !== "function"
      ) {
  
        renderInvalidRole();
  
        return;
  
      }
  
  
      const slug =
        getRoleSlug();
  
  
      if (!slug) {
  
        renderNoRole();
  
        return;
  
      }
  
  
      const role =
        window.RiverCareers.getRoleBySlug(
          slug
        );
  
  
      if (!role) {
  
        renderInvalidRole();
  
        return;
  
      }
  
  
      renderRole(
        role
      );
  
    }
  
  
    /* ==========================================================
       🟢 SAFE DOM READY
       ========================================================== */
  
    if (
      document.readyState === "loading"
    ) {
  
      document.addEventListener(
        "DOMContentLoaded",
        initialize,
        {
          once: true
        }
      );
  
    } else {
  
      initialize();
  
    }
  
  
  })();