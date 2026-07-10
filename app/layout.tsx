import type { Metadata, Viewport } from "next";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

const siteUrl = "https://abhishek-sakhreliya.netlify.app";
const siteTitle = "Abhishek Sakhreliya | Flutter Developer";
const siteDescription =
  "Apps that feel designed. Flutter that actually ships. Flutter developer from Ahmedabad, India building Yujix, Presynx, and cross-platform mobile apps.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Abhishek Sakhreliya",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Abhishek Sakhreliya",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Abhishek Sakhreliya — Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
