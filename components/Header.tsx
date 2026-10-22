"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#0B2A4A] transition-[border-color] ${
        scrolled ? "border-b border-white/15" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#top" className="shrink-0" aria-label="EZ Soccer Admin home">
          <Image src="/logo-wordmark-light.png" alt="EZ Soccer Admin" width={454} height={234} priority className="h-13 w-auto" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-[0.95rem] font-medium text-chalk/80 hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-pitch px-5 py-2.5 text-[0.95rem] font-semibold text-white hover:bg-pitch-deep"
          >
            Book a call
          </a>
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-white/25 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-chalk transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-chalk transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/15 bg-[#0B2A4A] px-4 pb-6 pt-2 md:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/15 py-3.5 text-lg font-medium text-chalk"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-pitch py-3.5 text-center font-semibold text-white"
          >
            Book a call
          </a>
        </nav>
      )}
    </header>
  );
}
