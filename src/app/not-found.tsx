import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-melaza-rose">Page not found</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-melaza-indigo">
          This Melaza page is not available.
        </h1>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Return to the public app home page or contact Melaza to find the right next step.
        </p>
        <Button href="/" className="mt-8" variant="accent">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
