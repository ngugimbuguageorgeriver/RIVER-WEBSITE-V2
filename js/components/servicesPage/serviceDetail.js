/* ============================================================
   RIVER — SINGLE SERVICE DETAIL PAGE
   serviceDetail.js

   MATCHES:
   - servicesPage.js
   - servicesData.js
   - RIVER_SERVICE_FAMILIES
   - getRiverService()
   - getAllRiverServices()

   URL:
   service.html?service=service-slug
   ============================================================ */

   class ServicePage extends HTMLElement {

    constructor() {

        super();

        this.service = null;
        this.services = [];

    }


    /* ========================================================
       CONNECTED
       ======================================================== */

    connectedCallback() {

        this.loadService();

    }


    /* ========================================================
       GET SERVICE SLUG
       ======================================================== */

    getServiceSlug() {

        const params =
            new URLSearchParams(
                window.location.search
            );

        return params.get("service");

    }


    /* ========================================================
       LOAD SERVICE
       ======================================================== */

    loadService() {

        const slug =
            this.getServiceSlug();


        if (!slug) {

            this.renderNotFound(
                "No service was selected."
            );

            return;

        }


        /*
         * Use the same service registry
         * as servicesPage.js.
         */

        if (
            typeof window.getAllRiverServices ===
            "function"
        ) {

            this.services =
                window.getAllRiverServices();

        }


        /*
         * Find service using the canonical
         * service slug.
         */

        if (
            typeof window.getRiverService ===
            "function"
        ) {

            this.service =
                window.getRiverService(
                    slug
                );

        }


        /*
         * Fallback for compatibility.
         */

        if (
            !this.service &&
            this.services.length
        ) {

            this.service =
                this.services.find(
                    service =>
                        service.slug === slug ||
                        service.id === slug
                );

        }


        if (!this.service) {

            this.renderNotFound(
                `The requested service "${slug}" could not be found.`
            );

            return;

        }


        this.render();

        this.updateDocumentMeta();

        this.bindEvents();

        this.animate();

    }


    /* ========================================================
       DOCUMENT META
       ======================================================== */

    updateDocumentMeta() {

        document.title =
            `${this.service.title} | River IT Solutions`;


        const description =
            document.querySelector(
                'meta[name="description"]'
            );


        if (
            description &&
            this.service.description
        ) {

            description.setAttribute(
                "content",
                this.service.description
            );

        }

    }


    /* ========================================================
       GET FAMILY
       ======================================================== */

    getFamily() {

        if (
            typeof window.getRiverServiceFamily !==
            "function"
        ) {

            return null;

        }


        return window.getRiverServiceFamily(
            this.service.family
        );

    }


    /* ========================================================
       RENDER
       ======================================================== */

    render() {

        const service =
            this.service;


        const family =
            this.getFamily();


        const index =
            this.services.findIndex(
                item =>
                    item.slug === service.slug ||
                    item.id === service.id
            );


        const previous =
            index > 0
                ? this.services[index - 1]
                : null;


        const next =
            index >= 0 &&
            index <
                this.services.length - 1
                ? this.services[index + 1]
                : null;


        const familyNumber =
            family?.number ||
            service.number ||
            "00";


        const familyTitle =
            family?.title ||
            service.family ||
            "Services";


        const categoryLabel =
            service.categoryLabel ||
            familyTitle;


        const longDescription =
            service.longDescription ||
            service.description ||
            service.tagline ||
            "";


        const tags =
            service.tags ||
            service.capabilities ||
            [];


        const deliverables =
            service.deliverables ||
            service.capabilities ||
            [];


        const technologies =
            service.technologies ||
            [];


        this.innerHTML = `

            <!-- =================================================
                 HERO
            ================================================== -->

            <section
                class="service-product-hero"
            >

                <div
                    class="service-product-top"
                >

                    <a
                        href="services.html"
                        class="service-back"
                    >

                        <span aria-hidden="true">
                            ←
                        </span>

                        Back to services

                    </a>


                    <div
                        class="service-breadcrumb"
                    >

                        River

                        <span>/</span>

                        Services

                        <span>/</span>

                        ${this.escapeHTML(
                            categoryLabel
                        )}

                    </div>

                </div>


                <div
                    class="service-product-hero-content"
                >

                    <div
                        class="service-product-index"
                    >

                        <span>
                            ${this.escapeHTML(
                                familyNumber
                            )}
                        </span>

                        <span>
                            ${this.escapeHTML(
                                categoryLabel
                            )}
                        </span>

                    </div>


                    <div
                        class="service-product-title-wrap"
                    >

                        <p
                            class="services-eyebrow"
                        >
                            ${this.escapeHTML(
                                service.family ||
                                categoryLabel
                            )}
                        </p>


                        <h1>
                            ${this.escapeHTML(
                                service.title
                            )}
                        </h1>


                        <p
                            class="service-product-lead"
                        >
                            ${this.escapeHTML(
                                service.description ||
                                service.tagline ||
                                ""
                            )}
                        </p>

                    </div>


                    <button
                        type="button"
                        class="service-product-arrow"
                        aria-label="Scroll to service overview"
                    >

                        <span aria-hidden="true">
                            ↓
                        </span>

                    </button>

                </div>

            </section>



            <!-- =================================================
                 OVERVIEW
            ================================================== -->

            <section
                class="service-overview"
            >

                <div
                    class="service-section-label"
                >

                    <span>
                        01
                    </span>

                    <span>
                        Overview
                    </span>

                </div>


                <div
                    class="service-overview-content"
                >

                    <p
                        class="service-overview-statement"
                    >
                        ${this.escapeHTML(
                            longDescription
                        )}
                    </p>


                    ${
                        tags.length
                            ? `

                                <div
                                    class="service-overview-tags"
                                >

                                    ${tags
                                        .map(
                                            tag => `

                                                <span>
                                                    ${this.escapeHTML(
                                                        tag
                                                    )}
                                                </span>

                                            `
                                        )
                                        .join("")
                                    }

                                </div>

                              `
                            : ""
                    }

                </div>

            </section>



            <!-- =================================================
                 PROBLEMS WE SOLVE
            ================================================== -->

            ${
                service.problems &&
                service.problems.length
                    ? `

                        <section
                            class="service-problems"
                        >

                            <div
                                class="service-section-label"
                            >

                                <span>
                                    02
                                </span>

                                <span>
                                    Problems we solve
                                </span>

                            </div>


                            <div
                                class="service-problems-content"
                            >

                                <div
                                    class="service-problems-heading"
                                >

                                    <h2>
                                        Built around
                                        <span>
                                            the problem.
                                        </span>
                                    </h2>

                                </div>


                                <div
                                    class="service-problems-list"
                                >

                                    ${service.problems
                                        .map(
                                            (problem, i) => `

                                                <div
                                                    class="service-problem"
                                                >

                                                    <span>
                                                        ${String(
                                                            i + 1
                                                        ).padStart(
                                                            2,
                                                            "0"
                                                        )}
                                                    </span>

                                                    <strong>
                                                        ${this.escapeHTML(
                                                            problem
                                                        )}
                                                    </strong>

                                                    <span
                                                        aria-hidden="true"
                                                    >
                                                        ↗
                                                    </span>

                                                </div>

                                            `
                                        )
                                        .join("")
                                    }

                                </div>

                            </div>

                        </section>

                      `
                    : ""
            }



            <!-- =================================================
                 DELIVERABLES
            ================================================== -->

            <section
                class="service-deliverables"
            >

                <div
                    class="service-section-label"
                >

                    <span>
                        ${
                            service.problems &&
                            service.problems.length
                                ? "03"
                                : "02"
                        }
                    </span>

                    <span>
                        What we deliver
                    </span>

                </div>


                <div
                    class="service-deliverables-content"
                >

                    <div
                        class="service-deliverables-heading"
                    >

                        <h2>
                            Built around
                            <span>
                                your requirements.
                            </span>
                        </h2>

                    </div>


                    <div
                        class="service-deliverables-list"
                    >

                        ${
                            deliverables.length
                                ? deliverables
                                    .map(
                                        (item, i) => `

                                            <div
                                                class="service-deliverable"
                                            >

                                                <span>
                                                    ${String(
                                                        i + 1
                                                    ).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                <strong>
                                                    ${this.escapeHTML(
                                                        item
                                                    )}
                                                </strong>

                                                <span
                                                    class="service-deliverable-arrow"
                                                    aria-hidden="true"
                                                >
                                                    ↗
                                                </span>

                                            </div>

                                        `
                                    )
                                    .join("")
                                : `

                                    <div
                                        class="service-deliverable"
                                    >

                                        <span>
                                            01
                                        </span>

                                        <strong>
                                            Tailored to your requirements
                                        </strong>

                                        <span
                                            class="service-deliverable-arrow"
                                        >
                                            ↗
                                        </span>

                                    </div>

                                  `
                        }

                    </div>

                </div>

            </section>



            <!-- =================================================
                 TECHNOLOGY
            ================================================== -->

            <section
                class="service-technology"
            >

                <div
                    class="service-section-label"
                >

                    <span>
                        ${
                            service.problems &&
                            service.problems.length
                                ? "04"
                                : "03"
                        }
                    </span>

                    <span>
                        Technology
                    </span>

                </div>


                <div
                    class="service-technology-content"
                >

                    <div>

                        <h2>
                            The technology
                            <span>
                                behind it.
                            </span>
                        </h2>

                    </div>


                    <div
                        class="service-tech-grid"
                    >

                        ${
                            technologies.length
                                ? technologies
                                    .map(
                                        (technology, i) => `

                                            <div
                                                class="service-tech-item"
                                            >

                                                <span>
                                                    ${String(
                                                        i + 1
                                                    ).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                <strong>
                                                    ${this.escapeHTML(
                                                        technology
                                                    )}
                                                </strong>

                                            </div>

                                        `
                                    )
                                    .join("")
                                : `

                                    <div
                                        class="service-tech-item"
                                    >

                                        <span>
                                            01
                                        </span>

                                        <strong>
                                            Architecture selected for the project
                                        </strong>

                                    </div>

                                  `
                        }

                    </div>

                </div>

            </section>



            <!-- =================================================
                 CAPABILITIES
            ================================================== -->

            ${
                service.capabilities &&
                service.capabilities.length
                    ? `

                        <section
                            class="service-capabilities"
                        >

                            <div
                                class="service-section-label"
                            >

                                <span>
                                    05
                                </span>

                                <span>
                                    Capabilities
                                </span>

                            </div>


                            <div
                                class="service-capabilities-grid"
                            >

                                ${service.capabilities
                                    .map(
                                        (capability, i) => `

                                            <article>

                                                <span>
                                                    ${String(
                                                        i + 1
                                                    ).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>

                                                <h3>
                                                    ${this.escapeHTML(
                                                        capability
                                                    )}
                                                </h3>

                                            </article>

                                        `
                                    )
                                    .join("")
                                }

                            </div>

                        </section>

                      `
                    : ""
            }



            <!-- =================================================
                 PROCESS
            ================================================== -->

            <section
                class="service-process"
            >

                <div
                    class="service-section-label"
                >

                    <span>
                        06
                    </span>

                    <span>
                        How we approach it
                    </span>

                </div>


                <div
                    class="service-process-content"
                >

                    <div
                        class="service-process-intro"
                    >

                        <h2>
                            From problem
                            <span>
                                to implementation.
                            </span>
                        </h2>


                        <p>
                            Every River engagement is shaped
                            around the problem we are solving,
                            the people using the system and
                            the environment in which it needs
                            to operate.
                        </p>

                    </div>


                    <div
                        class="service-process-grid"
                    >

                        <article>

                            <span>
                                01
                            </span>

                            <h3>
                                Understand
                            </h3>

                            <p>
                                We establish the problem,
                                goals, users, workflows and
                                technical requirements.
                            </p>

                        </article>


                        <article>

                            <span>
                                02
                            </span>

                            <h3>
                                Design
                            </h3>

                            <p>
                                We shape the experience,
                                architecture and technical
                                direction before implementation.
                            </p>

                        </article>


                        <article>

                            <span>
                                03
                            </span>

                            <h3>
                                Build
                            </h3>

                            <p>
                                We engineer the solution in
                                structured, testable stages.
                            </p>

                        </article>


                        <article>

                            <span>
                                04
                            </span>

                            <h3>
                                Evolve
                            </h3>

                            <p>
                                We improve the solution as
                                requirements, users and the
                                organisation grow.
                            </p>

                        </article>

                    </div>

                </div>

            </section>



            <!-- =================================================
                 CTA
            ================================================== -->

            <section
                class="service-product-cta"
            >

                <div
                    class="service-cta-mark"
                    aria-hidden="true"
                >
                    →
                </div>


                <div
                    class="service-cta-content"
                >

                    <span>
                        ${this.escapeHTML(
                            service.title
                        )}
                    </span>


                    <h2>
                        Have a project
                        <span>
                            in mind?
                        </span>
                    </h2>


                    <p>
                        Tell us what you're trying to
                        build, improve, move, connect,
                        protect or solve.
                    </p>

                </div>


                <a
                    href="contact.html"
                    class="service-cta-button"
                >

                    Start a conversation

                    <span aria-hidden="true">
                        ↗
                    </span>

                </a>

            </section>



            <!-- =================================================
                 SERVICE NAVIGATION
            ================================================== -->

            <nav
                class="service-navigation"
                aria-label="Service navigation"
            >

                <a
                    href="services.html"
                    class="service-navigation-all"
                >

                    <span>
                        Services
                    </span>

                    <strong>
                        All services
                    </strong>

                </a>


                <div
                    class="service-navigation-next"
                >

                    ${
                        previous
                            ? `

                                <a
                                    href="service.html?service=${encodeURIComponent(
                                        previous.slug ||
                                        previous.id
                                    )}"
                                    class="service-nav-link"
                                >

                                    <span>
                                        Previous
                                    </span>

                                    <strong>
                                        ←
                                        ${this.escapeHTML(
                                            previous.title
                                        )}
                                    </strong>

                                </a>

                              `
                            : ""
                    }


                    ${
                        next
                            ? `

                                <a
                                    href="service.html?service=${encodeURIComponent(
                                        next.slug ||
                                        next.id
                                    )}"
                                    class="service-nav-link"
                                >

                                    <span>
                                        Next
                                    </span>

                                    <strong>
                                        ${this.escapeHTML(
                                            next.title
                                        )}
                                        →
                                    </strong>

                                </a>

                              `
                            : ""
                    }

                </div>

            </nav>

        `;

    }


    /* ========================================================
       EVENTS
       ======================================================== */

    bindEvents() {

        const arrow =
            this.querySelector(
                ".service-product-arrow"
            );


        arrow?.addEventListener(
            "click",
            () => {

                const overview =
                    this.querySelector(
                        ".service-overview"
                    );


                overview?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );


        this.querySelectorAll(
            ".service-deliverable"
        ).forEach(
            item => {

                item.addEventListener(
                    "mouseenter",
                    () => {

                        item.classList.add(
                            "is-hovered"
                        );

                    }
                );


                item.addEventListener(
                    "mouseleave",
                    () => {

                        item.classList.remove(
                            "is-hovered"
                        );

                    }
                );

            }
        );

    }


    /* ========================================================
       ANIMATION
       ======================================================== */

    animate() {

        if (
            typeof gsap ===
            "undefined"
        ) {

            return;

        }


        const heroElements =
            this.querySelectorAll(
                ".service-product-hero-content > *"
            );


        if (heroElements.length) {

            gsap.fromTo(
                heroElements,
                {
                    opacity: 0,
                    y: 50
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.12,
                    ease: "power3.out"
                }
            );

        }


        const sections =
            this.querySelectorAll(
                ".service-section-label"
            );


        sections.forEach(
            section => {

                gsap.fromTo(
                    section,
                    {
                        opacity: 0,
                        x: -25
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.7,
                        ease: "power3.out"
                    }
                );

            }
        );


        const cards =
            this.querySelectorAll(
                ".service-process-grid article"
            );


        if (cards.length) {

            gsap.fromTo(
                cards,
                {
                    opacity: 0,
                    y: 35
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out"
                }
            );

        }


        const deliverables =
            this.querySelectorAll(
                ".service-deliverable"
            );


        if (deliverables.length) {

            gsap.fromTo(
                deliverables,
                {
                    opacity: 0,
                    x: 25
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.55,
                    stagger: 0.06,
                    ease: "power2.out"
                }
            );

        }

    }


    /* ========================================================
       NOT FOUND
       ======================================================== */

    renderNotFound(
        message
    ) {

        this.innerHTML = `

            <section
                class="service-not-found"
            >

                <span>
                    404
                </span>


                <h1>
                    Service not found.
                </h1>


                <p>
                    ${this.escapeHTML(
                        message
                    )}
                </p>


                <a
                    href="services.html"
                >

                    ← View all services

                </a>

            </section>

        `;

    }


    /* ========================================================
       ESCAPE HTML
       ======================================================== */

    escapeHTML(
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

}


/* ============================================================
   REGISTER
   ============================================================ */

if (
    !customElements.get(
        "service-page"
    )
) {

    customElements.define(
        "service-page",
        ServicePage
    );

}