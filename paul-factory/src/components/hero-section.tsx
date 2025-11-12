import type { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/container";
import CTAButton from "@/components/cta-button";
import { cn } from "@/lib/cn";

type HeroSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  actions?: Array<{ href: string; label: string; variant?: "primary" | "ghost"; className?: string }>;
  actionsLogo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  className?: string;
  containerClassName?: string;
};

export default function HeroSection({
  eyebrow,
  title,
  description,
  image,
  actions,
  actionsLogo,
  className,
  containerClassName
}: HeroSectionProps) {
  return (
    <section className={cn("bg-pf-cream", className)}>
      <Container className={cn("grid gap-12 pt-24 pb-16 md:grid-cols-[1.4fr,1fr] md:items-center md:gap-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24", containerClassName)}>
        <div className="space-y-6 md:space-y-8">
          {eyebrow || actionsLogo ? (
            <div className="flex flex-wrap items-center gap-4">
              {eyebrow ? (
                <p className="text-xs uppercase tracking-[0.4em] text-pf-muted">{eyebrow}</p>
              ) : null}
              {actionsLogo ? (
                <Image
                  src={actionsLogo.src}
                  alt={actionsLogo.alt}
                  width={actionsLogo.width}
                  height={actionsLogo.height}
                  className={cn("h-8 w-auto md:h-10", actionsLogo.className)}
                  priority
                />
              ) : null}
            </div>
          ) : null}
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          {description ? (
            <div className="max-w-2xl space-y-3 text-lg text-pf-muted">
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          ) : null}
          {actions?.length ? (
            <div className="flex flex-wrap gap-4">
              {actions.map((action) => (
                <CTAButton key={action.href} href={action.href} label={action.label} variant={action.variant} className={action.className} />
              ))}
            </div>
          ) : null}
        </div>
        {image ? (
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[3rem] bg-pf-muted/30 shadow-card">
              <Image
                src={image.src}
                alt={image.alt}
                width={960}
                height={1280}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

