import Link from "next/link";
import { ArrowDown, ArrowRight, Copy } from "lucide-react";
import { HomeBento } from "@/components/home-bento";
import { HomeEyebrow } from "@/components/home-eyebrow";
import { profile } from "@/lib/content";
import { CopyEmailButton } from "@/components/copy-email-button";

export default function HomePage() {
  return (
    <main className="home-page page-frame">
      <section className="home-hero-viewport">
        <section className="home-hero">
          <div className="home-eyebrow">
            <HomeEyebrow />
          </div>
          <h1>
            Apps that feel designed.
            <em>Flutter that actually ships.</em>
          </h1>
          <p className="home-identity">
            Hello, I&apos;m <strong>{profile.name}</strong>
            <span className="mini-avatar-wrap" aria-hidden="true">
              <span className="mini-avatar">AS</span>
              <span className="mini-avatar-wave">👋</span>
            </span>
            a {profile.title}
          </p>
          <div className="home-actions">
            <Link className="primary-pill" href="/contact">
              Let&apos;s Connect <ArrowRight />
            </Link>
            <CopyEmailButton>
              <Copy />
              {profile.email}
            </CopyEmailButton>
          </div>
        </section>
        <div className="horizon" aria-hidden="true">
          <span className="horizon-glow" />
          <span className="horizon-line" />
        </div>
        <a className="home-scroll" href="#home-bento">
          Explore below <ArrowDown />
        </a>
      </section>
      <HomeBento />
    </main>
  );
}
