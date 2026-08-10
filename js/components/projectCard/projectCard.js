/**
 * ============================================================
 * projectCard.js
 * ============================================================
 *
 * 🟢 UPGRADE:
 * Clicking a project now sends the PROJECT SLUG.
 *
 * Example:
 *
 * Web & eCommerce
 *       ↓
 * web-ecommerce
 *       ↓
 * mediaPlayer.html?project=web-ecommerce
 *       ↓
 * Media Player detects project
 *       ↓
 * Loads that project's media queue
 *
 * ============================================================
 */


class ProjectCard extends HTMLElement {


    connectedCallback() {


        /* ====================================================
           CARD DATA
           ==================================================== */

        const title =
            this.dataset.title || "";


        const desc =
            this.dataset.desc || "";


        const slug =
            this.dataset.slug || "";


        let media = [];


        /* ====================================================
           🟢 UPGRADE:
           SAFELY PARSE MEDIA
           ==================================================== */

        try {

            media =
                JSON.parse(
                    this.dataset.media || "[]"
                );

        } catch (error) {

            console.error(
                "River: Invalid project media.",
                error
            );

        }


        const firstMedia =
            media[0] || {};



        /* ====================================================
           LIMIT TEXT
           ==================================================== */

        function truncate(
            text,
            limit = 100
        ) {

            if (!text) {
                return "";
            }


            if (
                text.length <= limit
            ) {

                return text;

            }


            return (
                text
                    .substring(0, limit)
                    .trim() +
                "..."
            );

        }



        /* ====================================================
           BUILD CARD
           ==================================================== */

        this.innerHTML = `

            <div class="media-card">


                <div

                    class="project-card"

                    data-project-slug="${slug}"

                    data-media='${JSON.stringify(media)}'

                >


                    <div class="media-wrapper loading">


                        ${
                            firstMedia.type === "video"

                            ? `

                                <video
                                    muted
                                    playsinline
                                    preload="metadata"
                                ></video>

                              `

                            : `

                                <img
                                    src="${firstMedia.src || ""}"
                                    alt="${title}"
                                />

                              `
                        }


                    </div>



                    <h3>
                        ${title}
                    </h3>



                    <p class="small desc">

                        ${truncate(desc)}

                        <span class="read-more">
                            Read more
                        </span>

                    </p>


                </div>


            </div>

        `;



        /* ====================================================
           ELEMENT REFERENCES
           ==================================================== */

        const card =
            this.querySelector(
                ".project-card"
            );


        const readMore =
            this.querySelector(
                ".read-more"
            );



        /* ====================================================
           🟢 UPGRADE:
           NAVIGATION FUNCTION
           ==================================================== */

        const goToMedia = () => {


            /*
             * ------------------------------------------------
             * FALLBACK DATA
             * ------------------------------------------------
             *
             * The actual media player will NOT depend on this
             * when a valid project slug exists.
             */

            try {

                sessionStorage.setItem(
                    "river_media",
                    JSON.stringify(media)
                );

            } catch (error) {

                console.warn(
                    "River: Could not save fallback media.",
                    error
                );

            }


            /* =================================================
               FALLBACK PROJECT INFORMATION
               ================================================= */

            sessionStorage.setItem(
                "river_project_title",
                title
            );


            sessionStorage.setItem(
                "river_full_desc",
                desc
            );



            /* =================================================
               🟢 UPGRADE:
               SAVE PROJECT SLUG
               ================================================= */

            sessionStorage.setItem(
                "river_project_slug",
                slug
            );



            /* =================================================
               🟢 UPGRADE:
               DEEP LINK
               ================================================= */

            const url =
                `mediaPlayer.html?project=${encodeURIComponent(slug)}`;



            /* =================================================
               PAGE TRANSITION
               ================================================= */

            document
                .getElementById("pageTransition")
                ?.classList.add("active");



            /* =================================================
               NAVIGATE
               ================================================= */

            setTimeout(() => {

                window.location.href =
                    url;

            }, 400);

        };



        /* ====================================================
           CARD CLICK
           ==================================================== */

        if (card) {

            card.addEventListener(
                "click",
                goToMedia
            );

        }



        /* ====================================================
           READ MORE CLICK
           ==================================================== */

        if (readMore) {

            readMore.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    goToMedia();

                }
            );

        }

    }

}


customElements.define(
    "project-card",
    ProjectCard
);