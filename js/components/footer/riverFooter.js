/**
 * 
 * 
 */


class RiverFooter extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer class="river-footer">
            <div class="container small center">
                
                <p>
                <div>
                    <img src="assets/images/Logo/Logo2.png" alt="River Logo" class="footer-logo">
                </div>&copyCopyright 
                <span id="year">

                </span> River.Inc | SOFTWARES By RIVER • Built with performance & accessibility in mind • 
                </p>


            </div>
        </footer>
      `;
  
      this.setYear();
    }
  
    setYear() {
      const yearEl = this.querySelector("#year");
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
      }
    }
  }
  
  customElements.define("river-footer", RiverFooter);