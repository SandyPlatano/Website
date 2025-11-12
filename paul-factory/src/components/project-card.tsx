import SquircleCard from "@/components/squircle-card";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import CTAButton from "@/components/cta-button";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "compact";
  className?: string;
};

export default function ProjectCard({ project, variant = "featured", className }: ProjectCardProps) {
  const isCertification = project.image.src.includes("certification");
  const isFeatured = project.slug === "clay-inbound-automation";

  return (
    <SquircleCard
      className={cn(
        "group relative flex h-full flex-col overflow-hidden",
        isFeatured
          ? "rounded-[1.6rem] border-sky-400/40 bg-[#03111F] text-white shadow-[0_40px_120px_-45px_rgba(56,189,248,0.65)] before:rounded-[1.6rem] before:bg-[#03111F]"
          : variant === "compact"
            ? "rounded-[1.6rem] border-pf-charcoal/12 shadow-lg before:rounded-[1.6rem]"
            : "rounded-[2.4rem]",
        className
      )}
    >
      {isFeatured && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-90 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle at 20% -10%, rgba(56, 189, 248, 0.35), transparent 55%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.4), transparent 45%), radial-gradient(circle at 50% 110%, rgba(14, 165, 233, 0.55), transparent 30%)"
          }}
          aria-hidden
        />
      )}
      {isFeatured ? (
        <>
          <div className="relative z-10 block">
            <div className="relative overflow-hidden bg-white flex items-center justify-center p-4 aspect-[5/7] rounded-b-none md:aspect-[4/5]">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={1200}
                height={1500}
                className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
          </div>
          <div className="relative z-10 flex flex-1 flex-col gap-3 p-5">
            {project.websiteUrl ? (
              <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg font-semibold text-white">
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
                  <p className="text-[0.9rem] text-sky-100/80">
                    {project.summary}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-semibold text-white">
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
                <p className="text-[0.9rem] text-sky-100/80">
                  {project.summary}
                </p>
              </div>
            )}
            {project.websiteUrl && (
              <div className="mt-auto pt-2">
                <CTAButton
                  href={project.websiteUrl}
                  label="View live project"
                  className="w-full border-white/20 bg-white/90 text-[#03111F] hover:bg-white"
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="block">
            <div
              className={cn(
                "relative overflow-hidden",
                isCertification ? "bg-white flex items-center justify-center" : "bg-pf-muted/20",
                isCertification && variant === "compact" ? "p-4" : isCertification ? "p-4" : "",
                variant === "compact"
                  ? "aspect-[5/7] rounded-b-none md:aspect-[4/5]"
                  : "aspect-[4/5]"
              )}
            >
              {isCertification ? (
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={1200}
                  height={1500}
                  className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                  priority={variant === "featured"}
                />
              ) : (
                <>
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={1200}
                    height={1500}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={variant === "featured"}
                  />
                  <div
                    className={cn(
                      "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white/80",
                      variant === "compact" ? "p-3 text-[0.7rem]" : "p-4 text-xs"
                    )}
                  >
                    Photo credit: {project.image.credit}
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className={cn(
              "flex flex-1 flex-col",
              variant === "compact" ? "gap-3 p-5" : "gap-4 p-8"
            )}
          >
            {project.websiteUrl ? (
              <Link href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="block">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3
                      className={cn(
                        "font-semibold text-pf-charcoal",
                        variant === "compact" ? "text-lg" : "text-2xl"
                      )}
                    >
                      {project.title}
                    </h3>
                    {project.title.startsWith("Clay") && (
                      <div className="flex items-center shrink-0">
                        <Image
                          src="/clay-logo/Clay_Logo_Primary_Blk.png"
                          alt="Clay logo"
                          width={79}
                          height={25}
                          className="h-[18px] w-auto object-contain"
                          unoptimized
                        />
                      </div>
                    )}
                    {project.slug === "revenue-research-app" && (
                      <Image
                        src="/cursor-brand-assets/logos/cube-2d-black.svg"
                        alt="Cursor logo"
                        width={24}
                        height={24}
                        className="h-6 w-6 flex-shrink-0"
                      />
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-pf-muted",
                      variant === "compact" ? "text-[0.9rem]" : "text-base"
                    )}
                  >
                    {project.summary}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3
                    className={cn(
                      "font-semibold text-pf-charcoal",
                      variant === "compact" ? "text-lg" : "text-2xl"
                    )}
                  >
                    {project.title}
                  </h3>
                  {project.title.startsWith("Clay") && (
                    <div className="flex items-center shrink-0">
                      <Image
                        src="/clay-logo/Clay_Logo_Primary_Blk.png"
                        alt="Clay logo"
                        width={79}
                        height={25}
                        className="h-[18px] w-auto object-contain"
                        unoptimized
                      />
                    </div>
                  )}
                  {project.slug === "revenue-research-app" && (
                    <Image
                      src="/cursor-brand-assets/logos/cube-2d-black.svg"
                      alt="Cursor logo"
                      width={24}
                      height={24}
                      className="h-6 w-6 flex-shrink-0"
                    />
                  )}
                </div>
                <p
                  className={cn(
                    "text-pf-muted",
                    variant === "compact" ? "text-[0.9rem]" : "text-base"
                  )}
                >
                  {project.summary}
                </p>
              </div>
            )}
            {project.websiteUrl && (
              <div className="mt-auto pt-2">
                <CTAButton
                  href={project.websiteUrl}
                  label="View live project"
                  variant="ghost"
                  className="w-full"
                />
              </div>
            )}
          </div>
        </>
      )}
    </SquircleCard>
  );
}

