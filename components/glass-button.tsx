"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { blurPointerLight, focusPointerLight, hidePointerLight, showPointerLight, trackPointerLight } from "@/components/pointer-light";

type GlassButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function GlassButton({ children, className = "", ...props }: GlassButtonProps) {
  return <button className={`glass-link cursor-light cursor-light--glass ${className}`} onPointerEnter={showPointerLight} onPointerMove={trackPointerLight} onPointerLeave={hidePointerLight} onFocus={focusPointerLight} onBlur={blurPointerLight} {...props}><span className="cursor-light__content">{children}</span></button>;
}
