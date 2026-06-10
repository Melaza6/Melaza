import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  level?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, children, align = "left", tone = "dark", level = "h2" }: SectionHeadingProps) {
  const isLight = tone === "light";
  const HeadingTag = level;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-sm font-black uppercase tracking-[0.22em] ${isLight ? "text-melaza-poppy" : "text-melaza-rose"}`}>
        {eyebrow}
      </p>
      <HeadingTag className={`mt-3 text-3xl font-black tracking-tight sm:text-4xl ${isLight ? "text-white" : "text-melaza-indigo"}`}>
        {title}
      </HeadingTag>
      {children ? (
        <p className={`mt-4 text-base leading-8 sm:text-lg ${isLight ? "text-white/78" : "text-slate-600"}`}>
          {children}
        </p>
      ) : null}
    </div>
  );
}
