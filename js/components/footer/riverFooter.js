/**
 * ============================================================
 * RiverFooter
 * ============================================================
 *
 * Purpose:
 * - Provides a minimal, premium footer for the River website.
 * - Keeps branding clear without making the footer feel heavy.
 * - Automatically updates the copyright year.
 *
 * ============================================================
 */

class RiverFooter extends HTMLElement {

  constructor() {
      super();
  }

  connectedCallback() {

      this.innerHTML = `

          <!-- ========================================================
               🟢 UPGRADE: Semantic footer structure
               ======================================================== -->

          <footer class="river-footer">

              <div class="river-footer__inner">

                  <!-- ====================================================
                       🟢 UPGRADE: Brand area
                       ==================================================== -->

                  <div class="river-footer__brand">

                      <a
                          href="/"
                          class="river-footer__logo-link"
                          aria-label="River — Home"
                      >

                          <img
                              src="assets/Media/riverWebsiteLogos/whiteRiver.svg"
                              alt="River"
                              class="river-footer__logo"
                          >

                      </a>


                      <!-- ==================================================
                           🟢 UPGRADE: Clear positioning statement
                           ================================================== -->

                      <p class="river-footer__tagline">
                          Software engineering &amp; digital systems.
                      </p>

                  </div>


                  <!-- ====================================================
                       🟢 UPGRADE: Minimal divider
                       ==================================================== -->

                  <div
                      class="river-footer__divider"
                      aria-hidden="true"
                  ></div>


                  <!-- ====================================================
                       🟢 UPGRADE: Clean footer metadata
                       ==================================================== -->

                  <div class="river-footer__bottom">

                      <p class="river-footer__copyright">
                          &copy;
                          <span id="year"></span>
                          River.
                      </p>


                      <p class="river-footer__descriptor">
                          Software Engineering
                          <span aria-hidden="true">·</span>
                          Digital Systems
                      </p>

                  </div>

              </div>

          </footer>
      `;
      
      this.setYear();
  }


  /**
   * ============================================================
   * 🟢 UPGRADE: Automatic copyright year
   * ============================================================
   */

  setYear() {

      const yearEl = this.querySelector("#year");

      if (yearEl) {
          yearEl.textContent = new Date().getFullYear();
      }
  }
}


/**
* ============================================================
* 🟢 UPGRADE: Prevent duplicate custom-element registration
* ============================================================
*
* This makes the component safer if the script is accidentally
* loaded more than once.
*
* ============================================================
*/

if (!customElements.get("river-footer")) {
  customElements.define("river-footer", RiverFooter);
}