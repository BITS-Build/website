import type { Metadata } from "next";
import Link from "next/link";
import { GlassLink } from "@/components/glass-link";

export const metadata: Metadata = { title: "About BITS", description: "BITS is a technology company building software, AI and digital systems with intent." };

const beliefs = [
  ["01 / PEOPLE", "Start with people.", "Understand the needs behind the request before choosing the tools."],
  ["02 / CLARITY", "Make it understandable.", "Good systems make decisions, handoffs and next steps easier to see."],
  ["03 / CRAFT", "Care about the details.", "Thoughtful experiences are built from small choices that work together."],
  ["04 / PROGRESS", "Keep learning.", "Build a useful foundation, learn from reality and improve with intent."],
];

export default function AboutPage() {
  return <main id="main" className="page-shell"><section className="page-hero container"><p className="eyebrow">03 / About BITS</p><h1 className="page-title">Technology for<br /><em>moving forward.</em></h1><p className="page-intro">BITS is a technology company helping businesses make useful ideas real and everyday systems work better.</p></section><section className="statement-band"><span className="binary-watermark" aria-hidden="true">0101</span><div className="container"><p className="eyebrow">Build. Innovate. Transform.</p><h2>The best technology doesn’t ask for attention. <span className="display-em">It gives people more room to do their best work.</span></h2></div></section><section className="section container"><div className="section-kicker"><b>01</b><span>OUR POINT OF VIEW</span></div><div className="belief-grid">{beliefs.map(([label, title, text]) => <article className="belief" key={label}><span className="index-label">{label}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section><section className="section container"><div className="content-panel"><p className="micro-label muted">BUILD / INNOVATE / TRANSFORM</p><h2>The right next step is often smaller, clearer and more useful than the first idea.</h2><Link className="quiet-link" href="/work">How we work <span aria-hidden="true">↗</span></Link></div></section><section className="closing-cta container"><div><p className="eyebrow">Work with BITS</p><h2>Let’s build something<br /><span className="display-em">that moves you forward.</span></h2></div><GlassLink href="/contact">Start a conversation</GlassLink></section></main>;
}
