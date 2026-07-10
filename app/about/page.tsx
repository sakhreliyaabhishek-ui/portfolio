import type { Metadata } from "next";
import { Github, MapPin, MessageCircle } from "lucide-react";
import { profile, skills } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="inner-page page-frame">
      <header className="page-heading">
        <p>More about me</p>
        <h1>
          I&apos;m Abhishek, a<br />
          Flutter <em>developer</em>
        </h1>
      </header>
      <section className="about-layout">
        <div className="about-copy glass-panel">
          <p>{profile.bio}</p>
          <p>
            I build Flutter app surfaces, product flows, and integration-heavy
            screens with attention to responsive UI, API behavior, authentication,
            notifications, and deployment-ready delivery.
          </p>
          <p>
            I am also learning prompt engineering and AI-assisted workflows so I
            can move faster while keeping structure, validation, and product
            quality under control.
          </p>
          <div className="about-meta">
            <span><MapPin /> {profile.location}</span>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          </div>
        </div>
        <div className="portrait-stack" aria-label="Abhishek profile visual">
          <div className="portrait-card portrait-card--back">FLUTTER</div>
          <div className="portrait-card portrait-card--middle">MOBILE</div>
          <div className="portrait-card portrait-card--front">
            <span className="portrait-initials">AS</span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </div>
        </div>
      </section>
      <section className="skills-marquee" aria-label="Technology skills">
        <div>{[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}</span>)}</div>
      </section>
    </main>
  );
}
