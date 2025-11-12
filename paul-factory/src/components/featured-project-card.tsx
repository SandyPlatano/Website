"use client";

import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "@/components/SpotlightCard";
import CTAButton from "@/components/cta-button";
import { cn } from "@/lib/cn";
import type { Project } from "@/content/projects";

type Highlight = {
  title: string;
  description: string;
};

type FeaturedProjectCardProps = {
  project: Project;
  highlights?: Highlight[];
  hideTags?: boolean;
};

export default function FeaturedProjectCard({ project, highlights = [], hideTags = false }: FeaturedProjectCardProps) {
  return (
    <SpotlightCard
      spotlightColor="rgba(125, 211, 252, 0.45)"
      className="relative overflow-hidden border-sky-400/40 bg-[#03111F] text-white shadow-[0_40px_120px_-45px_rgba(56,189,248,0.65)]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-90 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 20% -10%, rgba(56, 189, 248, 0.35), transparent 55%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4), transparent 45%), radial-gradient(circle at 50% 110%, rgba(14, 165, 233, 0.55), transparent 30%)"
        }}
        aria-hidden
      />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="border-b border-white/10 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-6">
            <div className="flex-1 space-y-3">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-sky-500/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-sky-300">
                  Featured
                </span>
                {!hideTags && project.tags.length > 0 && (
                  <span className="text-[0.65rem] uppercase tracking-[0.4em] text-sky-200/60">
                    {project.tags[0]}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                  {project.title}
                </h3>
                {project.title.startsWith("Clay") && (
                  <div className="flex items-center shrink-0">
                    <Image
                      src="/clay-logo/Clay_Logo_Primary_Blk.png"
                      alt="Clay logo"
                      width={79}
                      height={25}
                      className="h-[18px] w-auto object-contain brightness-0 invert"
                      unoptimized
                    />
                  </div>
                )}
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-sky-100/80 sm:text-base">
                {project.summary}
              </p>
            </div>
            
            {/* Compact Image Badge */}
            <div className="flex-shrink-0">
              <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-sky-400/30 bg-white/5 sm:h-24 sm:w-24">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={96}
                  height={96}
                  className="h-full w-full object-contain p-2"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {highlights.length > 0 && (
            <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              {highlights.length === 1 ? (
                <div>
                  {highlights[0].title && (
                    <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-sky-200/80">
                      {highlights[0].title}
                    </p>
                  )}
                  <p className="text-sm leading-relaxed text-sky-50/90">{highlights[0].description}</p>
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-3">
                  {highlights.map((highlight) => (
                    <div key={highlight.title}>
                      <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-sky-200/80">
                        {highlight.title}
                      </p>
                      <p className="text-xs leading-relaxed text-sky-50/90">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              {project.websiteUrl && (
                <CTAButton
                  href={project.websiteUrl}
                  label="View live project"
                  className="border-white/20 bg-white/90 text-[#03111F] hover:bg-white"
                />
              )}
            </div>
            <Link
              href={project.image.creditUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[0.7rem] uppercase tracking-[0.4em] text-sky-200/50 hover:text-sky-200/80 transition-colors"
            >
              {project.image.credit} ↗
            </Link>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

