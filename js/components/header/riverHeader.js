/**
 * ============================================================
 * RIVER HEADER
 * riverHeader.js
 *
 * 🟢 UPGRADE
 * Minimal River header.
 *
 * Header navigation intentionally leads to menu.html.
 * The menu page contains the complete site navigation.
 * ============================================================
 */

class RiverHeader extends HTMLElement {

  constructor() {

    super();

    this.isScrolled = false;
    this.lastScrollY = 0;
    this.scrollTicking = false;

  }


  connectedCallback() {

    /*
    ============================================================
    🟢 PREVENT DUPLICATE RENDERING
    ============================================================
    */

    if (this.querySelector(".header")) {
      return;
    }


    /*
    ============================================================
    🟢 HEADER TEMPLATE
    ============================================================
    */

    this.innerHTML = `

      <header
        class="header"
        role="banner"
      >

        <div class="header-container">


          <!-- ==================================================
               🟢 RIVER BRAND
          ================================================== -->

          <a
            href="index.html"
            class="logo"
            aria-label="River — Software Engineering & Technology"
          >

            <span class="logo-mark">

              <img
                class="logo-image"
                src="assets/Media/riverWebsiteLogos/blackRiver.svg"
                alt="River"
              />

            </span>


            <span class="logo-context">

              <span class="logo-context-primary">
                River
              </span>

              <span class="logo-context-secondary">
                Software Engineering &amp; Technology
              </span>

            </span>

          </a>



          <!-- ==================================================
               🟢 MENU BUTTON
          ================================================== -->

          <nav
            class="header-navigation"
            aria-label="Main navigation"
          >

            <a
              href="menu.html"
              class="menu-btn"
              aria-label="Open River navigation menu"
            >

              <span
                class="menu-btn-lines"
                aria-hidden="true"
              >

                <span></span>
                <span></span>
                <span></span>

              </span>


              <span class="menu-btn-label">
                Menu
              </span>

            </a>

          </nav>


        </div>




        <!-- ==================================================
             🟢 PAGE PROGRESS
        ================================================== -->

        <div
          class="header-system-line"
          aria-hidden="true"
        >

          <span
            class="header-system-line-progress"
          ></span>

        </div>

      </header>

    `;


    /*
    ============================================================
    🟢 INITIALIZE
    ============================================================
    */

    this.initHeader();

  }



  /*
  ============================================================
  🟢 INITIALIZE HEADER
  ============================================================
  */

  initHeader() {

    this.header =
      this.querySelector(".header");

    this.progress =
      this.querySelector(
        ".header-system-line-progress"
      );


    if (!this.header) {
      return;
    }


    /*
    ------------------------------------------------------------
    INITIAL STATE
    ------------------------------------------------------------
    */

    this.updateScrollState();

    this.updateScrollProgress();


    /*
    ------------------------------------------------------------
    🟢 SCROLL
    ------------------------------------------------------------
    */

    window.addEventListener(
      "scroll",
      () => {

        if (this.scrollTicking) {
          return;
        }


        window.requestAnimationFrame(() => {

          this.updateScrollState();

          this.updateScrollProgress();

          this.scrollTicking = false;

        });


        this.scrollTicking = true;

      },
      {
        passive: true
      }
    );

  }



  /*
  ============================================================
  🟢 SCROLL STATE
  ============================================================
  */

  updateScrollState() {

    const currentScrollY =
      window.scrollY || 0;


    const shouldBeScrolled =
      currentScrollY > 30;


    if (
      shouldBeScrolled !==
      this.isScrolled
    ) {

      this.isScrolled =
        shouldBeScrolled;


      this.header.classList.toggle(
        "header-scrolled",
        this.isScrolled
      );

    }


    this.lastScrollY =
      currentScrollY;

  }



  /*
  ============================================================
  🟢 SCROLL PROGRESS
  ============================================================
  */

  updateScrollProgress() {

    if (!this.progress) {
      return;
    }


    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;


    if (documentHeight <= 0) {

      this.progress.style.width =
        "0%";

      return;

    }


    const percentage =
      Math.min(
        100,
        Math.max(
          0,
          (
            window.scrollY /
            documentHeight
          ) * 100
        )
      );


    this.progress.style.width =
      `${percentage}%`;

  }

}


/*
============================================================
🟢 REGISTER COMPONENT
============================================================
*/

if (
  !customElements.get("river-header")
) {

  customElements.define(
    "river-header",
    RiverHeader
  );

}