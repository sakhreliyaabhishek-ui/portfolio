import type { Metadata } from "next";
import { ArrowUpRight, Github, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { profile } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="contact-page page-frame">
      <section className="contact-card glass-panel">
        <p className="section-label">Start a conversation</p>
        <h1>Have a product in mind?<br /><em>Let&apos;s build it.</em></h1>
        <p className="contact-lead">{profile.availability}</p>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowUpRight />
        </a>
        <div className="contact-links">
          <a href={profile.github} target="_blank" rel="noreferrer"><Github /> GitHub</a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a>
          <a href={`mailto:${profile.email}`}><Mail /> Email</a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone /> {profile.phone}</a>
          <span><MapPin /> {profile.location}</span>
        </div>
      </section>
    </main>
  );
}
