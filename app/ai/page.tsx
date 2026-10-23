import type { Metadata } from "next";
import Link from "next/link";
import { GlassLink } from "@/components/glass-link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "AI & Automation",
  description: "Practical AI, connected workflows and thoughtful evaluation of emerging technology from BITS.",
};

const areas = [
  {
    number: "01",
    title: "AI in useful products",
    description: "Add language, search, classification or generation capabilities where they make a product more helpful and the limits can be made clear.",
    examples: ["Assistive product features", "Knowledge search and retrieval", "Human reviewed classification"],
  },
  {
    number: "02",
    title: "Automation across workflows",
    description: "Connect the steps between tools and teams. Automate repeatable handoffs while keeping people involved in decisions that need judgment.",
    examples: ["System integrations", "Approvals and routing", "Notifications and routine updates"],
  },
  {
    number: "03",
    title: "Foundations and evaluation",
    description: "Understand information quality, access, privacy and failure cases before a new model or workflow is put into everyday use.",
    examples: ["Data and access foundations", "Quality checks and human review", "Small, measurable experiments"],
  },
  {
    number: "04",
    title: "Emerging technology, with intent",
    description: "Explore newer tools through a clear question and a small test. Keep what proves useful; leave the rest as an informed decision.",
    examples: ["Technology fit reviews", "Bounded prototypes", "Practical next-step recommendations"],
  },
];

const principles = [
  ["Fit before novelty", "Use a new tool when it solves a defined problem better than a simpler option."],
  ["People stay in context", "Make it clear what a system did, where it is uncertain and when someone should step in."],
  ["Improve from evidence", "Start with a bounded use case, observe how it performs and decide what should change next."],
];

export default function AiPage() {
  return (
    <main id="main" className="page-shell ai-page">
      <section className="page-hero container ai-hero" data-flow-stage="0">
        <p className="eyebrow">AI / Automation / Emerging technology</p>
        <h1 className="page-title">Make new technology<br /><em>useful at work.</em></h1>
        <div className="ai-hero-foot">
          <p className="page-intro">AI is moving quickly. The lasting value comes from applying it carefully to real tasks, with good information and people in the loop.</p>
          <div className="ai-signal" aria-hidden="true"><span>INPUT</span><i /><b>MODEL</b><i /><span>USEFUL OUTPUT</span></div>
        </div>
      </section>

      <section className="ai-thesis" data-flow-stage="1">
        <div className="container ai-thesis-layout">
          <span className="micro-label">A PRACTICAL POINT OF VIEW</span>
          <h2>Technology should earn its place in the workflow.</h2>
          <p>We start by understanding the task, the people doing it and the systems around it. From there, we can decide whether AI, automation, conventional software or a combination is the right fit.</p>
        </div>
      </section>

      <section className="section container ai-areas" aria-label="AI and automation capabilities">
        <div className="section-kicker" data-flow-stage="2"><b>01—04</b><span>WHERE IT CAN HELP</span></div>
        <div className="ai-area-list">
          {areas.map((area, index) => (
            <Reveal key={area.number}>
              <article className="ai-area" id={index === 0 ? "applied-ai" : index === 1 ? "automation" : index === 2 ? "evaluation" : "emerging-technology"} data-flow-stage={index === 0 ? 2 : index === 1 ? 3 : 4} data-flow-focus={index}>
                <span className="ai-area-number">{area.number}</span>
                <div><h2>{area.title}</h2><p>{area.description}</p></div>
                <ul>{area.examples.map((example) => <li key={example}>{example}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section ai-principles" data-flow-stage="4">
        <div className="container">
          <div className="section-kicker"><b>04</b><span>HOW WE APPROACH IT</span></div>
          <div className="ai-principle-grid">
            {principles.map(([title, text], index) => (
              <article key={title}><span className="index-label">0{index + 1} / PRINCIPLE</span><h2>{title}</h2><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-cta container" data-flow-stage="4">
        <div><p className="eyebrow">A sensible place to begin</p><h2>Bring us the task.<br /><span className="display-em">We can explore the options.</span></h2></div>
        <div className="ai-cta-links"><Link className="quiet-link" href="/services">All capabilities</Link><GlassLink href="/contact">Discuss an idea</GlassLink></div>
      </section>
    </main>
  );
}
