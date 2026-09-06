import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="not-found section-shell">
      <p className="eyebrow">404 / Not here</p>
      <h1>This page took a detour.</h1>
      <p>The project may have moved, or the link may be incomplete.</p>
      <Link href="/#projects" className="button button-primary">
        Explore selected work
      </Link>
    </main>
  );
}
