import type { Metadata } from "next";
import { CTASection } from "@/components/home/CTASection";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Melaza's purpose, values, founder-driven approach, and U.S. / Colombia business focus.",
};

const values = ["Learning", "Growth", "Structure", "Technology", "Trust", "Practical execution"];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f8f3fb_52%,#fff7df_100%)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="About Melaza" title="Created to help businesses become clearer, stronger, and easier to run." level="h1">
            Melaza was created to help businesses move from informal operations to organized, scalable systems. We combine business process consulting, technology, digital tools, and practical strategy to help owners make better decisions.
          </SectionHeading>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <Card>
            <h2 className="text-2xl font-black text-melaza-indigo">Mission</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Help small businesses organize operations, improve workflows, build useful digital tools, and prepare for sustainable growth.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-black text-melaza-indigo">Vision</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Build a bilingual-ready consulting company that connects business structure, technology, and human-centered growth across the U.S. and Colombia.
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-black text-melaza-indigo">Approach</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Founder-driven, leadership-oriented consulting with a veteran-owned professional tone and a focus on practical implementation.
            </p>
          </Card>
        </div>
      </section>
      <section className="bg-melaza-twilight py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Values" title="Serious about structure. Human about growth." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value}>
                <p className="text-lg font-black text-melaza-indigo">{value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
