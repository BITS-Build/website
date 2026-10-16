import Link from "next/link";
import type { ReactNode } from "react";

export function GlassLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return <Link className={`glass-link liquid-control ${className}`} href={href}>{children}<span className="glass-link__arrow" aria-hidden="true">↗</span></Link>;
}
