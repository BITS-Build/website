import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { GlassLink } from "@/components/glass-link";

export const metadata: Metadata = { title: "Our approach", description: "A collaborative, clear and practical approach to building digital products and systems with BITS." };

const steps = [
  ["01", "Understand", "We listen to how things work today, who is involved and where the friction really lives.", "ASK BETTER QUESTIONS"],
  ["02", "Shape", "We map a practical path, make trade-offs visible and agree on what the first useful version needs.", "MAKE THE PLAN LEGIBLE"],
  ["03", "Build", "We work in focused increments, sharing progress early and keeping decisions close to the people affected.", "SHIP IN SMALL STEPS"],
  ["04", "Improve", "We learn from how the solution is used, make thoughtful refinements and help it grow with the business.", "KEEP WHAT WORKS MOVING"],
];

export default function WorkPage() {
  return <main id="main" className="page-shell"><section className="page-hero container"><p className="eyebrow">02 / Our approach</p><h1 className="page-title">Make the complex<br /><em>feel possible.</em></h1><p className="page-intro">We keep the work collaborative, decisions grounded and the next step visible.</p></section><section className="statement-band"><span className="binary-watermark" aria-hidden="true">1010</span><div className="container"><p className="eyebrow">A living process</p><h2>Each step creates a little more clarity, then we move forward together.</h2></div></section><section className="section container"><div className="section-kicker"><b>01—04</b><span>THE METHOD</span></div><div className="steps">{steps.map(([n, title, text, note]) => <Reveal key={n}><article className="step-row"><span className="step-num">{n}</span><h3>{title}</h3><div><p>{text}</p><p className="micro-label muted" style={{ marginTop: 12 }}>{note}</p></div></article></Reveal>)}</div></section><section className="section container"><div className="section-kicker"><b>EXPECT</b><span>WORKING WITH BITS</span></div><div className="content-grid"><article className="content-panel"><span className="service-symbol" aria-hidden="true">↗</span><h2>Clear communication</h2><p>Know what is happening, what needs a decision and what comes next.</p></article><article className="content-panel"><span className="service-symbol" aria-hidden="true">∞</span><h2>Useful by default</h2><p>Choose an approach because it helps, with room for learning and change.</p></article></div></section><section className="closing-cta container"><div><p className="eyebrow">A thoughtful first step</p><h2>Bring us the knot.<br /><span className="display-em">We’ll help untangle it.</span></h2></div><GlassLink href="/contact">Start a conversation</GlassLink></section></main>;
}
