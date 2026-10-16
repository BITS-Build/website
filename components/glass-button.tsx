import type { ButtonHTMLAttributes, ReactNode } from "react";

type GlassButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function GlassButton({ children, className = "", ...props }: GlassButtonProps) {
  return <button className={`glass-link liquid-control ${className}`} {...props}>{children}<span className="glass-link__arrow" aria-hidden="true">↗</span></button>;
}
