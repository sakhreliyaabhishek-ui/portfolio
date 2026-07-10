"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const BioluminescentHeroBackground = dynamic(
  () => import("@/components/scene/bioluminescent-hero-background"),
  { ssr: false },
);

export function BioluminescentHeroBackgroundShell() {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const idleCallback =
      window.requestIdleCallback ??
      ((callback: IdleRequestCallback) => {
        return window.setTimeout(() => callback({ didTimeout: false, timeRemaining: () => 0 }), 1800);
      });

    const cancelIdleCallback =
      window.cancelIdleCallback ??
      ((handle: number) => {
        window.clearTimeout(handle);
      });

    const handle = idleCallback(() => {
      setShouldMount(true);
    });

    return () => {
      cancelIdleCallback(handle);
    };
  }, []);

  if (!shouldMount) {
    return (
      <div
        aria-hidden="true"
        className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(95,150,255,0.14),transparent_42%),radial-gradient(circle_at_28%_24%,rgba(255,138,61,0.12),transparent_26%),linear-gradient(180deg,rgba(9,17,31,0.98),rgba(9,17,31,0.82))]"
      />
    );
  }

  return <BioluminescentHeroBackground />;
}
