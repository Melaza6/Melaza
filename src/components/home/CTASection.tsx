import { Button } from "@/components/ui/Button";
import { LeadIntakeForm } from "@/components/contact/LeadIntakeForm";
import type { PublicSiteSection } from "@/lib/public-site-content";

export function CTASection({ section }: { section?: PublicSiteSection }) {
  const title = section?.title || "Ready to build better systems for your business?";
  const body =
    section?.body ||
    "Tell Melaza what you are trying to organize, improve, or build. We will help shape the next practical step.";
  const ctaLabel = section?.ctaLabel || "Request a Consultation";
  const ctaUrl = section?.ctaUrl || "/contact";

  return (
    <section className="bg-[linear-gradient(135deg,#fff_0%,#f8f3fb_55%,#fff7df_100%)] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="pt-2">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-melaza-rose">Start the conversation</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-melaza-indigo sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
            {body}
          </p>
          <Button href={ctaUrl} className="mt-8" variant="accent">{ctaLabel}</Button>
        </div>
        <LeadIntakeForm />
      </div>
    </section>
  );
}
