/**
 * River Hiring FAQ
 * 🟢 UPGRADE: Accessible category tabs with URL state.
 * 🟢 UPGRADE: Keyboard support and mobile-safe panel switching.
 */
(() => {



  const tabs = [...document.querySelectorAll(".category")];
  const panels = [...document.querySelectorAll(".faq-panel")];
  if (!tabs.length) return;

  const show = (category, updateUrl = true) => {
    tabs.forEach(tab => {
      const active = tab.dataset.category === category;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });

    panels.forEach(panel => {
      const active = panel.dataset.panel === category;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("category", category);
      history.replaceState({}, "", url);
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => show(tab.dataset.category));

    tab.addEventListener("keydown", event => {
      if (!["ArrowDown","ArrowRight","ArrowUp","ArrowLeft","Home","End"].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      tabs[next].focus();
      show(tabs[next].dataset.category);
    });
  });

  const initial = new URLSearchParams(location.search).get("category");
  show(tabs.some(t => t.dataset.category === initial) ? initial : "work", false);
})();



const generalApplication =
  window.RiverCareers?.getGeneralApplication();

if (generalApplication) {

  const link =
    document.getElementById("general-application-link");

  if (link) {

    link.href =
      generalApplication.url;

  }

}