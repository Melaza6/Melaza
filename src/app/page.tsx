import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyMelaza } from "@/components/home/WhyMelaza";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-4xl text-2xl font-black leading-tight text-melaza-indigo">
            MelazaUSA LLC is publicly branded as Melaza: a growing consulting and digital solutions company built to help small businesses move from informal operations to organized, scalable systems.
          </p>
          <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            From planning to launch, Melaza helps businesses create digital tools, organize workflows, and publish professional online systems.
          </p>
        </div>
      </section>
      <ServicesPreview />
      <WhyMelaza />
      <IndustriesPreview />
      <ProcessSection />
      <CTASection />
    </>
  );
}
