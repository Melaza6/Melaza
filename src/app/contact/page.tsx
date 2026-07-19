import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadIntakeForm } from "@/components/contact/LeadIntakeForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a Melaza consultation for business systems, digital tools, process consulting, or international support.",
};

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
                Owners who need help organizing operations, improving workflows, planning digital tools, or building a stronger public digital presence.
              </p>
            </div>
          </div>
          <LeadIntakeForm />
        </div>
      </section>
    </>
  );
}
