import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Public sample and client project cards for Melaza without private financial, admin, or internal client data.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f8f3fb_52%,#fff7df_100%)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Clients / Projects" title="Public project examples without private client data." level="h1">
            These cards show the kind of businesses Melaza can support while keeping private financial, admin, and internal client information off the public site.
          </SectionHeading>
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
