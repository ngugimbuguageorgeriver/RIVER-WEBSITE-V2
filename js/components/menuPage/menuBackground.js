/**
 * menuBackground.js
 */

document.addEventListener("DOMContentLoaded", () => {

    const videos = document.querySelectorAll(".bg-video");
    let current = 0;
  
    // 🔥 FORCE AUTOPLAY (important for browsers)
    videos.forEach(video => {
      video.muted = true;
      video.play().catch(() => {});
    });
  
    function switchVideo(){
      videos[current].classList.remove("active");
  
      current = (current + 1) % videos.length;
  
      videos[current].classList.add("active");
    }
  
    // 🔥 CHANGE EVERY 6 SECONDS
    setInterval(switchVideo, 6000);
  
  });