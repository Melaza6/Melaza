import Image from "next/image";
import { Button } from "@/components/ui/Button";
import type { PublicSiteSection } from "@/lib/public-site-content";

export function Hero({ section }: { section?: PublicSiteSection }) {
  const title = section?.title || "Build better systems. Grow stronger businesses.";
  const subtitle =
    section?.subtitle ||
    "Melaza helps small businesses organize operations, improve processes, build modern digital tools, and prepare for sustainable growth across the U.S. and Colombia.";
  const body = section?.body || "Together we learn, together we grow, together we bloom.";
  const primaryCta = section?.ctaLabel || "Work With Melaza";
  const primaryCtaUrl = section?.ctaUrl || "/contact";

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#E8AA13_0,#E8AA1300_28%),linear-gradient(135deg,#ffffff_0%,#f8f3fb_48%,#fff7df_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-melaza-poppy/40 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-melaza-indigo shadow-sm">
            Bilingual-ready consulting for the U.S. and Colombia
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-melaza-indigo sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {subtitle}
          </p>
          <p className="mt-4 text-base font-semibold italic text-melaza-rose">
            {body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryCtaUrl} variant="accent">{primaryCta}</Button>
            <Button href="/services" variant="secondary">Explore Services</Button>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white bg-white/86 p-5 shadow-glow">
          <div className="rounded-[1.5rem] bg-melaza-indigo p-6 text-white">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-melaza-poppy">
                  Public app, future-ready systems
                </p>
                <h2 className="mt-4 text-3xl font-black">Consulting + digital execution</h2>
              </div>
              <Image
                src="/melaza-hero-logo.png"
                alt="Melaza logo"
                width={96}
                height={96}
                className="h-24 w-24 rounded-3xl object-cover opacity-90"
              />
            </div>
            <div className="mt-8 grid gap-3">
              {["App planning and prototyping", "Digital tools and websites", "Workflow organization", "Project launch support"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <Stat value="2" label="Markets" />
            <Stat value="6" label="Services" />
            <Stat value="1" label="Clear path" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <p className="text-2xl font-black text-melaza-indigo">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
    </div>
  );
}
