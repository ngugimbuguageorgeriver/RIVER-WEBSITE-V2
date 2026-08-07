


/**
 * contactForm.js
 * 🟢 FULL INDUSTRY STANDARD PHONE SYSTEM
 */

document.addEventListener("DOMContentLoaded", () => {

  const inputs = document.querySelectorAll(".input");
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const phoneInput = document.querySelector("#phone");

  let iti;

  // ===============================
  // 🟢 UPGRADE: INITIALIZE LIB (GOOGLE DATA)
  // ===============================
  if (phoneInput) {
    iti = window.intlTelInput(phoneInput, {

      initialCountry: "ke",

      preferredCountries: ["ke", "us", "gb", "in"],

      separateDialCode: true, // 🟢 cleaner UX

      nationalMode: true, // 🟢 user types local number

      autoPlaceholder: "polite",

      formatOnDisplay: true,

      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",

    });









    // ===============================
    // 🟢 UPGRADE: LIVE VALIDATION (LIBPHONENUMBER POWER)
    // ===============================
    function validatePhone() {

      const value = phoneInput.value.trim();

      if (!value) {
        phoneInput.classList.remove("valid", "invalid");
        return;
      }

      if (iti.isValidNumber()) {
        phoneInput.classList.add("valid");
        phoneInput.classList.remove("invalid");
      } else {
        phoneInput.classList.add("invalid");
        phoneInput.classList.remove("valid");
      }
    }



    

    // ===============================
    // 🟢 CLEAN PASTE
    // ===============================
    phoneInput.addEventListener("paste", (e) => {
        e.preventDefault();

        let paste = (e.clipboardData || window.clipboardData).getData("text");

        phoneInput.value = paste;
        validatePhone();
    });



    // ===============================
    // PHONE INPUT NOW ACCEPTS ONLY NUMBERS
    // ===============================
    phoneInput.addEventListener("input", () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, "");
      validatePhone();
    });


    // ===============================
    // Block invalid keys while typing
    // ===============================
    phoneInput.addEventListener("keydown", (e) => {

      // Allow navigation/editing keys
      const allowedKeys = [
          "Backspace",
          "Delete",
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Tab",
          "Home",
          "End"
      ];
  
      if (allowedKeys.includes(e.key) || e.ctrlKey || e.metaKey) {
          return;
      }
  
      // Allow digits only
      if (!/^\d$/.test(e.key)) {
          e.preventDefault();
      }
  
    });









    phoneInput.addEventListener("input", validatePhone);
    phoneInput.addEventListener("blur", validatePhone);


  }



  //
    // ===============================
  // 🟢 REAL-TIME FIELD VALIDATION
  // ===============================
  function validateField(field) {
    field.classList.remove("valid", "invalid");

    if (!field.value.trim()) return;

    if (field.checkValidity()) {
      field.classList.add("valid");
    } else {
      field.classList.add("invalid");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("input", () => validateField(input));

    input.addEventListener("focus", () => {
      gsap.to(input, { scale: 1.03, duration: 0.2 });
    });

    input.addEventListener("blur", () => {
      gsap.to(input, { scale: 1, duration: 0.2 });
    });
  });

  // ===============================
  // 🟢 DROPDOWN ANIMATION
  // ===============================
  document.addEventListener("click", () => {
    const dropdown = document.querySelector(".iti__country-list");
    if (!dropdown) return;

    const isOpen = !dropdown.classList.contains("iti__hide");

    if (isOpen) {
      gsap.fromTo(
        dropdown,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.25 }
      );
    }
  });














  // ===============================
  // 🟢 FORM SUBMIT (E.164 STORAGE)
  // ===============================
  // ===============================
  // 🟢 UPGRADE: REAL FORM SUBMISSION (FETCH API)
  // ===============================
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let valid = true;

    inputs.forEach((input) => {
      validateField(input);
      if (!input.checkValidity()) valid = false;
    });

    if (!iti || !iti.isValidNumber()) {
      phoneInput.classList.add("invalid");
      valid = false;
    }

    if (!valid) {
      status.textContent = "❌ Please fill all fields correctly";
      status.style.color = "red";
      return;
    }

    // 🟢 E.164 FORMAT
    const e164 = iti.getNumber();

    let hidden = form.querySelector("input[name='phone_e164']");
    if (!hidden) {
      hidden = document.createElement("input");
      hidden.type = "hidden";
      hidden.name = "phone_e164";
      form.appendChild(hidden);
    }

    hidden.value = e164;

    // 🟢 COLLECT FORM DATA
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
          // 🟢 UPGRADE: REDIRECT TO THANK YOU PAGE
          window.location.href = "thankYou.html";

      } else {
        const data = await response.json();
        status.textContent = data.errors
          ? data.errors.map(e => e.message).join(", ")
          : "❌ Submission failed";
        status.style.color = "red";
      }

    } catch (error) {
      status.textContent = "❌ Network error. Try again.";
      status.style.color = "red";
    }
  });

});




/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/
/*********************************************************************************************************************/
/**
 * 🟢 FULL CUSTOM SELECT SYSTEM
 */

document.addEventListener("DOMContentLoaded", () => {

  const selects = document.querySelectorAll(".custom-select");
  
  selects.forEach(select => {
  
  const trigger = select.querySelector(".select-trigger");
  const dropdown = select.querySelector(".select-dropdown");
  const options = select.querySelectorAll(".select-option");
  const hiddenInput = select.querySelector("input[type='hidden']");
  
  // OPEN / CLOSE
  trigger.addEventListener("click", (e) => {
  
  e.stopPropagation();
  
  // close others
  document.querySelectorAll(".custom-select").forEach(s => {
  if (s !== select) s.classList.remove("open");
  });
  
  select.classList.toggle("open");
  
  // 🟢 GSAP ANIMATION
  if (select.classList.contains("open")) {
  gsap.fromTo(dropdown,
  {opacity:0, y:-10},
  {opacity:1, y:0, duration:0.25}
  );
  }
  
  });
  
  // SELECT OPTION
  options.forEach(option => {
  
  option.addEventListener("click", () => {
  
  const value = option.textContent.trim();
  
  trigger.textContent = value;
  hiddenInput.value = value;
  
  // 🟢 FLOAT LABEL FIX
  select.closest(".form-group").classList.add("has-value");
  
  // 🟢 VALIDATION STYLE
  hiddenInput.classList.add("valid");
  
  select.classList.remove("open");
  
  // 🟢 TEAM LOGIC
  if (select.dataset.name === "hasTeam") {
  const group = document.getElementById("teamCapacityGroup");
  
  if (value === "Yes") {
  group.classList.remove("hidden");
  } else {
  group.classList.add("hidden");
  }
  }
  
  });
  
  });
  
  });
  
  // CLOSE ON OUTSIDE CLICK
  document.addEventListener("click", () => {
  document.querySelectorAll(".custom-select")
  .forEach(s => s.classList.remove("open"));
  });
  
  });

