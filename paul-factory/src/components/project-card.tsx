import SquircleCard from "@/components/squircle-card";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { RibbonIcon } from "@/components/icons/ribbon";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "compact";
  className?: string;
};

export default function ProjectCard({ project, variant = "featured", className }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <SquircleCard
        className={cn(
          "flex h-full flex-col overflow-hidden",
          variant === "compact"
            ? "rounded-[1.6rem] border-pf-charcoal/12 shadow-lg before:rounded-[1.6rem]"
            : "rounded-[2.4rem]",
          className
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-pf-muted/20",
            variant === "compact"
              ? "aspect-[5/7] rounded-b-none md:aspect-[4/5]"
              : "aspect-[4/5]"
          )}
        >
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
        </div>
        <div
          className={cn(
            "flex flex-1 flex-col",
            variant === "compact" ? "gap-3 p-5" : "gap-4 p-8"
          )}
        >
          <div className="space-y-2">
            <h3
              className={cn(
                "inline-flex items-center gap-2 font-semibold text-pf-charcoal",
                variant === "compact" ? "text-lg" : "text-2xl"
              )}
            >
              {project.title.startsWith("Clay") ? (
                <RibbonIcon className="h-6 w-6 flex-shrink-0 text-sky-500" aria-hidden="true" />
              ) : null}
              <span>{project.title}</span>
            </h3>
            <p
              className={cn(
                "text-pf-muted",
                variant === "compact" ? "text-[0.9rem]" : "text-base"
              )}
            >
              {project.summary}
            </p>
          </div>
          <ul
            className={cn(
              "mt-auto flex flex-wrap text-pf-muted",
              variant === "compact"
                ? "gap-1 text-[0.62rem] uppercase tracking-[0.22em]"
                : "gap-2 text-xs uppercase tracking-[0.3em]"
            )}
          >
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-pf-charcoal/15 px-3 py-1">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </SquircleCard>
    </Link>
  );
}

