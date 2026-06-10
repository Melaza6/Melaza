import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "accent";
};

export function Button({ children, href, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-melaza-indigo text-white shadow-lg shadow-melaza-indigo/20 hover:bg-melaza-purple",
    secondary: "border border-melaza-indigo/15 bg-white text-melaza-indigo hover:border-melaza-poppy hover:bg-melaza-poppy/10",
    accent: "bg-melaza-poppy text-melaza-indigo shadow-lg shadow-melaza-poppy/20 hover:bg-[#f3bc35]",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-2xl px-5 text-sm font-black transition focus:outline-none focus:ring-2 focus:ring-melaza-indigo/25 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
