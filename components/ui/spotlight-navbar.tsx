"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "@/components/ui/spotlight-navbar.module.css";

export interface NavItem {
  label: string;
  href: string;
}

export interface SpotlightNavbarProps {
  items?: NavItem[];
  className?: string;
  onItemClick?: (item: NavItem, index: number) => void;
  defaultActiveIndex?: number;
  mode?: "anchor" | "route";
  brand?: {
    label: string;
    href: string;
  };
  cta?: {
    label: string;
    href: string;
  };
}

const DEFAULT_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function SpotlightNavbar({
  items = DEFAULT_ITEMS,
  className,
  onItemClick,
  defaultActiveIndex = 0,
  mode = "anchor",
  brand,
  cta,
}: SpotlightNavbarProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [anchorActiveIndex, setAnchorActiveIndex] = useState(defaultActiveIndex);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeIndex =
    mode === "route" ? items.findIndex((item) => item.href === pathname) : anchorActiveIndex;

  const setNavTarget = (index: number) => {
    const nav = navRef.current;

    if (!nav || index < 0) {
      return;
    }

    const activeItem = nav.querySelector<HTMLElement>(`[data-index="${index}"]`);

    if (!activeItem) {
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();
    const targetX = itemRect.left - navRect.left + itemRect.width / 2;

    nav.style.setProperty("--spotlight-x", `${targetX}px`);
    nav.style.setProperty("--ambience-x", `${targetX}px`);
  };

  useEffect(() => {
    setNavTarget(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) {
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = event.clientX - rect.left;
      setHoverX(x);
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      setNavTarget(activeIndex);
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeIndex]);

  useEffect(() => {
    if (mode === "route") {
      return;
    }

    const sections = items
      .map((item, index) => {
        const sectionId = item.href.replace("#", "");
        const element = document.getElementById(sectionId);

        if (!element) {
          return null;
        }

        return { element, index };
      })
      .filter((entry): entry is { element: HTMLElement; index: number } => entry !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const matchedIndex = sections.find((section) => section.element === visible.target)?.index;

        if (matchedIndex !== undefined) {
          setAnchorActiveIndex(matchedIndex);
        }
      },
      {
        rootMargin: "-28% 0px -48% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section.element));

    return () => observer.disconnect();
  }, [items, mode]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const handleItemClick = (item: NavItem, index: number) => {
    if (mode === "anchor") {
      setAnchorActiveIndex(index);
    }

    setMenuOpen(false);
    onItemClick?.(item, index);

    if (mode === "anchor") {
      const sectionId = item.href.replace("#", "");
      const target = document.getElementById(sectionId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", item.href);
      }
    }
  };

  return (
    <div className={cn(styles.navShell, className)}>
      <div
        className={cn(
          styles.mobileBar,
          "spotlight-nav-mobile flex items-center justify-between gap-3 rounded-[1.5rem] px-4 py-3 lg:hidden",
        )}
      >
        {brand ? (
          <Link
            href={brand.href}
            onClick={() => {
              setMenuOpen(false);
            }}
            className="display-title min-w-0 flex-1 pr-3 text-base font-semibold leading-tight"
          >
            {brand.label}
          </Link>
        ) : null}

        <div className="flex items-center gap-2">
          {cta ? (
            <Link
              href={cta.href}
              onClick={() => {
                setMenuOpen(false);
              }}
              className={cn(
                styles.cta,
                "hidden rounded-full px-3.5 py-2 text-xs font-medium sm:inline-flex",
              )}
            >
              {cta.label}
            </Link>
          ) : null}

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((value) => !value);
            }}
            className={cn(
              styles.mobileToggle,
              "relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white",
            )}
          >
            <span
              className={cn(
                styles.line,
                menuOpen ? styles.lineTopOpen : "-translate-y-[5px]",
                "absolute h-[1.5px] w-5 rounded-full bg-current",
              )}
            />
            <span
              className={cn(
                styles.line,
                menuOpen ? styles.lineMiddleOpen : "",
                "absolute h-[1.5px] w-5 rounded-full bg-current",
              )}
            />
            <span
              className={cn(
                styles.line,
                menuOpen ? styles.lineBottomOpen : "translate-y-[5px]",
                "absolute h-[1.5px] w-5 rounded-full bg-current",
              )}
            />
          </button>
        </div>
      </div>

      <div
        className={cn(
          styles.mobilePanel,
          menuOpen ? styles.mobilePanelOpen : "",
          "mt-3 rounded-[1.5rem] border border-white/12 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.32)] lg:hidden",
        )}
      >
        <nav className="grid gap-2">
          {items.map((item, index) =>
            mode === "route" ? (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => {
                  handleItemClick(item, index);
                }}
                className={cn(
                  "rounded-[1rem] px-4 py-3 text-sm font-medium transition-colors duration-200",
                  activeIndex === index
                    ? "bg-[rgba(255,138,61,0.88)] text-slate-950"
                    : "border border-white/8 bg-white/[0.03] text-[var(--foreground)] hover:bg-white/[0.06]",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleItemClick(item, index);
                }}
                className={cn(
                  "rounded-[1rem] px-4 py-3 text-sm font-medium transition-colors duration-200",
                  activeIndex === index
                    ? "bg-[rgba(255,138,61,0.88)] text-slate-950"
                    : "border border-white/8 bg-white/[0.03] text-[var(--foreground)] hover:bg-white/[0.06]",
                )}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        {cta ? (
          <Link
            href={cta.href}
            onClick={() => {
              setMenuOpen(false);
            }}
            className={cn(
              styles.cta,
              "mt-4 inline-flex w-full items-center justify-center rounded-[1rem] px-4 py-3 text-sm font-medium",
            )}
          >
            {cta.label}
          </Link>
        ) : null}
      </div>

      <nav
        ref={navRef}
        className={cn(
          styles.desktopNav,
          "spotlight-nav hidden items-center justify-between gap-5 px-5 lg:flex lg:px-7",
        )}
      >
        {brand ? (
          <Link
            href={brand.href}
            className="display-title relative z-10 min-w-0 shrink-0 pr-3 text-base font-semibold tracking-[0.01em] xl:text-[1.2rem]"
          >
            {brand.label}
          </Link>
        ) : (
          <div className="w-32 shrink-0" />
        )}

        <ul className="relative z-10 flex h-full flex-1 items-center justify-center gap-1 px-3">
          {items.map((item, index) => (
            <li key={item.href} className="relative flex h-full items-center justify-center">
              {mode === "route" ? (
                <Link
                  href={item.href}
                  data-index={index}
                  onClick={() => {
                    handleItemClick(item, index);
                  }}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-[0.92rem] font-medium tracking-[0.01em] transition-colors duration-200 xl:px-5 xl:text-[0.95rem]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40",
                    activeIndex === index
                      ? "bg-white/[0.04] text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:bg-white/[0.03] hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  data-index={index}
                  onClick={(event) => {
                    event.preventDefault();
                    handleItemClick(item, index);
                  }}
                  className={cn(
                    "rounded-full px-4 py-2.5 text-[0.92rem] font-medium tracking-[0.01em] transition-colors duration-200 xl:px-5 xl:text-[0.95rem]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40",
                    activeIndex === index
                      ? "bg-white/[0.04] text-[var(--foreground)]"
                      : "text-[var(--muted)] hover:bg-white/[0.03] hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {cta ? (
          <Link
            href={cta.href}
            className={cn(
              styles.cta,
              "relative z-10 shrink-0 rounded-full px-4 py-2.5 text-sm font-medium",
            )}
          >
            {cta.label}
          </Link>
        ) : (
          <div className="w-24 shrink-0" />
        )}

        <div
          className={cn(
            styles.desktopGlow,
            hoverX !== null ? styles.desktopGlowActive : styles.desktopGlowInactive,
          )}
        />
        <div className={styles.desktopAmbience} />
        <div className={styles.desktopDivider} />
      </nav>
    </div>
  );
}
