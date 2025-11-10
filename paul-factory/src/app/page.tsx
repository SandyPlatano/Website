import type { JSX } from "react";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import CTAButton from "@/components/cta-button";
import RotatingText from "@/components/rotating-text";
import HeroSection from "@/components/hero-section";
import FeaturedProjectCard from "@/components/featured-project-card";
import { featuredProjects } from "@/content/projects";
import Image from "next/image";

export default function HomePage() {
  const inboundProject = featuredProjects.find((project) => project.slug === "clay-inbound-automation");
  const supportingProjects = featuredProjects.filter((project) => project.slug !== "clay-inbound-automation").slice(0, 3);

  const inboundHighlights = [
    {
      title: "Signal routing",
      description:
        "Qualifies inbound submissions instantly with Clay enrichment, form metadata, and intent signals before routing to HubSpot."
    },
    {
      title: "Revenue-ready context",
      description:
        "Builds a complete account record—buying committee, firmographics, and product usage—without asking the prospect twice."
    },
    {
      title: "Team activation",
      description:
        "Pushes prioritized alerts to Slack, email, and HubSpot queues so marketing, sales, and success respond with the right play."
    }
  ];

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
          { href: "#projects", label: "View work" },
          { href: "/contact", label: "Contact Ferm", variant: "ghost" }
        ]}
      />

      <PageSection id="projects" innerClassName="py-16 md:py-20 lg:py-24">
        <div className="space-y-14">
          <SectionHeading
            title="Clay certifications and GTM builds"
            description="Automation playbooks, enrichment workflows, and enablement tools crafted for marketing, sales, and success teams."
            align="center"
          />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
            {inboundProject ? (
              <FeaturedProjectCard project={inboundProject} highlights={inboundHighlights} />
            ) : null}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {supportingProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="compact" />
            ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection bleed className="bg-primary-background py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-content-wide rounded-3xl bg-white/70 px-6 py-12 shadow-card md:px-10 md:py-16 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-stretch">
            <div className="w-full max-w-3xl space-y-6 rounded-3xl border border-secondary-dark/10 bg-white/80 p-8 shadow-inner md:max-w-5xl lg:max-w-none lg:h-full">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary-dark/60">Inside the lab</p>
                <h3 className="text-2xl font-semibold uppercase tracking-[0.2em] text-secondary-dark">Learn more about Ferm</h3>
                <p className="text-sm leading-relaxed text-secondary-dark/80 md:text-base">
                  I combine revenue operations, automation design, and storytelling to launch GTM systems that scale with the team.
                  Dive into current experiments, certifications, and the GTM philosophies that keep me curious.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-secondary-dark/10 bg-secondary-dark/5 p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-secondary-dark/60">Current focus</p>
                  <p className="mt-2 text-base font-semibold text-secondary-dark">Improving in Cursor</p>
                </div>
                <div className="rounded-2xl border border-secondary-dark/10 bg-secondary-dark/5 p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-secondary-dark/60">Recent win</p>
                  <p className="mt-2 text-base font-semibold text-secondary-dark">Built this website with Cursor</p>
                </div>
              </div>

              <ul className="space-y-2 text-sm leading-relaxed text-secondary-dark/80 md:text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-secondary-dark" aria-hidden />
                  <span>See how automation-first playbooks help activate SDR and CS teams faster.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-secondary-dark" aria-hidden />
                  <span>Explore the frameworks I use to translate messy data into actionable sequences.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-secondary-dark" aria-hidden />
                  <span>Get a snapshot of my certifications, favorite tools, and collaboration style.</span>
                </li>
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/about" label="About Ferm" className="uppercase tracking-[0.3em]" />
                <CTAButton
                  href="/contact"
                  label="Contact"
                  variant="ghost"
                  className="uppercase tracking-[0.3em]"
                />
              </div>
            </div>
            <div className="relative order-last h-72 overflow-hidden rounded-3xl border border-secondary-dark/10 bg-secondary-dark/5 shadow-inner sm:order-none sm:h-96 lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1451188502541-13943edb6acb?auto=format&fit=crop&w=900&q=80"
                alt="Ferm working through workflow experiments on a whiteboard."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
            </div>
          </div>
        </div>
      </PageSection>

    </>
  );
}

