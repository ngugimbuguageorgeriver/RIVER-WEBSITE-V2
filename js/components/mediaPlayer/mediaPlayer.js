/**
 * mediaPlayer.js
 */



document.addEventListener("DOMContentLoaded", () => {

  const wrapper = document.getElementById("mediaWrapper");
  const titleEl = document.getElementById("projectTitle");

  /* 🟢 GET URL PARAM */
  const params = new URLSearchParams(window.location.search);
  const projectSlug = params.get("project");

  /* 🟢 FALLBACK DATA */
  let mediaData = sessionStorage.getItem("river_media");
  let projectTitle = sessionStorage.getItem("river_project_title");


  const descEl = document.getElementById("mediaDescription");

  /* 🟢 LOAD FULL DESCRIPTION */
  const fullDesc = sessionStorage.getItem("river_full_desc");

  if(descEl && fullDesc){
    descEl.textContent = fullDesc;
  }

  /* 🟢 OPTIONAL: CENTRAL DATA MAP (SIMULATION) */
  const PROJECTS = {
    "web-ecommerce": {
      title: "Web & eCommerce",
      media: [
        { type: "video", src: "assets/images/Vids/1.mp4" },
        { type: "image", src: "assets/images/Background/LightThemeImages/1.jfif" }
      ]
    },
    "enterprise-systems": {
      title: "Enterprise Systems",
      media: [
        { type: "image", src: "assets/images/WebSite Images/ERP.png" },
        { type: "video", src: "assets/images/Vids/4.mp4" }
      ]
    },
    "cloud-devops": {
      title: "Cloud & DevOps",
      media: [
        { type: "image", src: "assets/images/Background/LightThemeImages/2.jfif" }
      ]
    }
  };

  /* 🟢 UPGRADE: PRIORITIZE URL DATA */
  let media = null;

  if (projectSlug && PROJECTS[projectSlug]) {
    media = PROJECTS[projectSlug].media;
    projectTitle = PROJECTS[projectSlug].title;
  } else if (mediaData) {
    media = JSON.parse(mediaData);
  }

  if (!media) {
    wrapper.innerHTML = "<p>No media found</p>";
    return;
  }

  /* 🟢 SET TITLE */
  if (titleEl && projectTitle) {
    titleEl.textContent = projectTitle;
  }

  /* 🟢 BUILD SLIDES */
  media.forEach(item => {

    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    if (item.type === "image") {
      slide.innerHTML = `<img src="${item.src}" class="media-img"/>`;
    }





    if (item.type === "video") {
      slide.innerHTML = `
        <div class="video-container">
          <video class="media-video" playsinline muted autoplay>
            <source src="${item.src}" type="video/mp4">
          </video>
    
          <!-- 🔥 CUSTOM CONTROLS -->
          <div class="video-controls">
            <button class="play-btn">▶</button>
            <input type="range" class="progress" value="0">
            <button class="mute-btn">🔊</button>
          </div>
        </div>
      `;
    }






    wrapper.appendChild(slide);
  });

  /* 🟢 INIT SWIPER */
  const swiper = new Swiper(".media-swiper", {
    loop: true,
    speed: 900,
    grabCursor: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },

    /* 🟢 UPGRADE: AUTOPLAY (IMAGES) */
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    watchSlidesProgress: true, // 🔥 important fix

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    on: {
      init: function () {
        handleMedia(this);
      },
      slideChange: function () {
        handleMedia(this);
      }
    }
  });


  /* CLICK HANDLER */
  document.addEventListener("click", e => {
    const slide = document.querySelector(".swiper-slide-active");
    if (!slide) return;
  
    const video = slide.querySelector("video");
    if (!video) return;
  
    /* 🔥 TAP ANYWHERE (except controls) */
    if (!e.target.closest(".video-controls")) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  
    /* PLAY BUTTON */
    if (e.target.classList.contains("play-btn")) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  
    /* MUTE BUTTON */
    if (e.target.classList.contains("mute-btn")) {
      video.muted = !video.muted;
      e.target.textContent = video.muted ? "🔇" : "🔊";
    }
  });








  /* 🟢 UPGRADE: SMART MEDIA CONTROL */
  function handleMedia(swiper) {

    document.querySelectorAll("video").forEach(v => v.pause());
  
    const activeSlide = swiper.slides[swiper.activeIndex];
    const video = activeSlide.querySelector("video");
  
    if (video) {
      swiper.autoplay.stop();
  
      video.currentTime = 0;
  
      video.play().catch(()=>{});


      const progress = activeSlide.querySelector(".progress");

      if (progress) {

        // 🔥 Update progress while video plays
        video.addEventListener("timeupdate", () => {
          const percent = (video.currentTime / video.duration) * 100;
          progress.value = percent || 0;

          // 🎨 dynamic fill (optional but sexy)
          progress.style.background = `linear-gradient(to right, #ff7a00 ${percent}%, rgba(255,255,255,0.3) ${percent}%)`;
        });

        // 🔥 Seek when user drags
        progress.addEventListener("input", () => {
          const time = (progress.value / 100) * video.duration;
          video.currentTime = time;
        });

      }

  
      /* 🔥 ADD THIS BLOCK HERE */
      const playBtn = activeSlide.querySelector(".play-btn");
  
      video.addEventListener("play", () => {
        if (playBtn) playBtn.textContent = "⏸";
      });
  
      video.addEventListener("pause", () => {
        if (playBtn) playBtn.textContent = "▶";
      });
  
    } else {
      swiper.autoplay.start();
    }
  }



});