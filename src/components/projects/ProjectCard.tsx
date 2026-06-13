import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-melaza-rose">{project.industry}</p>
          <h2 className="mt-3 text-2xl font-black text-melaza-indigo">{project.name}</h2>
        </div>
        <span className="rounded-full bg-melaza-poppy/15 px-3 py-1 text-xs font-black text-melaza-indigo">
          {project.status}
        </span>
      </div>
      <p className="mt-4 text-sm font-semibold text-slate-500">{project.location}</p>
      <p className="mt-3 rounded-2xl bg-melaza-poppy/10 px-4 py-3 text-sm font-bold text-melaza-indigo">
        {project.serviceType}
      </p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{project.description}</p>
      <ul className="mt-5 grid gap-2 text-sm text-slate-600">
        {project.servicesProvided.map((service) => (
          <li key={service} className="rounded-2xl bg-slate-50 px-4 py-3">
            {service}
          </li>
        ))}
      </ul>
      <Button href="/contact" className="mt-6 w-full" variant="secondary">View Project</Button>
    </Card>
  );
}
