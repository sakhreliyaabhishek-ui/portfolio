import Link from "next/link";
import { profile } from "@/data/content";
import styles from "@/components/ui/site-footer.module.css";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Guestbook", href: "/guestbook" },
  { label: "Uses", href: "/uses" },
  { label: "Contact", href: "/contact" },
];

const footerSocials = [
  {
    label: "GitHub",
    href: profile.socials.find((item) => item.label === "GitHub")?.href ?? "#",
    social: "github",
  },
  {
    label: "WhatsApp",
    href: profile.socials.find((item) => item.label === "WhatsApp")?.href ?? "#",
    social: "whatsapp",
  },
  {
    label: "Mail",
    href: `mailto:${profile.email}`,
    social: "mail",
  },
];

function Icon({ social }: { social: string }) {
  if (social === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.66-.22.66-.49 0-.24-.01-1.03-.01-1.86-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.13 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.33 9.33 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.9-1.34 2.74-1.06 2.74-1.06.56 1.42.21 2.47.11 2.73.64.72 1.03 1.64 1.03 2.77 0 3.99-2.35 4.86-4.59 5.12.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.17.6.67.49A10.2 10.2 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (social === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.25 6.25 5.02a.9.9 0 0 0 1.1 0L18.8 6.5H5.2Zm13.8 1.93-5.49 4.41a2.4 2.4 0 0 1-3.02 0L5 8.43v8.82c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V8.43Z"
      />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="section-shell">
        <div className={styles.panel}>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <p className="eyebrow">My Site</p>
              <h2 className={`display-title ${styles.title}`}>{profile.name}</h2>
              <p className={styles.role}>{profile.title}</p>
              <p className={styles.summary}>
                Explore, experiment, and say hello. Building Flutter products with reliable UI
                flows, strong integrations, and AI-assisted development support.
              </p>
            </div>

            <div className={styles.group}>
              <p className={styles.label}>General</p>
              <nav className={styles.links} aria-label="Footer navigation">
                {footerNav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.group}>
              <p className={styles.label}>More</p>
              <ul className={styles.socials} aria-label="Footer social links">
                {footerSocials.map((item) => {
                  const isEmail = item.href.startsWith("mailto:");

                  return (
                    <li key={item.label} className={styles.socialItem}>
                      <a
                        href={item.href}
                        aria-label={item.label}
                        data-social={item.social}
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noreferrer"}
                        className={styles.socialLink}
                      >
                        <span className={styles.socialFill} />
                        <span className={styles.socialIcon}>
                          <Icon social={item.social} />
                        </span>
                      </a>
                      <span className={styles.socialTooltip}>{item.label}</span>
                    </li>
                  );
                })}
              </ul>
              <p className={styles.meta}>{profile.location}</p>
            </div>
          </div>

          <div className={styles.bottom}>
            <p>(c) {year} {profile.name}</p>
            <p>Flutter Developer - Ahmedabad, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
