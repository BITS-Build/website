"use client";

import type { HTMLAttributes, ReactNode } from "react";

type LiquidGlassProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "nav" | "control" | "panel";
};

export function LiquidGlass({ children, tone = "panel", className = "", ...props }: LiquidGlassProps) {
  return (
    <div className={`liquid-glass liquid-glass--${tone} ${className}`} {...props}>
      <span className="liquid-glass__caustic" aria-hidden="true" />
      <span className="liquid-glass__content">{children}</span>
    </div>
  );
}
