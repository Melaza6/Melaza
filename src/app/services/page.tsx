import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/ServiceCard";
import { CTASection } from "@/components/home/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Practical digital tools, workflow organization, project support, website setup, and deployment support for small businesses.",
};

const coreStrengths = [
  {
    title: "App Creation",
    description:
      "We design and build practical digital tools, websites, dashboards, portals, mobile-ready systems, and deployment-ready apps that help businesses operate more clearly.",
  },
  {
    title: "Project Management",
    description:
      "We organize projects, define requirements, create timelines, track progress, document workflows, coordinate launch steps, and guide ideas from planning to deployment.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f8f3fb_52%,#fff7df_100%)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Services" title="Practical digital solutions and project support for small businesses." level="h1">
            Melaza helps small businesses create digital tools, organize workflows, manage projects, and launch online systems from idea to deployment. Our services are delivered through two core strengths: app creation and project management.
          </SectionHeading>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Core Strengths" title="Built Through Two Core Strengths." />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {coreStrengths.map((strength) => (
              <article key={strength.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-black text-melaza-indigo">{strength.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{strength.description}</p>
              </article>
            ))}
          </div>
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
