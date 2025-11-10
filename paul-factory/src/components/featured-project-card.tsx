"use client";

import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "@/components/SpotlightCard";
import CTAButton from "@/components/cta-button";
import type { Project } from "@/content/projects";

type Highlight = {
  title: string;
  description: string;
};

type FeaturedProjectCardProps = {
  project: Project;
  highlights?: Highlight[];
};

export default function FeaturedProjectCard({ project, highlights = [] }: FeaturedProjectCardProps) {
  return (
    <SpotlightCard
      spotlightColor="rgba(125, 211, 252, 0.45)"
      className="relative overflow-hidden border-sky-400/40 bg-[#03111F] p-8 text-white shadow-[0_40px_120px_-45px_rgba(56,189,248,0.65)] md:p-12"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-90 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 20% -10%, rgba(56, 189, 248, 0.35), transparent 55%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4), transparent 45%), radial-gradient(circle at 50% 110%, rgba(14, 165, 233, 0.55), transparent 30%)"
        }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:gap-16">
        <div className="space-y-6 lg:w-[55%]">
          <div className="space-y-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.45em] text-sky-200/75">
              Featured inbound automation flow
            </p>
            <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h3>
            <p className="text-base leading-relaxed text-sky-100/90 sm:text-lg">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[0.75rem] uppercase tracking-[0.32em] text-sky-100/80">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-sky-200/40 bg-white/10 px-4 py-1 text-[0.68rem] font-semibold backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href={`/projects/${project.slug}`}
              label="See flow build"
              className="border-white/20 bg-white/90 text-[#03111F] hover:bg-white"
            />
            <CTAButton
              href="/contact"
              label="Discuss automation"
              variant="ghost"
              className="border-white/30 text-white hover:border-white hover:bg-white/10"
            />
          </div>

          <div className="space-y-2 text-xs uppercase tracking-[0.4em] text-sky-100/60">
            <span>Photo credit:</span>{" "}
            <Link
              href={project.image.creditUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-[0.4em] text-sky-200 hover:text-white"
            >
              {project.image.credit}
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative hidden h-full w-full max-w-md overflow-hidden rounded-[2rem] border border-sky-200/40 bg-sky-950/50 shadow-[0_30px_90px_-40px_rgba(59,130,246,0.75)] sm:block">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={700}
              height={900}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="sm:hidden">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={420}
              height={540}
              className="h-56 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {highlights.length ? (
        <div className="relative z-10 mt-10 space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-lg">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.5em] text-sky-100/80">
                More information
              </p>
              <h4 className="text-lg font-semibold text-white">What this automation unlocks</h4>
            </div>
            <p className="text-sm text-sky-100/80 sm:max-w-sm">
              Built with Clay, HubSpot, and Slack to accelerate inbound response, enrichment, and enablement.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-sky-100/70">
                  {highlight.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-sky-50/90">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </SpotlightCard>
  );
}

