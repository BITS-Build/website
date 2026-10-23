import Link from "next/link";
import { GlassLink } from "@/components/glass-link";
import { CursorLightLink } from "@/components/cursor-light-link";
import { Reveal } from "@/components/reveal";

const services = [
  {
    n: "01",
    title: "AI & automation",
    text: "Useful intelligence and connected workflows designed around real decisions and repeatable work.",
  },
  {
    n: "02",
    title: "Software & digital products",
    text: "Purpose-built software, platforms and connected systems designed around real work.",
  },
  {
    n: "03",
    title: "Data & digital growth",
    text: "Clearer digital experiences, stronger journeys and better ways to learn what works.",
  },
];

const process = [
  ["01", "Understand", "Listen to how things work today, who is involved and where friction lives."],
  ["02", "Shape", "Map a practical path and agree on what the first useful version needs."],
  ["03", "Build", "Work in focused increments and share progress early."],
  ["04", "Improve", "Learn from real use and refine the solution as the business evolves."],
];

export default function HomePage() {
  return (
    <main id="main" className="page-shell home-page">
      <section className="hero container" data-flow-stage="0">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">AI, automation & digital products</p>
            <h1>Build what<br /><em>moves you forward.</em></h1>
            <p className="hero-lede">BITS helps make AI and automation useful in the real world, alongside the software, data and digital products that support better work.</p>
            <div className="hero-actions">
              <GlassLink href="/contact">Start a conversation</GlassLink>
              <Link className="quiet-link" href="/services">Explore capabilities</Link>
            </div>
            <p className="hero-caption"><b>BITS / 001</b> Build. Innovate. Transform.</p>
          </Reveal>
        </div>
      </section>

      <section className="section container capability-preview" aria-labelledby="capabilities-title" data-flow-stage="1">
        <div className="section-kicker"><b>01</b><span>WHAT BITS DOES</span></div>
        <div className="section-heading">
          <h2 id="capabilities-title">Technology that<br /><span className="display-em">makes a difference.</span></h2>
          <p>One connected partner for the software, intelligence and experiences that move a business forward.</p>
        </div>
        <div className="ai-priority">
          <div><span className="micro-label">INTELLIGENCE IN PRACTICE / 01</span><h3>Start with the work.<br /><span className="display-em">Then choose the technology.</span></h3></div>
          <div><p>From AI features and knowledge tools to automated handoffs, we look for a clear use case, reliable information and the right human checks before choosing an approach.</p><Link className="quiet-link" href="/ai">Explore AI & automation</Link></div>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <Reveal key={service.n} delay={index * 0.08}>
              <CursorLightLink className="service-card cursor-light--surface" href="/services" flowFocus={index}>
                <span className="index-label">{service.n} / CAPABILITY</span>
                <div><h3>{service.title}</h3><p>{service.text}</p></div>
              </CursorLightLink>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container process-preview" data-flow-stage="2">
        <div className="process-heading">
          <div className="section-kicker"><b>02</b><span>HOW WE MOVE</span></div>
          <h2>Clear thinking.<br /><span className="display-em">Steady progress.</span></h2>
          <p>Collaborative by design. Grounded in the problem. Focused on a useful next step.</p>
          <Link className="quiet-link" href="/work">See our approach</Link>
        </div>
        <div className="steps">
          {process.map(([number, title, text]) => (
            <article className="step-row" key={number}>
              <span className="step-num">{number}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-band home-statement" data-flow-stage="3">
        <span className="binary-watermark" aria-hidden="true">0101</span>
        <div className="container statement-layout">
          <p className="eyebrow">A point of view</p>
          <div>
            <h2>Good technology should feel like <span className="display-em">momentum.</span></h2>
            <p>When tools, teams and information work in separate lanes, progress gets harder. We connect the pieces around the people doing the work.</p>
            <Link className="quiet-link" href="/about">Meet BITS</Link>
          </div>
        </div>
      </section>

      <section className="closing-cta container" data-flow-stage="4">
        <div><p className="eyebrow">A good place to start</p><h2>What would you<br /><span className="display-em">love to make easier?</span></h2></div>
        <GlassLink href="/contact">Talk with BITS</GlassLink>
      </section>
    </main>
  );
}
