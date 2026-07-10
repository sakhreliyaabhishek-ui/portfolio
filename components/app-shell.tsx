"use client";

import {
  Command,
  Github,
  Home,
  MessageCircle,
  Mail,
  Search,
  UserRound,
  X,
  BriefcaseBusiness,
  FolderKanban,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BottomCta } from "@/components/bottom-cta";
import { getGreeting } from "@/lib/greeting";
import { profile } from "@/lib/content";
import { KSLogo } from "@/components/ks-logo";
import "@/app/greeting-mobile.css";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/experience", label: "Experience", icon: BriefcaseBusiness },
];

type IntroStep = 0 | 1 | 2;
type IntroPhase = "hello" | "time" | null;

const INTRO_PHASE_MS = 750;
const INTRO_REDUCED_MS = 175;

function getIntroPhaseMs() {
  if (typeof window === "undefined") return INTRO_PHASE_MS;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? INTRO_REDUCED_MS
    : INTRO_PHASE_MS;
}

type IntroSequenceRuntime = {
  started: boolean;
  step: IntroStep;
  greeting: string;
  helloTimer: number | null;
  endTimer: number | null;
};

const introRuntime: IntroSequenceRuntime = {
  started: false,
  step: 0,
  greeting: "",
  helloTimer: null,
  endTimer: null,
};

function applyIntroStep(
  step: IntroStep,
  greeting: string,
  apply: (step: IntroStep, greeting: string) => void,
) {
  introRuntime.step = step;
  introRuntime.greeting = greeting;
  apply(step, greeting);
}

/** Single timer source — runs once per page load, equal phaseMs per step. */
function armIntroSequence(
  phaseMs: number,
  apply: (step: IntroStep, greeting: string) => void,
) {
  if (introRuntime.started) {
    apply(introRuntime.step, introRuntime.greeting);
    return;
  }

  introRuntime.started = true;
  applyIntroStep(0, "", apply);

  introRuntime.helloTimer = window.setTimeout(() => {
    const nextGreeting = getGreeting(new Date().getHours());
    applyIntroStep(1, nextGreeting, apply);
  }, phaseMs);

  introRuntime.endTimer = window.setTimeout(() => {
    applyIntroStep(2, introRuntime.greeting, apply);
  }, phaseMs * 2);
}

export function __resetIntroSequenceForTests() {
  introRuntime.started = false;
  introRuntime.step = 0;
  introRuntime.greeting = "";
  if (introRuntime.helloTimer !== null) window.clearTimeout(introRuntime.helloTimer);
  if (introRuntime.endTimer !== null) window.clearTimeout(introRuntime.endTimer);
  introRuntime.helloTimer = null;
  introRuntime.endTimer = null;
}

function HeaderGreeting({ phase, greeting }: { phase: "hello" | "time"; greeting: string }) {
  if (phase === "hello") {
    return (
      <>
        <span className="greeting-pill-emoji" aria-hidden="true">
          👋
        </span>
        <span className="greeting-pill-text" suppressHydrationWarning>
          Hello
        </span>
      </>
    );
  }

  return (
    <>
      <span className="greeting-pill-emoji" suppressHydrationWarning>
        {greeting === "Good Night" ? "🌙" : "🌅"}
      </span>
      <span className="greeting-pill-text" suppressHydrationWarning>
        {greeting || "Good Morning"}
      </span>
    </>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [introStep, setIntroStep] = useState<IntroStep>(0);
  const introPhase: IntroPhase =
    introStep === 0 ? "hello" : introStep === 1 ? "time" : null;
  const intro = introPhase !== null;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [greeting, setGreeting] = useState(introRuntime.greeting);
  const [query, setQuery] = useState("");
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const currentPage = links.find((link) => link.href === pathname)?.label ?? "Abhishek";
  const filteredLinks = links.filter((link) =>
    link.label.toLowerCase().includes(query.trim().toLowerCase()),
  );

  useLayoutEffect(() => {
    const phaseMs = getIntroPhaseMs();

    armIntroSequence(phaseMs, (step, nextGreeting) => {
      setIntroStep(step);
      setGreeting(nextGreeting);
    });
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMobileOpen((value) => !value);
      }
      if (event.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  function closeMobileNavigation(restoreFocus = true) {
    setMobileOpen(false);
    setQuery("");
    if (restoreFocus) {
      window.requestAnimationFrame(() => mobileTriggerRef.current?.focus());
    }
  }

  return (
    <div
      className={`app-shell ${pathname === "/" ? "is-home" : "is-inner"} ${intro ? "is-header-intro" : ""}`}
    >
      <BackgroundScene home={pathname === "/"} />
      <Link className="corner-logo" href="/" aria-label="Abhishek Sakhreliya home">
        <KSLogo className="corner-logo-mark" />
      </Link>
      <button
        className="command-button"
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((value) => !value)}
      >
        <Command />
        <span className="sr-only">Command K</span>
      </button>

      <button
        ref={mobileTriggerRef}
        className="mobile-nav-trigger"
        type="button"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        aria-controls="mobile-command-sheet"
        onClick={() => {
          if (mobileOpen) {
            closeMobileNavigation();
            return;
          }
          setMobileOpen(true);
        }}
      >
        <span className="mobile-trigger-mark">
          <KSLogo className="mobile-trigger-logo" />
        </span>
        <span className="mobile-trigger-label">{currentPage}</span>
      </button>

      <div className="floating-header-anchor">
        <motion.header
          className={`floating-header ${intro ? "is-greeting" : "is-nav"}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {intro ? (
              <motion.div
                className="greeting-pill"
                key="greeting"
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 }}
              >
                <HeaderGreeting phase={introPhase} greeting={greeting} />
              </motion.div>
            ) : (
              <motion.nav
                className="floating-nav"
                aria-label="Primary navigation"
                key="navigation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      href={link.href}
                      key={link.href}
                      className={active ? "active" : ""}
                      onClick={() => setMobileOpen(false)}
                    >
                      {active && <span className="nav-active" />}
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
                <Link className="nav-cta" href="/contact" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav-layer"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="mobile-nav-backdrop"
              type="button"
              aria-label="Close navigation"
              onClick={() => closeMobileNavigation()}
            />
            <motion.div
              id="mobile-command-sheet"
              className="mobile-command-sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: 20 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mobile-search-row">
                <Search aria-hidden="true" />
                <input
                  ref={searchRef}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search pages..."
                  aria-label="Search navigation"
                />
                <button type="button" onClick={() => closeMobileNavigation()} aria-label="Close navigation">
                  <X />
                </button>
              </div>

              <p className="mobile-sheet-label">Pages</p>
              <nav className="mobile-route-grid" aria-label="Mobile navigation">
                {filteredLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      href={link.href}
                      key={link.href}
                      className={pathname === link.href ? "active" : ""}
                      onClick={() => closeMobileNavigation(false)}
                    >
                      <Icon aria-hidden="true" />
                      <span>{link.label}</span>
                      {pathname === link.href && <i aria-hidden="true" />}
                    </Link>
                  );
                })}
              </nav>
              {filteredLinks.length === 0 && <p className="mobile-empty">No pages found.</p>}

              <p className="mobile-sheet-label">Connect</p>
              <div className="mobile-connect-grid">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" /> GitHub
                </a>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden="true" /> WhatsApp
                </a>
                <a href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" /> Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="route-stage">{children}</div>
      <BottomCta />
    </div>
  );
}

function BackgroundScene({ home }: { home: boolean }) {
  return (
    <div className={`background-scene ${home ? "background-scene--home" : "background-scene--inner"}`} aria-hidden="true">
      <div className="background-aurora" />
      <div className="background-folds">
        <span />
        <span />
        <span />
      </div>
      <div className="background-noise" />
    </div>
  );
}
