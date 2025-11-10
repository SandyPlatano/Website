import type { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/container";
import CTAButton from "@/components/cta-button";
import { cn } from "@/lib/cn";

type HeroSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  actions?: Array<{ href: string; label: string; variant?: "primary" | "ghost" }>;
  actionsLogo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  className?: string;
};

export default function HeroSection({
  eyebrow,
  title,
  description,
  image,
  actions,
  actionsLogo,
  className
}: HeroSectionProps) {
  return (
    <section className={cn("bg-pf-cream", className)}>
      <Container className="grid gap-12 py-24 md:grid-cols-[1.4fr,1fr] md:items-center md:gap-16 lg:py-28">
        <div className="space-y-6">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.4em] text-pf-muted">{eyebrow}</p>
          ) : null}
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          {description ? <p className="max-w-2xl text-lg text-pf-muted">{description}</p> : null}
          {(actionsLogo || actions?.length) ? (
            <div className="space-y-4">
              {actionsLogo ? (
                <Image
                  src={actionsLogo.src}
                  alt={actionsLogo.alt}
                  width={actionsLogo.width}
                  height={actionsLogo.height}
                  className={cn("h-10 w-auto", actionsLogo.className)}
                  priority
                />
              ) : null}
              {actions?.length ? (
                <div className="flex flex-wrap gap-4">
                  {actions.map((action) => (
                    <CTAButton key={action.href} href={action.href} label={action.label} variant={action.variant} />
                  ))}
                </div>
              ) : null}
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
            {image.caption ? <p className="text-xs uppercase tracking-[0.4em] text-pf-muted">{image.caption}</p> : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}

