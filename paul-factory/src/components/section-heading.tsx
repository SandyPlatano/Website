import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "light"
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-xs uppercase tracking-[0.35em]",
            tone === "dark" ? "text-pf-cream/70" : "text-pf-muted"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base md:text-lg",
            tone === "dark" ? "text-pf-cream/70" : "text-pf-muted",
            align === "center" ? "mx-auto" : undefined
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

