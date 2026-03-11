"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, Star } from "lucide-react";
import type { Project } from "@/lib/projects";

// Deterministic gradient per slug
const gradients: Record<string, string> = {
  resumeforge: "from-blue-600 to-indigo-700",
  "stockinsight-ai": "from-emerald-600 to-teal-700",
  habittracker: "from-violet-600 to-purple-700",
  callyourai: "from-orange-500 to-rose-600",
  "opportunity-cost-reminder": "from-yellow-500 to-amber-600",
  "folder-organizer": "from-sky-500 to-cyan-600",
};

type Props = {
  project: Project;
  stars: number;
  index: number;
};

export default function ProjectCard({ project, stars, index }: Props) {
  const gradient = gradients[project.slug] ?? "from-slate-600 to-slate-700";

  const cardHref = project.demo ?? project.github;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-slate-600 transition-colors"
    >
      {/* Full-card clickable overlay */}
      <a
        href={cardHref}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-0"
        aria-label={`Open ${project.name}`}
      />
      {/* Screenshot or gradient placeholder */}
      <div className="relative h-48 overflow-hidden">
        {project.screenshot ? (
          <Image
            src={`/screenshots/${project.screenshot}`}
            alt={project.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
          >
            <span className="text-4xl font-bold text-white/30 select-none">
              {project.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 left-3 px-2 py-0.5 bg-blue-600 text-white text-xs font-medium rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-semibold text-lg leading-tight">
            {project.name}
          </h3>
          {stars > 0 && (
            <span className="flex items-center gap-1 text-slate-400 text-sm shrink-0">
              <Star size={13} className="text-yellow-400 fill-yellow-400" />
              {stars}
            </span>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="relative z-10 flex items-center gap-3 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
            aria-label={`${project.name} GitHub`}
          >
            <Github size={15} /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 text-sm transition-colors"
              aria-label={`${project.name} live demo`}
            >
              <ExternalLink size={15} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
