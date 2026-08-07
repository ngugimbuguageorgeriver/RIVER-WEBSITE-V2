/**
 * heroSection.js
*/


class HeroSection extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      const title = this.getAttribute("title") || "Default Title";
      const subtitle =
        this.getAttribute("subtitle") ||
        "Default description text goes here.";
  
      this.innerHTML = `
        <section class="hero-container">
          <div class="hero-card">
            <h2>${title}</h2>
            <p class="lead">${subtitle}</p>
          </div>
        </section>
      `;
    }
  }
  
  customElements.define("hero-section", HeroSection);