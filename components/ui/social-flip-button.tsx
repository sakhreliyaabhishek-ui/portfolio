import { cn } from "@/lib/utils";
import styles from "@/components/ui/social-flip-button.module.css";

type SocialItem = {
  label: string;
  href: string;
};

type SocialFlipButtonProps = {
  items: SocialItem[];
  className?: string;
};

const labelMap: Record<string, string> = {
  GitHub: "GitHub",
  LinkedIn: "LinkedIn",
  Email: "Mail",
};

const metaMap: Record<string, string> = {
  GitHub: "Code and projects",
  LinkedIn: "Professional profile",
  Email: "Direct conversation",
};

export default function SocialFlipButton({ items, className }: SocialFlipButtonProps) {
  return (
    <div className={cn("grid gap-4", className)}>
      {items.map((item) => {
        const displayLabel = labelMap[item.label] ?? item.label;
        const metaLabel = metaMap[item.label] ?? "Open link";
        const isEmail = item.href.startsWith("mailto:");

        return (
          <a
            key={item.href}
            href={item.href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noreferrer"}
            className={`${styles.card} group block h-22 rounded-[1.35rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 sm:h-24 sm:rounded-[1.6rem]`}
          >
            <span className={`${styles.face} ${styles.front}`}>
              <span>
                <span className="eyebrow">Social</span>
                <span className="mt-2 block text-lg font-semibold sm:mt-3 sm:text-xl">{displayLabel}</span>
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/70">
                Open
              </span>
            </span>

            <span className={`${styles.face} ${styles.back}`}>
              <span>
                <span className="eyebrow">Connect</span>
                <span className="mt-2 block text-base font-semibold sm:mt-3 sm:text-lg">{metaLabel}</span>
              </span>
              <span className="text-sm text-[var(--muted)]">{displayLabel}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
