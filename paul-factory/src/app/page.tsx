import type { JSX } from "react";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import AutoGrid from "@/components/auto-grid";
import ProjectCard from "@/components/project-card";
import CTAButton from "@/components/cta-button";
import RotatingText from "@/components/rotating-text";
import HeroSection from "@/components/hero-section";
import { featuredProjects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title={
          <>
            Building go-to-market systems that{" "}
            <RotatingText
              texts={["drive results.", "remove friction.", "amplify teams."]}
              splitBy="words"
              rotationInterval={3000}
              staggerDuration={0.04}
              mainClassName="inline-flex text-pf-accent"
            />
          </>
        }
        description="Hello! I'm Fermin, an aspiring go-to-market engineer."
        image={{
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=960&q=80",
          alt: "A specialist mapping out automated workflows on a desk with a laptop and tablet."
        }}
        actions={[
          { href: "/projects", label: "View projects" },
          { href: "/contact", label: "Contact Ferm", variant: "ghost" }
        ]}
      />

      <PageSection innerClassName="py-16 md:py-20 lg:py-24">
        <div className="space-y-14">
          <SectionHeading
            title="Clay certifications and GTM builds"
            description="Automation playbooks, enrichment workflows, and enablement tools crafted for marketing, sales, and success teams."
            align="center"
          />
          <AutoGrid minItemWidth="20rem">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AutoGrid>
          <div className="flex justify-center">
            <CTAButton href="/projects" label="All projects" variant="ghost" />
          </div>
        </div>
      </PageSection>

      <PageSection bleed className="bg-primary-background py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-content-wide rounded-3xl bg-white/70 px-6 py-16 shadow-card md:px-10 md:py-20 lg:px-16 lg:py-24">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary-dark/70">Toolset</p>
              <h2 className="text-3xl font-black uppercase text-secondary-dark md:text-4xl">Tool stack</h2>
              <p className="text-base leading-relaxed text-secondary-dark/80 md:text-lg">
                My stack spans Cursor, Apify, ChatGPT, Claude, Clay, Cognism, Gong Engage, Salesforce, Superwhisper,
                Tella, Vidyard, and ZoomInfo.
              </p>
            </div>

            <CTAButton
              href="/contact"
              label="Contact Ferm"
              variant="primary"
              className="uppercase tracking-[0.3em]"
            />
          </div>
        </div>
      </PageSection>

    </>
  );
}

