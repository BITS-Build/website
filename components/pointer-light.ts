import type { FocusEvent, PointerEvent } from "react";

function canTrackPointer(event: PointerEvent<HTMLElement>) {
  return event.pointerType === "mouse"
    && window.matchMedia("(hover: hover) and (pointer: fine)").matches
    && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function setPosition(element: HTMLElement, x: number, y: number) {
  element.style.setProperty("--cursor-light-x", `${x}%`);
  element.style.setProperty("--cursor-light-y", `${y}%`);
}

export function showPointerLight(event: PointerEvent<HTMLElement>) {
  if (!canTrackPointer(event)) return;
  trackPointerLight(event);
  event.currentTarget.style.setProperty("--cursor-light-opacity", "1");
}

export function trackPointerLight(event: PointerEvent<HTMLElement>) {
  if (!canTrackPointer(event)) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;
  setPosition(
    event.currentTarget,
    ((event.clientX - bounds.left) / bounds.width) * 100,
    ((event.clientY - bounds.top) / bounds.height) * 100,
  );
}

export function hidePointerLight(event: PointerEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--cursor-light-opacity", "0");
}

export function focusPointerLight(event: FocusEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--cursor-light-opacity", ".36");
}

export function blurPointerLight(event: FocusEvent<HTMLElement>) {
  event.currentTarget.style.setProperty("--cursor-light-opacity", "0");
}
