/**
 * riverTestimonials.js
 */



class RiverTestimonials extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class="testimonials-container">
          <div class="testimonials-header">
            <h2>What our clients say</h2>
            <p>Real people. Real companies. Real results.</p>
          </div>
  
          <div class="testimonials-track-wrapper">
            <div class="testimonials-track">
  
              ${this.renderCards()}
  
            </div>
          </div>
        </section>
      `;
  
      this.initDraggable();
      this.initVideos();
    }
  
    renderCards() {
      const data = [
        {
          type: "video",
          company: "Safaricom",
          logo: "assets/Media/placeHolderClientLogo/placeHolderLogo1.png",
          name: "Jane Smith",
          role: "CTO",
          video: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
          quote: "River transformed our operations."
        },
        {
          type: "quote",
          company: "Equity Bank",
          logo: "assets/Media/placeHolderClientLogo/placeHolderLogo1.png",
          name: "John Mwangi",
          role: "Managing Director",
          image: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
          quote: "The quality was exceptional. Delivery was ahead of schedule."
        },
        {
          type: "video",
          company: "KenGen",
          logo: "assets/Media/placeHolderClientLogo/placeHolderLogo1.png",
          name: "Mary Wanjiru",
          role: "Head of IT",
          video: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
          quote: "Scalable, reliable, and extremely fast."
        },
        {
            type: "quote",
            company: "Equity Bank",
            logo: "assets/Media/placeHolderClientLogo/placeHolderLogo1.png",
            name: "John Mwangi",
            role: "Managing Director",
            image: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
            quote: "The quality was exceptional. Delivery was ahead of schedule."
        },
        {
            type: "video",
            company: "KenGen",
            logo: "assets/Media/placeHolderClientLogo/placeHolderLogo1.png",
            name: "Mary Wanjiru",
            role: "Head of IT",
            video: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
            quote: "Scalable, reliable, and extremely fast."
        }
      ];
  
      return data.map(item => {
        if (item.type === "video") {
          return `
            <div class="testimonial-card video">
  
              <video muted autoplay loop playsinline>
                <source src="${item.video}" type="video/mp4">
              </video>
  
              <div class="card-top">
                <div class="company">
                  <img src="${item.logo}" />
                  <span>${item.company}</span>
                </div>
  
                <div class="person">
                  <strong>${item.name}</strong>
                  <span>${item.role}</span>
                </div>
              </div>
  
              <div class="video-quote">
                "${item.quote}"
              </div>
  
              <div class="video-controls">
                <button class="play">⏯</button>
                <button class="mute">🔊</button>
              </div>
  
            </div>
          `;
        }
  
        return `
          <div class="testimonial-card quote">
  
            <div class="card-top">
              <div class="company">
                <img src="${item.logo}" />
                <span>${item.company}</span>
              </div>
  
              <div class="person">
                <strong>${item.name}</strong>
                <span>${item.role}</span>
              </div>
            </div>
  
            <div class="quote-avatar">
              <img src="${item.image}" />
            </div>
  
            <div class="quote-text">
              "${item.quote}"
            </div>
  
            <div class="quote-stars">★★★★★</div>
  
          </div>
        `;
      }).join("");
    }
  
    initDraggable() {
      const track = this.querySelector(".testimonials-track");
  
      gsap.to(track, {
        x: 0
      });
  
      Draggable.create(track, {
        type: "x",
        inertia: true,
        edgeResistance: 0.9
      });
    }
  
    initVideos() {
      const cards = this.querySelectorAll(".testimonial-card.video");
  
      cards.forEach(card => {
        const video = card.querySelector("video");
        const playBtn = card.querySelector(".play");
        const muteBtn = card.querySelector(".mute");
  
        playBtn.addEventListener("click", () => {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });
  
        muteBtn.addEventListener("click", () => {
          video.muted = !video.muted;
        });
      });
    }
  }
  
  customElements.define("river-testimonials", RiverTestimonials);