import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

const serviceOptions = [
  "Business Process Consulting",
  "Web Development & Digital Solutions",
  "IT Systems & Workflow Support",
  "SecureStart",
  "SecureScale",
  "U.S. / Colombia Business Support",
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[linear-gradient(135deg,#370066_0%,#4c1d95_65%,#A287A0_100%)] py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Ready to organize your business and build better systems?"
            tone="light"
          >
            Tell us what you are trying to improve. We will help shape a practical
            next step for your operations, website, workflow, or digital tools.
          </SectionHeading>
          <div className="mt-8 grid gap-3">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold">Business inquiries</p>
              <p className="mt-2 text-sm text-white/75">hello@melazausa.com</p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
              <p className="font-semibold">Best fit</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                Small businesses that need clearer systems, cleaner documentation,
                and digital support that matches real daily work.
              </p>
            </div>
          </div>
        </div>

        <form
          className="rounded-[2rem] border border-white/20 bg-white p-5 text-slate-900 shadow-2xl shadow-slate-950/20"
          onSubmit={(event) => event.preventDefault()}
        >
          {/* TODO: Connect this frontend-only form to a CRM, email, or backend endpoint. */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Business Name" placeholder="Company name" />
            <Field label="Email" type="email" placeholder="you@company.com" />
            <Field label="Phone" type="tel" placeholder="Optional" />
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-[#370066]">
            Service Needed
            <select className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-[#370066] focus:bg-white focus:ring-2 focus:ring-[#370066]/10">
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-[#370066]">
            Message
            <textarea
              className="min-h-32 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-[#370066] focus:bg-white focus:ring-2 focus:ring-[#370066]/10"
              placeholder="Briefly describe your business, challenge, or project."
            />
          </label>
          <Button type="submit" className="mt-5 w-full">
            Send Inquiry
          </Button>
          <p className="mt-3 text-center text-xs font-medium text-slate-500">
            This form is ready for frontend styling and can be connected to email,
            CRM, or a backend endpoint.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-[#370066]">
      {label}
      <input
        type={type}
        className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none transition focus:border-[#370066] focus:bg-white focus:ring-2 focus:ring-[#370066]/10"
        placeholder={placeholder}
      />
    </label>
  );
}
