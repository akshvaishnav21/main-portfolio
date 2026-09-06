import { ArrowUpRight, Github, Star } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import ProjectMedia from "./ProjectMedia";

export default function ProjectCard({
  project,
  stars = null,
  index = 0,
  selected = false,
}: {
  project: Project;
  stars?: number | null;
  index?: number;
  selected?: boolean;
}) {
  return (
    <article
      className={
        selected ? "project-card selected-card" : "project-card compact-card"
      }
    >
      <ProjectMedia
        name={project.name}
        screenshot={project.screenshot}
        videoId={project.videoId}
        priority={selected && index === 0}
        sizes={
          selected
            ? undefined
            : "(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc((100vw - 64px) / 2), (max-width: 1184px) calc((100vw - 88px) / 2), 548px"
        }
      />
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          {selected && <span>0{index + 1} / Selected work</span>}
        </div>
        <h3>
          {selected ? (
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          ) : (
            <a
              href={project.demo ?? project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          )}
        </h3>
        <p className="project-tagline">{project.tagline}</p>
        {selected && (
          <p className="project-description">{project.description}</p>
        )}
        <ul className="tech-list" aria-label={`${project.name} technologies`}>
          {project.tech.slice(0, selected ? 5 : 3).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-actions">
          {selected && (
            <Link
              className="text-link case-link"
              href={`/projects/${project.slug}`}
            >
              Read project story <ArrowUpRight size={16} />
            </Link>
          )}
          {!selected && project.demo && (
            <a
              className="text-link"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.demoLabel ?? "Try app"} <ArrowUpRight size={15} />
            </a>
          )}
          <a
            className="text-link code-link"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} code on GitHub`}
          >
            <Github size={15} /> Code
          </a>
          {stars !== null && stars > 0 && (
            <span className="star-count" aria-label={`${stars} GitHub stars`}>
              <Star size={13} />
              {stars}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
