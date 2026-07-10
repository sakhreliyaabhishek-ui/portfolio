import type { Metadata } from "next";
import { Mail, MessageCircle, PenLine, Sparkles } from "lucide-react";
import { profile, testimonials } from "@/data/content";

export const metadata: Metadata = {
  title: "Guestbook",
};

export default function GuestbookPage() {
  return (
    <main className="inner-page guestbook-page page-frame">
      <header className="page-heading page-heading--center">
        <p>Guestbook</p>
        <h1>Words that <em>echo always</em></h1>
        <span>Curated notes about product work, frontend execution, and collaboration style.</span>
      </header>

      <section className="guestbook-hero-grid">
        <article className="guestbook-hero-card glass-panel">
          <p className="section-label">Join the wall</p>
          <h2>Leave a note for the portfolio wall.</h2>
          <p>
            This page keeps the guestbook simple and curated. Send a short message about Abhishek&apos;s
            work, product execution, or collaboration style and it can be added here.
          </p>
          <a href={`mailto:${profile.email}`} className="primary-pill guestbook-mail-link">
            Write a message <Mail aria-hidden="true" />
          </a>
        </article>

        <div className="guestbook-stats">
          <article className="glass-panel">
            <strong>{testimonials.length}</strong>
            <span>Curated notes</span>
          </article>
          <article className="glass-panel">
            <strong>Static</strong>
            <span>Message wall</span>
          </article>
          <article className="glass-panel">
            <strong>2026</strong>
            <span>Latest entries</span>
          </article>
        </div>
      </section>

      <section className="guestbook-section">
        <div className="guestbook-section-heading">
          <p className="section-label">Messages</p>
          <h2>Notes from people around the work.</h2>
        </div>

        <div className="guestbook-message-grid">
          {testimonials.map((item, index) => (
            <article key={item.name} className="guestbook-message-card glass-panel">
              <div className="guestbook-message-icon">
                <MessageCircle aria-hidden="true" />
              </div>
              <p>{item.quote}</p>
              <div className="guestbook-message-meta">
                <span>{item.name[0]}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.role} - May {23 - index}, 2026</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="guestbook-footer-strip" aria-label="Guestbook details">
        <span><PenLine aria-hidden="true" /> Email-first</span>
        <span><Sparkles aria-hidden="true" /> Curated messages</span>
        <span><MessageCircle aria-hidden="true" /> Product-focused notes</span>
      </section>
    </main>
  );
}
