import type { Metadata } from "next";
import Link from "next/link";
import { GlassLink } from "@/components/glass-link";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About BITS",
  description: "BITS is a technology company building software, AI and digital systems with intent.",
};

const beliefs = [
  ["01 / PEOPLE", "Start with people.", "Understand the needs behind the request before choosing the tools."],
  ["02 / CLARITY", "Make it understandable.", "Good systems make decisions, handoffs and next steps easier to see."],
  ["03 / CRAFT", "Care about the details.", "Thoughtful experiences are built from small choices that work together."],
  ["04 / PROGRESS", "Keep learning.", "Build a useful foundation, learn from reality and improve with intent."],
];

export default function AboutPage() {
  return (
    <main id="main" className="page-shell about-page">
      <section className="page-hero container about-hero" data-flow-stage="0">
        <p className="eyebrow">03 / About BITS</p>
        <h1 className="page-title">Technology for<br /><em>moving forward.</em></h1>
        <div className="about-hero-foot">
          <p className="page-intro">BITS is a technology company helping businesses make useful ideas real and everyday systems work better.</p>
          <span className="about-index" aria-hidden="true">B<br />I<br />T<br />S</span>
        </div>
      </section>

      <section className="about-manifesto" data-flow-stage="1">
        <div className="container manifesto-layout">
          <p className="eyebrow">Build. Innovate. Transform.</p>
          <div>
            <p className="manifesto-main">The best technology doesn’t ask for attention.</p>
            <p className="manifesto-accent">It gives people more room to do their best work.</p>
            <div className="manifesto-rule"><span>BITS / POINT OF VIEW</span><i /><span>001</span></div>
          </div>
        </div>
      </section>

      <section className="section container beliefs-section" data-flow-stage="2">
        <div className="beliefs-heading">
          <div className="section-kicker"><b>01</b><span>OUR POINT OF VIEW</span></div>
          <p>Good work starts with how people think, decide and get things done.</p>
        </div>
        <div className="belief-grid">
          {beliefs.map(([label, title, text]) => (
            <Reveal key={label}>
              <article className="belief">
                <span className="index-label">{label}</span>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container about-practice" data-flow-stage="3">
        <div className="practice-aside"><span className="micro-label">BUILD / INNOVATE / TRANSFORM</span><span className="practice-mark" aria-hidden="true">0<span>1</span></span></div>
        <div className="practice-copy">
          <p className="eyebrow">A working principle</p>
          <h2>The right next step is often <em>smaller, clearer and more useful</em> than the first idea.</h2>
          <Link className="quiet-link" href="/work">How we work</Link>
        </div>
      </section>

      <section className="closing-cta container" data-flow-stage="4">
        <div><p className="eyebrow">Work with BITS</p><h2>Let’s build something<br /><span className="display-em">that moves you forward.</span></h2></div>
        <GlassLink href="/contact">Start a conversation</GlassLink>
      </section>
    </main>
  );
}
