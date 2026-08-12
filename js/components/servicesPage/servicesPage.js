/* ============================================================
   RIVER SERVICES PAGE ENGINE
   ============================================================

   🟢 UPGRADE

   RESPONSIBILITIES:

   - Render service families
   - Render problem selector
   - Render service catalogue
   - Search services
   - Filter services
   - Animate UI
   - Handle service navigation
   - Connect Products
   - Connect Projects
   - Handle URL service selection

   ============================================================ */

   (() => {

    "use strict";


    /* ========================================================
       STATE
       ======================================================== */

    const state = {

        family:
            "ALL",

        search:
            "",

        selectedProblem:
            null

    };


    /* ========================================================
       DOM
       ======================================================== */

    const dom = {};


    /* ========================================================
       INIT
       ======================================================== */

    function init() {

        if (
            !window.RIVER_SERVICES
        ) {

            console.error(
                "River Services: RIVER_SERVICES registry not found."
            );

            return;

        }


        cacheDOM();

        bindEvents();

        renderProblemSelector();

        renderServiceFamilies();

        renderServices();

        initializeURLState();

        initializeAnimations();

    }


    /* ========================================================
       🟢 UPGRADE 01: CACHE DOM
       ======================================================== */

    function cacheDOM() {

        dom.problemGrid =
            document.getElementById(
                "problemSelectorGrid"
            );

        dom.problemResult =
            document.getElementById(
                "problemResult"
            );

        dom.familyGrid =
            document.getElementById(
                "serviceFamilyGrid"
            );

        dom.search =
            document.getElementById(
                "serviceSearch"
            );

        dom.filterButtons =
            document.querySelectorAll(
                "[data-family-filter]"
            );

        dom.catalogue =
            document.getElementById(
                "servicesCatalogueGrid"
            );

        dom.resultsMeta =
            document.getElementById(
                "servicesResultsMeta"
            );

        dom.empty =
            document.getElementById(
                "servicesEmptyState"
            );

        dom.clearFilters =
            document.getElementById(
                "clearServiceFilters"
            );

    }


    /* ========================================================
       🟢 UPGRADE 02: EVENTS
       ======================================================== */

    function bindEvents() {


        /* ====================================================
           Search
           ==================================================== */

        if (dom.search) {

            dom.search.addEventListener(
                "input",
                event => {

                    state.search =
                        event.target.value
                            .trim()
                            .toLowerCase();

                    renderServices();

                }
            );

        }


        /* ====================================================
           Family filters
           ==================================================== */

        dom.filterButtons.forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const family =
                            button.dataset.familyFilter ||
                            "ALL";

                        setFamilyFilter(
                            family
                        );

                    }
                );

            }
        );


        /* ====================================================
           Clear filters
           ==================================================== */

        if (dom.clearFilters) {

            dom.clearFilters.addEventListener(
                "click",
                clearFilters
            );

        }


        /* ====================================================
           Scroll buttons
           ==================================================== */

        document.addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest(
                        "[data-scroll-target]"
                    );

                if (!button) {
                    return;
                }

                const targetSelector =
                    button.dataset.scrollTarget;

                const target =
                    document.querySelector(
                        targetSelector
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                smoothScrollTo(
                    target
                );

            }
        );


        /* ====================================================
           Service cards
           ==================================================== */

        document.addEventListener(
            "click",
            event => {

                const serviceCard =
                    event.target.closest(
                        "[data-service-slug]"
                    );

                if (!serviceCard) {
                    return;
                }

                if (
                    event.target.closest(
                        "a"
                    )
                ) {
                    return;
                }

                const slug =
                    serviceCard.dataset.serviceSlug;

                openService(
                    slug
                );

            }
        );

    }


    /* ========================================================
       🟢 UPGRADE 03: PROBLEM SELECTOR
       ======================================================== */

    function renderProblemSelector() {

        if (!dom.problemGrid) {
            return;
        }

        const problems =
            window.RIVER_SERVICE_PROBLEMS ||
            [];

        dom.problemGrid.innerHTML =
            problems
                .map(
                    problem => {

                        const service =
                            window.getRiverService(
                                problem.service
                            );

                        if (!service) {
                            return "";
                        }

                        return `

                            <button
                                type="button"
                                class="problem-selector-card"
                                data-problem-id="${escapeHTML(problem.id)}"
                                data-problem-service="${escapeHTML(problem.service)}"
                            >

                                <span class="problem-selector-arrow">
                                    ↗
                                </span>

                                <span class="problem-selector-statement">
                                    ${escapeHTML(problem.statement)}
                                </span>

                                <span class="problem-selector-service">
                                    ${escapeHTML(service.title)}
                                </span>

                            </button>

                        `;

                    }
                )
                .join("");


        dom.problemGrid
            .querySelectorAll(
                "[data-problem-id]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const serviceSlug =
                                button.dataset.problemService;

                            selectProblem(
                                button,
                                serviceSlug
                            );

                        }
                    );

                }
            );

    }


    /* ========================================================
       🟢 UPGRADE 04: SELECT PROBLEM
       ======================================================== */

    function selectProblem(
        button,
        serviceSlug
    ) {

        const service =
            window.getRiverService(
                serviceSlug
            );

        if (!service) {
            return;
        }

        state.selectedProblem =
            serviceSlug;


        dom.problemGrid
            .querySelectorAll(
                ".problem-selector-card"
            )
            .forEach(
                item => {

                    item.classList.toggle(
                        "active",
                        item === button
                    );

                }
            );


        renderProblemResult(
            service
        );


        const catalogue =
            document.getElementById(
                "servicesCatalogue"
            );

        if (catalogue) {

            setTimeout(
                () => {

                    smoothScrollTo(
                        catalogue,
                        700
                    );

                },
                100
            );

        }

    }


    /* ========================================================
       🟢 UPGRADE 05: PROBLEM RESULT
       ======================================================== */

    function renderProblemResult(
        service
    ) {

        if (!dom.problemResult) {
            return;
        }

        dom.problemResult.innerHTML = `

            <div class="problem-result-content">

                <div class="problem-result-copy">

                    <p class="services-eyebrow">
                        RIVER RECOMMENDS
                    </p>

                    <h3>
                        ${escapeHTML(service.title)}
                    </h3>

                    <p>
                        ${escapeHTML(service.description)}
                    </p>

                </div>

                <div class="problem-result-actions">

                    <button
                        type="button"
                        class="services-button services-button-primary"
                        data-result-service="${escapeHTML(service.slug)}"
                    >
                        Explore Service
                        <span aria-hidden="true">↗</span>
                    </button>

                    <button
                        type="button"
                        class="services-button services-button-secondary"
                        data-result-family="${escapeHTML(service.family)}"
                    >
                        View ${escapeHTML(service.family)} Services
                    </button>

                </div>

            </div>

        `;


        const explore =
            dom.problemResult.querySelector(
                "[data-result-service]"
            );

        if (explore) {

            explore.addEventListener(
                "click",
                () => {

                    openService(
                        explore.dataset.resultService
                    );

                }
            );

        }


        const family =
            dom.problemResult.querySelector(
                "[data-result-family]"
            );

        if (family) {

            family.addEventListener(
                "click",
                () => {

                    setFamilyFilter(
                        family.dataset.resultFamily
                    );

                    smoothScrollTo(
                        document.getElementById(
                            "servicesCatalogue"
                        )
                    );

                }
            );

        }


        requestAnimationFrame(
            () => {

                dom.problemResult.classList.add(
                    "is-visible"
                );

            }
        );

    }


    /* ========================================================
       🟢 UPGRADE 06: FAMILY CARDS
       ======================================================== */

    function renderServiceFamilies() {

        if (!dom.familyGrid) {
            return;
        }

        const families =
            Object.values(
                window.RIVER_SERVICE_FAMILIES
            );

        dom.familyGrid.innerHTML =
            families
                .map(
                    family => {

                        const services =
                            window.getRiverServicesByFamily(
                                family.id
                            );

                        return `

                            <article
                                class="service-family-card"
                                data-family="${escapeHTML(family.id)}"
                            >

                                <div class="service-family-card-top">

                                    <span class="service-family-number">
                                        ${escapeHTML(family.number)}
                                    </span>

                                    <span class="service-family-arrow">
                                        ↗
                                    </span>

                                </div>

                                <div class="service-family-card-content">

                                    <p class="service-family-label">
                                        ${escapeHTML(family.id)}
                                    </p>

                                    <h3>
                                        ${escapeHTML(family.title)}
                                    </h3>

                                    <p>
                                        ${escapeHTML(family.description)}
                                    </p>

                                </div>

                                <div class="service-family-card-bottom">

                                    <span>
                                        ${services.length} services
                                    </span>

                                    <button
                                        type="button"
                                        data-family-select="${escapeHTML(family.id)}"
                                    >
                                        Explore
                                    </button>

                                </div>

                            </article>

                        `;

                    }
                )
                .join("");


        dom.familyGrid
            .querySelectorAll(
                "[data-family-select]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();

                            const family =
                                button.dataset.familySelect;

                            setFamilyFilter(
                                family
                            );

                            const catalogue =
                                document.getElementById(
                                    "servicesCatalogue"
                                );

                            if (catalogue) {

                                smoothScrollTo(
                                    catalogue
                                );

                            }

                        }
                    );

                }
            );


        dom.familyGrid
            .querySelectorAll(
                ".service-family-card"
            )
            .forEach(
                card => {

                    card.addEventListener(
                        "click",
                        event => {

                            if (
                                event.target.closest(
                                    "button"
                                )
                            ) {
                                return;
                            }

                            const family =
                                card.dataset.family;

                            setFamilyFilter(
                                family
                            );

                            const catalogue =
                                document.getElementById(
                                    "servicesCatalogue"
                                );

                            if (catalogue) {

                                smoothScrollTo(
                                    catalogue
                                );

                            }

                        }
                    );

                }
            );

    }


    /* ========================================================
       🟢 UPGRADE 07: FILTER
       ======================================================== */

    function setFamilyFilter(
        family
    ) {

        state.family =
            String(family || "ALL")
                .toUpperCase();


        dom.filterButtons
            .forEach(
                button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.familyFilter ===
                            state.family
                    );

                }
            );


        renderServices();

    }


    /* ========================================================
       🟢 UPGRADE 08: SERVICE FILTERING
       ======================================================== */

    function getFilteredServices() {

        let services =
            window.getAllRiverServices();


        if (
            state.family !==
            "ALL"
        ) {

            services =
                services.filter(
                    service =>
                        service.family ===
                        state.family
                );

        }


        if (
            state.search
        ) {

            const query =
                state.search;

            services =
                services.filter(
                    service => {

                        const searchable = [

                            service.title,

                            service.shortTitle,

                            service.category,

                            service.tagline,

                            service.description,

                            ...(service.problems || []),

                            ...(service.capabilities || []),

                            ...(service.technologies || []),

                            ...(service.industries || [])

                        ]
                            .join(" ")
                            .toLowerCase();

                        return searchable.includes(
                            query
                        );

                    }
                );

        }


        return services;

    }


    /* ========================================================
       🟢 UPGRADE 09: RENDER SERVICE CARDS
       ======================================================== */

    function renderServices() {

        if (!dom.catalogue) {
            return;
        }

        const services =
            getFilteredServices();


        dom.catalogue.innerHTML =
            services
                .map(
                    renderServiceCard
                )
                .join("");


        updateResultsMeta(
            services.length
        );


        updateEmptyState(
            services.length
        );


        animateServiceCards();

    }


    /* ========================================================
       🟢 UPGRADE 10: SERVICE CARD
       ======================================================== */

    function renderServiceCard(
        service
    ) {

        const family =
            window.getRiverServiceFamily(
                service.family
            );


        return `

            <article
                class="service-catalogue-card"
                data-service-slug="${escapeHTML(service.slug)}"
                data-family="${escapeHTML(service.family)}"
            >

                <div class="service-card-top">

                    <span class="service-card-number">
                        ${escapeHTML(family?.number || "00")}
                    </span>

                    <span class="service-card-family">
                        ${escapeHTML(service.family)}
                    </span>

                </div>


                <div class="service-card-body">

                    <h3>
                        ${escapeHTML(service.title)}
                    </h3>

                    <p class="service-card-tagline">
                        ${escapeHTML(service.tagline)}
                    </p>

                    <p class="service-card-description">
                        ${escapeHTML(service.description)}
                    </p>

                </div>


                <div class="service-card-tags">

                    ${(service.capabilities || [])
                        .slice(0, 3)
                        .map(
                            item => `
                                <span>
                                    ${escapeHTML(item)}
                                </span>
                            `
                        )
                        .join("")
                    }

                </div>


                <div class="service-card-footer">

                    <span>
                        Explore service
                    </span>

                    <span
                        class="service-card-arrow"
                        aria-hidden="true"
                    >
                        ↗
                    </span>

                </div>

            </article>

        `;

    }


    /* ========================================================
       🟢 UPGRADE 11: RESULTS META
       ======================================================== */

    function updateResultsMeta(
        count
    ) {

        if (!dom.resultsMeta) {
            return;
        }

        const familyText =
            state.family === "ALL"
                ? "All services"
                : `${state.family} services`;


        const searchText =
            state.search
                ? ` matching "${state.search}"`
                : "";


        dom.resultsMeta.textContent =
            `${count} ${count === 1 ? "service" : "services"} · ${familyText}${searchText}`;

    }


    /* ========================================================
       🟢 UPGRADE 12: EMPTY STATE
       ======================================================== */

    function updateEmptyState(
        count
    ) {

        if (!dom.empty) {
            return;
        }

        dom.empty.hidden =
            count !== 0;

        if (
            dom.catalogue
        ) {

            dom.catalogue.hidden =
                count === 0;

        }

    }


    /* ========================================================
       🟢 UPGRADE 13: CLEAR FILTERS
       ======================================================== */

    function clearFilters() {

        state.family =
            "ALL";

        state.search =
            "";

        state.selectedProblem =
            null;


        if (dom.search) {
            dom.search.value =
                "";
        }


        dom.filterButtons
            .forEach(
                button => {

                    button.classList.toggle(
                        "active",
                        button.dataset.familyFilter ===
                            "ALL"
                    );

                }
            );


        renderServices();

    }


    /* ========================================================
       🟢 UPGRADE 14: SERVICE NAVIGATION
       ======================================================== */

    function openService(
        slug
    ) {

        const service =
            window.getRiverService(
                slug
            );

        if (!service) {

            console.warn(
                `River Services: Service "${slug}" not found.`
            );

            return;

        }


        /*
         * The service detail architecture is designed to use
         * the same slug system as Products.
         *
         * If service.html exists, use:
         *
         * service.html?service=slug
         *
         * Otherwise we currently expose the service in the URL
         * without breaking the Services catalogue.
         */

        const target =
            `service.html?service=${encodeURIComponent(service.slug)}`;


        window.location.href =
            target;

    }


    /* ========================================================
       🟢 UPGRADE 15: URL STATE
       ======================================================== */

    function initializeURLState() {

        const params =
            new URLSearchParams(
                window.location.search
            );


        const family =
            params.get(
                "family"
            );


        const service =
            params.get(
                "service"
            );


        if (
            family &&
            window.RIVER_SERVICE_FAMILIES[
                family.toUpperCase()
            ]
        ) {

            setFamilyFilter(
                family.toUpperCase()
            );

        }


        if (
            service
        ) {

            const found =
                window.getRiverService(
                    service
                );

            if (found) {

                state.family =
                    found.family;

                setFamilyFilter(
                    found.family
                );

            }

        }

    }


    /* ========================================================
       🟢 UPGRADE 16: GSAP ANIMATIONS
       ======================================================== */

    function initializeAnimations() {

        if (
            typeof gsap ===
            "undefined"
        ) {
            return;
        }


        if (
            typeof ScrollTrigger !==
            "undefined"
        ) {
            return;
        }


        const hero =
            document.querySelector(
                ".services-hero-copy"
            );


        if (hero) {

            gsap.fromTo(
                hero.children,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power3.out",
                    delay: 0.1
                }
            );

        }


        const system =
            document.querySelector(
                ".services-hero-system"
            );


        if (system) {

            gsap.fromTo(
                system,
                {
                    opacity: 0,
                    scale: 0.94
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    delay: 0.25
                }
            );

        }

    }


    /* ========================================================
       🟢 UPGRADE 17: CARD ANIMATIONS
       ======================================================== */

    function animateServiceCards() {

        const cards =
            document.querySelectorAll(
                ".service-catalogue-card"
            );


        if (
            typeof gsap ===
            "undefined"
        ) {

            cards.forEach(
                card => {

                    card.classList.add(
                        "is-visible"
                    );

                }
            );

            return;

        }


        gsap.fromTo(
            cards,
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.45,
                stagger: 0.035,
                ease: "power2.out",
                clearProps:
                    "transform"
            }
        );

    }


    /* ========================================================
       🟢 UPGRADE 18: SMOOTH SCROLL
       ======================================================== */

    function smoothScrollTo(
        target,
        duration = 800
    ) {

        if (!target) {
            return;
        }


        if (
            typeof gsap !==
            "undefined" &&
            gsap.plugins &&
            gsap.plugins.ScrollToPlugin
        ) {

            gsap.to(
                window,
                {
                    duration:
                        duration / 1000,
                    scrollTo: {
                        y: target,
                        offsetY: 30
                    },
                    ease:
                        "power3.out"
                }
            );

            return;

        }


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }


    /* ========================================================
       🟢 UPGRADE 19: ESCAPE HTML
       ======================================================== */

    function escapeHTML(
        value
    ) {

        return String(
            value ?? ""
        )
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* ========================================================
       DOM READY
       ======================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            init
        );

    } else {

        init();

    }


})();