import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy placeholder for the Melaza public app.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Privacy" title="Privacy Policy" level="h1" />
        <div className="mt-8 space-y-5 text-sm leading-7 text-slate-600">
          <p>
            This page is a public-app placeholder for MelazaUSA LLC, publicly branded as Melaza. It should be reviewed before launch with the final contact, analytics, CRM, Supabase, Firebase, and appointment-booking configuration.
          </p>
          <p>
            Melaza should collect only the information needed to respond to inquiries, provide services, and improve the public website experience.
          </p>
          <p>
            Do not submit private financial, admin, or internal business data through public forms unless a secure intake process has been provided.
          </p>
        </div>
      </div>
    </section>
  );
}
