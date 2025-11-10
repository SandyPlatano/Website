import { cn } from "@/lib/cn";

type SquircleCardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "light" | "dark";
};

export default function SquircleCard({
  children,
  className,
  tone = "light",
  ...props
}: SquircleCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.25rem] border transition-transform duration-500",
        tone === "light"
          ? "border-pf-charcoal/10 bg-white shadow-card"
          : "border-pf-charcoal bg-pf-charcoal text-pf-cream",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-[2.25rem] before:border before:border-dashed before:border-white/20 before:opacity-30",
        "hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

