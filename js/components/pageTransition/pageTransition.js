

/**
 * pageTransition.js
 * Smooth navigation transitions (no reload feel)
 */

document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("pageTransition");
  
    // PAGE ENTER (when page loads)
    window.addEventListener("load", () => {
      document.body.classList.add("loaded");
    });
  
    // HANDLE LINK CLICKS
    const links = document.querySelectorAll("a[href]");
  
    links.forEach(link => {
  
      link.addEventListener("click", function(e){
  
        const href = this.getAttribute("href");
  
        // IGNORE EXTERNAL / ANCHORS
        if(
          href.startsWith("#") ||
          href.startsWith("mailto:") ||
          href.startsWith("tel:") ||
          this.target === "_blank"
        ){
          return;
        }
  
        e.preventDefault();
  
        // ACTIVATE EXIT ANIMATION
        overlay.classList.add("active");
  
        // WAIT FOR ANIMATION THEN NAVIGATE
        setTimeout(() => {
          window.location.href = href;
        }, 650); // match CSS duration
      });
  
    });
  
  });