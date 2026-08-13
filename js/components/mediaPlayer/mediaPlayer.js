/**
 * ============================================================
 * mediaPlayer.js
 * ============================================================
 *
 * RIVER MEDIA EXPERIENCE
 *
 * Supports:
 *
 * PROJECT
 * PRODUCT
 *
 * URL:
 *
 * mediaPlayer.html?project=web-ecommerce
 * mediaPlayer.html?product=inventory-os
 *
 * ============================================================
 */


document.addEventListener(
    "DOMContentLoaded",
    async () => {

        const player = new RiverMediaPlayer();

        await player.init();

    }
);


/**
 * ============================================================
 * RIVER MEDIA PLAYER
 * ============================================================
 */

class RiverMediaPlayer {

    constructor() {

        this.wrapper =
            document.getElementById(
                "mediaWrapper"
            );

        this.titleEl =
            document.getElementById(
                "projectTitle"
            );

        this.descriptionEl =
            document.getElementById(
                "mediaDescription"
            );

        this.queueStatusEl =
            document.getElementById(
                "mediaQueueStatus"
            );

        this.counterEl =
            document.getElementById(
                "mediaCounter"
            );

        this.mediaTitleEl =
            document.getElementById(
                "mediaTitle"
            );

        this.mediaCategoryEl =
            document.getElementById(
                "mediaCategory"
            );

        this.infoButton =
            document.getElementById(
                "mediaInfoButton"
            );

        this.infoPanel =
            document.getElementById(
                "mediaInfoPanel"
            );

        this.infoContent =
            document.getElementById(
                "mediaInfoContent"
            );

        this.infoClose =
            document.getElementById(
                "mediaInfoClose"
            );

        this.infoScrim =
            document.getElementById(
                "mediaInfoScrim"
            );

        this.centerPlay =
            document.getElementById(
                "mediaCenterPlay"
            );

        this.videoControls =
            document.getElementById(
                "videoControls"
            );

        this.playButton =
            document.getElementById(
                "videoPlayButton"
            );

        this.muteButton =
            document.getElementById(
                "videoMuteButton"
            );

        this.progress =
            document.getElementById(
                "videoProgress"
            );

        this.volume =
            document.getElementById(
                "videoVolume"
            );

        this.currentTimeEl =
            document.getElementById(
                "videoCurrentTime"
            );

        this.durationEl =
            document.getElementById(
                "videoDuration"
            );

        this.fullscreenButton =
            document.getElementById(
                "videoFullscreenButton"
            );

        this.swiper =
            null;

        this.entity =
            null;

        this.entityType =
            "project";

        this.entitySlug =
            "";

        this.queue =
            [];

        this.currentMedia =
            null;

        this.isInfoOpen =
            false;

        this.autoplayDelay =
            4500;

        this.reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

    }


    /**
     * ========================================================
     * INIT
     * ========================================================
     */

    async init() {

        if (!this.wrapper) {

            console.error(
                "River Media Player: wrapper not found."
            );

            return;

        }


        this.resolveEntity();

        this.loadEntity();

        if (!this.entity) {

            this.showPlayerError(
                this.entityType === "product"
                    ? "No product was found."
                    : "No project was found."
            );

            return;

        }


        this.prepareEntityUI();

        this.queue =
            this.buildMediaQueue(
                this.entity
            );


        if (!this.queue.length) {

            this.showPlayerError(
                `No media found for "${this.entity.title}".`
            );

            return;

        }


        this.updateQueueStatus(
            `${this.queue.length} media items`
        );


        this.buildSlides();


        this.initializeSwiper();


        this.bindInterface();


        this.exposeGlobalState();


        this.preloadAdjacentMedia();


        this.fadeQueueStatus();

    }


    /**
     * ========================================================
     * RESOLVE ENTITY
     * ========================================================
     */

    resolveEntity() {

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


        if (requestedProduct) {

            this.entityType =
                "product";

            this.entitySlug =
                window.normalizeRiverProductSlug
                    ? window.normalizeRiverProductSlug(
                        requestedProduct
                    )
                    : requestedProduct;

            return;

        }


        if (requestedProject) {

            this.entityType =
                "project";

            this.entitySlug =
                window.normalizeRiverProjectSlug
                    ? window.normalizeRiverProjectSlug(
                        requestedProject
                    )
                    : requestedProject;

            return;

        }


        this.entityType =
            sessionStorage.getItem(
                "river_media_entity_type"
            ) ||
            "project";


        this.entitySlug =
            sessionStorage.getItem(
                "river_media_entity_slug"
            ) ||
            "";

    }


    /**
     * ========================================================
     * LOAD ENTITY
     * ========================================================
     */

    loadEntity() {

        if (
            this.entityType ===
            "product"
        ) {

            this.entity =
                window.getRiverProduct
                    ? window.getRiverProduct(
                        this.entitySlug
                    )
                    : null;

        } else {

            this.entity =
                window.getRiverProject
                    ? window.getRiverProject(
                        this.entitySlug
                    )
                    : null;

        }


        /**
         * SESSION FALLBACK
         */

        if (!this.entity) {

            try {

                const stored =
                    sessionStorage.getItem(
                        "river_media"
                    );


                const media =
                    stored
                        ? JSON.parse(stored)
                        : [];


                if (Array.isArray(media) && media.length) {

                    this.entity = {

                        slug:
                            this.entitySlug ||
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

                        tagline:
                            sessionStorage.getItem(
                                "river_project_tagline"
                            ) ||
                            "",

                        type:
                            this.entityType === "product"
                                ? "PRODUCT"
                                : "PROJECT",

                        media

                    };

                }

            } catch (error) {

                console.warn(
                    "River Media Player: session fallback unavailable.",
                    error
                );

            }

        }

    }


    /**
     * ========================================================
     * PREPARE ENTITY UI
     * ========================================================
     */

    prepareEntityUI() {

        const title =
            this.entity.title ||
            "River";


        const tagline =
            this.entity.tagline ||
            this.entity.desc ||
            "";


        if (this.titleEl) {

            this.titleEl.textContent =
                title;

        }


        if (this.descriptionEl) {

            this.descriptionEl.textContent =
                tagline;

        }


        this.renderInfoPanel();

    }


    /**
     * ========================================================
     * BUILD QUEUE
     * ========================================================
     */

    buildMediaQueue(entity) {

        if (
            !entity ||
            !Array.isArray(entity.media)
        ) {

            return [];

        }


        return entity.media

            .filter(
                item => {

                    if (
                        typeof window.isValidRiverMedia ===
                        "function"
                    ) {

                        return window.isValidRiverMedia(
                            item
                        );

                    }


                    return !!(
                        item &&
                        item.src &&
                        (
                            item.type === "image" ||
                            item.type === "video"
                        )
                    );

                }
            )

            .map(
                (item, index) => ({

                    ...item,

                    id:
                        item.id ||
                        `${entity.slug}-media-${index + 1}`,

                    title:
                        item.title ||
                        `Media ${index + 1}`,

                    category:
                        item.category ||
                        (
                            this.entityType === "product"
                                ? "Product"
                                : "Project"
                        ),

                    index,

                    entity:
                        entity.slug,

                    entityType:
                        this.entityType

                })
            );

    }


    /**
     * ========================================================
     * BUILD SLIDES
     * ========================================================
     */

    buildSlides() {

        this.wrapper.innerHTML =
            "";


        this.queue.forEach(
            (item, index) => {

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
                    String(index);


                const mediaLayer =
                    document.createElement(
                        "div"
                    );


                mediaLayer.className =
                    "media-layer";


                /**
                 * IMAGE
                 */

                if (
                    item.type ===
                    "image"
                ) {

                    const image =
                        document.createElement(
                            "img"
                        );


                    image.className =
                        "media-img";


                    image.alt =
                        item.title || "River media";


                    image.loading =
                        index === 0
                            ? "eager"
                            : "lazy";


                    image.decoding =
                        "async";


                    image.draggable =
                        false;


                    image.src =
                        item.src;


                    mediaLayer.appendChild(
                        image
                    );

                }


                /**
                 * VIDEO
                 */

                if (
                    item.type ===
                    "video"
                ) {

                    const container =
                        document.createElement(
                            "div"
                        );


                    container.className =
                        "video-container";


                    const video =
                        document.createElement(
                            "video"
                        );


                    video.className =
                        "media-video";


                    video.playsInline =
                        true;


                    video.muted =
                        true;


                    video.preload =
                        index === 0
                            ? "auto"
                            : "metadata";


                    video.setAttribute(
                        "aria-label",
                        item.title || "River video"
                    );


                    video.src =
                        item.src;


                    container.appendChild(
                        video
                    );


                    mediaLayer.appendChild(
                        container
                    );

                }


                /**
                 * MEDIA CAPTION
                 */

                const caption =
                    document.createElement(
                        "div"
                    );


                caption.className =
                    "media-caption";


                caption.innerHTML = `
                    <span class="media-caption-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                        <strong>
                            ${escapeHTML(item.title)}
                        </strong>

                        <span>
                            ${escapeHTML(item.category)}
                        </span>
                    </div>
                `;


                slide.appendChild(
                    mediaLayer
                );


                slide.appendChild(
                    caption
                );


                this.wrapper.appendChild(
                    slide
                );

            }
        );

    }


    /**
     * ========================================================
     * SWIPER
     * ========================================================
     */

    initializeSwiper() {

        if (
            typeof Swiper ===
            "undefined"
        ) {

            console.error(
                "River Media Player: Swiper unavailable."
            );

            return;

        }


        const autoplayEnabled =
            this.queue.length > 1;


        this.swiper =
            new Swiper(
                ".media-swiper",
                {

                    loop:
                        this.queue.length > 1,

                    speed:
                        this.reducedMotion
                            ? 250
                            : 800,

                    effect:
                        "fade",

                    fadeEffect: {
                        crossFade: true
                    },

                    grabCursor:
                        true,

                    keyboard: {
                        enabled:
                            true,
                        onlyInViewport:
                            true
                    },

                    navigation: {

                        nextEl:
                            ".swiper-button-next",

                        prevEl:
                            ".swiper-button-prev"

                    },

                    pagination: {

                        el:
                            ".swiper-pagination",

                        clickable:
                            true,

                        dynamicBullets:
                            true

                    },

                    autoplay:
                        autoplayEnabled
                            ? {
                                delay:
                                    this.autoplayDelay,

                                disableOnInteraction:
                                    false,

                                pauseOnMouseEnter:
                                    true
                            }
                            : false,

                    on: {

                        init:
                            swiper => {

                                this.onSlideChange(
                                    swiper
                                );

                            },

                        slideChangeTransitionStart:
                            swiper => {

                                this.onSlideChange(
                                    swiper
                                );

                            },

                        slideChangeTransitionEnd:
                            swiper => {

                                this.preloadAdjacentMedia();

                            }

                    }

                }
            );


        window.RIVER_MEDIA_PLAYER = {

            entity:
                this.entity,

            entityType:
                this.entityType,

            entitySlug:
                this.entitySlug,

            queue:
                this.queue,

            swiper:
                this.swiper

        };

    }


    /**
     * ========================================================
     * SLIDE CHANGE
     * ========================================================
     */

    onSlideChange(swiper) {

        this.pauseAllVideos();


        const realIndex =
            swiper.realIndex;


        const media =
            this.queue[
                realIndex
            ];


        if (!media) {
            return;
        }


        this.currentMedia =
            media;


        this.updateCounter(
            realIndex
        );


        this.updateMediaMeta(
            media
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
                ".media-video"
            );


        if (video) {

            this.showVideoControls(
                video
            );


            this.centerPlay.hidden =
                false;


            this.setPlayButtonState(
                false
            );


            video.currentTime =
                0;


            video.muted =
                true;


            if (
                this.autoplayAllowed()
            ) {

                video.play()
                    .then(
                        () => {

                            this.setPlayButtonState(
                                true
                            );

                        }
                    )
                    .catch(
                        () => {}
                    );

            }

            return;

        }


        this.hideVideoControls();

        this.centerPlay.hidden =
            true;


        this.swiperAutoplayStart();

    }


    /**
     * ========================================================
     * AUTOPLAY
     * ========================================================
     */

    autoplayAllowed() {

        return !document.hidden;

    }


    swiperAutoplayStart() {

        if (
            !this.swiper ||
            !this.swiper.autoplay
        ) {
            return;
        }


        if (
            this.queue.length > 1
        ) {

            this.swiper.autoplay.start();

        }

    }


    swiperAutoplayStop() {

        if (
            this.swiper &&
            this.swiper.autoplay
        ) {

            this.swiper.autoplay.stop();

        }

    }


    /**
     * ========================================================
     * PAUSE VIDEOS
     * ========================================================
     */

    pauseAllVideos() {

        document
            .querySelectorAll(
                ".media-video"
            )
            .forEach(
                video => {

                    try {

                        video.pause();

                    } catch (_) {}

                }
            );

    }


    /**
     * ========================================================
     * INTERFACE EVENTS
     * ========================================================
     */

    bindInterface() {

        /**
         * CENTER PLAY
         */

        this.centerPlay?.addEventListener(
            "click",
            () => {

                const video =
                    this.getActiveVideo();


                if (!video) {
                    return;
                }


                this.toggleVideo(
                    video
                );

            }
        );


        /**
         * VIDEO PLAY
         */

        this.playButton?.addEventListener(
            "click",
            () => {

                const video =
                    this.getActiveVideo();


                if (!video) {
                    return;
                }


                this.toggleVideo(
                    video
                );

            }
        );


        /**
         * MUTE
         */

        this.muteButton?.addEventListener(
            "click",
            () => {

                const video =
                    this.getActiveVideo();


                if (!video) {
                    return;
                }


                video.muted =
                    !video.muted;


                if (!video.muted && video.volume === 0) {

                    video.volume =
                        0.8;

                    if (this.volume) {

                        this.volume.value =
                            "0.8";

                    }

                }


                this.updateMuteButton(
                    video
                );

            }
        );


        /**
         * PROGRESS
         */

        this.progress?.addEventListener(
            "input",
            () => {

                const video =
                    this.getActiveVideo();


                if (
                    !video ||
                    !video.duration
                ) {

                    return;

                }


                video.currentTime =
                    (
                        Number(
                            this.progress.value
                        ) / 100
                    ) *
                    video.duration;

            }
        );


        /**
         * VOLUME
         */

        this.volume?.addEventListener(
            "input",
            () => {

                const video =
                    this.getActiveVideo();


                if (!video) {
                    return;
                }


                const value =
                    Number(
                        this.volume.value
                    );


                video.volume =
                    value;


                video.muted =
                    value === 0;


                this.updateMuteButton(
                    video
                );

            }
        );


        /**
         * FULLSCREEN
         */

        this.fullscreenButton?.addEventListener(
            "click",
            () => {

                this.toggleFullscreen();

            }
        );


        /**
         * INFO
         */

        this.infoButton?.addEventListener(
            "click",
            () => {

                this.toggleInfoPanel();

            }
        );


        this.infoClose?.addEventListener(
            "click",
            () => {

                this.closeInfoPanel();

            }
        );


        this.infoScrim?.addEventListener(
            "click",
            () => {

                this.closeInfoPanel();

            }
        );


        /**
         * KEYBOARD
         */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.target.matches(
                        "input, textarea, button"
                    ) &&
                    event.key !== " "
                ) {

                    return;

                }


                switch (
                    event.key.toLowerCase()
                ) {

                    case " ":

                        event.preventDefault();

                        const video =
                            this.getActiveVideo();


                        if (video) {

                            this.toggleVideo(
                                video
                            );

                        }

                        break;


                    case "m":

                        const activeVideo =
                            this.getActiveVideo();


                        if (activeVideo) {

                            activeVideo.muted =
                                !activeVideo.muted;

                            this.updateMuteButton(
                                activeVideo
                            );

                        }

                        break;


                    case "f":

                        this.toggleFullscreen();

                        break;


                    case "escape":

                        this.closeInfoPanel();

                        break;

                }

            }
        );


        /**
         * TAB VISIBILITY
         */

        document.addEventListener(
            "visibilitychange",
            () => {

                if (document.hidden) {

                    this.pauseAllVideos();

                    this.swiperAutoplayStop();

                } else {

                    this.onSlideChange(
                        this.swiper
                    );

                }

            }
        );


        /**
         * VIDEO EVENTS
         */

        document.addEventListener(
            "timeupdate",
            event => {

                if (
                    !event.target.matches(
                        ".media-video"
                    )
                ) {

                    return;

                }


                this.updateVideoTime(
                    event.target
                );

            },
            true
        );


        document.addEventListener(
            "loadedmetadata",
            event => {

                if (
                    !event.target.matches(
                        ".media-video"
                    )
                ) {

                    return;

                }


                this.updateVideoDuration(
                    event.target
                );

            },
            true
        );


        document.addEventListener(
            "play",
            event => {

                if (
                    !event.target.matches(
                        ".media-video"
                    )
                ) {

                    return;

                }


                this.swiperAutoplayStop();

                this.setPlayButtonState(
                    true
                );

            },
            true
        );


        document.addEventListener(
            "pause",
            event => {

                if (
                    !event.target.matches(
                        ".media-video"
                    )
                ) {

                    return;

                }


                this.setPlayButtonState(
                    false
                );

            },
            true
        );


        document.addEventListener(
            "ended",
            event => {

                if (
                    !event.target.matches(
                        ".media-video"
                    )
                ) {

                    return;

                }


                this.setPlayButtonState(
                    false
                );


                if (
                    this.swiper &&
                    this.queue.length > 1
                ) {

                    this.swiper.slideNext();

                }

            },
            true
        );


        /**
         * IMAGE ERROR
         */

        document.addEventListener(
            "error",
            event => {

                const image =
                    event.target;


                if (
                    !image.matches?.(
                        ".media-img"
                    )
                ) {

                    return;

                }


                image.classList.add(
                    "media-failed"
                );

            },
            true
        );

    }


    /**
     * ========================================================
     * TOGGLE VIDEO
     * ========================================================
     */

    toggleVideo(video) {

        if (
            video.paused
        ) {

            this.swiperAutoplayStop();


            video.play()
                .then(
                    () => {

                        this.setPlayButtonState(
                            true
                        );

                    }
                )
                .catch(
                    () => {}
                );

        } else {

            video.pause();

        }

    }


    /**
     * ========================================================
     * ACTIVE VIDEO
     * ========================================================
     */

    getActiveVideo() {

        return document.querySelector(
            ".swiper-slide-active .media-video"
        );

    }


    /**
     * ========================================================
     * BUTTON STATE
     * ========================================================
     */

    setPlayButtonState(
        playing
    ) {

        if (this.playButton) {

            this.playButton.textContent =
                playing
                    ? "⏸"
                    : "▶";

            this.playButton.setAttribute(
                "aria-label",
                playing
                    ? "Pause"
                    : "Play"
            );

        }


        if (this.centerPlay) {

            const icon =
                this.centerPlay.querySelector(
                    ".play-icon"
                );


            if (icon) {

                icon.classList.toggle(
                    "is-playing",
                    playing
                );

            }


            this.centerPlay.setAttribute(
                "aria-label",
                playing
                    ? "Pause video"
                    : "Play video"
            );

        }

    }


    /**
     * ========================================================
     * MUTE
     * ========================================================
     */

    updateMuteButton(video) {

        if (!this.muteButton) {
            return;
        }


        this.muteButton.textContent =
            video.muted ||
            video.volume === 0
                ? "🔇"
                : "🔊";

    }


    /**
     * ========================================================
     * VIDEO CONTROLS
     * ========================================================
     */

    showVideoControls(video) {

        this.videoControls.hidden =
            false;


        if (this.volume) {

            this.volume.value =
                video.muted
                    ? "0"
                    : String(
                        video.volume || 0.8
                    );

        }


        this.updateMuteButton(
            video
        );

    }


    hideVideoControls() {

        this.videoControls.hidden =
            true;

    }


    /**
     * ========================================================
     * VIDEO TIME
     * ========================================================
     */

    updateVideoTime(video) {

        if (
            !video.duration
        ) {
            return;
        }


        const percent =
            (
                video.currentTime /
                video.duration
            ) *
            100;


        if (this.progress) {

            this.progress.value =
                String(
                    percent || 0
                );

        }


        if (this.currentTimeEl) {

            this.currentTimeEl.textContent =
                formatTime(
                    video.currentTime
                );

        }

    }


    /**
     * ========================================================
     * VIDEO DURATION
     * ========================================================
     */

    updateVideoDuration(video) {

        if (this.durationEl) {

            this.durationEl.textContent =
                formatTime(
                    video.duration
                );

        }

    }


    /**
     * ========================================================
     * COUNTER
     * ========================================================
     */

    updateCounter(
        index
    ) {

        if (!this.counterEl) {
            return;
        }


        this.counterEl.textContent =
            `${String(index + 1).padStart(2, "0")} / ${String(this.queue.length).padStart(2, "0")}`;

    }


    /**
     * ========================================================
     * MEDIA META
     * ========================================================
     */

    updateMediaMeta(
        media
    ) {

        if (this.mediaTitleEl) {

            this.mediaTitleEl.textContent =
                media.title ||
                "River";

        }


        if (this.mediaCategoryEl) {

            this.mediaCategoryEl.textContent =
                media.category ||
                (
                    this.entityType === "product"
                        ? "PRODUCT"
                        : "PROJECT"
                );

        }

    }


    /**
     * ========================================================
     * FULLSCREEN
     * ========================================================
     */

    async toggleFullscreen() {

        const shell =
            document.querySelector(
                ".media-player-shell"
            );


        if (!shell) {
            return;
        }


        try {

            if (
                document.fullscreenElement
            ) {

                await document.exitFullscreen();

            } else {

                await shell.requestFullscreen();

            }

        } catch (error) {

            console.warn(
                "River Media Player: fullscreen unavailable.",
                error
            );

        }

    }


    /**
     * ========================================================
     * INFO PANEL
     * ========================================================
     */

    toggleInfoPanel() {

        if (
            this.isInfoOpen
        ) {

            this.closeInfoPanel();

        } else {

            this.openInfoPanel();

        }

    }


    openInfoPanel() {

        this.isInfoOpen =
            true;


        this.infoPanel?.classList.add(
            "is-open"
        );


        this.infoPanel?.setAttribute(
            "aria-hidden",
            "false"
        );


        this.infoButton?.setAttribute(
            "aria-expanded",
            "true"
        );


        if (this.infoScrim) {

            this.infoScrim.hidden =
                false;

            requestAnimationFrame(
                () => {

                    this.infoScrim.classList.add(
                        "is-visible"
                    );

                }
            );

        }


        this.swiperAutoplayStop();

    }


    closeInfoPanel() {

        this.isInfoOpen =
            false;


        this.infoPanel?.classList.remove(
            "is-open"
        );


        this.infoPanel?.setAttribute(
            "aria-hidden",
            "true"
        );


        this.infoButton?.setAttribute(
            "aria-expanded",
            "false"
        );


        if (this.infoScrim) {

            this.infoScrim.classList.remove(
                "is-visible"
            );


            setTimeout(
                () => {

                    this.infoScrim.hidden =
                        true;

                },
                250
            );

        }

    }


    /**
     * ========================================================
     * INFO PANEL CONTENT
     * ========================================================
     */

    renderInfoPanel() {

        if (!this.infoContent) {
            return;
        }


        const entity =
            this.entity;


        if (
            this.entityType ===
            "product"
        ) {

            this.infoContent.innerHTML =
                this.renderProductInfo(
                    entity
                );

        } else {

            this.infoContent.innerHTML =
                this.renderProjectInfo(
                    entity
                );

        }

    }


    /**
     * ========================================================
     * PRODUCT INFO
     * ========================================================
     */

    renderProductInfo(
        product
    ) {

        return `

            <div class="info-eyebrow">
                RIVER PRODUCT
            </div>

            <h2>
                ${escapeHTML(product.title)}
            </h2>

            ${
                product.tagline
                    ? `
                        <p class="info-lead">
                            ${escapeHTML(product.tagline)}
                        </p>
                    `
                    : ""
            }


            <div class="info-meta">

                <span>
                    ${escapeHTML(product.category || "PRODUCT")}
                </span>

                <span>
                    ${escapeHTML(product.status || "")}
                </span>

            </div>


            ${
                product.problemStatement
                    ? this.renderInfoSection(
                        "THE PROBLEM",
                        product.problemStatement
                    )
                    : ""
            }


            ${
                product.outcome
                    ? this.renderInfoSection(
                        "THE OUTCOME",
                        product.outcome
                    )
                    : ""
            }


            ${
                Array.isArray(product.capabilities) &&
                product.capabilities.length
                    ? this.renderTagSection(
                        "CAPABILITIES",
                        product.capabilities
                    )
                    : ""
            }


            ${
                Array.isArray(product.features) &&
                product.features.length
                    ? this.renderTagSection(
                        "FEATURES",
                        product.features
                    )
                    : ""
            }


            ${
                Array.isArray(product.architecture) &&
                product.architecture.length
                    ? this.renderArchitecture(
                        product.architecture
                    )
                    : ""
            }


            <div class="info-actions">

                <a
                    href="product.html?product=${encodeURIComponent(product.slug)}"
                    class="info-action"
                >
                    View Product
                </a>

                <a
                    href="contact.html"
                    class="info-action"
                >
                    Request Demo
                </a>

            </div>

        `;

    }


    /**
     * ========================================================
     * PROJECT INFO
     * ========================================================
     */

    renderProjectInfo(
        project
    ) {

        const study =
            project.caseStudy ||
            {};


        return `

            <div class="info-eyebrow">
                PROJECT CASE STUDY
            </div>

            <h2>
                ${escapeHTML(project.title)}
            </h2>


            ${
                project.desc
                    ? `
                        <p class="info-lead">
                            ${escapeHTML(project.desc)}
                        </p>
                    `
                    : ""
            }


            <div class="info-meta">

                <span>
                    ${escapeHTML(project.type || "PROJECT")}
                </span>

                <span>
                    ${escapeHTML(project.status || "")}
                </span>

            </div>


            ${
                study.challenge
                    ? this.renderInfoSection(
                        "THE PROBLEM",
                        study.challenge
                    )
                    : ""
            }


            ${
                study.approach
                    ? this.renderInfoSection(
                        "OUR APPROACH",
                        study.approach
                    )
                    : ""
            }


            ${
                study.solution
                    ? this.renderInfoSection(
                        "THE SOLUTION",
                        study.solution
                    )
                    : ""
            }


            ${
                study.result
                    ? this.renderInfoSection(
                        "THE RESULT",
                        study.result
                    )
                    : ""
            }


            ${
                Array.isArray(project.technologies) &&
                project.technologies.length
                    ? this.renderTagSection(
                        "TECHNOLOGIES",
                        project.technologies
                    )
                    : ""
            }


            ${
                Array.isArray(project.capabilities) &&
                project.capabilities.length
                    ? this.renderTagSection(
                        "CAPABILITIES",
                        project.capabilities
                    )
                    : ""
            }


            ${
                Array.isArray(project.architecture) &&
                project.architecture.length
                    ? this.renderArchitecture(
                        project.architecture
                    )
                    : ""
            }

        `;

    }


    /**
     * ========================================================
     * INFO SECTION
     * ========================================================
     */

    renderInfoSection(
        title,
        content
    ) {

        return `

            <section class="info-section">

                <span class="info-section-label">
                    ${escapeHTML(title)}
                </span>

                <p>
                    ${escapeHTML(content)}
                </p>

            </section>

        `;

    }


    /**
     * ========================================================
     * TAG SECTION
     * ========================================================
     */

    renderTagSection(
        title,
        items
    ) {

        return `

            <section class="info-section">

                <span class="info-section-label">
                    ${escapeHTML(title)}
                </span>

                <div class="info-tags">

                    ${
                        items
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

            </section>

        `;

    }


    /**
     * ========================================================
     * ARCHITECTURE
     * ========================================================
     */

    renderArchitecture(
        items
    ) {

        return `

            <section class="info-section">

                <span class="info-section-label">
                    ARCHITECTURE
                </span>


                <div class="info-architecture">

                    ${
                        items
                            .map(
                                (item, index) =>
                                    `
                                    <div class="info-architecture-item">

                                        <span>
                                            ${String(index + 1).padStart(2, "0")}
                                        </span>

                                        <strong>
                                            ${escapeHTML(item)}
                                        </strong>

                                    </div>
                                    `
                            )
                            .join("")
                    }

                </div>

            </section>

        `;

    }


    /**
     * ========================================================
     * ADJACENT PRELOAD
     *
     * 🟢 UPGRADE:
     * We no longer preload the entire library.
     * ========================================================
     */

    preloadAdjacentMedia() {

        if (
            !this.swiper ||
            !this.queue.length
        ) {
            return;
        }


        const current =
            this.swiper.realIndex;


        const indexes =
            [
                current,
                current + 1,
                current - 1
            ];


        indexes.forEach(
            index => {

                const item =
                    this.queue[
                        (
                            index +
                            this.queue.length
                        ) %
                        this.queue.length
                    ];


                if (!item) {
                    return;
                }


                if (
                    item.type ===
                    "image"
                ) {

                    const image =
                        new Image();


                    image.src =
                        item.src;

                    return;

                }


                if (
                    item.type ===
                    "video"
                ) {

                    const slide =
                        [...this.swiper.slides]
                            .find(
                                element =>
                                    element.dataset.mediaId ===
                                    item.id
                            );


                    const video =
                        slide?.querySelector(
                            ".media-video"
                        );


                    if (video) {

                        video.preload =
                            "auto";

                    }

                }

            }
        );

    }


    /**
     * ========================================================
     * QUEUE STATUS
     * ========================================================
     */

    updateQueueStatus(
        message
    ) {

        if (
            this.queueStatusEl
        ) {

            this.queueStatusEl.textContent =
                message;

        }

    }


    fadeQueueStatus() {

        if (!this.queueStatusEl) {
            return;
        }


        setTimeout(
            () => {

                this.queueStatusEl.classList.add(
                    "is-hidden"
                );

            },
            1200
        );

    }


    /**
     * ========================================================
     * ERROR
     * ========================================================
     */

    showPlayerError(
        message
    ) {

        if (
            this.wrapper
        ) {

            this.wrapper.innerHTML = `

                <div class="media-player-error">

                    <span>
                        RIVER MEDIA
                    </span>

                    <h2>
                        ${escapeHTML(message)}
                    </h2>

                    <a
                        href="${
                            this.entityType === "product"
                                ? "products.html"
                                : "projects.html"
                        }"
                        class="info-action"
                    >
                        Back to ${
                            this.entityType === "product"
                                ? "Products"
                                : "Projects"
                        }
                    </a>

                </div>

            `;

        }


        this.updateQueueStatus(
            "Unable to load media"
        );


        console.error(
            "River Media Player:",
            message
        );

    }


    /**
     * ========================================================
     * EXPOSE GLOBAL PLAYER STATE
     * ========================================================
     */

    exposeGlobalState() {

        window.RIVER_MEDIA_PLAYER = {

            entity:
                this.entity,

            entityType:
                this.entityType,

            entitySlug:
                this.entitySlug,

            queue:
                this.queue,

            swiper:
                this.swiper,

            player:
                this

        };

    }

}


/**
 * ============================================================
 * UTILITIES
 * ============================================================
 */

function formatTime(
    seconds
) {

    if (
        !Number.isFinite(seconds)
    ) {

        return "00:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        Math.floor(
            seconds % 60
        );


    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

}


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