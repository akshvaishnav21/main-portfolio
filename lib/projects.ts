export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  demoLabel?: string;
  screenshot?: string; // filename in /public/screenshots/
  videoId?: string; // YouTube video ID for embed
};

export const projects: Project[] = [
  {
    slug: "tripsync",
    category: "Collaborative planning",
    name: "TripSync",
    tagline: "AI-powered group trip planner",
    description:
      "Collects everyone's preferences via a shareable link, generates 3 optimized itinerary proposals with Gemini AI, and lets the group vote on individual activities. No signup required — works like Google Docs.",
    tech: ["Next.js", "TypeScript", "Supabase", "Gemini AI", "Tailwind CSS"],
    github: "https://github.com/akshvaishnav21/tripsync",
    demo: "https://tripsync-bice.vercel.app/",
    videoId: "RtIzNqHzmB4",
    screenshot: "tripsync.webp",
  },
  {
    slug: "creator-support-agent",
    category: "AI & creator tools",
    name: "Creator Support Agent",
    tagline: "AI toolkit for YouTube creators",
    description:
      "Analyses sponsorship fit from transcripts, clusters audience comments into insights, and generates 15 title/hook variations grouped by psychological principle. Includes a Chrome extension for one-click import.",
    tech: ["Next.js", "TypeScript", "Gemini AI", "Chrome Extensions API"],
    github: "https://github.com/akshvaishnav21/creator-support-agent",
    demo: "https://creator-support-agent-peach.vercel.app/",
    videoId: "TClHAZOg3jA",
    screenshot: "creator-support-agent.webp",
  },
  {
    slug: "learntube",
    category: "Android & learning",
    name: "LearnTube",
    tagline: "Privacy-first Android YouTube client with learning tools",
    description:
      "Fork of NewPipe extended with a Learning Paths dashboard, per-video watch progress, timestamped notes, daily streaks, and weekly study-time stats. No account, no tracking.",
    tech: ["Java", "Kotlin", "Android"],
    github: "https://github.com/akshvaishnav21/LearnTube",
    videoId: "Sa12WOK0cO0",
    screenshot: "learntube.webp",
  },
  {
    slug: "resumeforge",
    category: "AI & career tools",
    name: "ResumeForge",
    tagline: "Tailor a resume to a job, with AI assistance",
    description:
      "A four-step workflow that extracts job requirements, maps experience, tailors content, and validates it against the original resume. Uses a FastAPI backend and external AI services with a bring-your-own-key option.",
    tech: ["React", "FastAPI", "Gemini AI", "Tailwind CSS", "Docker"],
    github: "https://github.com/akshvaishnav21/ResumeForge",
    screenshot: "resumeforge.webp",
  },
  {
    slug: "stockinsight-ai",
    category: "Data & dashboards",
    name: "StockInsight AI",
    tagline: "Real-time stock analysis with AI insights",
    description:
      "A stock market dashboard that combines live price data, news sentiment analysis, and insider trading signals with AI-powered recommendations.",
    tech: ["React", "TypeScript", "Express.js", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/akshvaishnav21/StockInsight-AI",
    screenshot: "stockinsight-ai.webp",
  },
  {
    slug: "habittracker",
    category: "Productivity",
    name: "HabitTracker",
    tagline: "Minimal PWA habit tracker with streaks",
    description:
      "Track daily, weekly, and custom-frequency habits with visual completion matrices and streak stats. Works offline as a Progressive Web App.",
    tech: ["React", "TypeScript", "Drizzle ORM", "Tailwind CSS", "Vite"],
    github: "https://github.com/akshvaishnav21/HabitTracker",
    screenshot: "habittracker.webp",
  },
  {
    slug: "callyourai",
    category: "Browser extension",
    name: "CallYourAI",
    tagline: "Access any AI from Chrome's address bar",
    description:
      "A Chrome extension that lets you open ChatGPT, Claude, Gemini, Perplexity, and Copilot instantly via @-prefix shortcuts in the omnibox. Zero servers, full privacy.",
    tech: ["JavaScript", "Chrome Extensions API", "HTML/CSS"],
    github: "https://github.com/akshvaishnav21/CallYourAI",
    demo: "https://chromewebstore.google.com/detail/call-your-ai/kjpngijpjofabpmjgnnngikpjddhjamg",
    demoLabel: "Install extension",
    screenshot: "callyourai.webp",
  },
  {
    slug: "opportunity-cost-reminder",
    category: "Browser extension",
    name: "Opportunity Cost Reminder",
    tagline: "See the investment value of every Amazon purchase",
    description:
      "Chrome extension that injects a banner on Amazon product pages showing what that money could grow to if invested instead. 100% offline, no data collection.",
    tech: ["JavaScript", "Chrome Extensions API", "HTML/CSS"],
    github: "https://github.com/akshvaishnav21/opportunity-cost-reminder",
    screenshot: "opportunity-cost.webp",
  },
  {
    slug: "folder-organizer",
    category: "Desktop utility",
    name: "Folder Organizer",
    tagline: "Auto-organise Windows files by type and date",
    description:
      "Desktop app that categorises 50+ file types into smart folder hierarchies. Includes a preview mode, one-click restore, and pie chart visualisation of your file breakdown.",
    tech: ["Python", "tkinter", "ttkbootstrap"],
    github: "https://github.com/akshvaishnav21/folder-organizer",
    screenshot: "folder-organizer.webp",
  },
  {
    slug: "pomodoro-timer",
    category: "Productivity",
    name: "Pomodoro Timer",
    tagline: "Focus timer with tasks and stats — no distractions",
    description:
      "A clean, keyboard-driven Pomodoro app with Work / Short Break / Long Break modes, a task list, and session statistics. State persists across reloads via Zustand.",
    tech: ["React", "TypeScript", "Vite", "Zustand", "Tailwind CSS"],
    github: "https://github.com/akshvaishnav21/pomodoro-timer",
    screenshot: "pomodoro-timer.webp",
  },
  {
    slug: "save-your-tokens",
    category: "Developer tooling",
    name: "SaveYourTokens",
    tagline: "Less command noise. More room for useful context.",
    description:
      "A transparent Go CLI proxy for Claude Code that intercepts bash commands via PreToolUse hooks, strips noise (passing tests, progress bars, compile lines), and logs cumulative token savings to SQLite.",
    tech: ["Go", "SQLite", "Claude Code Hooks"],
    github: "https://github.com/akshvaishnav21/save-your-tokens",
    screenshot: "saveyourtokens.webp",
  },
];
