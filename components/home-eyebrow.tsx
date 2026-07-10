"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export function HomeEyebrow() {
  const pillRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const pill = pillRef.current;

    if (!pill) {
      return;
    }

    const rect = pill.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    pill.style.setProperty("--eyebrow-glow-x", `${x}px`);
    pill.style.setProperty("--eyebrow-glow-y", `${y}px`);
  };

  return (
    <Link
      ref={pillRef}
      href="/projects"
      className="home-eyebrow-pill"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className="home-eyebrow-pill__glow"
        data-active={isHovered ? "true" : "false"}
        aria-hidden="true"
      />
      <span className="home-eyebrow-pill__shine" aria-hidden="true" />
      <span className="home-eyebrow-pill__badge">New</span>
      <span className="home-eyebrow-pill__label">
        <span className="home-eyebrow-pill__title">Yujix</span>
        <span className="home-eyebrow-pill__subtitle"> — productivity app</span>
      </span>
      <ChevronRight className="home-eyebrow-pill__arrow" aria-hidden="true" />
    </Link>
  );
}
