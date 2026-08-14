/**
 * ============================================================
 * RIVER — JOB APPLICATION
 * jobApplication.js
 *
 * 🟢 UPGRADE — GENERAL + SPECIFIC ROLE APPLICATIONS
 *
 * Supported routes:
 *
 *   jobApplication.html?role=software-engineer
 *   jobApplication.html?role=frontend-engineer
 *   jobApplication.html?role=engineering-internship
 *   jobApplication.html?role=backend-engineer
 *   jobApplication.html?role=general
 *
 * One application page handles both:
 *
 *   1. Specific role applications
 *   2. General River applications
 *
 * Data source:
 *
 *   careersData.js
 *
 *   ↓
 *
 *   window.RIVER_CAREERS
 * ============================================================
 */

(() => {

  "use strict";


  /* ==========================================================
     CONFIGURATION
     ========================================================== */

  const APPLICATION_ENDPOINT =
    window.RIVER_APPLICATION_ENDPOINT || null;


  /* 🟢 UPGRADE — GENERAL APPLICATION IDENTIFIER */

  const GENERAL_ROLE_SLUG =
    "general";


  const DEFAULT_ROLE =
    "software-engineer";


  /* ==========================================================
     HELPERS
     ========================================================== */

  const $ = selector =>
    document.querySelector(selector);


  const $$ = selector =>
    [...document.querySelectorAll(selector)];


  function escapeHtml(value) {

    return String(value ?? "")
      .replace(
        /[&<>"']/g,
        character => ({

          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;"

        }[character])
      );

  }


  function escapeAttr(value) {

    return escapeHtml(value);

  }


  function getCareersRegistry() {

    if (
      window.RIVER_CAREERS &&
      Array.isArray(
        window.RIVER_CAREERS.roles
      )
    ) {

      return window.RIVER_CAREERS;

    }


    console.error(
      "River Careers: careers registry was not found."
    );


    return null;

  }


  /* ==========================================================
     🟢 UPGRADE — REQUESTED APPLICATION ROUTE
     ========================================================== */

  function getRequestedSlug() {

    const params =
      new URLSearchParams(
        window.location.search
      );


    const requested =
      params.get("role");


    if (
      requested &&
      requested
        .trim()
        .toLowerCase() ===
        GENERAL_ROLE_SLUG
    ) {

      return GENERAL_ROLE_SLUG;

    }


    return (
      requested ||
      DEFAULT_ROLE
    );

  }


  function getRoleBySlug(slug) {

    const registry =
      getCareersRegistry();


    if (!registry) {

      return null;

    }


    const normalizedSlug =
      String(slug || "")
        .trim()
        .toLowerCase();


    return (
      registry.roles.find(
        role =>
          role &&
          role.slug === normalizedSlug
      ) || null
    );

  }


  /* ==========================================================
     🟢 UPGRADE — GENERAL APPLICATION CONTEXT
     ========================================================== */

  function getGeneralApplicationContext() {

    const registry =
      getCareersRegistry();


    if (!registry) {

      return null;

    }


    const configured =
      registry.generalApplication ||
      {};


    return {

      isGeneral:
        true,

      slug:
        GENERAL_ROLE_SLUG,

      title:
        "General Application",

      department:
        "River",

      type:
        "General",

      location:
        "Nairobi / Remote",

      summary:
        configured.summary ||
        "Don't see the right role yet? Introduce yourself and tell us what you would like to build, learn or contribute at River.",

      description:
        configured.description ||
        "We welcome thoughtful applications from people who believe they could contribute to River even when there is no specific open role that matches their experience.",

      application:
        configured

    };

  }


  /* ==========================================================
     🟢 UPGRADE — RESOLVE ROLE OR GENERAL APPLICATION
     ========================================================== */

  const registry =
    getCareersRegistry();


  if (!registry) {

    console.error(
      "River application page could not load careers data."
    );

    return;

  }


  const requestedSlug =
    getRequestedSlug();


  const isGeneralApplication =
    requestedSlug ===
    GENERAL_ROLE_SLUG;


  const role =
    isGeneralApplication
      ? null
      : getRoleBySlug(
          requestedSlug
        );


  const applicationContext =
    isGeneralApplication
      ? getGeneralApplicationContext()
      : role;


  if (!applicationContext) {

    console.error(
      `River application: role "${requestedSlug}" was not found.`
    );


    const heroRole =
      $("#heroRole");


    if (heroRole) {

      heroRole.textContent =
        "This role could not be found.";

    }


    return;

  }


  /* ==========================================================
     ELEMENTS
     ========================================================== */

  const form =
    $("#applicationForm");


  const projects =
    $("#projects");


  const questionsContainer =
    $("#applicationQuestions");


  const success =
    $("#success");


  const progressBar =
    $("#progressBar");


  const progressSteps =
    $$(".progress-steps li");


  const sections =
    $$("[data-step-section]");


  let projectCount =
    0;


  /* ==========================================================
     🟢 UPGRADE — NORMALIZED APPLICATION CONTEXT
     ========================================================== */

  const context = {

    isGeneral:
      isGeneralApplication,

    slug:
      isGeneralApplication
        ? GENERAL_ROLE_SLUG
        : role.slug,

    title:
      applicationContext.title,

    department:
      applicationContext.department,

    type:
      applicationContext.type,

    location:
      applicationContext.location,

    summary:
      applicationContext.summary ||
      applicationContext.description ||
      "",

    application:
      applicationContext.application ||
      {}

  };


  /* ==========================================================
     🟢 UPGRADE — APPLICATION PAGE CONTEXT
     ========================================================== */

  const roleSlugField =
    $("#roleSlug");


  if (roleSlugField) {

    roleSlugField.value =
      context.slug;

  }


  const heroRole =
    $("#heroRole");


  if (heroRole) {

    heroRole.textContent =
      context.isGeneral
        ? "General Application · River"
        : [

            context.title,
            context.department,
            context.type,
            context.location

          ]
            .filter(Boolean)
            .join(" · ");

  }


  const roleTitle =
    $("#roleTitle");


  if (roleTitle) {

    roleTitle.textContent =
      context.isGeneral
        ? "General Application"
        : context.title;

  }


  const roleMeta =
    $("#roleMeta");


  if (roleMeta) {

    roleMeta.textContent =
      context.isGeneral
        ? "Introduce yourself · River Careers"
        : [

            context.department,
            context.type,
            context.location

          ]
            .filter(Boolean)
            .join(" · ");

  }


  const roleSummary =
    $("#roleSummary");


  if (roleSummary) {

    roleSummary.textContent =
      context.summary;

  }


  const roleLink =
    $("#roleLink");


  if (roleLink) {

    roleLink.href =
      context.isGeneral
        ? "careers.html"
        : `career-role.html?role=${encodeURIComponent(context.slug)}`;


    if (context.isGeneral) {

      roleLink.textContent =
        "Explore open roles →";

    }

  }


  /* ==========================================================
     🟢 UPGRADE — APPLICATION PAGE TITLE
     ========================================================== */

  document.title =
    context.isGeneral

      ? "General Application | River Careers"

      : `We'd Love to Get to Know You | ${context.title} | River Careers`;


  /* ==========================================================
     🟢 UPGRADE — OPEN / CLOSED PROTECTION
     ========================================================== */

  if (
    !context.isGeneral &&
    role.status !== "open"
  ) {

    const submitButton =
      form?.querySelector(
        'button[type="submit"]'
      );


    if (submitButton) {

      submitButton.disabled =
        true;


      submitButton.textContent =
        "Applications closed";

    }


    const warning =
      document.createElement(
        "div"
      );


    warning.className =
      "application-status-message";


    warning.setAttribute(
      "role",
      "status"
    );


    warning.innerHTML = `

      <strong>
        This role is no longer accepting applications.
      </strong>

      <p>
        You can still explore other opportunities at River.
      </p>

      <a href="careers.html">
        View open roles →
      </a>

    `;


    form?.prepend(
      warning
    );

  }


  /* ==========================================================
     🟢 UPGRADE — APPLICATION QUESTIONS
     ========================================================== */

  const questions =
    !context.isGeneral &&
    Array.isArray(
      role.applicationQuestions
    )

      ? [
          ...role.applicationQuestions
        ]

      : [];


  if (
    !context.isGeneral &&
    questions.length === 0
  ) {

    questions.push(

      "What problems do you enjoy solving?",

      "What would you like to learn?",

      "What made you interested in River?"

    );

  }


  /* ==========================================================
     🟢 UPGRADE — GENERAL APPLICATION QUESTIONS
     ========================================================== */

  if (context.isGeneral) {

    questions.push(

      "What kind of work would you like to do at River?",

      "What problems, skills or experiences would you bring with you?",

      "What made you interested in River?"

    );

  }


  if (questionsContainer) {

    questions.forEach(
      (question, index) => {

        const card =
          document.createElement(
            "div"
          );


        card.className =
          "question-card";


        const fieldId =
          `question-${index + 1}`;


        card.innerHTML = `

          <label for="${fieldId}">

            ${escapeHtml(question)}

            <textarea
              id="${fieldId}"
              name="question_${index + 1}"
              rows="6"
              required
              placeholder="Tell us what you think…"
            ></textarea>

          </label>

        `;


        questionsContainer.appendChild(
          card
        );

      }
    );

  }


  /* ==========================================================
     PROJECTS
     ========================================================== */

  function addProject(values = {}) {

    if (!projects) {

      return;

    }


    projectCount++;


    const projectNumber =
      projectCount;


    const card =
      document.createElement(
        "article"
      );


    card.className =
      "project-card";


    card.dataset.project =
      projectNumber;


    card.innerHTML = `

      <button
        type="button"
        class="project-remove"
        aria-label="Remove project ${projectNumber}"
      >
        Remove
      </button>


      <h3>
        💻 Project ${projectNumber}
      </h3>


      <div class="project-grid">

        <label>

          Project name

          <input
            name="project_${projectNumber}_name"
            value="${escapeAttr(values.name || "")}"
            placeholder="Inventory Management System"
          >

        </label>


        <label>

          Project link

          <input
            type="url"
            name="project_${projectNumber}_link"
            value="${escapeAttr(values.link || "")}"
            placeholder="https://…"
          >

        </label>


        <label class="wide">

          Describe it.

          <textarea
            name="project_${projectNumber}_description"
            rows="5"
            placeholder="What did you build? What problem did it solve?"
          >${escapeHtml(values.description || "")}</textarea>

        </label>

      </div>

    `;


    card.querySelector(
      ".project-remove"
    )?.addEventListener(
      "click",
      () => {

        card.remove();

        renumberProjects();

      }
    );


    projects.appendChild(
      card
    );

  }


  function renumberProjects() {

    const cards =
      $$(".project-card");


    cards.forEach(
      (card, index) => {

        const number =
          index + 1;


        card.dataset.project =
          number;


        const heading =
          card.querySelector(
            "h3"
          );


        if (heading) {

          heading.textContent =
            `💻 Project ${number}`;

        }


        const remove =
          card.querySelector(
            ".project-remove"
          );


        if (remove) {

          remove.setAttribute(
            "aria-label",
            `Remove project ${number}`
          );

        }

      }
    );

  }


  addProject();


  $("#addProject")?.addEventListener(
    "click",
    () => addProject()
  );


  /* ==========================================================
     PROGRESS
     ========================================================== */

  function updateProgress() {

    if (!sections.length) {

      return;

    }


    const position =
      window.scrollY + 220;


    let current =
      1;


    sections.forEach(
      section => {

        if (
          position >=
          section.offsetTop
        ) {

          current =
            Number(
              section.dataset.stepSection
            );

        }

      }
    );


    const percentage =
      Math.min(
        100,
        current * 25
      );


    if (progressBar) {

      progressBar.style.width =
        `${percentage}%`;

    }


    progressSteps.forEach(
      step => {

        const isCurrent =
          Number(
            step.dataset.step
          ) === current;


        step.classList.toggle(
          "current",
          isCurrent
        );

      }
    );

  }


  window.addEventListener(
    "scroll",
    updateProgress,
    {
      passive: true
    }
  );


  window.addEventListener(
    "resize",
    updateProgress
  );


  updateProgress();


  /* ==========================================================
     VALIDATION
     ========================================================== */

  function validateForm() {

    if (!form) {

      return false;

    }


    let valid =
      true;


    const requiredFields =
      $$("[required]");


    requiredFields.forEach(
      field => {

        let isValid;


        if (
          field.type ===
          "checkbox"
        ) {

          isValid =
            field.checked;

        } else {

          isValid =
            field.value.trim() !== "";

        }


        field.setAttribute(
          "aria-invalid",
          String(!isValid)
        );


        if (!isValid) {

          valid =
            false;

        }

      }
    );


    const email =
      form.elements.email;


    if (
      email &&
      email.value &&
      !email.validity.valid
    ) {

      email.setAttribute(
        "aria-invalid",
        "true"
      );


      valid =
        false;

    }


    const urls = [

      form.elements.linkedin,

      form.elements.portfolio

    ];


    urls.forEach(
      input => {

        if (
          input &&
          input.value &&
          !input.validity.valid
        ) {

          input.setAttribute(
            "aria-invalid",
            "true"
          );


          valid =
            false;

        }

      }
    );


    if (!valid) {

      const firstInvalid =
        form.querySelector(
          '[aria-invalid="true"]'
        );


      firstInvalid?.focus();

    }


    return valid;

  }


  /* ==========================================================
     🟢 UPGRADE — PAYLOAD BUILDER
     ========================================================== */

  function buildPayload() {

    const formData =
      new FormData(
        form
      );


    const payload =
      Object.fromEntries(
        formData.entries()
      );


    /* --------------------------------------------------------
       🟢 UPGRADE — APPLICATION MODE
       -------------------------------------------------------- */

    payload.applicationMode =
      context.isGeneral
        ? "general"
        : "role";


    /* --------------------------------------------------------
       🟢 UPGRADE — SPECIFIC ROLE CONTEXT
       -------------------------------------------------------- */

    payload.role =
      context.isGeneral

        ? null

        : {

            slug:
              role.slug,

            title:
              role.title,

            department:
              role.department,

            type:
              role.type,

            location:
              role.location

          };


    /* --------------------------------------------------------
       🟢 UPGRADE — GENERAL APPLICATION CONTEXT
       -------------------------------------------------------- */

    payload.generalApplication =
      context.isGeneral

        ? {

            slug:
              GENERAL_ROLE_SLUG,

            title:
              "General Application",

            source:
              "River Careers"

          }

        : null;


    /* --------------------------------------------------------
       PROJECTS
       -------------------------------------------------------- */

    payload.projects =
      $$(".project-card")
        .map(
          card => {

            const name =
              card.querySelector(
                '[name$="_name"]'
              )?.value.trim() || "";


            const link =
              card.querySelector(
                '[name$="_link"]'
              )?.value.trim() || "";


            const description =
              card.querySelector(
                '[name$="_description"]'
              )?.value.trim() || "";


            return {

              name,

              link,

              description

            };

          }
        )
        .filter(
          project =>
            project.name ||
            project.link ||
            project.description
        );


    /* --------------------------------------------------------
       🟢 UPGRADE — APPLICATION METADATA
       -------------------------------------------------------- */

    payload.application = {

      source:
        "River Careers",

      type:
        context.isGeneral
          ? "general"
          : "role",

      roleSlug:
        context.isGeneral
          ? null
          : role.slug,

      roleTitle:
        context.isGeneral
          ? null
          : role.title,

      subject:
        context.isGeneral

          ? "General Application — River"

          : (
              role.application?.subject ||
              `Application — ${role.title}`
            ),

      submittedAt:
        new Date().toISOString()

    };


    return payload;

  }


  /* ==========================================================
     🟢 UPGRADE — SUBMISSION
     ========================================================== */

  async function submitApplication(
    payload
  ) {

    if (!APPLICATION_ENDPOINT) {

      console.info(
        "River application demo payload:",
        payload
      );


      return {

        success:
          true,

        demo:
          true

      };

    }


    const response =
      await fetch(
        APPLICATION_ENDPOINT,
        {

          method:
            "POST",

          headers: {

            "Content-Type":
              "application/json",

            "Accept":
              "application/json"

          },

          body:
            JSON.stringify(
              payload
            )

        }
      );


    if (!response.ok) {

      throw new Error(
        "Application endpoint returned an error."
      );

    }


    return {

      success:
        true,

      demo:
        false

    };

  }


  /* ==========================================================
     FORM SUBMISSION
     ========================================================== */

  if (form) {

    form.addEventListener(
      "submit",
      async event => {

        event.preventDefault();


        if (!validateForm()) {

          return;

        }


        const submitButton =
          form.querySelector(
            'button[type="submit"]'
          );


        const originalButtonText =
          submitButton?.textContent ||
          "Submit application";


        if (submitButton) {

          submitButton.disabled =
            true;


          submitButton.textContent =
            "🚀 Sending…";

        }


        try {

          const payload =
            buildPayload();


          await submitApplication(
            payload
          );


          form.hidden =
            true;


          const progressWrap =
            $(".progress-wrap");


          if (progressWrap) {

            progressWrap.hidden =
              true;

          }


          if (success) {

            success.hidden =
              false;


            success.scrollIntoView({

              behavior:
                "smooth",

              block:
                "start"

            });

          }


        } catch (error) {

          console.error(
            "River application error:",
            error
          );


          alert(
            "We couldn't send your application just now. Please try again or contact River directly."
          );


          if (submitButton) {

            submitButton.disabled =
              false;


            submitButton.textContent =
              originalButtonText;

          }

        }

      }
    );

  }


})();