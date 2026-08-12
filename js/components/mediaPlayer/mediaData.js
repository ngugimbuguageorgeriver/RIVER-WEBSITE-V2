/**
 * ============================================================
 * mediaData.js
 * ============================================================
 *
 * RIVER CENTRAL SOFTWARE REGISTRY
 *
 * 🟢 UPGRADE:
 *
 * This file is now the SINGLE SOURCE OF TRUTH for:
 *
 * PROJECTS
 * PRODUCTS
 * MEDIA
 * CASE STUDIES
 * CAPABILITIES
 * TECHNOLOGIES
 * INDUSTRIES
 * RELATED WORK
 * PRODUCT → PROJECT CONNECTIONS
 * PRODUCT → MEDIA CONNECTIONS
 *
 * Architecture:
 *
 * RIVER
 *  |
 *  |-- RIVER_PROJECTS
 *  |
 *  |-- RIVER_PRODUCTS
 *  |
 *  |-- Shared helpers
 *
 * Projects answer:
 *
 * "What has River built?"
 *
 * Products answer:
 *
 * "What can River package, customize,
 *  deploy or build?"
 *
 * ============================================================
 */


/* ============================================================
   🟢 UPGRADE: CENTRAL PROJECT REGISTRY
   ============================================================ */

   window.RIVER_PROJECTS = {

    /* ========================================================
       WEB & ECOMMERCE
       ======================================================== */

    "web-ecommerce": {

        slug: "web-ecommerce",

        title: "Web & eCommerce",

        shortTitle: "eCommerce Platform",

        desc:
            "Fast, scalable web systems and eCommerce experiences built for modern businesses.",

        type: "WEB",

        industry: [
            "Retail",
            "eCommerce"
        ],

        status: "COMPLETED",

        featured: true,

        caseStudy: {

            challenge:
                "The business needed a stronger digital commerce experience capable of bringing products, customers, orders and online interactions into one system.",

            approach:
                "We first mapped the customer journey and business workflow, then designed the digital experience around performance, usability and future scalability.",

            solution:
                "A responsive eCommerce platform with structured product presentation, customer-facing interfaces, reusable components and an architecture prepared for integrations.",

            result:
                "A centralized digital commerce experience designed to provide a stronger customer journey and a scalable foundation for future business growth."

        },

        technologies: [

            "HTML",
            "CSS",
            "JavaScript",
            "REST API",
            "Database",
            "Analytics"

        ],

        capabilities: [

            "Responsive Web",
            "Product Management",
            "Customer Experience",
            "Search",
            "Analytics",
            "API Integration",
            "Content Management"

        ],

        process: [

            "Discovery",
            "Architecture",
            "UX & Interface",
            "Development",
            "Testing",
            "Deployment",
            "Optimization"

        ],

        architecture: [

            "Client Interface",
            "Frontend Application",
            "API Layer",
            "Business Logic",
            "Database",
            "External Services"

        ],

        problems: [

            "Poor Customer Experience",
            "Disconnected Processes",
            "Manual Operations",
            "Digital Commerce"

        ],

        media: [

            {
                id: "web-ecommerce-image-01",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Platform Overview",
                category: "Overview"
            },

            {
                id: "web-ecommerce-video-01",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "Platform Walkthrough",
                category: "Walkthrough"
            },

            {
                id: "web-ecommerce-image-02",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Product Experience",
                category: "Interface"
            },

            {
                id: "web-ecommerce-image-03",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Customer Experience",
                category: "Interface"
            },

            {
                id: "web-ecommerce-video-02",
                type: "video",
                src: "assets/Media/BGV/BGV1.mp4",
                title: "System Experience",
                category: "Demo"
            }

        ]

    },


    /* ========================================================
       ENTERPRISE SYSTEMS
       ======================================================== */

    "enterprise-systems": {

        slug: "enterprise-systems",

        title: "Enterprise Systems",

        desc:
            "Custom ERP, CRM and enterprise platforms designed around complex business operations.",

        type: "SOFTWARE",

        industry: [
            "Enterprise",
            "Operations"
        ],

        status: "COMPLETED",

        featured: false,

        caseStudy: {

            challenge:
                "Complex organizations often operate across disconnected processes, tools and departments.",

            approach:
                "We model the organization's workflow first and then design the software around the actual operating structure.",

            solution:
                "A modular enterprise platform designed to centralize business processes, information and operational workflows.",

            result:
                "A scalable foundation for centralizing business operations and extending the system as organizational requirements evolve."

        },

        technologies: [

            "JavaScript",
            "REST API",
            "Database",
            "Authentication",
            "Analytics"

        ],

        capabilities: [

            "Authentication",
            "Authorization",
            "Dashboards",
            "Data Management",
            "Workflow Automation",
            "Reporting",
            "API Integration"

        ],

        process: [

            "Discovery",
            "System Architecture",
            "Development",
            "Testing",
            "Deployment",
            "Optimization"

        ],

        architecture: [

            "Users",
            "Frontend",
            "Authentication",
            "API",
            "Business Logic",
            "Database",
            "Reporting"

        ],

        problems: [

            "Manual Processes",
            "Disconnected Systems",
            "Data Management",
            "Operational Complexity"

        ],

        media: [

            {
                id: "enterprise-image-01",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Enterprise Platform",
                category: "Overview"
            },

            {
                id: "enterprise-video-01",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "Enterprise Walkthrough",
                category: "Walkthrough"
            }

        ]

    },


    /* ========================================================
       CLOUD & DEVOPS
       ======================================================== */

    "cloud-devops": {

        slug: "cloud-devops",

        title: "Cloud & DevOps",

        desc:
            "Scalable cloud infrastructure, automation and deployment systems.",

        type: "SYSTEMS",

        industry: [
            "Infrastructure",
            "Technology"
        ],

        status: "COMPLETED",

        featured: false,

        caseStudy: {

            challenge:
                "Growing software systems require reliable deployment, infrastructure and operational processes.",

            approach:
                "We structure infrastructure around repeatability, automation, observability and controlled deployments.",

            solution:
                "Cloud and DevOps workflows designed to support deployment automation, scalability and operational reliability.",

            result:
                "A more structured foundation for deploying and operating digital systems as they grow."

        },

        technologies: [

            "Cloud",
            "APIs",
            "CI/CD",
            "JavaScript",
            "Databases"

        ],

        capabilities: [

            "Deployment",
            "Automation",
            "Monitoring",
            "Scalability",
            "Infrastructure",
            "API Integration"

        ],

        process: [

            "Infrastructure Discovery",
            "Architecture",
            "Automation",
            "Testing",
            "Deployment",
            "Monitoring"

        ],

        architecture: [

            "Client",
            "Application",
            "API",
            "Infrastructure",
            "Database",
            "Monitoring"

        ],

        problems: [

            "Manual Deployment",
            "Infrastructure Complexity",
            "Scalability",
            "Operational Reliability"

        ],

        media: [

            {
                id: "cloud-image-01",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Infrastructure",
                category: "Architecture"
            },

            {
                id: "cloud-video-01",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "Cloud Workflow",
                category: "Walkthrough"
            }

        ]

    },


    /* ========================================================
       CRM
       ======================================================== */

    "crm-system": {

        slug: "crm-system",

        title: "CRM System",

        desc:
            "Custom CRM for sales and support.",

        type: "SOFTWARE",

        industry: [
            "Sales",
            "Customer Service"
        ],

        status: "COMPLETED",

        featured: false,

        caseStudy: {

            challenge:
                "Sales and support teams need a centralized way to manage customers, interactions and operational follow-up.",

            approach:
                "We structured the system around customer lifecycle workflows and information visibility.",

            solution:
                "A CRM platform designed to centralize customer information, sales activity and support workflows.",

            result:
                "A centralized foundation for managing customer relationships and operational follow-up."

        },

        technologies: [

            "JavaScript",
            "REST API",
            "Database",
            "Authentication"

        ],

        capabilities: [

            "Authentication",
            "Customer Management",
            "Sales Pipeline",
            "Dashboard",
            "Search",
            "Reporting",
            "Notifications"

        ],

        process: [

            "Discovery",
            "Architecture",
            "Development",
            "Testing",
            "Deployment"

        ],

        architecture: [

            "Users",
            "Frontend",
            "Authentication",
            "API",
            "Business Logic",
            "Database"

        ],

        problems: [

            "Customer Data",
            "Manual Follow-up",
            "Disconnected Processes",
            "Sales Visibility"

        ],

        media: [

            {
                id: "crm-image-01",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "CRM Dashboard",
                category: "Dashboard"
            },

            {
                id: "crm-video-01",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "CRM Walkthrough",
                category: "Walkthrough"
            },

            {
                id: "crm-image-02",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Customer Management",
                category: "Interface"
            },

            {
                id: "crm-video-02",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "CRM Workflow",
                category: "Workflow"
            }

        ]

    },


    /* ========================================================
       ERP
       ======================================================== */

    "erp-solution": {

        slug: "erp-solution",

        title: "ERP Solution",

        desc:
            "Inventory, procurement and manufacturing flows.",

        type: "SOFTWARE",

        industry: [
            "Industrial",
            "Operations"
        ],

        status: "COMPLETED",

        featured: false,

        caseStudy: {

            challenge:
                "Operational teams often need to coordinate inventory, procurement and production through interconnected workflows.",

            approach:
                "We model the operational lifecycle and connect the major data and workflow points.",

            solution:
                "An ERP-oriented system covering inventory, procurement and manufacturing workflows.",

            result:
                "A centralized operational structure designed to improve visibility across interconnected business processes."

        },

        technologies: [

            "JavaScript",
            "REST API",
            "Database",
            "Analytics"

        ],

        capabilities: [

            "Inventory",
            "Procurement",
            "Manufacturing",
            "Reporting",
            "Dashboard",
            "Data Management"

        ],

        process: [

            "Discovery",
            "Workflow Mapping",
            "Architecture",
            "Development",
            "Testing",
            "Deployment"

        ],

        architecture: [

            "Users",
            "Frontend",
            "API",
            "Business Logic",
            "Database",
            "Reporting"

        ],

        problems: [

            "Inventory Management",
            "Procurement",
            "Manufacturing",
            "Data Visibility"

        ],

        media: [

            {
                id: "erp-image-01",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "ERP Overview",
                category: "Overview"
            },

            {
                id: "erp-video-01",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "ERP Workflow",
                category: "Walkthrough"
            },

            {
                id: "erp-image-02",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Operations",
                category: "Interface"
            }

        ]

    },


    /* ========================================================
       MOBILE
       ======================================================== */

    "mobile-app": {

        slug: "mobile-app",

        title: "Mobile App",

        desc:
            "Cross-platform PWA and native variants.",

        type: "MOBILE",

        industry: [
            "Mobile",
            "Digital Products"
        ],

        status: "COMPLETED",

        featured: false,

        caseStudy: {

            challenge:
                "Users increasingly require fast access to digital services from mobile devices.",

            approach:
                "We designed the experience around responsive interaction, performance and mobile-first workflows.",

            solution:
                "A cross-platform mobile experience capable of supporting modern mobile interactions.",

            result:
                "A mobile-oriented digital experience designed around accessibility and usability."

        },

        technologies: [

            "JavaScript",
            "PWA",
            "APIs",
            "Database"

        ],

        capabilities: [

            "Mobile UX",
            "Authentication",
            "API Integration",
            "Notifications",
            "Offline Experience"

        ],

        process: [

            "Discovery",
            "UX",
            "Architecture",
            "Development",
            "Testing",
            "Deployment"

        ],

        architecture: [

            "Mobile Client",
            "Application",
            "API",
            "Business Logic",
            "Database"

        ],

        problems: [

            "Mobile Accessibility",
            "Customer Experience",
            "Disconnected Services"

        ],

        media: [

            {
                id: "mobile-app-image-01",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Mobile Interface",
                category: "Interface"
            },

            {
                id: "mobile-app-video-01",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "Mobile Walkthrough",
                category: "Walkthrough"
            },

            {
                id: "mobile-app-image-02",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Mobile Experience",
                category: "Interface"
            }

        ]

    }

};


/* ============================================================
   🟢 UPGRADE: RIVER PRODUCT REGISTRY
   ============================================================ */

window.RIVER_PRODUCTS = {

    /* ========================================================
       INVENTORY OS
       ======================================================== */

    "inventory-os": {

        slug: "inventory-os",

        title: "InventoryOS",

        shortTitle: "Inventory Management Platform",

        tagline:
            "Control stock, purchasing, suppliers and reporting from one operational system.",

        desc:
            "A configurable inventory management platform designed to centralize stock, purchasing, supplier and reporting workflows.",

        category: "Business & Enterprise",

        categorySlug: "business-enterprise",

        type: "SOFTWARE",

        status: "CUSTOMIZABLE",

        availability: "Available for customization",

        deployment: [
            "Cloud",
            "Private Server",
            "Hybrid"
        ],

        businessModel: [
            "Custom Deployment",
            "Subscription",
            "Enterprise Deployment"
        ],

        audience: [
            "Retail businesses",
            "Distributors",
            "Manufacturers",
            "Operations teams"
        ],

        capabilities: [

            "Inventory",
            "Suppliers",
            "Purchasing",
            "Reporting",
            "Dashboard",
            "Authentication",
            "Authorization",
            "Workflow Automation"

        ],

        features: [

            "Stock Management",
            "Supplier Management",
            "Purchase Orders",
            "Stock Movements",
            "Inventory Reporting",
            "User Roles",
            "Operational Dashboard",
            "Search"

        ],

        technologies: [

            "JavaScript",
            "REST API",
            "Database",
            "Authentication",
            "Analytics"

        ],

        industries: [

            "Retail",
            "Manufacturing",
            "Distribution",
            "Wholesale"

        ],

        problemTags: [

            "inventory",
            "business",
            "spreadsheets",
            "workflow"

        ],

        problemStatement:
            "Businesses lose operational visibility when stock, purchasing and supplier information is scattered across spreadsheets and disconnected tools.",

        outcome:
            "A centralized operational view of inventory with structured purchasing, supplier management and reporting workflows.",

        howItWorks: [

            "Capture inventory data",
            "Manage suppliers and purchasing",
            "Track stock movements",
            "Monitor operational activity",
            "Generate reports",
            "Control access by user role"

        ],

        architecture: [

            "Users",
            "Frontend",
            "Authentication",
            "API",
            "Business Logic",
            "Database",
            "Reporting"

        ],

        process: [

            "Discovery",
            "Workflow Mapping",
            "Architecture",
            "UX / UI",
            "Development",
            "Testing",
            "Deployment",
            "Continuous Improvement"

        ],

        media: [

            {
                id: "inventory-os-demo",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "InventoryOS Demonstration",
                category: "Demo"
            },

            {
                id: "inventory-os-dashboard",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "InventoryOS Dashboard",
                category: "Dashboard"
            }

        ],

        relatedProjects: [
            "erp-solution",
            "enterprise-systems"
        ]

    },


    /* ========================================================
       BUSINESSOS
       ======================================================== */

    "business-os": {

        slug: "business-os",

        title: "BusinessOS",

        shortTitle: "Business Management Platform",

        tagline:
            "Bring core business operations, people, workflows and reporting into one system.",

        desc:
            "A configurable business management platform for organizations that need a centralized operational system.",

        category: "Business & Enterprise",

        categorySlug: "business-enterprise",

        type: "SOFTWARE",

        status: "CUSTOMIZABLE",

        availability: "Available for customization",

        deployment: [
            "Cloud",
            "Private Server",
            "Hybrid"
        ],

        businessModel: [
            "Custom Deployment",
            "Subscription",
            "Enterprise Deployment"
        ],

        audience: [
            "Growing businesses",
            "Operations teams",
            "Enterprise departments",
            "Service organizations"
        ],

        capabilities: [

            "Authentication",
            "Authorization",
            "Dashboard",
            "Workflow Automation",
            "Reporting",
            "Data Management",
            "Notifications",
            "API Integration"

        ],

        features: [

            "Business Dashboard",
            "User Management",
            "Role-Based Access",
            "Workflow Management",
            "Reporting",
            "Notifications",
            "Operational Records",
            "Search"

        ],

        technologies: [

            "JavaScript",
            "REST API",
            "Database",
            "Authentication",
            "Analytics"

        ],

        industries: [

            "Enterprise",
            "Operations",
            "Professional Services",
            "Retail"

        ],

        problemTags: [

            "business",
            "workflow",
            "spreadsheets",
            "integration"

        ],

        problemStatement:
            "Growing organizations often outgrow disconnected spreadsheets, communication channels and isolated operational tools.",

        outcome:
            "A centralized business operating environment where teams, workflows and information can work together.",

        howItWorks: [

            "Define organizational users",
            "Configure roles and permissions",
            "Structure workflows",
            "Capture operational information",
            "Monitor activity",
            "Generate reports"

        ],

        architecture: [

            "Users",
            "Frontend",
            "Authentication",
            "Authorization",
            "API",
            "Business Logic",
            "Database",
            "Reporting"

        ],

        process: [

            "Discovery",
            "Workflow Mapping",
            "Architecture",
            "UX / UI",
            "Development",
            "Testing",
            "Deployment",
            "Continuous Improvement"

        ],

        media: [

            {
                id: "business-os-demo",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "BusinessOS Demonstration",
                category: "Demo"
            },

            {
                id: "business-os-dashboard",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "BusinessOS Dashboard",
                category: "Dashboard"
            }

        ],

        relatedProjects: [
            "enterprise-systems"
        ]

    },


    /* ========================================================
       CUSTOMER PORTAL
       ======================================================== */

    "customer-portal": {

        slug: "customer-portal",

        title: "Customer Portal",

        shortTitle: "Customer Self-Service Platform",

        tagline:
            "Give customers a secure digital space to access services, information and workflows.",

        desc:
            "A configurable customer portal designed to connect customers with services, documents, requests, updates and business workflows.",

        category: "Customer & Commerce",

        categorySlug: "customer-commerce",

        type: "PLATFORM",

        status: "AVAILABLE",

        availability: "Available",

        deployment: [
            "Cloud",
            "Private Server",
            "Hybrid"
        ],

        businessModel: [
            "Subscription",
            "Custom Deployment",
            "Enterprise Deployment"
        ],

        audience: [
            "Service businesses",
            "Financial organizations",
            "Healthcare organizations",
            "Enterprise teams"
        ],

        capabilities: [

            "Authentication",
            "Authorization",
            "Customer Management",
            "Document Management",
            "Notifications",
            "Search",
            "Dashboard",
            "API Integration"

        ],

        features: [

            "Customer Login",
            "Profile Management",
            "Request Management",
            "Document Access",
            "Notifications",
            "Customer Dashboard",
            "Support Workflows",
            "Activity History"

        ],

        technologies: [

            "JavaScript",
            "REST API",
            "Database",
            "Authentication"

        ],

        industries: [

            "Professional Services",
            "Healthcare",
            "Finance",
            "Enterprise"

        ],

        problemTags: [

            "customers",
            "portal",
            "workflow",
            "integration"

        ],

        problemStatement:
            "Customers often depend on email, phone calls and manual communication to access information and request services.",

        outcome:
            "A secure self-service environment that gives customers controlled access to information and workflows.",

        howItWorks: [

            "Customer authenticates",
            "Customer accesses dashboard",
            "Customer submits or views requests",
            "System processes workflow",
            "Notifications keep users informed"

        ],

        architecture: [

            "Customer",
            "Portal",
            "Authentication",
            "API",
            "Business Logic",
            "Database",
            "Notifications"

        ],

        process: [

            "Discovery",
            "Journey Mapping",
            "Architecture",
            "UX / UI",
            "Development",
            "Testing",
            "Deployment"

        ],

        media: [

            {
                id: "customer-portal-demo",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "Customer Portal Demonstration",
                category: "Demo"
            },

            {
                id: "customer-portal-dashboard",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Customer Dashboard",
                category: "Interface"
            }

        ],

        relatedProjects: [
            "crm-system",
            "web-ecommerce"
        ]

    },


    /* ========================================================
       COMMERCE PLATFORM
       ======================================================== */

    "commerce-platform": {

        slug: "commerce-platform",

        title: "Commerce Platform",

        shortTitle: "eCommerce Platform",

        tagline:
            "Sell products and manage digital commerce through a connected customer experience.",

        desc:
            "A scalable commerce foundation for product presentation, customer interactions, orders and digital sales workflows.",

        category: "Customer & Commerce",

        categorySlug: "customer-commerce",

        type: "PLATFORM",

        status: "AVAILABLE",

        availability: "Available",

        deployment: [
            "Cloud",
            "Private Server"
        ],

        businessModel: [
            "Subscription",
            "Custom Deployment"
        ],

        audience: [
            "Retailers",
            "Brands",
            "Distributors",
            "Online businesses"
        ],

        capabilities: [

            "Product Management",
            "Customer Management",
            "Search",
            "Analytics",
            "API Integration",
            "Content Management",
            "Authentication",
            "Reporting"

        ],

        features: [

            "Product Catalogue",
            "Customer Accounts",
            "Search",
            "Order Workflow",
            "Content Management",
            "Analytics",
            "Responsive Commerce",
            "API Integration"

        ],

        technologies: [

            "HTML",
            "CSS",
            "JavaScript",
            "REST API",
            "Database",
            "Analytics"

        ],

        industries: [

            "Retail",
            "eCommerce",
            "Wholesale",
            "Consumer Products"

        ],

        problemTags: [

            "commerce",
            "customers",
            "integration",
            "business"

        ],

        problemStatement:
            "Businesses need a stronger digital commerce experience without building every commerce capability from zero.",

        outcome:
            "A structured commerce platform that can support customer journeys, product discovery and digital sales workflows.",

        howItWorks: [

            "Manage products",
            "Present products to customers",
            "Enable customer interactions",
            "Process commerce workflows",
            "Track activity",
            "Analyze performance"

        ],

        architecture: [

            "Customer",
            "Frontend",
            "Commerce Application",
            "API",
            "Business Logic",
            "Database",
            "Analytics"

        ],

        process: [

            "Discovery",
            "Commerce Architecture",
            "UX / UI",
            "Development",
            "Testing",
            "Deployment",
            "Optimization"

        ],

        media: [

            {
                id: "commerce-platform-demo",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "Commerce Platform Demonstration",
                category: "Demo"
            },

            {
                id: "commerce-platform-interface",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "Commerce Interface",
                category: "Interface"
            }

        ],

        relatedProjects: [
            "web-ecommerce"
        ]

    },


    /* ========================================================
       WORKFLOW AUTOMATION
       ======================================================== */

    "workflow-automation": {

        slug: "workflow-automation",

        title: "Workflow Automation",

        shortTitle: "Business Workflow Platform",

        tagline:
            "Turn repetitive manual processes into structured digital workflows.",

        desc:
            "A configurable workflow platform for approvals, tasks, notifications, routing and operational automation.",

        category: "Operations & Productivity",

        categorySlug: "operations-productivity",

        type: "SOFTWARE",

        status: "CUSTOMIZABLE",

        availability: "Available for customization",

        deployment: [
            "Cloud",
            "Private Server",
            "Hybrid"
        ],

        businessModel: [
            "Custom Deployment",
            "Subscription",
            "Enterprise Deployment"
        ],

        audience: [
            "Operations teams",
            "Finance departments",
            "HR teams",
            "Enterprise organizations"
        ],

        capabilities: [

            "Workflow Automation",
            "Approvals",
            "Notifications",
            "Authentication",
            "Authorization",
            "Reporting",
            "Task Management",
            "API Integration"

        ],

        features: [

            "Workflow Builder",
            "Approval Chains",
            "Task Assignment",
            "Notifications",
            "Status Tracking",
            "Role-Based Actions",
            "Audit History",
            "Reporting"

        ],

        technologies: [

            "JavaScript",
            "REST API",
            "Database",
            "Authentication"

        ],

        industries: [

            "Enterprise",
            "Finance",
            "HR",
            "Operations"

        ],

        problemTags: [

            "workflow",
            "business",
            "employees",
            "spreadsheets"

        ],

        problemStatement:
            "Repeated manual approvals, task assignments and communication create delays and inconsistent operational processes.",

        outcome:
            "Repeatable digital workflows with defined responsibilities, approvals, notifications and operational visibility.",

        howItWorks: [

            "Define workflow",
            "Assign roles",
            "Trigger process",
            "Route tasks",
            "Collect approvals",
            "Track completion",
            "Generate audit information"

        ],

        architecture: [

            "Users",
            "Workflow Interface",
            "Authentication",
            "Workflow Engine",
            "API",
            "Database",
            "Notifications"

        ],

        process: [

            "Process Discovery",
            "Workflow Mapping",
            "Architecture",
            "UX / UI",
            "Development",
            "Testing",
            "Deployment"

        ],

        media: [

            {
                id: "workflow-demo",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "Workflow Automation Demonstration",
                category: "Demo"
            }

        ],

        relatedProjects: [
            "enterprise-systems",
            "erp-solution"
        ]

    },


    /* ========================================================
       CUSTOMER RELATIONSHIP PLATFORM
       ======================================================== */

    "customer-management": {

        slug: "customer-management",

        title: "Customer Management",

        shortTitle: "CRM Platform",

        tagline:
            "Centralize customer relationships, sales activity and support workflows.",

        desc:
            "A configurable customer relationship platform for managing customer information, sales pipelines and support workflows.",

        category: "Customer & Commerce",

        categorySlug: "customer-commerce",

        type: "SOFTWARE",

        status: "AVAILABLE",

        availability: "Available",

        deployment: [
            "Cloud",
            "Private Server",
            "Hybrid"
        ],

        businessModel: [
            "Subscription",
            "Custom Deployment"
        ],

        audience: [
            "Sales teams",
            "Customer service teams",
            "Growing businesses",
            "Enterprise departments"
        ],

        capabilities: [

            "Customer Management",
            "Sales Pipeline",
            "Dashboard",
            "Search",
            "Reporting",
            "Notifications",
            "Authentication",
            "Authorization"

        ],

        features: [

            "Customer Profiles",
            "Sales Pipeline",
            "Interaction History",
            "Task Management",
            "Support Workflow",
            "Search",
            "Reporting",
            "Notifications"

        ],

        technologies: [

            "JavaScript",
            "REST API",
            "Database",
            "Authentication"

        ],

        industries: [

            "Sales",
            "Customer Service",
            "Professional Services",
            "Retail"

        ],

        problemTags: [

            "customers",
            "business",
            "workflow",
            "integration"

        ],

        problemStatement:
            "Customer information and follow-up activities become difficult to manage when teams rely on scattered communication and disconnected records.",

        outcome:
            "A centralized customer relationship environment with clearer customer information, sales activity and follow-up workflows.",

        howItWorks: [

            "Capture customer information",
            "Track interactions",
            "Manage sales pipeline",
            "Assign follow-up tasks",
            "Monitor customer activity",
            "Generate reports"

        ],

        architecture: [

            "Users",
            "CRM Interface",
            "Authentication",
            "API",
            "Business Logic",
            "Database",
            "Reporting"

        ],

        process: [

            "Discovery",
            "Customer Journey Mapping",
            "Architecture",
            "UX / UI",
            "Development",
            "Testing",
            "Deployment"

        ],

        media: [

            {
                id: "customer-management-demo",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "Customer Management Demonstration",
                category: "Demo"
            },

            {
                id: "customer-management-dashboard",
                type: "image",
                src: "assets/Media/placeHolderImages/placeHolderImage1.jpg",
                title: "CRM Dashboard",
                category: "Dashboard"
            }

        ],

        relatedProjects: [
            "crm-system"
        ]

    },


    /* ========================================================
       CUSTOM INDUSTRY PLATFORM
       ======================================================== */

    "industry-platform": {

        slug: "industry-platform",

        title: "Industry Platform",

        shortTitle: "Industry-Specific Software",

        tagline:
            "Build a digital operating system around the way your industry actually works.",

        desc:
            "A foundation for building industry-specific software around specialized workflows, users, data and operational requirements.",

        category: "Industry Solutions",

        categorySlug: "industry-solutions",

        type: "PLATFORM",

        status: "IN_DEVELOPMENT",

        availability: "Built to specification",

        deployment: [
            "Cloud",
            "Private Server",
            "Hybrid"
        ],

        businessModel: [
            "Custom Development",
            "Enterprise Deployment"
        ],

        audience: [
            "Agriculture",
            "Healthcare",
            "Education",
            "Logistics",
            "Hospitality",
            "Real Estate",
            "Finance",
            "Retail"
        ],

        capabilities: [

            "Authentication",
            "Authorization",
            "Workflow Automation",
            "Dashboards",
            "Reporting",
            "Data Management",
            "API Integration",
            "Mobile"

        ],

        features: [

            "Industry Workflows",
            "Role-Based Access",
            "Custom Dashboards",
            "Reporting",
            "Automation",
            "Integrations",
            "Mobile Interfaces",
            "Custom Data Models"

        ],

        technologies: [

            "JavaScript",
            "REST API",
            "Database",
            "Authentication",
            "Analytics"

        ],

        industries: [

            "Agriculture",
            "Healthcare",
            "Education",
            "Logistics",
            "Hospitality",
            "Real Estate",
            "Finance",
            "Retail"

        ],

        problemTags: [

            "custom",
            "business",
            "workflow",
            "integration",
            "industry"

        ],

        problemStatement:
            "Generic software often forces organizations to adapt their operations to the software instead of adapting the software to the organization.",

        outcome:
            "A purpose-built digital platform structured around the organization's actual users, workflows, data and operational requirements.",

        howItWorks: [

            "Understand the industry",
            "Map the operating model",
            "Define users and permissions",
            "Design workflows",
            "Build the platform",
            "Integrate required systems",
            "Deploy and improve continuously"

        ],

        architecture: [

            "Users",
            "Industry Interface",
            "Authentication",
            "API",
            "Business Logic",
            "Database",
            "Integrations",
            "Analytics"

        ],

        process: [

            "Discovery",
            "Domain Research",
            "Workflow Mapping",
            "Architecture",
            "UX / UI",
            "Development",
            "Testing",
            "Deployment",
            "Continuous Improvement"

        ],

        media: [

            {
                id: "industry-platform-demo",
                type: "video",
                src: "assets/Media/placeHolderVideos/placeHolderVideo1.mp4",
                title: "Industry Platform Demonstration",
                category: "Demo"
            }

        ],

        relatedProjects: [
            "enterprise-systems",
            "erp-solution",
            "cloud-devops"
        ]

    }

};


/* ============================================================
   🟢 UPGRADE: NORMALIZE SLUG
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
   🟢 UPGRADE: PRODUCT SLUG NORMALIZATION
   ============================================================ */

window.normalizeRiverProductSlug = function(slug) {

    return window.normalizeRiverProjectSlug(slug);

};


/* ============================================================
   CREATE SLUG
   ============================================================ */

window.createProjectSlug = function(title) {

    return window.normalizeRiverProjectSlug(title);

};


/* ============================================================
   🟢 UPGRADE: CREATE PRODUCT SLUG
   ============================================================ */

window.createProductSlug = function(title) {

    return window.normalizeRiverProductSlug(title);

};


/* ============================================================
   🟢 UPGRADE: GET PROJECT
   ============================================================ */

window.getRiverProject = function(slug) {

    const normalizedSlug =
        window.normalizeRiverProjectSlug(slug);

    if (!normalizedSlug) {
        return null;
    }

    return window.RIVER_PROJECTS[normalizedSlug] || null;

};


/* ============================================================
   🟢 UPGRADE: GET PRODUCT
   ============================================================ */

window.getRiverProduct = function(slug) {

    const normalizedSlug =
        window.normalizeRiverProductSlug(slug);

    if (!normalizedSlug) {
        return null;
    }

    return window.RIVER_PRODUCTS[normalizedSlug] || null;

};


/* ============================================================
   🟢 UPGRADE: GET PRODUCT MEDIA
   ============================================================ */

window.getRiverProductMedia = function(slug) {

    const product =
        window.getRiverProduct(slug);

    if (
        !product ||
        !Array.isArray(product.media)
    ) {

        return [];

    }

    return [...product.media];

};


/* ============================================================
   🟢 UPGRADE: GET PROJECT MEDIA
   ============================================================ */

window.getRiverProjectMedia = function(slug) {

    const project =
        window.getRiverProject(slug);

    if (
        !project ||
        !Array.isArray(project.media)
    ) {

        return [];

    }

    return [...project.media];

};


/* ============================================================
   🟢 UPGRADE: VALID MEDIA
   ============================================================ */

window.isValidRiverMedia = function(item) {

    return !!(
        item &&
        item.id &&
        item.src &&
        (
            item.type === "image" ||
            item.type === "video"
        )
    );

};


/* ============================================================
   🟢 UPGRADE: VALID PRODUCT MEDIA
   ============================================================ */

window.getValidRiverProductMedia = function(slug) {

    return window
        .getRiverProductMedia(slug)
        .filter(window.isValidRiverMedia);

};


/* ============================================================
   🟢 UPGRADE: VALID PROJECT MEDIA
   ============================================================ */

window.getValidRiverProjectMedia = function(slug) {

    return window
        .getRiverProjectMedia(slug)
        .filter(window.isValidRiverMedia);

};


/* ============================================================
   🟢 UPGRADE: ALL PROJECTS
   ============================================================ */

window.getRiverProjects = function() {

    return Object.values(
        window.RIVER_PROJECTS
    );

};


/* ============================================================
   🟢 UPGRADE: ALL PRODUCTS
   ============================================================ */

window.getRiverProducts = function() {

    return Object.values(
        window.RIVER_PRODUCTS
    );

};


/* ============================================================
   🟢 UPGRADE: PRODUCT CATEGORIES
   ============================================================ */

window.getRiverProductCategories = function() {

    const categories = [];

    window.getRiverProducts()
        .forEach(product => {

            if (
                product.category &&
                !categories.includes(
                    product.category
                )
            ) {

                categories.push(
                    product.category
                );

            }

        });

    return categories;

};


/* ============================================================
   🟢 UPGRADE: PRODUCTS BY CATEGORY
   ============================================================ */

window.getRiverProductsByCategory = function(
    category
) {

    if (!category) {
        return window.getRiverProducts();
    }

    return window
        .getRiverProducts()
        .filter(
            product =>
                product.category === category
        );

};


/* ============================================================
   🟢 UPGRADE: SEARCH PRODUCTS
   ============================================================ */

window.searchRiverProducts = function(
    query
) {

    const search =
        String(query || "")
            .trim()
            .toLowerCase();

    if (!search) {
        return window.getRiverProducts();
    }

    return window
        .getRiverProducts()
        .filter(product => {

            const searchable = [

                product.title,

                product.shortTitle,

                product.tagline,

                product.desc,

                product.category,

                product.type,

                product.status,

                ...(product.industries || []),

                ...(product.capabilities || []),

                ...(product.features || []),

                ...(product.technologies || []),

                ...(product.problemTags || []),

                ...(product.audience || [])

            ]
                .join(" ")
                .toLowerCase();

            return searchable.includes(
                search
            );

        });

};


/* ============================================================
   🟢 UPGRADE: FIND PRODUCTS FOR A PROBLEM
   ============================================================ */

window.findRiverProductsForProblem = function(
    problem
) {

    const normalized =
        String(problem || "")
            .trim()
            .toLowerCase();

    if (!normalized) {
        return [];
    }

    return window
        .getRiverProducts()
        .filter(product => {

            const tags =
                product.problemTags || [];

            return tags.some(
                tag =>
                    String(tag)
                        .toLowerCase()
                        .includes(normalized)
            );

        });

};


/* ============================================================
   🟢 UPGRADE: RELATED PROJECTS FOR PRODUCT
   ============================================================ */

window.getRiverProductProjects = function(
    productSlug
) {

    const product =
        window.getRiverProduct(
            productSlug
        );

    if (!product) {
        return [];
    }

    return (product.relatedProjects || [])
        .map(
            slug =>
                window.getRiverProject(
                    slug
                )
        )
        .filter(Boolean);

};


/* ============================================================
   🟢 UPGRADE: RELATED PRODUCTS
   ============================================================ */

window.getRelatedRiverProducts = function(
    productSlug,
    limit = 3
) {

    const product =
        window.getRiverProduct(
            productSlug
        );

    if (!product) {
        return [];
    }

    const productCapabilities =
        product.capabilities || [];

    const productIndustries =
        product.industries || [];

    const productTags =
        product.problemTags || [];


    return window
        .getRiverProducts()
        .filter(
            item =>
                item.slug !== product.slug
        )
        .map(item => {

            let score = 0;

            const capabilities =
                item.capabilities || [];

            const industries =
                item.industries || [];

            const tags =
                item.problemTags || [];


            score +=
                capabilities.filter(
                    capability =>
                        productCapabilities.includes(
                            capability
                        )
                ).length * 3;


            score +=
                industries.filter(
                    industry =>
                        productIndustries.includes(
                            industry
                        )
                ).length * 4;


            score +=
                tags.filter(
                    tag =>
                        productTags.includes(
                            tag
                        )
                ).length * 5;


            if (
                item.category ===
                product.category
            ) {

                score += 3;

            }


            return {

                product: item,

                score

            };

        })
        .sort(
            (a, b) =>
                b.score - a.score
        )
        .slice(0, limit)
        .map(
            item =>
                item.product
        );

};


/* ============================================================
   🟢 UPGRADE: SEARCH PROJECTS
   ============================================================ */

window.searchRiverProjects = function(
    query
) {

    const search =
        String(query || "")
            .trim()
            .toLowerCase();

    if (!search) {
        return window.getRiverProjects();
    }

    return window
        .getRiverProjects()
        .filter(project => {

            const searchable = [

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

            return searchable.includes(
                search
            );

        });

};


/* ============================================================
   🟢 UPGRADE: RELATED PROJECTS
   ============================================================ */

window.getRelatedRiverProjects = function(
    slug,
    limit = 3
) {

    const project =
        window.getRiverProject(slug);

    if (!project) {
        return [];
    }

    const scored = window
        .getRiverProjects()
        .filter(
            item =>
                item.slug !== slug
        )
        .map(item => {

            let score = 0;

            const projectTech =
                project.technologies || [];

            const itemTech =
                item.technologies || [];

            const projectProblems =
                project.problems || [];

            const itemProblems =
                item.problems || [];

            const projectIndustry =
                project.industry || [];

            const itemIndustry =
                item.industry || [];


            score +=
                itemTech.filter(
                    x =>
                        projectTech.includes(x)
                ).length * 3;


            score +=
                itemProblems.filter(
                    x =>
                        projectProblems.includes(x)
                ).length * 4;


            score +=
                itemIndustry.filter(
                    x =>
                        projectIndustry.includes(x)
                ).length * 5;


            if (
                item.type ===
                project.type
            ) {

                score += 2;

            }


            return {

                project: item,

                score

            };

        })
        .sort(
            (a, b) =>
                b.score - a.score
        );


    return scored
        .slice(0, limit)
        .map(
            item =>
                item.project
        );

};


/* ============================================================
   🟢 UPGRADE: DEBUG PROJECTS + PRODUCTS
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
                "Type:",
                project.type
            );

            console.log(
                "Industry:",
                project.industry
            );

            console.log(
                "Technologies:",
                project.technologies
            );

            console.log(
                "Capabilities:",
                project.capabilities
            );

            console.log(
                "Problems:",
                project.problems
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


/* ============================================================
   🟢 UPGRADE: DEBUG PRODUCTS
   ============================================================ */

window.debugRiverProducts = function() {

    console.group(
        "RIVER PRODUCT REGISTRY"
    );

    Object.entries(
        window.RIVER_PRODUCTS
    ).forEach(
        ([slug, product]) => {

            console.group(
                product.title
            );

            console.log(
                "Slug:",
                slug
            );

            console.log(
                "Category:",
                product.category
            );

            console.log(
                "Status:",
                product.status
            );

            console.log(
                "Capabilities:",
                product.capabilities
            );

            console.log(
                "Features:",
                product.features
            );

            console.log(
                "Media:",
                product.media
            );

            console.log(
                "Related Projects:",
                product.relatedProjects
            );

            console.groupEnd();

        }
    );

    console.groupEnd();

};