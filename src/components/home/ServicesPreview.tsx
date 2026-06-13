import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data/services";

export function ServicesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Services" title="Practical support for owners who need clearer systems.">
            Melaza helps small businesses create digital tools, organize workflows, manage projects, and launch online systems from idea to deployment.
          </SectionHeading>
          <Button href="/services" variant="secondary">View All Services</Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Card key={service.title}>
              <h3 className="text-xl font-black text-melaza-indigo">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
