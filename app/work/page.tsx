import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { GlassLink } from "@/components/glass-link";

export const metadata: Metadata = {
  title: "Our approach",
  description: "A collaborative, clear and practical approach to building digital products and systems with BITS.",
};

const steps = [
  ["01", "Understand", "We listen to how things work today, who is involved and where the friction really lives.", "ASK BETTER QUESTIONS"],
  ["02", "Shape", "We map a practical path, make trade-offs visible and agree on what the first useful version needs.", "MAKE THE PLAN LEGIBLE"],
  ["03", "Build", "We work in focused increments, sharing progress early and keeping decisions close to the people affected.", "SHIP IN SMALL STEPS"],
  ["04", "Improve", "We learn from how the solution is used, make thoughtful refinements and help it grow with the business.", "KEEP WHAT WORKS MOVING"],
];

export default function WorkPage() {
  return (
    <main id="main" className="page-shell approach-page">
      <section className="page-hero container approach-hero" data-flow-stage="0">
        <p className="eyebrow">02 / Our approach</p>
        <h1 className="page-title">Make the complex<br /><em>feel possible.</em></h1>
        <div className="approach-deck">
          <p className="page-intro">We keep the work collaborative, decisions grounded and the next step visible.</p>
          <div className="approach-index" aria-hidden="true"><span>01</span><i /><span>04</span></div>
        </div>
      </section>

      <section className="approach-thesis" data-flow-stage="1">
        <div className="container thesis-layout">
          <span className="micro-label">A LIVING PROCESS</span>
          <h2>Each step creates a little more clarity, then we move forward <span>together.</span></h2>
          <div className="thesis-watermark" aria-hidden="true">0101</div>
        </div>
      </section>

      <section className="section container method-section" data-flow-stage="2">
        <div className="section-kicker"><b>01—04</b><span>THE METHOD</span></div>
        <div className="method-track">
          {steps.map(([number, title, text, note]) => (
            <Reveal key={number}>
              <article className="method-row">
                <span className="method-marker">{number}</span>
                <div className="method-title"><h2>{title}</h2><span className="micro-label">{note}</span></div>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="expectations container" data-flow-stage="3">
        <div className="expectations-intro"><p className="eyebrow">What you can expect</p><h2>Clear work.<br /><em>Useful by default.</em></h2></div>
        <div className="expectation-list">
          <article><span>01</span><div><h3>Clear communication</h3><p>Know what is happening, what needs a decision and what comes next.</p></div></article>
          <article><span>02</span><div><h3>Built to evolve</h3><p>Leave room for learning, changing needs and a better next version.</p></div></article>
        </div>
      </section>

      <section className="closing-cta container" data-flow-stage="4">
        <div><p className="eyebrow">A thoughtful first step</p><h2>Bring us the knot.<br /><span className="display-em">We’ll help untangle it.</span></h2></div>
        <GlassLink href="/contact">Start a conversation</GlassLink>
      </section>
    </main>
  );
}
