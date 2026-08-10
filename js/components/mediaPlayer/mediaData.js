/**
 * mediaData.js - central project/media registry.
 * 
 * 
 * Uses SLUGS owned by the mediaSection to map to the correct media data.
 */





/**
 *
 * CENTRAL PROJECT + MEDIA DATA SOURCE
 *
 * 🟢 UPGRADE:
 * The same project registry is now used by:
 *
 * 1. What We Do
 * 2. Project Cards
 * 3. Media Player
 *
 * This prevents different parts of the website from having
 * different media for the same project.
 *
 * ============================================================
 */

window.RIVER_PROJECTS = {

    /* ========================================================
       WEB & ECOMMERCE
       ======================================================== */

    "web-ecommerce": {

        slug: "web-ecommerce",

        title: "Web & eCommerce",

        desc: "Fast, scalable web systems and eCommerce experiences built for modern businesses.",

        /* 🟢 UPGRADE:
           Every media item belongs explicitly to this project.
        */
        media: [

            {
                id: "web-ecommerce-image-01",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            },

            {
                id: "web-ecommerce-video-01",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4"
            },

            {
                id: "web-ecommerce-image-02",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            },

            {
                id: "web-ecommerce-image-03",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            },

            {
                id: "web-ecommerce-video-02",
                type: "video",
                src: "assets/Media/BGV/BGV1.mp4"
            }

        ]

    },


    /* ========================================================
       ENTERPRISE SYSTEMS
       ======================================================== */

    "enterprise-systems": {

        slug: "enterprise-systems",

        title: "Enterprise Systems",

        desc: "Custom ERP, CRM and enterprise platforms designed around complex business operations.",

        media: [

            {
                id: "enterprise-image-01",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            },

            {
                id: "enterprise-video-01",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4"
            }

        ]

    },


    /* ========================================================
       CLOUD & DEVOPS
       ======================================================== */

    "cloud-devops": {

        slug: "cloud-devops",

        title: "Cloud & DevOps",

        desc: "Scalable cloud infrastructure, automation and deployment systems.",

        media: [

            {
                id: "cloud-image-01",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            },
            {
                id: "cloud-video-01",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4"
            }


        ]

    },




    /* ========================================================
       🟢 UPGRADE:
       CRM SYSTEM
       ======================================================== */

    "crm-system": {

        slug: "crm-system",

        title: "CRM System",

        desc:
            "Custom CRM for sales and support.",

        media: [

                        {
                id: "crm-image-01",

                type: "image",

                src:
                    "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            },

            {
                id: "crm-video-01",

                type: "video",

                src:
                    "assets/Media/placeHolderVideos/placeHolderVideo1.mp4"
            },

            {
                id: "crm-image-01",

                type: "image",

                src:
                    "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            },

            {
                id: "crm-video-02",

                type: "video",

                src:
                    "assets/Media/placeHolderVideos/placeHolderVideo1.mp4"
            },

            {
                id: "crm-image-02",

                type: "image",

                src:
                    "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            }

        ]

    },


    /* ========================================================
       🟢 UPGRADE:
       ERP SOLUTION
       ======================================================== */

    "erp-solution": {

        slug: "erp-solution",

        title: "ERP Solution",

        desc:
            "Inventory, procurement and manufacturing flows.",

        media: [

            {
                id: "erp-image-01",

                type: "image",

                src:
                    "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            },

            {
                id: "erp-video-01",

                type: "video",

                src:
                    "assets/Media/placeHolderVideos/placeHolderVideo1.mp4"
            },

            {
                id: "erp-image-02",

                type: "image",

                src:
                    "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            }

        ]

    },


    /* ========================================================
       🟢 UPGRADE:
       MOBILE APP
       ======================================================== */

    "mobile-app": {

        slug: "mobile-app",

        title: "Mobile App",

        desc:
            "Cross-platform PWA and native variants.",

        media: [

            {
                id: "mobile-app-image-01",

                type: "image",

                src:
                    "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            },

            {
                id: "mobile-app-video-01",

                type: "video",

                src:
                    "assets/Media/placeHolderVideos/placeHolderVideo1.mp4"
            },

            {
                id: "mobile-app-image-02",

                type: "image",

                src:
                    "assets/Media/placeHolderImages/placeHolderImage1.jpg"
            }

        ]

    }








};

















/* ============================================================
   🟢 UPGRADE:
   PROJECT HELPER FUNCTIONS
   ============================================================ */

/* ============================================================
   🟢 UPGRADE:
   NORMALIZE SLUG
   ============================================================ */

window.normalizeRiverProjectSlug = function(slug) {

    if (!slug) {

        return "";

    }


    return String(slug)

        .trim()

        .toLowerCase()

        .replace(/%20/g, "-")

        .replace(/\s+/g, "-")

        .replace(/[^a-z0-9-]/g, "-")

        .replace(/-+/g, "-")

        .replace(/^-+|-+$/g, "");

};



/* ============================================================
   CREATE SLUG FROM TITLE
   ============================================================ */

window.createProjectSlug = function(title) {

    return window.normalizeRiverProjectSlug(
        title
    );

};



/* ============================================================
   🟢 UPGRADE:
   GET PROJECT BY SLUG
   ============================================================ */

window.getRiverProject = function(slug) {

    const normalizedSlug =
        window.normalizeRiverProjectSlug(
            slug
        );


    if (!normalizedSlug) {

        console.warn(
            "River: Empty project slug."
        );

        return null;

    }


    const project =
        window.RIVER_PROJECTS[
            normalizedSlug
        ];


    if (!project) {

        console.error(
            "River: Project not found:",
            normalizedSlug
        );


        console.log(
            "River: Available projects:",
            Object.keys(
                window.RIVER_PROJECTS
            )
        );


        return null;

    }


    return project;

};



/* ============================================================
   GET PROJECT MEDIA
   ============================================================ */

window.getRiverProjectMedia = function(slug) {

    const project =
        window.getRiverProject(
            slug
        );


    if (!project) {

        return [];

    }


    if (!Array.isArray(project.media)) {

        return [];

    }


    return [
        ...project.media
    ];

};



/* ============================================================
   VALIDATE MEDIA
   ============================================================ */

window.isValidRiverMedia = function(item) {

    if (!item) {

        return false;

    }


    if (!item.type) {

        return false;

    }


    if (!item.src) {

        return false;

    }


    return (
        item.type === "image" ||
        item.type === "video"
    );

};



/* ============================================================
   GET VALID MEDIA
   ============================================================ */

window.getValidRiverProjectMedia = function(slug) {

    return window
        .getRiverProjectMedia(slug)
        .filter(
            window.isValidRiverMedia
        );

};



/* ============================================================
   🟢 UPGRADE:
   DEBUG ALL PROJECTS
   ============================================================ */

window.debugRiverProjects = function() {

    console.group(
        "RIVER PROJECT REGISTRY"
    );


    Object.entries(
        window.RIVER_PROJECTS
    ).forEach(
        ([slug, project]) => {

            console.group(
                project.title
            );


            console.log(
                "Slug:",
                slug
            );


            console.log(
                "Description:",
                project.desc
            );


            console.log(
                "Media:",
                project.media
            );


            console.groupEnd();

        }
    );


    console.groupEnd();

};