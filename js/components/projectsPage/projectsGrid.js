/**
 * ============================================================
 * projectsGrid.js
 * ============================================================
 *
 * PROJECTS GRID
 *
 * 🟢 UPGRADE:
 *
 * The grid no longer stores project/media data locally.
 *
 * It reads everything from:
 *
 *     window.RIVER_PROJECTS
 *
 * This makes the Projects page use the exact same data
 * as the Index page and Media Player.
 *
 * ============================================================
 */


class ProjectsGrid extends HTMLElement {


    connectedCallback() {


        /* ====================================================
           🟢 UPGRADE:
           CHECK CENTRAL REGISTRY
           ==================================================== */

        if (
            !window.RIVER_PROJECTS
        ) {

            console.error(
                "River: RIVER_PROJECTS is not available."
            );


            this.innerHTML = `

                <div class="projects-grid-error">

                    <p>
                        Project data could not be loaded.
                    </p>

                </div>

            `;


            return;

        }



        /* ====================================================
           GET PROJECTS
           ==================================================== */

        const projects =
            Object.values(
                window.RIVER_PROJECTS
            );



        /* ====================================================
           EMPTY PROJECT REGISTRY
           ==================================================== */

        if (!projects.length) {

            this.innerHTML = `

                <div class="projects-grid-empty">

                    <p>
                        No projects available.
                    </p>

                </div>

            `;


            return;

        }



        /* ====================================================
           BUILD GRID
           ==================================================== */

        this.innerHTML = `

            <div class="projects-grid">

                ${projects
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



        /* ====================================================
           🟢 UPGRADE:
           ADD CLICK EVENTS
           ==================================================== */

        this.bindProjectEvents();



        /* ====================================================
           🟢 UPGRADE:
           BUILD QUICK LINKS
           ==================================================== */

        this.buildQuickLinks(
            projects
        );

    }



    /* ========================================================
       CREATE PROJECT CARD
       ======================================================== */

    createProjectCard(
        project
    ) {


        const firstMedia =
            Array.isArray(project.media) &&
            project.media.length
                ? project.media[0]
                : null;



        const mediaHTML =
            this.createPreviewMedia(
                firstMedia,
                project.title
            );



        return `

            <article

                class="project-grid-card"

                data-project-slug="${project.slug}"

            >


                <!-- ==========================================
                     MEDIA PREVIEW
                     ========================================== -->

                <div class="project-grid-media">

                    ${mediaHTML}

                </div>



                <!-- ==========================================
                     CONTENT
                     ========================================== -->

                <div class="project-grid-content">


                    <h3>

                        ${project.title}

                    </h3>



                    <p class="small">

                        ${project.desc || ""}

                    </p>



                    <button

                        class="btn project-media-btn"

                        type="button"

                        data-project-slug="${project.slug}"

                    >

                        View Media

                    </button>


                </div>


            </article>

        `;

    }



    /* ========================================================
       CREATE PREVIEW MEDIA
       ======================================================== */

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



        /* ====================================================
           IMAGE
           ==================================================== */

        if (
            media.type === "image"
        ) {

            return `

                <img

                    src="${media.src}"

                    alt="${title}"

                    loading="lazy"

                />

            `;

        }



        /* ====================================================
           VIDEO
           ==================================================== */

        if (
            media.type === "video"
        ) {

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



    /* ========================================================
       🟢 UPGRADE:
       PROJECT CLICK EVENTS
       ======================================================== */

    bindProjectEvents() {


        const cards =
            this.querySelectorAll(
                ".project-grid-card"
            );


        cards.forEach(
            card => {


                const slug =
                    card.dataset.projectSlug;


                if (!slug) {

                    return;

                }



                /* ============================================
                   CARD CLICK
                   ============================================ */

                card.addEventListener(
                    "click",
                    event => {


                        /*
                         * If user clicked the actual button,
                         * the button handler below will take
                         * care of navigation.
                         */

                        if (
                            event.target.closest(
                                ".project-media-btn"
                            )
                        ) {

                            return;

                        }


                        this.openMediaPlayer(
                            slug
                        );

                    }
                );



                /* ============================================
                   BUTTON CLICK
                   ============================================ */

                const button =
                    card.querySelector(
                        ".project-media-btn"
                    );


                if (button) {

                    button.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();

                            this.openMediaPlayer(
                                slug
                            );

                        }
                    );

                }

            }
        );

    }



    /* ========================================================
       🟢 UPGRADE:
       OPEN CENTRAL MEDIA PLAYER
       ======================================================== */

    openMediaPlayer(
        slug
    ) {


        const project =
            window.getRiverProject(
                slug
            );


        if (!project) {

            console.error(
                "River: Cannot open media player. Project not found:",
                slug
            );


            return;

        }



        /* ====================================================
           OPTIONAL FALLBACK SESSION DATA
           ==================================================== */

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



        /* ====================================================
           PAGE TRANSITION
           ==================================================== */

        document
            .getElementById(
                "pageTransition"
            )
            ?.classList.add(
                "active"
            );



        /* ====================================================
           🟢 UPGRADE:
           DEEP LINK TO CENTRAL MEDIA PLAYER
           ==================================================== */

        const url =
            `mediaPlayer.html?project=${encodeURIComponent(
                project.slug
            )}`;



        setTimeout(
            () => {

                window.location.href =
                    url;

            },
            400
        );

    }



    /* ========================================================
       🟢 UPGRADE:
       QUICK LINKS
       ======================================================== */

    buildQuickLinks(
        projects
    ) {


        const container =
            document.getElementById(
                "projectQuickLinks"
            );


        if (!container) {

            return;

        }



        /*
         * Clear existing content.
         */

        container.innerHTML = "";



        /*
         * We can show the first three projects,
         * matching the original design.
         */

        projects
            .slice(0, 3)
            .forEach(
                project => {


                    const card =
                        document.createElement(
                            "div"
                        );


                    card.className =
                        "card";



                    card.innerHTML = `

                        <h3>

                            ${project.title}

                        </h3>


                        <p class="small">

                            ${project.desc || ""}

                        </p>


                        <p>

                            <button

                                class="btn"

                                type="button"

                                data-project-slug="${project.slug}"

                            >

                                Open

                            </button>

                        </p>

                    `;



                    const button =
                        card.querySelector(
                            "button"
                        );


                    button.addEventListener(
                        "click",
                        () => {

                            this.openMediaPlayer(
                                project.slug
                            );

                        }
                    );



                    container.appendChild(
                        card
                    );

                }
            );

    }

}



/* ============================================================
   REGISTER CUSTOM ELEMENT
   ============================================================ */

customElements.define(
    "projects-grid",
    ProjectsGrid
);