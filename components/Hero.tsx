"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Aakash{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Vaishnav
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">
            Product Manager 2{" "}
            <span className="text-slate-500">@</span>{" "}
            <span className="text-blue-400 font-medium">Microsoft</span>
          </p>
          <p className="text-slate-400 text-base md:text-lg mb-10 max-w-xl mx-auto">
            I build tools I wish existed — from AI productivity apps to
            browser extensions and data dashboards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="https://github.com/akshvaishnav21"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-lg transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
