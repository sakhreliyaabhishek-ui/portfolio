"use client";

import { useEffect, useState } from "react";
import { InitialLoader } from "@/components/ui/initial-loader";
import { PageTransition } from "@/components/ui/page-transition";

const INTRO_VISIBLE_MS = 1250;
const INTRO_EXIT_MS = 480;

type IntroPhase = "visible" | "exiting" | "hidden";

type AppShellProps = {
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function AppShell({ children, footer }: AppShellProps) {
  const [introPhase, setIntroPhase] = useState<IntroPhase>("visible");

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setIntroPhase("exiting");
    }, INTRO_VISIBLE_MS);

    const hideTimer = window.setTimeout(() => {
      setIntroPhase("hidden");
    }, INTRO_VISIBLE_MS + INTRO_EXIT_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <PageTransition footer={footer}>{children}</PageTransition>

      {introPhase !== "hidden" ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
        >
          <InitialLoader phase={introPhase} />
        </div>
      ) : null}
    </>
  );
}
