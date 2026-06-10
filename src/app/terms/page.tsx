import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms placeholder for the Melaza public app.",
};

export default function TermsPage() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Terms" title="Terms of Use" level="h1" />
        <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
          <p>
            This page is a launch-ready placeholder for Melaza's public website terms. Final legal language should be reviewed before production release.
          </p>
          <p>
            Public website content is provided for general information about Melaza services and does not create a consulting agreement by itself.
          </p>
          <p>
            Project scope, timelines, pricing, and responsibilities should be confirmed in a separate written agreement.
          </p>
        </div>
      </div>
    </section>
  );
}
