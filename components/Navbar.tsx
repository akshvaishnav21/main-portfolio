"use client";

import { Github, Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        setMenuOpen(false);
    };
    const media = window.matchMedia("(min-width: 768px)");
    const onResize = () => {
      if (media.matches) setMenuOpen(false);
    };
    if (menuOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.addEventListener("pointerdown", onPointerDown);
      media.addEventListener("change", onResize);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      media.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="section-shell nav-inner" aria-label="Main navigation">
        <Link
          href="/"
          className="wordmark"
          aria-label="Aakash Vaishnav — home"
          onClick={() => setMenuOpen(false)}
        >
          av<span>.</span>
        </Link>
        <div className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={
                pathname.startsWith("/projects/") && link.label === "Work"
                  ? "location"
                  : undefined
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/akshvaishnav21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            GitHub <ArrowUpRight size={15} />
          </a>
        </div>
        <button
          ref={buttonRef}
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div
        className="mobile-nav section-shell"
        id="mobile-navigation"
        hidden={!menuOpen}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://github.com/akshvaishnav21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={16} /> GitHub
        </a>
      </div>
      <noscript>
        <style>{".menu-toggle{display:none!important}"}</style>
        <nav
          className="noscript-nav section-shell"
          aria-label="Section navigation"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </noscript>
    </header>
  );
}
