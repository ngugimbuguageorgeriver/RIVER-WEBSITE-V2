/**
 * 
 */






// ✅ 1. REGISTER PLUGIN FIRST (top of file)
gsap.registerPlugin(ScrollToPlugin);



class RiverBackToTop extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

            <button id="backToTop" aria-label="Back to top">
            <svg width="20" height="20" viewBox="0 0 24 24">
                <path id="arrowPath" d="M12 18V6M6 12l6-6 6 6" 
                    stroke="black" stroke-width="2" 
                    fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>


            <!-- SOUND (very subtle UI feedback) -->
            <audio id="hoverSound" preload="auto">
            <source src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3" type="audio/mpeg">
            </audio>

            <audio id="clickSound" preload="auto">
            <source src="https://assets.mixkit.co/active_storage/sfx/2569/2569-preview.mp3" type="audio/mpeg">
            </audio>

    `;

    this.init();
  }

  init() {

    /** */
    /** */

    const backToTop = document.getElementById("backToTop");
    const arrow = document.getElementById("arrowPath");

    let idleTimer;
    let lastScrollY = window.scrollY;
    let lastTime = Date.now();

    /* -------------------------------
    🔥 1. SCROLL VELOCITY DETECTION
    --------------------------------*/
    window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    const currentTime = Date.now();

    const distance = Math.abs(currentY - lastScrollY);
    const time = currentTime - lastTime;

    const velocity = distance / time; // px per ms

    lastScrollY = currentY;
    lastTime = currentTime;

    // Show button
    if (currentY > 200) {
        backToTop.classList.add("show");

        // Faster reaction when scrolling fast
        const duration = velocity > 1 ? 0.2 : 0.5;

        gsap.to(backToTop, {
        y: 0,
        scale: 1,
        duration: duration,
        ease: "power3.out"
        });

        // Idle logic
        clearTimeout(idleTimer);
        backToTop.classList.remove("idle");

        idleTimer = setTimeout(() => {
        backToTop.classList.add("idle");
        }, 1200);

    } else {
        backToTop.classList.remove("show", "idle");
    }
    });


    /* -------------------------------
    ✨ 2. MAGNETIC HOVER EFFECT
    --------------------------------*/
    backToTop.addEventListener("mousemove", (e) => {
    const rect = backToTop.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(backToTop, {
        x: x * 0.25,
        y: y * 0.25,
        duration: 0.3,
        ease: "power2.out"
    });
    });

    backToTop.addEventListener("mouseleave", () => {
    gsap.to(backToTop, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)"
    });
    });


    /* -------------------------------
    🔼 3. MORPHING ARROW ANIMATION
    --------------------------------*/
    backToTop.addEventListener("mouseenter", () => {
    gsap.to(arrow, {
        attr: { d: "M12 20V4M8 8l4-4 4 4" }, // longer upward arrow
        duration: 0.25,
        ease: "power2.out"
    });
    });

    backToTop.addEventListener("mouseleave", () => {
    gsap.to(arrow, {
        attr: { d: "M12 18V6M6 12l6-6 6 6" },
        duration: 0.25,
        ease: "power2.out"
    });
    });


    //
    /* -------------------------------
    ⚡ 4. GSAP DISTANCE-AWARE SCROLL
    --------------------------------*/

    backToTop.addEventListener("click", () => {
        backToTop.classList.remove("idle");
    
        const distance = window.scrollY;
    
        /* 🎯 DYNAMIC DURATION */
        const minDuration = 0.4;
        const maxDuration = 1.4;
    
        let duration = distance / 1200; // scale factor
        duration = Math.max(minDuration, Math.min(maxDuration, duration));
    
        /* 🎢 DYNAMIC EASING */
        let ease;
    
        if (distance < 400) {
        ease = "power2.out";       // ⚡ fast + responsive
        } else if (distance < 1200) {
        ease = "power3.inOut";     // ⚖️ balanced
        } else {
        ease = "expo.inOut";       // 🧈 smooth cinematic
        }
    
        /* 🚀 GSAP SCROLL */
        gsap.to(window, {
        scrollTo: { y: 0 },
        duration: duration,
        ease: ease
        });
    
        /* 🔼 ARROW MICRO-FEEDBACK (distance aware) */
        gsap.fromTo(arrow,
        { y: 0 },
        { 
            y: distance > 1000 ? -10 : -6,
            duration: 0.25,
            yoyo: true,
            repeat: 1,
            ease: "power2.out"
        }
        );
    
        /* 🔊 SOUND (slightly adaptive) */
        playSound(clickSound, distance > 1000 ? 0.22 : 0.18);
    });




    //
    

    //
    /* -------------------------------
    🔊 SOUND MICRO-FEEDBACK SYSTEM
    --------------------------------*/

    const hoverSound = document.getElementById("hoverSound");
    const clickSound = document.getElementById("clickSound");

    let lastSoundTime = 0;

    // Respect user preference (important)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Safe play function
    function playSound(sound, volume = 0.15) {
    if (prefersReducedMotion) return;

    const now = Date.now();

    // prevent spam (cooldown)
    if (now - lastSoundTime < 150) return;

    lastSoundTime = now;

    sound.currentTime = 0;
    sound.volume = volume;

    sound.play().catch(() => {
        // autoplay blocked → ignore silently
    });
    }

    /* 🔹 Hover sound */
    backToTop.addEventListener("mouseenter", () => {
    playSound(hoverSound, 0.08);
    });

    /* 🔹 Click sound */
    backToTop.addEventListener("click", () => {
    playSound(clickSound, 0.18);
    });








  }
}

customElements.define("river-backtotop", RiverBackToTop);