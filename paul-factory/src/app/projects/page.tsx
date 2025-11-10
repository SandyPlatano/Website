"use client";

import { useMemo, useState } from "react";
import HeroSection from "@/components/hero-section";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import AutoGrid from "@/components/auto-grid";
import ProjectCard from "@/components/project-card";
import CTAButton from "@/components/cta-button";
import { featuredProjects, moreProjects } from "@/content/projects";

const filterTags = [
  { label: "All", value: "All" },
  { label: "Inbound", value: "Inbound" },
  { label: "CRM enrichment", value: "RevOps" },
  { label: "Outbound", value: "Outbound" },
  { label: "Custom app", value: "Web App" }
] as const;

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projects = useMemo(() => {
    if (activeFilter === "All") {
      return [...featuredProjects, ...moreProjects];
    }
    return [...featuredProjects, ...moreProjects].filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <>
      <HeroSection
        eyebrow="Projects"
        title="Clay Automations and Custom Built Tools"
        description="Browse certifications, custom-built revenue tools, crafted for teams who want dependable go to market systems."
        image={{
          src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=960&q=80",
          alt: "Hands collaborating over a tablet showing workflow diagrams."
        }}
        actionsLogo={{
          src: "/Clay%20Logo/Clay_Logo_Primary_Blk.svg",
          alt: "Clay logo",
          width: 200,
          height: 63,
          className: "h-8 md:h-10"
        }}
        actions={[{ href: "/contact", label: "Contact Ferm" }]}
      />

      <PageSection>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Filters"
            title="Browse projects by focus area."
            description="Drill into Clay builds, automation experiments, and enablement tools that support marketing, sales, and success."
          />
          <div className="flex flex-wrap gap-3">
            {filterTags.map((tag) => (
              <button
                key={tag.value}
                type="button"
                onClick={() => setActiveFilter(tag.value)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${
                  activeFilter === tag.value
                    ? "border-pf-charcoal bg-pf-charcoal text-pf-cream"
                    : "border-pf-charcoal/20 text-pf-muted hover:border-pf-charcoal hover:text-pf-charcoal"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection variant="muted">
        <div className="space-y-14">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Projects
          </h2>
          <AutoGrid minItemWidth="20rem">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AutoGrid>
        </div>
      </PageSection>
    </>
  );
}

