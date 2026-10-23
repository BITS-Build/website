"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { blurPointerLight, focusPointerLight, hidePointerLight, showPointerLight, trackPointerLight } from "@/components/pointer-light";

export function GlassLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link className={`glass-link cursor-light cursor-light--glass ${className}`} href={href} onPointerEnter={showPointerLight} onPointerMove={trackPointerLight} onPointerLeave={hidePointerLight} onFocus={focusPointerLight} onBlur={blurPointerLight}><span className="cursor-light__content">{children}</span></Link>;
}
