/**
 * ============================================================
 * projectsGrid.js
 * ============================================================
 *
 * 🟢 UPGRADE:
 * Full project intelligence interface.
 *
 * Features:
 *
 * - Central registry
 * - Search
 * - Type filtering
 * - Industry filtering
 * - Technology filtering
 * - Problem filtering
 * - Featured project
 * - Case-study cards
 * - Problem matrix
 * - Process
 * - Technology/capability matrix
 * - Related projects
 * - Media player deep linking
 *
 * ============================================================
 */

class ProjectsGrid extends HTMLElement {

    connectedCallback() {

        this.projects =
            window.getRiverProjects
                ? window.getRiverProjects()
                : [];

        this.activeFilter = "ALL";

        this.searchQuery = "";

        this.render();

    }


    /* =========================================================
       🟢 UPGRADE: MASTER RENDER
       ========================================================= */

    render() {

        if (!this.projects.length) {

            this.innerHTML = `
                <div class="projects-grid-error">
                    <p>No projects available.</p>
                </div>
            `;

            return;

        }


        this.renderFilters();

        this.renderProjects();

        this.renderFeatured();

        this.renderProblems();

        this.renderProcess();

        this.renderTechnologyMatrix();

        this.renderQuickLinks();

        this.bindEvents();

    }


    /* =========================================================
       🟢 UPGRADE: FILTERS
       ========================================================= */

    renderFilters() {

        const container =
            document.getElementById(
                "projectFilters"
            );

        if (!container) {
            return;
        }


        const types = [

            "ALL",

            ...new Set(
                this.projects
                    .map(
                        project =>
                            project.type
                    )
                    .filter(Boolean)
            ),

            "CASE STUDIES"

        ];


        container.innerHTML =
            types
                .map(
                    filter => `

                        <button
                            type="button"
                            class="project-filter ${
                                this.activeFilter === filter
                                    ? "active"
                                    : ""
                            }"
                            data-filter="${filter}"
                        >
                            ${filter}
                        </button>

                    `
                )
                .join("");

    }


    /* =========================================================
       🟢 UPGRADE: FILTER PROJECTS
       ========================================================= */

    getFilteredProjects() {

        let results =
            [...this.projects];


        if (
            this.activeFilter !== "ALL"
        ) {

            if (
                this.activeFilter ===
                "CASE STUDIES"
            ) {

                results =
                    results.filter(
                        project =>
                            project.caseStudy
                    );

            } else {

                results =
                    results.filter(
                        project =>
                            project.type ===
                            this.activeFilter
                    );

            }

        }


        if (this.searchQuery) {

            const query =
                this.searchQuery
                    .toLowerCase();


            results =
                results.filter(
                    project => {

                        const content = [

                            project.title,

                            project.desc,

                            project.type,

                            ...(project.industry || []),

                            ...(project.technologies || []),

                            ...(project.capabilities || []),

                            ...(project.problems || [])

                        ]
                            .join(" ")
                            .toLowerCase();


                        return content.includes(
                            query
                        );

                    }
                );

        }


        return results;

    }


    /* =========================================================
       🟢 UPGRADE: PROJECT GRID
       ========================================================= */

    renderProjects() {

        const filtered =
            this.getFilteredProjects();


        const count =
            document.getElementById(
                "projectResultsCount"
            );


        if (count) {

            count.textContent =
                `${filtered.length} ${
                    filtered.length === 1
                        ? "project"
                        : "projects"
                }`;

        }


        const status =
            document.getElementById(
                "projectGridStatus"
            );


        if (status) {

            status.textContent =
                filtered.length
                    ? ""
                    : "No projects match your search.";

        }


        this.innerHTML = `

            <div class="projects-grid">

                ${
                    filtered
                        .map(
                            project =>
                                this.createProjectCard(
                                    project
                                )
                        )
                        .join("")
                }

            </div>

        `;

    }


    /* =========================================================
       🟢 UPGRADE: CASE STUDY CARD
       ========================================================= */

    createProjectCard(project) {

        const firstMedia =
            Array.isArray(project.media) &&
            project.media.length
                ? project.media[0]
                : null;


        const media =
            this.createPreviewMedia(
                firstMedia,
                project.title
            );


        const capabilities =
            (
                project.capabilities ||
                []
            )
                .slice(0, 4)
                .map(
                    item =>
                        `<span>${item}</span>`
                )
                .join("");


        const technologies =
            (
                project.technologies ||
                []
            )
                .slice(0, 4)
                .join(" · ");


        return `

            <article

                class="project-grid-card"

                data-project-slug="${project.slug}"

                tabindex="0"

            >

                <div class="project-grid-media">

                    ${media}

                    <span class="project-status">
                        ${project.status || "PROJECT"}
                    </span>

                </div>


                <div class="project-grid-content">

                    <div class="project-meta">

                        <span>
                            ${project.type || "PROJECT"}
                        </span>

                        <span>
                            ${
                                project.industry?.[0] ||
                                ""
                            }
                        </span>

                    </div>


                    <h3>
                        ${project.title}
                    </h3>


                    <p class="small">
                        ${project.desc || ""}
                    </p>


                    ${
                        project.caseStudy
                            ? `
                                <div class="case-study-preview">

                                    <strong>
                                        Client challenge
                                    </strong>

                                    <p class="small">
                                        ${project.caseStudy.challenge}
                                    </p>

                                </div>
                            `
                            : ""
                    }


                    <div class="project-capability-tags">

                        ${capabilities}

                    </div>


                    <div class="project-technologies">

                        ${technologies}

                    </div>


                    <button
                        class="btn project-media-btn"
                        type="button"
                        data-project-slug="${project.slug}"
                    >
                        Explore Project
                    </button>

                </div>

            </article>

        `;

    }


    /* =========================================================
       CREATE MEDIA PREVIEW
       ========================================================= */

    createPreviewMedia(
        media,
        title
    ) {

        if (!media) {

            return `
                <div class="project-media-placeholder">
                    No media
                </div>
            `;

        }


        if (media.type === "image") {

            return `

                <img
                    src="${media.src}"
                    alt="${title}"
                    loading="lazy"
                />

            `;

        }


        if (media.type === "video") {

            return `

                <video
                    muted
                    playsinline
                    preload="metadata"
                >

                    <source
                        src="${media.src}"
                        type="video/mp4"
                    >

                </video>

            `;

        }


        return `
            <div class="project-media-placeholder">
                Media unavailable
            </div>
        `;

    }


    /* =========================================================
       🟢 UPGRADE: FEATURED CASE STUDY
       ========================================================= */

    renderFeatured() {

        const container =
            document.getElementById(
                "featuredCaseStudy"
            );

        if (!container) {
            return;
        }


        const featured =
            this.projects.find(
                project =>
                    project.featured
            ) ||
            this.projects[0];


        const caseStudy =
            featured.caseStudy;


        if (!caseStudy) {

            container.innerHTML = "";

            return;

        }


        container.innerHTML = `

            <div class="featured-case-study-card">

                <div>

                    <p class="eyebrow">
                        FEATURED CASE STUDY
                    </p>

                    <h2>
                        ${featured.title}
                    </h2>

                    <p class="small">
                        ${featured.desc}
                    </p>

                    <button
                        class="btn featured-project-btn"
                        data-project-slug="${featured.slug}"
                    >
                        Watch Case Study
                    </button>

                </div>


                <div class="featured-case-study-content">

                    <div>

                        <strong>
                            THE PROBLEM
                        </strong>

                        <p class="small">
                            ${caseStudy.challenge}
                        </p>

                    </div>


                    <div>

                        <strong>
                            THE APPROACH
                        </strong>

                        <p class="small">
                            ${caseStudy.approach}
                        </p>

                    </div>


                    <div>

                        <strong>
                            THE SOLUTION
                        </strong>

                        <p class="small">
                            ${caseStudy.solution}
                        </p>

                    </div>


                    <div>

                        <strong>
                            THE RESULT
                        </strong>

                        <p class="small">
                            ${caseStudy.result}
                        </p>

                    </div>

                </div>

            </div>

        `;

    }


    /* =========================================================
       🟢 UPGRADE: WHAT WE SOLVE
       ========================================================= */

    renderProblems() {

        const container =
            document.getElementById(
                "problemMatrix"
            );

        if (!container) {
            return;
        }


        const problems = [

            ...new Set(

                this.projects.flatMap(
                    project =>
                        project.problems || []
                )

            )

        ];


        container.innerHTML =
            problems
                .map(
                    problem => `

                        <button
                            type="button"
                            class="problem-item"
                            data-search="${problem}"
                        >
                            ${problem}
                        </button>

                    `
                )
                .join("");

    }


    /* =========================================================
       🟢 UPGRADE: DEVELOPMENT PROCESS
       ========================================================= */

    renderProcess() {

        const container =
            document.getElementById(
                "projectProcess"
            );

        if (!container) {
            return;
        }


        const process = [

            "Discovery",
            "Architecture",
            "UX & Interface",
            "Development",
            "Testing",
            "Deployment",
            "Optimization"

        ];


        container.innerHTML =
            process
                .map(
                    (step, index) => `

                        <div
                            class="process-step"
                        >

                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <h3>
                                ${step}
                            </h3>

                        </div>

                    `
                )
                .join("");

    }


    /* =========================================================
       🟢 UPGRADE: TECHNOLOGY MATRIX
       ========================================================= */

    renderTechnologyMatrix() {

        const container =
            document.getElementById(
                "technologyMatrix"
            );

        if (!container) {
            return;
        }


        const technologies = [

            ...new Set(

                this.projects.flatMap(
                    project =>
                        project.technologies || []
                )

            )

        ];


        const capabilities = [

            ...new Set(

                this.projects.flatMap(
                    project =>
                        project.capabilities || []
                )

            )

        ];


        container.innerHTML = `

            <div class="technology-group">

                <h3>
                    Technologies
                </h3>

                <div class="technology-tags">

                    ${
                        technologies
                            .map(
                                item =>
                                    `<span>${item}</span>`
                            )
                            .join("")
                    }

                </div>

            </div>


            <div class="technology-group">

                <h3>
                    System Capabilities
                </h3>

                <div class="technology-tags">

                    ${
                        capabilities
                            .map(
                                item =>
                                    `<span>${item}</span>`
                            )
                            .join("")
                    }

                </div>

            </div>

        `;

    }


    /* =========================================================
       🟢 UPGRADE: QUICK LINKS
       ========================================================= */

    renderQuickLinks() {

        const container =
            document.getElementById(
                "projectQuickLinks"
            );

        if (!container) {
            return;
        }


        container.innerHTML =
            this.projects
                .slice(0, 3)
                .map(
                    project => `

                        <div class="card">

                            <h3>
                                ${project.title}
                            </h3>

                            <p class="small">
                                ${project.desc || ""}
                            </p>

                            <button
                                class="btn"
                                data-project-slug="${project.slug}"
                            >
                                Explore
                            </button>

                        </div>

                    `
                )
                .join("");

    }


    /* =========================================================
       🟢 UPGRADE: EVENTS
       ========================================================= */

    bindEvents() {

        /* FILTERS */

        document
            .querySelectorAll(
                ".project-filter"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            this.activeFilter =
                                button.dataset.filter;

                            this.render();

                        }
                    );

                }
            );


        /* SEARCH */

        const search =
            document.getElementById(
                "projectSearch"
            );


        if (search) {

            search.value =
                this.searchQuery;


            search.addEventListener(
                "input",
                event => {

                    this.searchQuery =
                        event.target.value;

                    this.render();

                    const newSearch =
                        document.getElementById(
                            "projectSearch"
                        );

                    if (newSearch) {

                        newSearch.focus();

                        newSearch.setSelectionRange(
                            newSearch.value.length,
                            newSearch.value.length
                        );

                    }

                }
            );

        }


        /* PROJECT CARDS */

        this.querySelectorAll(
            ".project-grid-card"
        )
        .forEach(
            card => {

                const slug =
                    card.dataset.projectSlug;


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

                        this.openMediaPlayer(
                            slug
                        );

                    }
                );


                card.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key === "Enter" ||
                            event.key === " "
                        ) {

                            event.preventDefault();

                            this.openMediaPlayer(
                                slug
                            );

                        }

                    }
                );

            }
        );


        /* ALL PROJECT BUTTONS */

        document
            .querySelectorAll(
                "[data-project-slug]"
            )
            .forEach(
                element => {

                    element.addEventListener(
                        "click",
                        event => {

                            const slug =
                                element.dataset.projectSlug;

                            if (slug) {

                                event.stopPropagation();

                                this.openMediaPlayer(
                                    slug
                                );

                            }

                        }
                    );

                }
            );


        /* PROBLEM BUTTONS */

        document
            .querySelectorAll(
                "[data-search]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const search =
                                document.getElementById(
                                    "projectSearch"
                                );

                            if (search) {

                                search.value =
                                    button.dataset.search;

                                this.searchQuery =
                                    button.dataset.search;

                                this.render();

                            }

                        }
                    );

                }
            );

    }


    /* =========================================================
       🟢 UPGRADE: OPEN PROJECT
       ========================================================= */

    openMediaPlayer(slug) {

        const project =
            window.getRiverProject(
                slug
            );


        if (!project) {

            console.error(
                "River: Project not found:",
                slug
            );

            return;

        }


        try {

            sessionStorage.setItem(
                "river_project_slug",
                project.slug
            );

            sessionStorage.setItem(
                "river_project_title",
                project.title
            );

            sessionStorage.setItem(
                "river_full_desc",
                project.desc || ""
            );

            sessionStorage.setItem(
                "river_media",
                JSON.stringify(
                    project.media || []
                )
            );

        } catch (error) {

            console.warn(
                "River: Session storage unavailable.",
                error
            );

        }


        document
            .getElementById(
                "pageTransition"
            )
            ?.classList.add(
                "active"
            );


        setTimeout(
            () => {

                window.location.href =
                    `mediaPlayer.html?project=${encodeURIComponent(
                        project.slug
                    )}`;

            },
            400
        );

    }

}


customElements.define(
    "projects-grid",
    ProjectsGrid
);