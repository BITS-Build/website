import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><Link className="brand" href="/"><span className="brand-mark">B</span><span>BITS</span></Link><p>Build. Innovate. Transform.</p></div>
        <div className="footer-group"><span className="micro-label">EXPLORE</span><Link href="/services">Capabilities</Link><Link href="/work">Approach</Link><Link href="/about">About BITS</Link></div>
        <div className="footer-group"><span className="micro-label">START A CONVERSATION</span><Link href="/contact">Tell us what you’re thinking <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} BITS</span><span>Independent by intent <b>·</b> Built with care</span><a href="#main">Back to top ↑</a></div>
    </footer>
  );
}
