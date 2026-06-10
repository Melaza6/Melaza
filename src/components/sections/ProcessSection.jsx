import SectionHeading from "../common/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Map the business goals, current workflows, pain points, documents, and tools already in use.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Create a practical roadmap with priorities, responsibilities, milestones, and success measures.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Implement the website, workflow, documentation, dashboard, or system improvements with feedback loops.",
  },
  {
    number: "04",
    title: "Scale",
    description:
      "Refine the system as the business grows, keeping operations clear and easier to manage.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A clear path from scattered work to usable systems."
        >
          Melaza starts with the way your business actually works, then builds the
          structure and digital support around that reality.
        </SectionHeading>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6"
            >
              <p className="text-sm font-black text-[#DB6773]">{step.number}</p>
              <h3 className="mt-4 text-xl font-black text-[#370066]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
