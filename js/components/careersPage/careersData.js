/* ============================================================
   RIVER — CAREERS REGISTRY
   careersData.js

   🟢 UPGRADE — CENTRAL CAREER DATA MODEL

   Architecture:

   careers.html
        ↓
   RIVER_CAREERS
        ↓
   careerCard.js
        ↓
   career-role.html?role=<slug>
        ↓
   jobApplication.html?role=<slug>

   One record = one opportunity.

   Supports:

   - Full-time
   - Part-time
   - Contract
   - Internship
   - Junior
   - Senior
   - Open
   - Closed
   - Specific role applications
   - General applications

   Adding a new role should require changing this file only.
   ============================================================ */


   (function () {

    "use strict";
  
  
    /* ==========================================================
       🟢 UPGRADE — CENTRAL APPLICATION PAGE
       ========================================================== */
  
    const APPLICATION_PAGE_URL =
      "jobApplication.html";
  
  
    /* ==========================================================
       🟢 UPGRADE — GENERAL APPLICATION DESTINATION
       ========================================================== */
  
    const GENERAL_APPLICATION_URL =
      `${APPLICATION_PAGE_URL}?role=general`;
  
  
    /* ==========================================================
       🟢 UPGRADE — CAREERS REGISTRY
       ========================================================== */
  
    const RIVER_CAREERS = {
  
      version: "2.1.0",
  
      lastUpdated: "2026-08-14",
  
      company: "River",
  
      careersUrl:
        "careers.html",
  
      rolePageUrl:
        "career-role.html",
  
  
      /* ========================================================
         🟢 UPGRADE — GENERAL APPLICATION DEFINITION
  
         General applications are deliberately NOT represented
         as a fake job role.
  
         They have their own application mode while still using
         the same application page.
         ======================================================== */
  
      generalApplication: {
  
        type:
          "general",
  
        url:
          GENERAL_APPLICATION_URL,
  
        label:
          "Apply generally / Introduce yourself",
  
        subject:
          "General Application — River",
  
        summary:
          "Don't see the right role yet? Introduce yourself and tell us what you would like to build, learn or contribute at River.",
  
        description:
          "We welcome thoughtful applications from people who believe they could contribute to River even when there is no specific open role that matches their experience."
  
      },
  
  
      /* ========================================================
         🟢 UPGRADE — SINGLE ROLE REGISTRY
  
         IMPORTANT:
  
         This is the source of truth.
  
         Do NOT create separate:
  
         careers-software-engineer.html
         careers-frontend-engineer.html
         careers-internship.html
  
         Add a role here instead.
         ======================================================== */
  
      roles: [
  
  
        /* ======================================================
           SOFTWARE ENGINEER
           ====================================================== */
  
        {
  
          slug:
            "software-engineer",
  
          title:
            "Software Engineer",
  
          department:
            "Engineering",
  
          departmentLabel:
            "Engineering",
  
          type:
            "Full-time",
  
          location:
            "Nairobi / Remote",
  
          workMode:
            "Hybrid / Remote",
  
          status:
            "open",
  
          featured:
            true,
  
          category:
            "Engineering",
  
          experienceLevel:
            "Professional",
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — ROLE INTRODUCTION
             ---------------------------------------------------- */
  
          summary:
            "Build and maintain production software across River's projects and internal systems.",
  
          description:
            "Work across frontend, backend and systems engineering while helping River solve real operational problems.",
  
          why:
            "River builds software around real problems. This role exists for someone who wants to go beyond implementing isolated tickets and help turn requirements, constraints and ideas into reliable systems.",
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — RESPONSIBILITIES
             ---------------------------------------------------- */
  
          responsibilities: [
  
            "Design and implement reliable software.",
  
            "Work with product and engineering stakeholders to understand problems before building solutions.",
  
            "Review code and improve system quality.",
  
            "Help diagnose and solve production problems.",
  
            "Contribute to technical decisions, architecture and engineering practices.",
  
            "Improve existing systems rather than assuming everything needs to be rebuilt."
  
          ],
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — REQUIREMENTS
             ---------------------------------------------------- */
  
          requirements: [
  
            "Strong software engineering fundamentals.",
  
            "Ability to reason about systems, trade-offs and implementation choices.",
  
            "Comfort learning unfamiliar technologies.",
  
            "Ability to communicate clearly and work collaboratively.",
  
            "Care for software quality, maintainability and reliability."
  
          ],
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — MINDSET
             ---------------------------------------------------- */
  
          mindset: [
  
            "Curious enough to ask why before deciding how.",
  
            "Comfortable saying 'I don't know yet' and then figuring it out.",
  
            "Willing to give and receive thoughtful feedback.",
  
            "More interested in solving the right problem than looking clever.",
  
            "Able to take ownership without needing to know everything."
  
          ],
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — NICE TO HAVE
             ---------------------------------------------------- */
  
          niceToHave: [
  
            "Experience with production systems.",
  
            "Experience working across the full stack.",
  
            "Interest in infrastructure or security.",
  
            "Experience with APIs, databases or distributed systems.",
  
            "Experience monitoring and troubleshooting deployed software."
  
          ],
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — LEARNING
             ---------------------------------------------------- */
  
          learning: [
  
            "How real software systems evolve after launch.",
  
            "How engineering decisions interact with product and business constraints.",
  
            "Production debugging, reliability and system maintenance.",
  
            "How to design systems that remain useful as requirements change.",
  
            "How River approaches practical software engineering."
  
          ],
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — WHO THIS ROLE IS FOR
             ---------------------------------------------------- */
  
          whoThisIsFor:
            "This role is for someone who enjoys building things, asking questions and figuring out how systems work. You do not need to know every technology River uses. We care more about how you think, how you learn and how you approach problems.",
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — HOW THIS ROLE WORKS
             ---------------------------------------------------- */
  
          workflow: [
  
            "Understand the problem and constraints.",
  
            "Build a practical solution.",
  
            "Review and test the work.",
  
            "Ship it into a real environment.",
  
            "Learn from reality and improve it."
  
          ],
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — SPECIFIC ROLE APPLICATION ROUTING
             ---------------------------------------------------- */
  
          application: {
  
            type:
              "role",
  
            url:
              `${APPLICATION_PAGE_URL}?role=software-engineer`,
  
            label:
              "Apply / Introduce yourself",
  
            subject:
              "Application — Software Engineer"
  
          }
  
        },
  
  
        /* ======================================================
           FRONTEND ENGINEER
           ====================================================== */
  
        {
  
          slug:
            "frontend-engineer",
  
          title:
            "Frontend Engineer",
  
          department:
            "Engineering",
  
          departmentLabel:
            "Engineering",
  
          type:
            "Full-time",
  
          location:
            "Nairobi / Remote",
  
          workMode:
            "Hybrid / Remote",
  
          status:
            "open",
  
          featured:
            false,
  
          category:
            "Engineering",
  
          experienceLevel:
            "Professional",
  
  
          summary:
            "Build thoughtful, accessible and high-quality interfaces for River's digital products.",
  
          description:
            "Work at the intersection of engineering, interaction design and product thinking.",
  
          why:
            "The frontend is where people experience the systems we build. This role exists for someone who cares about both how software works and how it feels to use.",
  
  
          responsibilities: [
  
            "Build responsive interfaces and reusable frontend systems.",
  
            "Translate product requirements and designs into robust implementations.",
  
            "Improve accessibility, performance and usability.",
  
            "Work closely with backend engineers and product thinkers.",
  
            "Review frontend code and help maintain consistent engineering standards."
  
          ],
  
  
          requirements: [
  
            "Strong HTML, CSS and JavaScript fundamentals.",
  
            "Experience building responsive web interfaces.",
  
            "Understanding of accessibility and browser behaviour.",
  
            "Comfort working with APIs and asynchronous data.",
  
            "Ability to reason about maintainable frontend architecture."
  
          ],
  
  
          mindset: [
  
            "Care about the person using the interface.",
  
            "Enjoy turning messy requirements into clear experiences.",
  
            "Think about performance and accessibility as engineering concerns.",
  
            "Enjoy learning new tools without chasing tools for their own sake."
  
          ],
  
  
          niceToHave: [
  
            "Experience with modern JavaScript frameworks.",
  
            "Experience building design systems.",
  
            "Animation or interaction design experience.",
  
            "Experience with frontend testing."
  
          ],
  
  
          learning: [
  
            "How frontend systems behave in production.",
  
            "How design and engineering decisions interact.",
  
            "How to build reusable UI systems.",
  
            "Performance, accessibility and maintainability techniques."
  
          ],
  
  
          whoThisIsFor:
            "You might be an experienced frontend engineer or someone who has grown through building real projects and wants to take the next step. If you care about the details and still keep the bigger problem in view, we would like to hear from you.",
  
  
          workflow: [
  
            "Understand the user and problem.",
  
            "Design the interface and implementation.",
  
            "Build and review the experience.",
  
            "Test it across real devices and conditions.",
  
            "Ship and improve it."
  
          ],
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — SPECIFIC ROLE APPLICATION ROUTING
             ---------------------------------------------------- */
  
          application: {
  
            type:
              "role",
  
            url:
              `${APPLICATION_PAGE_URL}?role=frontend-engineer`,
  
            label:
              "Apply / Introduce yourself",
  
            subject:
              "Application — Frontend Engineer"
  
          }
  
        },
  
  
        /* ======================================================
           🟢 UPGRADE — ENGINEERING INTERNSHIP
  
           Internship is treated as a normal opportunity.
  
           No special page.
           No special renderer.
           No special HTML.
           ====================================================== */
  
        {
  
          slug:
            "engineering-internship",
  
          title:
            "Engineering Internship",
  
          department:
            "Engineering",
  
          departmentLabel:
            "Early Career",
  
          type:
            "Internship",
  
          location:
            "Nairobi / Hybrid",
  
          workMode:
            "Hybrid",
  
          status:
            "open",
  
          featured:
            true,
  
          category:
            "Engineering",
  
          experienceLevel:
            "Early Career",
  
  
          summary:
            "Learn by contributing to real software projects alongside experienced engineers.",
  
          description:
            "A practical opportunity to learn software engineering by participating in real work rather than sitting on the sidelines.",
  
          why:
            "River believes early-career engineers learn best when they are trusted with meaningful work, given context and supported while they figure things out.",
  
  
          responsibilities: [
  
            "Contribute to real River projects under appropriate guidance.",
  
            "Work on small engineering tasks and gradually take on larger ones.",
  
            "Participate in code reviews and technical discussions.",
  
            "Test, document and improve software.",
  
            "Ask questions, investigate problems and share what you learn."
  
          ],
  
  
          requirements: [
  
            "Basic understanding of programming fundamentals.",
  
            "Curiosity about how software systems work.",
  
            "Willingness to learn unfamiliar technologies.",
  
            "Ability to communicate clearly and ask for help when needed.",
  
            "Some evidence of building, experimenting or learning through projects."
  
          ],
  
  
          mindset: [
  
            "Curious rather than afraid of not knowing.",
  
            "Happy to learn in public.",
  
            "Willing to receive feedback.",
  
            "Interested in understanding why something works, not just copying it.",
  
            "Patient enough to debug."
  
          ],
  
  
          niceToHave: [
  
            "Personal projects.",
  
            "University, college or technical training in computing.",
  
            "Open-source contributions.",
  
            "Experience with Git.",
  
            "Basic web development experience."
  
          ],
  
  
          learning: [
  
            "How production software is actually built.",
  
            "Git, code review and collaborative engineering.",
  
            "Frontend and backend development practices.",
  
            "Testing and debugging real systems.",
  
            "How engineers reason about technical problems.",
  
            "How software changes after it meets real users."
  
          ],
  
  
          whoThisIsFor:
            "This is for someone early in their journey who wants to learn by doing. You do not need to know everything, and you do not need an enormous portfolio. Show us that you are curious, that you build things and that you want to become better.",
  
  
          workflow: [
  
            "Learn the problem.",
  
            "Try a solution.",
  
            "Review it with the team.",
  
            "Ship a small piece of useful work.",
  
            "Learn and try again."
  
          ],
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — SPECIFIC INTERNSHIP APPLICATION ROUTING
             ---------------------------------------------------- */
  
          application: {
  
            type:
              "role",
  
            url:
              `${APPLICATION_PAGE_URL}?role=engineering-internship`,
  
            label:
              "Apply for internship",
  
            subject:
              "Application — Engineering Internship"
  
          }
  
        },
  
  
        /* ======================================================
           🟢 UPGRADE — CLOSED ROLE EXAMPLE
           ====================================================== */
  
        {
  
          slug:
            "backend-engineer",
  
          title:
            "Backend Engineer",
  
          department:
            "Engineering",
  
          departmentLabel:
            "Engineering",
  
          type:
            "Full-time",
  
          location:
            "Nairobi / Remote",
  
          workMode:
            "Hybrid / Remote",
  
          status:
            "closed",
  
          featured:
            false,
  
          category:
            "Engineering",
  
          experienceLevel:
            "Professional",
  
  
          summary:
            "Design reliable backend services and systems for River products.",
  
          description:
            "A backend engineering opportunity focused on APIs, data, reliability and system design.",
  
          why:
            "This role is retained in the registry so previous role links remain meaningful even when recruitment closes.",
  
  
          responsibilities: [
  
            "Design backend services and APIs.",
  
            "Work with databases and application data.",
  
            "Improve reliability and maintainability.",
  
            "Collaborate with frontend and product engineers."
  
          ],
  
  
          requirements: [
  
            "Strong programming fundamentals.",
  
            "Understanding of APIs and databases.",
  
            "Ability to reason about system behaviour.",
  
            "Good communication and collaborative working style."
  
          ],
  
  
          mindset: [
  
            "Curious about how systems behave.",
  
            "Comfortable debugging.",
  
            "Thoughtful about trade-offs.",
  
            "Willing to improve existing systems."
  
          ],
  
  
          niceToHave: [
  
            "Production backend experience.",
  
            "Cloud or infrastructure experience.",
  
            "Security experience."
  
          ],
  
  
          learning: [
  
            "Production backend architecture.",
  
            "Reliability engineering.",
  
            "API design.",
  
            "Data and system trade-offs."
  
          ],
  
  
          whoThisIsFor:
            "This opportunity is intended for backend engineers who enjoy understanding the systems beneath the interface.",
  
  
          workflow: [
  
            "Understand.",
  
            "Design.",
  
            "Build.",
  
            "Review.",
  
            "Improve."
  
          ],
  
  
          /* ----------------------------------------------------
             🟢 UPGRADE — SPECIFIC ROLE APPLICATION ROUTING
  
             The role remains identifiable even though it is
             closed. jobApplication.js will prevent submission.
             ---------------------------------------------------- */
  
          application: {
  
            type:
              "role",
  
            url:
              `${APPLICATION_PAGE_URL}?role=backend-engineer`,
  
            label:
              "Apply for this role",
  
            subject:
              "Application — Backend Engineer"
  
          }
  
        }
  
      ],
  
  
      /* ========================================================
         🟢 UPGRADE — CAREER RESOURCES
         ======================================================== */
  
      resources: [
  
        {
  
          slug:
            "hiring-faq",
  
          title:
            "Hiring FAQ",
  
          eyebrow:
            "Before you apply",
  
          description:
            "Questions about our process, applications and what working with River looks like.",
  
          href:
            "hiring-faq.html",
  
          icon:
            "?"
  
        }
  
      ],
  
  
      /* ========================================================
         🟢 UPGRADE — CAREER PRINCIPLES
         ======================================================== */
  
      principles: [
  
        {
  
          number:
            "01",
  
          title:
            "Build real systems",
  
          description:
            "Work on software that solves actual operational and business problems."
  
        },
  
  
        {
  
          number:
            "02",
  
          title:
            "Think beyond the ticket",
  
          description:
            "Understand the problem before deciding what to build."
  
        },
  
  
        {
  
          number:
            "03",
  
          title:
            "Own the outcome",
  
          description:
            "Take responsibility for quality, reliability and usefulness."
  
        },
  
  
        {
  
          number:
            "04",
  
          title:
            "Keep getting better",
  
          description:
            "Experiment, learn, review your work and improve the system."
  
        }
  
      ]
  
    };
  
  
    /* ==========================================================
       🟢 UPGRADE — FREEZE NESTED DATA
       ========================================================== */
  
    function deepFreeze(object) {
  
      if (
        object === null ||
        typeof object !== "object"
      ) {
  
        return object;
  
      }
  
  
      Object.getOwnPropertyNames(object).forEach(
        property => {
  
          const value =
            object[property];
  
          if (
            value &&
            typeof value === "object"
          ) {
  
            deepFreeze(value);
  
          }
  
        }
      );
  
  
      return Object.freeze(object);
  
    }
  
  
    deepFreeze(
      RIVER_CAREERS
    );
  
  
    /* ==========================================================
       🟢 UPGRADE — SAFE GLOBAL REGISTRATION
       ========================================================== */
  
    window.RIVER_CAREERS =
      RIVER_CAREERS;
  
  
    /* ==========================================================
       🟢 UPGRADE — CAREER API
       ========================================================== */
  
    window.RiverCareers = {
  
  
      getAllRoles() {
  
        return [
          ...RIVER_CAREERS.roles
        ];
  
      },
  
  
      getOpenRoles() {
  
        return RIVER_CAREERS.roles.filter(
          role =>
            role &&
            role.status === "open"
        );
  
      },
  
  
      getClosedRoles() {
  
        return RIVER_CAREERS.roles.filter(
          role =>
            role &&
            role.status === "closed"
        );
  
      },
  
  
      getRoleBySlug(slug) {
  
        if (!slug) {
  
          return null;
  
        }
  
  
        const normalizedSlug =
          String(slug)
            .trim()
            .toLowerCase();
  
  
        return (
          RIVER_CAREERS.roles.find(
            role =>
              role &&
              role.slug === normalizedSlug
          ) || null
        );
  
      },
  
  
      getRelatedRoles(
        currentSlug,
        limit = 3
      ) {
  
        return RIVER_CAREERS.roles
  
          .filter(
            role =>
              role &&
              role.status === "open" &&
              role.slug !== currentSlug
          )
  
          .sort(
            (a, b) => {
  
              if (
                a.featured === b.featured
              ) {
  
                return 0;
  
              }
  
              return a.featured
                ? -1
                : 1;
  
            }
          )
  
          .slice(
            0,
            Math.max(0, limit)
          );
  
      },
  
  
      hasOpenRoles() {
  
        return (
          this.getOpenRoles().length > 0
        );
  
      },
  
  
      /* ========================================================
         🟢 UPGRADE — GENERAL APPLICATION API
         ======================================================== */
  
      getGeneralApplication() {
  
        return {
          ...RIVER_CAREERS.generalApplication
        };
  
      },
  
  
      getGeneralApplicationUrl() {
  
        return GENERAL_APPLICATION_URL;
  
      },
  
  
      /* ========================================================
         🟢 UPGRADE — APPLICATION URL API
         ======================================================== */
  
      getApplicationUrl(slug) {
  
        if (!slug) {
  
          return GENERAL_APPLICATION_URL;
  
        }
  
  
        const role =
          this.getRoleBySlug(slug);
  
  
        if (
          role &&
          role.application &&
          role.application.url
        ) {
  
          return role.application.url;
  
        }
  
  
        return GENERAL_APPLICATION_URL;
  
      },
  
  
      /* ========================================================
         🟢 UPGRADE — APPLICATION TYPE API
         ======================================================== */
  
      getApplicationType(slug) {
  
        if (!slug) {
  
          return "general";
  
        }
  
  
        const role =
          this.getRoleBySlug(slug);
  
  
        return (
          role?.application?.type ||
          "general"
        );
  
      },
  
  
      /* ========================================================
         🟢 UPGRADE — ROLE PAGE URL API
         ======================================================== */
  
      getRolePageUrl(slug) {
  
        if (!slug) {
  
          return RIVER_CAREERS.rolePageUrl;
  
        }
  
  
        return (
          RIVER_CAREERS.rolePageUrl +
          "?role=" +
          encodeURIComponent(slug)
        );
  
      }
  
    };
  
  
  })();