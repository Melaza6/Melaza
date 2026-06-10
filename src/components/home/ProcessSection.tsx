import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  ["Discover", "Map goals, workflows, constraints, tools, documents, and current operating habits."],
  ["Design", "Create a practical roadmap with priorities, responsibilities, milestones, and success measures."],
  ["Build", "Implement websites, workflows, documentation, dashboards, forms, or internal tools."],
  ["Scale", "Improve the system over time so growth stays organized instead of chaotic."],
];

export function ProcessSection() {
  return (
    <section className="bg-[linear-gradient(135deg,#370066_0%,#4c1d95_64%,#A287A0_100%)] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title="A clear path from informal work to organized systems." tone="light">
          Melaza starts with business reality, then designs and builds support that people can actually use.
        </SectionHeading>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([title, description]) => (
            <li key={title} className="rounded-3xl border border-white/15 bg-white/10 p-6">
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
