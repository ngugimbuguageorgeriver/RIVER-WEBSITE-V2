/**
 * ============================================================
 * whatWeDoSection.js
 * ============================================================
 *
 * 🟢 UPGRADE:
 * Uses the central RIVER_PROJECTS registry.
 *
 * The media player and homepage now use the SAME project data.
 *
 * ============================================================
 */


class WhatWeDo extends HTMLElement {


    connectedCallback() {

        /* ====================================================
           SECTION DATA
           ==================================================== */

        const title = this.dataset.title || "What we do";

        const subtitle = this.dataset.subtitle || "";

        const button = this.dataset.button || "See What We Have Built";

        const link = this.dataset.link || "projects.html";


        /* ====================================================
           🟢 UPGRADE:
           READ PROJECTS FROM CENTRAL DATA SOURCE
           ==================================================== */

        if (
            !window.RIVER_PROJECTS ||
            Object.keys(window.RIVER_PROJECTS).length === 0
        ) {

            console.error(
                "River: RIVER_PROJECTS could not be found."
            );

            this.innerHTML = `
                <section class="what-we-do mt-18">

                    <div class="what-we-do-inner">

                        <div class="section-title">

                            <div>

                                <h2>${title}</h2>

                                <p class="small">
                                    ${subtitle}
                                </p>

                            </div>

                        </div>

                        <p>
                            Project data could not be loaded.
                        </p>

                    </div>

                </section>
            `;

            return;
        }


        /* ====================================================
           🟢 UPGRADE:
           CONVERT CENTRAL OBJECT INTO ARRAY
           ==================================================== */

        const data = Object.values(window.RIVER_PROJECTS);


        /* ====================================================
           DUPLICATE FOR MARQUEE
           ==================================================== */

        const loopData = [...data, ...data];


        /* ====================================================
           BUILD COMPONENT
           ==================================================== */

        this.innerHTML = `

            <section class="what-we-do mt-18">

                <div class="what-we-do-inner">


                    <!-- SECTION HEADER -->

                    <div class="section-title">

                        <div>

                            <h2>
                                ${title}
                            </h2>

                            <p class="small">
                                ${subtitle}
                            </p>

                        </div>


                        <div>

                            <a
                                class="btn"
                                href="${link}"
                            >
                                ${button}
                            </a>

                        </div>

                    </div>



                    <!-- =================================================
                         🟢 UPGRADE:
                         PROJECT MARQUEE
                         ================================================= -->

                    <div class="project-marquee">

                        <div class="marquee-track">

                            ${loopData.map(item => `

                                <project-card

                                    data-title="${item.title}"

                                    data-desc="${item.desc}"

                                    data-slug="${item.slug}"

                                    data-media='${JSON.stringify(item.media)}'

                                ></project-card>

                            `).join("")}

                        </div>

                    </div>


                </div>

            </section>

        `;


        /* ====================================================
           WAIT FOR DOM
           ==================================================== */

        setTimeout(() => {


            const track =
                this.querySelector(".marquee-track");


            if (!track) {
                return;
            }


            const cards =
                gsap.utils.toArray(
                    this.querySelectorAll(".media-card")
                );


            if (!cards.length) {
                return;
            }


            /* =================================================
               🟢 UPGRADE:
               DO NOT DUPLICATE INNERHTML AGAIN
               
               loopData is already duplicated.
               ================================================= */

            let totalWidth = 0;


            cards.forEach(card => {

                totalWidth +=
                    card.offsetWidth + 32;

            });


            const loopWidth =
                totalWidth / 2;


            /* =================================================
               GSAP LOOP
               ================================================= */

            const tl = gsap.timeline({

                repeat: -1,

                defaults: {
                    ease: "none"
                }

            });


            /* =================================================
               HOVER SLOWDOWN
               ================================================= */

            track.addEventListener(
                "mouseenter",
                () => {

                    gsap.to(tl, {

                        timeScale: 0.2,

                        duration: 0.5,

                        ease: "power2.out"

                    });

                }
            );


            track.addEventListener(
                "mouseleave",
                () => {

                    gsap.to(tl, {

                        timeScale: 1,

                        duration: 0.5,

                        ease: "power2.out"

                    });

                }
            );


            /* =================================================
               MARQUEE ANIMATION
               ================================================= */

            tl.to(track, {

                x: `-=${loopWidth}`,

                duration: 40

            });


            /* =================================================
               🟢 UPGRADE:
               SEAMLESS MODIFIER
               ================================================= */

            gsap.set(track, {

                x: 0,

                modifiers: {

                    x: gsap.utils.unitize(
                        x => {

                            return (
                                parseFloat(x) %
                                loopWidth
                            );

                        }
                    )

                }

            });


            /* =================================================
               FOCUS SYSTEM
               ================================================= */

            function updateFocus() {


                const center =
                    window.innerWidth / 2;


                cards.forEach(card => {


                    const rect =
                        card.getBoundingClientRect();


                    const cardCenter =
                        rect.left +
                        rect.width / 2;


                    const distance =
                        Math.abs(
                            center -
                            cardCenter
                        );


                    card.classList.remove(
                        "focus",
                        "dimmed"
                    );


                    if (
                        distance <
                        rect.width / 2
                    ) {

                        card.classList.add(
                            "focus"
                        );


                        activateVideo(card);

                    } else {

                        card.classList.add(
                            "dimmed"
                        );


                        deactivateVideo(card);

                    }

                });

            }


            gsap.ticker.add(updateFocus);


            /* =================================================
               DRAG + INERTIA
               ================================================= */

            const proxy =
                document.createElement("div");


            const draggable =
                Draggable.create(proxy, {

                    type: "x",

                    inertia: true,

                    trigger: track,


                    onDrag() {

                        gsap.set(
                            track,
                            {
                                x: `+=${this.deltaX}`
                            }
                        );

                    },


                    onThrowUpdate() {

                        gsap.set(
                            track,
                            {
                                x: `+=${this.deltaX}`
                            }
                        );

                    }

                })[0];


            /* =================================================
               SNAP TO CENTER
               ================================================= */

            function snapToCenter() {


                let closest = null;

                let minDistance =
                    Infinity;


                const center =
                    window.innerWidth / 2;


                cards.forEach(card => {


                    const rect =
                        card.getBoundingClientRect();


                    const cardCenter =
                        rect.left +
                        rect.width / 2;


                    const distance =
                        Math.abs(
                            center -
                            cardCenter
                        );


                    if (
                        distance <
                        minDistance
                    ) {

                        minDistance =
                            distance;

                        closest =
                            card;

                    }

                });


                if (!closest) {
                    return;
                }


                const rect =
                    closest.getBoundingClientRect();


                const offset =
                    rect.left +
                    rect.width / 2 -
                    center;


                gsap.to(track, {

                    x: `-=${offset}`,

                    duration: 0.6,

                    ease: "power3.out"

                });

            }


            draggable.addEventListener(
                "dragend",
                snapToCenter
            );


            draggable.addEventListener(
                "throwcomplete",
                snapToCenter
            );



            /* =================================================
               🟢 UPGRADE:
               PROJECT VIDEO PREVIEW
               ================================================= */

            function activateVideo(card) {


                const video =
                    card.querySelector("video");


                if (!video) {
                    return;
                }


                if (!video.src) {


                    const projectCard =
                        card.querySelector(
                            ".project-card"
                        );


                    if (!projectCard) {
                        return;
                    }


                    let media = [];


                    try {

                        media =
                            JSON.parse(
                                projectCard.dataset.media ||
                                "[]"
                            );

                    } catch (error) {

                        console.error(
                            "River: Could not parse project media.",
                            error
                        );

                        return;

                    }


                    const videoMedia =
                        media.find(
                            item =>
                                item.type === "video"
                        );


                    if (!videoMedia) {
                        return;
                    }


                    video.src =
                        videoMedia.src;


                    video.muted = true;

                    video.loop = true;

                    video.playsInline = true;

                    video.preload = "metadata";


                    video.load();


                    video.play()
                        .catch(() => {});

                }


                const wrapper =
                    card.querySelector(
                        ".media-wrapper"
                    );


                if (wrapper) {

                    wrapper.classList.add(
                        "video-active"
                    );

                }

            }



            /* =================================================
               DEACTIVATE VIDEO
               ================================================= */

            function deactivateVideo(card) {


                const video =
                    card.querySelector("video");


                if (!video) {
                    return;
                }


                video.pause();


                const wrapper =
                    card.querySelector(
                        ".media-wrapper"
                    );


                if (wrapper) {

                    wrapper.classList.remove(
                        "video-active"
                    );

                }

            }


        }, 100);

    }

}


customElements.define(
    "what-we-do",
    WhatWeDo
);