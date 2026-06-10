export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = [
    "inline-flex h-12 items-center justify-center rounded-2xl px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#370066]/25",
    variant === "primary"
      ? "bg-[#370066] text-white shadow-lg shadow-[#370066]/20 hover:bg-[#4c1d95]"
      : "border border-[#370066]/20 bg-white text-[#370066] hover:border-[#E8AA13] hover:bg-[#E8AA13]/10",
    className,
  ].join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
