/**
 * ============================================================
 * productDetail.js
 * ============================================================
 *
 * 🟢 UPGRADE:
 *
 * Dynamic product detail page.
 *
 * URL:
 *
 * product.html?product=inventory-os
 *
 * The page consumes RIVER_PRODUCTS from mediaData.js.
 *
 * ============================================================
 */


document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeProductDetail();

    }
);


/* ============================================================
   🟢 UPGRADE: INITIALIZE
   ============================================================ */

function initializeProductDetail() {

    if (
        typeof window.getRiverProduct !==
        "function"
    ) {

        console.error(
            "River Product Detail: mediaData.js was not loaded."
        );

        return;

    }


    const params =
        new URLSearchParams(
            window.location.search
        );


    const slug =
        params.get(
            "product"
        );


    const product =
        window.getRiverProduct(
            slug
        );


    if (!product) {

        renderProductNotFound();

        return;

    }


    renderProductMeta(
        product
    );

    renderProductHero(
        product
    );

    renderProductFeatures(
        product
    );

    renderProductHowItWorks(
        product
    );

    renderProductArchitecture(
        product
    );

    renderProductTechnologies(
        product
    );

    renderProductIndustries(
        product
    );

    renderProductDeployment(
        product
    );

    renderProductCaseStudies(
        product
    );

    renderRelatedProducts(
        product
    );

    initializeDetailAnimations();

}


/* ============================================================
   🟢 UPGRADE: META
   ============================================================ */

function renderProductMeta(
    product
) {

    document.title =
        `${product.title} | River IT Solutions`;


    const description =
        document.querySelector(
            'meta[name="description"]'
        );


    if (description) {

        description.setAttribute(
            "content",
            product.desc || ""
        );

    }

}


/* ============================================================
   🟢 UPGRADE: HERO
   ============================================================ */

function renderProductHero(
    product
) {

    setText(
        "productCategory",
        product.category
    );


    setText(
        "productStatus",
        formatStatus(
            product.status
        )
    );


    setText(
        "productTitle",
        product.title
    );


    setText(
        "productTagline",
        product.tagline
    );


    setText(
        "productDescription",
        product.desc
    );


    const actions =
        document.getElementById(
            "productHeroActions"
        );


    if (!actions) {
        return;
    }


    actions.innerHTML = `

        <a
            href="mediaPlayer.html?product=${encodeURIComponent(product.slug)}"
            class="product-btn product-btn-primary"
        >
            View Product Demo
        </a>


        <a
            href="contact.html"
            class="product-btn product-btn-secondary"
        >
            Request a Demo
        </a>

    `;

}


/* ============================================================
   🟢 UPGRADE: FEATURES
   ============================================================ */

function renderProductFeatures(
    product
) {

    const container =
        document.getElementById(
            "productFeatures"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        (product.features || [])
            .map(
                (feature, index) => `

                    <article
                        class="product-detail-feature"
                    >

                        <span>
                            ${String(
                                index + 1
                            ).padStart(
                                2,
                                "0"
                            )}
                        </span>

                        <h3>
                            ${escapeHTML(feature)}
                        </h3>

                    </article>

                `
            )
            .join("");

}


/* ============================================================
   🟢 UPGRADE: HOW IT WORKS
   ============================================================ */

function renderProductHowItWorks(
    product
) {

    const container =
        document.getElementById(
            "productHowItWorks"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        (product.howItWorks || [])
            .map(
                (item, index) => `

                    <div
                        class="product-process-step"
                    >

                        <span>
                            ${String(
                                index + 1
                            ).padStart(
                                2,
                                "0"
                            )}
                        </span>

                        <strong>
                            ${escapeHTML(item)}
                        </strong>

                    </div>

                `
            )
            .join("");

}


/* ============================================================
   🟢 UPGRADE: ARCHITECTURE
   ============================================================ */

function renderProductArchitecture(
    product
) {

    const container =
        document.getElementById(
            "productArchitecture"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        (product.architecture || [])
            .map(
                (item, index) => `

                    <div
                        class="product-architecture-step"
                    >

                        <span>
                            ${String(
                                index + 1
                            ).padStart(
                                2,
                                "0"
                            )}
                        </span>

                        <strong>
                            ${escapeHTML(item)}
                        </strong>

                    </div>

                `
            )
            .join("");

}


/* ============================================================
   🟢 UPGRADE: TECHNOLOGIES
   ============================================================ */

function renderProductTechnologies(
    product
) {

    const container =
        document.getElementById(
            "productTechnologies"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        (product.technologies || [])
            .map(
                item =>
                    `
                        <span>
                            ${escapeHTML(item)}
                        </span>
                    `
            )
            .join("");

}


/* ============================================================
   🟢 UPGRADE: INDUSTRIES
   ============================================================ */

function renderProductIndustries(
    product
) {

    const container =
        document.getElementById(
            "productIndustries"
        );


    if (!container) {
        return;
    }


    container.innerHTML =
        (product.industries || [])
            .map(
                item =>
                    `
                        <span>
                            ${escapeHTML(item)}
                        </span>
                    `
            )
            .join("");

}


/* ============================================================
   🟢 UPGRADE: DEPLOYMENT
   ============================================================ */

function renderProductDeployment(
    product
) {

    const container =
        document.getElementById(
            "productDeployment"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <article>

            <p class="products-eyebrow">
                DEPLOYMENT
            </p>

            <h2>
                Where It Can Run
            </h2>

            <div class="product-tag-list">

                ${
                    (product.deployment || [])
                        .map(
                            item =>
                                `
                                    <span>
                                        ${escapeHTML(item)}
                                    </span>
                                `
                        )
                        .join("")
                }

            </div>

        </article>


        <article>

            <p class="products-eyebrow">
                BUSINESS MODEL
            </p>

            <h2>
                How It Can Be Offered
            </h2>

            <div class="product-tag-list">

                ${
                    (product.businessModel || [])
                        .map(
                            item =>
                                `
                                    <span>
                                        ${escapeHTML(item)}
                                    </span>
                                `
                        )
                        .join("")
                }

            </div>

        </article>

    `;

}


/* ============================================================
   🟢 UPGRADE: CASE STUDIES
   ============================================================ */

function renderProductCaseStudies(
    product
) {

    const container =
        document.getElementById(
            "productCaseStudies"
        );


    if (!container) {
        return;
    }


    const projects =
        window.getRiverProductProjects(
            product.slug
        );


    if (!projects.length) {

        container.innerHTML = `

            <article
                class="product-case-study-empty"
            >

                <h3>
                    Product evidence is being expanded.
                </h3>

                <p>
                    River can demonstrate this product through
                    a custom product walkthrough or discovery session.
                </p>

                <a
                    href="contact.html"
                    class="product-btn product-btn-secondary"
                >
                    Request a Demonstration
                </a>

            </article>

        `;

        return;

    }


    container.innerHTML =
        projects
            .map(
                project => `

                    <article
                        class="product-case-study-card"
                    >

                        <p class="products-eyebrow">
                            CASE STUDY
                        </p>

                        <h3>
                            ${escapeHTML(
                                project.title
                            )}
                        </h3>

                        <p>
                            ${escapeHTML(
                                project.desc ||
                                ""
                            )}
                        </p>

                        <a
                            href="mediaPlayer.html?project=${encodeURIComponent(project.slug)}"
                            class="product-btn product-btn-secondary"
                        >
                            View Case Study
                        </a>

                    </article>

                `
            )
            .join("");

}


/* ============================================================
   🟢 UPGRADE: RELATED PRODUCTS
   ============================================================ */

function renderRelatedProducts(
    product
) {

    const container =
        document.getElementById(
            "relatedProducts"
        );


    if (!container) {
        return;
    }


    const products =
        window.getRelatedRiverProducts(
            product.slug,
            3
        );


    if (!products.length) {

        container.innerHTML = "";

        return;

    }


    container.innerHTML =
        products
            .map(
                item => `

                    <article
                        class="related-product-card"
                    >

                        <p>
                            ${escapeHTML(
                                item.category
                            )}
                        </p>

                        <h3>
                            ${escapeHTML(
                                item.title
                            )}
                        </h3>

                        <span>
                            ${escapeHTML(
                                item.tagline ||
                                item.desc ||
                                ""
                            )}
                        </span>

                        <a
                            href="product.html?product=${encodeURIComponent(item.slug)}"
                        >
                            Explore →
                        </a>

                    </article>

                `
            )
            .join("");

}


/* ============================================================
   🟢 UPGRADE: NOT FOUND
   ============================================================ */

function renderProductNotFound() {

    const container =
        document.getElementById(
            "productDetail"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `

        <section
            class="product-not-found"
        >

            <p class="products-eyebrow">
                RIVER PRODUCTS
            </p>

            <h1>
                Product Not Found.
            </h1>

            <p>
                The requested product could not be found in
                the River Product Registry.
            </p>

            <a
                href="products.html"
                class="product-btn product-btn-primary"
            >
                Back to Products
            </a>

        </section>

    `;

}


/* ============================================================
   🟢 UPGRADE: ANIMATION
   ============================================================ */

function initializeDetailAnimations() {

    if (
        typeof window.gsap ===
        "undefined"
    ) {
        return;
    }


    const elements =
        document.querySelectorAll(
            ".product-detail-feature, .product-process-step, .product-architecture-step, .product-case-study-card, .related-product-card"
        );


    elements.forEach(
        element => {

            window.gsap.from(
                element,
                {

                    opacity: 0,

                    y: 25,

                    duration: 0.65,

                    ease:
                        "power2.out"

                }
            );

        }
    );

}


/* ============================================================
   🟢 UPGRADE: SET TEXT
   ============================================================ */

function setText(
    id,
    value
) {

    const element =
        document.getElementById(
            id
        );


    if (!element) {
        return;
    }


    element.textContent =
        value || "";

}


/* ============================================================
   🟢 UPGRADE: STATUS
   ============================================================ */

function formatStatus(
    status
) {

    const labels = {

        AVAILABLE:
            "AVAILABLE",

        CUSTOMIZABLE:
            "CUSTOMIZABLE",

        IN_DEVELOPMENT:
            "IN DEVELOPMENT"

    };


    return (
        labels[status] ||
        status ||
        "AVAILABLE"
    );

}


/* ============================================================
   🟢 UPGRADE: ESCAPE HTML
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