/**
 * intro.js
 */



function initIntro() {

        const intro = document.getElementById("intro");


        const hero = document.getElementById("hero");
        const logo = document.getElementById("introLogo");
        const proceedBtn = document.getElementById("proceedBtn");
      
        const introSound = document.getElementById("introSound");
        const typeSound = document.getElementById("typeSound");
      
        const hoverSound = document.getElementById("hoverSound");
        const clickSound = document.getElementById("clickSound");
      
        const typedText = document.getElementById("typedText");

        // 🟢 DOTS CONTAINER (NEW)
        const dotsContainer = document.querySelector(".intro-dots");
      
        let introActive = true; // 🟢 GREEN: master state control
      
        /* ---------------- */
        /* 🎬 INTRO ANIMATION */
        /* ---------------- */
        gsap.to(intro, {opacity:1, duration:1.2});
      
        gsap.from(logo, {
          scale:0.6,
          opacity:0,
          duration:1.2,
          ease:"power3.out"
        });
      
        gsap.from("#introTitle", {
          y:40,
          opacity:0,
          duration:1,
          delay:0.5
        });
      
        /* ---------------- */
        /* 🔊 SOUND SYSTEM */
        /* ---------------- */
      
        // 🟢 GREEN: PLAY INTRO SOUND
        introSound.volume = 0;
        introSound.play().catch(()=>{});
        gsap.to(introSound, { volume:0.25, duration:2 });
      
        // 🟢 GREEN: FADE OUT
        function fadeOutAudio(){
          gsap.to(introSound, { volume:0, duration:0.8 });
        }
      
        // 🟢 GREEN: HARD STOP EVERYTHING
        function stopAllSounds(){
          [introSound, typeSound, hoverSound, clickSound].forEach(a=>{
            if(!a) return;
            a.pause();
            a.currentTime = 0;
          });
        }
      
        // 🟢 GREEN: SAFE CLICK SOUND
        function playClickSound(){
          if(!introActive) return; // prevent after intro
          clickSound.currentTime = 0;
          clickSound.volume = 0.2;
          clickSound.play().catch(()=>{});
        }
      
        // 🟢 GREEN: SAFE TYPE SOUND
        function playTypeSound(){
          if(!introActive) return;
          typeSound.currentTime = 0;
          typeSound.volume = 0.12;
          typeSound.play().catch(()=>{});
        }











        /* ---------------- */
        /* ✍️ PRECISION TYPE FLOW (YOUR EXACT LOGIC) */
        /* ---------------- */

        const TEXT_1 = "Welcome to River";
        const BASE = "If you like ";
        const TEXT_2 = "websites or softwares that convert to more sales — you are home";
        const TEXT_3 = "peace of mind when managing your business — you are home";
        const TEXT_4 = "systems that scale with you — you are home";
        const TEXT_5 = "We are River, we flow — go with the flow";

        let phase = 0;
        /*
        0 = type TEXT 1
        1 = delete all
        2 = type TEXT 2 (full)
        3 = delete to BASE
        4 = type TEXT 3 ending
        5 = delete to BASE
        6 = type TEXT 4 ending
        7 = delete all
        8 = type TEXT 5 (final)
        */

        let charIndex = 0;
        let currentText = "";
        let deleting = false;

        /* 🟢 HIGHLIGHT WORDS */
        const highlightWords = ["sales", "scale", "flow", "business", "River"];

        /* 🟢 RENDER */
        function renderText(rawText){
          let formatted = rawText;

          highlightWords.forEach(word => {
            const regex = new RegExp(`\\b(${word})\\b`, "gi");
            formatted = formatted.replace(regex, `<span class="highlight">$1</span>`);
          });

          typedText.innerHTML = formatted;
        }

        function typeFlow(){

          if(!introActive) return;

          /* ---------------- */
          /* PHASE 0 → TEXT 1 */
          /* ---------------- */
          if(phase === 0){
            currentText = TEXT_1;

            if(charIndex < currentText.length){
              renderText(currentText.substring(0, charIndex + 1));
              playTypeSound();
              charIndex++;
              return setTimeout(typeFlow, 60);
            }

            phase = 1;
            return setTimeout(typeFlow, 1200);
          }

          /* ---------------- */
          /* PHASE 1 → DELETE ALL */
          /* ---------------- */
          if(phase === 1){
            if(charIndex > 0){
              renderText(currentText.substring(0, charIndex - 1));
              charIndex--;
              return setTimeout(typeFlow, 30);
            }

            phase = 2;
            charIndex = 0;
            return setTimeout(typeFlow, 300);
          }

          /* ---------------- */
          /* PHASE 2 → TEXT 2 (FULL) */
          /* ---------------- */
          if(phase === 2){
            currentText = BASE + TEXT_2;

            if(charIndex < currentText.length){
              renderText(currentText.substring(0, charIndex + 1));
              playTypeSound();
              charIndex++;
              return setTimeout(typeFlow, 50);
            }

            // show button here 🔥
            // 🟢 SHOW PROCEED BUTTON
            gsap.to(proceedBtn, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out"
            });

            // 🟢 SHOW SLIDE BUTTONS (NEW)
            gsap.to(["#prevSlide", "#nextSlide"], {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.2,
              ease: "power3.out",
              stagger: 0.1
            });
            


            phase = 3;
            return setTimeout(typeFlow, 1400);
          }

          /* ---------------- */
          /* PHASE 3 → DELETE TO BASE */
          /* ---------------- */
          if(phase === 3){
            if(charIndex > BASE.length){
              renderText(currentText.substring(0, charIndex - 1));
              charIndex--;
              return setTimeout(typeFlow, 25);
            }

            phase = 4;
            return setTimeout(typeFlow, 400);
          }

          /* ---------------- */
          /* PHASE 4 → TEXT 3 ENDING */
          /* ---------------- */
          if(phase === 4){
            const full = BASE + TEXT_3;

            if(charIndex < full.length){
              renderText(full.substring(0, charIndex + 1));
              playTypeSound();
              charIndex++;
              return setTimeout(typeFlow, 50);
            }

            phase = 5;
            return setTimeout(typeFlow, 1400);
          }

          /* ---------------- */
          /* PHASE 5 → DELETE TO BASE */
          /* ---------------- */
          if(phase === 5){
            if(charIndex > BASE.length){
              renderText((BASE + TEXT_3).substring(0, charIndex - 1));
              charIndex--;
              return setTimeout(typeFlow, 25);
            }

            phase = 6;
            return setTimeout(typeFlow, 400);
          }

          /* ---------------- */
          /* PHASE 6 → TEXT 4 ENDING */
          /* ---------------- */
          if(phase === 6){
            const full = BASE + TEXT_4;

            if(charIndex < full.length){
              renderText(full.substring(0, charIndex + 1));
              playTypeSound();
              charIndex++;
              return setTimeout(typeFlow, 50);
            }

            phase = 7;
            return setTimeout(typeFlow, 1400);
          }

          /* ---------------- */
          /* PHASE 7 → DELETE ALL */
          /* ---------------- */
          if(phase === 7){
            if(charIndex > 0){
              renderText((BASE + TEXT_4).substring(0, charIndex - 1));
              charIndex--;
              return setTimeout(typeFlow, 25);
            }

            phase = 8;
            charIndex = 0;
            return setTimeout(typeFlow, 400);
          }

          /* ---------------- */
          /* PHASE 8 → FINAL TEXT 5 */
          /* ---------------- */
          if(phase === 8){
            currentText = TEXT_5;

            if(charIndex < currentText.length){
              renderText(currentText.substring(0, charIndex + 1));
              playTypeSound();
              charIndex++;
              return setTimeout(typeFlow, 60);
            }

            return; // 🔥 STOP on final message (no delete)
          }
        }

        /* 🚀 START */
        typeFlow();


        






















        /* =============================== */
        /* 🟢 DOT ROTATION SYSTEM (NEW)   */
        /* =============================== */

          let rotationTween;
          let isSpinning = false;

          function startDotRotation() {
            if (!dotsContainer) return;

            isSpinning = true;

            if (rotationTween) rotationTween.kill();

            rotationTween = gsap.to(dotsContainer, {
              rotation: "+=720",     // 🔥 faster initial spin
              duration: 2,
              ease: "power2.out"
            });
          }

          function stopDotRotation() {
            if (!dotsContainer) return;

            isSpinning = false;

            // 🔥 INERTIA EFFECT (keeps spinning after hover)
            gsap.to(dotsContainer, {
              rotation: "+=1080",   // 🔥 continues spinning
              duration: 3.5,        // 🔥 longer spin AFTER hover
              ease: "power3.out"
            });
          }


        //
        /* =============================== */
        /* 🟢 EVENT BINDING (NEW)         */
        /* =============================== */

        proceedBtn.addEventListener("mouseenter", () => {
          startDotRotation();
        });

        proceedBtn.addEventListener("mouseleave", () => {
          stopDotRotation();
        });














        
         /**
          *         function typeLoop(){
      
          if(!introActive) return; // 🟢 GREEN STOP LOOP
      
          if(!deleting){
            if(i < text.length){
              typedText.textContent += text[i];
              playTypeSound();
              i++;
              setTimeout(typeLoop, 60);
            } else {
              deleting = true;
      
              gsap.to(proceedBtn, {
                opacity:1,
                y:0,
                duration:0.8
              });
      
              setTimeout(typeLoop, 1400);
            }
          } else {
            if(i > 0){
              typedText.textContent = text.substring(0, i - 1);
              i--;
              setTimeout(typeLoop, 30);
            } else {
              deleting = false;
              setTimeout(typeLoop, 500);
            }
          }
        }
      
        typeLoop();
          */




      
        /* ---------------- */
        /* 🌊 LIQUID CANVAS */
        /* ---------------- */
      
        const webglCanvas = document.getElementById("webglCanvas");
        const ctx = webglCanvas.getContext("2d");
      
        webglCanvas.width = window.innerWidth;
        webglCanvas.height = window.innerHeight;
      
        let time = 0;
      
        function drawLiquid(){
          if(!introActive) return; // 🟢 GREEN STOP RENDER
      
          ctx.clearRect(0,0,webglCanvas.width,webglCanvas.height);
      
          for(let i=0;i<6;i++){
            ctx.beginPath();
      
            for(let x=0;x<webglCanvas.width;x+=10){
              let y = webglCanvas.height/2 +
                Math.sin(x*0.01 + time + i)*20;
      
              ctx.lineTo(x,y);
            }
      
            ctx.strokeStyle = `rgba(255,255,255,0.05)`;
            ctx.stroke();
          }
      
          time += 0.02;
          requestAnimationFrame(drawLiquid);
        }
      
        drawLiquid();








      
        /* ---------------- */
        /* 🎞️ MEDIA SLIDES  */
        /* ---------------- */

        /* ---------------- */
        /* 🎞️ VIDEO SLIDES ONLY SYSTEM */
        /* ---------------- */

        let slides = Array.from(document.querySelectorAll(".slide"));
        let current = 0;
        let slideInterval;

        /* 🟢 GREEN: FORCE VIDEO CREATION ONLY */
        slides.forEach((slide, i) => {

          const bg = slide.dataset.bg;

          const video = document.createElement("video");

          video.src = bg;

          video.muted = true;
          video.loop = true;
          video.playsInline = true;
          video.autoplay = false; // 🟢 GREEN: prevent multi-play
          video.preload = "auto";

          video.style.width = "100%";
          video.style.height = "100%";
          video.style.objectFit = "cover";

          slide.appendChild(video);

          slide.style.opacity = i === 0 ? 1 : 0;
          slide.style.zIndex = i === 0 ? 2 : 1;
        });

        /* 🟢 GREEN: STRICT SINGLE VIDEO CONTROL */
        function controlVideos() {

          slides.forEach((slide, i) => {

            const video = slide.querySelector("video");
            if (!video) return;

            if (i === current) {
              video.currentTime = 0;

              // 🟢 GREEN: ensure ONLY ONE plays
              video.play().catch(()=>{});
            } else {
              video.pause();
              video.currentTime = 0; // 🟢 GREEN: reset others
            }
          });
        }

        /* 🟢 GREEN: TRANSITION */
        function transitionTo(nextIndex){

          if(nextIndex === current) return;

          const currentSlide = slides[current];
          const nextSlide = slides[nextIndex];

          nextSlide.style.zIndex = 2;
          currentSlide.style.zIndex = 1;

          gsap.fromTo(nextSlide,
            { opacity:0, scale:1.1 },
            { opacity:1, scale:1, duration:1.4 }
          );

          gsap.to(currentSlide, {
            opacity:0,
            scale:1.05,
            duration:1.2
          });

          current = nextIndex;

          controlVideos(); // 🟢 GREEN KEY
        }

        function nextSlide(){
          let next = (current + 1) % slides.length;
          transitionTo(next);
        }

        function prevSlide(){
          let prev = (current - 1 + slides.length) % slides.length;
          transitionTo(prev);
        }

        /* 🟢 GREEN: LOOP */
        function startSlideshow(){
          slideInterval = setInterval(()=>{
            if(introActive){
              nextSlide();
            }
          }, 5000);
        }

        function stopSlideshow(){
          clearInterval(slideInterval);
        }

        startSlideshow();
        controlVideos();

        document.getElementById("nextSlide").addEventListener("click", nextSlide);
        document.getElementById("prevSlide").addEventListener("click", prevSlide);

        intro.addEventListener("mouseenter", stopSlideshow);
        intro.addEventListener("mouseleave", startSlideshow);

    
        /* ---------------- */
        /* 🎯 BUTTONS */
        /* ---------------- */
    
        const nextBtn = document.getElementById("nextSlide");
        const prevBtn = document.getElementById("prevSlide");
    
        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click", prevSlide);
    
        /* 🟢 PAUSE ON HOVER */
        const introEl = document.getElementById("intro");
    
        introEl.addEventListener("mouseenter", stopSlideshow);
        introEl.addEventListener("mouseleave", startSlideshow);















    
    
    
    
    
    
    
    
      
        /* ---------------- */
        /* ⏱️ AUTO TIMEOUT EXIT */
        /* ---------------- */
      
        // 🟢 GREEN: AUTO EXIT AFTER 10s
        setTimeout(()=>{
          if(introActive){
            exitIntro();
          }
        }, 100000);
      
        /* ---------------- */
        /* 🎯 EXIT INTRO */
        /* ---------------- */
      
        function exitIntro(){
      
          if(!introActive) return;
          introActive = false; // 🟢 GREEN LOCK
      
          fadeOutAudio();
      
          setTimeout(()=>{
            stopAllSounds(); // 🟢 GREEN HARD STOP
          }, 800);
      
          gsap.to(intro, {
            scale:1.2,
            opacity:0,
            filter:"blur(30px)",
            duration:1.2
          });
      
          setTimeout(()=>{
            hero.classList.add("reveal");
          }, 400);
      
          setTimeout(()=>{
            intro.style.display = "none";
          }, 1400);
        }
      
        /* ---------------- */
        /* 🧠 EVENTS */
        /* ---------------- */
      
        proceedBtn.addEventListener("click", ()=>{
          playClickSound(); // 🟢 GREEN
          exitIntro();
        });
      
        // 🟢 GREEN: STOP ON SCROLL
        window.addEventListener("scroll", ()=>{
          if(window.scrollY > 40){
            exitIntro();
          }
        });
      
        // 🟢 GREEN: PREVENT AUDIO LEAK FOREVER
        document.addEventListener("visibilitychange", ()=>{
          if(document.hidden){
            stopAllSounds();
          }
        });

        
      
      
    
    
    //
    gsap.from([
        ".intro-top-brand",
        ".intro-dots",
        ".intro-info-box",
        ".intro-trust"
      ], {
        opacity:0,
        y:20,
        duration:1,
        delay:1,
        stagger:0.2
      });


    /*
    proceedBtn.addEventListener("click", () => {

      if (!introActive) return;
      introActive = false;
    
      playClickSound();
    
      fadeOutAudio();
      stopAllSounds();
    
      clearTimeout(typingTimeout);
      clearInterval(slideInterval);
    
      // 🔥 FADE OUT INTRO
      gsap.to(intro, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          intro.style.display = "none";
        }
      });
    
      // 🔥 REVEAL HERO
      gsap.to(hero, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      });
    
    });
    */


    /* ---------------- */
  /* 🎯 PROCEED BUTTON FIX */
  /* ---------------- */

  // 🟢 FIX: SINGLE CLEAN HANDLER
  proceedBtn.addEventListener("click", () => {

    if (!introActive) return;
    introActive = false;

    playClickSound();

    fadeOutAudio();
    stopAllSounds();

    stopSlideshow();

    // 🟢 EXIT ANIMATION
    gsap.to(intro, {
      opacity: 0,
      scale: 1.15,
      filter: "blur(20px)",
      duration: 1,
      ease: "power3.out",
      onComplete: () => {
        intro.style.display = "none";
      }
    });

    // 🟢 HERO REVEAL
    gsap.to(hero, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out"
    });

  });
   
  }



