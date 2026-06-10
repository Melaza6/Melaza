import logo from "../../images/A logo design for th.png";
import Button from "../common/Button";

const outcomes = [
  "Clear workflows",
  "Useful digital tools",
  "Better client intake",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,#E8AA13_0,#E8AA1300_26%),linear-gradient(135deg,#ffffff_0%,#f8f3fb_46%,#fff7df_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-[#E8AA13]/40 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#370066] shadow-sm">
            Small-business systems for the U.S. and Colombia
          </p>
          <p className="mt-3 inline-flex rounded-full border border-[#370066]/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#DB6773] shadow-sm">
            Veteran-Owned
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-[#370066] sm:text-5xl lg:text-6xl">
            Consulting, websites, and workflows that help small businesses bloom.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            MelazaUSA LLC turns scattered operations into practical systems: cleaner
            processes, stronger documentation, useful web tools, and a business
            foundation owners can actually run.
          </p>
          <p className="mt-4 text-base font-semibold italic text-[#DB6773]">
            "Together we learn, we grow, we bloom."
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Request a Consultation</Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#370066]/10 bg-white/80 px-4 py-3 text-sm font-bold text-[#370066] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white bg-white/85 p-5 shadow-2xl shadow-[#370066]/15">
            <div className="rounded-[1.5rem] bg-[#370066] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E8AA13]">
                    Melaza operating method
                  </p>
                  <p className="mt-2 text-2xl font-black">Organize. Improve. Build.</p>
                </div>
                <img src={logo} alt="MelazaUSA LLC logo" className="h-20 w-20 rounded-3xl object-cover" />
              </div>
              <div className="mt-8 grid gap-3">
                {[
                  ["01", "Map the current business reality"],
                  ["02", "Clean up workflows and documentation"],
                  ["03", "Build the digital tools that support growth"],
                ].map(([step, item]) => (
                  <div key={item} className="flex gap-4 rounded-2xl bg-white/10 p-4">
                    <span className="text-sm font-black text-[#E8AA13]">{step}</span>
                    <p className="text-sm font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <Stat value="6" label="Service lanes" />
              <Stat value="2" label="Markets connected" />
              <Stat value="1" label="Clear system" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
      <p className="text-2xl font-black text-[#370066]">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
    </div>
  );
}
