"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LiquidGlass } from "@/components/liquid-glass";
import { blurPointerLight, focusPointerLight, hidePointerLight, showPointerLight, trackPointerLight } from "@/components/pointer-light";

const links = [
  { href: "/ai", label: "AI & Automation" },
  { href: "/services", label: "Capabilities" },
  { href: "/work", label: "Approach" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const previousY = useRef(0);
  const downwardTravel = useRef(0);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 1600], [0, 1], { clamp: true });

  useMotionValueEvent(scrollY, "change", (currentY) => {
    const delta = currentY - previousY.current;
    previousY.current = currentY;

    if (currentY < 48) {
      downwardTravel.current = 0;
      setHidden(false);
      return;
    }
    if (open || header.current?.contains(document.activeElement)) return;
    if (delta < -1.5) {
      downwardTravel.current = 0;
      setHidden(false);
    } else if (delta > 1.5) {
      downwardTravel.current += delta;
      if (downwardTravel.current >= 16) setHidden(true);
    }
  });

  useEffect(() => {
    setOpen(false);
    setHidden(false);
    previousY.current = scrollY.get();
    downwardTravel.current = 0;
  }, [pathname, scrollY]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <motion.header
        ref={header}
        className="site-header"
        animate={hidden && !open ? { y: "-115%" } : { y: 0 }}
        transition={{ duration: reduceMotion ? 0.01 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden={hidden && !open ? true : undefined}
        inert={hidden && !open}
      >
        <div className="header-wrap">
          <Link className="brand" href="/" aria-label="BITS home"><span className="brand-mark">B</span><span>BITS</span></Link>
          <LiquidGlass tone="nav" className="desktop-nav">
            <nav aria-label="Main navigation">
              {links.map((link) => <Link key={link.href} className="cursor-light cursor-light--surface" href={link.href} aria-current={pathname === link.href ? "page" : undefined} onPointerEnter={showPointerLight} onPointerMove={trackPointerLight} onPointerLeave={hidePointerLight} onFocus={focusPointerLight} onBlur={blurPointerLight}><span className="cursor-light__content">{link.label}</span></Link>)}
              <Link className="nav-contact cursor-light cursor-light--glass" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onPointerEnter={showPointerLight} onPointerMove={trackPointerLight} onPointerLeave={hidePointerLight} onFocus={focusPointerLight} onBlur={blurPointerLight}><span className="cursor-light__content">Let's talk</span></Link>
            </nav>
          </LiquidGlass>
          <button ref={menuButton} className="menu-toggle cursor-light cursor-light--glass" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} onPointerEnter={showPointerLight} onPointerMove={trackPointerLight} onPointerLeave={hidePointerLight} onFocus={focusPointerLight} onBlur={blurPointerLight} onClick={() => setOpen((value) => !value)}>
            <span /><span />
          </button>
        </div>
        <AnimatePresence>
          {open && <motion.nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" initial={reduceMotion ? false : { opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
            {links.map((link) => <Link key={link.href} className="cursor-light cursor-light--surface" href={link.href} aria-current={pathname === link.href ? "page" : undefined} onPointerEnter={showPointerLight} onPointerMove={trackPointerLight} onPointerLeave={hidePointerLight} onFocus={focusPointerLight} onBlur={blurPointerLight} onClick={() => setOpen(false)}><span className="cursor-light__content">{link.label}</span></Link>)}
            <Link className="cursor-light cursor-light--surface" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined} onPointerEnter={showPointerLight} onPointerMove={trackPointerLight} onPointerLeave={hidePointerLight} onFocus={focusPointerLight} onBlur={blurPointerLight} onClick={() => setOpen(false)}><span className="cursor-light__content">Let's talk</span></Link>
          </motion.nav>}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
