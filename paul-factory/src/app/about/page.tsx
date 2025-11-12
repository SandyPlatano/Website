"use client";

import HeroSection from "@/components/hero-section";
import PageSection from "@/components/page-section";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";

const tools = ["Cursor", "Apify", "ChatGPT", "Claude", "Clay", "Cognism", "Gong Engage", "Salesforce", "Superwhisper", "Tella", "Vidyard", "ZoomInfo"];

const toolLogos: LogoItem[] = tools.map((tool) => ({
  node: (
    <span className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white whitespace-nowrap hover:bg-white/20 transition-colors">
      {tool}
    </span>
  ),
  title: tool,
  ariaLabel: tool
}));

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About"
        title="About Ferm"
        description={
          <>
            <p>I&apos;m Fermin Andujar (Ferm), formerly a personal trainer and massage therapist turned BDR, now an aspiring go-to-market engineer focused on systems that let teams spend more time with customers.</p>
            <p>I&apos;m particularly passionate about helping teams escape the busywork trap so they can focus on what matters: genuine problem-solving and relationship building.</p>
            <p>You can catch me competing in beach volleyball, hiking or dancing bachata.</p>
          </>
        }
        image={{
          src: "/forest-portrait.jpeg",
          alt: "Portrait of Fermin Andujar"
        }}
        actions={[
          { href: "/about", label: "About Ferm", className: "border-white/20 bg-white/90 text-[#03111F] hover:bg-white uppercase tracking-[0.3em]" }
        ]}
        containerClassName="!pb-6 md:!pb-8 lg:!pb-10"
      />

      <PageSection innerClassName="!pt-8 pb-20 md:!pt-10 md:pb-24 lg:!pt-12 lg:pb-28">
        <div className="mx-auto w-full max-w-[280px] space-y-6 rounded-3xl border border-sky-400/40 bg-[#03111F] p-6 text-white sm:max-w-sm md:max-w-2xl md:space-y-8 md:p-10 lg:max-w-4xl lg:p-12">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white md:text-2xl">Tool stack</h2>
          </div>
          <div className="mt-6 w-full overflow-hidden">
            <LogoLoop
              logos={toolLogos}
              speed={90}
              gap={24}
              logoHeight={32}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#03111F"
              ariaLabel="Tool stack logos"
              className="py-2"
              width="100%"
            />
          </div>
        </div>
      </PageSection>
    </>
  );
}

