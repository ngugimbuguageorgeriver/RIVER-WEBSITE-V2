/**
 * ============================================================
 * RIVER HEADER LOGO
 * header-logo.js
 *
 * 🟢 UPGRADE
 * Controlled River logo entrance and interaction.
 * ============================================================
 */

(function () {

  "use strict";


  let initialized = false;



  /*
  ============================================================
  🟢 INITIALIZE
  ============================================================
  */

  function initLogo() {

    if (initialized) {
      return;
    }


    const logo =
      document.querySelector(
        ".logo-image"
      );

    const logoLink =
      document.querySelector(
        ".logo"
      );


    if (!logo || !logoLink) {
      return;
    }


    initialized = true;


    /*
    ============================================================
    🟢 REDUCED MOTION
    ============================================================
    */

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (reducedMotion) {

      gsap.set(
        logo,
        {
          opacity: 1,
          y: 0,
          scale: 1
        }
      );

      return;

    }


    /*
    ============================================================
    🟢 ENTRY ANIMATION
    ============================================================
    */

    gsap.set(
      logo,
      {
        opacity: 0,
        y: -10,
        scale: .97
      }
    );


    gsap.to(
      logo,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: .9,
        delay: .15,
        ease: "power3.out"
      }
    );


    /*
    ============================================================
    🟢 LOGO HOVER
    ============================================================
    */

    logoLink.addEventListener(
      "mouseenter",
      () => {

        gsap.to(
          logo,
          {
            scale: 1.035,
            duration: .3,
            ease: "power2.out",
            overwrite: true
          }
        );

      }
    );


    logoLink.addEventListener(
      "mouseleave",
      () => {

        gsap.to(
          logo,
          {
            scale: 1,
            duration: .35,
            ease: "power2.out",
            overwrite: true
          }
        );

      }
    );


    /*
    ============================================================
    🟢 KEYBOARD FOCUS
    ============================================================
    */

    logoLink.addEventListener(
      "focus",
      () => {

        gsap.to(
          logo,
          {
            scale: 1.035,
            duration: .25,
            ease: "power2.out",
            overwrite: true
          }
        );

      }
    );


    logoLink.addEventListener(
      "blur",
      () => {

        gsap.to(
          logo,
          {
            scale: 1,
            duration: .25,
            ease: "power2.out",
            overwrite: true
          }
        );

      }
    );

  }



  /*
  ============================================================
  🟢 DOM READY
  ============================================================
  */

  document.addEventListener(
    "DOMContentLoaded",
    initLogo
  );



  /*
  ============================================================
  🟢 INTRO FINISHED
  ============================================================
  */

  document.addEventListener(
    "introFinished",
    () => {

      if (!initialized) {

        initLogo();

        return;

      }


      const logo =
        document.querySelector(
          ".logo-image"
        );


      if (!logo) {
        return;
      }


      gsap.fromTo(
        logo,
        {
          opacity: .7,
          y: -4
        },
        {
          opacity: 1,
          y: 0,
          duration: .6,
          ease: "power2.out",
          overwrite: true
        }
      );

    }
  );

})();