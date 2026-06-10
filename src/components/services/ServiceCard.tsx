import { Card } from "@/components/ui/Card";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-melaza-indigo text-sm font-black text-white">
        {service.title.slice(0, 2)}
      </div>
      <h2 className="mt-5 text-xl font-black text-melaza-indigo">{service.title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
      <p className="mt-4 text-sm leading-7 text-slate-500">{service.detail}</p>
    </Card>
  );
}
