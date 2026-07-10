import type { SVGProps } from "react";

export function FlutterMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="#47c5fb" d="M28.5 4 8 24.5l6.3 6.3L41.2 4z" />
      <path fill="#47c5fb" d="m22.2 32.7 6.3-6.3h12.7L28.5 39.1z" />
      <path fill="#075b9d" d="m28.5 39.1 6.3-6.4 6.4 6.4-6.4 6.3z" />
      <path fill="#13b9fd" d="m14.3 30.8 7.9-7.9 6.3 6.3-7.9 7.9z" />
    </svg>
  );
}

export function FirebaseMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <path fill="#ffca28" d="m8 38 4.8-30.1 9.1 17.2 5.5-10.5L40 38 24 47z" />
      <path fill="#ffa000" d="m8 38 13.9-12.9L24 47z" />
      <path fill="#f57c00" d="m24 47 16-9-12.6-23.4-5.5 10.5z" />
    </svg>
  );
}

export function ApiMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <rect width="48" height="48" rx="14" fill="#101010" />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M16 18h16M16 24h10M16 30h16"
      />
    </svg>
  );
}
