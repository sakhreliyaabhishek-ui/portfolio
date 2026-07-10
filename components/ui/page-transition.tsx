"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
  footer: ReactNode;
};

const PAGE_EASING = [0.22, 1, 0.36, 1] as const;
const EXIT_EASING = [0.4, 0, 1, 1] as const;

export function PageTransition({ children, footer }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = Boolean(prefersReducedMotion);

  const pageVariants = reduceMotion
    ? {
        hidden: { opacity: 0, transition: { duration: 0.01 } },
        visible: { opacity: 1, transition: { duration: 0.01 } },
        exit: { opacity: 0, transition: { duration: 0.01 } },
      }
    : {
        hidden: { opacity: 0, transition: { duration: 0.01 } },
        visible: { opacity: 1, transition: { duration: 0.14, ease: PAGE_EASING } },
        exit: { opacity: 0, transition: { duration: 0.08, ease: EXIT_EASING } },
      };

  const glowVariants = reduceMotion
    ? {
        hidden: { opacity: 0, transition: { duration: 0.01 } },
        visible: { opacity: 0.12, transition: { duration: 0.01 } },
        exit: { opacity: 0, transition: { duration: 0.01 } },
      }
    : {
        hidden: { opacity: 0, transition: { duration: 0.01 } },
        visible: { opacity: 0.14, transition: { duration: 0.14, ease: PAGE_EASING } },
        exit: { opacity: 0, transition: { duration: 0.08, ease: EXIT_EASING } },
      };

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={pathname}
        className="relative isolate min-h-screen overflow-hidden"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            background:
              "radial-gradient(circle at 50% 18%, rgba(255, 138, 61, 0.18), transparent 34%), radial-gradient(circle at 78% 14%, rgba(43, 101, 255, 0.18), transparent 28%)",
            filter: "blur(28px)",
          }}
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
          {footer}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
