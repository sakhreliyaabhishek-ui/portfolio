import type { Metadata } from "next";
import { experience, skills } from "@/lib/content";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <main className="inner-page page-frame">
      <header className="page-heading">
        <p>Experience & skills</p>
        <h1>Flutter Developer<br /><em>AI-assisted workflow</em></h1>
      </header>
      <section className="experience-layout">
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item glass-panel" key={item.title}>
              <span className="timeline-number">0{index + 1}</span>
              <p>{item.period}</p>
              <h2>{item.title}</h2>
              <strong>{item.organization}</strong>
              <span>{item.description}</span>
            </article>
          ))}
        </div>
        <aside className="skill-cloud glass-panel">
          <p className="section-label">Toolkit</p>
          <h2>Tools I use to move app ideas into production.</h2>
          <div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </aside>
      </section>
    </main>
  );
}
