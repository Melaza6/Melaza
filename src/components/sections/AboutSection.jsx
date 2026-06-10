import SectionHeading from "../common/SectionHeading";

const principles = [
  "Practical solutions, not overcomplicated systems",
  "Relationship-based growth and clear communication",
  "Process improvement connected to real business goals",
  "Consulting and technology working together",
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <SectionHeading eyebrow="About" title="Rooted in service. Focused on usable systems.">
            MelazaUSA LLC was created to help businesses learn, grow, and bloom
            through better systems, stronger workflows, and practical digital solutions.
          </SectionHeading>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
            We support small businesses with a U.S. and Colombia perspective, combining
            consulting, web development, IT systems thinking, process improvement, and
            documentation support. The goal is simple: help owners see their business
            clearly, organize the work, and build tools that support the next stage.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#370066]/10 bg-[#370066] p-6 text-white shadow-xl shadow-[#370066]/15">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E8AA13]">How we work</p>
          <div className="mt-6 grid gap-3">
            {principles.map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
