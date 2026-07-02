"use client";

import Link from "next/link";
import { useState } from "react";
import { integrationConfig } from "@/lib/integrations";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-200 px-4 text-sm font-black text-melaza-indigo"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        Menu
      </button>
      {open ? (
        <div id="mobile-navigation" className="absolute inset-x-4 top-20 rounded-3xl border border-slate-200 bg-white p-4 shadow-glow">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-melaza-twilight hover:text-melaza-indigo"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={integrationConfig.melazaNetworkUrl}
              className="rounded-2xl border border-melaza-poppy/40 bg-melaza-poppy/10 px-4 py-3 text-sm font-black text-melaza-indigo"
              onClick={() => setOpen(false)}
            >
              Client/Admin Login
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
