export function setupNavigation() {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".primary-nav");
  const activeLink = document.querySelector(`[data-nav="${document.body.dataset.page}"]`);
  activeLink?.setAttribute("aria-current", "page");

  const setMenuOpen = (open) => {
    if (!header || !menuButton) return;
    header.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  };

  menuButton?.addEventListener("click", () => setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true"));
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  let scheduled = false;
  window.addEventListener("scroll", () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      header?.classList.toggle("is-scrolled", window.scrollY > 12);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.querySelector(".scroll-progress span")?.style.setProperty("transform", `scaleX(${progress})`);
      scheduled = false;
    });
  }, { passive: true });
}
