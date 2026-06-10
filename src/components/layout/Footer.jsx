import logo from "../../images/A logo design for th.png";
import { navigationItems, melazaNetworkUrl } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#370066] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="MelazaUSA LLC logo"
              className="h-12 w-12 rounded-2xl object-cover"
            />
            <div>
              <p className="font-black">MelazaUSA LLC</p>
              <p className="text-sm text-white/70">Together we learn, we grow, we bloom.</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            Consulting, business systems, web development, documentation, workflow support,
            and practical digital solutions for small businesses in the U.S. and Colombia.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E8AA13]">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-white/78">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E8AA13]">Company</p>
          <ul className="mt-4 space-y-2 text-sm text-white/78">
            <li>Austin, TX</li>
            <li>Bogota and Cali connection</li>
            <li>English / Spanish support</li>
            <li>
              <a href={melazaNetworkUrl} className="transition hover:text-white">
                Admin
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/60">
        (c) {new Date().getFullYear()} MelazaUSA LLC. All rights reserved.
      </div>
    </footer>
  );
}
