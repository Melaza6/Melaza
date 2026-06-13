import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Public project examples for Melaza that show practical digital support without exposing private client or business data.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f8f3fb_52%,#fff7df_100%)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Clients / Projects" title="Public project examples without private client data." level="h1">
            These examples show the kind of practical digital support Melaza can provide while keeping private client data, internal financial data, admin access, and confidential business information off the public site.
          </SectionHeading>
          <p className="mt-6 max-w-3xl rounded-3xl border border-melaza-poppy/30 bg-white/80 p-5 text-sm font-semibold leading-7 text-slate-600">
            Public examples are limited to general service descriptions, project structure, and launch planning. They do not expose private client records, internal dashboards, financial details, admin credentials, or confidential business operations.
          </p>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
