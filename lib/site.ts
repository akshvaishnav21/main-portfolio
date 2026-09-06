// Verified against this repository's GitHub homepage and the live page.
// Override at build time when deploying to a custom production domain.
export const siteUrl = new URL(
  process.env.SITE_URL ?? "https://main-portfolio-eight-tau.vercel.app",
);
if (!["https:", "http:"].includes(siteUrl.protocol))
  throw new Error("SITE_URL must be an absolute HTTP(S) URL");
export const siteTitle = "Aakash Vaishnav — Product Manager & Builder";
export const siteDescription =
  "Product manager at Microsoft, building practical AI apps, developer tools, and everyday utilities. Explore selected projects and the decisions behind them.";
export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();
