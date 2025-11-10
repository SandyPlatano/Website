import Link from "next/link";
import { cn } from "@/lib/cn";

type CTAButtonProps = {
  href: string;
  label: string;
  className?: string;
  variant?: "primary" | "ghost";
};

export default function CTAButton({ href, label, className, variant = "primary" }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em]",
        variant === "primary"
          ? "border-pf-accent bg-pf-accent text-pf-ink hover:bg-pf-accent-bold hover:border-pf-accent-bold"
          : "border-pf-charcoal/20 text-pf-charcoal hover:border-pf-charcoal hover:bg-white",
        className
      )}
    >
      {label}
    </Link>
  );
}

