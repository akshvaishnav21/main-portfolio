import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section-shell" aria-labelledby="intro-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Product manager. Hands-on builder.
        </p>
        <h1 id="intro-title">
          Aakash
          <br />
          <span>Vaishnav.</span>
        </h1>
        <p className="mobile-role">Product Manager 2 at Microsoft</p>
        <p className="hero-description">
          I turn everyday friction into
          <br className="desktop-break" /> practical tools.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore selected work <ArrowDown size={17} />
          </a>
          <a href="#contact" className="text-link">
            Get in touch <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="hero-aside">
        <p className="eyebrow">A little context</p>
        <p className="hero-role">
          Product Manager 2<br />
          <span>at Microsoft</span>
        </p>
        <p>
          Outside of work, I build AI apps, developer tools, and small utilities
          that make daily life easier.
        </p>
        <div className="hero-index">
          <span>AI & productivity</span>
          <span>Developer tools</span>
          <span>Thoughtful software</span>
        </div>
      </div>
    </section>
  );
}
