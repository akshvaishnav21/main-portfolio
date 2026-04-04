export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  screenshot?: string; // filename in /public/screenshots/
  videoId?: string; // YouTube video ID for embed
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tripsync",
    name: "TripSync",
    tagline: "AI-powered group trip planner",
    description:
      "Collects everyone's preferences via a shareable link, generates 3 optimized itinerary proposals with Gemini AI, and lets the group vote on individual activities. No signup required — works like Google Docs.",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/akshvaishnav21/tripsync",
    demo: "https://tripsync-bice.vercel.app/",
    videoId: "RtIzNqHzmB4",
    featured: true,
  },
  {
    slug: "creator-support-agent",
    name: "Creator Support Agent",
    tagline: "AI toolkit for YouTube creators",
    description:
      "Analyses sponsorship fit from transcripts, clusters audience comments into insights, and generates 15 title/hook variations grouped by psychological principle. Includes a Chrome extension for one-click import.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "Chrome Extensions API"],
    github: "https://github.com/akshvaishnav21/creator-support-agent",
    demo: "https://creator-support-agent-peach.vercel.app/",
    videoId: "TClHAZOg3jA",
    featured: true,
  },
  {
    slug: "learntube",
    name: "LearnTube",
    tagline: "Privacy-first Android YouTube client with learning tools",
    description:
      "Fork of NewPipe extended with a Learning Paths dashboard, per-video watch progress, timestamped notes, daily streaks, and weekly study-time stats. No account, no tracking.",
    tech: ["Java", "Kotlin", "Android"],
    github: "https://github.com/akshvaishnav21/LearnTube",
    videoId: "Sa12WOK0cO0",
    featured: true,
  },
  {
    slug: "resumeforge",
    name: "ResumeForge",
    tagline: "AI-powered resume tailoring in under 2 minutes",
    description:
      "Paste a job description, get a fully tailored, ATS-optimised resume. Uses a 4-step Gemini AI pipeline with bring-your-own-key — your data never leaves your browser.",
    tech: ["React", "FastAPI", "Gemini AI", "Tailwind CSS", "Docker"],
    github: "https://github.com/akshvaishnav21/ResumeForge",
    screenshot: "resumeforge.png",
    featured: true,
  },
  {
    slug: "stockinsight-ai",
    name: "StockInsight AI",
    tagline: "Real-time stock analysis with AI insights",
    description:
      "A stock market dashboard that combines live price data, news sentiment analysis, and insider trading signals with AI-powered recommendations.",
    tech: ["React", "TypeScript", "Express.js", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/akshvaishnav21/StockInsight-AI",
    screenshot: "stockinsight-ai.png",
    featured: true,
  },
  {
    slug: "habittracker",
    name: "HabitTracker",
    tagline: "Minimal PWA habit tracker with streaks",
    description:
      "Track daily, weekly, and custom-frequency habits with visual completion matrices and streak stats. Works offline as a Progressive Web App.",
    tech: ["React", "TypeScript", "Drizzle ORM", "Tailwind CSS", "Vite"],
    github: "https://github.com/akshvaishnav21/HabitTracker",
    screenshot: "habittracker.png",
  },
  {
    slug: "callyourai",
    name: "CallYourAI",
    tagline: "Access any AI from Chrome's address bar",
    description:
      "A Chrome extension that lets you open ChatGPT, Claude, Gemini, Perplexity, and Copilot instantly via @-prefix shortcuts in the omnibox. Zero servers, full privacy.",
    tech: ["JavaScript", "Chrome Extensions API", "HTML/CSS"],
    github: "https://github.com/akshvaishnav21/CallYourAI",
    demo: "https://chromewebstore.google.com/detail/call-your-ai/kjpngijpjofabpmjgnnngikpjddhjamg",
    screenshot: "callyourai.png",
  },
  {
    slug: "opportunity-cost-reminder",
    name: "Opportunity Cost Reminder",
    tagline: "See the investment value of every Amazon purchase",
    description:
      "Chrome extension that injects a banner on Amazon product pages showing what that money could grow to if invested instead. 100% offline, no data collection.",
    tech: ["JavaScript", "Chrome Extensions API", "HTML/CSS"],
    github: "https://github.com/akshvaishnav21/opportunity-cost-reminder",
    screenshot: "opportunity-cost.png",
  },
  {
    slug: "folder-organizer",
    name: "Folder Organizer",
    tagline: "Auto-organise Windows files by type and date",
    description:
      "Desktop app that categorises 50+ file types into smart folder hierarchies. Includes a preview mode, one-click restore, and pie chart visualisation of your file breakdown.",
    tech: ["Python", "tkinter", "ttkbootstrap"],
    github: "https://github.com/akshvaishnav21/folder-organizer",
    screenshot: "folder-organizer.png",
  },
  {
    slug: "pomodoro-timer",
    name: "Pomodoro Timer",
    tagline: "Focus timer with tasks and stats — no distractions",
    description:
      "A clean, keyboard-driven Pomodoro app with Work / Short Break / Long Break modes, a task list, and session statistics. State persists across reloads via Zustand.",
    tech: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS"],
    github: "https://github.com/akshvaishnav21/pomodoro-timer",
    screenshot: "pomodoro-timer.png",
  },
  {
    slug: "save-your-tokens",
    name: "SaveYourTokens",
    tagline: "CLI proxy that compresses Claude Code output 30–60%",
    description:
      "A transparent Go CLI proxy for Claude Code that intercepts bash commands via PreToolUse hooks, strips noise (passing tests, progress bars, compile lines), and logs cumulative token savings to SQLite.",
    tech: ["Go", "SQLite", "Claude Code Hooks"],
    github: "https://github.com/akshvaishnav21/save-your-tokens",
    screenshot: "saveyourtokens.png",
  },
];
