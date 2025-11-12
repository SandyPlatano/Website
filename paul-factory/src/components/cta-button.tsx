"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import ClickSpark from "@/components/click-spark";

type CTAButtonProps = {
  href: string;
  label: string;
  className?: string;
  variant?: "primary" | "ghost";
  download?: boolean;
};

export default function CTAButton({ href, label, className, variant = "primary", download }: CTAButtonProps) {
  const sparkColor = variant === "primary" ? "#f86d54" : "#161528";
  const isAnchorLink = href.startsWith("#");
  
  const buttonClasses = cn(
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] transition-colors",
    variant === "primary"
      ? "border-pf-accent bg-pf-accent text-pf-ink hover:bg-pf-accent-bold hover:border-pf-accent-bold"
      : "border-pf-charcoal/20 text-pf-charcoal hover:border-pf-charcoal hover:bg-white",
    className
  );
  
  return (
    <ClickSpark
      sparkColor={sparkColor}
      sparkCount={12}
      sparkRadius={25}
    >
      {isAnchorLink || download ? (
        <a
          href={href}
          className={buttonClasses}
          download={download}
        >
          {label}
        </a>
      ) : (
        <Link
          href={href}
          className={buttonClasses}
        >
          {label}
        </Link>
      )}
    </ClickSpark>
  );
}

