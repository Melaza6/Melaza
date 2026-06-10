import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a Melaza consultation for business systems, digital tools, process consulting, or U.S. / Colombia support.",
};

const businessTypes = [
  "Retail shop",
  "Vape shop",
  "Food truck",
  "Restaurant",
  "Construction company",
  "Security company",
  "Professional services",
  "Local service business",
  "Cross-border operation",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#370066_0%,#4c1d95_64%,#A287A0_100%)] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Contact" title="Request a consultation with Melaza." tone="light" level="h1">
              Melaza works with small businesses, entrepreneurs, and growing teams that need better systems, stronger digital tools, and practical growth support.
            </SectionHeading>
            <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-5">
              <p className="font-black">Good fit for</p>
              <p className="mt-2 text-sm leading-7 text-white/75">
                Owners who need help organizing operations, improving workflows, preparing compliance-ready systems, or building a stronger public digital presence.
              </p>
            </div>
          </div>
          <form className="rounded-[2rem] border border-white/20 bg-white p-5 text-slate-900 shadow-2xl shadow-slate-950/20">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Business name" name="businessName" placeholder="Company name" />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <Field label="Phone" name="phone" type="tel" placeholder="Optional" />
              <Field label="Country" name="country" placeholder="United States or Colombia" />
              <Select label="Type of business" name="businessType" options={businessTypes} />
            </div>
            <Select label="Service interested in" name="service" options={services.map((service) => service.title)} className="mt-4" />
            <label className="mt-4 grid gap-2 text-sm font-bold text-melaza-indigo">
              Message
              <textarea
                name="message"
                className="min-h-36 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-melaza-indigo focus:bg-white focus:ring-2 focus:ring-melaza-indigo/10"
                placeholder="Briefly describe what you want to organize, improve, or build."
              />
            </label>
            <button
              type="button"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-melaza-poppy px-5 text-sm font-black text-melaza-indigo shadow-lg shadow-melaza-poppy/20 transition hover:bg-[#f3bc35] focus:outline-none focus:ring-2 focus:ring-melaza-indigo/25"
            >
              Request a Consultation
            </button>
            <p className="mt-3 text-center text-xs font-medium text-slate-500">
              This public form is ready for a future CRM, Supabase, Firebase, or appointment-booking integration.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder: string }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-melaza-indigo">
      {label}
      <input
        name={name}
        type={type}
        className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-melaza-indigo focus:bg-white focus:ring-2 focus:ring-melaza-indigo/10"
        placeholder={placeholder}
      />
    </label>
  );
}

function Select({ label, name, options, className = "" }: { label: string; name: string; options: string[]; className?: string }) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-melaza-indigo ${className}`}>
      {label}
      <select
        name={name}
        className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-melaza-indigo focus:bg-white focus:ring-2 focus:ring-melaza-indigo/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
