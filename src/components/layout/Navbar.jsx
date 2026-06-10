import logo from "../../images/A logo design for th.png";
import Button from "../common/Button";
import { navigationItems } from "../../data/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="MelazaUSA LLC logo"
            className="h-11 w-11 rounded-2xl object-cover shadow-sm"
          />
          <div className="min-w-0">
            <p className="truncate text-base font-black tracking-tight text-[#370066]">
              MelazaUSA LLC
            </p>
            <p className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#A287A0] sm:block">
              Consulting + Digital Systems
            </p>
          </div>
          <span className="hidden rounded-full border border-[#E8AA13]/40 bg-[#E8AA13]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#370066] xl:inline-flex">
            Veteran-Owned
          </span>
        </a>

        <ul className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition hover:text-[#370066]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href="#contact" className="hidden md:inline-flex">
          Request a Consultation
        </Button>
      </nav>
    </header>
  );
}
