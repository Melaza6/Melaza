export default function SectionHeading({ eyebrow, title, children, align = "left", tone = "dark" }) {
  const titleClass = tone === "light" ? "text-white" : "text-[#370066]";
  const bodyClass = tone === "light" ? "text-white/78" : "text-slate-600";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#DB6773]">
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {children ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${bodyClass}`}>{children}</p>
      ) : null}
    </div>
  );
}
