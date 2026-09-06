const skills = [
  "Product thinking",
  "AI / LLMs",
  "TypeScript",
  "React / Next.js",
  "Python",
  "Go",
  "Android",
  "SQL",
];
export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="section-shell about-grid">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-heading">
            Product thinking.
            <br />
            <span>Builder instincts.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m a Product Manager at Microsoft. Outside of work, I build tools
            to solve the everyday problems I run into.
          </p>
          <p>
            That might mean making group travel easier to organize, giving a
            learning playlist some structure, or making command output less
            noisy. I like working through the whole problem: what someone needs,
            what to leave out, and how to make it work.
          </p>
          <ul className="tech-list" aria-label="Areas I work in">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
