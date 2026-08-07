/**
 * riverIntro.js
 */

class RiverIntro extends HTMLElement {
  connectedCallback() {



    this.innerHTML = `
      <!-- INTRO SCREEN -->
      <div id="intro">
          <canvas id="webglCanvas"></canvas>
          <canvas id="liquidCanvas"></canvas>

          <!-- 🟢 GREEN: VIDEO-ONLY SLIDES -->
          <div class="slides">

            <!-- 🟢 GREEN: VIDEO 1 -->
            <div class="slide" data-bg="assets/images/Vids/1.mp4"></div>

            <!-- 🟢 GREEN: VIDEO 2 -->
            <div class="slide" data-bg="assets/images/Vids/2.mp4"></div>

            <!-- 🟢 GREEN: VIDEO 3 -->
            <div class="slide" data-bg="assets/images/Vids/4.mp4"></div>

          </div>

          <!-- CENTER -->
          <div class="intro-center">
            <img id="introLogo" src="assets/images/r logo.png" alt="River Logo">
            <h1 id="introTitle">
              <span id="typedText"></span><span id="caret"></span>
            </h1>
          </div>

          <!-- TOP CENTER BRAND -->
          <div class="intro-top-brand">
            <h2>River</h2>
          </div>

          <!-- CONTROLS -->
          <div class="intro-controls">

              <div class="intro-dots">
                  <div class="dot tl"></div>
                  <div class="dot tr"></div>
                  <div class="dot bl"></div>
                  <div class="dot br"></div>
              </div>

              <button id="proceedBtn">Proceed</button>
          </div>

          <!-- INFO -->
          <div class="intro-info-box">
            <div class="intro-text">
              <p>We help founders and growing brands turn their Ideas into Profits through Our refined Softwares & Websites</p>
            </div>

            <div class="intro-services">
              <div class="intro-service" >/01 Web Design</div>
              <div class="intro-service" >/02 Website Development</div>
              <div class="intro-service" >/03 Motion</div>
            </div>

            <div class="intro-software">
              SOFTWARE BY RIVER
            </div>
          </div>

          <!-- TRUST -->
          <div class="intro-trust">
            <div class="avatars">UserUserUserUser</div>
            <div class="rating">
              <strong>4.92/5</strong>
              <p>Trusted by 122+ Founders</p>
            </div>
          </div>

          <!-- AUDIO -->
          <audio id="introSound" preload="auto">
            <source src="https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3">
          </audio>

          <audio id="typeSound" preload="auto">
            <source src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3">
          </audio>

          <!-- NAV -->
          <button id="prevSlide" class="slide-btn prev">‹</button>
          <button id="nextSlide" class="slide-btn next">›</button>

      </div>
    `;


    this.init();

    
  }

  init() {
    if (typeof initIntro === "function") {
      initIntro();
    }
  }
}

customElements.define("river-intro", RiverIntro);