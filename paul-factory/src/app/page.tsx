import type { JSX } from "react";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import CTAButton from "@/components/cta-button";
import RotatingText from "@/components/rotating-text";
import HeroSection from "@/components/hero-section";
import ToolsetSection from "@/components/toolset-section";
import { featuredProjects } from "@/content/projects";

export default function HomePage() {
  const allProjects = featuredProjects;

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
        description="Hello! I&apos;m Fermin, an aspiring go-to-market engineer."
        image={{
          src: "/convention-hall.jpeg",
          alt: "Fermin at the IFA Convention in Las Vegas"
        }}
        actions={[
          { href: "#projects", label: "View work" }
        ]}
      />

      <PageSection id="projects" innerClassName="py-12 md:py-16 lg:py-20">
        <div className="space-y-10 md:space-y-12">
          <SectionHeading
            title="Clay certifications and GTM builds"
            description="Automation playbooks, enrichment workflows, and enablement tools crafted for marketing, sales, and success teams."
            align="center"
            size="small"
          />
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:gap-8">
              {allProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection id="about" bleed className="bg-primary-background py-12 md:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-content-wide rounded-3xl bg-white/70 px-6 py-10 shadow-card md:px-10 md:py-12 lg:px-16 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-1 lg:items-stretch">
            <div className="w-full max-w-3xl space-y-6 rounded-3xl border border-sky-400/40 bg-[#03111F] p-6 text-white md:max-w-5xl md:p-10 md:space-y-8 lg:max-w-none lg:h-full lg:p-12">
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/75">About</p>
                  <h3 className="text-2xl font-semibold uppercase tracking-[0.2em] text-white md:text-3xl">About Ferm</h3>
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-sm leading-relaxed text-sky-100/90 md:text-base">
                      Hey, I&apos;m Fermin (Ferm), formerly a personal trainer and massage therapist turned BDR, now an aspiring go-to-market engineer focused on systems that let teams spend more time with customers.
                    </p>
                    <p className="text-sm leading-relaxed text-sky-100/90 md:text-base">
                      I&apos;m particularly passionate about helping teams escape the busywork trap so they can focus on what matters: genuine problem-solving and relationship building.
                    </p>
                    <p className="text-sm leading-relaxed text-sky-100/90 md:text-base">
                      You can catch me competing in beach volleyball, hiking or dancing bachata.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 md:p-5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-sky-100/70">Current focus</p>
                    <p className="mt-2 text-base font-semibold text-white md:text-lg">Learning Cursor</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 md:p-5">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-sky-100/70">Recent win</p>
                    <p className="mt-2 text-base font-semibold text-white md:text-lg">Built this website with Cursor</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row pt-1">
                  <CTAButton 
                    href="/resume.pdf" 
                    label="Download Resume" 
                    className="border-white/20 bg-white/90 text-[#03111F] hover:bg-white uppercase tracking-[0.3em]"
                    download
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <ToolsetSection />
    </>
  );
}

