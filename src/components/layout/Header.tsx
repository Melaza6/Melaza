import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/layout/MobileNav";
import { integrationConfig } from "@/lib/integrations";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/melaza-home-icon-88.webp"
            alt="Melaza logo mark"
            width={44}
            height={44}
            className="h-11 w-11 rounded-2xl object-contain"
          />
          <span className="min-w-0">
            <span className="block text-xl font-black tracking-tight text-melaza-indigo">Melaza</span>
            <span className="hidden text-xs font-bold uppercase tracking-[0.18em] text-slate-500 sm:block">
              Business Systems * Digital Solutions * Growth Consulting
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-melaza-indigo">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button href={integrationConfig.melazaNetworkUrl} variant="secondary">
            Client/Admin Login
          </Button>
          <Button href="/contact">Work With Melaza</Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
