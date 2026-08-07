/** */

// HEADER LOGO ANIMATION
document.addEventListener("DOMContentLoaded", () => {

    const logo = document.querySelector(".logo img");
  
    if(!logo) return;
  
    // 🔥 ENTRY (after intro or page load)
    gsap.from(logo, {
      opacity: 0,
      y: -20,
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2
    });
  
    // 🌊 IDLE FLOAT (subtle premium feel)
    gsap.to(logo, {
      y: 6,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  
  });



/** */
document.addEventListener("introFinished", () => {
    const logo = document.querySelector(".logo img");
  
    gsap.from(logo, {
      opacity: 0,
      y: -20,
      scale: 0.9,
      duration: 1.2,
      ease: "power3.out"
    });
  });

/** */

const logo = document.querySelector(".logo");

document.addEventListener("mousemove", (e) => {
  const rect = logo.getBoundingClientRect();

  const x = e.clientX - (rect.left + rect.width / 2);
  const y = e.clientY - (rect.top + rect.height / 2);

  gsap.to(logo, {
    x: x * 0.05,
    y: y * 0.05,
    duration: 0.3,
    ease: "power2.out"
  });
});

