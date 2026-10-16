"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { LiquidGlass } from "@/components/liquid-glass";

const links = [
  { href: "/services", label: "Capabilities" },
  { href: "/work", label: "Approach" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 1600], [0, 1], { clamp: true });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <header className="site-header">
        <div className="header-wrap">
          <Link className="brand" href="/" aria-label="BITS home"><span className="brand-mark">B</span><span>BITS</span></Link>
          <LiquidGlass tone="nav" className="desktop-nav">
            <nav aria-label="Main navigation">
              {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined}>{link.label}</Link>)}
              <Link className="nav-contact" href="/contact">Let’s talk <span aria-hidden="true">↗</span></Link>
            </nav>
          </LiquidGlass>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen((value) => !value)}>
            <span /><span />
          </button>
        </div>
        <AnimatePresence>
          {open && <motion.nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" initial={reduceMotion ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
            {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>)}
            <Link href="/contact" onClick={() => setOpen(false)}>Let’s talk<span aria-hidden="true">↗</span></Link>
          </motion.nav>}
        </AnimatePresence>
      </header>
    </>
  );
}
