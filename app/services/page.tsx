import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { GlassLink } from "@/components/glass-link";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Software, AI, automation, data and digital growth capabilities from BITS.",
};

const capabilities = [
  {
    n: "01",
    label: "INTELLIGENCE",
    title: "AI & automation",
    intro: "Use AI and automation where they can make a clear, practical difference to real work.",
    items: ["Applied AI product features", "Workflow and process automation", "Knowledge and information systems", "Data foundations and decision support"],
  },
  {
    n: "02",
    label: "DIGITAL PRODUCTS",
    title: "Software & digital systems",
    intro: "Build useful tools around the way people and businesses actually work.",
    items: ["Custom software and web applications", "Digital products and platforms", "Systems integration and workflow design", "Ongoing product improvement"],
  },
  {
    n: "03",
    label: "DIGITAL GROWTH",
    title: "Data, experience & growth",
    intro: "Help the right people find you, understand your offer and take a useful next step.",
    items: ["Digital strategy and positioning", "Websites and conversion journeys", "Analytics and measurement planning", "Research-led experience improvement"],
  },
];

export default function ServicesPage() {
  return (
    <main id="main" className="page-shell services-page">
      <section className="page-hero container service-intro" data-flow-stage="0">
        <div>
          <p className="eyebrow">01 / Capabilities</p>
          <h1 className="page-title">Build the right<br /><em>kind of progress.</em></h1>
        </div>
        <div className="service-intro-aside">
          <span className="micro-label">BITS / SYSTEM MAP</span>
          <p>Software, intelligence and digital growth — connected around the outcomes that matter.</p>
          <div className="system-keys" aria-hidden="true"><span>010</span><i /><span>101</span><i /><span>011</span></div>
        </div>
      </section>

      <section className="capability-stack container" aria-label="BITS capabilities" data-flow-stage="1">
        {capabilities.map((capability) => (
          <Reveal key={capability.n}>
            <article className={`capability-row capability-${capability.n}`} id={capability.n === "01" ? "ai" : capability.n === "02" ? "software" : "growth"} data-flow-stage={capability.n === "01" ? 2 : capability.n === "02" ? 3 : 4} data-flow-focus={Number(capability.n) - 1}>
              <span className="capability-number">{capability.n}</span>
              <div className="capability-title">
                <p className="micro-label muted">{capability.label}</p>
                <h2>{capability.title}</h2>
              </div>
              <div className="capability-detail">
                <p>{capability.intro}</p>
                <ul>{capability.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <Link className="quiet-link" href="/contact">Discuss this capability</Link>
              </div>
              <span className="capability-index" aria-hidden="true">{capability.n}</span>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section container outcome-section" data-flow-stage="4">
        <div className="outcome-plate">
          <p className="eyebrow">Start with the outcome</p>
          <h2>Choose the tools<br /><span className="display-em">second.</span></h2>
          <p>Every engagement starts with context: what is slowing things down, who needs help and what better could look like.</p>
          <GlassLink href="/contact">Share the challenge</GlassLink>
          <div className="plate-coordinate" aria-hidden="true">BITS / 01—03</div>
        </div>
      </section>
    </main>
  );
}
