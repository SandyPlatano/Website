"use client";

import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";

const tools = ["Cursor", "Apify", "ChatGPT", "Claude", "Clay", "Cognism", "Gong Engage", "Salesforce", "Superwhisper", "Tella", "Vidyard", "ZoomInfo"];

const toolLogos: LogoItem[] = tools.map((tool) => ({
  node: (
    <span className="rounded-full border border-pf-charcoal/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pf-muted whitespace-nowrap">
      {tool}
    </span>
  ),
  title: tool,
  ariaLabel: tool
}));

export default function ToolsetSection() {
  return (
    <PageSection innerClassName="py-12 md:py-16 lg:py-20">
      <div className="space-y-8 md:space-y-10">
        <SectionHeading
          eyebrow="Toolset"
          title="Tool stack"
        />
        <div className="rounded-3xl border border-pf-charcoal/10 bg-white/70 p-6 md:p-8 lg:p-10 shadow-card">
          <LogoLoop
            logos={toolLogos}
            speed={90}
            gap={24}
            logoHeight={32}
            pauseOnHover
            scaleOnHover
            ariaLabel="Tool stack logos"
            className="py-2"
          />
        </div>
      </div>
    </PageSection>
  );
}

