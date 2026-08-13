/**
 * ============================================================
 * RIVER — INTRO COMPONENT
 * ============================================================
 *
 * Purpose:
 * Cinematic introduction for River — Software Engineering
 * & Technology.
 *
 * Narrative:
 *
 * 01 — RIVER
 * 02 — WE FLOW
 * 03 — IDEAS → SYSTEMS
 * 04 — SYSTEMS → OUTCOMES
 * 05 — WE DESIGN / ENGINEER / BUILD
 * 06 — ENTER RIVER
 *
 * 🟢 UPGRADE:
 * Rebuilt around River's engineering positioning rather than
 * presenting River as a traditional web/design agency.
 * ============================================================
 */

class RiverIntro extends HTMLElement {

  connectedCallback() {

    /* ==========================================================
       🟢 UPGRADE — PREVENT DUPLICATE INITIALISATION
    ========================================================== */

    if (this.dataset.initialized === "true") return;

    this.dataset.initialized = "true";


    /* ==========================================================
       🟢 UPGRADE — COMPLETE INTRO MARKUP
    ========================================================== */

    this.innerHTML = `

      <!-- ======================================================
           INTRO
      ======================================================= -->

      <div id="intro" aria-label="River introduction">

        <!-- ====================================================
             BACKGROUND MEDIA
        ===================================================== -->

        <div class="intro-media" aria-hidden="true">

          <div class="slides">

            <!-- 🟢 UPGRADE — VIDEO 01: DIGITAL EXPERIENCES -->
            <div
              class="slide"
              data-index="0"
              data-label="Digital Experiences"
              data-bg="assets/Media/INTRO/INTRO1.mp4"
            ></div>

            <!-- 🟢 UPGRADE — VIDEO 02: SOFTWARE SYSTEMS -->
            <div
              class="slide"
              data-index="1"
              data-label="Software Systems"
              data-bg="assets/Media/INTRO/INTRO2.mp4"
            ></div>

            <!-- 🟢 UPGRADE — VIDEO 03: CONNECTED OUTCOMES -->
            <div
              class="slide"
              data-index="2"
              data-label="Connected Outcomes"
              data-bg="assets/Media/INTRO/INTRO3.mp4"
            ></div>

          </div>

          <!-- 🟢 UPGRADE — CINEMATIC OVERLAY -->
          <div class="intro-vignette"></div>

          <!-- 🟢 UPGRADE — MOVING ATMOSPHERIC LAYER -->
          <canvas id="liquidCanvas" aria-hidden="true"></canvas>

          <!-- EXISTING WEBGL/CANVAS LAYER -->
          <canvas id="webglCanvas" aria-hidden="true"></canvas>

        </div>


        <!-- ====================================================
             TOP BRAND
        ===================================================== -->

        <header class="intro-header">

          <!-- 🟢 UPGRADE — SMALL BRAND MARK -->
          <div class="intro-brand">
            <span class="intro-brand-mark">R</span>
            <span class="intro-brand-name">RIVER</span>
          </div>

          <!-- 🟢 UPGRADE — POSITIONING -->
          <div class="intro-positioning">
            SOFTWARE ENGINEERING &amp; TECHNOLOGY
          </div>

        </header>


        <!-- ====================================================
             CENTRAL EXPERIENCE
        ===================================================== -->

        <main class="intro-stage">

          <!-- 🟢 UPGRADE — STAGE LABEL -->
          <div class="intro-stage-label" id="introStageLabel">
            01 / 03
          </div>


          <!-- ==================================================
               LOGO
          =================================================== -->

          <div class="intro-logo-wrap">

            <div class="intro-logo-glow"></div>

            <img
              id="introLogo"
              src="assets/Media/riverWebsiteLogos/whiter.svg"
              alt="River"
            />

          </div>


          <!-- ==================================================
               MAIN TYPOGRAPHY
          =================================================== -->

          <div class="intro-copy">

            <!-- 🟢 UPGRADE — PRIMARY STATEMENT -->
            <h1 id="introTitle">

              <span
                id="typedText"
                aria-live="polite"
              ></span>

              <span
                id="caret"
                aria-hidden="true"
              ></span>

            </h1>

          </div>


          <!-- 🟢 UPGRADE — SUPPORTING STATEMENT -->

          <p
            class="intro-subtitle"
            id="introSubtitle"
          >
            Software engineered around real problems.
          </p>

        </main>


        <!-- ====================================================
             BOTTOM LEFT — PHILOSOPHY
        ===================================================== -->

        <div class="intro-philosophy">

          <!-- 🟢 UPGRADE -->
          <span class="intro-eyebrow">
            OUR APPROACH
          </span>

          <span class="intro-philosophy-line">
            Ideas → Systems → Outcomes
          </span>

        </div>


        <!-- ====================================================
             BOTTOM CENTER — PROGRESS
        ===================================================== -->

        <div
          class="intro-progress"
          aria-label="Introduction progress"
        >

          <!-- 🟢 UPGRADE — THREE STAGE PROGRESS -->
          <button
            class="intro-progress-item active"
            data-slide="0"
            aria-label="Digital Experiences"
          >
            <span class="progress-number">01</span>
            <span class="progress-line"></span>
          </button>

          <button
            class="intro-progress-item"
            data-slide="1"
            aria-label="Software Systems"
          >
            <span class="progress-number">02</span>
            <span class="progress-line"></span>
          </button>

          <button
            class="intro-progress-item"
            data-slide="2"
            aria-label="Connected Outcomes"
          >
            <span class="progress-number">03</span>
            <span class="progress-line"></span>
          </button>

        </div>


        <!-- ====================================================
             BOTTOM RIGHT — ENTER
        ===================================================== -->

        <div class="intro-enter">

          <!-- 🟢 UPGRADE — REFINED ENTRY CTA -->

          <button
            id="proceedBtn"
            type="button"
            aria-label="Enter River"
          >

            <span class="enter-label">
              ENTER RIVER
            </span>

            <span
              class="enter-arrow"
              aria-hidden="true"
            >
              →
            </span>

          </button>

        </div>


        <!-- ====================================================
             MEDIA NAVIGATION
        ===================================================== -->

        <div class="intro-slide-nav">

          <!-- 🟢 UPGRADE — MINIMAL NAVIGATION -->

          <button
            id="prevSlide"
            class="slide-btn prev"
            type="button"
            aria-label="Previous introduction"
          >
            ←
          </button>

          <button
            id="nextSlide"
            class="slide-btn next"
            type="button"
            aria-label="Next introduction"
          >
            →
          </button>

        </div>


        <!-- ====================================================
             AUDIO
        ===================================================== -->

        <!-- 🟢 UPGRADE — AUDIO KEPT LOCAL/OPTIONAL -->
        <audio
          id="introSound"
          preload="auto"
          playsinline
        >
          <source
            src="https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3"
            type="audio/mpeg"
          >
        </audio>

        <audio
          id="typeSound"
          preload="auto"
          playsinline
        >
          <source
            src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"
            type="audio/mpeg"
          >
        </audio>

      </div>
    `;


    /* ==========================================================
       INITIALISE
    ========================================================== */

    this.init();
  }


  /* ============================================================
     INITIALISATION
  ============================================================ */

  init() {

    if (typeof initIntro === "function") {

      initIntro();

    }

  }

}


/* ==============================================================
   CUSTOM ELEMENT
============================================================== */

if (!customElements.get("river-intro")) {

  customElements.define(
    "river-intro",
    RiverIntro
  );

}