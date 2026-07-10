"use client";

import { profile } from "@/data/content";
import styles from "@/components/ui/initial-loader.module.css";

type InitialLoaderProps = {
  phase: "visible" | "exiting";
};

export function InitialLoader({ phase }: InitialLoaderProps) {
  const primaryName = profile.name.split(" ")[0]?.toUpperCase() ?? "KRUNAL";

  return (
    <div
      className={`${styles.initialLoader} ${
        phase === "exiting" ? styles.isExiting : styles.isVisible
      }`}
      aria-hidden="true"
    >
      <div className={styles.backdrop} />
      <div className={styles.grid} />
      <div className={styles.glowField} />
      <div className={styles.stageRing} />
      <div className={styles.stageRingInner} />

      <div className={styles.content}>
        <div className={styles.nameScene}>
          <div className={styles.nameStack} aria-hidden="true">
            <span className={styles.nameDepth3}>{primaryName}</span>
            <span className={styles.nameDepth2}>{primaryName}</span>
            <span className={styles.nameDepth1}>{primaryName}</span>
            <span className={styles.nameFace}>{primaryName}</span>
            <span className={styles.nameSpecular}>{primaryName}</span>
          </div>

          <div className={styles.orbitalCore}>
            <span className={styles.orbitalDot} />
          </div>
        </div>

        <div className={styles.titleBlock}>
          <span className={styles.fullName}>{profile.name}</span>
          <span className={styles.role}>{profile.title}</span>
        </div>

        <p className={styles.caption}>
          Responsive apps, API-driven flows, Firebase-connected delivery.
        </p>

        <div className={styles.signalBar}>
          <span className={styles.signalBeam} />
        </div>
      </div>
    </div>
  );
}
