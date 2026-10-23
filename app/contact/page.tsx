import type { Metadata } from "next";
import { ContactForm } from "@/app/contact/contact-form";

export const metadata: Metadata = {
  title: "Start a conversation",
  description: "Share a challenge, an early idea or a process that feels harder than it should.",
};

export default function ContactPage() {
  return (
    <main id="main" className="page-shell contact-page">
      <section className="page-hero container contact-hero" data-flow-stage="0">
        <div>
          <p className="eyebrow">04 / Start a conversation</p>
          <h1 className="page-title">What would you<br /><em>like to change?</em></h1>
        </div>
        <p className="page-intro">Share a challenge, a rough idea or a process that feels harder than it should. No perfect brief required. Just a place to begin.</p>
      </section>

      <section className="section container contact-section" data-flow-stage="2">
        <div className="contact-layout">
          <aside className="contact-aside">
            <p className="eyebrow">A few prompts</p>
            <h2>Start with what<br /><span className="display-em">you know.</span></h2>
            <p>You don't need a detailed specification. A little context is enough to start a useful conversation.</p>
            <div className="prompt-list">
              <p><span>01</span> What feels clunky?</p>
              <p><span>02</span> What do you hope to build?</p>
              <p><span>03</span> Where does work get stuck?</p>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
      <div className="contact-tail" data-flow-stage="3" aria-hidden="true"><span>BUILD</span><i /><span>INNOVATE</span><i /><span>TRANSFORM</span></div>
    </main>
  );
}
