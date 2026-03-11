import { projects } from "@/lib/projects";
import { getAllStarCounts } from "@/lib/github";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const slugs = projects.map((p) => {
    const parts = p.github.split("/");
    return parts[parts.length - 1];
  });

  const starCounts = await getAllStarCounts(slugs);

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Things I&apos;ve built
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const repoName = project.github.split("/").pop() ?? "";
            return (
              <ProjectCard
                key={project.slug}
                project={project}
                stars={starCounts[repoName] ?? 0}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
