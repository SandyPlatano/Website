import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import Container from "@/components/container";

type PageSectionProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  variant?: "default" | "muted" | "dark";
  bleed?: boolean;
  innerClassName?: string;
};

export default function PageSection({
  as: Component = "section",
  className,
  children,
  variant = "default",
  bleed = false,
  innerClassName,
  ...props
}: PageSectionProps) {
  const backgroundClasses =
    variant === "muted"
      ? "bg-pf-stone"
      : variant === "dark"
        ? "bg-pf-charcoal text-pf-cream"
        : "bg-transparent";

  return (
    <Component className={cn(backgroundClasses, className)} {...props}>
      {bleed ? children : (
        <Container className={cn("py-20 md:py-24 lg:py-28", innerClassName)}>{children}</Container>
      )}
    </Component>
  );
}

