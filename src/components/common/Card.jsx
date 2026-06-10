export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 transition hover:-translate-y-1 hover:border-[#E8AA13]/60 hover:shadow-xl hover:shadow-[#370066]/10 ${className}`}
    >
      {children}
    </div>
  );
}
