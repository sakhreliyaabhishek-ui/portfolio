"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

export function CopyEmailButton({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <button className="email-copy" type="button" onClick={copy}>
      {copied ? "Email copied" : children}
      <span className="sr-only" aria-live="polite">{copied ? "Email copied to clipboard" : ""}</span>
    </button>
  );
}
