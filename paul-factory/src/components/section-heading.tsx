import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
  size?: "default" | "small" | "large";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "light",
  size = "default"
}: SectionHeadingProps) {
  const titleSizeClass = {
    small: "text-xl font-semibold leading-tight md:text-2xl",
    default: "text-2xl font-semibold leading-tight md:text-3xl",
    large: "text-3xl font-semibold leading-tight md:text-4xl"
  }[size];

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
      <h2 className={cn(
        titleSizeClass,
        "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent font-bold"
      )}>
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base md:text-lg",
            tone === "dark" ? "text-white/80" : "text-gray-700",
            align === "center" ? "mx-auto" : undefined
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

