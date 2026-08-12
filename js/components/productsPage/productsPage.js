/**
 * ============================================================
 * productsPage.js
 * ============================================================
 *
 * RIVER PRODUCTS PAGE ENGINE
 *
 * 🟢 UPGRADE:
 *
 * The Products page is completely data-driven.
 *
 * It consumes:
 *
 * window.RIVER_PRODUCTS
 *
 * and therefore does NOT require manually duplicated
 * product cards in HTML.
 *
 * ============================================================
 */


/* ============================================================
   INITIALIZE
   ============================================================ */

   document.addEventListener(
    "DOMContentLoaded",
    () => {

        if (
            typeof window.getRiverProducts !==
            "function"
        ) {

            console.error(
                "River Products: mediaData.js was not loaded before productsPage.js."
            );

            return;

        }


        initializeProductsPage();

    }
);


/* ============================================================
   🟢 UPGRADE: MAIN INITIALIZER
   ============================================================ */

function initializeProductsPage() {

    renderProductCount();

    renderProductCategories();

    renderProductFilters();

    renderProducts(
        window.getRiverProducts()
    );

    renderCapabilityExplorer();

    renderLifecycle();

    initializeProductSearch();

    initializeProductSelector();

    initializeCategoryFiltering();

    initializeProductAnimations();

}


/* ============================================================
   🟢 UPGRADE: PRODUCT COUNT
   ============================================================ */

function renderProductCount() {

    const element =
        document.getElementById(
            "productCount"
        );

    if (!element) {
        return;
    }

    element.textContent =
        window.getRiverProducts().length;

}


/* ============================================================
   🟢 UPGRADE: CATEGORY GRID
   ============================================================ */

function renderProductCategories() {

    const container =
        document.getElementById(
            "productCategoryGrid"
        );

    if (!container) {
        return;
    }


    const categories =
        window.getRiverProductCategories();


    const categoryDescriptions = {

        "Business & Enterprise":
            "Business management, enterprise platforms, ERP-style systems and operational software.",

        "Customer & Commerce":
            "Customer portals, CRM platforms, commerce and digital customer experiences.",

        "Operations & Productivity":
            "Workflow automation, internal tools, approvals, reporting and operational systems.",

        "Industry Solutions":
            "Purpose-built platforms designed around specialized industry workflows."

    };


    container.innerHTML =
        categories
            .map(
                (category, index) => {

                    const products =
                        window.getRiverProductsByCategory(
                            category
                        );


                    return `

                        <button
                            type="button"
                            class="product-category-card"
                            data-category="${escapeAttribute(category)}"
                        >

                            <span class="product-category-number">
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <span class="product-category-count">
                                ${products.length}
                                ${
                                    products.length === 1
                                        ? "PRODUCT"
                                        : "PRODUCTS"
                                }
                            </span>

                            <h3>
                                ${escapeHTML(category)}
                            </h3>

                            <p>
                                ${
                                    escapeHTML(
                                        categoryDescriptions[category] ||
                                        "Software solutions designed around real operational requirements."
                                    )
                                }
                            </p>

                            <span class="product-category-action">
                                Explore →
                            </span>

                        </button>

                    `;

                }
            )
            .join("");


    container
        .querySelectorAll(
            ".product-category-card"
        )
        .forEach(
            card => {

                card.addEventListener(
                    "click",
                    () => {

                        const category =
                            card.dataset.category;


                        filterProductsByCategory(
                            category
                        );


                        document
                            .getElementById(
                                "productCatalogue"
                            )
                            ?.scrollIntoView({
                                behavior: "smooth"
                            });

                    }
                );

            }
        );

}


/* ============================================================
   🟢 UPGRADE: FILTER BUTTONS
   ============================================================ */

function renderProductFilters() {

    const container =
        document.getElementById(
            "productFilters"
        );

    if (!container) {
        return;
    }


    const categories =
        window.getRiverProductCategories();


    container.innerHTML = `

        <button
            type="button"
            class="product-filter active"
            data-filter="ALL"
        >
            All Products
        </button>

        ${
            categories
                .map(
                    category => `

                        <button
                            type="button"
                            class="product-filter"
                            data-filter="${escapeAttribute(category)}"
                        >
                            ${escapeHTML(category)}
                        </button>

                    `
                )
                .join("")
        }

    `;

}


/* ============================================================
   🟢 UPGRADE: CATEGORY FILTERING
   ============================================================ */

function initializeCategoryFiltering() {

    document
        .getElementById(
            "productFilters"
        )
        ?.addEventListener(
            "click",
            event => {

                const button =
                    event.target.closest(
                        ".product-filter"
                    );

                if (!button) {
                    return;
                }


                const filter =
                    button.dataset.filter;


                document
                    .querySelectorAll(
                        ".product-filter"
                    )
                    .forEach(
                        item =>
                            item.classList.remove(
                                "active"
                            )
                    );


                button.classList.add(
                    "active"
                );


                if (
                    filter === "ALL"
                ) {

                    renderProducts(
                        window.getRiverProducts()
                    );

                    return;

                }


                filterProductsByCategory(
                    filter
                );

            }
        );

}


/* ============================================================
   🟢 UPGRADE: FILTER PRODUCTS BY CATEGORY
   ============================================================ */

function filterProductsByCategory(
    category
) {

    document
        .querySelectorAll(
            ".product-filter"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.filter ===
                        category
                );

            }
        );


    const searchInput =
        document.getElementById(
            "productSearch"
        );


    if (searchInput) {
        searchInput.value = "";
    }


    renderProducts(
        window.getRiverProductsByCategory(
            category
        )
    );

}


/* ============================================================
   🟢 UPGRADE: SEARCH
   ============================================================ */

function initializeProductSearch() {

    const input =
        document.getElementById(
            "productSearch"
        );

    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        () => {

            const query =
                input.value;


            document
                .querySelectorAll(
                    ".product-filter"
                )
                .forEach(
                    button =>
                        button.classList.remove(
                            "active"
                        )
                );


            const allButton =
                document.querySelector(
                    '.product-filter[data-filter="ALL"]'
                );


            if (allButton) {

                allButton.classList.add(
                    "active"
                );

            }


            renderProducts(
                window.searchRiverProducts(
                    query
                )
            );

        }
    );

}


/* ============================================================
   🟢 UPGRADE: PRODUCT CARDS
   ============================================================ */

function renderProducts(
    products
) {

    const container =
        document.getElementById(
            "productGrid"
        );

    const emptyState =
        document.getElementById(
            "productEmptyState"
        );


    if (!container) {
        return;
    }


    if (!products.length) {

        container.innerHTML = "";

        if (emptyState) {
            emptyState.hidden = false;
        }

        return;

    }


    if (emptyState) {
        emptyState.hidden = true;
    }


    container.innerHTML =
        products
            .map(
                product =>
                    createProductCard(
                        product
                    )
            )
            .join("");


    attachProductCardInteractions(
        container
    );

}


/* ============================================================
   🟢 UPGRADE: PRODUCT CARD
   ============================================================ */

function createProductCard(
    product
) {

    const media =
        Array.isArray(product.media) &&
        product.media.length
            ? product.media[0]
            : null;


    const relatedProjects =
        Array.isArray(
            product.relatedProjects
        )
            ? product.relatedProjects
            : [];


    const project =
        relatedProjects.length &&
        typeof window.getRiverProject ===
            "function"
            ? window.getRiverProject(
                relatedProjects[0]
            )
            : null;


    return `

        <article
            class="product-card"
            data-product-slug="${escapeAttribute(product.slug)}"
        >

            <div class="product-card-media">

                ${
                    media
                        ? media.type === "image"
                            ? `
                                <img
                                    src="${escapeAttribute(media.src)}"
                                    alt="${escapeAttribute(product.title)}"
                                    loading="lazy"
                                />
                            `
                            : `
                                <video
                                    muted
                                    playsinline
                                    preload="metadata"
                                >
                                    <source
                                        src="${escapeAttribute(media.src)}"
                                        type="video/mp4"
                                    />
                                </video>
                            `
                        : `
                            <div class="product-card-placeholder">
                                RIVER PRODUCT
                            </div>
                        `
                }


                <div class="product-card-status">

                    <span class="product-status-dot"></span>

                    ${escapeHTML(
                        formatStatus(
                            product.status
                        )
                    )}

                </div>

            </div>


            <div class="product-card-body">

                <div class="product-card-topline">

                    <span>
                        ${escapeHTML(
                            product.category ||
                            "Software"
                        )}
                    </span>

                    <span>
                        ${escapeHTML(
                            product.type ||
                            "PRODUCT"
                        )}
                    </span>

                </div>


                <h3>
                    ${escapeHTML(
                        product.title
                    )}
                </h3>


                <p class="product-card-subtitle">
                    ${escapeHTML(
                        product.shortTitle ||
                        ""
                    )}
                </p>


                <p class="product-card-description">
                    ${escapeHTML(
                        product.desc ||
                        ""
                    )}
                </p>


                <div class="product-feature-list">

                    ${
                        (product.capabilities || [])
                            .slice(0, 5)
                            .map(
                                capability => `
                                    <span>
                                        ${escapeHTML(
                                            capability
                                        )}
                                    </span>
                                `
                            )
                            .join("")
                    }

                </div>


                <div class="product-card-meta">

                    <div>

                        <small>
                            DEPLOYMENT
                        </small>

                        <strong>
                            ${
                                escapeHTML(
                                    (
                                        product.deployment ||
                                        []
                                    )
                                        .join(" / ")
                                )
                            }
                        </strong>

                    </div>


                    <div>

                        <small>
                            MODEL
                        </small>

                        <strong>
                            ${
                                escapeHTML(
                                    (
                                        product.businessModel ||
                                        []
                                    )[0] ||
                                    "Custom"
                                )
                            }
                        </strong>

                    </div>

                </div>


                <div class="product-card-actions">

                    <a
                        href="product.html?product=${encodeURIComponent(product.slug)}"
                        class="product-card-button primary"
                    >
                        View Product
                    </a>


                    <a
                        href="mediaPlayer.html?product=${encodeURIComponent(product.slug)}"
                        class="product-card-button secondary"
                    >
                        View Demo
                    </a>

                </div>


                ${
                    project
                        ? `
                            <a
                                href="mediaPlayer.html?project=${encodeURIComponent(project.slug)}"
                                class="product-case-study-link"
                            >
                                Connected Case Study →
                            </a>
                        `
                        : ""
                }

            </div>

        </article>

    `;

}


/* ============================================================
   🟢 UPGRADE: PRODUCT CARD INTERACTIONS
   ============================================================ */

function attachProductCardInteractions(
    container
) {

    container
        .querySelectorAll(
            ".product-card-media video"
        )
        .forEach(
            video => {

                const card =
                    video.closest(
                        ".product-card"
                    );


                if (!card) {
                    return;
                }


                card.addEventListener(
                    "mouseenter",
                    () => {

                        video
                            .play()
                            .catch(
                                () => {}
                            );

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        video.pause();

                        video.currentTime =
                            0;

                    }
                );

            }
        );

}


/* ============================================================
   🟢 UPGRADE: CAPABILITY EXPLORER
   ============================================================ */

function renderCapabilityExplorer() {

    const container =
        document.getElementById(
            "capabilityExplorer"
        );

    if (!container) {
        return;
    }


    const capabilityMap = {

        "Authentication":
            "Secure user identity and account access.",

        "Authorization":
            "Define what different users can see, create, modify, approve and manage.",

        "Workflow Automation":
            "Turn repetitive operational processes into structured digital workflows.",

        "Dashboards":
            "Transform operational information into useful visual views.",

        "Reporting":
            "Turn system data into structured operational and management reports.",

        "API Integration":
            "Connect products with external services and existing systems.",

        "Data Management":
            "Centralize structured operational information.",

        "Mobile":
            "Extend software experiences to mobile users and workflows."

    };


    container.innerHTML =
        Object.entries(
            capabilityMap
        )
            .map(
                ([name, description]) => `

                    <button
                        type="button"
                        class="capability-item"
                        data-capability="${escapeAttribute(name)}"
                    >

                        <span class="capability-icon">
                            +
                        </span>

                        <span>

                            <strong>
                                ${escapeHTML(name)}
                            </strong>

                            <small>
                                ${escapeHTML(description)}
                            </small>

                        </span>

                    </button>

                `
            )
            .join("");


    container
        .querySelectorAll(
            ".capability-item"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        const capability =
                            button.dataset.capability;


                        const products =
                            window
                                .getRiverProducts()
                                .filter(
                                    product =>
                                        (
                                            product.capabilities ||
                                            []
                                        ).includes(
                                            capability
                                        )
                                );


                        const resultContainer =
                            document.getElementById(
                                "productSelectorResults"
                            );


                        if (!resultContainer) {
                            return;
                        }


                        resultContainer.innerHTML = `

                            <div class="selector-result-header">

                                <p>
                                    CAPABILITY
                                </p>

                                <h3>
                                    ${escapeHTML(capability)}
                                </h3>

                                <span>
                                    ${products.length}
                                    ${
                                        products.length === 1
                                            ? "matching product"
                                            : "matching products"
                                    }
                                </span>

                            </div>


                            <div class="selector-result-grid">

                                ${
                                    products
                                        .map(
                                            product =>
                                                createMiniProductCard(
                                                    product
                                                )
                                        )
                                        .join("")
                                }

                            </div>

                        `;


                        resultContainer.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest"
                        });

                    }
                );

            }
        );

}


/* ============================================================
   🟢 UPGRADE: PRODUCT SELECTOR
   ============================================================ */

function initializeProductSelector() {

    document
        .querySelectorAll(
            ".product-selector-option"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        document
                            .querySelectorAll(
                                ".product-selector-option"
                            )
                            .forEach(
                                item =>
                                    item.classList.remove(
                                        "selected"
                                    )
                            );


                        button.classList.add(
                            "selected"
                        );


                        const problem =
                            button.dataset.problem;


                        const products =
                            getProductsForSelector(
                                problem
                            );


                        renderSelectorResults(
                            products,
                            problem
                        );

                    }
                );

            }
        );

}


/* ============================================================
   🟢 UPGRADE: SELECTOR LOGIC
   ============================================================ */

function getProductsForSelector(
    problem
) {

    const map = {

        business: [
            "business",
            "workflow"
        ],

        commerce: [
            "commerce"
        ],

        inventory: [
            "inventory"
        ],

        customers: [
            "customers"
        ],

        workflow: [
            "workflow"
        ],

        employees: [
            "employees",
            "workflow"
        ],

        portal: [
            "portal",
            "customers"
        ],

        custom: [
            "custom",
            "industry"
        ],

        spreadsheets: [
            "spreadsheets",
            "business",
            "workflow"
        ],

        integration: [
            "integration"
        ]

    };


    const searchTerms =
        map[problem] ||
        [];


    return window
        .getRiverProducts()
        .filter(
            product => {

                const tags =
                    product.problemTags ||
                    [];


                return searchTerms.some(
                    term =>
                        tags.includes(
                            term
                        )
                );

            }
        );

}


/* ============================================================
   🟢 UPGRADE: SELECTOR RESULTS
   ============================================================ */

function renderSelectorResults(
    products,
    problem
) {

    const container =
        document.getElementById(
            "productSelectorResults"
        );

    if (!container) {
        return;
    }


    const labels = {

        business:
            "business management",

        commerce:
            "digital commerce",

        inventory:
            "inventory management",

        customers:
            "customer management",

        workflow:
            "workflow automation",

        employees:
            "employee workflows",

        portal:
            "customer portals",

        custom:
            "industry-specific software",

        spreadsheets:
            "replacing spreadsheets",

        integration:
            "system integration"

    };


    container.innerHTML = `

        <div class="selector-result-header">

            <p>
                RIVER RECOMMENDATION
            </p>

            <h3>
                Solutions for
                ${escapeHTML(
                    labels[problem] ||
                    "your requirement"
                )}
            </h3>

            <span>
                ${
                    products.length
                }
                ${
                    products.length === 1
                        ? "relevant product"
                        : "relevant products"
                }
            </span>

        </div>


        <div class="selector-result-grid">

            ${
                products.length
                    ? products
                        .map(
                            product =>
                                createMiniProductCard(
                                    product
                                )
                        )
                        .join("")
                    : `
                        <div class="selector-no-result">

                            <h4>
                                This may be a custom requirement.
                            </h4>

                            <p>
                                River can design a product or platform
                                around the exact workflow you need.
                            </p>

                            <a
                                href="contact.html"
                                class="product-btn product-btn-primary"
                            >
                                Discuss Your Requirement
                            </a>

                        </div>
                    `
            }

        </div>

    `;


    container.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/* ============================================================
   🟢 UPGRADE: MINI PRODUCT CARD
   ============================================================ */

function createMiniProductCard(
    product
) {

    return `

        <article class="mini-product-card">

            <span>
                ${escapeHTML(
                    product.category
                )}
            </span>

            <h4>
                ${escapeHTML(
                    product.title
                )}
            </h4>

            <p>
                ${escapeHTML(
                    product.tagline ||
                    product.desc ||
                    ""
                )}
            </p>

            <a
                href="product.html?product=${encodeURIComponent(product.slug)}"
            >
                Explore Product →
            </a>

        </article>

    `;

}


/* ============================================================
   🟢 UPGRADE: PRODUCT LIFECYCLE
   ============================================================ */

function renderLifecycle() {

    const container =
        document.getElementById(
            "productLifecycle"
        );

    if (!container) {
        return;
    }


    const stages = [

        "Discovery",
        "Architecture",
        "UX / UI",
        "Development",
        "Testing",
        "Deployment",
        "Monitoring",
        "Continuous Improvement"

    ];


    container.innerHTML =
        stages
            .map(
                (stage, index) => `

                    <div class="lifecycle-step">

                        <span>
                            ${String(
                                index + 1
                            ).padStart(
                                2,
                                "0"
                            )}
                        </span>

                        <strong>
                            ${escapeHTML(stage)}
                        </strong>

                    </div>

                `
            )
            .join("");

}


/* ============================================================
   🟢 UPGRADE: ANIMATIONS
   ============================================================ */

function initializeProductAnimations() {

    if (
        typeof window.gsap ===
        "undefined"
    ) {

        return;

    }


    if (
        typeof window.ScrollTrigger !==
        "undefined"
    ) {

        window.gsap.utils
            .toArray(
                ".product-card, .deployment-card, .trust-card"
            )
            .forEach(
                element => {

                    window.gsap.from(
                        element,
                        {

                            opacity: 0,

                            y: 35,

                            duration: 0.7,

                            ease: "power2.out",

                            scrollTrigger: {

                                trigger: element,

                                start:
                                    "top 88%",

                                once:
                                    true

                            }

                        }
                    );

                }
            );

    }

}


/* ============================================================
   🟢 UPGRADE: STATUS FORMATTER
   ============================================================ */

function formatStatus(
    status
) {

    const statuses = {

        AVAILABLE:
            "AVAILABLE",

        CUSTOMIZABLE:
            "CUSTOMIZABLE",

        IN_DEVELOPMENT:
            "IN DEVELOPMENT",

        COMPLETED:
            "COMPLETED"

    };


    return (
        statuses[status] ||
        status ||
        "AVAILABLE"
    );

}


/* ============================================================
   🟢 UPGRADE: HTML ESCAPING
   ============================================================ */

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


/* ============================================================
   🟢 UPGRADE: ATTRIBUTE ESCAPING
   ============================================================ */

function escapeAttribute(
    value
) {

    return escapeHTML(
        value
    );

}