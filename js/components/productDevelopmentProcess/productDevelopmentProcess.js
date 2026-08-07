/**
 * productDevelopmentProcess.js
 */

class ProcessHorizontal extends HTMLElement {
  constructor() {
    super();
    this.slidesData = [
      { step: "01", title: "Discovery", text: "Every great product starts with clarity.", video: "assets/images/Vids/1.mp4" },
      { step: "02", title: "Research & Strategy", text: "Data drives every decision.", video: "assets/videos/research.mp4" },
      { step: "03", title: "UX/UI Design", text: "Design is how it works.", video: "assets/videos/design.mp4" },
      { step: "04", title: "Frontend Development", text: "Where design comes to life.", video: "assets/videos/frontend.mp4" },
      { step: "05", title: "Backend Engineering", text: "Power behind the scenes.", video: "assets/videos/backend.mp4" },
      { step: "06", title: "Testing & Security", text: "Nothing goes live without confidence.", video: "assets/videos/testing.mp4" },
      { step: "07", title: "Deployment", text: "From development to reality.", video: "assets/videos/deploy.mp4" },
      { step: "08", title: "Continuous Support", text: "We grow with you.", video: "assets/videos/support.mp4" }
    ];
  }

  connectedCallback() {
    this.render();
    this.initGSAP();
    this.initLazyMedia();
    this.initSlideNav();
    this.initWheelControl();   // 🟢 UPGRADE
    this.initSwipe();          // 🟢 UPGRADE
  }

  render() {
    this.innerHTML = `
      <section class="process-section">
        <div class="process-progress"></div>

        <div class="process-track">
          ${this.slidesData.map(s => this.createSlide(s)).join("")}
        </div>

        <div class="process-nav">
          ${this.slidesData.map((s, i) => `
            <div class="process-nav-item" data-index="${i}">
              <span class="nav-number">${s.step}</span>
              <span class="nav-title">${s.title}</span>
            </div>
          `).join("")}
        </div>
      </section>
    `;
  }

  createSlide({ step, title, text, video }) {
    return `
      <div class="process-slide">
        <video class="process-video" data-src="${video}" muted loop playsinline preload="none"></video>
        <div class="process-overlay">
          <h2>${step} — ${title}</h2>
          <p>${text}</p>
        </div>
      </div>
    `;
  }

  initGSAP() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const section = this.querySelector(".process-section");
    const track = this.querySelector(".process-track");
    const slides = this.querySelectorAll(".process-slide");
    const navItems = this.querySelectorAll(".process-nav-item");

    const totalWidth = track.scrollWidth;

    this.mainST = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => "+=" + totalWidth
    });

    gsap.to(track, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + totalWidth,
        scrub: 1,
        pin: true,
        snap: {
          snapTo: 1 / (slides.length - 1),
          duration: 0.4,
          ease: "power3.inOut",
          inertia: false
        },
        onUpdate: self => {
          const index = Math.round(self.progress * (slides.length - 1));
          navItems.forEach(i => i.classList.remove("active"));
          if (navItems[index]) navItems[index].classList.add("active");
        }
      }
    });
  }





  goToSlide(index) {
    if (this.isAnimating) return; // 🔥 prevent stacking

    this.isAnimating = true;

    const slides = this.querySelectorAll(".process-slide");
    index = Math.max(0, Math.min(index, slides.length - 1));

    const progress = index / (slides.length - 1);

    gsap.to(window, {
      duration: 0.7,
      ease: "power3.inOut",
      scrollTo: {
        y: this.mainST.start + (this.mainST.end - this.mainST.start) * progress,
        autoKill: false
      },
      onComplete: () => {
        this.isAnimating = false;
      }
    });
  }



  getCurrentIndex() {
    const slides = this.querySelectorAll(".process-slide");

    // 🔥 Use ScrollTrigger's internal progress (accurate)
    const progress = this.mainST.progress;

    return Math.round(progress * (slides.length - 1));
  }



  initSlideNav() {
    const navItems = this.querySelectorAll(".process-nav-item");

    navItems.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation(); // 🔥 prevents double scroll

        this.goToSlide(index);
      });
    });
  }




  /* 🟢 =============================== */
  /* 🟢 UPGRADE: MOUSE WHEEL CONTROL */
  /* 🟢 =============================== */
  initWheelControl() {
    const section = this.querySelector(".process-section");
    let isAnimating = false;

    window.addEventListener("wheel", (e) => {
      const rect = section.getBoundingClientRect();

      // only when section is active
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        e.preventDefault();

        if (isAnimating) return;

        const direction = e.deltaY > 0 ? 1 : -1;
        const current = this.getCurrentIndex();

        isAnimating = true;
        this.goToSlide(current + direction);

        setTimeout(() => {
          isAnimating = false;
        }, 700);
      }
    }, { passive: false });
  }

  /* 🟢 =============================== */
  /* 🟢 UPGRADE: MOBILE SWIPE */
  /* 🟢 =============================== */
  initSwipe() {
    const section = this.querySelector(".process-section");

    let startX = 0;
    let endX = 0;

    section.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    section.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;

      const deltaX = endX - startX;
      const threshold = 50;

      const current = this.getCurrentIndex();

      if (Math.abs(deltaX) > threshold) {
        if (deltaX < 0) {
          this.goToSlide(current + 1);
        } else {
          this.goToSlide(current - 1);
        }
      }
    });
  }

  initLazyMedia() {
    const videos = this.querySelectorAll(".process-video");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;

        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = video.dataset.src;
            video.load();
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { rootMargin: "200px" });

    videos.forEach(video => observer.observe(video));
  }
}

customElements.define("process-horizontal", ProcessHorizontal);