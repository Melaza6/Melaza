import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70 ${className}`}>
      {children}
    </div>
  );
}
