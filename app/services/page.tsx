import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { GlassLink } from "@/components/glass-link";

export const metadata: Metadata = { title: "Capabilities", description: "Software, AI, automation, data and digital growth capabilities from BITS." };

const capabilities = [
  { n: "01", label: "DIGITAL PRODUCTS", title: "Software & digital systems", intro: "Build useful tools around the way people and businesses actually work.", items: ["Custom software and web applications", "Digital products and platforms", "Systems integration and workflow design", "Ongoing product improvement"] },
  { n: "02", label: "INTELLIGENCE", title: "AI & automation", intro: "Put data and automation to work where they make a clear, practical difference.", items: ["Applied AI product features", "Workflow and process automation", "Knowledge and information systems", "Data foundations and decision support"] },
  { n: "03", label: "DIGITAL GROWTH", title: "Data, experience & growth", intro: "Help the right people find you, understand your offer and take a useful next step.", items: ["Digital strategy and positioning", "Websites and conversion journeys", "Analytics and measurement planning", "Research-led experience improvement"] },
];

export default function ServicesPage() {
  return <main id="main" className="page-shell"><section className="page-hero container"><p className="eyebrow">01 / Capabilities</p><h1 className="page-title">Build the right<br /><em>kind of progress.</em></h1><p className="page-intro">BITS brings software, AI, automation, data and digital growth together around the outcomes that matter.</p></section><section className="container" aria-label="BITS capabilities">{capabilities.map((cap) => <Reveal key={cap.n}><article className="capability-row" id={cap.n === "01" ? "software" : cap.n === "02" ? "ai" : "growth"}><span className="capability-number">{cap.n}</span><div><p className="micro-label muted">{cap.label}</p><h2>{cap.title}</h2></div><div><p>{cap.intro}</p><ul>{cap.items.map((item) => <li key={item}>{item}</li>)}</ul><Link className="quiet-link" href="/contact">Discuss this capability <span aria-hidden="true">↗</span></Link></div></article></Reveal>)}</section><section className="section container"><div className="content-panel"><p className="eyebrow">Start with the outcome</p><h2>Choose the tools second.</h2><p>Every engagement starts with context: what is slowing things down, who needs help and what better could look like.</p><GlassLink href="/contact">Share the challenge</GlassLink></div></section></main>;
}
