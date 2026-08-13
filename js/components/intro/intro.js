/**
 * ============================================================
 * RIVER — INTRO ENGINE
 * ============================================================
 *
 * River — Software Engineering & Technology
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
 * ============================================================
 */

function initIntro() {

  /* ==========================================================
     ELEMENTS
  ========================================================== */

  const intro = document.getElementById("intro");

  if (!intro) return;


  const hero = document.getElementById("hero");

  const logo = document.getElementById("introLogo");

  const proceedBtn =
    document.getElementById("proceedBtn");

  const introSound =
    document.getElementById("introSound");

  const typeSound =
    document.getElementById("typeSound");

  const typedText =
    document.getElementById("typedText");

  const caret =
    document.getElementById("caret");

  const stageLabel =
    document.getElementById("introStageLabel");

  const subtitle =
    document.getElementById("introSubtitle");

  const webglCanvas =
    document.getElementById("webglCanvas");

  const liquidCanvas =
    document.getElementById("liquidCanvas");

  const nextBtn =
    document.getElementById("nextSlide");

  const prevBtn =
    document.getElementById("prevSlide");

  const progressItems =
    Array.from(
      document.querySelectorAll(
        ".intro-progress-item"
      )
    );

  const slides =
    Array.from(
      document.querySelectorAll(".slide")
    );


  /* ==========================================================
     SAFETY
  ========================================================== */

  if (!typedText || !slides.length) return;


  /* ==========================================================
     MASTER STATE
  ========================================================== */

  let introActive = true;

  let exiting = false;

  let currentSlide = 0;

  let slideInterval = null;

  let typingTimer = null;

  let animationFrame = null;

  let slideshowPaused = false;

  let userInteracted = false;


  /* ==========================================================
     REDUCED MOTION
  ========================================================== */

  const prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;


  /* ==========================================================
     🟢 UPGRADE — INTRO CONTENT
  ========================================================== */

  const INTRO_SEQUENCE = [

    {
      text: "RIVER",
      subtitle:
        "Software Engineering & Technology",
      hold: 1500,
      typeSpeed: 80
    },

    {
      text: "WE FLOW.",
      subtitle:
        "Ideas move. Problems change. Technology should move with them.",
      hold: 1400,
      typeSpeed: 72
    },

    {
      text: "IDEAS → SYSTEMS",
      subtitle:
        "We turn ideas and problems into engineered digital systems.",
      hold: 1600,
      typeSpeed: 65
    },

    {
      text: "SYSTEMS → OUTCOMES",
      subtitle:
        "Technology should create measurable value — not just exist.",
      hold: 1600,
      typeSpeed: 65
    },

    {
      text: "WE DESIGN. WE ENGINEER. WE BUILD.",
      subtitle:
        "From digital experiences to software and connected systems.",
      hold: 1800,
      typeSpeed: 55
    },

    {
      text: "ENTER RIVER",
      subtitle:
        "Build something that moves.",
      hold: 0,
      typeSpeed: 70
    }

  ];


  /* ==========================================================
     🟢 UPGRADE — VIDEO MEANINGS
  ========================================================== */

  const SLIDE_CONTENT = [

    {
      number: "01 / 03",
      subtitle:
        "Digital experiences built around people and purpose."
    },

    {
      number: "02 / 03",
      subtitle:
        "Software systems engineered for real operational needs."
    },

    {
      number: "03 / 03",
      subtitle:
        "Connected technology designed to create lasting outcomes."
    }

  ];


  /* ==========================================================
     AUDIO
  ========================================================== */

  function safePlay(audio, volume = 0.1) {

    if (!audio || !introActive) return;

    try {

      audio.volume = volume;

      audio.currentTime = 0;

      const promise = audio.play();

      if (
        promise &&
        typeof promise.catch === "function"
      ) {

        promise.catch(() => {});

      }

    } catch (error) {

      /* Audio is enhancement only. */

    }

  }


  function fadeOutAudio() {

    if (!introSound) return;

    if (
      typeof gsap !== "undefined"
    ) {

      gsap.to(
        introSound,
        {
          volume: 0,
          duration: .7,
          ease: "power2.out"
        }
      );

    } else {

      introSound.volume = 0;

    }

  }


  function stopAllAudio() {

    [
      introSound,
      typeSound
    ].forEach(audio => {

      if (!audio) return;

      try {

        audio.pause();

        audio.currentTime = 0;

      } catch (error) {}

    });

  }


  /* ==========================================================
     🟢 UPGRADE — SAFE TYPE SOUND
  ========================================================== */

  function playTypeSound() {

    if (!introActive) return;

    if (!typeSound) return;

    safePlay(
      typeSound,
      prefersReducedMotion ? 0 : 0.045
    );

  }


  /* ==========================================================
     INTRO AUDIO START
  ========================================================== */

  function startIntroAudio() {

    if (!introSound) return;

    if (prefersReducedMotion) return;

    try {

      introSound.volume = 0;

      const promise =
        introSound.play();

      if (
        promise &&
        typeof promise.catch === "function"
      ) {

        promise.catch(() => {});

      }

      if (
        typeof gsap !== "undefined"
      ) {

        gsap.to(
          introSound,
          {
            volume: .13,
            duration: 2.5,
            ease: "power2.out"
          }
        );

      } else {

        introSound.volume = .13;

      }

    } catch (error) {}

  }


  /* ==========================================================
     🟢 UPGRADE — TEXT RENDER
  ========================================================== */

  function escapeHTML(value) {

    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function renderText(text) {

    const safe =
      escapeHTML(text);

    const words = [
      "RIVER",
      "FLOW",
      "IDEAS",
      "SYSTEMS",
      "OUTCOMES",
      "DESIGN",
      "ENGINEER",
      "BUILD"
    ];


    let formatted = safe;


    words.forEach(word => {

      const regex =
        new RegExp(
          `\\b(${word})\\b`,
          "gi"
        );

      formatted =
        formatted.replace(
          regex,
          `<span class="highlight">$1</span>`
        );

    });


    typedText.innerHTML =
      formatted;

  }


  /* ==========================================================
     🟢 UPGRADE — TYPEWRITER ENGINE
  ========================================================== */

  function clearTypingTimer() {

    if (typingTimer) {

      clearTimeout(
        typingTimer
      );

      typingTimer = null;

    }

  }


  function typeText(
    text,
    speed = 60
  ) {

    return new Promise(resolve => {

      clearTypingTimer();

      let index = 0;

      typedText.innerHTML = "";

      function step() {

        if (!introActive) {

          resolve();

          return;

        }


        if (
          index >= text.length
        ) {

          resolve();

          return;

        }


        renderText(
          text.substring(
            0,
            index + 1
          )
        );


        if (
          !prefersReducedMotion
        ) {

          playTypeSound();

        }


        index++;


        typingTimer =
          setTimeout(
            step,
            prefersReducedMotion
              ? 0
              : speed
          );

      }


      step();

    });

  }


  /* ==========================================================
     DELETE TEXT
  ========================================================== */

  function deleteText(
    speed = 30
  ) {

    return new Promise(resolve => {

      clearTypingTimer();


      let current =
        typedText.textContent || "";


      function step() {

        if (!introActive) {

          resolve();

          return;

        }


        if (!current.length) {

          resolve();

          return;

        }


        current =
          current.substring(
            0,
            current.length - 1
          );


        renderText(current);


        typingTimer =
          setTimeout(
            step,
            prefersReducedMotion
              ? 0
              : speed
          );

      }


      step();

    });

  }


  /* ==========================================================
     WAIT
  ========================================================== */

  function wait(duration) {

    return new Promise(resolve => {

      if (!introActive) {

        resolve();

        return;

      }


      setTimeout(
        resolve,
        prefersReducedMotion
          ? Math.min(duration, 150)
          : duration
      );

    });

  }


  /* ==========================================================
     🟢 UPGRADE — NARRATIVE FLOW
  ========================================================== */

  async function runIntroSequence() {

    if (!introActive) return;


    for (
      let i = 0;
      i < INTRO_SEQUENCE.length;
      i++
    ) {

      if (!introActive) return;


      const item =
        INTRO_SEQUENCE[i];


      await typeText(
        item.text,
        item.typeSpeed
      );


      if (!introActive) return;


      updateSubtitle(
        item.subtitle
      );


      if (
        i === 1 ||
        i === 2 ||
        i === 3
      ) {

        transitionTo(
          i - 1,
          true
        );

      }


      if (
        i === 5
      ) {

        revealEnter();

        break;

      }


      await wait(
        item.hold
      );


      if (
        i <
        INTRO_SEQUENCE.length - 2
      ) {

        await deleteText(
          prefersReducedMotion
            ? 0
            : 24
        );

        await wait(180);

      }

    }

  }


  /* ==========================================================
     SUBTITLE
  ========================================================== */

  function updateSubtitle(text) {

    if (!subtitle) return;


    if (
      typeof gsap !== "undefined" &&
      !prefersReducedMotion
    ) {

      gsap.to(
        subtitle,
        {
          opacity: 0,
          y: 6,
          duration: .2,
          onComplete: () => {

            subtitle.textContent =
              text;

            gsap.to(
              subtitle,
              {
                opacity: 1,
                y: 0,
                duration: .45,
                ease: "power3.out"
              }
            );

          }
        }
      );

    } else {

      subtitle.textContent =
        text;

    }

  }


  /* ==========================================================
     ENTER BUTTON
  ========================================================== */

  function revealEnter() {

    if (!proceedBtn) return;

    proceedBtn.classList.add(
      "visible"
    );

  }


  /* ==========================================================
     SLIDES — CREATE VIDEOS
  ========================================================== */

  slides.forEach(
    (slide, index) => {

      const source =
        slide.dataset.bg;


      if (!source) return;


      const video =
        document.createElement(
          "video"
        );


      video.src =
        source;

      video.muted = true;

      video.loop = true;

      video.playsInline = true;

      video.preload =
        index === 0
          ? "auto"
          : "metadata";

      video.setAttribute(
        "aria-hidden",
        "true"
      );


      slide.appendChild(
        video
      );


      slide.style.opacity =
        index === 0 ? "1" : "0";

      slide.style.zIndex =
        index === 0 ? "2" : "1";


      if (index === 0) {

        slide.classList.add(
          "active"
        );

      }

    }
  );


  /* ==========================================================
     VIDEO CONTROL
  ========================================================== */

  function controlVideos() {

    slides.forEach(
      (slide, index) => {

        const video =
          slide.querySelector(
            "video"
          );


        if (!video) return;


        if (
          index === currentSlide
        ) {

          try {

            video.currentTime = 0;

          } catch (error) {}


          if (!prefersReducedMotion) {

            const promise =
              video.play();

            if (
              promise &&
              typeof promise.catch ===
                "function"
            ) {

              promise.catch(
                () => {}
              );

            }

          }

        } else {

          try {

            video.pause();

            video.currentTime = 0;

          } catch (error) {}

        }

      }
    );

  }


  /* ==========================================================
     🟢 UPGRADE — SLIDE UI
  ========================================================== */

  function updateSlideUI(index) {

    const content =
      SLIDE_CONTENT[index];


    if (stageLabel) {

      stageLabel.textContent =
        content
          ? content.number
          : `0${index + 1} / 03`;

    }


    if (subtitle && content) {

      updateSubtitle(
        content.subtitle
      );

    }


    progressItems.forEach(
      (item, itemIndex) => {

        item.classList.toggle(
          "active",
          itemIndex === index
        );

        item.setAttribute(
          "aria-current",
          itemIndex === index
            ? "true"
            : "false"
        );

      }
    );

  }


  /* ==========================================================
     SLIDE TRANSITION
  ========================================================== */

  function transitionTo(
    nextIndex,
    silent = false
  ) {

    if (
      nextIndex === currentSlide ||
      !slides[nextIndex]
    ) {

      return;

    }


    const currentSlideEl =
      slides[currentSlide];

    const nextSlideEl =
      slides[nextIndex];


    nextSlideEl.style.zIndex =
      "3";

    currentSlideEl.style.zIndex =
      "2";


    nextSlideEl.classList.add(
      "active"
    );


    if (
      typeof gsap !== "undefined" &&
      !prefersReducedMotion
    ) {

      gsap.killTweensOf([
        currentSlideEl,
        nextSlideEl
      ]);


      gsap.fromTo(
        nextSlideEl,
        {
          opacity: 0,
          scale: 1.07
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.35,
          ease: "power3.out"
        }
      );


      gsap.to(
        currentSlideEl,
        {
          opacity: 0,
          scale: 1.035,
          duration: 1.15,
          ease: "power2.out"
        }
      );

    } else {

      currentSlideEl.style.opacity =
        "0";

      nextSlideEl.style.opacity =
        "1";

      nextSlideEl.style.transform =
        "scale(1)";

    }


    currentSlide =
      nextIndex;


    slides.forEach(
      (slide, index) => {

        if (
          index !== currentSlide
        ) {

          slide.classList.remove(
            "active"
          );

        }

      }
    );


    updateSlideUI(
      currentSlide
    );


    controlVideos();


    if (!silent) {

      safePlay(
        typeSound,
        .045
      );

    }

  }


  /* ==========================================================
     NEXT / PREVIOUS
  ========================================================== */

  function nextSlide() {

    const next =
      (
        currentSlide + 1
      ) %
      slides.length;


    transitionTo(next);

  }


  function prevSlide() {

    const previous =
      (
        currentSlide -
        1 +
        slides.length
      ) %
      slides.length;


    transitionTo(previous);

  }


  /* ==========================================================
     SLIDESHOW
  ========================================================== */

  function startSlideshow() {

    if (
      prefersReducedMotion ||
      slideshowPaused ||
      !introActive
    ) {

      return;

    }


    stopSlideshow();


    slideInterval =
      setInterval(
        () => {

          if (
            introActive &&
            !slideshowPaused
          ) {

            nextSlide();

          }

        },
        6500
      );

  }


  function stopSlideshow() {

    if (slideInterval) {

      clearInterval(
        slideInterval
      );

      slideInterval = null;

    }

  }


  /* ==========================================================
     HOVER PAUSE
  ========================================================== */

  intro.addEventListener(
    "mouseenter",
    () => {

      slideshowPaused = true;

      stopSlideshow();

    }
  );


  intro.addEventListener(
    "mouseleave",
    () => {

      slideshowPaused = false;

      startSlideshow();

    }
  );


  /* ==========================================================
     🟢 UPGRADE — PROGRESS BUTTONS
  ========================================================== */

  progressItems.forEach(
    item => {

      item.addEventListener(
        "click",
        () => {

          const index =
            Number(
              item.dataset.slide
            );


          if (
            Number.isNaN(index)
          ) {

            return;

          }


          userInteracted = true;

          transitionTo(index);

          stopSlideshow();

          slideshowPaused = true;

        }
      );

    }
  );


  /* ==========================================================
     NAVIGATION BUTTONS
  ========================================================== */

  if (nextBtn) {

    nextBtn.addEventListener(
      "click",
      () => {

        userInteracted = true;

        nextSlide();

      }
    );

  }


  if (prevBtn) {

    prevBtn.addEventListener(
      "click",
      () => {

        userInteracted = true;

        prevSlide();

      }
    );

  }


  /* ==========================================================
     KEYBOARD NAVIGATION
  ========================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (!introActive) return;


      if (
        event.key === "ArrowRight"
      ) {

        nextSlide();

      }


      if (
        event.key === "ArrowLeft"
      ) {

        prevSlide();

      }


      if (
        event.key === "Enter"
      ) {

        if (
          proceedBtn &&
          proceedBtn.classList.contains(
            "visible"
          )
        ) {

          exitIntro();

        }

      }


      if (
        event.key === "Escape"
      ) {

        exitIntro();

      }

    }
  );


  /* ==========================================================
     🟢 UPGRADE — TOUCH SWIPE
  ========================================================== */

  let touchStartX = 0;

  let touchEndX = 0;


  intro.addEventListener(
    "touchstart",
    event => {

      if (
        !event.touches.length
      ) return;


      touchStartX =
        event.touches[0].clientX;

    },
    {
      passive: true
    }
  );


  intro.addEventListener(
    "touchend",
    event => {

      if (
        !event.changedTouches.length
      ) return;


      touchEndX =
        event.changedTouches[0].clientX;


      const distance =
        touchEndX -
        touchStartX;


      if (
        Math.abs(distance) < 45
      ) {

        return;

      }


      userInteracted = true;


      if (distance < 0) {

        nextSlide();

      } else {

        prevSlide();

      }

    },
    {
      passive: true
    }
  );


  /* ==========================================================
     LIQUID CANVAS
  ========================================================== */

  const liquidContext =
    liquidCanvas
      ? liquidCanvas.getContext(
          "2d"
        )
      : null;


  let liquidWidth = 0;

  let liquidHeight = 0;


  function resizeLiquidCanvas() {

    if (
      !liquidCanvas ||
      !liquidContext
    ) {

      return;

    }


    const dpr =
      Math.min(
        window.devicePixelRatio ||
          1,
        2
      );


    liquidWidth =
      window.innerWidth;

    liquidHeight =
      window.innerHeight;


    liquidCanvas.width =
      liquidWidth * dpr;

    liquidCanvas.height =
      liquidHeight * dpr;


    liquidCanvas.style.width =
      `${liquidWidth}px`;

    liquidCanvas.style.height =
      `${liquidHeight}px`;


    liquidContext.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );

  }


  resizeLiquidCanvas();


  window.addEventListener(
    "resize",
    resizeLiquidCanvas,
    {
      passive: true
    }
  );


  /* ==========================================================
     🟢 UPGRADE — MORE ORGANIC LIQUID MOTION
  ========================================================== */

  let liquidTime = 0;


  function drawLiquid() {

    if (!introActive) {

      return;

    }


    if (
      !liquidContext
    ) {

      return;

    }


    liquidContext.clearRect(
      0,
      0,
      liquidWidth,
      liquidHeight
    );


    if (
      prefersReducedMotion
    ) {

      return;

    }


    liquidTime += .006;


    const centerY =
      liquidHeight * .52;


    for (
      let layer = 0;
      layer < 4;
      layer++
    ) {

      liquidContext.beginPath();


      for (
        let x = 0;
        x <= liquidWidth;
        x += 16
      ) {

        const waveOne =
          Math.sin(
            x * .007 +
            liquidTime * 1.3 +
            layer
          ) *
          (18 + layer * 4);


        const waveTwo =
          Math.sin(
            x * .013 -
            liquidTime * .8 +
            layer * 2
          ) *
          8;


        const y =
          centerY +
          waveOne +
          waveTwo;


        if (x === 0) {

          liquidContext.moveTo(
            x,
            y
          );

        } else {

          liquidContext.lineTo(
            x,
            y
          );

        }

      }


      liquidContext.strokeStyle =
        `rgba(255,255,255,${.025 + layer * .012})`;

      liquidContext.lineWidth =
        1;


      liquidContext.stroke();

    }


    animationFrame =
      requestAnimationFrame(
        drawLiquid
      );

  }


  drawLiquid();


  /* ==========================================================
     WEBGL/CANVAS LIGHT LAYER
  ========================================================== */

  const lightContext =
    webglCanvas
      ? webglCanvas.getContext(
          "2d"
        )
      : null;


  let lightWidth = 0;

  let lightHeight = 0;


  function resizeLightCanvas() {

    if (
      !webglCanvas ||
      !lightContext
    ) {

      return;

    }


    const dpr =
      Math.min(
        window.devicePixelRatio ||
          1,
        2
      );


    lightWidth =
      window.innerWidth;

    lightHeight =
      window.innerHeight;


    webglCanvas.width =
      lightWidth * dpr;

    webglCanvas.height =
      lightHeight * dpr;


    webglCanvas.style.width =
      `${lightWidth}px`;

    webglCanvas.style.height =
      `${lightHeight}px`;


    lightContext.setTransform(
      dpr,
      0,
      0,
      dpr,
      0,
      0
    );

  }


  resizeLightCanvas();


  window.addEventListener(
    "resize",
    resizeLightCanvas,
    {
      passive: true
    }
  );


  let lightTime = 0;


  function drawLight() {

    if (!introActive) {

      return;

    }


    if (
      !lightContext
    ) {

      return;

    }


    lightContext.clearRect(
      0,
      0,
      lightWidth,
      lightHeight
    );


    if (
      prefersReducedMotion
    ) {

      return;

    }


    lightTime += .008;


    for (
      let layer = 0;
      layer < 3;
      layer++
    ) {

      lightContext.beginPath();


      for (
        let x = 0;
        x <= lightWidth;
        x += 14
      ) {

        const y =
          lightHeight * .5 +
          Math.sin(
            x * .008 +
            lightTime +
            layer
          ) *
          (24 + layer * 6);


        if (x === 0) {

          lightContext.moveTo(
            x,
            y
          );

        } else {

          lightContext.lineTo(
            x,
            y
          );

        }

      }


      lightContext.strokeStyle =
        `rgba(255,255,255,${.018 + layer * .008})`;

      lightContext.lineWidth =
        1;


      lightContext.stroke();

    }


    requestAnimationFrame(
      drawLight
    );

  }


  drawLight();


  /* ==========================================================
     INITIAL SLIDE
  ========================================================== */

  updateSlideUI(
    currentSlide
  );


  controlVideos();


  /* ==========================================================
     INTRO ENTRANCE
  ========================================================== */

  if (
    typeof gsap !== "undefined"
  ) {

    gsap.set(
      intro,
      {
        opacity: 0
      }
    );


    gsap.to(
      intro,
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
      }
    );


    if (logo) {

      gsap.fromTo(
        logo,
        {
          opacity: 0,
          scale: .72,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.3,
          delay: .25,
          ease: "power3.out"
        }
      );

    }


    gsap.fromTo(
      [
        ".intro-header",
        ".intro-philosophy",
        ".intro-progress",
        ".intro-slide-nav"
      ],
      {
        opacity: 0,
        y: 15
      },
      {
        opacity: 1,
        y: 0,
        duration: .9,
        delay: .7,
        stagger: .1,
        ease: "power3.out"
      }
    );

  } else {

    intro.style.opacity = "1";

  }


  /* ==========================================================
     AUDIO
  ========================================================== */

  startIntroAudio();


  /* ==========================================================
     START SLIDESHOW
  ========================================================== */

  startSlideshow();


  /* ==========================================================
     START NARRATIVE
  ========================================================== */

  runIntroSequence();


  /* ==========================================================
     🟢 UPGRADE — ENTER BUTTON
  ========================================================== */

  if (proceedBtn) {

    proceedBtn.addEventListener(
      "mouseenter",
      () => {

        if (!introActive) return;

        safePlay(
          typeSound,
          .025
        );

      }
    );


    proceedBtn.addEventListener(
      "click",
      () => {

        exitIntro();

      }
    );

  }


  /* ==========================================================
     SCROLL EXIT
  ========================================================== */

  function handleScrollExit() {

    if (
      window.scrollY > 35 &&
      introActive
    ) {

      exitIntro();

    }

  }


  window.addEventListener(
    "scroll",
    handleScrollExit,
    {
      passive: true
    }
  );


  /* ==========================================================
     VISIBILITY CHANGE
  ========================================================== */

  function handleVisibility() {

    if (
      document.hidden
    ) {

      stopAllAudio();

      stopSlideshow();

    } else if (
      introActive
    ) {

      startSlideshow();

      controlVideos();

    }

  }


  document.addEventListener(
    "visibilitychange",
    handleVisibility
  );


  /* ==========================================================
     🟢 UPGRADE — EXIT CLEANUP
  ========================================================== */

  function cleanupIntro() {

    clearTypingTimer();

    stopSlideshow();

    stopAllAudio();


    if (
      animationFrame
    ) {

      cancelAnimationFrame(
        animationFrame
      );

      animationFrame = null;

    }


    slides.forEach(
      slide => {

        const video =
          slide.querySelector(
            "video"
          );


        if (!video) return;


        try {

          video.pause();

          video.removeAttribute(
            "src"
          );

          video.load();

        } catch (error) {}

      }
    );


    window.removeEventListener(
      "scroll",
      handleScrollExit
    );


    document.removeEventListener(
      "visibilitychange",
      handleVisibility
    );

  }


  /* ==========================================================
     EXIT INTRO
  ========================================================== */

  function exitIntro() {

    if (
      !introActive ||
      exiting
    ) {

      return;

    }


    exiting = true;

    introActive = false;


    clearTypingTimer();

    stopSlideshow();

    fadeOutAudio();


    if (
      typeof gsap !== "undefined"
    ) {

      intro.classList.add(
        "is-exiting"
      );


      gsap.to(
        intro,
        {
          opacity: 0,
          scale: 1.035,
          filter: "blur(18px)",
          duration: 1.15,
          ease: "power3.inOut",
          onComplete: () => {

            intro.style.display =
              "none";

            cleanupIntro();

          }
        }
      );


      if (hero) {

        gsap.to(
          hero,
          {
            opacity: 1,
            scale: 1,
            duration: 1.25,
            delay: .25,
            ease: "power3.out"
          }
        );


        hero.classList.add(
          "reveal"
        );

      }

    } else {

      intro.style.display =
        "none";

      cleanupIntro();

      if (hero) {

        hero.classList.add(
          "reveal"
        );

      }

    }

  }


  /* ==========================================================
     🟢 UPGRADE — AUTO EXIT
     ========================================================== */

  const AUTO_EXIT_TIME =
    prefersReducedMotion
      ? 12000
      : 30000;


  setTimeout(
    () => {

      if (
        introActive
      ) {

        exitIntro();

      }

    },
    AUTO_EXIT_TIME
  );


  /* ==========================================================
     🟢 UPGRADE — INITIAL PLAYBACK
  ========================================================== */

  if (
    slides.length
  ) {

    transitionTo(
      0,
      true
    );

  }


  /* ==========================================================
     DEBUG / DEVELOPMENT HANDLE
  ========================================================== */

  window.RIVER_INTRO = {

    next: nextSlide,

    previous: prevSlide,

    enter: exitIntro,

    current: () =>
      currentSlide,

    isActive: () =>
      introActive

  };

}