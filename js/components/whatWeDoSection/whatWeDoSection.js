/**
 * whatWeDoSection.js
 */


/* 🟢 UPGRADE: WHAT WE DO COMPONENT */

class WhatWeDo extends HTMLElement {
    connectedCallback() {
  
      const title = this.dataset.title;
      const subtitle = this.dataset.subtitle;
      const button = this.dataset.button;
      const link = this.dataset.link;

      
  
      /* 🟢 DATA SOURCE (CAN BE MOVED TO API / JSON FILE) */
      const data = [
        {
          title: "Web & eCommerce",
          desc: "Fast, scalable web systems...",
          media: [
            { type: "image", src: "assets/Media/placeHolderImages/placeHolderImage1.jpg" },
            { type: "video", src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4"  },
            { type: "image", src: "assets/Media/placeHolderImages/placeHolderImage1.jpg" }
          ]
        },


        {
          title: "Enterprise Systems",
          desc: "Custom ERP & CRM platforms...",
          media: [
            { type: "image", src: "assets/Media/placeHolderImages/placeHolderImage1.jpg" },
            { type: "video", src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4" }
          ]
        },


        {
            title: "Cloud & DevOps",
            desc: "Scalable cloud infrastructure...",
            media: [
              { type: "image", src: "assets/Media/placeHolderImages/placeHolderImage1.jpg" },
              { type: "video", src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4" }
            ]
        }

      ];


        /* 🟢 DUPLICATE FOR INFINITE LOOP */
        const loopData = [...data, ...data];
  
      this.innerHTML = `
        <section class="what-we-do mt-18">
  
          <div class="what-we-do-inner">
  
            <div class="section-title">
              <div>
                <h2>${title}</h2>
                <p class="small">${subtitle}</p>
              </div>
  
              <div>
                <a class="btn" href="${link}">${button}</a>
              </div>
            </div>
  
            <!-- 🟢 AUTO MARQUEE -->
            <div class="project-marquee">
              <div class="marquee-track">
                ${loopData.map(item => `

                  <project-card 
                    data-title="${item.title}"
                    data-desc="${item.desc}"
                    data-slug="${createSlug(item.title)}"   /* 🟢 UPGRADE */
                    data-media='${JSON.stringify(item.media)}'
                  ></project-card>

                `).join("")}
              </div>
            </div>
  
          </div>
        </section>
      `;


      //
      setTimeout(() => {

        const track = this.querySelector(".marquee-track");
        const cards = gsap.utils.toArray(this.querySelectorAll(".media-card"));
      
        let totalWidth = 0;
      
        cards.forEach(card => {
          totalWidth += card.offsetWidth + 32; // gap
        });
      
        /* 🟢 DUPLICATE TRACK FOR TRUE LOOP */
        track.innerHTML += track.innerHTML;
      
        const loopWidth = totalWidth;
      
        /* 🟢 GSAP LOOP TIMELINE */
        const tl = gsap.timeline({
          repeat: -1,
          defaults: { ease: "none" }
        });


        /* 🟢 HOVER SLOWDOWN SYSTEM */

        track.addEventListener("mouseenter", () => {
            gsap.to(tl, {
            timeScale: 0.2, // 👈 slower (0 = stop, 1 = normal)
            duration: 0.5,
            ease: "power2.out"
            });
        });
        
        track.addEventListener("mouseleave", () => {
            gsap.to(tl, {
            timeScale: 1, // back to normal speed
            duration: 0.5,
            ease: "power2.out"
            });
        });
      
        tl.to(track, {
          x: `-=${loopWidth}`,
          duration: 40 // 👈 SPEED CONTROL (lower = faster)
        });
      
        /* 🟢 MODIFIERS = NO RESET JUMP */
        gsap.set(track, {
          x: 0,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % loopWidth)
          }
        });
      
        /* 🟢 FOCUS SYSTEM */
        function updateFocus() {
          const center = window.innerWidth / 2;
      
          cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
      
            const distance = Math.abs(center - cardCenter);
      
            card.classList.remove("focus", "dimmed");
      
            if (distance < rect.width / 2) {
              card.classList.add("focus");
              activateVideo(card);
            } else {
              card.classList.add("dimmed");
              deactivateVideo(card);
            }
          });
        }
      
        gsap.ticker.add(updateFocus);
      
        /* 🟢 DRAG + INERTIA */
        let proxy = document.createElement("div");
      
        const draggable = Draggable.create(proxy, {
          type: "x",
          inertia: true,
          trigger: track,
      
          onDrag() {
            gsap.set(track, {
              x: `+=${this.deltaX}`
            });
          },
      
          onThrowUpdate() {
            gsap.set(track, {
              x: `+=${this.deltaX}`
            });
          }
        })[0];
      
        /* 🟢 SNAP TO CENTER */
        function snapToCenter() {
          let closest = null;
          let minDistance = Infinity;
          const center = window.innerWidth / 2;
      
          cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardCenter = rect.left + rect.width / 2;
      
            const dist = Math.abs(center - cardCenter);
      
            if (dist < minDistance) {
              minDistance = dist;
              closest = card;
            }
          });
      
          if (closest) {
            const rect = closest.getBoundingClientRect();
            const offset = rect.left + rect.width / 2 - center;
      
            gsap.to(track, {
              x: `-=${offset}`,
              duration: 0.6,
              ease: "power3.out"
            });
          }
        }
      
        draggable.addEventListener("dragend", snapToCenter);
        draggable.addEventListener("throwcomplete", snapToCenter);
      
        /* 🟢 VIDEO CONTROL (UNCHANGED) */
        function activateVideo(card){
          const video = card.querySelector("video");
          if (!video) return;
      
          if (!video.src) {
            const media = JSON.parse(card.querySelector(".project-card").dataset.media);
            const vid = media.find(m => m.type === "video");
      
            if (vid) {
              video.src = vid.src;

              video.muted = true;
              video.loop = true;
              video.playsInline = true;

              video.load(); // 🔥 IMPORTANT
              video.play().catch(err => console.log("Player video error:", err));
            }
          }
      
          card.querySelector(".media-wrapper").classList.add("video-active");
        }
      
        function deactivateVideo(card){
          const video = card.querySelector("video");
          if (!video) return;
      
          video.pause();
          card.querySelector(".media-wrapper").classList.remove("video-active");
        }
      
      }, 100);

      //
      /* 🟢 UPGRADE: ADD SLUG */
        function createSlug(title){
            return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        }





      
    }
  }
  
  customElements.define("what-we-do", WhatWeDo);