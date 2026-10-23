"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { blurPointerLight, focusPointerLight, hidePointerLight, showPointerLight, trackPointerLight } from "@/components/pointer-light";

export function CursorLightLink({
  href,
  className = "",
  flowFocus,
  children,
}: {
  href: string;
  className?: string;
  flowFocus?: number;
  children: ReactNode;
}) {
  return (
    <Link
      className={`cursor-light ${className}`}
      href={href}
      data-flow-focus={flowFocus}
      onPointerEnter={showPointerLight}
      onPointerMove={trackPointerLight}
      onPointerLeave={hidePointerLight}
      onFocus={focusPointerLight}
      onBlur={blurPointerLight}
    >
      <span className="cursor-light__content">{children}</span>
    </Link>
  );
}
