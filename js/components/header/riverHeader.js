/**
 * riverHeader.js
 */

/**
 * 

now - the header - i want a design - i want the header to be divided in two - 
one side black - the other white - so the logo is on the dark side - 
the menu is on the white one - now after that - i want a shooting star design - 
from either side(random and times) - if from the dark side - 
the star should be orange in color and growing slowly as it approaches from the dark to the 
white side where in breach of the white side - it turns black - 
and on approaching the menu button it explodes - at the very top corner of the white side - 
i want a sun - not fully risen about 3/4 showing from the top corner - 
with a tree with red leaves cinematically across the sun - 
but partially covering it - and the tree should be swaying and dropping leaves 
and birds black in color flying from the white side sun towards the 
bottom corner where the white and black side meet in the middle of the header


*/


class RiverHeader extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
  
      // FULL HEADER TEMPLATE
      this.innerHTML = `
        <header class="header">
          <div class="header-container">
  
            <a href="index.html" class="logo">
              <img class="logo-image"
                
                src="assets/Media/riverWebsiteLogos/blackRiver.svg"
                alt="River Logo"
               
                
              />
            </a>
  
            <nav>
              <a href="menu.html" class="menu-btn" aria-label="Open menu">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </nav>
  
          </div>
        </header>
      `;
  
      // 🟢 OPTIONAL: Add JS behavior here later (menu animation etc)
    }
  }
  
  //🟢 REGISTER COMPONENT 
  customElements.define("river-header", RiverHeader);





