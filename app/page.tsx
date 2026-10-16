import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { GlassLink } from "@/components/glass-link";

const services = [
  { n: "01", mark: "{ }", title: "Software & digital products", text: "Purpose-built software, platforms and connected systems designed around real work." },
  { n: "02", mark: "01", title: "AI & automation", text: "Practical intelligence that reduces repetitive work and makes information more useful." },
  { n: "03", mark: "↗", title: "Data & digital growth", text: "Clearer digital experiences, stronger journeys and better ways to learn what works." },
];

export default function HomePage() {
  return (
    <main id="main" className="page-shell">
      <section className="hero container">
        <div className="hero-copy">
          <Reveal><p className="eyebrow">Independent technology company</p><h1>Build what<br /><em>moves you forward.</em></h1><p className="hero-lede">BITS connects software, AI, automation, data and digital growth to help ambitious ideas become useful realities.</p><div className="hero-actions"><GlassLink href="/contact">Start a conversation</GlassLink><Link className="quiet-link" href="/services">Explore capabilities <span aria-hidden="true">↓</span></Link></div><p className="hero-caption"><b>BITS / 001</b> Build. Innovate. Transform.</p></Reveal>
        </div>
        <div className="hero-art" role="img" aria-label="A luminous binary core surrounded by flowing data rings"><div className="binary-ring"><span>01001010</span><span>10110100</span><span>00101101</span><span>11001001</span></div><div className="orbital-core"><span>0 / 1</span></div><p className="art-coordinate">IDEAS → SYSTEMS<br />SIGNAL → MOMENTUM</p></div>
      </section>

      <section className="section container" aria-labelledby="capabilities-title">
        <div className="section-kicker"><b>01</b><span>WHAT BITS DOES</span></div>
        <div className="section-heading"><h2 id="capabilities-title">Technology that<br /><span className="display-em">makes a difference.</span></h2><p>One connected partner for the software, intelligence and experiences that move a business forward.</p></div>
        <div className="service-grid">{services.map((item, i) => <Reveal key={item.n} delay={i * .08}><Link className="service-card" href="/services"><span className="index-label">{item.n} / CAPABILITY</span><span className="service-symbol" aria-hidden="true">{item.mark}</span><div><h3>{item.title}<span className="card-arrow" aria-hidden="true">↗</span></h3><p>{item.text}</p></div></Link></Reveal>)}</div>
      </section>

      <section className="statement-band"><span className="binary-watermark" aria-hidden="true">0101</span><div className="container"><p className="eyebrow">A point of view</p><h2>Good technology should feel like <span className="display-em">momentum.</span></h2><p>When tools, teams and information work in separate lanes, progress gets harder. We connect the pieces around the people doing the work.</p><Link className="quiet-link" href="/about">Meet BITS <span aria-hidden="true">↗</span></Link></div></section>

      <section className="section container">
        <div className="section-kicker"><b>02</b><span>HOW WE MOVE</span></div><div className="section-heading"><h2>Clear thinking.<br /><span className="display-em">Steady progress.</span></h2><p>Collaborative by design. Grounded in the problem. Focused on a useful next step.</p></div>
        <div className="steps"><div className="step-row"><span className="step-num">01</span><h3>Understand</h3><p>Listen to how things work today, who is involved and where friction lives.</p></div><div className="step-row"><span className="step-num">02</span><h3>Shape</h3><p>Map a practical path and agree on what the first useful version needs.</p></div><div className="step-row"><span className="step-num">03</span><h3>Build</h3><p>Work in focused increments and share progress early.</p></div><div className="step-row"><span className="step-num">04</span><h3>Improve</h3><p>Learn from real use and refine the solution as the business evolves.</p></div></div>
        <Link className="quiet-link" href="/work">See our approach <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="closing-cta container"><div><p className="eyebrow">A good place to start</p><h2>What would you<br /><span className="display-em">love to make easier?</span></h2></div><GlassLink href="/contact">Talk with BITS</GlassLink></section>
    </main>
  );
}
