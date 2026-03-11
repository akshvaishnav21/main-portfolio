export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  screenshot?: string; // filename in /public/screenshots/
  featured?: boolean;
};

export const projects: Project[] = [
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
];
