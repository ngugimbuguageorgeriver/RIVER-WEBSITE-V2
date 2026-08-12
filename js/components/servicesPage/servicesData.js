/* ============================================================
   RIVER SERVICES DATA REGISTRY
   ============================================================

   🟢 UPGRADE

   SINGLE SOURCE OF TRUTH FOR:

   - SERVICE FAMILIES
   - SERVICES
   - PROBLEMS
   - CAPABILITIES
   - TECHNOLOGIES
   - PROCESS
   - RELATED PRODUCTS
   - RELATED PROJECTS
   - FAQS

   Architecture:

   RIVER
   |
   |-- RIVER_PROJECTS
   |
   |-- RIVER_PRODUCTS
   |
   |-- RIVER_SERVICES
   |
   |-- Shared Helpers

   Products answer:

   "What can River package, customize,
    deploy or build?"

   Services answer:

   "What technical work does River
    perform for your organization?"

   ============================================================ */


/* ============================================================
   🟢 UPGRADE 01: SERVICE FAMILIES
   ============================================================ */

   window.RIVER_SERVICE_FAMILIES = {

    BUILD: {

        id: "BUILD",

        number: "01",

        title: "Build",

        shortTitle: "Build",

        description:
            "Create technology built around your business.",

        proposition:
            "Create something new.",

        philosophy:
            "Start with your requirements, not a pre-existing River product."

    },


    IMPROVE: {

        id: "IMPROVE",

        number: "02",

        title: "Improve",

        shortTitle: "Improve",

        description:
            "Make existing technology faster, better and more effective.",

        proposition:
            "Make existing technology better.",

        philosophy:
            "Your system doesn't always need to be replaced. Sometimes it needs to be improved."

    },


    MOVE: {

        id: "MOVE",

        number: "03",

        title: "Move",

        shortTitle: "Move",

        description:
            "Move your technology without losing what matters.",

        proposition:
            "Migrate technology and data.",

        philosophy:
            "Migration is treated as engineering work, not simply moving files."

    },


    CONNECT: {

        id: "CONNECT",

        number: "04",

        title: "Connect",

        shortTitle: "Connect",

        description:
            "Make your systems talk to each other.",

        proposition:
            "Integrate systems and services.",

        philosophy:
            "Your systems shouldn't work in isolation."

    },


    PROTECT: {

        id: "PROTECT",

        number: "05",

        title: "Protect",

        shortTitle: "Protect",

        description:
            "Keep your technology secure, recoverable and resilient.",

        proposition:
            "Improve security, resilience and recovery.",

        philosophy:
            "Technical security and resilience should be considered as part of the operating environment."

    },


    OPERATE: {

        id: "OPERATE",

        number: "06",

        title: "Operate",

        shortTitle: "Operate",

        description:
            "Keep your technology running after it goes live.",

        proposition:
            "Maintain, monitor and support.",

        philosophy:
            "Your team shouldn't have to become a software engineering team just to keep your systems running."

    },


    DEPLOY: {

        id: "DEPLOY",

        number: "07",

        title: "Deploy",

        shortTitle: "Deploy",

        description:
            "Take technology from development to production.",

        proposition:
            "Put technology into production.",

        philosophy:
            "Development, staging, testing, production and monitoring should form one delivery path."

    },


    ASSESS: {

        id: "ASSESS",

        number: "08",

        title: "Assess",

        shortTitle: "Assess",

        description:
            "Understand the problem before deciding what to build.",

        proposition:
            "Understand what is wrong and what should change.",

        philosophy:
            "When the problem isn't clear, River investigates first and recommends the appropriate intervention."

    }

};


/* ============================================================
   🟢 UPGRADE 02: SERVICE REGISTRY
   ============================================================ */

window.RIVER_SERVICES = {


    /* ========================================================
       BUILD
       ======================================================== */

    "custom-software-development": {

        slug: "custom-software-development",

        title: "Custom Software Development",

        shortTitle: "Custom Software",

        family: "BUILD",

        category: "Software Development",

        tagline:
            "Software designed around the way your organization actually works.",

        description:
            "River designs and develops software around your requirements, workflows, users and technical environment.",

        problems: [
            "We need something built",
            "Our existing tools don't fit our workflow",
            "We need a system designed around our business",
            "We need to replace manual processes"
        ],

        capabilities: [
            "Requirements discovery",
            "Architecture",
            "UX / UI",
            "Frontend development",
            "Backend development",
            "API development",
            "Database design",
            "Testing",
            "Deployment"
        ],

        technologies: [
            "JavaScript",
            "Web Applications",
            "REST APIs",
            "Databases",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Professional Services",
            "Retail",
            "Operations"
        ],

        process: [
            "Discovery",
            "Requirements",
            "Architecture",
            "UX / UI",
            "Development",
            "Testing",
            "Deployment",
            "Support"
        ],

        deliverables: [
            "Technical architecture",
            "User interfaces",
            "Application functionality",
            "API integrations",
            "Database systems",
            "Testing",
            "Deployment"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: [
            {
                question: "Can River build a system from scratch?",
                answer:
                    "Yes. Custom software development begins with your requirements rather than an existing River product."
            },
            {
                question: "Can the system integrate with our existing software?",
                answer:
                    "Yes. Integration can be incorporated into the architecture where required."
            }
        ]

    },


    "web-application-development": {

        slug: "web-application-development",

        title: "Web Application Development",

        shortTitle: "Web Applications",

        family: "BUILD",

        category: "Software Development",

        tagline:
            "Web applications built around real workflows and users.",

        description:
            "River builds responsive web applications that combine user interfaces, application logic, data and integrations.",

        problems: [
            "We need a web application",
            "Our business needs a digital workflow",
            "Our current web system is limited",
            "We need a customer-facing application"
        ],

        capabilities: [
            "Responsive interfaces",
            "Application architecture",
            "Authentication",
            "Business workflows",
            "API integration",
            "Database integration"
        ],

        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "REST APIs",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Retail",
            "Professional Services",
            "Digital Products"
        ],

        process: [
            "Discovery",
            "UX / UI",
            "Architecture",
            "Development",
            "Testing",
            "Deployment"
        ],

        deliverables: [
            "Responsive application",
            "Frontend",
            "Backend",
            "API integration",
            "Database integration",
            "Deployment"
        ],

        relatedProducts: [
            "customer-portal"
        ],

        relatedProjects: [],

        faq: []

    },


    "mobile-application-development": {

        slug: "mobile-application-development",

        title: "Mobile Application Development",

        shortTitle: "Mobile Applications",

        family: "BUILD",

        category: "Software Development",

        tagline:
            "Mobile experiences designed around the way users actually work.",

        description:
            "River develops mobile-oriented digital experiences for customer, operational and internal workflows.",

        problems: [
            "We need a mobile application",
            "Our users need mobile access",
            "Our existing system isn't mobile friendly"
        ],

        capabilities: [
            "Mobile UX",
            "Authentication",
            "API integration",
            "Notifications",
            "Offline experience"
        ],

        technologies: [
            "JavaScript",
            "PWA",
            "APIs",
            "Databases"
        ],

        industries: [
            "Mobile",
            "Digital Products",
            "Enterprise",
            "Operations"
        ],

        process: [
            "Discovery",
            "UX",
            "Architecture",
            "Development",
            "Testing",
            "Deployment"
        ],

        deliverables: [
            "Mobile experience",
            "Application interface",
            "API integration",
            "Authentication",
            "Deployment"
        ],

        relatedProducts: [],

        relatedProjects: [
            "mobile-app"
        ],

        faq: []

    },


    "custom-business-systems": {

        slug: "custom-business-systems",

        title: "Custom Business Systems",

        shortTitle: "Business Systems",

        family: "BUILD",

        category: "Business Systems",

        tagline:
            "Centralize workflows, information and operational processes.",

        description:
            "River builds internal business systems around organizational workflows, users, data and operational requirements.",

        problems: [
            "We have disconnected spreadsheets",
            "Our workflows are manual",
            "Our teams use too many separate tools",
            "We need one operational system"
        ],

        capabilities: [
            "Workflow mapping",
            "Business logic",
            "Role-based access",
            "Dashboards",
            "Reporting",
            "Data management",
            "API integration"
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

        deliverables: [
            "Business workflows",
            "User management",
            "Operational dashboards",
            "Reporting",
            "Data management",
            "Integrations"
        ],

        relatedProducts: [
            "business-os"
        ],

        relatedProjects: [
            "enterprise-systems"
        ],

        faq: []

    },


    "internal-tools-platforms": {

        slug: "internal-tools-platforms",

        title: "Internal Tools & Platforms",

        shortTitle: "Internal Platforms",

        family: "BUILD",

        category: "Business Systems",

        tagline:
            "Give internal teams technology designed around their actual work.",

        description:
            "River creates internal tools and platforms that replace fragmented operational processes with structured digital workflows.",

        problems: [
            "Our internal processes are manual",
            "Teams rely on spreadsheets",
            "We need an internal dashboard",
            "We need a centralized workflow"
        ],

        capabilities: [
            "Internal dashboards",
            "Workflow automation",
            "Role management",
            "Reporting",
            "Search",
            "Data management"
        ],

        technologies: [
            "JavaScript",
            "REST APIs",
            "Databases",
            "Authentication"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Professional Services"
        ],

        process: [
            "Discovery",
            "Workflow Mapping",
            "Architecture",
            "Development",
            "Testing",
            "Deployment"
        ],

        deliverables: [
            "Internal platform",
            "Dashboard",
            "Workflow system",
            "Reporting",
            "User management"
        ],

        relatedProducts: [
            "business-os"
        ],

        relatedProjects: [],

        faq: []

    },


    "api-development": {

        slug: "api-development",

        title: "API Development",

        shortTitle: "API Development",

        family: "BUILD",

        category: "Integration",

        tagline:
            "Structured application interfaces for systems that need to exchange data.",

        description:
            "River designs and develops APIs that expose application capabilities and data to other systems and services.",

        problems: [
            "We need an API",
            "Our application needs to communicate with another system",
            "We need structured access to our data"
        ],

        capabilities: [
            "API architecture",
            "REST APIs",
            "Authentication",
            "Authorization",
            "Data exchange",
            "Integration"
        ],

        technologies: [
            "REST API",
            "JavaScript",
            "JSON",
            "Databases",
            "Authentication"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Discovery",
            "API Design",
            "Architecture",
            "Development",
            "Testing",
            "Deployment"
        ],

        deliverables: [
            "API architecture",
            "Endpoints",
            "Authentication",
            "Documentation",
            "Testing"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "custom-portals": {

        slug: "custom-portals",

        title: "Custom Portals",

        shortTitle: "Custom Portals",

        family: "BUILD",

        category: "Digital Platforms",

        tagline:
            "Secure digital spaces for customers, partners or internal teams.",

        description:
            "River develops portals that bring users, information, documents and workflows together in one controlled environment.",

        problems: [
            "Customers need self-service access",
            "Partners need a secure workspace",
            "We need a user portal",
            "Information is scattered across email"
        ],

        capabilities: [
            "Authentication",
            "Authorization",
            "Customer management",
            "Document management",
            "Notifications",
            "Dashboards",
            "API integration"
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

        process: [
            "Discovery",
            "Journey Mapping",
            "Architecture",
            "UX / UI",
            "Development",
            "Testing",
            "Deployment"
        ],

        deliverables: [
            "Portal interface",
            "Authentication",
            "User management",
            "Workflow",
            "Document access",
            "Notifications"
        ],

        relatedProducts: [
            "customer-portal"
        ],

        relatedProjects: [],

        faq: []

    },


    "workflow-automation": {

        slug: "workflow-automation",

        title: "Workflow Automation",

        shortTitle: "Workflow Automation",

        family: "BUILD",

        category: "Automation",

        tagline:
            "Turn repetitive business processes into structured digital workflows.",

        description:
            "River maps manual workflows and converts suitable processes into software-driven workflows.",

        problems: [
            "Our team repeats the same manual tasks",
            "Approvals happen through email",
            "Our workflow is difficult to track",
            "We need to automate operations"
        ],

        capabilities: [
            "Workflow mapping",
            "Business rules",
            "Automation",
            "Notifications",
            "Approvals",
            "Reporting",
            "Integration"
        ],

        technologies: [
            "JavaScript",
            "APIs",
            "Databases",
            "Webhooks"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Professional Services",
            "Retail"
        ],

        process: [
            "Discovery",
            "Workflow Mapping",
            "Architecture",
            "Automation Design",
            "Development",
            "Testing",
            "Deployment"
        ],

        deliverables: [
            "Workflow architecture",
            "Automated processes",
            "Notifications",
            "Integrations",
            "Reporting"
        ],

        relatedProducts: [
            "business-os"
        ],

        relatedProjects: [],

        faq: []

    },


    /* ========================================================
       IMPROVE
       ======================================================== */

    "website-speed-optimization": {

        slug: "website-speed-optimization",

        title: "Website Speed Optimization",

        shortTitle: "Website Speed",

        family: "IMPROVE",

        category: "Performance",

        tagline:
            "Make your website faster, lighter and more responsive.",

        description:
            "River investigates website performance bottlenecks and improves the parts of the experience that slow users and business workflows down.",

        problems: [
            "My website is slow",
            "Pages take too long to load",
            "Our website feels heavy",
            "Users are abandoning pages"
        ],

        capabilities: [
            "Performance analysis",
            "Asset optimization",
            "Frontend optimization",
            "Lazy loading",
            "Code optimization",
            "Performance measurement"
        ],

        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "Web Performance APIs"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services",
            "Digital Products"
        ],

        process: [
            "Assessment",
            "Performance Audit",
            "Optimization",
            "Validation",
            "Monitoring"
        ],

        deliverables: [
            "Performance findings",
            "Optimization plan",
            "Frontend improvements",
            "Asset improvements",
            "Performance validation"
        ],

        relatedProducts: [],

        relatedProjects: [
            "web-ecommerce"
        ],

        faq: []

    },


    "application-performance-optimization": {

        slug: "application-performance-optimization",

        title: "Application Performance Optimization",

        shortTitle: "Application Performance",

        family: "IMPROVE",

        category: "Performance",

        tagline:
            "Find and remove the bottlenecks slowing your application down.",

        description:
            "River analyzes application behavior and improves performance across the frontend, backend, database and infrastructure layers.",

        problems: [
            "Our application is slow",
            "Users experience delays",
            "Performance degrades under load",
            "The application feels unreliable"
        ],

        capabilities: [
            "Performance profiling",
            "Frontend optimization",
            "Backend optimization",
            "Database optimization",
            "Caching",
            "Load analysis"
        ],

        technologies: [
            "JavaScript",
            "APIs",
            "Databases",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Assessment",
            "Profiling",
            "Optimization",
            "Load Testing",
            "Validation",
            "Monitoring"
        ],

        deliverables: [
            "Performance assessment",
            "Optimization recommendations",
            "Code improvements",
            "Database improvements",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "database-optimization": {

        slug: "database-optimization",

        title: "Database Optimization",

        shortTitle: "Database Optimization",

        family: "IMPROVE",

        category: "Data & Performance",

        tagline:
            "Improve the database layer supporting your applications.",

        description:
            "River investigates database performance, queries, structures and usage patterns to identify opportunities for improvement.",

        problems: [
            "Database queries are slow",
            "Reports take too long",
            "Our application slows down as data grows",
            "Database performance is unpredictable"
        ],

        capabilities: [
            "Query analysis",
            "Index optimization",
            "Schema review",
            "Performance profiling",
            "Database architecture"
        ],

        technologies: [
            "SQL",
            "Databases",
            "APIs",
            "Application Backends"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Assessment",
            "Database Analysis",
            "Optimization",
            "Validation",
            "Monitoring"
        ],

        deliverables: [
            "Database findings",
            "Optimization recommendations",
            "Query improvements",
            "Structural improvements"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "frontend-optimization": {

        slug: "frontend-optimization",

        title: "Frontend Optimization",

        shortTitle: "Frontend Optimization",

        family: "IMPROVE",

        category: "Frontend",

        tagline:
            "Improve the speed, responsiveness and maintainability of the user interface.",

        description:
            "River improves frontend implementation, asset delivery, rendering and interaction performance.",

        problems: [
            "Our interface feels slow",
            "Pages are heavy",
            "Animations affect performance",
            "The frontend is difficult to maintain"
        ],

        capabilities: [
            "Rendering optimization",
            "Asset optimization",
            "JavaScript optimization",
            "CSS optimization",
            "Component optimization"
        ],

        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "GSAP"
        ],

        industries: [
            "Digital Products",
            "Retail",
            "eCommerce"
        ],

        process: [
            "Audit",
            "Analysis",
            "Optimization",
            "Testing",
            "Validation"
        ],

        deliverables: [
            "Frontend improvements",
            "Performance improvements",
            "Refactoring",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "backend-optimization": {

        slug: "backend-optimization",

        title: "Backend Optimization",

        shortTitle: "Backend Optimization",

        family: "IMPROVE",

        category: "Backend",

        tagline:
            "Improve the systems and logic operating behind your application.",

        description:
            "River analyzes backend services, APIs, business logic and data access to improve performance and maintainability.",

        problems: [
            "Our backend is slow",
            "API requests take too long",
            "The system struggles under load",
            "Backend code is difficult to maintain"
        ],

        capabilities: [
            "API optimization",
            "Business logic optimization",
            "Database access optimization",
            "Caching",
            "Refactoring"
        ],

        technologies: [
            "JavaScript",
            "REST APIs",
            "Databases",
            "Server Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Assessment",
            "Profiling",
            "Optimization",
            "Testing",
            "Deployment"
        ],

        deliverables: [
            "Backend assessment",
            "Optimization",
            "Refactoring",
            "Performance validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "ux-ui-improvement": {

        slug: "ux-ui-improvement",

        title: "UX/UI Improvement",

        shortTitle: "UX / UI Improvement",

        family: "IMPROVE",

        category: "Experience",

        tagline:
            "Make existing digital experiences clearer, easier and more effective.",

        description:
            "River reviews existing interfaces and user journeys to identify opportunities to improve usability and clarity.",

        problems: [
            "Users struggle with our interface",
            "Our website feels confusing",
            "Customers abandon workflows",
            "Our existing design needs improvement"
        ],

        capabilities: [
            "UX review",
            "UI review",
            "Journey analysis",
            "Interaction design",
            "Responsive design"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Design Systems"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services",
            "Digital Products"
        ],

        process: [
            "Audit",
            "Journey Analysis",
            "UX Recommendations",
            "UI Improvements",
            "Validation"
        ],

        deliverables: [
            "UX findings",
            "Interface improvements",
            "Responsive improvements",
            "Interaction improvements"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "technical-seo": {

        slug: "technical-seo",

        title: "Technical SEO",

        shortTitle: "Technical SEO",

        family: "IMPROVE",

        category: "Web",

        tagline:
            "Improve the technical foundations that help search engines understand your website.",

        description:
            "River reviews technical website structure, performance and implementation to address technical SEO opportunities.",

        problems: [
            "Our website isn't performing well in search",
            "Search engines struggle to understand our site",
            "Our website has technical SEO issues"
        ],

        capabilities: [
            "Technical audit",
            "Performance review",
            "Metadata review",
            "Structured content",
            "Indexing review"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web Standards"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services"
        ],

        process: [
            "Audit",
            "Technical Review",
            "Recommendations",
            "Implementation",
            "Validation"
        ],

        deliverables: [
            "Technical SEO audit",
            "Implementation recommendations",
            "Technical improvements"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "legacy-system-modernization": {

        slug: "legacy-system-modernization",

        title: "Legacy System Modernization",

        shortTitle: "Legacy Modernization",

        family: "IMPROVE",

        category: "Modernization",

        tagline:
            "Modernize older systems without unnecessarily discarding what still works.",

        description:
            "River assesses legacy technology and develops a practical path toward improved architecture, maintainability and capability.",

        problems: [
            "Our old system needs modernization",
            "Our software is difficult to maintain",
            "Our technology is outdated",
            "We cannot easily integrate our old system"
        ],

        capabilities: [
            "Legacy assessment",
            "Architecture review",
            "Refactoring",
            "Migration planning",
            "Integration",
            "Incremental modernization"
        ],

        technologies: [
            "APIs",
            "Databases",
            "JavaScript",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Professional Services"
        ],

        process: [
            "Assessment",
            "Architecture Review",
            "Modernization Plan",
            "Implementation",
            "Validation",
            "Migration"
        ],

        deliverables: [
            "Legacy assessment",
            "Modernization roadmap",
            "Architecture improvements",
            "Refactoring",
            "Migration"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "codebase-refactoring": {

        slug: "codebase-refactoring",

        title: "Codebase Refactoring",

        shortTitle: "Code Refactoring",

        family: "IMPROVE",

        category: "Software Engineering",

        tagline:
            "Make existing software easier to understand, maintain and evolve.",

        description:
            "River restructures existing code where technical debt, complexity or maintainability are limiting further development.",

        problems: [
            "Our codebase is difficult to maintain",
            "Small changes keep breaking things",
            "Development is becoming slower",
            "Technical debt is growing"
        ],

        capabilities: [
            "Code review",
            "Refactoring",
            "Component restructuring",
            "Architecture improvement",
            "Technical debt reduction"
        ],

        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "APIs"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Assessment",
            "Code Review",
            "Refactoring Plan",
            "Implementation",
            "Testing"
        ],

        deliverables: [
            "Codebase assessment",
            "Refactoring",
            "Architecture improvements",
            "Testing"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "accessibility-improvements": {

        slug: "accessibility-improvements",

        title: "Accessibility Improvements",

        shortTitle: "Accessibility",

        family: "IMPROVE",

        category: "Web Experience",

        tagline:
            "Make digital experiences more usable across different users and contexts.",

        description:
            "River reviews and improves accessibility considerations across digital interfaces.",

        problems: [
            "Our website is difficult for some users",
            "We need better accessibility",
            "Our interface needs accessibility improvements"
        ],

        capabilities: [
            "Accessibility review",
            "Semantic HTML",
            "Keyboard interaction",
            "Contrast review",
            "Responsive improvements"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web Standards"
        ],

        industries: [
            "Professional Services",
            "Enterprise",
            "Retail",
            "Digital Products"
        ],

        process: [
            "Audit",
            "Review",
            "Implementation",
            "Testing",
            "Validation"
        ],

        deliverables: [
            "Accessibility findings",
            "Implementation improvements",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    /* ========================================================
       MOVE
       ======================================================== */

    "cloud-migration": {

        slug: "cloud-migration",

        title: "Cloud Migration",

        shortTitle: "Cloud Migration",

        family: "MOVE",

        category: "Migration",

        tagline:
            "Move systems to the cloud without losing control of what matters.",

        description:
            "River assesses the existing environment, plans the migration and validates the resulting cloud deployment.",

        problems: [
            "My system needs to move to the cloud",
            "Our infrastructure is outdated",
            "We need a cloud migration plan"
        ],

        capabilities: [
            "Migration assessment",
            "Cloud architecture",
            "Data migration",
            "Application migration",
            "Validation",
            "Cutover planning"
        ],

        technologies: [
            "Cloud Infrastructure",
            "Databases",
            "APIs",
            "Containers"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Plan",
            "Migrate",
            "Validate",
            "Switch",
            "Monitor"
        ],

        deliverables: [
            "Migration assessment",
            "Cloud architecture",
            "Migration plan",
            "Migrated systems",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [
            "cloud-devops"
        ],

        faq: []

    },


    "server-migration": {

        slug: "server-migration",

        title: "Server Migration",

        shortTitle: "Server Migration",

        family: "MOVE",

        category: "Infrastructure",

        tagline:
            "Move server environments with a controlled technical migration process.",

        description:
            "River plans and executes server migrations while considering application dependencies, data and production continuity.",

        problems: [
            "Our server environment needs to move",
            "We need new infrastructure",
            "Our existing server is no longer suitable"
        ],

        capabilities: [
            "Infrastructure assessment",
            "Server configuration",
            "Migration planning",
            "Data migration",
            "Validation",
            "Cutover"
        ],

        technologies: [
            "Servers",
            "Linux",
            "Cloud Infrastructure",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Operations"
        ],

        process: [
            "Assess",
            "Plan",
            "Prepare",
            "Migrate",
            "Validate",
            "Switch",
            "Monitor"
        ],

        deliverables: [
            "Migration plan",
            "Server configuration",
            "Migration",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "website-migration": {

        slug: "website-migration",

        title: "Website Migration",

        shortTitle: "Website Migration",

        family: "MOVE",

        category: "Web",

        tagline:
            "Move your website without unnecessarily disrupting the experience.",

        description:
            "River plans website migrations across hosting, platforms, domains and infrastructure.",

        problems: [
            "We need to move our website",
            "We are changing hosting",
            "We are changing platforms"
        ],

        capabilities: [
            "Hosting migration",
            "Platform migration",
            "Domain configuration",
            "Content migration",
            "Validation"
        ],

        technologies: [
            "Web Hosting",
            "DNS",
            "HTML",
            "JavaScript",
            "Databases"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Plan",
            "Prepare",
            "Migrate",
            "Validate",
            "Switch",
            "Monitor"
        ],

        deliverables: [
            "Migration plan",
            "Migrated website",
            "Domain configuration",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [
            "web-ecommerce"
        ],

        faq: []

    },


    "database-migration": {

        slug: "database-migration",

        title: "Database Migration",

        shortTitle: "Database Migration",

        family: "MOVE",

        category: "Data",

        tagline:
            "Move data carefully, validate it and maintain operational continuity.",

        description:
            "River plans and executes database migrations with attention to structure, data integrity and application dependencies.",

        problems: [
            "We need to move our database",
            "Our database platform is changing",
            "We need to consolidate databases"
        ],

        capabilities: [
            "Database assessment",
            "Schema mapping",
            "Data migration",
            "Validation",
            "Cutover planning"
        ],

        technologies: [
            "SQL",
            "Databases",
            "APIs"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Plan",
            "Map",
            "Migrate",
            "Validate",
            "Switch",
            "Monitor"
        ],

        deliverables: [
            "Migration plan",
            "Data mapping",
            "Migrated database",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "platform-migration": {

        slug: "platform-migration",

        title: "Platform Migration",

        shortTitle: "Platform Migration",

        family: "MOVE",

        category: "Migration",

        tagline:
            "Move applications and workflows from one platform to another.",

        description:
            "River evaluates platform dependencies and develops a controlled migration path.",

        problems: [
            "We are changing platforms",
            "Our current platform is limiting us",
            "We need to move our application"
        ],

        capabilities: [
            "Platform assessment",
            "Migration planning",
            "Data migration",
            "Application migration",
            "Validation"
        ],

        technologies: [
            "Web Platforms",
            "APIs",
            "Databases",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Retail"
        ],

        process: [
            "Assess",
            "Plan",
            "Migrate",
            "Validate",
            "Switch",
            "Monitor"
        ],

        deliverables: [
            "Platform assessment",
            "Migration architecture",
            "Migrated application",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "hosting-migration": {

        slug: "hosting-migration",

        title: "Hosting Migration",

        shortTitle: "Hosting Migration",

        family: "MOVE",

        category: "Infrastructure",

        tagline:
            "Move hosting environments with a controlled technical transition.",

        description:
            "River migrates websites and applications between hosting environments while considering domains, infrastructure and production continuity.",

        problems: [
            "Our hosting provider isn't suitable",
            "We need better infrastructure",
            "We need to move our hosting"
        ],

        capabilities: [
            "Hosting assessment",
            "Infrastructure configuration",
            "DNS",
            "Deployment",
            "Validation"
        ],

        technologies: [
            "Web Hosting",
            "DNS",
            "Servers",
            "Cloud Infrastructure"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Plan",
            "Prepare",
            "Migrate",
            "Validate",
            "Switch"
        ],

        deliverables: [
            "Hosting assessment",
            "Migration plan",
            "Infrastructure setup",
            "Deployment"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "application-migration": {

        slug: "application-migration",

        title: "Application Migration",

        shortTitle: "Application Migration",

        family: "MOVE",

        category: "Software",

        tagline:
            "Move applications while preserving the workflows and capabilities that matter.",

        description:
            "River plans application migrations across infrastructure, platforms and environments.",

        problems: [
            "Our application needs to move",
            "We are changing infrastructure",
            "Our current environment is limiting us"
        ],

        capabilities: [
            "Application assessment",
            "Architecture review",
            "Environment preparation",
            "Migration",
            "Testing",
            "Cutover"
        ],

        technologies: [
            "JavaScript",
            "APIs",
            "Databases",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Plan",
            "Prepare",
            "Migrate",
            "Validate",
            "Switch",
            "Monitor"
        ],

        deliverables: [
            "Migration assessment",
            "Migration plan",
            "Application migration",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "data-migration": {

        slug: "data-migration",

        title: "Data Migration",

        shortTitle: "Data Migration",

        family: "MOVE",

        category: "Data",

        tagline:
            "Move business data between systems with structure and validation.",

        description:
            "River maps, transforms, migrates and validates data between systems.",

        problems: [
            "We need to move our data",
            "We're replacing an existing system",
            "We need to consolidate data"
        ],

        capabilities: [
            "Data mapping",
            "Transformation",
            "Migration",
            "Validation",
            "Data integrity"
        ],

        technologies: [
            "Databases",
            "SQL",
            "APIs",
            "Data Processing"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Map",
            "Plan",
            "Migrate",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Data map",
            "Migration plan",
            "Migrated data",
            "Validation report"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    /* ========================================================
       CONNECT
       ======================================================== */

    "api-integration": {

        slug: "api-integration",

        title: "API Integration",

        shortTitle: "API Integration",

        family: "CONNECT",

        category: "Integration",

        tagline:
            "Connect applications through structured APIs.",

        description:
            "River connects systems and services through APIs so information and workflows can move between them.",

        problems: [
            "Our systems don't communicate",
            "We need to connect two applications",
            "We need to exchange data"
        ],

        capabilities: [
            "API integration",
            "Authentication",
            "Data mapping",
            "Error handling",
            "Monitoring"
        ],

        technologies: [
            "REST APIs",
            "JSON",
            "Webhooks",
            "JavaScript"
        ],

        industries: [
            "Enterprise",
            "Retail",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Map",
            "Design",
            "Integrate",
            "Test",
            "Monitor"
        ],

        deliverables: [
            "Integration architecture",
            "API connections",
            "Data mapping",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "payment-integration": {

        slug: "payment-integration",

        title: "Payment Integration",

        shortTitle: "Payment Integration",

        family: "CONNECT",

        category: "Integration",

        tagline:
            "Connect digital products and business systems to payment services.",

        description:
            "River integrates payment services into websites, applications and business workflows.",

        problems: [
            "We need online payments",
            "Our payment system needs integration",
            "Payments don't connect to our business workflow"
        ],

        capabilities: [
            "Payment API integration",
            "Transaction workflows",
            "Callbacks",
            "Webhooks",
            "Validation"
        ],

        technologies: [
            "REST APIs",
            "Webhooks",
            "JavaScript",
            "Authentication"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Design",
            "Integrate",
            "Test",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Payment integration",
            "Transaction workflow",
            "Webhook handling",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "third-party-integrations": {

        slug: "third-party-integrations",

        title: "Third-Party Integrations",

        shortTitle: "Third-Party Integrations",

        family: "CONNECT",

        category: "Integration",

        tagline:
            "Connect the external services your business already relies on.",

        description:
            "River integrates external platforms and services into existing websites, applications and business systems.",

        problems: [
            "We need to connect an external service",
            "Our software needs a third-party integration",
            "We're manually moving information between systems"
        ],

        capabilities: [
            "API integration",
            "Authentication",
            "Data synchronization",
            "Webhooks",
            "Error handling"
        ],

        technologies: [
            "REST APIs",
            "Webhooks",
            "JSON",
            "OAuth"
        ],

        industries: [
            "Enterprise",
            "Retail",
            "Professional Services",
            "Operations"
        ],

        process: [
            "Assess",
            "Map",
            "Design",
            "Integrate",
            "Test",
            "Monitor"
        ],

        deliverables: [
            "Integration architecture",
            "API integration",
            "Data mapping",
            "Monitoring"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "system-integration": {

        slug: "system-integration",

        title: "System Integration",

        shortTitle: "System Integration",

        family: "CONNECT",

        category: "Systems Engineering",

        tagline:
            "Make your systems work together instead of in isolation.",

        description:
            "River connects applications, databases, services and business systems so information and workflows can move between them.",

        problems: [
            "Our systems don't communicate",
            "Our teams enter the same information multiple times",
            "We have disconnected software",
            "Our business workflows cross several systems"
        ],

        capabilities: [
            "System architecture",
            "API integration",
            "Data synchronization",
            "Workflow integration",
            "Authentication",
            "Event integration"
        ],

        technologies: [
            "REST APIs",
            "Webhooks",
            "Databases",
            "Authentication"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Retail",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Map",
            "Architect",
            "Integrate",
            "Test",
            "Monitor"
        ],

        deliverables: [
            "Integration architecture",
            "System connections",
            "Data synchronization",
            "Workflow integration",
            "Monitoring"
        ],

        relatedProducts: [
            "business-os",
            "inventory-os"
        ],

        relatedProjects: [
            "enterprise-systems",
            "erp-solution"
        ],

        faq: [
            {
                question: "Can River integrate systems we didn't build?",
                answer:
                    "Yes. Integration work can involve existing third-party or legacy systems where suitable interfaces are available."
            }
        ]

    },


    "erp-crm-integration": {

        slug: "erp-crm-integration",

        title: "ERP / CRM Integration",

        shortTitle: "ERP / CRM Integration",

        family: "CONNECT",

        category: "Business Systems",

        tagline:
            "Connect customer, operational and business information.",

        description:
            "River integrates ERP, CRM and other operational systems to reduce disconnected workflows and duplicated data.",

        problems: [
            "Our CRM and ERP don't communicate",
            "Customer data is duplicated",
            "Teams work from different systems"
        ],

        capabilities: [
            "System mapping",
            "API integration",
            "Data synchronization",
            "Workflow integration",
            "Authentication"
        ],

        technologies: [
            "REST APIs",
            "Webhooks",
            "Databases",
            "Authentication"
        ],

        industries: [
            "Enterprise",
            "Retail",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Map",
            "Architect",
            "Integrate",
            "Test",
            "Monitor"
        ],

        deliverables: [
            "Integration architecture",
            "Data synchronization",
            "Workflow integration",
            "Validation"
        ],

        relatedProducts: [
            "business-os",
            "inventory-os"
        ],

        relatedProjects: [
            "erp-solution"
        ],

        faq: []

    },


    "data-synchronization": {

        slug: "data-synchronization",

        title: "Data Synchronization",

        shortTitle: "Data Synchronization",

        family: "CONNECT",

        category: "Data Integration",

        tagline:
            "Keep important information consistent across systems.",

        description:
            "River designs synchronization workflows between systems where business data needs to move reliably.",

        problems: [
            "The same information exists in multiple systems",
            "Data gets out of sync",
            "Teams manually copy information between applications"
        ],

        capabilities: [
            "Data mapping",
            "Synchronization",
            "Event processing",
            "Validation",
            "Error handling"
        ],

        technologies: [
            "APIs",
            "Webhooks",
            "Databases",
            "JSON"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Retail"
        ],

        process: [
            "Assess",
            "Map",
            "Design",
            "Implement",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Data model",
            "Synchronization workflow",
            "Integration",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "webhooks-event-integration": {

        slug: "webhooks-event-integration",

        title: "Webhooks & Event Integration",

        shortTitle: "Webhooks & Events",

        family: "CONNECT",

        category: "Integration",

        tagline:
            "Let systems react to events without constant manual intervention.",

        description:
            "River designs event-driven connections using webhooks and related integration patterns.",

        problems: [
            "Systems need to react to changes",
            "We need real-time notifications between systems",
            "Our integration relies on manual checks"
        ],

        capabilities: [
            "Webhook integration",
            "Event handling",
            "Validation",
            "Retries",
            "Monitoring"
        ],

        technologies: [
            "Webhooks",
            "REST APIs",
            "JSON",
            "JavaScript"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Assess",
            "Event Mapping",
            "Design",
            "Implementation",
            "Testing",
            "Monitoring"
        ],

        deliverables: [
            "Event architecture",
            "Webhook connections",
            "Error handling",
            "Monitoring"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "authentication-integration": {

        slug: "authentication-integration",

        title: "Authentication Integration",

        shortTitle: "Authentication Integration",

        family: "CONNECT",

        category: "Identity",

        tagline:
            "Connect applications to the authentication systems they need.",

        description:
            "River integrates authentication and identity services into digital systems.",

        problems: [
            "We need to connect an identity provider",
            "Users need a consistent login experience",
            "Our systems have separate authentication"
        ],

        capabilities: [
            "Authentication",
            "Authorization",
            "Identity integration",
            "Session management",
            "Access control"
        ],

        technologies: [
            "Authentication",
            "OAuth",
            "APIs",
            "JavaScript"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Identity Mapping",
            "Design",
            "Integrate",
            "Test",
            "Validate"
        ],

        deliverables: [
            "Authentication integration",
            "Access control",
            "Identity configuration",
            "Validation"
        ],

        relatedProducts: [
            "customer-portal"
        ],

        relatedProjects: [],

        faq: []

    },


    /* ========================================================
       PROTECT
       ======================================================== */

    "security-hardening": {

        slug: "security-hardening",

        title: "Security Hardening",

        shortTitle: "Security Hardening",

        family: "PROTECT",

        category: "Technical Security",

        tagline:
            "Reduce avoidable technical exposure across your systems.",

        description:
            "River reviews and improves technical security configuration across applications, infrastructure and access controls.",

        problems: [
            "We need to improve security",
            "Our system needs hardening",
            "We are unsure about our technical security posture"
        ],

        capabilities: [
            "Security review",
            "Configuration hardening",
            "Access control",
            "Authentication review",
            "Security monitoring"
        ],

        technologies: [
            "Authentication",
            "Servers",
            "Cloud Infrastructure",
            "Web Applications"
        ],

        industries: [
            "Enterprise",
            "Professional Services",
            "Operations"
        ],

        process: [
            "Assess",
            "Identify",
            "Prioritize",
            "Harden",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Security findings",
            "Hardening recommendations",
            "Configuration changes",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "application-security": {

        slug: "application-security",

        title: "Application Security",

        shortTitle: "Application Security",

        family: "PROTECT",

        category: "Technical Security",

        tagline:
            "Improve security considerations inside application architecture and implementation.",

        description:
            "River reviews application-level security considerations including authentication, authorization, access control and implementation.",

        problems: [
            "Our application needs a security review",
            "We need stronger access control",
            "Our application handles sensitive workflows"
        ],

        capabilities: [
            "Authentication review",
            "Authorization",
            "Access control",
            "Application review",
            "Security configuration"
        ],

        technologies: [
            "JavaScript",
            "APIs",
            "Authentication",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Professional Services",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Review",
            "Prioritize",
            "Implement",
            "Validate"
        ],

        deliverables: [
            "Security assessment",
            "Recommendations",
            "Application improvements",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "infrastructure-security": {

        slug: "infrastructure-security",

        title: "Infrastructure Security",

        shortTitle: "Infrastructure Security",

        family: "PROTECT",

        category: "Infrastructure",

        tagline:
            "Strengthen the infrastructure supporting your technology.",

        description:
            "River reviews infrastructure configuration and access controls to identify opportunities to improve technical security.",

        problems: [
            "Our infrastructure needs hardening",
            "We need to review server security",
            "We need better access control"
        ],

        capabilities: [
            "Infrastructure review",
            "Access control",
            "Configuration hardening",
            "Monitoring",
            "Backup planning"
        ],

        technologies: [
            "Servers",
            "Cloud Infrastructure",
            "Authentication",
            "Networking"
        ],

        industries: [
            "Enterprise",
            "Operations"
        ],

        process: [
            "Assess",
            "Review",
            "Harden",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Infrastructure assessment",
            "Security recommendations",
            "Hardening",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "authentication-access-control": {

        slug: "authentication-access-control",

        title: "Authentication & Access Control",

        shortTitle: "Access Control",

        family: "PROTECT",

        category: "Identity",

        tagline:
            "Control who can access systems, information and workflows.",

        description:
            "River implements or improves authentication, authorization, roles and permissions within digital systems.",

        problems: [
            "Users have too much access",
            "We need role-based permissions",
            "Our authentication needs improvement"
        ],

        capabilities: [
            "Authentication",
            "Authorization",
            "Roles",
            "Permissions",
            "Access policies"
        ],

        technologies: [
            "Authentication",
            "APIs",
            "JavaScript",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Professional Services",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Access Mapping",
            "Design",
            "Implementation",
            "Validation"
        ],

        deliverables: [
            "Authentication",
            "Roles",
            "Permissions",
            "Access configuration"
        ],

        relatedProducts: [
            "business-os",
            "customer-portal"
        ],

        relatedProjects: [],

        faq: []

    },


    "security-audits": {

        slug: "security-audits",

        title: "Security Audits",

        shortTitle: "Security Audits",

        family: "PROTECT",

        category: "Assessment",

        tagline:
            "Understand technical security weaknesses before deciding what to change.",

        description:
            "River performs technical security reviews to identify configuration, access and implementation concerns.",

        problems: [
            "We don't know how secure our system is",
            "We need a technical security review",
            "We want to identify security weaknesses"
        ],

        capabilities: [
            "Security review",
            "Configuration analysis",
            "Access review",
            "Application review",
            "Infrastructure review"
        ],

        technologies: [
            "Web Applications",
            "Servers",
            "Cloud Infrastructure",
            "Authentication"
        ],

        industries: [
            "Enterprise",
            "Professional Services",
            "Operations"
        ],

        process: [
            "Assess",
            "Analyze",
            "Prioritize",
            "Report"
        ],

        deliverables: [
            "Security findings",
            "Risk observations",
            "Recommendations",
            "Priority actions"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "backup-recovery": {

        slug: "backup-recovery",

        title: "Backup & Recovery",

        shortTitle: "Backup & Recovery",

        family: "PROTECT",

        category: "Resilience",

        tagline:
            "Make important systems and information recoverable.",

        description:
            "River helps design and configure backup and recovery strategies around operational requirements.",

        problems: [
            "We need reliable backups",
            "We are unsure whether backups work",
            "We need recovery planning"
        ],

        capabilities: [
            "Backup planning",
            "Backup configuration",
            "Recovery testing",
            "Monitoring",
            "Documentation"
        ],

        technologies: [
            "Servers",
            "Cloud Infrastructure",
            "Databases",
            "Storage"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Plan",
            "Configure",
            "Test",
            "Monitor"
        ],

        deliverables: [
            "Backup strategy",
            "Configuration",
            "Recovery procedures",
            "Validation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "disaster-recovery": {

        slug: "disaster-recovery",

        title: "Disaster Recovery",

        shortTitle: "Disaster Recovery",

        family: "PROTECT",

        category: "Resilience",

        tagline:
            "Prepare systems for recovery when serious disruption occurs.",

        description:
            "River develops technical recovery strategies around infrastructure, applications, data and operational continuity.",

        problems: [
            "We don't have a recovery plan",
            "We need to prepare for system failure",
            "Our recovery process hasn't been tested"
        ],

        capabilities: [
            "Recovery planning",
            "Backup strategy",
            "Recovery testing",
            "Infrastructure planning",
            "Documentation"
        ],

        technologies: [
            "Cloud Infrastructure",
            "Servers",
            "Databases",
            "Backup Systems"
        ],

        industries: [
            "Enterprise",
            "Operations"
        ],

        process: [
            "Assess",
            "Plan",
            "Prepare",
            "Test",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Recovery strategy",
            "Recovery procedures",
            "Testing",
            "Documentation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "ssl-tls-configuration": {

        slug: "ssl-tls-configuration",

        title: "SSL / TLS Configuration",

        shortTitle: "SSL / TLS",

        family: "PROTECT",

        category: "Web Security",

        tagline:
            "Configure secure transport for websites and services.",

        description:
            "River configures and validates SSL/TLS for websites and supported services.",

        problems: [
            "Our SSL certificate needs configuration",
            "Our website has HTTPS issues",
            "We need secure transport configuration"
        ],

        capabilities: [
            "Certificate configuration",
            "HTTPS",
            "TLS configuration",
            "Validation",
            "Renewal setup"
        ],

        technologies: [
            "HTTPS",
            "TLS",
            "Web Servers",
            "DNS"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Configure",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "SSL/TLS configuration",
            "HTTPS validation",
            "Configuration documentation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "security-monitoring": {

        slug: "security-monitoring",

        title: "Security Monitoring",

        shortTitle: "Security Monitoring",

        family: "PROTECT",

        category: "Monitoring",

        tagline:
            "Keep visibility over technical security conditions.",

        description:
            "River can incorporate monitoring into technical environments where ongoing visibility is required.",

        problems: [
            "We need better visibility",
            "We need monitoring around our systems",
            "We want to identify technical issues earlier"
        ],

        capabilities: [
            "Monitoring",
            "Alerting",
            "Configuration review",
            "Incident visibility"
        ],

        technologies: [
            "Servers",
            "Cloud Infrastructure",
            "Applications"
        ],

        industries: [
            "Enterprise",
            "Operations"
        ],

        process: [
            "Assess",
            "Configure",
            "Test",
            "Monitor",
            "Improve"
        ],

        deliverables: [
            "Monitoring configuration",
            "Alerts",
            "Technical visibility",
            "Documentation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    /* ========================================================
       OPERATE
       ======================================================== */

    "website-maintenance": {

        slug: "website-maintenance",

        title: "Website Maintenance",

        shortTitle: "Website Maintenance",

        family: "OPERATE",

        category: "Maintenance",

        tagline:
            "Keep your website maintained after it goes live.",

        description:
            "River provides ongoing technical maintenance for websites and digital experiences.",

        problems: [
            "Our website needs ongoing maintenance",
            "We need technical updates",
            "We don't have someone managing the website"
        ],

        capabilities: [
            "Updates",
            "Bug fixing",
            "Performance monitoring",
            "Technical maintenance",
            "Backup management"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web Hosting"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Prioritize",
            "Maintain",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Maintenance",
            "Updates",
            "Bug fixes",
            "Monitoring"
        ],

        relatedProducts: [],

        relatedProjects: [
            "web-ecommerce"
        ],

        faq: []

    },


    "application-maintenance": {

        slug: "application-maintenance",

        title: "Application Maintenance",

        shortTitle: "Application Maintenance",

        family: "OPERATE",

        category: "Maintenance",

        tagline:
            "Keep applications stable, updated and maintainable.",

        description:
            "River supports ongoing application maintenance, troubleshooting and technical improvement.",

        problems: [
            "Our application has bugs",
            "Our application needs updates",
            "We need ongoing technical support"
        ],

        capabilities: [
            "Bug fixing",
            "Updates",
            "Troubleshooting",
            "Performance review",
            "Technical support"
        ],

        technologies: [
            "JavaScript",
            "APIs",
            "Databases",
            "Servers"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Assess",
            "Prioritize",
            "Fix",
            "Test",
            "Deploy",
            "Monitor"
        ],

        deliverables: [
            "Bug fixes",
            "Updates",
            "Maintenance",
            "Monitoring"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "technical-support": {

        slug: "technical-support",

        title: "Technical Support",

        shortTitle: "Technical Support",

        family: "OPERATE",

        category: "Support",

        tagline:
            "A technical partner when systems need attention.",

        description:
            "River provides technical support for websites, applications and systems where ongoing engineering assistance is required.",

        problems: [
            "We need technical help",
            "Our team needs engineering support",
            "We need someone to troubleshoot our systems"
        ],

        capabilities: [
            "Troubleshooting",
            "Technical investigation",
            "Bug fixing",
            "System support",
            "Performance review"
        ],

        technologies: [
            "Web Applications",
            "Servers",
            "APIs",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Professional Services"
        ],

        process: [
            "Investigate",
            "Diagnose",
            "Resolve",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Technical diagnosis",
            "Resolution",
            "Recommendations",
            "Documentation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "monitoring": {

        slug: "monitoring",

        title: "Monitoring",

        shortTitle: "Monitoring",

        family: "OPERATE",

        category: "Operations",

        tagline:
            "Maintain visibility into the systems you depend on.",

        description:
            "River can configure technical monitoring around websites, applications, infrastructure and performance.",

        problems: [
            "We don't know when something breaks",
            "We need system visibility",
            "We need proactive monitoring"
        ],

        capabilities: [
            "Application monitoring",
            "Infrastructure monitoring",
            "Performance monitoring",
            "Alerting",
            "Incident visibility"
        ],

        technologies: [
            "Servers",
            "Cloud Infrastructure",
            "Web Applications"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Configure",
            "Test",
            "Monitor",
            "Improve"
        ],

        deliverables: [
            "Monitoring",
            "Alerts",
            "Reports",
            "Technical visibility"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "backup-management": {

        slug: "backup-management",

        title: "Backup Management",

        shortTitle: "Backup Management",

        family: "OPERATE",

        category: "Operations",

        tagline:
            "Keep backup processes running and visible.",

        description:
            "River manages and monitors backup processes where ongoing technical support is required.",

        problems: [
            "We need ongoing backup management",
            "We don't know whether backups are working",
            "Our team needs technical backup support"
        ],

        capabilities: [
            "Backup monitoring",
            "Backup configuration",
            "Recovery checks",
            "Documentation"
        ],

        technologies: [
            "Cloud Storage",
            "Servers",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Operations"
        ],

        process: [
            "Assess",
            "Configure",
            "Monitor",
            "Test",
            "Improve"
        ],

        deliverables: [
            "Backup management",
            "Monitoring",
            "Recovery checks",
            "Documentation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "server-management": {

        slug: "server-management",

        title: "Server Management",

        shortTitle: "Server Management",

        family: "OPERATE",

        category: "Infrastructure",

        tagline:
            "Keep server environments maintained and operational.",

        description:
            "River provides ongoing technical management for supported server environments.",

        problems: [
            "We need server management",
            "Our team doesn't manage infrastructure",
            "Our server needs ongoing maintenance"
        ],

        capabilities: [
            "Server configuration",
            "Updates",
            "Monitoring",
            "Troubleshooting",
            "Backup management"
        ],

        technologies: [
            "Linux",
            "Servers",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Operations"
        ],

        process: [
            "Assess",
            "Configure",
            "Maintain",
            "Monitor",
            "Improve"
        ],

        deliverables: [
            "Server management",
            "Updates",
            "Monitoring",
            "Troubleshooting"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "performance-monitoring": {

        slug: "performance-monitoring",

        title: "Performance Monitoring",

        shortTitle: "Performance Monitoring",

        family: "OPERATE",

        category: "Performance",

        tagline:
            "Keep visibility over system performance after deployment.",

        description:
            "River monitors performance conditions and identifies changes that may require technical attention.",

        problems: [
            "We need to monitor performance",
            "Our application slows down over time",
            "We need visibility into production performance"
        ],

        capabilities: [
            "Performance monitoring",
            "Measurement",
            "Alerting",
            "Analysis",
            "Optimization recommendations"
        ],

        technologies: [
            "Web Applications",
            "Servers",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Retail"
        ],

        process: [
            "Assess",
            "Configure",
            "Monitor",
            "Analyze",
            "Improve"
        ],

        deliverables: [
            "Performance monitoring",
            "Alerts",
            "Analysis",
            "Recommendations"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "updates-patching": {

        slug: "updates-patching",

        title: "Updates & Patching",

        shortTitle: "Updates & Patching",

        family: "OPERATE",

        category: "Maintenance",

        tagline:
            "Keep supported technology updated and maintained.",

        description:
            "River manages appropriate application, website and infrastructure updates as part of ongoing technical operations.",

        problems: [
            "Our systems need regular updates",
            "We don't have time to maintain software",
            "Our team needs technical patching support"
        ],

        capabilities: [
            "Software updates",
            "Dependency updates",
            "Configuration review",
            "Testing",
            "Deployment"
        ],

        technologies: [
            "JavaScript",
            "Web Applications",
            "Servers",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Plan",
            "Update",
            "Test",
            "Deploy",
            "Monitor"
        ],

        deliverables: [
            "Updates",
            "Patches",
            "Testing",
            "Deployment"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "incident-troubleshooting": {

        slug: "incident-troubleshooting",

        title: "Incident Troubleshooting",

        shortTitle: "Troubleshooting",

        family: "OPERATE",

        category: "Support",

        tagline:
            "Investigate technical problems and restore normal operation.",

        description:
            "River investigates technical incidents across supported websites, applications and systems.",

        problems: [
            "Something has stopped working",
            "Our application has an unexpected error",
            "Our website is broken",
            "We need technical troubleshooting"
        ],

        capabilities: [
            "Incident investigation",
            "Root-cause analysis",
            "Bug fixing",
            "Performance analysis",
            "Recovery"
        ],

        technologies: [
            "Web Applications",
            "JavaScript",
            "APIs",
            "Databases",
            "Servers"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Professional Services"
        ],

        process: [
            "Investigate",
            "Diagnose",
            "Resolve",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Technical diagnosis",
            "Resolution",
            "Root-cause findings",
            "Recommendations"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "managed-technical-support": {

        slug: "managed-technical-support",

        title: "Managed Technical Support",

        shortTitle: "Managed Support",

        family: "OPERATE",

        category: "Support",

        tagline:
            "River becomes the technical partner behind the scenes.",

        description:
            "Ongoing technical support for organizations that need engineering capability without building an entire internal technical team.",

        problems: [
            "We need ongoing technical support",
            "Our internal team is stretched",
            "We need a technical partner",
            "We don't want to manage everything ourselves"
        ],

        capabilities: [
            "Technical support",
            "Monitoring",
            "Maintenance",
            "Troubleshooting",
            "Updates",
            "Performance review"
        ],

        technologies: [
            "Web Applications",
            "Servers",
            "APIs",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Professional Services",
            "Operations"
        ],

        process: [
            "Assess",
            "Prioritize",
            "Support",
            "Monitor",
            "Improve"
        ],

        deliverables: [
            "Ongoing support",
            "Maintenance",
            "Monitoring",
            "Troubleshooting",
            "Technical recommendations"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    /* ========================================================
       DEPLOY
       ======================================================== */

    "cloud-deployment": {

        slug: "cloud-deployment",

        title: "Cloud Deployment",

        shortTitle: "Cloud Deployment",

        family: "DEPLOY",

        category: "Deployment",

        tagline:
            "Take applications from development into a production cloud environment.",

        description:
            "River configures and deploys supported applications into cloud infrastructure.",

        problems: [
            "We need to deploy our application",
            "Our application needs a production environment",
            "We need help configuring cloud infrastructure"
        ],

        capabilities: [
            "Cloud configuration",
            "Deployment",
            "Environment setup",
            "Monitoring",
            "Production validation"
        ],

        technologies: [
            "Cloud Infrastructure",
            "Servers",
            "Containers",
            "CI/CD"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Development",
            "Staging",
            "Testing",
            "Production",
            "Monitoring"
        ],

        deliverables: [
            "Cloud environment",
            "Deployment",
            "Configuration",
            "Monitoring"
        ],

        relatedProducts: [],

        relatedProjects: [
            "cloud-devops"
        ],

        faq: []

    },


    "server-configuration": {

        slug: "server-configuration",

        title: "Server Configuration",

        shortTitle: "Server Configuration",

        family: "DEPLOY",

        category: "Infrastructure",

        tagline:
            "Configure servers around the applications they need to run.",

        description:
            "River configures supported server environments for application deployment and operation.",

        problems: [
            "We need a server configured",
            "Our application needs production infrastructure",
            "We need help preparing an environment"
        ],

        capabilities: [
            "Server setup",
            "Application configuration",
            "Security configuration",
            "Deployment",
            "Monitoring"
        ],

        technologies: [
            "Linux",
            "Servers",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Configure",
            "Deploy",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Configured server",
            "Application environment",
            "Deployment",
            "Monitoring"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "infrastructure-setup": {

        slug: "infrastructure-setup",

        title: "Infrastructure Setup",

        shortTitle: "Infrastructure Setup",

        family: "DEPLOY",

        category: "Infrastructure",

        tagline:
            "Prepare the infrastructure required to operate your technology.",

        description:
            "River configures infrastructure environments around application and operational requirements.",

        problems: [
            "We need infrastructure",
            "We are preparing a new production environment",
            "Our existing infrastructure isn't suitable"
        ],

        capabilities: [
            "Infrastructure planning",
            "Server configuration",
            "Networking",
            "Environment setup",
            "Monitoring"
        ],

        technologies: [
            "Cloud Infrastructure",
            "Servers",
            "Networking",
            "Containers"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Plan",
            "Configure",
            "Deploy",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Infrastructure architecture",
            "Configured environment",
            "Deployment",
            "Monitoring"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "ci-cd": {

        slug: "ci-cd",

        title: "CI / CD",

        shortTitle: "CI / CD",

        family: "DEPLOY",

        category: "DevOps",

        tagline:
            "Make software delivery more consistent and repeatable.",

        description:
            "River can establish automated delivery workflows that move software through development, testing and production.",

        problems: [
            "Deployment is manual",
            "Releases are difficult to repeat",
            "We need automated deployment",
            "Testing isn't part of our delivery process"
        ],

        capabilities: [
            "Build pipelines",
            "Testing automation",
            "Deployment automation",
            "Environment management",
            "Release workflows"
        ],

        technologies: [
            "CI/CD",
            "Git",
            "Containers",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Assess",
            "Design",
            "Configure",
            "Test",
            "Deploy",
            "Monitor"
        ],

        deliverables: [
            "CI/CD pipeline",
            "Automated testing",
            "Deployment workflow",
            "Environment configuration"
        ],

        relatedProducts: [],

        relatedProjects: [
            "cloud-devops"
        ],

        faq: []

    },


    "production-deployment": {

        slug: "production-deployment",

        title: "Production Deployment",

        shortTitle: "Production Deployment",

        family: "DEPLOY",

        category: "Deployment",

        tagline:
            "Move tested software into a controlled production environment.",

        description:
            "River manages the technical process of deploying supported software into production.",

        problems: [
            "We need to deploy to production",
            "Our production deployment is risky",
            "We need help going live"
        ],

        capabilities: [
            "Release preparation",
            "Environment configuration",
            "Deployment",
            "Validation",
            "Rollback planning"
        ],

        technologies: [
            "Cloud Infrastructure",
            "Servers",
            "CI/CD",
            "Containers"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Prepare",
            "Stage",
            "Test",
            "Deploy",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Production environment",
            "Deployment",
            "Validation",
            "Deployment documentation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "environment-configuration": {

        slug: "environment-configuration",

        title: "Environment Configuration",

        shortTitle: "Environment Configuration",

        family: "DEPLOY",

        category: "DevOps",

        tagline:
            "Create consistent environments across development, testing and production.",

        description:
            "River configures application environments and deployment settings around technical requirements.",

        problems: [
            "Our environments behave differently",
            "Production configuration is inconsistent",
            "We need proper staging infrastructure"
        ],

        capabilities: [
            "Environment setup",
            "Configuration",
            "Secrets management",
            "Deployment settings",
            "Validation"
        ],

        technologies: [
            "Cloud Infrastructure",
            "Servers",
            "CI/CD",
            "Containers"
        ],

        industries: [
            "Enterprise",
            "Digital Products"
        ],

        process: [
            "Assess",
            "Design",
            "Configure",
            "Test",
            "Validate"
        ],

        deliverables: [
            "Environment configuration",
            "Deployment configuration",
            "Documentation"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "domain-hosting-configuration": {

        slug: "domain-hosting-configuration",

        title: "Domain & Hosting Configuration",

        shortTitle: "Domain & Hosting",

        family: "DEPLOY",

        category: "Web Infrastructure",

        tagline:
            "Connect domains, hosting and production environments correctly.",

        description:
            "River configures domains, hosting and supporting infrastructure for websites and applications.",

        problems: [
            "Our domain isn't pointing correctly",
            "We need hosting configured",
            "Our website needs to go live"
        ],

        capabilities: [
            "DNS",
            "Hosting configuration",
            "SSL/TLS",
            "Deployment",
            "Validation"
        ],

        technologies: [
            "DNS",
            "Web Hosting",
            "HTTPS",
            "Servers"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services"
        ],

        process: [
            "Assess",
            "Configure",
            "Deploy",
            "Validate",
            "Monitor"
        ],

        deliverables: [
            "Domain configuration",
            "Hosting",
            "SSL/TLS",
            "Deployment"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "containerization": {

        slug: "containerization",

        title: "Containerization",

        shortTitle: "Containerization",

        family: "DEPLOY",

        category: "Infrastructure",

        tagline:
            "Package applications into repeatable deployment environments.",

        description:
            "River can containerize supported applications where container-based deployment is appropriate.",

        problems: [
            "Our deployment environment is inconsistent",
            "We need portable application environments",
            "We want container-based deployment"
        ],

        capabilities: [
            "Container architecture",
            "Application packaging",
            "Environment configuration",
            "Deployment",
            "Testing"
        ],

        technologies: [
            "Containers",
            "Cloud Infrastructure",
            "CI/CD"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Assess",
            "Design",
            "Containerize",
            "Test",
            "Deploy",
            "Monitor"
        ],

        deliverables: [
            "Container configuration",
            "Deployment configuration",
            "Environment setup"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "deployment-automation": {

        slug: "deployment-automation",

        title: "Deployment Automation",

        shortTitle: "Deployment Automation",

        family: "DEPLOY",

        category: "DevOps",

        tagline:
            "Reduce manual deployment work with repeatable technical processes.",

        description:
            "River automates supported deployment workflows to make releases more consistent.",

        problems: [
            "Deployments are manual",
            "Releases take too long",
            "We need repeatable deployments"
        ],

        capabilities: [
            "Automation",
            "CI/CD",
            "Environment management",
            "Testing",
            "Release workflows"
        ],

        technologies: [
            "CI/CD",
            "Git",
            "Containers",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Assess",
            "Design",
            "Automate",
            "Test",
            "Deploy",
            "Monitor"
        ],

        deliverables: [
            "Deployment automation",
            "Pipeline",
            "Testing workflow",
            "Environment configuration"
        ],

        relatedProducts: [],

        relatedProjects: [
            "cloud-devops"
        ],

        faq: []

    },


    /* ========================================================
       ASSESS
       ======================================================== */

    "website-audits": {

        slug: "website-audits",

        title: "Website Audits",

        shortTitle: "Website Audit",

        family: "ASSESS",

        category: "Assessment",

        tagline:
            "Understand what is happening across your website before deciding what to change.",

        description:
            "River audits website structure, performance, usability and technical implementation.",

        problems: [
            "Something is wrong with our website",
            "Our website is slow",
            "We don't know what needs improvement"
        ],

        capabilities: [
            "Performance review",
            "Technical review",
            "UX review",
            "Accessibility review",
            "SEO review"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Web Standards"
        ],

        industries: [
            "Retail",
            "eCommerce",
            "Professional Services"
        ],

        process: [
            "Discover",
            "Audit",
            "Analyze",
            "Prioritize",
            "Recommend"
        ],

        deliverables: [
            "Audit findings",
            "Prioritized recommendations",
            "Technical roadmap"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "application-audits": {

        slug: "application-audits",

        title: "Application Audits",

        shortTitle: "Application Audit",

        family: "ASSESS",

        category: "Assessment",

        tagline:
            "Understand how an application is performing before deciding what to change.",

        description:
            "River reviews application architecture, implementation, performance and technical condition.",

        problems: [
            "Our application has problems",
            "We don't know why our system is slow",
            "We inherited an application and need to understand it"
        ],

        capabilities: [
            "Architecture review",
            "Code review",
            "Performance review",
            "Security review",
            "Integration review"
        ],

        technologies: [
            "JavaScript",
            "APIs",
            "Databases",
            "Servers"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Discover",
            "Audit",
            "Analyze",
            "Prioritize",
            "Recommend"
        ],

        deliverables: [
            "Application assessment",
            "Technical findings",
            "Prioritized recommendations",
            "Roadmap"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "technical-assessments": {

        slug: "technical-assessments",

        title: "Technical Assessments",

        shortTitle: "Technical Assessment",

        family: "ASSESS",

        category: "Assessment",

        tagline:
            "Understand the problem before deciding what to build.",

        description:
            "River investigates technology, architecture, infrastructure and requirements to determine the appropriate intervention.",

        problems: [
            "We're not sure what's wrong",
            "We don't know what to build",
            "Our technology needs an independent assessment",
            "We need technical direction"
        ],

        capabilities: [
            "Technical discovery",
            "Architecture review",
            "Performance assessment",
            "Infrastructure review",
            "Technology evaluation"
        ],

        technologies: [
            "Web Applications",
            "APIs",
            "Databases",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Professional Services",
            "Digital Products"
        ],

        process: [
            "Discover",
            "Assess",
            "Analyze",
            "Prioritize",
            "Recommend"
        ],

        deliverables: [
            "Technical assessment",
            "Findings",
            "Recommendations",
            "Technical roadmap"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: [
            {
                question: "Do I need to know which service I need before contacting River?",
                answer:
                    "No. Technical assessment exists specifically for situations where the problem or appropriate intervention is not yet clear."
            }
        ]

    },


    "performance-audits": {

        slug: "performance-audits",

        title: "Performance Audits",

        shortTitle: "Performance Audit",

        family: "ASSESS",

        category: "Performance",

        tagline:
            "Find out what is slowing your technology down.",

        description:
            "River assesses website and application performance to identify measurable bottlenecks and opportunities for improvement.",

        problems: [
            "Our system is slow",
            "Performance is inconsistent",
            "We don't know what is causing the slowdown"
        ],

        capabilities: [
            "Performance profiling",
            "Frontend analysis",
            "Backend analysis",
            "Database analysis",
            "Infrastructure analysis"
        ],

        technologies: [
            "JavaScript",
            "Web Applications",
            "Databases",
            "Servers"
        ],

        industries: [
            "Enterprise",
            "Retail",
            "Digital Products"
        ],

        process: [
            "Measure",
            "Profile",
            "Analyze",
            "Prioritize",
            "Recommend"
        ],

        deliverables: [
            "Performance findings",
            "Bottleneck analysis",
            "Optimization recommendations"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "security-assessments": {

        slug: "security-assessments",

        title: "Security Assessments",

        shortTitle: "Security Assessment",

        family: "ASSESS",

        category: "Security",

        tagline:
            "Understand technical security conditions before deciding what to change.",

        description:
            "River reviews technical security considerations across applications, infrastructure and access controls.",

        problems: [
            "We don't know how secure our system is",
            "We need a security review",
            "We need to understand technical risk"
        ],

        capabilities: [
            "Security review",
            "Access review",
            "Configuration review",
            "Application review",
            "Infrastructure review"
        ],

        technologies: [
            "Web Applications",
            "Servers",
            "Authentication",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Professional Services",
            "Operations"
        ],

        process: [
            "Assess",
            "Analyze",
            "Prioritize",
            "Recommend"
        ],

        deliverables: [
            "Security findings",
            "Technical observations",
            "Recommendations",
            "Priority actions"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "infrastructure-assessments": {

        slug: "infrastructure-assessments",

        title: "Infrastructure Assessments",

        shortTitle: "Infrastructure Assessment",

        family: "ASSESS",

        category: "Infrastructure",

        tagline:
            "Understand whether the infrastructure supporting your technology is fit for purpose.",

        description:
            "River reviews infrastructure configuration, capacity, deployment and operational considerations.",

        problems: [
            "We don't know if our infrastructure is suitable",
            "Our infrastructure is unreliable",
            "We need to plan infrastructure changes"
        ],

        capabilities: [
            "Infrastructure review",
            "Capacity review",
            "Configuration review",
            "Deployment review",
            "Resilience review"
        ],

        technologies: [
            "Servers",
            "Cloud Infrastructure",
            "Networking",
            "Databases"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Discover",
            "Assess",
            "Analyze",
            "Prioritize",
            "Recommend"
        ],

        deliverables: [
            "Infrastructure findings",
            "Recommendations",
            "Improvement roadmap"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "architecture-reviews": {

        slug: "architecture-reviews",

        title: "Architecture Reviews",

        shortTitle: "Architecture Review",

        family: "ASSESS",

        category: "Architecture",

        tagline:
            "Understand whether your technical architecture can support where the business is going.",

        description:
            "River reviews application and system architecture to identify structural risks, constraints and improvement opportunities.",

        problems: [
            "We're unsure whether our architecture will scale",
            "Our system is becoming difficult to change",
            "We need an architecture review"
        ],

        capabilities: [
            "Architecture analysis",
            "Scalability review",
            "Integration review",
            "Performance review",
            "Technical debt review"
        ],

        technologies: [
            "Applications",
            "APIs",
            "Databases",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Discover",
            "Review",
            "Analyze",
            "Prioritize",
            "Recommend"
        ],

        deliverables: [
            "Architecture assessment",
            "Findings",
            "Recommendations",
            "Architecture roadmap"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "database-assessments": {

        slug: "database-assessments",

        title: "Database Assessments",

        shortTitle: "Database Assessment",

        family: "ASSESS",

        category: "Data",

        tagline:
            "Understand the condition and performance of the database layer.",

        description:
            "River assesses database structure, performance, data relationships and technical constraints.",

        problems: [
            "Our database is slow",
            "Our data architecture is difficult to understand",
            "We need to assess our database before changing it"
        ],

        capabilities: [
            "Schema review",
            "Query review",
            "Performance analysis",
            "Data architecture",
            "Migration assessment"
        ],

        technologies: [
            "SQL",
            "Databases",
            "APIs"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Discover",
            "Assess",
            "Analyze",
            "Prioritize",
            "Recommend"
        ],

        deliverables: [
            "Database assessment",
            "Performance findings",
            "Recommendations",
            "Improvement roadmap"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "migration-assessments": {

        slug: "migration-assessments",

        title: "Migration Assessments",

        shortTitle: "Migration Assessment",

        family: "ASSESS",

        category: "Migration",

        tagline:
            "Understand migration complexity before moving critical technology.",

        description:
            "River assesses applications, infrastructure, data and dependencies before a migration begins.",

        problems: [
            "We need to migrate but don't know where to start",
            "We're worried about migration risk",
            "We need to understand dependencies"
        ],

        capabilities: [
            "Dependency mapping",
            "Infrastructure review",
            "Application review",
            "Data assessment",
            "Migration planning"
        ],

        technologies: [
            "Cloud Infrastructure",
            "Applications",
            "Databases",
            "Servers"
        ],

        industries: [
            "Enterprise",
            "Operations",
            "Digital Products"
        ],

        process: [
            "Discover",
            "Assess",
            "Map",
            "Analyze",
            "Recommend"
        ],

        deliverables: [
            "Migration assessment",
            "Dependency map",
            "Migration roadmap",
            "Risk considerations"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    },


    "technical-discovery": {

        slug: "technical-discovery",

        title: "Technical Discovery",

        shortTitle: "Technical Discovery",

        family: "ASSESS",

        category: "Discovery",

        tagline:
            "Turn an unclear technical problem into a clear direction.",

        description:
            "River investigates requirements, constraints, existing technology and desired outcomes before recommending a technical path.",

        problems: [
            "We're not sure what we need",
            "We have an idea but don't know how to build it",
            "Our technical requirements aren't clear"
        ],

        capabilities: [
            "Requirements discovery",
            "Technical investigation",
            "Workflow mapping",
            "Architecture discovery",
            "Technical planning"
        ],

        technologies: [
            "Web Applications",
            "APIs",
            "Databases",
            "Cloud Infrastructure"
        ],

        industries: [
            "Enterprise",
            "Professional Services",
            "Digital Products",
            "Operations"
        ],

        process: [
            "Understand",
            "Investigate",
            "Map",
            "Analyze",
            "Recommend"
        ],

        deliverables: [
            "Requirements",
            "Technical findings",
            "Architecture direction",
            "Recommended next steps"
        ],

        relatedProducts: [],

        relatedProjects: [],

        faq: []

    }

};


/* ============================================================
   🟢 UPGRADE 03: PROBLEM SELECTOR
   ============================================================ */

window.RIVER_SERVICE_PROBLEMS = [

    {
        id: "website-slow",
        statement: "My website is slow",
        service: "website-speed-optimization"
    },

    {
        id: "cloud-migration",
        statement: "My system needs to move to the cloud",
        service: "cloud-migration"
    },

    {
        id: "systems-disconnected",
        statement: "Our systems don't communicate",
        service: "system-integration"
    },

    {
        id: "application-bugs",
        statement: "Our application has bugs",
        service: "application-maintenance"
    },

    {
        id: "legacy-modernization",
        statement: "Our old system needs modernization",
        service: "legacy-system-modernization"
    },

    {
        id: "need-built",
        statement: "We need something built",
        service: "custom-software-development"
    },

    {
        id: "unknown-problem",
        statement: "We're not sure what's wrong",
        service: "technical-assessments"
    }

];


/* ============================================================
   🟢 UPGRADE 04: NORMALIZE SERVICE SLUG
   ============================================================ */

window.normalizeRiverServiceSlug = function(slug) {

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
   🟢 UPGRADE 05: GET SERVICE
   ============================================================ */

window.getRiverService = function(slug) {

    const normalizedSlug =
        window.normalizeRiverServiceSlug(slug);

    if (!normalizedSlug) {
        return null;
    }

    return (
        window.RIVER_SERVICES[normalizedSlug] ||
        null
    );

};


/* ============================================================
   🟢 UPGRADE 06: GET SERVICES BY FAMILY
   ============================================================ */

window.getRiverServicesByFamily = function(family) {

    const normalizedFamily =
        String(family || "")
            .trim()
            .toUpperCase();

    return Object.values(
        window.RIVER_SERVICES
    ).filter(
        service =>
            service.family === normalizedFamily
    );

};


/* ============================================================
   🟢 UPGRADE 07: GET ALL SERVICES
   ============================================================ */

window.getAllRiverServices = function() {

    return Object.values(
        window.RIVER_SERVICES
    );

};


/* ============================================================
   🟢 UPGRADE 08: GET SERVICE FAMILY
   ============================================================ */

window.getRiverServiceFamily = function(family) {

    const normalizedFamily =
        String(family || "")
            .trim()
            .toUpperCase();

    return (
        window.RIVER_SERVICE_FAMILIES[
            normalizedFamily
        ] || null
    );

};


/* ============================================================
   🟢 UPGRADE 09: SERVICE SEARCH
   ============================================================ */

window.searchRiverServices = function(query) {

    const search =
        String(query || "")
            .trim()
            .toLowerCase();

    if (!search) {
        return window.getAllRiverServices();
    }

    return window
        .getAllRiverServices()
        .filter(service => {

            const searchable = [

                service.title,

                service.shortTitle,

                service.category,

                service.tagline,

                service.description,

                ...(service.problems || []),

                ...(service.capabilities || []),

                ...(service.technologies || []),

                ...(service.industries || [])

            ]
                .join(" ")
                .toLowerCase();

            return searchable.includes(search);

        });

};


/* ============================================================
   🟢 UPGRADE 10: RELATED PRODUCTS
   ============================================================ */

window.getRelatedRiverProductsForService =
    function(service) {

        if (
            !service ||
            !Array.isArray(
                service.relatedProducts
            )
        ) {
            return [];
        }

        if (
            !window.RIVER_PRODUCTS
        ) {
            return [];
        }

        return service.relatedProducts
            .map(
                slug =>
                    window.RIVER_PRODUCTS[
                        slug
                    ]
            )
            .filter(Boolean);

    };


/* ============================================================
   🟢 UPGRADE 11: RELATED PROJECTS
   ============================================================ */

window.getRelatedRiverProjectsForService =
    function(service) {

        if (
            !service ||
            !Array.isArray(
                service.relatedProjects
            )
        ) {
            return [];
        }

        if (
            !window.RIVER_PROJECTS
        ) {
            return [];
        }

        return service.relatedProjects
            .map(
                slug =>
                    window.RIVER_PROJECTS[
                        slug
                    ]
            )
            .filter(Boolean);

    };


/* ============================================================
   END RIVER SERVICES DATA REGISTRY
   ============================================================ */