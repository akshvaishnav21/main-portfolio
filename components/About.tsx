"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "Node.js / Express",
  "Chrome Extensions",
  "AI / LLMs",
  "Docker",
  "Tailwind CSS",
  "SQL",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            PM by day, builder by night
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-slate-400 leading-relaxed"
          >
            <p>
              I&apos;m a Product Manager at Microsoft where I work on
              enterprise-scale products. Outside of work, I enjoy turning
              ideas into real tools — things that solve real friction I
              encounter every day.
            </p>
            <p>
              Most of my projects sit at the intersection of AI, productivity,
              and developer tooling. I care about clean UX, fast performance,
              and shipping things that actually work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest">
              Tech I use
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
