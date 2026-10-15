import { setupNavigation } from "./modules/navigation.js";
import { setupReveal } from "./modules/reveal.js";
import { setupVisualEffects } from "./modules/visual-effects.js";
import { setupContactForm } from "./modules/contact-form.js";

document.documentElement.classList.add("has-js");
document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

setupNavigation();
setupReveal();
setupVisualEffects();
setupContactForm();
