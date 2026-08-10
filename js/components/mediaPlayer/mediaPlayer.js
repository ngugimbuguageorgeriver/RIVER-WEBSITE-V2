/**
 * ============================================================
 * mediaPlayer.js
 * ============================================================
 *
 * RIVER SMART PROJECT MEDIA PLAYER
 *
 * 🟢 UPGRADE:
 *
 * The player now automatically:
 *
 * 1. Detects project from URL
 * 2. Finds project in RIVER_PROJECTS
 * 3. Extracts project media
 * 4. Creates a media queue
 * 5. Validates queue items
 * 6. Preloads media
 * 7. Builds Swiper slides
 * 8. Initializes Swiper
 * 9. Plays the active item
 *
 * Example:
 *
 * mediaPlayer.html?project=web-ecommerce
 *
 *                    ↓
 *
 * RIVER_PROJECTS["web-ecommerce"]
 *
 *                    ↓
 *
 * media queue:
 *
 * [image, video, image]
 *
 *                    ↓
 *
 * ready for playback
 *
 * ============================================================
 */


document.addEventListener(
    "DOMContentLoaded",
    async () => {


        /* ====================================================
           ELEMENTS
           ==================================================== */

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



        /* ====================================================
           SAFETY CHECK
           ==================================================== */

        if (!wrapper) {

            console.error(
                "River Media Player: mediaWrapper not found."
            );

            return;

        }



        /* ====================================================
           🟢 UPGRADE:
           READ PROJECT FROM URL
           ==================================================== */

        const params =
            new URLSearchParams(
                window.location.search
            );


        let projectSlug =
            params.get("project");



        /* ====================================================
           🟢 UPGRADE:
           SESSION STORAGE FALLBACK
           ==================================================== */

        if (!projectSlug) {

            projectSlug =
                sessionStorage.getItem(
                    "river_project_slug"
                );

        }



        /* ====================================================
           🟢 UPGRADE:
           NORMALIZE SLUG
           ==================================================== */

        if (projectSlug) {

            projectSlug =
                projectSlug
                    .toLowerCase()
                    .trim();

        }



        /* ====================================================
           PROJECT DETECTION
           ==================================================== */

        console.log(
            "River Media Player: Detecting project:",
            projectSlug
        );



        /* ====================================================
           🟢 UPGRADE:
           PROJECT LOOKUP
           ==================================================== */

        let project = null;


        if (
            projectSlug &&
            typeof window.getRiverProject === "function"
        ) {

            project =
                window.getRiverProject(
                    projectSlug
                );

        }



        /* ====================================================
           FALLBACK PROJECT DATA
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
                "River Media Player: Could not parse fallback media.",
                error
            );

        }



        /* ====================================================
           🟢 UPGRADE:
           BUILD PROJECT OBJECT FROM FALLBACK
           ==================================================== */

        if (!project && fallbackMedia.length) {

            project = {

                slug:
                    projectSlug ||
                    "session-project",

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

                media:
                    fallbackMedia

            };

        }



        /* ====================================================
           PROJECT NOT FOUND
           ==================================================== */

        if (!project) {

            showPlayerError(
                "No project was found."
            );

            return;

        }



        /* ====================================================
           🟢 UPGRADE:
           UPDATE PROJECT HEADER
           ==================================================== */

        if (titleEl) {

            titleEl.textContent =
                project.title ||
                "River";

        }



        /* ====================================================
           DESCRIPTION
           ==================================================== */

        if (descEl) {

            descEl.textContent =
                project.desc ||
                sessionStorage.getItem(
                    "river_full_desc"
                ) ||
                "";

        }



        /* ====================================================
           🟢 UPGRADE:
           CREATE MEDIA QUEUE
           ==================================================== */

        const mediaQueue =
            buildMediaQueue(
                project
            );



        console.log(
            "River Media Player: Media queue created:",
            mediaQueue
        );



        /* ====================================================
           QUEUE EMPTY
           ==================================================== */

        if (!mediaQueue.length) {

            showPlayerError(
                `No media found for "${project.title}".`
            );

            return;

        }



        /* ====================================================
           🟢 UPGRADE:
           DISPLAY QUEUE SIZE
           ==================================================== */

        updateQueueStatus(
            `Preparing ${mediaQueue.length} media item${
                mediaQueue.length === 1 ? "" : "s"
            }...`
        );



        /* ====================================================
           🟢 UPGRADE:
           PRELOAD MEDIA
           ==================================================== */

        await preloadMediaQueue(
            mediaQueue,
            queueStatusEl
        );



        /* ====================================================
           🟢 UPGRADE:
           BUILD SWIPER SLIDES
           ==================================================== */

        buildMediaSlides(
            mediaQueue,
            wrapper
        );



        /* ====================================================
           🟢 UPGRADE:
           QUEUE IS READY
           ==================================================== */

        updateQueueStatus(
            `${mediaQueue.length} media item${
                mediaQueue.length === 1 ? "" : "s"
            } ready`
        );



        /* ====================================================
           🟢 UPGRADE:
           INITIALIZE PLAYER
           ==================================================== */

        initializePlayer(
            mediaQueue
        );



        /* ====================================================
           🟢 UPGRADE:
           PLAYER IS READY
           ==================================================== */

        setTimeout(() => {

            updateQueueStatus(
                "Ready"
            );

        }, 500);



        /* ====================================================
           🟢 UPGRADE:
           EXPOSE PLAYER QUEUE GLOBALLY
           
           Useful later if you want:
           
           - external play button
           - next project
           - queue UI
           - playlist
           - analytics
           ==================================================== */

        window.RIVER_MEDIA_PLAYER = {

            project: project,

            projectSlug:
                project.slug,

            queue:
                mediaQueue

        };


    }
);




/* ============================================================
   🟢 UPGRADE:
   BUILD MEDIA QUEUE
   ============================================================ */

function buildMediaQueue(project) {


    if (!project) {
        return [];
    }


    if (!Array.isArray(project.media)) {
        return [];
    }


    return project.media

        .filter(item => {

            return (
                item &&
                item.src &&
                (
                    item.type === "image" ||
                    item.type === "video"
                )
            );

        })

        .map((item, index) => {

            return {

                id:
                    item.id ||
                    `${project.slug}-media-${index + 1}`,

                type:
                    item.type,

                src:
                    item.src,

                index:
                    index,

                project:
                    project.slug

            };

        });

}




/* ============================================================
   🟢 UPGRADE:
   PRELOAD ENTIRE MEDIA QUEUE
   ============================================================ */

async function preloadMediaQueue(
    queue,
    statusElement
) {


    const preloadPromises =
        queue.map(
            async (item, index) => {


                updateQueueStatus(
                    `Loading ${index + 1} of ${queue.length}...`
                );


                try {

                    if (
                        item.type === "image"
                    ) {

                        await preloadImage(
                            item.src
                        );

                    }


                    if (
                        item.type === "video"
                    ) {

                        await preloadVideo(
                            item.src
                        );

                    }


                    return {

                        ...item,

                        ready: true

                    };

                } catch (error) {

                    console.warn(
                        `River: Media failed to preload: ${item.src}`,
                        error
                    );


                    return {

                        ...item,

                        ready: false

                    };

                }

            }
        );


    const results =
        await Promise.all(
            preloadPromises
        );


    /* ========================================================
       🟢 UPGRADE:
       REMOVE FAILED ITEMS
       ======================================================== */

    queue.length = 0;


    results

        .filter(
            item => item.ready
        )

        .forEach(
            item => queue.push(item)
        );


    return queue;

}




/* ============================================================
   🟢 UPGRADE:
   IMAGE PRELOADER
   ============================================================ */

function preloadImage(src) {


    return new Promise(
        (resolve, reject) => {


            const img =
                new Image();


            img.onload =
                () => resolve(img);


            img.onerror =
                () =>
                    reject(
                        new Error(
                            `Image failed: ${src}`
                        )
                    );


            img.src = src;

        }
    );

}




/* ============================================================
   🟢 UPGRADE:
   VIDEO PRELOADER
   ============================================================ */

function preloadVideo(src) {


    return new Promise(
        (resolve, reject) => {


            const video =
                document.createElement(
                    "video"
                );


            let finished = false;


            const cleanup = () => {

                video.removeEventListener(
                    "loadedmetadata",
                    onReady
                );

                video.removeEventListener(
                    "error",
                    onError
                );

            };


            const onReady = () => {

                if (finished) {
                    return;
                }


                finished = true;


                cleanup();


                video.remove();

                resolve();

            };


            const onError = () => {

                if (finished) {
                    return;
                }


                finished = true;


                cleanup();


                video.remove();

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
   🟢 UPGRADE:
   BUILD MEDIA SLIDES
   ============================================================ */

function buildMediaSlides(
    queue,
    wrapper
) {


    wrapper.innerHTML = "";


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



            /* =================================================
               IMAGE
               ================================================= */

            if (
                item.type === "image"
            ) {

                slide.innerHTML = `

                    <img

                        src="${item.src}"

                        class="media-img"

                        alt="River project media"

                        draggable="false"

                    />

                `;

            }



            /* =================================================
               VIDEO
               ================================================= */

            if (
                item.type === "video"
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
                                src="${item.src}"
                                type="video/mp4"
                            >

                        </video>



                        <!-- ====================================
                             CUSTOM CONTROLS
                             ==================================== -->

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

                            >



                            <button
                                class="mute-btn"
                                type="button"
                            >
                                🔇
                            </button>


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
   🟢 UPGRADE:
   INITIALIZE SWIPER
   ============================================================ */

function initializePlayer(
    mediaQueue
) {


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


                watchSlidesProgress:
                    true,


                navigation: {

                    nextEl:
                        ".swiper-button-next",

                    prevEl:
                        ".swiper-button-prev"

                },


                on: {


                    init: function() {

                        handleMedia(
                            this
                        );

                    },


                    slideChangeTransitionStart:
                        function() {

                            handleMedia(
                                this
                            );

                        }

                }

            }
        );



    /* ========================================================
       🟢 UPGRADE:
       STORE SWIPER INSTANCE
       ======================================================== */

    window.RIVER_MEDIA_PLAYER.swiper =
        swiper;



    /* ========================================================
       VIDEO / PLAYER CONTROLS
       ======================================================== */

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



            /* =================================================
               PLAY BUTTON
               ================================================= */

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



            /* =================================================
               MUTE BUTTON
               ================================================= */

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



            /* =================================================
               TAP VIDEO / MEDIA AREA
               ================================================= */

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
   🟢 UPGRADE:
   SMART MEDIA CONTROL
   ============================================================ */

function handleMedia(
    swiper
) {


    /* ========================================================
       PAUSE EVERY VIDEO
       ======================================================== */

    document
        .querySelectorAll(
            ".media-video"
        )
        .forEach(
            video => {

                video.pause();

            }
        );



    /* ========================================================
       GET ACTIVE SLIDE
       ======================================================== */

    const activeSlide =
        swiper.slides[
            swiper.activeIndex
        ];


    if (!activeSlide) {
        return;
    }



    /* ========================================================
       ACTIVE VIDEO
       ======================================================== */

    const video =
        activeSlide.querySelector(
            "video"
        );



    /* ========================================================
       VIDEO MODE
       ======================================================== */

    if (video) {


        /* ================================================
           STOP IMAGE AUTOPLAY
           ================================================ */

        swiper.autoplay.stop();



        /* ================================================
           RESET VIDEO
           ================================================ */

        video.currentTime =
            0;


        video.muted =
            true;


        /* ================================================
           PLAY
           ================================================ */

        video.play()
            .catch(
                () => {}
            );



        /* ================================================
           CONTROLS
           ================================================ */

        setupVideoControls(
            activeSlide,
            video
        );



        /* ================================================
           WHEN VIDEO ENDS
           ================================================ */

        if (
            !video.dataset.endHandlerAttached
        ) {


            video.addEventListener(
                "ended",
                () => {


                    /*
                     * 🟢 UPGRADE:
                     * Automatically advance to the
                     * next queued media item.
                     */

                    swiper.slideNext();

                }
            );


            video.dataset.endHandlerAttached =
                "true";

        }


    } else {


        /* =================================================
           IMAGE MODE
           ================================================= */

        swiper.autoplay.start();

    }

}




/* ============================================================
   🟢 UPGRADE:
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



    /* ========================================================
       PREVENT DUPLICATE EVENT LISTENERS
       ======================================================== */

    if (
        video.dataset.controlsAttached
    ) {

        return;

    }


    video.dataset.controlsAttached =
        "true";



    /* ========================================================
       TIME UPDATE
       ======================================================== */

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
                percent || 0;


            /*
             * 🟢 UPGRADE:
             * Keep progress visual without requiring
             * a separate CSS system.
             */

            progress.style.background =
                `linear-gradient(
                    to right,
                    #ff7a00 ${percent}%,
                    rgba(255,255,255,0.3) ${percent}%
                )`;

        }
    );



    /* ========================================================
       SEEK
       ======================================================== */

    if (progress) {


        progress.addEventListener(
            "input",
            () => {


                if (
                    !video.duration
                ) {

                    return;

                }


                const time =
                    (
                        progress.value /
                        100
                    ) *
                    video.duration;


                video.currentTime =
                    time;

            }
        );

    }



    /* ========================================================
       PLAY STATE
       ======================================================== */

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



    /* ========================================================
       MUTE STATE
       ======================================================== */

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
   🟢 UPGRADE:
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
   🟢 UPGRADE:
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

            <div
                class="media-player-error"
            >

                <p>
                    ${message}
                </p>

                <a
                    href="index.html"
                    class="btn"
                >
                    Back to River
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