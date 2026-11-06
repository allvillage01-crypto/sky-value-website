"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "ABOUT" },
  { href: "#business", label: "BUSINESS" },
  { href: "#company", label: "COMPANY" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="relative block h-8 w-40 shrink-0">
          <Image
            src={solid ? "/brand/logo_primary.svg" : "/brand/logo_white.svg"}
            alt="Sky Value株式会社"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-en tracking-wide transition-colors ${
                solid ? "text-ink hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 transition-transform ${
              solid ? "bg-ink" : "bg-white"
            } ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 transition-opacity ${
              solid ? "bg-ink" : "bg-white"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 transition-transform ${
              solid ? "bg-ink" : "bg-white"
            } ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-white px-6 py-4 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-en tracking-wide text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
