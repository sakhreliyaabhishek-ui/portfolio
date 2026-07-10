import type { Metadata } from "next";
import Image from "next/image";
import { Bot, Code2, Cpu, Layers3, Rocket, Sparkles, Wrench } from "lucide-react";
import { toolCategories } from "@/data/content";
import { favoriteTools } from "@/lib/content";

export const metadata: Metadata = {
  title: "Uses",
};

export default function UsesPage() {
  const categoryIcons = [Rocket, Layers3, Cpu, Bot];
  const toolCount = toolCategories.reduce((total, category) => total + category.items.length, 0);

  return (
    <main className="inner-page uses-page page-frame">
      <header className="page-heading page-heading--center">
        <p>Uses</p>
        <h1>What powers <em>my work</em></h1>
        <span>Technologies, frameworks, and AI-assisted tools behind portfolio and app delivery.</span>
      </header>

      <section className="uses-hero-grid">
        <article className="uses-hero-card glass-panel">
          <p className="section-label">Workflow stack</p>
          <h2>Tools chosen for app delivery and faster iteration.</h2>
          <p>
            My setup combines Flutter-focused engineering, frontend and backend product work, and
            AI-assisted development tools that help move from idea to usable interface quickly.
          </p>
          <div className="uses-hero-pills">
            <span><Wrench aria-hidden="true" /> Product tools</span>
            <span><Code2 aria-hidden="true" /> App delivery</span>
            <span><Sparkles aria-hidden="true" /> AI assisted</span>
          </div>
        </article>

        <div className="uses-stats">
          <article className="glass-panel">
            <strong>{toolCategories.length}</strong>
            <span>Tool groups</span>
          </article>
          <article className="glass-panel">
            <strong>{toolCount}</strong>
            <span>Listed tools</span>
          </article>
          <article className="glass-panel">
            <strong>{favoriteTools.length}</strong>
            <span>AI favorites</span>
          </article>
        </div>
      </section>

      <section className="uses-section">
        <div className="uses-section-heading">
          <p className="section-label">Everyday setup</p>
          <h2>The stack grouped by how it supports the work.</h2>
        </div>

        <div className="uses-category-grid">
          {toolCategories.map((category, index) => {
            const Icon = categoryIcons[index] ?? Wrench;
            return (
              <article className="uses-category-card glass-panel" key={category.title}>
                <div className="uses-category-topline">
                  <span>{category.number}</span>
                  <div className="uses-category-icon">
                    <Icon aria-hidden="true" />
                  </div>
                </div>
                <p className="section-label">{category.subtitle}</p>
                <h3>{category.title}</h3>
                <div>
                  {category.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="uses-section">
        <div className="uses-section-heading">
          <p className="section-label">AI workflow</p>
          <h2>Tools I use for assisted implementation and iteration.</h2>
        </div>

        <div className="uses-tool-grid">
          {favoriteTools.map((tool) => (
            <article className="uses-tool-card" key={tool.name}>
              <span>
                <Image src={tool.icon} alt="" width={30} height={30} aria-hidden="true" />
              </span>
              <strong>{tool.name}</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
