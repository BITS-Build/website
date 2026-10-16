import type { Metadata } from "next";
import { ContactForm } from "@/app/contact/contact-form";

export const metadata: Metadata = { title: "Start a conversation", description: "Share a challenge, an early idea or a process that feels harder than it should." };

export default function ContactPage() {
  return <main id="main" className="page-shell"><section className="page-hero container"><p className="eyebrow">04 / Start a conversation</p><h1 className="page-title">What would you<br /><em>like to change?</em></h1><p className="page-intro">Share a challenge, a rough idea or a process that feels harder than it should. No perfect brief required—just a place to begin.</p></section><section className="section container"><div className="contact-layout"><aside className="contact-aside"><p className="eyebrow">A few prompts</p><h2>Start with what<br /><span className="display-em">you know.</span></h2><p>You don’t need a detailed specification. A little context is enough to start a useful conversation.</p><div className="steps"><div className="step-row"><span className="step-num">01</span><h3>What feels clunky?</h3></div><div className="step-row"><span className="step-num">02</span><h3>What do you hope to build?</h3></div><div className="step-row"><span className="step-num">03</span><h3>Where does work get stuck?</h3></div></div></aside><ContactForm /></div></section></main>;
}
