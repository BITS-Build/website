import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RefractionFilters } from "@/components/refraction-filters";
import { HeroFlow } from "@/components/hero-flow";

export const metadata: Metadata = {
  metadataBase: new URL("https://bits.build"),
  title: { default: "BITS — Build. Innovate. Transform.", template: "%s — BITS" },
  description: "BITS builds software, AI, automation and digital systems that help businesses move forward.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "BITS — Build. Innovate. Transform.",
    description: "Software, AI and digital systems built around the way your business works.",
    siteName: "BITS",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <RefractionFilters />
        <HeroFlow />
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
