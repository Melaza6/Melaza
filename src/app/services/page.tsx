import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/home/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Business process consulting, web development, IT systems consulting, SecureStart, SecureScale, and administrative systems support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f8f3fb_52%,#fff7df_100%)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="Consulting and digital systems for businesses ready to get organized." level="h1">
            Melaza offers practical support across operations, technology, security readiness, documentation, and public digital presence.
          </SectionHeading>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
