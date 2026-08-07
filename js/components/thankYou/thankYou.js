/**
 * thankYou.js
 */


document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 🟢 CONTAINER ANIMATION
    // =========================
    gsap.from(".container", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
    });
    
    // =========================
    // 🟢 CHECKMARK DRAW
    // =========================
    setTimeout(() => {
    const mark = document.getElementById("checkmark");
    
    ```
    const tick = document.createElement("div");
    
    tick.style.position = "absolute";
    tick.style.left = "24px";
    tick.style.top = "45px";
    tick.style.width = "20px";
    tick.style.height = "40px";
    tick.style.borderRight = "4px solid #00d4ff";
    tick.style.borderBottom = "4px solid #00d4ff";
    tick.style.transform = "rotate(45deg) scale(0)";
    tick.style.transformOrigin = "bottom left";
    
    mark.appendChild(tick);
    
    gsap.to(tick, {
      scale: 1,
      duration: 0.5,
      ease: "back.out(2)"
    });
    ```
    
    }, 500);
    
    });
    