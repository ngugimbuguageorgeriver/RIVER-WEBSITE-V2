/**
 * ============================================================
 * RIVER — PRODUCT DEVELOPMENT PROCESS
 * ============================================================
 *
 * 🟢 UPGRADE
 *
 * This component transforms the original horizontal process
 * into an interactive product-development journey.
 *
 * Journey:
 *
 * IDEA
 *   ↓
 * DISCOVERY
 *   ↓
 * STRATEGY
 *   ↓
 * DESIGN
 *   ↓
 * ENGINEERING
 *   ↓
 * VALIDATION
 *   ↓
 * LAUNCH
 *   ↓
 * EVOLVE
 *
 * The experience intentionally loops back to the beginning.
 *
 * ============================================================
 */


class ProcessHorizontal extends HTMLElement {


  constructor() {

    super();


    /*
     * 🟢 UPGRADE:
     * Centralized stage data.
     */

    this.slidesData = [

      {
        step: "01",
        phase: "DISCOVER",
        title: "The Idea",
        statement: "Every product begins with a possibility.",
        video: "assets/Media/placeHolderVideos/placeHolderVideo.mp4",

        whatWeDo: [
          "Understand the business idea",
          "Identify the problem",
          "Understand the target users",
          "Explore the existing environment"
        ],

        whyItMatters:
          "Starting with the problem prevents River from building a technically impressive solution to the wrong problem.",

        deliverables: [
          "Problem definition",
          "User context",
          "Opportunity map",
          "Initial product brief"
        ],

        doneWhen: [
          "The problem is clearly articulated",
          "The target user is understood",
          "The opportunity is worth pursuing"
        ],

        gate: {
          question: "Is the problem worth solving?",
          next: "ENTER DISCOVERY"
        }
      },


      {
        step: "02",
        phase: "DISCOVER",
        title: "Discovery & Research",
        statement: "We turn assumptions into evidence.",
        video: "assets/Media/placeHolderVideos/placeHolderVideo.mp4",

        whatWeDo: [
          "Research users and markets",
          "Analyse existing systems",
          "Map workflows",
          "Identify constraints",
          "Challenge assumptions"
        ],

        whyItMatters:
          "Research reduces uncertainty before significant design and engineering resources are committed.",

        deliverables: [
          "Research findings",
          "User personas",
          "Journey maps",
          "Problem opportunities",
          "Requirements foundation"
        ],

        doneWhen: [
          "Users and stakeholders are understood",
          "Major constraints are visible",
          "The core opportunity is validated"
        ],

        gate: {
          question: "Do we understand the problem?",
          next: "ENTER STRATEGY"
        }
      },


      {
        step: "03",
        phase: "DEFINE",
        title: "Product Strategy",
        statement: "We turn a problem into a product direction.",
        video: "assets/Media/placeHolderVideos/placeHolderVideo.mp4",

        whatWeDo: [
          "Define product objectives",
          "Prioritize functionality",
          "Create the MVP boundary",
          "Map product architecture",
          "Establish technical direction"
        ],

        whyItMatters:
          "Strategy creates a shared definition of what should be built, why it should be built and what should wait.",

        deliverables: [
          "Product roadmap",
          "Feature priorities",
          "MVP definition",
          "Technical direction",
          "Delivery plan"
        ],

        doneWhen: [
          "Scope is agreed",
          "Priorities are clear",
          "Success criteria are defined",
          "Technical direction is understood"
        ],

        gate: {
          question: "Do we know what we are building?",
          next: "ENTER DESIGN"
        }
      },


      {
        step: "04",
        phase: "DESIGN",
        title: "Experience & Architecture",
        statement: "The idea becomes something people can understand.",
        video: "assets/Media/placeHolderVideos/placeHolderVideo.mp4",

        whatWeDo: [
          "Map user flows",
          "Create wireframes",
          "Design interfaces",
          "Build interaction systems",
          "Define technical architecture"
        ],

        whyItMatters:
          "Good design aligns the human experience with the technical system underneath it.",

        deliverables: [
          "User flows",
          "Wireframes",
          "UI system",
          "Interactive prototype",
          "Architecture blueprint"
        ],

        doneWhen: [
          "Core flows are understandable",
          "The interface supports the product goals",
          "Architecture supports the required functionality"
        ],

        gate: {
          question: "Can users understand it and can we build it?",
          next: "ENTER ENGINEERING"
        }
      },


      {
        step: "05",
        phase: "BUILD",
        title: "Engineering",
        statement: "The blueprint becomes a working system.",
        video: "assets/Media/placeHolderVideos/placeHolderVideo.mp4",

        whatWeDo: [
          "Build frontend systems",
          "Develop backend services",
          "Implement APIs",
          "Integrate third-party services",
          "Build data systems",
          "Automate workflows"
        ],

        whyItMatters:
          "Engineering turns product intent into reliable software that can operate in the real world.",

        deliverables: [
          "Frontend application",
          "Backend services",
          "APIs",
          "Database systems",
          "Integrations",
          "Infrastructure"
        ],

        doneWhen: [
          "Core functionality works",
          "Systems communicate correctly",
          "The product is deployable",
          "Technical risks are controlled"
        ],

        gate: {
          question: "Does the system work?",
          next: "ENTER VALIDATION"
        }
      },


      {
        step: "06",
        phase: "VALIDATE",
        title: "Testing Lab",
        statement: "We break it before your users do.",
        video: "assets/Media/placeHolderVideos/placeHolderVideo.mp4",

        whatWeDo: [
          "Test functionality",
          "Test responsiveness",
          "Test performance",
          "Test security",
          "Test accessibility",
          "Test edge cases"
        ],

        whyItMatters:
          "A product isn't ready because it works once. It is ready when it behaves reliably under realistic conditions.",

        deliverables: [
          "QA results",
          "Bug reports",
          "Performance findings",
          "Security findings",
          "Release readiness assessment"
        ],

        doneWhen: [
          "Critical defects are resolved",
          "Core workflows pass",
          "Performance is acceptable",
          "Security risks are addressed"
        ],

        gate: {
          question: "Is it ready for real users?",
          next: "ENTER LAUNCH"
        }
      },


      {
        step: "07",
        phase: "LAUNCH",
        title: "Deployment",
        statement: "The product moves from development into reality.",
        video: "assets/Media/placeHolderVideos/placeHolderVideo.mp4",

        whatWeDo: [
          "Prepare production infrastructure",
          "Configure deployment",
          "Set up monitoring",
          "Manage release",
          "Verify production systems"
        ],

        whyItMatters:
          "Launch is an operational transition, not simply the moment a button is pressed.",

        deliverables: [
          "Production deployment",
          "Infrastructure configuration",
          "Monitoring",
          "Release documentation",
          "Operational handover"
        ],

        doneWhen: [
          "Production is stable",
          "Monitoring is active",
          "Critical workflows work",
          "The release is observable"
        ],

        gate: {
          question: "Is the product operating in the real world?",
          next: "ENTER EVOLUTION"
        }
      },


      {
        step: "08",
        phase: "EVOLVE",
        title: "Learn, Optimize & Scale",
        statement: "Launch is where the next product cycle begins.",
        video: "assets/Media/placeHolderVideos/placeHolderVideo.mp4",

        whatWeDo: [
          "Monitor user behaviour",
          "Analyse performance",
          "Measure feature adoption",
          "Improve conversion",
          "Optimize infrastructure",
          "Plan the next product cycle"
        ],

        whyItMatters:
          "Real users reveal information that no planning session can completely predict.",

        deliverables: [
          "Performance insights",
          "Product improvements",
          "Optimization roadmap",
          "Growth opportunities",
          "Next-version priorities"
        ],

        doneWhen: [
          "The product is learning from real usage",
          "Improvement opportunities are identified",
          "The next product cycle is defined"
        ],

        gate: {
          question: "What should we improve next?",
          next: "LOOP BACK TO DISCOVERY"
        }
      }

    ];



    this.isAnimating = false;

    this.wheelLocked = false;

    this.touchStartX = 0;

    this.touchStartY = 0;

    this.mediaObserver = null;

    this.mainST = null;

    this.reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  }



  connectedCallback() {

    this.render();

    this.cacheElements();

    this.initOverview();

    this.initGSAP();

    this.initLazyMedia();

    this.initSlideNav();

    this.initWheelControl();

    this.initSwipe();

    this.initKeyboard();

    this.initStageAnimations();

  }



  disconnectedCallback() {

    if (this.mediaObserver) {

      this.mediaObserver.disconnect();

    }

    if (this.mainST) {

      this.mainST.kill();

    }

  }



  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  render() {

    this.innerHTML = `

      <section
        class="process-section"
        aria-label="River product development process"
      >


        <!-- 🟢 UPGRADE: Ambient background -->
        <div class="process-ambient"></div>


        <!-- 🟢 UPGRADE: Top progress interface -->
        <div class="process-topbar">

          <div class="process-counter">

            <span class="process-counter-current">01</span>

            <span class="process-counter-divider">/</span>

            <span class="process-counter-total">
              ${String(this.slidesData.length).padStart(2, "0")}
            </span>

          </div>


          <div class="process-current-phase">
            DISCOVER
          </div>


          <div class="process-progress-track">

            <div class="process-progress"></div>

          </div>

        </div>


        <!-- 🟢 UPGRADE: Main horizontal track -->
        <div class="process-track">

          ${this.slidesData
            .map((slide, index) => this.createSlide(slide, index))
            .join("")}

        </div>


        <!-- 🟢 UPGRADE: Bottom stage navigation -->
        <nav
          class="process-nav"
          aria-label="Product development stages"
        >

          ${this.slidesData
            .map(
              (slide, index) => `
                <button
                  class="process-nav-item ${index === 0 ? "active" : ""}"
                  type="button"
                  data-index="${index}"
                  aria-label="Go to ${slide.title}"
                  aria-current="${index === 0 ? "step" : "false"}"
                >

                  <span class="nav-number">
                    ${slide.step}
                  </span>

                  <span class="nav-title">
                    ${slide.phase}
                  </span>

                </button>
              `
            )
            .join("")}

        </nav>


        <!-- 🟢 UPGRADE: Horizontal interaction hint -->
        <div class="process-interaction-hint">

          <span class="interaction-line"></span>

          <span>
            SCROLL TO MOVE THROUGH THE PRODUCT
          </span>

          <span class="interaction-arrow">
            →
          </span>

        </div>


      </section>


      <!-- 🟢 UPGRADE:
           Supporting methodology sections -->
      <section class="process-supporting-content">


        <!-- REALITY CHECK -->
        <section class="process-support-section reality-check-section">

          <div class="supporting-heading">

            <span class="supporting-kicker">
              THE RIVER REALITY CHECK
            </span>

            <h2>
              We don't build features
              <span>because they were requested.</span>
            </h2>

          </div>


          <div class="reality-grid">

            <div class="reality-card">
              <span>01</span>
              <strong>REAL PROBLEM?</strong>
              <p>Does it solve something meaningful?</p>
            </div>

            <div class="reality-card">
              <span>02</span>
              <strong>REAL VALUE?</strong>
              <p>Does it create measurable value?</p>
            </div>

            <div class="reality-card">
              <span>03</span>
              <strong>REALISTIC?</strong>
              <p>Can it be built and sustained?</p>
            </div>

            <div class="reality-card">
              <span>04</span>
              <strong>REAL USERS?</strong>
              <p>Will people actually use it?</p>
            </div>

          </div>

        </section>


        <!-- BUILD / BUY -->
        <section class="process-support-section build-buy-section">

          <div class="supporting-heading">

            <span class="supporting-kicker">
              NOT EVERYTHING NEEDS TO BE BUILT
            </span>

            <h2>
              We choose the right
              <span>technical path.</span>
            </h2>

          </div>


          <div class="build-buy-grid">

            <article class="build-buy-card">

              <span class="decision-number">01</span>

              <h3>BUILD</h3>

              <p>
                When the capability is strategically important,
                highly customized or a competitive advantage.
              </p>

            </article>


            <article class="build-buy-card">

              <span class="decision-number">02</span>

              <h3>INTEGRATE</h3>

              <p>
                When a proven external service already solves
                the problem reliably.
              </p>

            </article>


            <article class="build-buy-card">

              <span class="decision-number">03</span>

              <h3>AUTOMATE</h3>

              <p>
                When repetitive business processes can be
                replaced with intelligent workflows.
              </p>

            </article>


            <article class="build-buy-card">

              <span class="decision-number">04</span>

              <h3>REPLACE</h3>

              <p>
                When an existing system has become a limitation
                to growth, reliability or efficiency.
              </p>

            </article>

          </div>

        </section>


        <!-- 🟢 UPGRADE: Architecture visualization -->
        <section class="process-support-section architecture-section">

          <div class="supporting-heading">

            <span class="supporting-kicker">
              UNDER THE INTERFACE
            </span>

            <h2>
              Products are
              <span>systems.</span>
            </h2>

          </div>


          <div class="architecture-flow">

            <div class="architecture-layer">
              <span>01</span>
              <strong>USER</strong>
              <small>People interacting with the product</small>
            </div>

            <div class="architecture-connector">↓</div>

            <div class="architecture-layer">
              <span>02</span>
              <strong>WEB / MOBILE</strong>
              <small>Interfaces and client applications</small>
            </div>

            <div class="architecture-connector">↓</div>

            <div class="architecture-layer">
              <span>03</span>
              <strong>API</strong>
              <small>Communication between systems</small>
            </div>

            <div class="architecture-connector">↓</div>

            <div class="architecture-layer">
              <span>04</span>
              <strong>BUSINESS LOGIC</strong>
              <small>Rules, workflows and product behaviour</small>
            </div>

            <div class="architecture-connector">↓</div>

            <div class="architecture-layer">
              <span>05</span>
              <strong>DATA</strong>
              <small>Databases, storage and information</small>
            </div>

            <div class="architecture-connector">↓</div>

            <div class="architecture-layer">
              <span>06</span>
              <strong>INTEGRATIONS</strong>
              <small>External services and infrastructure</small>
            </div>

          </div>

        </section>


        <!-- MVP -->
        <section class="process-support-section mvp-section">

          <div class="supporting-heading">

            <span class="supporting-kicker">
              SCALE INTENTIONALLY
            </span>

            <h2>
              Start with what matters.
              <span>Then evolve.</span>
            </h2>

          </div>


          <div class="mvp-roadmap">

            <article class="mvp-card">

              <div class="mvp-label">
                START SMALL
              </div>

              <h3>MVP</h3>

              <ul>
                <li>Core problem</li>
                <li>Essential features</li>
                <li>Fast validation</li>
              </ul>

            </article>


            <div class="mvp-arrow">→</div>


            <article class="mvp-card">

              <div class="mvp-label">
                SCALE
              </div>

              <h3>V2</h3>

              <ul>
                <li>More automation</li>
                <li>More integrations</li>
                <li>Better performance</li>
              </ul>

            </article>


            <div class="mvp-arrow">→</div>


            <article class="mvp-card">

              <div class="mvp-label">
                ECOSYSTEM
              </div>

              <h3>PLATFORM</h3>

              <ul>
                <li>Advanced capabilities</li>
                <li>Multiple products</li>
                <li>Enterprise infrastructure</li>
              </ul>

            </article>

          </div>

        </section>


        <!-- TESTING PHILOSOPHY -->
        <section class="process-support-section testing-section">

          <div class="testing-inner">

            <div>

              <span class="supporting-kicker">
                TESTING LAB
              </span>

              <h2>
                We break it
                <span>before users do.</span>
              </h2>

            </div>


            <div class="testing-grid">

              <span>FUNCTIONALITY</span>
              <span>PERFORMANCE</span>
              <span>SECURITY</span>
              <span>RESPONSIVENESS</span>
              <span>ACCESSIBILITY</span>
              <span>EDGE CASES</span>

            </div>

          </div>

        </section>


        <!-- WHAT WE DON'T -->
        <section class="process-support-section philosophy-section">

          <div class="philosophy-columns">


            <div class="philosophy-column dont-column">

              <span class="supporting-kicker">
                WE DON'T
              </span>

              <h2>
                Things we
                <span>avoid.</span>
              </h2>

              <ul>

                <li>
                  <span>×</span>
                  Build features without a reason
                </li>

                <li>
                  <span>×</span>
                  Start development without understanding the problem
                </li>

                <li>
                  <span>×</span>
                  Over-engineer MVPs
                </li>

                <li>
                  <span>×</span>
                  Disappear after launch
                </li>

                <li>
                  <span>×</span>
                  Treat design and engineering as separate worlds
                </li>

              </ul>

            </div>


            <div class="philosophy-column do-column">

              <span class="supporting-kicker">
                WE DO
              </span>

              <h2>
                How we
                <span>work.</span>
              </h2>

              <ul>

                <li>
                  <span>✓</span>
                  Think in systems
                </li>

                <li>
                  <span>✓</span>
                  Validate before scaling
                </li>

                <li>
                  <span>✓</span>
                  Build modularly
                </li>

                <li>
                  <span>✓</span>
                  Measure outcomes
                </li>

                <li>
                  <span>✓</span>
                  Design for the future
                </li>

              </ul>

            </div>

          </div>

        </section>


        <!-- CASE STUDY -->
        <section class="process-support-section case-study-section">

          <div class="case-study-intro">

            <span class="supporting-kicker">
              LET'S SEE IT IN ACTION
            </span>

            <h2>
              One idea.
              <span>One product journey.</span>
            </h2>

            <p>
              The same methodology can take a product from an uncertain
              business problem to a measurable, scalable system.
            </p>

          </div>


          <div class="case-study-flow">

            <div class="case-node">
              <span>01</span>
              <strong>PROBLEM</strong>
              <small>Users struggle with an inefficient workflow.</small>
            </div>

            <div class="case-node">
              <span>02</span>
              <strong>DISCOVERY</strong>
              <small>We understand the users and existing process.</small>
            </div>

            <div class="case-node">
              <span>03</span>
              <strong>STRATEGY</strong>
              <small>We define the MVP and success criteria.</small>
            </div>

            <div class="case-node">
              <span>04</span>
              <strong>DESIGN</strong>
              <small>The workflow becomes a usable product experience.</small>
            </div>

            <div class="case-node">
              <span>05</span>
              <strong>ARCHITECTURE</strong>
              <small>The technical system is designed around the product.</small>
            </div>

            <div class="case-node">
              <span>06</span>
              <strong>BUILD</strong>
              <small>Frontend, backend, APIs and infrastructure come together.</small>
            </div>

            <div class="case-node">
              <span>07</span>
              <strong>LAUNCH</strong>
              <small>The product enters the real environment.</small>
            </div>

            <div class="case-node">
              <span>08</span>
              <strong>RESULT</strong>
              <small>Usage data informs the next product cycle.</small>
            </div>

          </div>

        </section>


        <!-- 🟢 UPGRADE: Continuous product loop -->
        <section class="process-support-section evolution-loop-section">

          <div class="evolution-loop">

            <div class="loop-copy">

              <span class="supporting-kicker">
                THE PRODUCT LOOP
              </span>

              <h2>
                Launch isn't
                <span>the end.</span>
              </h2>

              <p>
                Products are not finished. They are evolved through
                evidence, learning and iteration.
              </p>

            </div>


            <div class="loop-visual">

              <div class="loop-item loop-item-1">
                IDEA
              </div>

              <div class="loop-item loop-item-2">
                DISCOVER
              </div>

              <div class="loop-item loop-item-3">
                BUILD
              </div>

              <div class="loop-item loop-item-4">
                LAUNCH
              </div>

              <div class="loop-item loop-item-5">
                LEARN
              </div>

              <div class="loop-item loop-item-6">
                IMPROVE
              </div>

              <div class="loop-center">
                RIVER
              </div>

            </div>

          </div>

        </section>


        <!-- PROJECT QUALIFICATION -->
        <section class="process-support-section qualification-section">

          <div class="qualification-inner">

            <span class="supporting-kicker">
              START THE NEXT JOURNEY
            </span>

            <h2>
              You have the idea.
              <span>We'll help you find the path.</span>
            </h2>

            <p>
              Whether you are starting from an idea, improving an existing
              product or modernizing an existing system, we can help define
              the next practical step.
            </p>


            <div class="qualification-options">

              <a
                href="#contact"
                class="qualification-option"
              >

                <span>01</span>

                <strong>I HAVE AN IDEA</strong>

                <small>
                  Start with discovery.
                </small>

              </a>


              <a
                href="#contact"
                class="qualification-option"
              >

                <span>02</span>

                <strong>I HAVE A PRODUCT</strong>

                <small>
                  Improve, rebuild or scale it.
                </small>

              </a>


              <a
                href="#contact"
                class="qualification-option"
              >

                <span>03</span>

                <strong>I HAVE A SYSTEM</strong>

                <small>
                  Scale, integrate or modernize it.
                </small>

              </a>

            </div>


            <a
              href="contact.html"
              class="process-primary-cta"
            >
              START A PROJECT
              <span>→</span>
            </a>

          </div>

        </section>


      </section>

    `;

  }



  /*
   * ============================================================
   * CACHE DOM
   * ============================================================
   */

  cacheElements() {

    this.section =
      this.querySelector(".process-section");

    this.track =
      this.querySelector(".process-track");

    this.slides =
      this.querySelectorAll(".process-slide");

    this.navItems =
      this.querySelectorAll(".process-nav-item");

    this.progress =
      this.querySelector(".process-progress");

    this.counterCurrent =
      this.querySelector(".process-counter-current");

    this.currentPhase =
      this.querySelector(".process-current-phase");

    this.overviewStages =
      document.querySelectorAll(".journey-overview-stage");

  }



  /*
   * ============================================================
   * CREATE SLIDE
   * ============================================================
   */

  createSlide(slide, index) {

    return `

      <article
        class="process-slide"
        data-index="${index}"
        data-phase="${slide.phase}"
      >


        <video
          class="process-video"
          data-src="${slide.video}"
          muted
          loop
          playsinline
          preload="none"
          aria-hidden="true"
        ></video>


        <div class="process-video-fallback"></div>


        <div class="process-slide-gradient"></div>


        <div class="process-slide-content">


          <div class="process-stage-heading">

            <span class="process-stage-number">
              ${slide.step}
            </span>

            <span class="process-stage-phase">
              ${slide.phase}
            </span>

          </div>


          <h2>
            ${slide.title}
          </h2>


          <p class="process-statement">
            ${slide.statement}
          </p>


          <div class="process-detail-grid">


            <div class="process-detail-column">

              <span class="detail-label">
                WHAT WE DO
              </span>

              <ul>

                ${slide.whatWeDo
                  .map(item => `<li>${item}</li>`)
                  .join("")}

              </ul>

            </div>


            <div class="process-detail-column">

              <span class="detail-label">
                WHY IT MATTERS
              </span>

              <p>
                ${slide.whyItMatters}
              </p>

            </div>


            <div class="process-detail-column">

              <span class="detail-label">
                WHAT YOU GET
              </span>

              <ul class="deliverables-list">

                ${slide.deliverables
                  .map(item => `<li>${item}</li>`)
                  .join("")}

              </ul>

            </div>


            <div class="process-detail-column">

              <span class="detail-label">
                WE KNOW IT'S DONE WHEN
              </span>

              <ul class="done-list">

                ${slide.doneWhen
                  .map(item => `<li>${item}</li>`)
                  .join("")}

              </ul>

            </div>


          </div>


          <div class="decision-gate">

            <div class="gate-status">
              DECISION GATE
            </div>

            <div class="gate-question">
              ${slide.gate.question}
            </div>

            <div class="gate-next">
              → ${slide.gate.next}
            </div>

          </div>


        </div>


        <div class="process-slide-index">
          ${slide.step}
        </div>


      </article>

    `;

  }



  /*
   * ============================================================
   * OVERVIEW
   * ============================================================
   */

  initOverview() {

    const stages =
      document.querySelectorAll(".journey-overview-stage");

    stages.forEach((stage, index) => {

      stage.addEventListener("click", () => {

        if (!this.mainST) return;

        this.goToSlide(index);

      });

    });

  }



  /*
   * ============================================================
   * GSAP HORIZONTAL ENGINE
   * ============================================================
   */

  initGSAP() {

    if (
      typeof gsap === "undefined" ||
      typeof ScrollTrigger === "undefined"
    ) {

      console.warn(
        "River Product Process: GSAP / ScrollTrigger unavailable."
      );

      return;

    }


    gsap.registerPlugin(
      ScrollTrigger,
      ScrollToPlugin
    );


    /*
     * 🟢 UPGRADE:
     * Respect reduced motion.
     */

    if (this.reduceMotion) {

      this.initReducedMotion();

      return;

    }


    const getTotalWidth = () => {

      return this.track.scrollWidth;

    };


    /*
     * 🟢 UPGRADE:
     * Horizontal product journey.
     */

    this.mainST = ScrollTrigger.create({

      trigger: this.section,

      start: "top top",

      end: () => `+=${getTotalWidth()}`,

      pin: true,

      anticipatePin: 1,

      scrub: 1,

      invalidateOnRefresh: true,

      snap: {

        snapTo: 1 / (this.slides.length - 1),

        duration: {
          min: 0.25,
          max: 0.65
        },

        ease: "power3.inOut",

        inertia: false

      },

      onUpdate: self => {

        this.updateProgress(
          self.progress
        );

      }

    });


    gsap.to(this.track, {

      x: () => {

        return -(
          getTotalWidth() -
          window.innerWidth
        );

      },

      ease: "none",

      scrollTrigger: {

        trigger: this.section,

        start: "top top",

        end: () => `+=${getTotalWidth()}`,

        scrub: 1,

        pin: false,

        invalidateOnRefresh: true,

        snap: {

          snapTo: 1 / (this.slides.length - 1),

          duration: {
            min: 0.25,
            max: 0.65
          },

          ease: "power3.inOut",

          inertia: false

        },

        onUpdate: self => {

          this.updateProgress(
            self.progress
          );

        }

      }

    });


    /*
     * 🟢 UPGRADE:
     * Refresh after videos/layout settle.
     */

    window.addEventListener(
      "load",
      () => {

        ScrollTrigger.refresh();

      },
      {
        once: true
      }
    );

  }



  /*
   * ============================================================
   * PROGRESS
   * ============================================================
   */

  updateProgress(progress) {

    const maxIndex =
      this.slides.length - 1;

    const index =
      Math.round(progress * maxIndex);


    if (this.progress) {

      this.progress.style.width =
        `${progress * 100}%`;

    }


    if (this.counterCurrent) {

      this.counterCurrent.textContent =
        String(index + 1).padStart(2, "0");

    }


    if (this.currentPhase) {

      this.currentPhase.textContent =
        this.slidesData[index].phase;

    }


    this.navItems.forEach(
      (item, navIndex) => {

        const active =
          navIndex === index;

        item.classList.toggle(
          "active",
          active
        );

        item.setAttribute(
          "aria-current",
          active ? "step" : "false"
        );

      }
    );


    this.overviewStages.forEach(
      (stage, stageIndex) => {

        stage.classList.toggle(
          "active",
          stageIndex === index
        );

        stage.classList.toggle(
          "completed",
          stageIndex < index
        );

      }
    );


    this.animateActiveSlide(index);

  }



  /*
   * ============================================================
   * ACTIVE SLIDE ANIMATION
   * ============================================================
   */

  animateActiveSlide(index) {

    if (this.reduceMotion) return;

    this.slides.forEach(
      (slide, slideIndex) => {

        const active =
          slideIndex === index;

        slide.classList.toggle(
          "is-active",
          active
        );

      }
    );

  }



  /*
   * ============================================================
   * NAVIGATION
   * ============================================================
   */

  initSlideNav() {

    this.navItems.forEach(
      (item, index) => {

        item.addEventListener(
          "click",
          event => {

            event.preventDefault();

            this.goToSlide(index);

          }
        );

      }
    );

  }



  /*
   * ============================================================
   * GO TO SLIDE
   * ============================================================
   */

  goToSlide(index) {

    if (
      this.isAnimating ||
      !this.mainST
    ) {

      return;

    }


    index =
      Math.max(
        0,
        Math.min(
          index,
          this.slides.length - 1
        )
      );


    const progress =
      index /
      (this.slides.length - 1);


    const target =
      this.mainST.start +
      (
        this.mainST.end -
        this.mainST.start
      ) *
      progress;


    this.isAnimating = true;


    gsap.to(window, {

      duration: this.reduceMotion
        ? 0
        : 0.7,

      ease: "power3.inOut",

      scrollTo: {

        y: target,

        autoKill: false

      },

      onComplete: () => {

        this.isAnimating = false;

      }

    });

  }



  /*
   * ============================================================
   * CURRENT INDEX
   * ============================================================
   */

  getCurrentIndex() {

    if (!this.mainST) {

      return 0;

    }


    return Math.round(
      this.mainST.progress *
      (this.slides.length - 1)
    );

  }



  /*
   * ============================================================
   * WHEEL CONTROL
   * ============================================================
   */

  initWheelControl() {

    /*
     * 🟢 UPGRADE:
     * Do not aggressively hijack the entire page.
     */

    let wheelTimeout = null;


    window.addEventListener(
      "wheel",
      event => {

        if (!this.mainST) return;


        const rect =
          this.section.getBoundingClientRect();


        const sectionPinned =
          rect.top <= 1 &&
          rect.bottom >= window.innerHeight - 1;


        if (!sectionPinned) {

          return;

        }


        const current =
          this.getCurrentIndex();


        const direction =
          event.deltaY > 0
            ? 1
            : -1;


        const next =
          current + direction;


        /*
         * 🟢 UPGRADE:
         * At the boundaries allow normal page scrolling.
         */

        if (
          next < 0 ||
          next > this.slides.length - 1
        ) {

          return;

        }


        event.preventDefault();


        if (wheelTimeout) {

          return;

        }


        wheelTimeout =
          setTimeout(
            () => {

              wheelTimeout = null;

            },
            650
          );


        this.goToSlide(next);

      },
      {
        passive: false
      }
    );

  }



  /*
   * ============================================================
   * MOBILE SWIPE
   * ============================================================
   */

  initSwipe() {

    this.section.addEventListener(
      "touchstart",
      event => {

        const touch =
          event.touches[0];

        this.touchStartX =
          touch.clientX;

        this.touchStartY =
          touch.clientY;

      },
      {
        passive: true
      }
    );


    this.section.addEventListener(
      "touchend",
      event => {

        const touch =
          event.changedTouches[0];


        const deltaX =
          touch.clientX -
          this.touchStartX;


        const deltaY =
          touch.clientY -
          this.touchStartY;


        /*
         * Ignore primarily vertical gestures.
         */

        if (
          Math.abs(deltaY) >
          Math.abs(deltaX)
        ) {

          return;

        }


        const threshold = 50;


        if (
          Math.abs(deltaX) <
          threshold
        ) {

          return;

        }


        const current =
          this.getCurrentIndex();


        if (deltaX < 0) {

          this.goToSlide(
            current + 1
          );

        } else {

          this.goToSlide(
            current - 1
          );

        }

      },
      {
        passive: true
      }
    );

  }



  /*
   * ============================================================
   * KEYBOARD
   * ============================================================
   */

  initKeyboard() {

    this.section.setAttribute(
      "tabindex",
      "0"
    );


    this.section.addEventListener(
      "keydown",
      event => {

        let direction = 0;


        if (
          event.key === "ArrowRight" ||
          event.key === "ArrowDown"
        ) {

          direction = 1;

        }


        if (
          event.key === "ArrowLeft" ||
          event.key === "ArrowUp"
        ) {

          direction = -1;

        }


        if (!direction) {

          return;

        }


        event.preventDefault();


        const current =
          this.getCurrentIndex();


        this.goToSlide(
          current + direction
        );

      }
    );

  }



  /*
   * ============================================================
   * LAZY VIDEO MEDIA
   * ============================================================
   */

  initLazyMedia() {

    const videos =
      this.querySelectorAll(
        ".process-video"
      );


    if (
      !("IntersectionObserver" in window)
    ) {

      videos.forEach(
        video => {

          this.loadVideo(video);

        }
      );

      return;

    }


    this.mediaObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              const video =
                entry.target;


              if (
                entry.isIntersecting
              ) {

                this.loadVideo(
                  video
                );

              } else {

                if (
                  !video.paused
                ) {

                  video.pause();

                }

              }

            }
          );

        },
        {
          rootMargin:
            "300px"
        }
      );


    videos.forEach(
      video => {

        this.mediaObserver.observe(
          video
        );

      }
    );

  }



  loadVideo(video) {

    if (!video.src) {

      video.src =
        video.dataset.src;

      video.load();

    }


    const playPromise =
      video.play();


    if (
      playPromise &&
      typeof playPromise.catch === "function"
    ) {

      playPromise.catch(
        () => {}
      );

    }

  }



  /*
   * ============================================================
   * STAGE ANIMATIONS
   * ============================================================
   */

  initStageAnimations() {

    if (
      this.reduceMotion ||
      typeof gsap === "undefined"
    ) {

      return;

    }


    this.slides.forEach(
      slide => {

        const content =
          slide.querySelector(
            ".process-slide-content"
          );


        gsap.fromTo(
          content,

          {
            opacity: 0,
            y: 35
          },

          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",

            scrollTrigger: {

              trigger: slide,

              containerAnimation: undefined,

              start: "left 70%",

              horizontal: true,

              toggleActions:
                "play none none reverse"

            }

          }
        );

      }
    );

  }



  /*
   * ============================================================
   * REDUCED MOTION
   * ============================================================
   */

  initReducedMotion() {

    this.section.classList.add(
      "reduced-motion"
    );


    this.slides.forEach(
      slide => {

        slide.style.position =
          "relative";

      }
    );


    this.track.style.width =
      "100%";


    this.track.style.display =
      "block";


    this.slides.forEach(
      slide => {

        slide.style.width =
          "100%";

        slide.style.height =
          "auto";

        slide.style.minHeight =
          "100svh";

      }
    );

  }

}



/*
 * ============================================================
 * CUSTOM ELEMENT REGISTRATION
 * ============================================================
 */

if (
  !customElements.get(
    "process-horizontal"
  )
) {

  customElements.define(
    "process-horizontal",
    ProcessHorizontal
  );

}