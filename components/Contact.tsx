"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-slate-400 max-w-md mx-auto mb-10">
            I&apos;m always open to interesting conversations, collaboration
            ideas, or just a chat about products and tech.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:aakashvaishnav@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
            >
              <Mail size={16} /> Send an email
            </a>

            <a
              href="https://github.com/akshvaishnav21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition-colors"
            >
              <Github size={16} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aakashvaishnav1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
