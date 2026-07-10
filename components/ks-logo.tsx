import { useId } from "react";

type KSLogoProps = {
  className?: string;
  title?: string;
};

export function KSLogo({ className, title }: KSLogoProps) {
  const id = useId().replace(/:/g, "");
  const bgId = `${id}-ks-logo-bg`;
  const shineId = `${id}-ks-logo-shine`;
  const titleId = title ? `${id}-ks-logo-title` : undefined;

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role={title ? "img" : "presentation"}
      aria-labelledby={titleId}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient id={bgId} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3668ff" />
          <stop offset="0.55" stopColor="#8f5bff" />
          <stop offset="1" stopColor="#df4898" />
        </linearGradient>
        <linearGradient id={shineId} x1="14" y1="8" x2="50" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.86" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="#090b12" />
      <path d="M11 22C16 12 29 8 40 10C51 12 58 21 57 32C56 45 46 55 32 56C18 57 8 49 7 37C6 32 8 27 11 22Z" fill={`url(#${bgId})`} />
      <path d="M13 21C19 13 31 11 41 14C49 17 54 24 54 33C54 45 45 53 33 54C20 55 11 48 10 37C10 31 10 27 13 21Z" fill="#121624" opacity="0.88" />
      <path d="M17 18C24 13 36 13 45 18" stroke={`url(#${shineId})`} strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      <text
        x="32"
        y="40"
        textAnchor="middle"
        fill="#f8fbff"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        fontSize="22"
        fontWeight="900"
      >
        AS
      </text>
      <path d="M17 47C26 52 39 52 48 45" stroke="#7ae8ff" strokeWidth="2" strokeLinecap="round" opacity="0.52" />
    </svg>
  );
}
