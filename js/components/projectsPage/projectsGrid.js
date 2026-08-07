/**
 * projectsGrid.js
 */

/* 🟢 CUSTOM PROJECT GRID COMPONENT */

class ProjectsGrid extends HTMLElement {
    connectedCallback() {
  
      /* 🟢 GET DATA FROM INNER HTML (JSON FORMAT) */
      const data = JSON.parse(this.querySelector("script").textContent);
  
      this.innerHTML = `
        <section class="projects-section">
  
          <div class="projects-grid">
            ${data.map(item => `
              
              <div class="project-item" 
                data-title="${item.title}"
                data-desc="${item.desc}"
                data-slug="${this.createSlug(item.title)}"
                data-media='${JSON.stringify(item.media)}'
              >
  
                <!-- 🟢 TEXT ABOVE -->
                <div class="project-text">
                  <h3>${item.title}</h3>
                  <p class="small">${item.desc}</p>
                </div>
  
                <!-- 🟢 MEDIA -->
                <div class="project-media">
                  ${this.renderMedia(item.media)}
                </div>
  
              </div>
  
            `).join("")}
          </div>
  
        </section>
      `;
  
      /* 🟢 CLICK HANDLER (MEDIA PLAYER NAVIGATION) */
      this.querySelectorAll(".project-item").forEach(card => {
  
        card.addEventListener("click", () => {
  
          const media = JSON.parse(card.dataset.media);
          const title = card.dataset.title;
          const desc = card.dataset.desc;
          const slug = card.dataset.slug;
  
          /* 🟢 PASS DATA */
          sessionStorage.setItem("river_media", JSON.stringify(media));
          sessionStorage.setItem("river_project_title", title);
          sessionStorage.setItem("river_full_desc", desc);
  
          const url = `mediaPlayer.html?project=${slug}`;
  
          document.getElementById("pageTransition")?.classList.add("active");
  
          setTimeout(() => {
            window.location.href = url;
          }, 400);
  
        });
  
      });
  
    }
  
    /* 🟢 RENDER IMAGE OR VIDEO */
    renderMedia(media){
      const first = media[0];
  
      if(!first) return "";
  
      if(first.type === "video"){
        return `
          <video muted playsinline preload="metadata" src="${first.src}"></video>
        `;
      }
  
      return `<img src="${first.src}" />`;
    }
  
    /* 🟢 SLUG GENERATOR */
    createSlug(title){
      return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    }
  
  }
  
  customElements.define("projects-grid", ProjectsGrid);