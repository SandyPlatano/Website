"use client";

import LogoLoop from "@/components/logo-loop";
import CTAButton from "@/components/cta-button";

const toolLogos = [
  {
    title: "Cursor",
    node: (
      <span className="inline-flex items-center rounded-full bg-secondary-dark px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-text-secondary">
        Cursor
      </span>
    )
  },
  { title: "Apify", src: "https://cdn.simpleicons.org/apify/0B4DF1", alt: "Apify logo" },
  {
    title: "ChatGPT",
    node: (
      <span className="inline-flex items-center rounded-full bg-[#74aa9c] px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
        ChatGPT
      </span>
    )
  },
  {
    title: "Claude",
    node: (
      <span className="inline-flex items-center rounded-full bg-[#1f1f1f] px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
        Claude
      </span>
    )
  },
  { title: "Clay", src: "https://cdn.simpleicons.org/clay/FF5E5B", alt: "Clay logo" },
  { title: "Cognism", src: "https://cdn.simpleicons.org/cognism/702963", alt: "Cognism logo" },
  {
    title: "Gong Engage",
    node: (
      <span className="inline-flex items-center rounded-full bg-[#ff1f6d] px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
        Gong Engage
      </span>
    )
  },
  { title: "Salesforce", src: "https://cdn.simpleicons.org/salesforce/00A1E0", alt: "Salesforce logo" },
  {
    title: "Superwhisper",
    node: (
      <span className="inline-flex items-center rounded-full bg-[#6c63ff] px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white">
        Superwhisper
      </span>
    )
  },
  { title: "Tella", src: "https://cdn.simpleicons.org/tella/5D55FF", alt: "Tella logo" },
  { title: "Vidyard", src: "https://cdn.simpleicons.org/vidyard/40B759", alt: "Vidyard logo" },
  { title: "ZoomInfo", src: "https://cdn.simpleicons.org/zoominfo/EC1C24", alt: "ZoomInfo logo" }
];

const coreSkills = [
  "A/B testing",
  "Account scoring",
  "Lead enrichment",
  "Sales engagement automation",
  "Workflow orchestration",
  "Lifecycle analytics"
];

export function Toolset() {
  return (
    <section id="toolset" className="section-padding bg-primary-background">
      <div className="content-width">
        <div className="mx-auto w-full max-w-content-wide rounded-3xl bg-white/70 px-6 py-20 shadow-card md:px-10 md:py-24 lg:px-16 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
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

              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary-dark/70">Core skills</p>
                <div className="flex flex-wrap gap-3">
                  {coreSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-full border border-secondary-dark/10 bg-secondary-dark/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-secondary-dark/5 blur-3xl" aria-hidden />
              <LogoLoop
                logos={toolLogos}
                speed={90}
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                className="rounded-3xl border border-secondary-dark/10 bg-white/70 p-6 shadow-inner"
                ariaLabel="Tool logos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Toolset;

