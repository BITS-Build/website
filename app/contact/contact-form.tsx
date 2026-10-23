"use client";

import { FormEvent, useState } from "react";
import { GlassButton } from "@/components/glass-button";
import { blurPointerLight, focusPointerLight, hidePointerLight, showPointerLight, trackPointerLight } from "@/components/pointer-light";

const contactEmail = process.env.NEXT_PUBLIC_BITS_CONTACT_EMAIL ?? "";

export function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!contactEmail) {
      setMessage("BITS has not configured a public contact email. Nothing was sent or stored.");
      return;
    }
    const values = new FormData(form);
    const subject = `Project enquiry from ${values.get("name")}`;
    const body = [
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      `Company: ${values.get("company") || "Not provided"}`,
      `Interest: ${values.get("interest")}`,
      "",
      "Project notes:",
      values.get("details"),
    ].join("\n");
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMessage("Your email app should open with a draft. Review it and press send; this website does not send it automatically.");
  }

  return <form className="contact-form cursor-light cursor-light--surface" onPointerEnter={showPointerLight} onPointerMove={trackPointerLight} onPointerLeave={hidePointerLight} onFocus={focusPointerLight} onBlur={blurPointerLight} onSubmit={handleSubmit}>
    <div className="field-grid">
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required placeholder="How should we address you?" /></div>
      <div className="field"><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></div>
    </div>
    <div className="field"><label htmlFor="company">Company <span className="muted">(optional)</span></label><input id="company" name="company" autoComplete="organization" placeholder="Company or helpful context" /></div>
    <div className="field"><label htmlFor="interest">What are you thinking about?</label><select id="interest" name="interest" defaultValue="" required><option value="" disabled>Choose a starting point</option><option>Software & digital systems</option><option>AI & automation</option><option>Data & digital growth</option><option>Still exploring</option></select></div>
    <div className="field"><label htmlFor="details">What would you like to improve or make?</label><textarea id="details" name="details" required placeholder="A rough outline is perfect…" /></div>
    <GlassButton type="submit" disabled={!contactEmail}>{contactEmail ? "Prepare email draft" : "Email contact not configured"}</GlassButton>
    <p className="contact-notice" role="status" aria-live="polite">{message || (contactEmail ? "Your details stay in this browser until you choose to open your email app. This website does not send or store submissions." : "The email recipient is not configured. Submitting will not send or store your details.")}</p>
  </form>;
}
