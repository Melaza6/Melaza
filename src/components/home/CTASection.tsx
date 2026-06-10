import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,#fff_0%,#f8f3fb_55%,#fff7df_100%)] px-6 py-12 text-center shadow-glow sm:px-10">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-melaza-rose">Start the conversation</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-melaza-indigo sm:text-4xl">
          Ready to build better systems for your business?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Tell Melaza what you are trying to organize, improve, or build. We will help shape the next practical step.
        </p>
        <Button href="/contact" className="mt-8" variant="accent">Request a Consultation</Button>
      </div>
    </section>
  );
}
