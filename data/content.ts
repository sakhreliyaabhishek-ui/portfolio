type Project = {
  title: string;
  summary: string;
  projectType: string;
  role: string;
  overview: string;
  productCapabilities: string[];
  frontendDetails: string;
  frontendArchitecture: string[];
  frontendFeatures: string[];
  stack: string[];
  frontendStack: string[];
  securityReliability: string[];
  notes: string;
  liveUrl?: string;
  backendDetails?: string;
  backendArchitecture?: string[];
  backendCapabilities?: string[];
  backendStack?: string[];
};

export const profile = {
  name: "Abhishek Sakhreliya",
  title: "Flutter Developer",
  bio: "Apps that feel designed. Flutter that actually ships. Flutter Developer with 1 year of experience building cross-platform mobile applications from Ahmedabad, India.",
  location: "Ahmedabad, Gujarat, India",
  availability: "Open to work — Flutter & mobile projects",
  email: "sakhreliyaabhishek@gmail.com",
  phone: "+91 7990319450",
  socials: [
    { label: "GitHub", href: "https://github.com/sakhreliyaabhishek-ui" },
    { label: "WhatsApp", href: "https://wa.me/917990319450" },
    { label: "Email", href: "mailto:sakhreliyaabhishek@gmail.com" },
  ],
};

export const education = [
  {
    period: "2020",
    title: "10th Standard",
    subtitle: "Academic Foundation",
    summary: "Completed 10th standard with 84 percentile and 66%.",
  },
  {
    period: "2022",
    title: "12th Standard",
    subtitle: "Higher Secondary",
    summary: "Completed 12th standard with 86 percentile and 75%.",
  },
  {
    period: "2022 – 2025",
    title: "Bachelor of Computer Application",
    subtitle: "Undergraduate Degree",
    summary: "Graduated with 8.67 CGPA, building the technical base for application development and software problem solving.",
  },
];

export const experience = [
  {
    period: "Nov 2024 – Jan 2025",
    title: "Internship",
    subtitle: "Ongoing Team",
    summary: "Completed an internship at Ongoing Team, working on development tasks, product workflows, and team-based execution during the first phase of my company experience.",
  },
  {
    period: "Nov 2024 – Oct 2025",
    title: "Work Experience",
    subtitle: "Ongoing Team",
    summary: "My work experience at Ongoing Team ran from November 2024 to October 2025, where I worked on Flutter application interfaces, API integrations, navigation flows, and company product requirements.",
  },
  {
    period: "Oct 2025 – Present",
    title: "AI-Assisted Product Building",
    subtitle: "Websites and Applications",
    summary: "Using Agentic AI tools such as Claude, OpenAI Codex, and Cursor to create websites and applications with faster iteration, stronger execution, and better development support.",
  },
  {
    period: "Nov 2025 – Present",
    title: "Prompt Engineering Basics",
    subtitle: "AI Workflow Practice",
    summary: "Learning how to guide AI systems more effectively through role definition, task clarity, and structured context for better results.",
  },
];

export const projects: Project[] = [
  {
    title: "Presynx",
    summary:
      "End-to-end healthcare queue management platform with a Flutter kiosk and staff application, plus a Laravel-based backend and admin system for multi-tenant healthcare operations.",
    projectType:
      "End-to-end healthcare queue management platform with a Flutter kiosk application and a Laravel-based backend/admin system.",
    role:
      "Flutter developer for the kiosk and staff-facing application, with OpenAI Codex and Cursor used to support delivery across the Flutter codebase.",
    overview:
      "Presynx is a multi-tenant queue management solution for clinics, hospitals, and healthcare branches. It handles patient check-in, token generation, queue display, doctor and service routing, staff queue handling, consultation workflows, reporting, and organization-level administration through a public-facing kiosk experience and a protected staff/admin platform.",
    productCapabilities: [
      "Patients and visitors can register or find themselves through a self-service kiosk, verify their phone through OTP when required, generate a queue token, and view current serving information.",
      "Staff can log in, view queues, call the next patient, complete or cancel queue entries, and manage consultations.",
      "Administrators can manage organizations, branches, services, doctors, devices, landing screens, counters, roles, reports, and SMS-related settings.",
    ],
    frontendDetails:
      "The frontend is built with Flutter and is primarily designed for Android kiosk devices, while also supporting iOS, web, macOS, Windows, and Linux. One codebase handles both the public kiosk flow and the authenticated admin/staff interface.",
    frontendArchitecture: [
      "Two major app experiences are consolidated into one Flutter codebase: a public kiosk flow and an authenticated internal staff/admin flow.",
      "Navigation uses GoRouter with route-based redirection tied to device registration state, OTP state, session state, and admin authentication state.",
      "Kiosk flow orchestration is centralized, with responsive layout utilities, platform-specific implementations, and secure local persistence for device, session, and printer state.",
    ],
    frontendFeatures: [
      "Device provisioning and registration through device ID and PIN.",
      "Branch-specific landing screen content, visitor lookup, visitor registration and update, OTP verification, token generation, token display, and live serving board view.",
      "Admin and staff flows for login, queue handling, serve flow, consultation pages, protected routes, and auth session management.",
      "Android immersive mode, kiosk-oriented behavior, boot handling, device admin or lock-task support, USB host support, Bluetooth printer support, thermal printing, voice announcements, and landing media playback.",
      "Build-time environment switching between local and production APIs.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "BLoC",
      "Dio",
      "GoRouter",
      "Firebase",
      "FCM",
      "Thermal Printing",
    ],
    frontendStack: [
      "Flutter",
      "Dart",
      "BLoC",
      "Dio",
      "HTTP",
      "GoRouter",
      "flutter_secure_storage",
      "shared_preferences",
      "video_player",
      "flutter_tts",
      "WebSocket support",
      "Custom thermal printer plugin forks",
    ],
    backendDetails:
      "The backend is built with Laravel and serves as the public API for kiosk and visitor flows, the protected API for staff and admin workflows, and the Laravel + Vue/Inertia web admin and marketing surface.",
    backendArchitecture: [
      "The platform follows a multi-tenant organization-scoped model where organizations are the top-level tenant and internal users generally operate within their assigned organization.",
      "Core domain areas include organizations, branches, services, persons and doctors, devices, visitors, queues, visitor activities, landings, counters, roles, plans, SMS packages and transactions, and consultation-related medical records.",
      "Queue generation is built around validation, transactional creation, duplicate same-day queue handling, estimated wait time calculation, and SMS trigger logic.",
    ],
    backendCapabilities: [
      "Public kiosk APIs for device registration, landing registration, visitor lookup, visitor save and update, OTP send and verify, visitor activity creation, queue generation, queue index retrieval, serving board data, and doctor lists.",
      "Serving board support with currently serving token, next waiting visitors, doctor and service metadata, and cache-busting response behavior.",
      "Consultation workflow support with consultation retrieval, save, complete, referrals, symptoms, diagnoses, medicines, and prescription printing.",
      "Admin and staff capabilities for organizations, branches, users, services, doctors, devices, visitors, queues, visitor activities, roles, counters, plans, SMS packages, SMS transactions, and landing screen management.",
      "Marketing and public website pages for features, kiosk, solutions, pricing, about, contact, privacy, terms, data deletion, and sitemap.",
    ],
    backendStack: [
      "PHP 8.2+",
      "Laravel 12",
      "Laravel Sanctum",
      "Laravel Fortify",
      "Vue 3",
      "Inertia.js",
      "TypeScript",
      "Tailwind CSS v4",
      "Vite",
      "Pest",
      "PHPUnit",
    ],
    securityReliability: [
      "Throttled public endpoints, request validation throughout, transaction-wrapped critical operations, and organization or branch consistency checks.",
      "OTP attempt limits, resend cooldowns, hashed OTP storage, verification consumption after use, SMS credit deduction, and separate OTP and token templates.",
      "No-cache serving board responses, payload fingerprinting, internal health checks, and logging around critical failures.",
    ],
    notes:
      "Presynx stands out through its combination of Flutter kiosk architecture, hardware integration, queue generation business rules, and a multi-tenant Laravel backend with healthcare workflow support.",
    liveUrl: "https://presynx.com/",
  },
  {
    title: "Yujix",
    summary:
      "Multi-platform Flutter application for meetings, contacts, surveys, events, billing flows, and business operations with responsive UI and integration-heavy user journeys.",
    projectType:
      "Flutter application for meeting, contact, survey, event, and account workflows with analytics, notifications, and payment-related frontend integration.",
    role:
      "Flutter developer responsible for the frontend application, responsive layouts, user flows, and platform integrations across the app experience.",
    overview:
      "Yujix is a productivity and business management application focused on the end-user product experience across web and mobile form factors. My contribution centered on building the Flutter app surface for meetings, contacts, surveys, events, quotations, invoices, subscriptions, notifications, sign-in flows, and account management with UI that stays usable across device sizes.",
    productCapabilities: [
      "Users can manage meetings, contacts, surveys, analytics, events, quotations, invoices, plans, profiles, privacy settings, notifications, and account workflows.",
      "The app supports contact import and export, meeting reminders, Google sign-in, subscription billing journeys, and support or contact features.",
      "Authenticated users can move through structured in-app workflows for productivity, communication, and account settings from a single Flutter experience.",
    ],
    frontendDetails:
      "The frontend is a multi-platform Flutter application for web, Android, iOS, macOS, and Linux, with Windows scaffolding present. My role on this project was Flutter developer.",
    frontendArchitecture: [
      "The frontend is organized around pages, services, config, widgets, and models for maintainable app structure.",
      "Routing uses GoRouter with public auth routes, protected in-app routes, and shell-based navigation for authenticated screens.",
      "State and runtime behavior focus on authentication restoration, notifications, subscriptions, local persistence, and environment-aware configuration.",
    ],
    frontendFeatures: [
      "Authentication and session restoration, email-password login and signup, forgot and reset password, email verification, email-change verification, and Google sign-in.",
      "Calendar, meetings, contacts, surveys, survey analytics, events, quotations, invoices, items, pricing, checkout, profile, privacy, notifications, help, and account settings.",
      "Firebase push token registration after login, route analytics observation, local notification channels, platform-specific implementations, contact permission handling, and import or export flows.",
      "Razorpay integration on the Flutter side and responsive UI support across device sizes.",
    ],
    stack: [],
    frontendStack: [
      "Flutter",
      "Dart",
      "GoRouter",
      "HTTP",
      "Google Sign-In",
      "Firebase Core",
      "Firebase Messaging",
      "Firebase Analytics",
      "Flutter Local Notifications",
      "Shared Preferences",
      "File Picker",
      "CSV",
      "Share Plus",
      "Path Provider",
      "Device Info Plus",
      "Package Info Plus",
      "FL Chart",
      "Razorpay Flutter",
      "Image Picker",
      "Camera",
      "Flutter Contacts",
    ],
    securityReliability: [
      "Session restoration, protected route handling, and auth-aware navigation help keep the in-app experience consistent after login state changes.",
      "Notification registration, analytics hooks, and local persistence are wired into the app flow with attention to duplicate handling and user-state continuity.",
      "Responsive layouts, platform-aware implementations, and guarded account flows help the application remain stable across device sizes and usage contexts.",
    ],
    notes:
      "Yujix is presented here strictly as a Flutter frontend contribution, with emphasis on responsive UI, navigation structure, integrations, and product-facing user flows.",
    liveUrl: "https://app.yujix.com/",
  },
  {
    title: "Trust Up",
    summary:
      "Community-focused platform for matching needs, offers, resources, and local opportunities through hubs, discovery flows, and inclusive communication features.",
    projectType:
      "Frontend application for community resource discovery, exchange, and hub-based connection with multilingual and communication-focused user workflows.",
    role:
      "Frontend developer contributing to user-facing flows, responsive UI behavior, and app experiences centered on discovery, communication, and community participation.",
    overview:
      "Trust Up is a platform designed to help people discover needs, offers, skills, goods, and local opportunities in one connected product experience. The app emphasizes community hubs, resource discovery, public and direct communication, and accessible interfaces that help people connect around real-world support and collaboration.",
    productCapabilities: [
      "Users can list needs and offers, discover local resources, and explore opportunities through community-oriented feeds and directories.",
      "Hub-based participation lets people connect around neighborhoods, workplaces, schools, and shared interests in more focused spaces.",
      "Messaging, public walls, and multilingual support help users communicate more easily and participate across different communities.",
    ],
    frontendDetails:
      "The frontend experience is centered on making community exchange and discovery approachable across devices, with clear navigation, readable content surfaces, and user flows that support resource sharing, communication, and account participation.",
    frontendArchitecture: [
      "The app surface is organized around discovery, hubs, resource or offer listings, and communication flows that keep community participation easy to follow.",
      "Frontend structure prioritizes clear browsing patterns, approachable content presentation, and scalable screen organization for a feature-rich product.",
      "Responsive behavior supports both quick interactions and deeper exploration of needs, offers, and group activity across screen sizes.",
    ],
    frontendFeatures: [
      "Needs and offers listing flows, resource discovery, and feeds that surface opportunities and support within the community.",
      "Hub participation, public and direct communication surfaces, and user-friendly exploration of people, resources, and updates.",
      "Multilingual support and accessible content presentation aimed at broader inclusion and easier participation.",
    ],
    stack: ["Flutter", "Community Platform", "Messaging", "Resource Discovery", "Responsive UI"],
    frontendStack: [
      "Flutter",
      "Responsive UI",
      "Messaging Flows",
      "Directory Browsing",
      "Feed Interfaces",
      "Community Hubs",
      "Multilingual UX",
    ],
    securityReliability: [
      "Account-oriented flows and structured navigation help users move through listings, hubs, and communication features with consistent state handling.",
      "Readable layouts and responsive interactions reduce friction across device sizes for content-heavy exploration and participation.",
      "Frontend presentation focuses on stable discovery, communication clarity, and predictable navigation across community workflows.",
    ],
    notes:
      "Trust Up is presented here as a frontend-focused contribution centered on community discovery, inclusive UX, and product flows that support real resource-sharing and connection.",
    liveUrl: "https://trustup.app/",
  },
  {
    title: "Ongoing Forge",
    summary:
      "Full-stack SaaS project-management platform built with PHP, Laravel, MySQL, and Vue.js for collaboration, task planning, and organization workflows.",
    projectType:
      "Full-stack web application for project management, collaboration, task planning, forms, and organization-level workflow management.",
    role:
      "Full-stack web developer contributing across the Laravel backend, MySQL data model, and Vue.js product interface for project and team workflows.",
    overview:
      "Ongoing Forge is a SaaS project-management and collaboration platform designed for organizations that need structured project execution, team coordination, communication, and operational tooling in one product. The system combines Laravel-powered backend workflows, MySQL-backed data management, and a Vue.js interface for task planning, collaboration, and organization management.",
    productCapabilities: [
      "Organizations can manage projects, teams, and structured task workflows through project-management interfaces such as Kanban and Gantt views.",
      "Teams can collaborate through chat, meetings, whiteboard tooling, and shared product workflows built around day-to-day execution.",
      "Form builder and organization-management features support broader operational workflows beyond simple task tracking.",
    ],
    frontendDetails:
      "The frontend is built with Vue.js and designed around dashboards, structured workspace navigation, collaboration tools, and scalable SaaS interactions across organization, team, and project contexts.",
    frontendArchitecture: [
      "The Vue.js application is organized around organization scope, team collaboration, project workflows, and supporting tools such as forms and whiteboards.",
      "Frontend layout prioritizes dashboard clarity, workspace navigation, and modular feature surfaces for a product with multiple collaboration areas.",
      "Responsive UI behavior helps preserve usability across task-heavy screens, management views, and communication-oriented experiences.",
    ],
    frontendFeatures: [
      "Kanban and Gantt-oriented project workflows, task organization, and team-facing workspace experiences.",
      "Chat, meeting, and whiteboard collaboration flows that support real-time teamwork within the product.",
      "Forms builder, dashboard views, and organization-management surfaces for broader business workflow support.",
    ],
    stack: ["PHP", "Laravel", "MySQL", "Vue.js", "SaaS"],
    frontendStack: [
      "Vue.js",
      "JavaScript",
      "Dashboard UI",
      "Gantt Views",
      "Team Collaboration",
      "Forms Builder",
      "Responsive UI",
    ],
    backendDetails:
      "The backend is built with PHP and Laravel, with MySQL handling core application data for organizations, teams, projects, tasks, collaboration workflows, and operational tooling across the SaaS platform.",
    backendArchitecture: [
      "Laravel structures the application around organization-level workflow management, project execution, collaboration features, and shared business logic.",
      "MySQL persists project, team, task, form, and collaboration data in a relational model that supports multi-entity SaaS workflows.",
      "Backend services coordinate the web application’s operational flows, task state, communication support, and structured management features.",
    ],
    backendCapabilities: [
      "Project, team, and organization management backed by application logic for task planning, execution, and collaboration workflows.",
      "Data handling for Kanban, Gantt, forms, whiteboard-adjacent workflows, and broader operational product features.",
      "Centralized backend support for SaaS-style workspace behavior, structured resource management, and product-wide business rules.",
    ],
    backendStack: ["PHP", "Laravel", "MySQL"],
    securityReliability: [
      "Laravel-backed application structure and MySQL persistence help keep organization, project, and task workflows consistent across the platform.",
      "Responsive Vue.js layout work helps data-heavy screens and collaboration surfaces remain usable across device widths.",
      "Product interactions emphasize clarity, stable movement between management areas, and reliable handling of structured workspace flows.",
    ],
    notes:
      "Ongoing Forge is presented here as a full-stack SaaS collaboration project built with PHP, Laravel, MySQL, and Vue.js, with emphasis on project workflow clarity, collaboration tooling, and scalable organization management.",
    liveUrl: "https://ongoingforge.com/",
  },
];

export const skills = [
  "Flutter",
  "Dart",
  "Responsive UI",
  "REST API Integration",
  "Dio",
  "BLoC",
  "GoRouter",
  "Firebase Authentication",
  "Firebase Cloud Messaging",
  "Cross-Platform App Delivery",
];

export const skillLogos = [
  { name: "Flutter", src: "/skills/flutter.svg", alt: "Flutter logo" },
  { name: "Dart", src: "/skills/dart.svg", alt: "Dart logo" },
  { name: "Dio", src: "/skills/dio.svg", alt: "Dio icon" },
  { name: "BLoC", src: "/skills/bloc.svg", alt: "BLoC icon" },
  { name: "GoRouter", src: "/skills/gorouter.svg", alt: "GoRouter icon" },
  {
    name: "Firebase Auth",
    src: "/skills/firebase-auth.svg",
    alt: "Firebase Authentication logo",
  },
  {
    name: "FCM",
    src: "/skills/firebase-messaging.svg",
    alt: "Firebase Cloud Messaging logo",
  },
  {
    name: "Responsive UI",
    src: "/skills/responsive-ui.svg",
    alt: "Responsive UI icon",
  },
  {
    name: "API Integration",
    src: "/skills/api-integration.svg",
    alt: "API integration icon",
  },
  {
    name: "Cross Platform",
    src: "/skills/cross-platform.svg",
    alt: "Cross-platform app development icon",
  },
];

export const blogPosts = [
  {
    title: "Building Flutter Apps That Stay Maintainable",
    date: "May 2026",
    readTime: "8 min read",
    tags: ["flutter", "architecture", "bloc"],
    excerpt:
      "How I think about routing, state boundaries, responsive UI, and API layers when a Flutter app has to grow beyond a few screens.",
    featured: true,
  },
  {
    title: "What I Learned From Healthcare Kiosk Work",
    date: "Apr 2026",
    readTime: "7 min read",
    tags: ["kiosk", "android", "product"],
    excerpt:
      "Notes from building flows where device state, patient check-in, printing, OTP, and staff operations all need to feel dependable.",
  },
  {
    title: "Using AI Tools Without Losing Engineering Control",
    date: "Mar 2026",
    readTime: "6 min read",
    tags: ["ai", "workflow", "codex"],
    excerpt:
      "A practical look at using Claude, Codex, and Cursor as development support while still owning structure, validation, and implementation quality.",
  },
  {
    title: "Responsive UI Lessons From Mobile Product Screens",
    date: "Feb 2026",
    readTime: "5 min read",
    tags: ["ui", "responsive", "mobile"],
    excerpt:
      "The small layout decisions that keep dashboards, forms, and dense product screens usable across web, tablet, and mobile surfaces.",
  },
];

export const testimonials = [
  {
    quote:
      "Abhishek is strongest when product flows need careful frontend execution, especially around responsive UI and app state.",
    name: "Product Lead",
    role: "Mobile application team",
  },
  {
    quote:
      "He approaches integration work patiently, keeps screens usable, and thinks through the actual user journey instead of only the happy path.",
    name: "Engineering Collaborator",
    role: "Flutter and backend workflow",
  },
  {
    quote:
      "The combination of Flutter delivery and steady iteration makes him fast without skipping the details that matter.",
    name: "Project Partner",
    role: "Web and app delivery",
  },
  {
    quote:
      "Abhishek brings steady execution to multi-screen applications where routing, API calls, and platform behavior all meet.",
    name: "Team Member",
    role: "Product development",
  },
];

export const toolCategories = [
  {
    number: "01",
    title: "Mobile",
    subtitle: "Flutter Delivery",
    items: ["Flutter", "Dart", "BLoC", "GoRouter", "Dio", "Firebase", "FCM"],
  },
  {
    number: "02",
    title: "Frontend",
    subtitle: "Interfaces",
    items: ["Responsive UI", "Tailwind CSS", "Vue.js", "Next.js", "TypeScript"],
  },
  {
    number: "03",
    title: "Backend",
    subtitle: "Product APIs",
    items: ["Laravel", "PHP", "MySQL", "REST APIs", "Sanctum", "Inertia.js"],
  },
  {
    number: "04",
    title: "Workflow",
    subtitle: "AI Assisted",
    items: ["OpenAI Codex", "Claude", "Cursor", "GitHub", "Prompt Engineering"],
  },
];
