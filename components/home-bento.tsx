import Image from "next/image";
import { favoriteTools, techStack } from "@/lib/content";

export function HomeBento() {
  const emphasizedToolIndex = Math.floor(favoriteTools.length / 2);

  return (
    <section className="home-bento" id="home-bento" aria-label="Tech stack and tools">
      <div className="home-bento-grid">
        <article className="home-bento-card glass-panel home-bento-card--stack">
          <div className="home-stack-heading">
            <p className="section-label">Tech Stack</p>
            <span>{techStack.length} tools</span>
          </div>
          <h2>Frontend, mobile, and product systems I build with.</h2>
          <p className="home-stack-copy">
            A focused stack for responsive interfaces, app architecture, API work, and cross-platform delivery.
          </p>
          <div className="home-tech-grid">
            {techStack.map((item) => (
              <div className="home-tech-tile" key={item.name}>
                <span>
                  <Image src={item.icon} alt="" width={26} height={26} aria-hidden="true" />
                </span>
                <strong>{item.name}</strong>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="home-bento-card glass-panel home-bento-card--uses">
        <p className="section-label">Uses</p>
        <h2>Check out my favourite tools</h2>
        <div className="home-uses-row">
          {favoriteTools.map((tool, index) => (
            <div
              className={`home-uses-item${index === emphasizedToolIndex ? " is-emphasized" : ""}`}
              key={tool.name}
            >
              <div className="home-uses-icon">
                <Image src={tool.icon} alt="" width={28} height={28} aria-hidden="true" />
              </div>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
