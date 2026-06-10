import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "Industries Melaza supports, including retail, vape shops, food trucks, restaurants, construction, security, services, and cross-border operations.",
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f8f3fb_52%,#fff7df_100%)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Industries" title="Support for small businesses with practical operating needs." level="h1">
            Melaza adapts process, technology, and digital systems work to the realities of each business type.
          </SectionHeading>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {industries.map((industry) => (
            <Card key={industry.name}>
              <h2 className="text-xl font-black text-melaza-indigo">{industry.name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
            </Card>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
