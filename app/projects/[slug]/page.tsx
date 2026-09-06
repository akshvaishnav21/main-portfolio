import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/projects";
import { studies } from "@/lib/studies";
import { absoluteUrl } from "@/lib/site";
import ProjectMedia from "@/components/ProjectMedia";
import Contact from "@/components/Contact";

export const dynamicParams = false;
export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = studies.find((s) => s.slug === slug);
  const project = projects.find((p) => p.slug === slug);
  if (!study || !project)
    return { title: "Project not found", robots: { index: false } };
  const image = project.screenshot
    ? absoluteUrl(`/screenshots/${project.screenshot}`)
    : undefined;
  return {
    title: project.name,
    description: study.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} — Aakash Vaishnav`,
      description: study.summary,
      url: `/projects/${slug}`,
      images: image
        ? [{ url: image, alt: `${project.name} interface preview` }]
        : [],
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: `${project.name} — Aakash Vaishnav`,
      description: study.summary,
      images: image ? [image] : [],
    },
  };
}
export default async function ProjectStory({ params }: Props) {
  const { slug } = await params;
  const study = studies.find((s) => s.slug === slug);
  const project = projects.find((p) => p.slug === slug);
  if (!study || !project) notFound();
  const nextStudy = studies[(studies.indexOf(study) + 1) % studies.length];
  const nextProject = projects.find((p) => p.slug === nextStudy.slug)!;
  return (
    <main id="main-content" tabIndex={-1}>
      <article className="story section-shell">
        <Link href="/#projects" className="text-link">
          <ArrowLeft size={16} /> All selected work
        </Link>
        <header className="story-header">
          <p className="eyebrow">{project.category} / Project story</p>
          <h1>{project.name}</h1>
          <p className="story-lede">{study.summary}</p>
        </header>
        <div className="story-top-actions">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              {project.demoLabel ?? "Try app"} <ArrowUpRight size={16} />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-secondary"
          >
            <Github size={16} /> View source
          </a>
        </div>
        <ProjectMedia
          name={project.name}
          screenshot={project.screenshot}
          videoId={project.videoId}
          priority
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 964px) calc(100vw - 64px), 900px"
        />
        <div className="story-body">
          <dl className="story-facts">
            <div>
              <dt>Project scope</dt>
              <dd>{study.scope}</dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>
                <ul className="tech-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <div className="story-content">
            <section>
              <h2>The problem</h2>
              <p>{study.problem}</p>
            </section>
            <section>
              <h2>The approach</h2>
              <p>{study.approach}</p>
            </section>
            <section>
              <h2>Design choices & tradeoffs</h2>
              {study.decisions.map((decision) => (
                <div key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.detail}</p>
                  <p className="tradeoff">{decision.tradeoff}</p>
                </div>
              ))}
            </section>
            <section>
              <h2>What the project enables</h2>
              <ul>
                {study.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>The next question</h2>
              <p>{study.nextQuestion}</p>
            </section>
            {study.attribution && (
              <section>
                <h2>Built on NewPipe</h2>
                <p>{study.attribution}</p>
              </section>
            )}
            <section>
              <h2>Explore the work</h2>
              <ul>
                {study.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <div className="story-next">
          <Link href="/#projects" className="text-link">
            <ArrowLeft size={16} /> Back to selected work
          </Link>
          <Link href={`/projects/${nextStudy.slug}`} className="text-link">
            Next: {nextProject.name} <ArrowUpRight size={16} />
          </Link>
        </div>
      </article>
      <Contact />
    </main>
  );
}
