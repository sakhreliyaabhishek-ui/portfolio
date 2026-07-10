import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="inner-page projects-page page-frame">
      <header className="page-heading page-heading--center">
        <p>Case studies</p>
        <h1>Curated <em>work</em></h1>
        <span>Production projects with real workflow and integration depth.</span>
      </header>
      <section className="projects-grid">
        {projects.map((project) => (
          <article className={`project-card project-card--${project.tone}`} key={project.slug}>
            <div className="project-topline">
              <span>{project.index}</span>
              <span>{project.projectType}</span>
              <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
                <ArrowUpRight />
              </a>
            </div>
            <div className="project-details">
              <div>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
              <div className="project-case-panels">
                <section>
                  <p className="project-section-label">Role</p>
                  <span>{project.role}</span>
                </section>
                <section>
                  <p className="project-section-label">Key outcomes</p>
                  <ul className="project-capabilities">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className="project-case-grid">
                <section>
                  <p className="project-section-label">Core stack</p>
                  <ul className="project-tech-list">
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className={`project-build-grid${project.backendDetails ? "" : " project-build-grid--single"}`}>
                <section className="project-detail-section">
                  <p className="project-section-label">Frontend</p>
                  <p>{project.frontendDetails}</p>
                  <div>
                    <strong>Highlights</strong>
                    <ul className="project-capabilities project-capabilities--compact">
                      {project.frontendFeatures.slice(0, 3).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <ul className="project-tech-list project-tech-list--wide">
                    {project.frontendStack.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </section>
                {project.backendDetails ? (
                  <section className="project-detail-section">
                    <p className="project-section-label">Backend</p>
                    <p>{project.backendDetails}</p>
                    {project.backendCapabilities ? (
                      <div>
                        <strong>Capabilities</strong>
                        <ul className="project-capabilities project-capabilities--compact">
                          {project.backendCapabilities.slice(0, 3).map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {project.backendStack ? (
                      <ul className="project-tech-list project-tech-list--wide">
                        {project.backendStack.map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ) : null}
              </div>
              <section className="project-reliability">
                <p className="project-section-label">Reliability</p>
                <div>
                  {project.securityReliability.slice(0, 2).map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>
              </section>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
