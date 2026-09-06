import { ArrowUpRight, Mail } from "lucide-react";
export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-section section-shell"
      aria-labelledby="contact-heading"
    >
      <p className="eyebrow">Let’s connect</p>
      <div className="contact-grid">
        <div>
          <h2 id="contact-heading">
            Have a problem
            <br />
            worth working on?
          </h2>
          <p>
            I’m happy to talk product, compare notes on building,
            <br className="desktop-break" /> or explore a collaboration.
          </p>
        </div>
        <div className="contact-actions">
          <a
            href="mailto:aakashvaishnav@gmail.com"
            className="button button-primary"
          >
            <Mail size={17} /> Send an email
          </a>
          <a
            href="https://www.linkedin.com/in/aakashvaishnav1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Connect on LinkedIn <ArrowUpRight size={16} />
          </a>
          <a
            href="https://github.com/akshvaishnav21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Find me on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
