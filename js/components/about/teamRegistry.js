/*
============================================================
RIVER — TEAM REGISTRY
============================================================

🟢 UPGRADE

Single source of truth for all River team members.

Consumed by:
- teamRenderer.js
- about.html
- about-team.html
- future team components

When a person joins, leaves, changes role, image,
discipline or social links, update this registry.

Do NOT hardcode team members inside HTML.
============================================================
*/

(() => {
    "use strict";
  
    /*
    ============================================================
    🟢 UPGRADE — TEAM DATA
    ============================================================
    */
  
    const TEAM = [
  
      {
        id: "river-founder",
        name: "George Mbugua",
        role: "Founder / Engineering Lead",
  
        discipline: "engineering",
  
        categories: [
          "leadership",
          "engineering"
        ],
  
        image: "assets/Media/BGI/BGI1.jpg",
  
        statement:
          "Engineering-led thinking, systems design and turning complex problems into practical technology.",
  
        askMeAbout:
          "Systems thinking, software architecture and engineering strategy.",
  
        location: "Nairobi, Kenya",
  
        featured: true,
  
        links: {
          linkedin: "#"
        },
  
        active: true,
  
        order: 1
      },
  
      /*
      ============================================================
      🟢 UPGRADE — ADD TEAM MEMBERS BELOW
      ============================================================   */
  

      {
        id: "member-name",
        name: "Member Name",
        role: "Software Engineer",
  
        discipline: "engineering",
  
        categories: [
          "engineering"
        ],
  
        image: "assets/Media/team/member-name.jpg",
  
        statement:
          "Short personal statement about how they approach their work.",
  
        askMeAbout:
          "Backend systems, APIs and infrastructure.",
  
        location: "Nairobi, Kenya",
  
        featured: false,
  
        links: {
          linkedin: "https://www.linkedin.com/in/..."
        },
  
        active: true,
  
        order: 2
      }
  

   
  
    ];
  
    /*
    ============================================================
    🟢 UPGRADE — REGISTRY API
    ============================================================
    */
  
    const registry = {
  
      /*
      ------------------------------------------------------------
      GET ALL ACTIVE MEMBERS
      ------------------------------------------------------------
      */
  
      getAll() {
        return TEAM
          .filter(member => member.active !== false)
          .sort((a, b) => {
            return (a.order || 999) - (b.order || 999);
          });
      },
  
      /*
      ------------------------------------------------------------
      GET MEMBER
      ------------------------------------------------------------
      */
  
      getById(id) {
        return TEAM.find(member => member.id === id) || null;
      },
  
      /*
      ------------------------------------------------------------
      GET BY CATEGORY
      ------------------------------------------------------------
      */
  
      getByCategory(category) {
  
        if (!category || category === "all") {
          return this.getAll();
        }
  
        return this.getAll().filter(member => {
  
          const categories = Array.isArray(member.categories)
            ? member.categories
            : [];
  
          return categories.includes(category);
        });
      },
  
      /*
      ------------------------------------------------------------
      GET FEATURED
      ------------------------------------------------------------
      */
  
      getFeatured() {
        return this.getAll().filter(member => member.featured === true);
      },
  
      /*
      ------------------------------------------------------------
      COUNT
      ------------------------------------------------------------
      */
  
      count() {
        return this.getAll().length;
      },
  
      /*
      ------------------------------------------------------------
      SEARCH
      ------------------------------------------------------------
      */
  
      search(query) {
  
        if (!query || typeof query !== "string") {
          return this.getAll();
        }
  
        const normalizedQuery = query
          .trim()
          .toLowerCase();
  
        if (!normalizedQuery) {
          return this.getAll();
        }
  
        return this.getAll().filter(member => {
  
          const searchable = [
            member.name,
            member.role,
            member.discipline,
            member.statement,
            member.askMeAbout,
            member.location,
            ...(member.categories || [])
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();
  
          return searchable.includes(normalizedQuery);
        });
      }
  
    };
  
    /*
    ============================================================
    🟢 UPGRADE — PUBLIC GLOBAL
    ============================================================
    */
  
    window.RIVER_TEAM = registry;
  
    /*
    ============================================================
    🟢 UPGRADE — REGISTRY READY EVENT
    ============================================================
    */
  
    document.dispatchEvent(
      new CustomEvent("river:team-ready", {
        detail: {
          registry,
          count: registry.count()
        }
      })
    );
  
  })();