/**
 * ============================================================
 * RIVER — MENU BACKGROUND SYSTEM
 * menuBackground.js
 *
 * 🟢 FULL UPGRADE
 *
 * Controls:
 * - Background video rotation
 * - Crossfade transitions
 * - Playback state
 * - Visibility optimisation
 * - Reduced-motion behaviour
 * ============================================================
 */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /*
    ============================================================
    🟢 ELEMENTS
    ============================================================
    */

    const videos =
      Array.from(
        document.querySelectorAll(
          ".bg-video"
        )
      );


    if (!videos.length) {
      return;
    }


    /*
    ============================================================
    🟢 CONFIGURATION
    ============================================================
    */

    const ROTATION_TIME =
      7000;

    const TRANSITION_TIME =
      1500;


    /*
    ============================================================
    🟢 STATE
    ============================================================
    */

    let current =
      videos.findIndex(
        video =>
          video.classList.contains(
            "active"
          )
      );


    if (current < 0) {
      current = 0;
    }


    let timer =
      null;

    let isVisible =
      true;


    /*
    ============================================================
    🟢 REDUCED MOTION
    ============================================================
    */

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    /*
    ============================================================
    🟢 PREPARE VIDEOS
    ============================================================
    */

    videos.forEach(
      (video, index) => {

        video.muted = true;

        video.playsInline = true;

        video.setAttribute(
          "aria-hidden",
          "true"
        );


        if (index !== current) {

          video.pause();

          video.currentTime = 0;

        }

      }
    );


    /*
    ============================================================
    🟢 PLAY ACTIVE VIDEO
    ============================================================
    */

    function playActiveVideo() {

      const video =
        videos[current];


      if (!video) {
        return;
      }


      video.muted = true;


      video.play().catch(
        () => {}
      );

    }


    /*
    ============================================================
    🟢 SWITCH VIDEO
    ============================================================
    */

    function switchVideo() {


      if (
        videos.length < 2 ||
        !isVisible ||
        reducedMotion
      ) {

        return;

      }


      const previous =
        videos[current];


      current =
        (current + 1) %
        videos.length;


      const next =
        videos[current];


      if (!next) {
        return;
      }


      /*
      ----------------------------------------------------------
      PREPARE NEXT
      ----------------------------------------------------------
      */

      next.currentTime = 0;

      next.classList.add(
        "is-transitioning"
      );


      /*
      ----------------------------------------------------------
      START NEXT
      ----------------------------------------------------------
      */

      next.play().catch(
        () => {}
      );


      /*
      ----------------------------------------------------------
      ACTIVATE NEXT
      ----------------------------------------------------------
      */

      requestAnimationFrame(
        () => {

          next.classList.add(
            "active"
          );

        }
      );


      /*
      ----------------------------------------------------------
      REMOVE PREVIOUS
      ----------------------------------------------------------
      */

      setTimeout(
        () => {

          previous.classList.remove(
            "active"
          );

          previous.classList.remove(
            "is-transitioning"
          );

          previous.pause();

          previous.currentTime = 0;

        },
        TRANSITION_TIME
      );

    }


    /*
    ============================================================
    🟢 ROTATION TIMER
    ============================================================
    */

    function startRotation() {

      if (
        reducedMotion ||
        videos.length < 2
      ) {

        return;

      }


      stopRotation();


      timer =
        window.setInterval(
          switchVideo,
          ROTATION_TIME
        );

    }


    /*
    ============================================================
    🟢 STOP ROTATION
    ============================================================
    */

    function stopRotation() {

      if (timer) {

        window.clearInterval(
          timer
        );

        timer = null;

      }

    }


    /*
    ============================================================
    🟢 PAGE VISIBILITY
    ============================================================
    */

    document.addEventListener(
      "visibilitychange",
      () => {

        isVisible =
          !document.hidden;


        if (!isVisible) {

          stopRotation();

          videos.forEach(
            video =>
              video.pause()
          );

          return;

        }


        playActiveVideo();

        startRotation();

      }
    );


    /*
    ============================================================
    🟢 INITIALIZE
    ============================================================
    */

    playActiveVideo();

    startRotation();


  }
);