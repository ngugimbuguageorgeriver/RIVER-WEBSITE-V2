/**
 * ============================================================
 * RIVER — THANK YOU / ENQUIRY RECEIVED
 * ============================================================
 */

document.addEventListener("DOMContentLoaded", () => {

  /* ============================================================
     ELEMENTS
  ============================================================ */

  const container = document.querySelector(".thankYou-container");
  const checkmark = document.getElementById("checkmark");
  const checkLineOne = document.querySelector(".checkmark-line-one");
  const checkLineTwo = document.querySelector(".checkmark-line-two");

  const eyebrow = document.querySelector(".thankYou-eyebrow");
  const title = document.querySelector("#thankYou-title");
  const intro = document.querySelector(".thankYou-intro");
  const response = document.querySelector(".thankYou-response");

  const nextSection = document.querySelector(".thankYou-next");
  const steps = document.querySelectorAll(".thankYou-step");

  const exploreSection = document.querySelector(".thankYou-explore");
  const footer = document.querySelector(".thankYou-footer");


  /* ============================================================
     SAFETY CHECK
     ============================================================ */

  if (!container) {
    return;
  }


  /* ============================================================
     REDUCED MOTION
     ============================================================ */

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* ============================================================
     STATIC FALLBACK
     ============================================================ */

  if (reduceMotion || typeof gsap === "undefined") {

    gsapSafeSet();

    return;
  }


  /* ============================================================
     INITIAL STATE
     ============================================================ */

  gsap.set(container, {
    opacity: 0,
    y: 30
  });


  if (checkmark) {

    gsap.set(checkmark, {
      scale: 0,
      opacity: 0
    });

  }


  if (checkLineOne) {

    gsap.set(checkLineOne, {
      scaleX: 0
    });

  }


  if (checkLineTwo) {

    gsap.set(checkLineTwo, {
      scaleX: 0
    });

  }


  gsap.set(
    [
      eyebrow,
      title,
      intro,
      response,
      nextSection,
      exploreSection,
      footer
    ].filter(Boolean),
    {
      opacity: 0,
      y: 20
    }
  );


  gsap.set(steps, {
    opacity: 0,
    y: 20
  });


  /* ============================================================
     MAIN TIMELINE
     ============================================================ */

  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });


  /* ============================================================
     CONTAINER
     ============================================================ */

  timeline.to(container, {
    opacity: 1,
    y: 0,
    duration: 0.8
  });


  /* ============================================================
     CHECKMARK
     ============================================================ */

  if (checkmark) {

    timeline.to(checkmark, {
      scale: 1,
      opacity: 1,
      duration: 0.55,
      ease: "back.out(1.7)"
    }, "-=0.35");

  }


  if (checkLineOne) {

    timeline.to(checkLineOne, {
      scaleX: 1,
      duration: 0.25,
      ease: "power2.out"
    });

  }


  if (checkLineTwo) {

    timeline.to(checkLineTwo, {
      scaleX: 1,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.08");

  }


  /* ============================================================
     HERO CONTENT
     ============================================================ */

  timeline.to(
    [
      eyebrow,
      title,
      intro,
      response
    ].filter(Boolean),
    {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.08
    },
    "-=0.15"
  );


  /* ============================================================
     NEXT STEPS
     ============================================================ */

  timeline.to(
    nextSection,
    {
      opacity: 1,
      y: 0,
      duration: 0.55
    },
    "-=0.20"
  );


  timeline.to(
    steps,
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1
    },
    "-=0.25"
  );


  /* ============================================================
     EXPLORE SECTION
     ============================================================ */

  timeline.to(
    exploreSection,
    {
      opacity: 1,
      y: 0,
      duration: 0.55
    },
    "-=0.10"
  );


  /* ============================================================
     FOOTER
     ============================================================ */

  timeline.to(
    footer,
    {
      opacity: 1,
      y: 0,
      duration: 0.45
    },
    "-=0.15"
  );


  /* ============================================================
     BUTTON MICRO-INTERACTIONS
     ============================================================ */

  const buttons = document.querySelectorAll(".thankYou-btn");

  buttons.forEach((button) => {

    const arrow = button.querySelector(".btn-arrow");

    if (!arrow) {
      return;
    }


    button.addEventListener("mouseenter", () => {

      gsap.to(arrow, {
        x: 3,
        y: -2,
        duration: 0.25,
        ease: "power2.out"
      });

    });


    button.addEventListener("mouseleave", () => {

      gsap.to(arrow, {
        x: 0,
        y: 0,
        duration: 0.25,
        ease: "power2.out"
      });

    });

  });


  /* ============================================================
     SAFE STATIC STATE
     ============================================================ */

  function gsapSafeSet() {

    if (container) {

      container.style.opacity = "1";
      container.style.transform = "none";

    }


    if (checkmark) {

      checkmark.style.opacity = "1";
      checkmark.style.transform = "scale(1)";

    }


    if (checkLineOne) {

      checkLineOne.style.transform =
        "rotate(45deg) scaleX(1)";

    }


    if (checkLineTwo) {

      checkLineTwo.style.transform =
        "rotate(-45deg) scaleX(1)";

    }


    [
      eyebrow,
      title,
      intro,
      response,
      nextSection,
      exploreSection,
      footer
    ]
      .filter(Boolean)
      .forEach((element) => {

        element.style.opacity = "1";
        element.style.transform = "none";

      });


    steps.forEach((step) => {

      step.style.opacity = "1";
      step.style.transform = "none";

    });

  }

});