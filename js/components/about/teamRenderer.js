/*
============================================================
RIVER — TEAM RENDERER
============================================================

🟢 UPGRADE

Consumes window.RIVER_TEAM and renders:

1. Full Team Directory
   #teamGrid

2. About Team Preview
   #aboutTeamPreview

Features:
- Dynamic rendering
- Category filtering
- Search-ready architecture
- Image fallback
- Empty states
- Accessible links
- Card animation
- Registry-driven content

============================================================
*/

(() => {
    "use strict";
  
    /*
    ============================================================
    CONFIGURATION
    ============================================================
    */
  
    const CONFIG = {
  
      fullGridSelector: "#teamGrid",
  
      previewGridSelector: "#aboutTeamPreview",
  
      filterSelector: "[data-team-filter]",
  
      previewLimit: 3,
  
      defaultFilter: "all"
  
    };
  
    /*
    ============================================================
    🟢 UPGRADE — INITIALIZATION
    ============================================================
    */
  
    function init() {
  
      if (!window.RIVER_TEAM) {
        document.addEventListener(
          "river:team-ready",
          init,
          { once: true }
        );
  
        return;
      }
  
      initFullTeamDirectory();
      initTeamPreview();
      initFilters();
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — FULL DIRECTORY
    ============================================================
    */
  
    function initFullTeamDirectory() {
  
      const grid = document.querySelector(
        CONFIG.fullGridSelector
      );
  
      if (!grid) {
        return;
      }
  
      renderTeam(
        grid,
        window.RIVER_TEAM.getAll()
      );
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — ABOUT PREVIEW
    ============================================================
    */
  
    function initTeamPreview() {
  
      const grid = document.querySelector(
        CONFIG.previewGridSelector
      );
  
      if (!grid) {
        return;
      }
  
      const members = window.RIVER_TEAM
        .getAll()
        .slice(0, CONFIG.previewLimit);
  
      renderTeam(
        grid,
        members,
        {
          preview: true
        }
      );
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — FILTERS
    ============================================================
    */
  
    function initFilters() {
  
      const filters = document.querySelectorAll(
        CONFIG.filterSelector
      );
  
      if (!filters.length) {
        return;
      }
  
      filters.forEach(button => {
  
        button.addEventListener(
          "click",
          () => {
  
            const category =
              button.dataset.teamFilter || "all";
  
            setActiveFilter(
              filters,
              button
            );
  
            const grid = document.querySelector(
              CONFIG.fullGridSelector
            );
  
            if (!grid) {
              return;
            }
  
            const members =
              window.RIVER_TEAM.getByCategory(
                category
              );
  
            renderTeam(
              grid,
              members
            );
  
          }
        );
  
      });
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — ACTIVE FILTER
    ============================================================
    */
  
    function setActiveFilter(
      filters,
      activeButton
    ) {
  
      filters.forEach(button => {
  
        const isActive =
          button === activeButton;
  
        button.classList.toggle(
          "active",
          isActive
        );
  
        button.setAttribute(
          "aria-pressed",
          String(isActive)
        );
  
      });
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — RENDER TEAM
    ============================================================
    */
  
    function renderTeam(
      container,
      members,
      options = {}
    ) {
  
      if (!container) {
        return;
      }
  
      container.innerHTML = "";
  
      if (!Array.isArray(members) || !members.length) {
  
        renderEmptyState(container);
  
        return;
      }
  
      const fragment =
        document.createDocumentFragment();
  
      members.forEach(
        (member, index) => {
  
          const card =
            createTeamCard(
              member,
              options
            );
  
          if (!card) {
            return;
          }
  
          card.style.animationDelay =
            `${index * 45}ms`;
  
          fragment.appendChild(card);
  
        }
      );
  
      container.appendChild(fragment);
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — CREATE TEAM CARD
    ============================================================
    */
  
    function createTeamCard(
      member,
      options = {}
    ) {
  
      if (!member) {
        return null;
      }
  
      const article =
        document.createElement("article");
  
      article.className =
        "team-card is-entering";
  
      if (
        member.featured === true &&
        !options.preview
      ) {
        article.classList.add(
          "is-featured"
        );
      }
  
      article.dataset.teamId =
        member.id || "";
  
      article.dataset.teamDiscipline =
        member.discipline || "";
  
      /*
      ------------------------------------------------------------
      MEDIA
      ------------------------------------------------------------
      */
  
      const media =
        document.createElement("div");
  
      media.className =
        "team-card-media";
  
      if (member.image) {
  
        const image =
          document.createElement("img");
  
        image.src =
          member.image;
  
        image.alt =
          `${member.name} — ${member.role || "River team member"}`;
  
        image.loading =
          options.preview
            ? "lazy"
            : "lazy";
  
        image.decoding =
          "async";
  
        image.addEventListener(
          "error",
          () => {
  
            media.classList.add(
              "is-fallback"
            );
  
            image.remove();
  
            media.appendChild(
              createInitials(
                member.name
              )
            );
  
          },
          { once: true }
        );
  
        media.appendChild(image);
  
      } else {
  
        media.classList.add(
          "is-fallback"
        );
  
        media.appendChild(
          createInitials(
            member.name
          )
        );
  
      }
  
      /*
      ------------------------------------------------------------
      BODY
      ------------------------------------------------------------
      */
  
      const body =
        document.createElement("div");
  
      body.className =
        "team-card-body";
  
      /*
      ------------------------------------------------------------
      NAME
      ------------------------------------------------------------
      */
  
      const name =
        document.createElement("h3");
  
      name.className =
        "team-card-name";
  
      name.textContent =
        member.name || "River Team Member";
  
      body.appendChild(name);
  
      /*
      ------------------------------------------------------------
      ROLE
      ------------------------------------------------------------
      */
  
      if (member.role) {
  
        const role =
          document.createElement("p");
  
        role.className =
          "team-card-role";
  
        role.textContent =
          member.role;
  
        body.appendChild(role);
  
      }
  
      /*
      ------------------------------------------------------------
      DISCIPLINE
      ------------------------------------------------------------
      */
  
      if (member.discipline) {
  
        const discipline =
          document.createElement("span");
  
        discipline.className =
          "team-card-discipline";
  
        discipline.textContent =
          formatDiscipline(
            member.discipline
          );
  
        body.appendChild(
          discipline
        );
  
      }
  
      /*
      ------------------------------------------------------------
      PERSONAL STATEMENT
      ------------------------------------------------------------
      */
  
      if (member.statement) {
  
        const statement =
          document.createElement("p");
  
        statement.className =
          "team-card-statement";
  
        statement.textContent =
          member.statement;
  
        body.appendChild(
          statement
        );
  
      }
  
      /*
      ------------------------------------------------------------
      ASK ME ABOUT
      ------------------------------------------------------------
      */
  
      if (member.askMeAbout) {
  
        const ask =
          document.createElement("div");
  
        ask.className =
          "team-card-ask";
  
        const label =
          document.createElement("span");
  
        label.className =
          "team-card-ask-label";
  
        label.textContent =
          "Ask me about";
  
        const value =
          document.createElement("p");
  
        value.className =
          "team-card-ask-value";
  
        value.textContent =
          member.askMeAbout;
  
        ask.appendChild(label);
        ask.appendChild(value);
  
        body.appendChild(ask);
  
      }
  
      /*
      ------------------------------------------------------------
      LINKS
      ------------------------------------------------------------
      */
  
      const links =
        createTeamLinks(
          member.links
        );
  
      if (links) {
  
        body.appendChild(
          links
        );
  
      }
  
      /*
      ------------------------------------------------------------
      ASSEMBLE
      ------------------------------------------------------------
      */
  
      article.appendChild(media);
      article.appendChild(body);
  
      return article;
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — INITIALS FALLBACK
    ============================================================
    */
  
    function createInitials(name) {
  
      const element =
        document.createElement("span");
  
      element.className =
        "team-card-initials";
  
      const initials =
        String(name || "River")
          .trim()
          .split(/\s+/)
          .slice(0, 2)
          .map(
            part =>
              part.charAt(0)
                .toUpperCase()
          )
          .join("");
  
      element.textContent =
        initials || "R";
  
      return element;
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — SOCIAL LINKS
    ============================================================
    */
  
    function createTeamLinks(
      links
    ) {
  
      if (
        !links ||
        typeof links !== "object"
      ) {
        return null;
      }
  
      const available =
        Object.entries(links)
          .filter(
            ([, value]) =>
              typeof value === "string" &&
              value.trim() &&
              value !== "#"
          );
  
      if (!available.length) {
        return null;
      }
  
      const wrapper =
        document.createElement("div");
  
      wrapper.className =
        "team-card-links";
  
      available.forEach(
        ([platform, url]) => {
  
          const anchor =
            document.createElement("a");
  
          anchor.className =
            "team-card-link";
  
          anchor.href =
            url;
  
          anchor.target =
            "_blank";
  
          anchor.rel =
            "noopener noreferrer";
  
          anchor.textContent =
            formatPlatform(
              platform
            );
  
          wrapper.appendChild(
            anchor
          );
  
        }
      );
  
      return wrapper;
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — EMPTY STATE
    ============================================================
    */
  
    function renderEmptyState(
      container
    ) {
  
      const state =
        document.createElement("div");
  
      state.className =
        "team-empty-state";
  
      const title =
        document.createElement("h3");
  
      title.textContent =
        "No team members found.";
  
      const message =
        document.createElement("p");
  
      message.textContent =
        "There are currently no people matching this category. Try another filter.";
  
      state.appendChild(title);
      state.appendChild(message);
  
      container.appendChild(
        state
      );
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — DISCIPLINE FORMATTER
    ============================================================
    */
  
    function formatDiscipline(
      discipline
    ) {
  
      if (!discipline) {
        return "";
      }
  
      return String(discipline)
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, letter =>
          letter.toUpperCase()
        );
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — PLATFORM FORMATTER
    ============================================================
    */
  
    function formatPlatform(
      platform
    ) {
  
      const labels = {
  
        linkedin: "LinkedIn",
  
        github: "GitHub",
  
        website: "Website",
  
        x: "X",
  
        twitter: "Twitter"
  
      };
  
      return (
        labels[platform] ||
        formatDiscipline(platform)
      );
  
    }
  
    /*
    ============================================================
    🟢 UPGRADE — PUBLIC API
    ============================================================
    */
  
    window.RIVER_TEAM_RENDERER = {
  
      render(
        selector,
        members
      ) {
  
        const container =
          document.querySelector(
            selector
          );
  
        if (!container) {
          return;
        }
  
        renderTeam(
          container,
          members
        );
  
      },
  
      renderCategory(
        selector,
        category
      ) {
  
        const container =
          document.querySelector(
            selector
          );
  
        if (!container || !window.RIVER_TEAM) {
          return;
        }
  
        renderTeam(
          container,
          window.RIVER_TEAM.getByCategory(
            category
          )
        );
  
      }
  
    };
  
    /*
    ============================================================
    🟢 UPGRADE — START
    ============================================================
    */
  
    if (
      document.readyState === "loading"
    ) {
  
      document.addEventListener(
        "DOMContentLoaded",
        init,
        { once: true }
      );
  
    } else {
  
      init();
  
    }
  
  })();