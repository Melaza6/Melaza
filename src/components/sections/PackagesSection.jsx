import Button from "../common/Button";
import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";

const packages = [
  {
    label: "Starter",
    title: "SecureStart",
    description:
      "A focused setup package for businesses that need structure, documentation, basic digital presence, and operational readiness.",
    points: ["Workflow and SOP kit", "Website and email foundation", "Compliance readiness checklist"],
  },
  {
    label: "Growth",
    title: "SecureScale",
    description:
      "Ongoing systems support for businesses that need stronger process control, reporting, automation, and monthly improvement.",
    points: ["KPI and operations dashboard", "Workflow automation support", "Monthly strategy and systems review"],
    featured: true,
  },
  {
    label: "Cross-border",
    title: "U.S. / Colombia Support",
    description:
      "Business organization, digital structure, and bilingual documentation support for teams connected across both markets.",
    points: ["Bilingual process documents", "Cross-market workflow planning", "Digital structure for distributed work"],
  },
];

export default function PackagesSection() {
  return (
    <section id="packages" className="bg-[#F8FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Packages"
          title="Start with the support level that matches your stage."
        >
          Each package combines consulting and implementation, so the plan does
          not stay on paper.
        </SectionHeading>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((item) => (
            <Card
              key={item.title}
              className={item.featured ? "border-[#370066] shadow-xl shadow-[#370066]/10" : ""}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#DB6773]">
                {item.label}
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#370066]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <ul className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
                {item.points.map((point) => (
                  <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
              <Button href="#contact" className="mt-6 w-full">
                Ask About {item.title}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
