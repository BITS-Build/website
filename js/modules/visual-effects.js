const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

export function setupVisualEffects() {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  document.querySelectorAll(".service-tile").forEach((card) => {
    if (!finePointer || reducedMotion.matches) return;
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      card.style.setProperty("--tilt-x", `${-y * 3}deg`);
      card.style.setProperty("--tilt-y", `${x * 3}deg`);
      card.style.setProperty("--spot-x", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--spot-y", `${(y + 0.5) * 100}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--spot-x", "50%");
      card.style.setProperty("--spot-y", "50%");
    });
  });
}
