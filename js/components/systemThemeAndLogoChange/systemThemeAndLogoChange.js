/** 
 * systemThemeAndLogoChange.js 
 * 
*/


/**System theme */
document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;
  const btn = document.getElementById("themeBtn");

  // 🌙 SYSTEM DETECTION
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  let savedTheme = localStorage.getItem("theme");

  if(!savedTheme){
    savedTheme = prefersDark ? "dark" : "light";
  }

  applyTheme(savedTheme);

  // TOGGLE CLICK
  btn.addEventListener("click", () => {
    const current = body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";

    applyTheme(next);
    localStorage.setItem("theme", next);
  });

});


function applyTheme(theme){

  const body = document.body;

  gsap.to(body, {
    opacity:0.9,
    duration:0.3,
    onComplete:()=>{

      body.setAttribute("data-theme", theme);
      switchLogo(theme);
      switchBackground(theme);

      gsap.to(body,{
        opacity:1,
        duration:0.4
      });

    }
  });

}




/** 




    document.addEventListener("DOMContentLoaded", () => {

        const body = document.body;
      
        function toggleTheme(){
      
          const current = body.getAttribute("data-theme") || "dark";
          const next = current === "dark" ? "light" : "dark";
      
          /* 🌊 FADE OUT 
          gsap.to(body, {
            opacity: 0.92,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
      
              body.setAttribute("data-theme", next);
              switchLogo(next);
      
              /* 🌊 FADE IN 
              gsap.to(body, {
                opacity: 1,
                duration: 0.6,
                ease: "power2.inOut"
              });
      
            }
          });
        }
      
        /* START DEFAULT 
        body.setAttribute("data-theme", "dark");
      
        /* ⏱️ EVERY 5 MINUTES (FIXED) 
        setInterval(toggleTheme, 30000);
      
      });

*/


// logo Change
function switchLogo(theme){
    const logo = document.getElementById("themeLogo");
  
    if(!logo) return;
  
    gsap.to(logo, {
      opacity:0,
      scale:0.9,
      duration:0.3,
      onComplete:()=>{
        logo.src = theme === "dark"
          ? "assets/images/logo-dark.png"
          : "assets/images/logo-light.png";
  
        gsap.to(logo,{
          opacity:1,
          scale:1,
          duration:0.4
        });
      }
    });
  }


//
function switchBackground(theme){
    const bg = document.getElementById("bgImage");
  
    if(!bg) return;
  
    gsap.to(bg, {
      opacity:0,
      duration:0.5,
      onComplete:()=>{
  
        bg.src = theme === "dark"
          ? "assets/images/bg-dark-2k.jpg"
          : "assets/images/bg-light-2k.jpg";
  
        gsap.to(bg,{
          opacity:1,
          duration:0.8
        });
      }
    });
  }