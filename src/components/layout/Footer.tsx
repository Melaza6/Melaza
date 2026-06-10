import Link from "next/link";
import { integrationConfig } from "@/lib/integrations";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
  { href: integrationConfig.melazaNetworkUrl, label: "Client Login" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="bg-melaza-indigo text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-2xl font-black">Melaza</p>
          <p className="mt-2 text-sm font-semibold text-white/70">
            MelazaUSA LLC, publicly branded as Melaza. Serving businesses across the U.S. and Colombia.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
            Together we learn, together we grow, together we bloom.
          </p>
          <Link href={integrationConfig.melazaNetworkUrl} className="mt-5 inline-flex text-sm font-bold text-melaza-poppy">
            Client Login / Melaza Network
          </Link>
        </div>
        <nav className="grid gap-3 text-sm font-bold text-white/78 sm:grid-cols-2">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        (c) {new Date().getFullYear()} MelazaUSA LLC. All rights reserved.
      </div>
    </footer>
  );
}
