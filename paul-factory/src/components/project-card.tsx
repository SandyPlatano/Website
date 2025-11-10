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
          variant === "compact" ? "rounded-[1.8rem]" : "rounded-[2.4rem]",
          className
        )}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-pf-muted/20">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={1200}
            height={1500}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority={variant === "featured"}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-xs text-white/80">
            Photo credit: {project.image.credit}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-8">
          <div className="space-y-2">
            <h3 className="inline-flex items-center gap-2 text-2xl font-semibold text-pf-charcoal">
              {project.title.startsWith("Clay") ? (
                <RibbonIcon className="h-6 w-6 flex-shrink-0 text-sky-500" aria-hidden="true" />
              ) : null}
              <span>{project.title}</span>
            </h3>
            <p className="text-sm text-pf-muted">{project.summary}</p>
          </div>
          <ul className="mt-auto flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-pf-muted">
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

