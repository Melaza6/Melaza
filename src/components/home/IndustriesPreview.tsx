import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/lib/data/industries";

export function IndustriesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Industries" title="Built for local businesses with real operating needs.">
          From retail to construction and security, Melaza adapts systems work to the business model in front of us.
        </SectionHeading>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {industries.slice(0, 6).map((industry) => (
            <Card key={industry.name}>
              <h3 className="text-xl font-black text-melaza-indigo">{industry.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>
            </Card>
          ))}
        </div>
        <Button href="/industries" className="mt-8" variant="secondary">Explore Industries</Button>
      </div>
    </section>
  );
}
