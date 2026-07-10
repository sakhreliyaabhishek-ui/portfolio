import type { Metadata } from "next";
import { Bot, Boxes, Cable, LayoutGrid, Rocket, ShieldCheck } from "lucide-react";
import { LogoSlider } from "@/components/ui/logo-slider";
import { projects, techStack } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skills",
};

const skillLogos = techStack.map((item) => ({
  name: item.name,
  src: item.icon,
  alt: `${item.name} icon`,
}));

const capabilityCards = [
  {
    title: "Mobile app architecture",
    description:
      "Flutter app structure with routing, state boundaries, reusable widgets, and maintainable flows for real product screens.",
    icon: Boxes,
    items: ["Flutter", "Dart", "BLoC", "GoRouter"],
  },
  {
    title: "API and integration work",
    description:
      "REST-driven screens, Dio networking, request states, protected flows, and backend-aware UI behavior.",
    icon: Cable,
    items: ["Dio", "REST APIs", "HTTP", "Auth flows"],
  },
  {
    title: "Responsive product UI",
    description:
      "Interfaces that stay usable across mobile, web, tablet, dashboard, kiosk, and dense app layouts.",
    icon: LayoutGrid,
    items: ["Responsive UI", "Forms", "Dashboards", "Kiosk UI"],
  },
  {
    title: "Firebase services",
    description:
      "Authentication, messaging, notification registration, and app flows that depend on reliable user state.",
    icon: ShieldCheck,
    items: ["Firebase Auth", "FCM", "Notifications", "Sessions"],
  },
  {
    title: "Cross-platform delivery",
    description:
      "Product work spanning Android, iOS, web, desktop scaffolds, deployment readiness, and platform-aware behavior.",
    icon: Rocket,
    items: ["Android", "iOS", "Web", "Desktop"],
  },
  {
    title: "AI-assisted workflow",
    description:
      "Using Codex, Claude, Cursor, and Gemini to speed up implementation while keeping engineering control.",
    icon: Bot,
    items: ["Codex", "Claude", "Cursor", "Gemini"],
  },
];

export default function SkillsPage() {
  const projectHighlights = projects.map((project) => ({
    title: project.title,
    category: project.category,
    skills: project.technologies.slice(0, 5),
    summary: project.features.slice(0, 2).join(" "),
    tone: project.tone,
  }));

  return (
    <main className="inner-page page-frame">
      <header className="page-heading page-heading--center">
        <p>Skills</p>
        <h1>
          Flutter skills for<br />
          <em>product delivery</em>
        </h1>
      </header>

      <section className="skills-layout">
        <div className="skills-card-list">
          {capabilityCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article className="skills-capability-panel glass-panel" key={card.title}>
                <span className="skills-panel-number">0{index + 1}</span>
                <div className="skills-panel-icon">
                  <Icon aria-hidden="true" />
                </div>
                <p className="section-label">{card.items.slice(0, 2).join(" / ")}</p>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <div>
                  {card.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <LogoSlider logos={skillLogos} speed={34} direction="left" className="skills-logo-slider" />

      <section className="skills-project-section">
        <div className="skills-project-heading">
          <p className="section-label">Project relevance</p>
          <h2>Where these skills show up in my work.</h2>
        </div>
        <div className="skills-project-strip">
          {projectHighlights.map((project) => (
            <article className={`skills-project-card skills-project-card--${project.tone}`} key={project.title}>
              <div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <footer>
                {project.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </footer>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
