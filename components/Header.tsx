"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ink-border/80 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-white">
          Digital<span className="text-accent">Kavin</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  active ? "text-accent" : "text-white/75"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            WhatsApp Me
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-ink-border text-white md:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-ink-border bg-ink px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-white/85 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                WhatsApp Me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
