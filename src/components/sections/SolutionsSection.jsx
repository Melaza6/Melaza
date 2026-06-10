import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";
import { proofPoints, solutions } from "../../data/solutions";

export default function SolutionsSection() {
  return (
    <section id="solutions" className="bg-[#F8FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Work / Solutions"
            title="Built around the real problems small businesses run into."
          >
            We help companies organize what they already do, then build the right
            digital tools, documents, workflows, and web presence around that reality.
          </SectionHeading>
          <div className="grid gap-3 sm:grid-cols-2">
            {proofPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-[#E8AA13]/35 bg-white p-4 text-sm font-semibold text-[#370066]">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.title} className="h-full">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#DB6773]">
                {solution.audience}
              </p>
              <h3 className="mt-3 text-xl font-black text-[#370066]">{solution.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{solution.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
