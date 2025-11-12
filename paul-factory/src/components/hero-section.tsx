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
      <Container className={cn("grid gap-8 pt-20 pb-12 md:grid-cols-[1.2fr,1fr] md:items-center md:gap-12 md:pt-28 md:pb-16 lg:gap-16 lg:pt-36 lg:pb-20", containerClassName)}>
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
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
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl lg:leading-tight">{title}</h1>
          {description ? (
            <div className="max-w-2xl space-y-3 text-lg leading-relaxed text-pf-muted">
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          ) : null}
          {actions?.length ? (
            <div className="flex flex-wrap gap-4 pt-2">
              {actions.map((action) => (
                <CTAButton key={action.href} href={action.href} label={action.label} variant={action.variant} className={action.className} />
              ))}
            </div>
          ) : null}
        </div>
        {image ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[3rem] bg-pf-muted/30 shadow-card lg:max-w-lg">
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

