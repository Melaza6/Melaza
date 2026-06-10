import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  "Founder-driven, practical consulting",
  "U.S. and Colombia business perspective",
  "Technology connected to real workflows",
  "Veteran-owned, leadership-oriented tone",
];

export function WhyMelaza() {
  return (
    <section className="bg-melaza-twilight py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading eyebrow="Why Melaza" title="A modern consulting partner for growing small businesses.">
          Melaza helps owners move from scattered tools and informal habits toward organized, scalable systems.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <Card key={reason} className="bg-white/88">
              <p className="text-base font-black text-melaza-indigo">{reason}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
