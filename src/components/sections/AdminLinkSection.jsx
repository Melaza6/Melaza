import { melazaNetworkUrl } from "../../data/navigation";

export default function AdminLinkSection() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
          <p className="text-sm font-semibold text-slate-600">
            Melaza Network is our private admin operating system for client, project,
            document, task, and relationship management.
          </p>
          <a
            href={melazaNetworkUrl}
            className="mt-3 inline-flex text-sm font-bold text-[#370066] transition hover:text-[#EF5D1E]"
          >
            Admin
          </a>
        </div>
      </div>
    </section>
  );
}
