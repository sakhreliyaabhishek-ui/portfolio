import type { Metadata } from "next";
import { ArrowUpRight, BookOpen, Code2, Layers3, Sparkles } from "lucide-react";
import Link from "next/link";
import { projects, techStack } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
};

const articleThemes = [
  {
    title: "Building responsive Flutter product screens that stay usable",
    eyebrow: "Featured note",
    readTime: "6 min read",
    date: "Jun 2026",
    tags: ["Responsive UI", "Flutter", "Product"],
    icon: Sparkles,
    projectSlug: "yujix",
    summary:
      "Lessons from app screens that need to handle meetings, contacts, billing, profiles, notifications, and dense user journeys across web and mobile widths.",
  },
  {
    title: "What Presynx taught me about healthcare kiosk workflows",
    eyebrow: "Interface notes",
    readTime: "8 min read",
    date: "May 2026",
    tags: ["Flutter", "Kiosk", "Healthcare"],
    icon: Layers3,
    projectSlug: "presynx",
    summary:
      "A practical look at device registration, queue generation, visitor lookup, OTP verification, serving boards, and staff workflows in a Flutter healthcare kiosk application.",
  },
  {
    title: "How I think about API-heavy mobile app flows",
    eyebrow: "Engineering notes",
    readTime: "7 min read",
    date: "Apr 2026",
    tags: ["Dio", "REST APIs", "State"],
    icon: Code2,
    projectSlug: "presynx",
    summary:
      "How routing, BLoC state boundaries, secure local storage, API responses, and retry-friendly UI patterns fit together when app flows depend on backend coordination.",
  },
  {
    title: "Building Jems with a Flutter-first product mindset",
    eyebrow: "Workflow notes",
    readTime: "5 min read",
    date: "Mar 2026",
    tags: ["Flutter", "Dart", "GitHub"],
    icon: BookOpen,
    projectSlug: "jems",
    summary:
      "How I approached Jems as a cross-platform Flutter project with attention to structure, UI clarity, and a codebase that can grow over time.",
  },
];

export default function BlogPage() {
  const featured = articleThemes[0];
  const featuredProject = projects.find((project) => project.slug === featured.projectSlug) ?? projects[0];
  const projectNotes = projects.map((project) => ({
    title: `${project.title}: ${project.category}`,
    summary: project.summary,
    tags: project.technologies.slice(0, 4),
    href: project.liveUrl,
    tone: project.tone,
  }));

  return (
    <main className="inner-page blog-page page-frame">
      <header className="page-heading page-heading--center">
        <p>Project writing</p>
        <h1>Build notes <em>from real work</em></h1>
        <span>Practical notes from Flutter apps, product flows, integrations, and AI-assisted delivery.</span>
      </header>

      <section className="blog-featured glass-panel">
        <div className="blog-featured-copy">
          <p className="section-label">{featured.eyebrow}</p>
          <h2>{featured.title}</h2>
          <p>{featured.summary}</p>
          <div className="blog-meta-row">
            <span>{featured.date}</span>
            <span>{featured.readTime}</span>
            <span>{featuredProject.title}</span>
          </div>
          <div className="blog-tags">
            {featured.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="primary-pill blog-read-link" href="/projects">
            View related project <ArrowUpRight />
          </Link>
        </div>
        <div className={`blog-featured-card blog-featured-card--${featuredProject.tone}`} aria-hidden="true">
          <span>{featuredProject.index}</span>
          <strong>{featuredProject.title}</strong>
          <p>{featuredProject.projectType}</p>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-section-heading">
          <p className="section-label">Latest notes</p>
          <h2>Short articles tied to the portfolio projects.</h2>
        </div>
        <div className="blog-article-grid">
          {articleThemes.slice(1).map((article) => {
            const Icon = article.icon;
            const project = projects.find((item) => item.slug === article.projectSlug);
            return (
              <article className="blog-article-card glass-panel" key={article.title}>
                <div className="blog-article-icon">
                  <Icon aria-hidden="true" />
                </div>
                <p className="section-label">{article.eyebrow}</p>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className="blog-meta-row">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                  {project ? <span>{project.title}</span> : null}
                </div>
                <div className="blog-tags">
                  {article.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-section-heading">
          <p className="section-label">Project index</p>
          <h2>Case-study topics I can write deeper about.</h2>
        </div>
        <div className="blog-project-list">
          {projectNotes.map((note) => (
            <a
              className={`blog-project-note blog-project-note--${note.tone}`}
              href={note.href}
              target="_blank"
              rel="noreferrer"
              key={note.title}
            >
              <div>
                <h3>{note.title}</h3>
                <p>{note.summary}</p>
              </div>
              <div className="blog-tags">
                {note.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="blog-stack-strip" aria-label="Core stack">
        {techStack.map((item) => (
          <span key={item.name}>{item.name}</span>
        ))}
      </section>
    </main>
  );
}
