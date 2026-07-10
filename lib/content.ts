export const profile = {
  name: "Abhishek Sakhreliya",
  title: "Flutter Developer",
  role: "Flutter Developer",
  bio:
    "Apps that feel designed. Flutter that actually ships. Flutter Developer with 1 year of experience building cross-platform mobile applications with clean architecture, responsive UI, and production-ready delivery from Ahmedabad, India.",
  location: "Ahmedabad, Gujarat, India",
  availability: "Open to work — Flutter & mobile projects",
  footerCtaHeadline: "I'm available for full-time roles & freelance projects.",
  footerCtaSubtext:
    "I build Flutter mobile apps with polished UI, clean architecture, and production-ready delivery.",
  email: "sakhreliyaabhishek@gmail.com",
  phone: "+91 7990319450",
  github: "https://github.com/sakhreliyaabhishek-ui",
  whatsapp: "https://wa.me/917990319450",
  socials: [
    { label: "GitHub", href: "https://github.com/sakhreliyaabhishek-ui" },
    { label: "WhatsApp", href: "https://wa.me/917990319450" },
    { label: "Email", href: "mailto:sakhreliyaabhishek@gmail.com" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  index: string;
  category: string;
  projectType: string;
  summary: string;
  role: string;
  overview: string;
  productCapabilities: string[];
  frontendDetails: string;
  frontendArchitecture: string[];
  frontendFeatures: string[];
  technologies: string[];
  frontendStack: string[];
  backendDetails?: string;
  backendArchitecture?: string[];
  backendCapabilities?: string[];
  backendStack?: string[];
  securityReliability: string[];
  notes: string;
  liveUrl: string;
  tone: "cyan" | "violet" | "rose" | "amber";
  features: string[];
};

export const projects: Project[] = [
  {
    slug: "yujix",
    title: "Yujix",
    index: "01",
    category: "Business productivity app",
    projectType: "Business productivity app",
    summary:
      "Multi-platform Flutter application for meetings, contacts, surveys, events, billing flows, and business operations with responsive UI and integration-heavy user journeys.",
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
    technologies: ["Flutter", "Dart", "GoRouter", "Firebase", "Razorpay", "FL Chart", "Google Sign-In"],
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
    tone: "violet",
    features: [
      "Meetings, contacts, surveys, analytics, events, quotations, invoices, plans, and profile flows",
      "Authentication restoration, Google sign-in, notifications, analytics hooks, and local persistence",
      "Responsive web and mobile screens with contact import/export and payment-facing integration",
    ],
  },
  {
    slug: "presynx",
    title: "Presynx",
    index: "02",
    category: "Healthcare queue platform",
    projectType: "Healthcare queue platform",
    summary:
      "Flutter kiosk and staff application for healthcare queue management with visitor check-in, token generation, serving boards, and staff queue workflows.",
    role:
      "Flutter developer for the kiosk and staff-facing application, with OpenAI Codex and Cursor used to support delivery across the Flutter codebase.",
    overview:
      "Presynx is a multi-tenant queue management solution for clinics, hospitals, and healthcare branches. The Flutter application handles patient check-in, token generation, queue display, doctor and service routing, staff queue handling, consultation workflows, and organization-level administration through a public-facing kiosk experience and a protected staff/admin platform.",
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
    technologies: ["Flutter", "Dart", "BLoC", "Dio", "GoRouter", "Firebase", "FCM", "Thermal Printing"],
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
    securityReliability: [
      "Auth-aware routing and session handling across kiosk, staff, and admin flows within the Flutter application.",
      "Secure local persistence for device registration, session state, and printer configuration on kiosk hardware.",
      "Platform-specific Android kiosk behaviors, thermal printing integration, and resilient serving-board UI updates.",
    ],
    notes:
      "Presynx is presented here as a Flutter frontend contribution, emphasizing kiosk architecture, hardware integration, queue workflows, and staff-facing product flows.",
    liveUrl: "https://presynx.com/",
    tone: "cyan",
    features: [
      "Self-service kiosk, visitor lookup, OTP verification, token generation, and serving board flows",
      "Protected admin and staff queue handling, consultation pages, and auth-aware routing",
      "Android kiosk behavior, thermal printing, voice announcements, and landing media playback",
    ],
  },
  {
    slug: "jems",
    title: "Jems",
    index: "03",
    category: "Mobile App",
    projectType: "Mobile App",
    summary:
      "A Flutter mobile application built with clean architecture and a polished cross-platform user experience.",
    role: "Flutter developer responsible for UI, app structure, and cross-platform delivery.",
    overview:
      "Jems is a cross-platform Flutter project showcasing modern mobile development practices. Built with Dart and Flutter, it demonstrates UI craftsmanship, structured code organization, and a foundation ready for production features.",
    productCapabilities: [
      "Cross-platform Flutter UI built for consistent experiences across Android and iOS targets.",
      "Structured app organization with maintainable screens, navigation, and reusable widgets.",
      "A project foundation designed for iterative feature growth and production readiness.",
    ],
    frontendDetails:
      "The frontend is built with Flutter and Dart, focused on responsive layouts, readable screen structure, and a polished product feel suitable for portfolio and production extension.",
    frontendArchitecture: [
      "Feature-oriented Flutter structure with separation between presentation, state, and data concerns.",
      "Navigation and screen flow organized for clarity as the app grows beyond initial milestones.",
      "Reusable UI building blocks that keep the codebase approachable for future feature work.",
    ],
    frontendFeatures: [
      "Cross-platform Flutter screens with attention to spacing, typography, and interaction clarity.",
      "Composable widget structure that supports iterative UI refinement and feature expansion.",
      "Project setup oriented toward maintainable Dart code and predictable app behavior.",
    ],
    technologies: ["Flutter", "Dart", "Mobile UI", "Cross-Platform"],
    frontendStack: ["Flutter", "Dart", "Material Design", "Cross-Platform UI"],
    securityReliability: [
      "Structured Flutter codebase that keeps UI state and screen responsibilities easier to reason about.",
      "Cross-platform delivery approach that reduces duplicate work while preserving a consistent product feel.",
    ],
    notes:
      "Jems is presented as a Flutter portfolio project with emphasis on clean structure, UI quality, and a codebase that can grow into a fuller product over time.",
    liveUrl: "https://jigomitgems.netlify.app/",
    tone: "cyan",
    features: [
      "Cross-platform Flutter UI with a polished product feel",
      "Maintainable project structure for iterative feature growth",
      "GitHub-hosted codebase ready for continued development",
    ],
  },
];

export const experience = [
  {
    period: "2025 — Present",
    title: "Flutter Developer",
    organization: "Freelance",
    description:
      "Building cross-platform Flutter applications with clean architecture, responsive UI, and production-minded delivery.",
  },
  {
    period: "2024 — 2025",
    title: "Personal Projects",
    organization: "Flutter Learning & Delivery",
    description:
      "Developed Jems and other Flutter applications end-to-end, strengthening skills in Dart, UI design, and mobile app structure.",
  },
  {
    period: "2024",
    title: "Self-Taught Developer",
    organization: "Learning Journey",
    description:
      "Mastered Flutter, Dart, state management fundamentals, and cross-platform mobile development workflows.",
  },
];

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
    period: "2022 - 2025",
    title: "Bachelor of Computer Application",
    subtitle: "Undergraduate Degree",
    summary:
      "Graduated with 8.67 CGPA, building the technical base for application development and software problem solving.",
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

export type TechStackItem = {
  name: string;
  icon: string;
};

export const techStack: TechStackItem[] = [
  { name: "Flutter", icon: "/skills/flutter.svg" },
  { name: "Dart", icon: "/skills/dart.svg" },
  { name: "Dio", icon: "/skills/dio.svg" },
  { name: "BLoC", icon: "/skills/bloc.svg" },
  { name: "GoRouter", icon: "/skills/gorouter.svg" },
  { name: "Firebase Auth", icon: "/skills/firebase-auth.svg" },
  { name: "FCM", icon: "/skills/firebase-messaging.svg" },
  { name: "Responsive UI", icon: "/skills/responsive-ui.svg" },
  { name: "API Integration", icon: "/skills/api-integration.svg" },
  { name: "Cross Platform", icon: "/skills/cross-platform.svg" },
];

export type FavoriteTool = {
  name: string;
  icon: string;
};

export const favoriteTools: FavoriteTool[] = [
  { name: "Claude", icon: "/uses/claude.svg" },
  { name: "OpenAI Codex", icon: "/uses/openai.svg" },
  { name: "Cursor", icon: "/uses/cursor.svg" },
  { name: "Gemini", icon: "/uses/gemini.svg" },
];
