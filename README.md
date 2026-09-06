# Aakash Vaishnav — Portfolio

A portfolio for a product manager who builds practical software. Includes eleven projects, three statically generated project stories, local video posters, and optional hourly GitHub star counts.

## Run locally

Use Node.js 24 LTS (see `.nvmrc`) and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. No API keys are required.

## Configuration

Copy `.env.example` to `.env.local` if you need to change the defaults.

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Production origin for canonicals, social metadata, and sitemap. Defaults to the verified repository homepage, https://main-portfolio-eight-tau.vercel.app. Set it at build time when moving to a custom domain. |
| `GITHUB_TOKEN` | Optional server-only GitHub token for higher rate limits. Never prefix it with `NEXT_PUBLIC_` or commit its value. |
| `GITHUB_STARS_DISABLED=1` | Skip optional network calls for deterministic/offline builds. |

Star requests run in parallel, deduplicate repository names, cache for one hour, and time out after 1.5 seconds. Failed or invalid responses return unavailable data, not a fabricated zero. Unavailable badges are hidden; the project content still renders. No process-local last-known cache is maintained.

## Updating content

- `lib/projects.ts`: project names, summaries, categories, technology, screenshot filenames, and external destinations.
- `lib/studies.ts`: the selected project stories, feature evidence, design tradeoffs, attribution, and next questions.
- `lib/studies.ts`: also controls the order of the selected projects, their generated routes, and sitemap entries.
- `components/Hero.tsx`, `About.tsx`, `Contact.tsx`: profile copy.
- `lib/site.ts`: site-wide title, description, and trusted production origin.

Each selected project needs both a project record and a study record. The study slugs generate the project routes and sitemap. Unknown project slugs return 404. Keep measurements sourced and distinguish shipped functionality from future hypotheses. LearnTube must retain attribution to NewPipe.

Screenshots live in `public/screenshots` and use WebP. Keep the original aspect ratio and check small interface text after resizing. Local posters for the three videos come from the existing project demo videos; pressing play mounts the privacy-enhanced YouTube player. A direct video link remains available without JavaScript. Record asset provenance in `docs/content-sources.md`.

## Checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite starts the production build on port 3101. It checks all project routes, metadata, media loading, mobile menu state/focus, skip navigation, JavaScript-disabled content, reduced motion, responsive overflow, and automated accessibility. Player-network behavior is stubbed in the deterministic activation test; live playback still merits a manual check after deployment.

The CI workflow runs these checks on pull requests and pushes with Node 24. ESLint 9 is retained because the React lint plugin used by the current Next.js config does not yet declare ESLint 10 support.

## Deployment

This repository preserves its standard Next.js deployment flow:

```bash
npm run build
npm run start
```

Vercel can import this repository using its Next.js preset. A Node host can use the same build/start commands, with its assigned `PORT`. Configure `SITE_URL` before building; it must be an absolute HTTP(S) URL. GitHub stars are optional and fetched on the server. The normal application uses Next.js image optimization and prerendering with hourly revalidation.

After deployment, check the homepage, all three project pages, a demo, email and LinkedIn links, `/sitemap.xml`, `/robots.txt`, and social previews. No analytics vendor is configured.

## Troubleshooting

- Missing star badges: GitHub may be unavailable or rate-limited. The site remains usable; optionally supply a token or disable requests.
- Build cannot download Geist: `next/font/google` needs access to Google's font servers during the build. Allow that access or deliberately switch to locally hosted font files.
- Browser tests cannot launch: run `npx playwright install chromium` (add `--with-deps` on Linux CI).
- Social links use an old domain: update `SITE_URL` and rebuild.
