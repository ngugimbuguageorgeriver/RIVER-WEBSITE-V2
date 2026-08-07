/**
 * projectCard.js
 */

/* 🟢 REUSABLE PROJECT CARD */

class ProjectCard extends HTMLElement {
    connectedCallback() {
  
      const title = this.dataset.title;
      const desc = this.dataset.desc;
      const media = JSON.parse(this.dataset.media || "[]");
      const slug = this.dataset.slug;
  
      const firstMedia = media[0] || {};
  
      /* 🟢 LIMIT TEXT FUNCTION */
      function truncate(text, limit = 100){
        if(text.length <= limit) return text;
        return text.substring(0, limit).trim() + "...";
      }
  
      this.innerHTML = `
        <div class="media-card">
  
          <div class="project-card" data-media='${JSON.stringify(media)}'>
  
            <div class="media-wrapper loading">
              <img src="${firstMedia.src}" />
              <video muted playsinline preload="metadata"></video>
            </div>
  
            <h3>${title}</h3>
  
            <p class="small desc">
              ${truncate(desc)}
              <span class="read-more">Read more</span>
            </p>
  
          </div>
  
        </div>
      `;
  
      const card = this.querySelector(".project-card");
      const readMore = this.querySelector(".read-more");
  
      /* 🟢 NAVIGATION FUNCTION (REUSABLE) */
      const goToMedia = () => {
  

        /* 🟢 PASS FULL DATA (fallback) */
        sessionStorage.setItem("river_media", JSON.stringify(media));

        /* 🟢 PASS TITLE */
        sessionStorage.setItem("river_project_title", title);
        sessionStorage.setItem("river_full_desc", desc); // 🔥 FULL TEXT
  
        /* 🟢 DEEP LINK URL */
        const url = `mediaPlayer.html?project=${slug}`;
  
        document.getElementById("pageTransition")?.classList.add("active");
  
        setTimeout(() => {
          window.location.href = url;
        }, 400);
      };
  
      /* 🟢 CARD CLICK */
      card.addEventListener("click", goToMedia);
  
      /* 🟢 READ MORE CLICK */
      readMore.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent double trigger
        goToMedia();
      });
  
    }
  }
  
  customElements.define("project-card", ProjectCard);