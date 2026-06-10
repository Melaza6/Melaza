import Card from "../common/Card";
import SectionHeading from "../common/SectionHeading";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Practical consulting and digital support for small businesses."
        >
          Melaza combines business process thinking, documentation, technology, and
          implementation so owners can move from scattered operations to clear systems.
        </SectionHeading>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#370066] text-xs font-black text-white">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-black text-[#370066]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
