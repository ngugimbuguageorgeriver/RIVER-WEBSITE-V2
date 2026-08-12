/**
 * ============================================================
 * mediaPlayer.js
 * ============================================================
 *
 * RIVER SMART PROJECT + PRODUCT MEDIA PLAYER
 *
 * 🟢 UPGRADE:
 *
 * The player now understands:
 *
 * PROJECT
 * PRODUCT
 *
 * URL examples:
 *
 * mediaPlayer.html?project=web-ecommerce
 *
 * mediaPlayer.html?product=inventory-os
 *
 * ============================================================
 */


document.addEventListener(
    "DOMContentLoaded",
    async () => {

        const wrapper =
            document.getElementById(
                "mediaWrapper"
            );


        const titleEl =
            document.getElementById(
                "projectTitle"
            );


        const descEl =
            document.getElementById(
                "mediaDescription"
            );


        const queueStatusEl =
            document.getElementById(
                "mediaQueueStatus"
            );


        if (!wrapper) {

            console.error(
                "River Media Player: mediaWrapper not found."
            );

            return;

        }


        /* ====================================================
           🟢 UPGRADE: DETECT PROJECT OR PRODUCT
           ==================================================== */

        const params =
            new URLSearchParams(
                window.location.search
            );


        const requestedProject =
            params.get(
                "project"
            );


        const requestedProduct =
            params.get(
                "product"
            );


        let entityType =
            requestedProduct
                ? "product"
                : "project";


        let entitySlug =
            requestedProduct ||
            requestedProject;


        /* ====================================================
           🟢 UPGRADE: SESSION FALLBACK
           ==================================================== */

        if (!entitySlug) {

            entityType =
                sessionStorage.getItem(
                    "river_media_entity_type"
                ) ||
                "project";


            entitySlug =
                sessionStorage.getItem(
                    "river_media_entity_slug"
                );

        }


        /* ====================================================
           🟢 UPGRADE: NORMALIZE
           ==================================================== */

        if (entitySlug) {

            entitySlug =
                entityType === "product"

                    ? (
                        window.normalizeRiverProductSlug
                            ? window.normalizeRiverProductSlug(
                                entitySlug
                            )
                            : entitySlug
                    )

                    : (
                        window.normalizeRiverProjectSlug
                            ? window.normalizeRiverProjectSlug(
                                entitySlug
                            )
                            : entitySlug
                    );

        }


        console.log(
            "River Media Player:",
            entityType,
            entitySlug
        );


        /* ====================================================
           🟢 UPGRADE: LOOKUP
           ==================================================== */

        let entity =
            entityType === "product"

                ? (
                    window.getRiverProduct
                        ? window.getRiverProduct(
                            entitySlug
                        )
                        : null
                )

                : (
                    window.getRiverProject
                        ? window.getRiverProject(
                            entitySlug
                        )
                        : null
                );


        /* ====================================================
           FALLBACK MEDIA
           ==================================================== */

        let fallbackMedia = [];


        try {

            const storedMedia =
                sessionStorage.getItem(
                    "river_media"
                );


            if (storedMedia) {

                fallbackMedia =
                    JSON.parse(
                        storedMedia
                    );

            }

        } catch (error) {

            console.warn(
                "River Media Player: fallback media unavailable.",
                error
            );

        }


        /* ====================================================
           🟢 UPGRADE: SESSION FALLBACK ENTITY
           ==================================================== */

        if (
            !entity &&
            fallbackMedia.length
        ) {

            entity = {

                slug:
                    entitySlug ||
                    "session-entity",

                title:
                    sessionStorage.getItem(
                        "river_project_title"
                    ) ||
                    "River",

                desc:
                    sessionStorage.getItem(
                        "river_full_desc"
                    ) ||
                    "",

                type:
                    entityType === "product"
                        ? "PRODUCT"
                        : "PROJECT",

                media:
                    fallbackMedia

            };

        }


        if (!entity) {

            showPlayerError(
                entityType === "product"
                    ? "No product was found."
                    : "No project was found."
            );

            return;

        }


        /* ====================================================
           🟢 UPGRADE: HEADER
           ==================================================== */

        if (titleEl) {

            titleEl.textContent =
                entity.title ||
                "River";

        }


        if (descEl) {

            descEl.textContent =
                entity.tagline ||
                entity.desc ||
                "";

        }


        /* ====================================================
           🟢 UPGRADE: PRODUCT / PROJECT INFORMATION
           ==================================================== */

        if (
            entityType ===
            "product"
        ) {

            injectProductInformation(
                entity
            );

        } else {

            injectCaseStudy(
                entity
            );

        }


        /* ====================================================
           🟢 UPGRADE: MEDIA QUEUE
           ==================================================== */

        const mediaQueue =
            buildMediaQueue(
                entity,
                entityType
            );


        if (!mediaQueue.length) {

            showPlayerError(
                `No media found for "${entity.title}".`
            );

            return;

        }


        updateQueueStatus(
            `Preparing ${mediaQueue.length} media items...`
        );


        /* ====================================================
           PRELOAD
           ==================================================== */

        await preloadMediaQueue(
            mediaQueue,
            queueStatusEl
        );


        if (!mediaQueue.length) {

            showPlayerError(
                "Media could not be loaded."
            );

            return;

        }


        /* ====================================================
           BUILD
           ==================================================== */

        buildMediaSlides(
            mediaQueue,
            wrapper
        );


        updateQueueStatus(
            `${mediaQueue.length} media items ready`
        );


        /* ====================================================
           PLAYER
           ==================================================== */

        initializePlayer(
            mediaQueue
        );


        /* ====================================================
           🟢 UPGRADE: GLOBAL PLAYER STATE
           ==================================================== */

        window.RIVER_MEDIA_PLAYER = {

            entity,

            entityType,

            entitySlug:
                entity.slug,

            queue:
                mediaQueue

        };

    }
);


/* ============================================================
   🟢 UPGRADE: PRODUCT INFORMATION
   ============================================================ */

function injectProductInformation(
    product
) {

    let container =
        document.getElementById(
            "riverProductInformation"
        );


    if (!container) {

        container =
            document.createElement(
                "section"
            );

        container.id =
            "riverProductInformation";

        container.className =
            "river-product-information";


        const mediaPlayer =
            document.querySelector(
                ".media-player"
            ) ||
            document.querySelector(
                "main"
            ) ||
            document.body;


        mediaPlayer.appendChild(
            container
        );

    }


    container.innerHTML = `

        <div class="river-product-information-inner">

            <p class="eyebrow">
                RIVER PRODUCT
            </p>

            <h2>
                ${escapeHTML(
                    product.title
                )}
            </h2>

            ${
                product.tagline
                    ? `
                        <p class="product-player-tagline">
                            ${escapeHTML(
                                product.tagline
                            )}
                        </p>
                    `
                    : ""
            }


            <div class="product-player-meta">

                <span>
                    ${
                        escapeHTML(
                            product.category ||
                            "PRODUCT"
                        )
                    }
                </span>

                <span>
                    ${
                        escapeHTML(
                            product.status ||
                            ""
                        )
                    }
                </span>

                <span>
                    ${
                        escapeHTML(
                            (
                                product.deployment ||
                                []
                            ).join(
                                " · "
                            )
                        )
                    }
                </span>

            </div>


            <div class="product-player-story">

                ${
                    product.problemStatement
                        ? `
                            <div>

                                <strong>
                                    THE PROBLEM
                                </strong>

                                <p>
                                    ${escapeHTML(
                                        product.problemStatement
                                    )}
                                </p>

                            </div>
                        `
                        : ""
                }


                ${
                    product.outcome
                        ? `
                            <div>

                                <strong>
                                    THE OUTCOME
                                </strong>

                                <p>
                                    ${escapeHTML(
                                        product.outcome
                                    )}
                                </p>

                            </div>
                        `
                        : ""
                }

            </div>


            <div class="product-player-data">

                <div>

                    <h3>
                        Capabilities
                    </h3>

                    <div class="technology-tags">

                        ${
                            (
                                product.capabilities ||
                                []
                            )
                                .map(
                                    item =>
                                        `<span>${escapeHTML(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div>

                    <h3>
                        Features
                    </h3>

                    <div class="technology-tags">

                        ${
                            (
                                product.features ||
                                []
                            )
                                .map(
                                    item =>
                                        `<span>${escapeHTML(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div>

                    <h3>
                        Architecture
                    </h3>

                    <div class="architecture-flow">

                        ${
                            (
                                product.architecture ||
                                []
                            )
                                .map(
                                    (item, index) => `

                                        <div class="architecture-step">

                                            <span>
                                                ${String(
                                                    index + 1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <strong>
                                                ${escapeHTML(
                                                    item
                                                )}
                                            </strong>

                                        </div>

                                    `
                                )
                                .join("")
                        }

                    </div>

                </div>

            </div>


            <div class="product-player-actions">

                <a
                    href="product.html?product=${encodeURIComponent(
                        product.slug
                    )}"
                    class="btn"
                >
                    View Product
                </a>

                <a
                    href="contact.html"
                    class="btn"
                >
                    Request Demo
                </a>

            </div>

        </div>

    `;

}


/* ============================================================
   🟢 UPGRADE: CASE STUDY
   ============================================================ */

function injectCaseStudy(
    project
) {

    let container =
        document.getElementById(
            "riverCaseStudy"
        );


    if (!container) {

        container =
            document.createElement(
                "section"
            );

        container.id =
            "riverCaseStudy";

        container.className =
            "river-case-study";


        const mediaPlayer =
            document.querySelector(
                ".media-player"
            ) ||
            document.querySelector(
                "main"
            ) ||
            document.body;


        mediaPlayer.appendChild(
            container
        );

    }


    const study =
        project.caseStudy ||
        {};


    container.innerHTML = `

        <div class="river-case-study-inner">

            <div class="case-study-header">

                <p class="eyebrow">
                    PROJECT CASE STUDY
                </p>

                <h2>
                    ${escapeHTML(
                        project.title
                    )}
                </h2>

                <div class="project-meta">

                    <span>
                        ${
                            escapeHTML(
                                project.type ||
                                "PROJECT"
                            )
                        }
                    </span>

                    <span>
                        ${
                            escapeHTML(
                                project.status ||
                                ""
                            )
                        }
                    </span>

                    <span>
                        ${
                            escapeHTML(
                                (
                                    project.industry ||
                                    []
                                ).join(
                                    " · "
                                )
                            )
                        }
                    </span>

                </div>

            </div>


            <div class="case-study-story">

                ${
                    renderStoryBlock(
                        "THE PROBLEM",
                        study.challenge
                    )
                }

                ${
                    renderStoryBlock(
                        "OUR APPROACH",
                        study.approach
                    )
                }

                ${
                    renderStoryBlock(
                        "THE SOLUTION",
                        study.solution
                    )
                }

                ${
                    renderStoryBlock(
                        "THE RESULT",
                        study.result
                    )
                }

            </div>


            <div class="case-study-data">

                <div>

                    <h3>
                        Technologies
                    </h3>

                    <div class="technology-tags">

                        ${
                            (
                                project.technologies ||
                                []
                            )
                                .map(
                                    item =>
                                        `<span>${escapeHTML(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div>

                    <h3>
                        Capabilities
                    </h3>

                    <div class="technology-tags">

                        ${
                            (
                                project.capabilities ||
                                []
                            )
                                .map(
                                    item =>
                                        `<span>${escapeHTML(item)}</span>`
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div>

                    <h3>
                        Architecture
                    </h3>

                    <div class="architecture-flow">

                        ${
                            (
                                project.architecture ||
                                []
                            )
                                .map(
                                    (item, index) => `

                                        <div class="architecture-step">

                                            <span>
                                                ${String(
                                                    index + 1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <strong>
                                                ${escapeHTML(
                                                    item
                                                )}
                                            </strong>

                                        </div>

                                    `
                                )
                                .join("")
                        }

                    </div>

                </div>


                <div>

                    <h3>
                        Development Process
                    </h3>

                    <div class="architecture-flow">

                        ${
                            (
                                project.process ||
                                []
                            )
                                .map(
                                    (item, index) => `

                                        <div class="architecture-step">

                                            <span>
                                                ${String(
                                                    index + 1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <strong>
                                                ${escapeHTML(
                                                    item
                                                )}
                                            </strong>

                                        </div>

                                    `
                                )
                                .join("")
                        }

                    </div>

                </div>

            </div>


            <div
                id="riverRelatedProjects"
                class="related-projects"
            ></div>

        </div>

    `;


    renderRelatedProjects(
        project
    );

}


/* ============================================================
   🟢 UPGRADE: STORY BLOCK
   ============================================================ */

function renderStoryBlock(
    title,
    content
) {

    if (!content) {
        return "";
    }


    return `

        <div>

            <strong>
                ${title}
            </strong>

            <p>
                ${escapeHTML(
                    content
                )}
            </p>

        </div>

    `;

}


/* ============================================================
   RELATED PROJECTS
   ============================================================ */

function renderRelatedProjects(
    project
) {

    const container =
        document.getElementById(
            "riverRelatedProjects"
        );


    if (!container) {
        return;
    }


    const related =
        window.getRelatedRiverProjects
            ? window.getRelatedRiverProjects(
                project.slug,
                3
            )
            : [];


    if (!related.length) {

        container.innerHTML =
            "";

        return;

    }


    container.innerHTML = `

        <h3>
            Related Projects
        </h3>

        <div class="related-project-grid">

            ${
                related
                    .map(
                        item => `

                            <a
                                href="mediaPlayer.html?project=${encodeURIComponent(
                                    item.slug
                                )}"
                                class="related-project"
                            >

                                <strong>
                                    ${escapeHTML(
                                        item.title
                                    )}
                                </strong>

                                <span>
                                    ${
                                        escapeHTML(
                                            item.type ||
                                            "PROJECT"
                                        )
                                    }
                                </span>

                            </a>

                        `
                    )
                    .join("")
            }

        </div>

    `;

}


/* ============================================================
   🟢 UPGRADE: MEDIA QUEUE
   ============================================================ */

function buildMediaQueue(
    entity,
    entityType
) {

    if (
        !entity ||
        !Array.isArray(
            entity.media
        )
    ) {

        return [];

    }


    return entity.media

        .filter(
            window.isValidRiverMedia ||
            (
                item =>
                    item &&
                    item.src &&
                    (
                        item.type === "image" ||
                        item.type === "video"
                    )
            )
        )

        .map(
            (item, index) => ({

                id:
                    item.id ||
                    `${entity.slug}-media-${index + 1}`,

                type:
                    item.type,

                src:
                    item.src,

                title:
                    item.title ||
                    `Media ${index + 1}`,

                category:
                    item.category ||
                    (
                        entityType ===
                        "product"
                            ? "Product"
                            : "Project"
                    ),

                index,

                entity:
                    entity.slug,

                entityType

            })
        );

}


/* ============================================================
   PRELOAD
   ============================================================ */

async function preloadMediaQueue(
    queue
) {

    const results =
        await Promise.all(

            queue.map(
                async (
                    item,
                    index
                ) => {

                    updateQueueStatus(
                        `Loading ${index + 1} of ${queue.length}...`
                    );


                    try {

                        if (
                            item.type ===
                            "image"
                        ) {

                            await preloadImage(
                                item.src
                            );

                        }


                        if (
                            item.type ===
                            "video"
                        ) {

                            await preloadVideo(
                                item.src
                            );

                        }


                        return {

                            ...item,

                            ready:
                                true

                        };

                    } catch (error) {

                        console.warn(
                            "River: Media failed:",
                            item.src
                        );


                        return {

                            ...item,

                            ready:
                                false

                        };

                    }

                }
            )

        );


    queue.length =
        0;


    results
        .filter(
            item =>
                item.ready
        )
        .forEach(
            item =>
                queue.push(
                    item
                )
        );


    return queue;

}


/* ============================================================
   IMAGE PRELOAD
   ============================================================ */

function preloadImage(
    src
) {

    return new Promise(
        (
            resolve,
            reject
        ) => {

            const image =
                new Image();


            image.onload =
                () =>
                    resolve(
                        image
                    );


            image.onerror =
                () =>
                    reject(
                        new Error(
                            `Image failed: ${src}`
                        )
                    );


            image.src =
                src;

        }
    );

}


/* ============================================================
   VIDEO PRELOAD
   ============================================================ */

function preloadVideo(
    src
) {

    return new Promise(
        (
            resolve,
            reject
        ) => {

            const video =
                document.createElement(
                    "video"
                );


            let finished =
                false;


            const cleanup =
                () => {

                    video.removeEventListener(
                        "loadedmetadata",
                        onReady
                    );

                    video.removeEventListener(
                        "error",
                        onError
                    );

                };


            const onReady =
                () => {

                    if (finished) {
                        return;
                    }


                    finished =
                        true;


                    cleanup();


                    resolve();

                };


            const onError =
                () => {

                    if (finished) {
                        return;
                    }


                    finished =
                        true;


                    cleanup();


                    reject(
                        new Error(
                            `Video failed: ${src}`
                        )
                    );

                };


            video.preload =
                "metadata";

            video.muted =
                true;

            video.playsInline =
                true;


            video.addEventListener(
                "loadedmetadata",
                onReady
            );


            video.addEventListener(
                "error",
                onError
            );


            video.src =
                src;


            video.load();

        }
    );

}


/* ============================================================
   BUILD SLIDES
   ============================================================ */

function buildMediaSlides(
    queue,
    wrapper
) {

    wrapper.innerHTML =
        "";


    queue.forEach(
        item => {

            const slide =
                document.createElement(
                    "div"
                );


            slide.className =
                "swiper-slide";


            slide.dataset.mediaId =
                item.id;


            slide.dataset.mediaType =
                item.type;


            slide.dataset.mediaIndex =
                item.index;


            if (
                item.type ===
                "image"
            ) {

                slide.innerHTML = `

                    <img
                        src="${escapeHTML(item.src)}"
                        class="media-img"
                        alt="${escapeHTML(item.title)}"
                        draggable="false"
                    />

                    <div class="media-caption">

                        <strong>
                            ${escapeHTML(item.title)}
                        </strong>

                        <span>
                            ${escapeHTML(item.category)}
                        </span>

                    </div>

                `;

            }


            if (
                item.type ===
                "video"
            ) {

                slide.innerHTML = `

                    <div class="video-container">

                        <video
                            class="media-video"
                            playsinline
                            muted
                            preload="auto"
                        >

                            <source
                                src="${escapeHTML(item.src)}"
                                type="video/mp4"
                            />

                        </video>


                        <div class="video-controls">

                            <button
                                class="play-btn"
                                type="button"
                            >
                                ▶
                            </button>


                            <input
                                type="range"
                                class="progress"
                                min="0"
                                max="100"
                                value="0"
                                step="0.1"
                            />


                            <button
                                class="mute-btn"
                                type="button"
                            >
                                🔇
                            </button>

                        </div>


                        <div class="media-caption">

                            <strong>
                                ${escapeHTML(item.title)}
                            </strong>

                            <span>
                                ${escapeHTML(item.category)}
                            </span>

                        </div>

                    </div>

                `;

            }


            wrapper.appendChild(
                slide
            );

        }
    );

}


/* ============================================================
   INITIALIZE SWIPER
   ============================================================ */

function initializePlayer(
    mediaQueue
) {

    if (
        typeof Swiper ===
        "undefined"
    ) {

        console.error(
            "River Media Player: Swiper is not loaded."
        );

        return;

    }


    const swiper =
        new Swiper(
            ".media-swiper",
            {

                loop:
                    mediaQueue.length > 1,

                speed:
                    900,

                grabCursor:
                    true,

                effect:
                    "fade",

                fadeEffect: {

                    crossFade:
                        true

                },

                autoplay: {

                    delay:
                        3000,

                    disableOnInteraction:
                        false

                },

                pagination: {

                    el:
                        ".swiper-pagination",

                    clickable:
                        true

                },

                navigation: {

                    nextEl:
                        ".swiper-button-next",

                    prevEl:
                        ".swiper-button-prev"

                },

                watchSlidesProgress:
                    true,

                on: {

                    init() {

                        handleMedia(
                            this
                        );

                    },

                    slideChangeTransitionStart() {

                        handleMedia(
                            this
                        );

                    }

                }

            }
        );


    if (
        window.RIVER_MEDIA_PLAYER
    ) {

        window.RIVER_MEDIA_PLAYER.swiper =
            swiper;

    }


    document.addEventListener(
        "click",
        event => {

            const activeSlide =
                document.querySelector(
                    ".swiper-slide-active"
                );


            if (!activeSlide) {
                return;
            }


            const video =
                activeSlide.querySelector(
                    "video"
                );


            if (!video) {
                return;
            }


            if (
                event.target.classList.contains(
                    "play-btn"
                )
            ) {

                if (
                    video.paused
                ) {

                    video.play()
                        .catch(
                            () => {}
                        );

                } else {

                    video.pause();

                }

                return;

            }


            if (
                event.target.classList.contains(
                    "mute-btn"
                )
            ) {

                video.muted =
                    !video.muted;


                event.target.textContent =
                    video.muted
                        ? "🔇"
                        : "🔊";


                return;

            }


            if (
                !event.target.closest(
                    ".video-controls"
                )
            ) {

                if (
                    video.paused
                ) {

                    video.play()
                        .catch(
                            () => {}
                        );

                } else {

                    video.pause();

                }

            }

        }
    );

}


/* ============================================================
   SMART MEDIA
   ============================================================ */

function handleMedia(
    swiper
) {

    document
        .querySelectorAll(
            ".media-video"
        )
        .forEach(
            video => {

                video.pause();

            }
        );


    const activeSlide =
        swiper.slides[
            swiper.activeIndex
        ];


    if (!activeSlide) {
        return;
    }


    const video =
        activeSlide.querySelector(
            "video"
        );


    if (video) {

        swiper.autoplay.stop();


        video.currentTime =
            0;


        video.muted =
            true;


        video.play()
            .catch(
                () => {}
            );


        setupVideoControls(
            activeSlide,
            video
        );


        if (
            !video.dataset.endHandlerAttached
        ) {

            video.addEventListener(
                "ended",
                () => {

                    swiper.slideNext();

                }
            );


            video.dataset.endHandlerAttached =
                "true";

        }

    } else {

        swiper.autoplay.start();

    }

}


/* ============================================================
   VIDEO CONTROLS
   ============================================================ */

function setupVideoControls(
    slide,
    video
) {

    const progress =
        slide.querySelector(
            ".progress"
        );


    const playBtn =
        slide.querySelector(
            ".play-btn"
        );


    const muteBtn =
        slide.querySelector(
            ".mute-btn"
        );


    if (
        video.dataset.controlsAttached
    ) {

        return;

    }


    video.dataset.controlsAttached =
        "true";


    video.addEventListener(
        "timeupdate",
        () => {

            if (
                !video.duration ||
                !progress
            ) {

                return;

            }


            const percent =
                (
                    video.currentTime /
                    video.duration
                ) * 100;


            progress.value =
                percent ||
                0;

        }
    );


    if (progress) {

        progress.addEventListener(
            "input",
            () => {

                if (!video.duration) {
                    return;
                }


                video.currentTime =
                    (
                        progress.value /
                        100
                    ) *
                    video.duration;

            }
        );

    }


    video.addEventListener(
        "play",
        () => {

            if (playBtn) {

                playBtn.textContent =
                    "⏸";

            }

        }
    );


    video.addEventListener(
        "pause",
        () => {

            if (playBtn) {

                playBtn.textContent =
                    "▶";

            }

        }
    );


    video.addEventListener(
        "volumechange",
        () => {

            if (!muteBtn) {
                return;
            }


            muteBtn.textContent =
                video.muted
                    ? "🔇"
                    : "🔊";

        }
    );

}


/* ============================================================
   QUEUE STATUS
   ============================================================ */

function updateQueueStatus(
    message
) {

    const element =
        document.getElementById(
            "mediaQueueStatus"
        );


    if (!element) {
        return;
    }


    element.textContent =
        message;

}


/* ============================================================
   PLAYER ERROR
   ============================================================ */

function showPlayerError(
    message
) {

    const wrapper =
        document.getElementById(
            "mediaWrapper"
        );


    if (wrapper) {

        wrapper.innerHTML = `

            <div class="media-player-error">

                <p>
                    ${escapeHTML(message)}
                </p>

                <a
                    href="products.html"
                    class="btn"
                >
                    Back to Products
                </a>

            </div>

        `;

    }


    updateQueueStatus(
        "Unable to load media"
    );


    console.error(
        "River Media Player:",
        message
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