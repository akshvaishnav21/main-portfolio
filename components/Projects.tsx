import { projects } from "@/lib/projects";
import { getAllStarCounts } from "@/lib/github";
import { studies } from "@/lib/studies";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const starCounts = await getAllStarCounts(
    projects.map((p) => p.github.split("/").pop()!),
  );
  const featured = studies.map((study) =>
    projects.find((p) => p.slug === study.slug)!,
  );
  const more = projects.filter((p) => !featured.includes(p));
  return (
    <section
      id="projects"
      className="work-section section-shell"
      aria-labelledby="work-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 id="work-heading">From friction to function.</h2>
        </div>
        <p>
          Three projects. <br />
          Three different problems to solve.
        </p>
      </div>
      <div className="selected-projects">
        {featured.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            stars={starCounts[project.github.split("/").pop()!] ?? null}
            index={index}
            selected
          />
        ))}
      </div>
      <div className="section-heading more-heading">
        <div>
          <p className="eyebrow">The rest of the workshop</p>
          <h2>More things I’ve built.</h2>
        </div>
        <p>Small experiments. Useful side projects.</p>
      </div>
      <div className="more-projects">
        {more.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            stars={starCounts[project.github.split("/").pop()!] ?? null}
          />
        ))}
      </div>
    </section>
  );
}
