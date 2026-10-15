import { siteConfig } from "../config.js";

export function setupContactForm() {
  const form = document.querySelector("[data-project-form]");
  if (!form) return;

  const steps = [...form.querySelectorAll("[data-step]")];
  const confirmation = form.querySelector("[data-confirmation]");
  const currentStep = form.querySelector("[data-form-step]");
  const formProgress = form.querySelector(".form-progress > div");

  const showStep = (number) => {
    steps.forEach((step) => {
      const active = Number(step.dataset.step) === number;
      step.hidden = !active;
      step.classList.toggle("is-active", active);
    });
    if (currentStep) currentStep.textContent = `0${number}`;
    formProgress?.style.setProperty("--progress", number === 1 ? "50%" : "100%");
    form.querySelector(".form-step-label")?.replaceChildren(document.createTextNode(number === 1 ? "FIRST, THE BASICS" : "TELL US A LITTLE MORE"));
    form.querySelector(number === 1 ? '[name="name"]' : '[name="details"]')?.focus({ preventScroll: true });
  };

  form.querySelector("[data-next]")?.addEventListener("click", () => {
    const invalid = [...steps[0].querySelectorAll("[required]")].find((field) => !field.checkValidity());
    if (invalid) return invalid.reportValidity();
    showStep(2);
  });
  form.querySelector("[data-back]")?.addEventListener("click", () => showStep(1));
  form.querySelector("[data-edit]")?.addEventListener("click", () => {
    confirmation.hidden = true;
    form.querySelector(".form-progress").hidden = false;
    form.querySelector(".form-step-label").hidden = false;
    showStep(1);
  });

  const interest = new URLSearchParams(window.location.search).get("interest");
  const select = form.elements.namedItem("interest");
  if (interest && select && [...select.options].some((option) => option.value === interest)) select.value = interest;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const invalid = [...steps[1].querySelectorAll("[required]")].find((field) => !field.checkValidity());
    if (invalid) return invalid.reportValidity();

    const values = new FormData(form);
    const subject = `Project enquiry from ${values.get("name")}`;
    const body = [
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      `Interest: ${values.get("interest")}`,
      `Company: ${values.get("company") || "Not provided"}`,
      "",
      "Project notes:",
      values.get("details"),
    ].join("\n");

    const hasEmail = Boolean(siteConfig.contactEmail);
    if (hasEmail) {
      window.location.href = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    form.querySelector("[data-confirmation-copy]").textContent = hasEmail
      ? "Your email app should open with a draft. Please review it and press send; this website does not send it automatically."
      : "The website needs BITS’s public contact email before it can open a ready-to-send draft. Your details have not been sent.";
    steps.forEach((step) => { step.hidden = true; });
    form.querySelector(".form-progress").hidden = true;
    form.querySelector(".form-step-label").hidden = true;
    confirmation.hidden = false;
    confirmation.querySelector("h3").textContent = hasEmail ? "Your draft is ready." : "One last detail needed.";
    confirmation.querySelector(".confirm-mark").textContent = hasEmail ? "✳" : "○";
    confirmation.querySelector("[data-edit]").focus();
  });
}
