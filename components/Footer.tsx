export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
      <p>
        Built with{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          Next.js
        </a>{" "}
        &middot; Hosted on{" "}
        <a
          href="https://railway.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
        >
          Railway
        </a>
      </p>
    </footer>
  );
}
