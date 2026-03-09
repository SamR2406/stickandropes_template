"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { imageBank, navLinks, site } from "@/data/siteData";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-700/30 bg-forest-950/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative h-10 w-10 overflow-hidden rounded-full border border-moss-300/40">
            <Image src={imageBank.logo} alt="Sticks and Ropes logo" fill className="object-cover" sizes="40px" />
          </span>
          <span>
            <span className="block text-base font-semibold text-paper-50">{site.name}</span>
            <span className="block text-xs text-moss-200">{site.subtitle}</span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-moss-300/50 text-paper-50 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="text-lg">{open ? "x" : "="}</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 text-sm transition ${
                  active
                    ? "bg-moss-300 text-forest-950"
                    : "text-paper-100 hover:bg-forest-700/70 hover:text-paper-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {open ? (
        <nav className="border-t border-forest-700/60 bg-forest-900 px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-2 text-sm ${
                    active ? "bg-moss-300 text-forest-950" : "text-paper-100 hover:bg-forest-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
