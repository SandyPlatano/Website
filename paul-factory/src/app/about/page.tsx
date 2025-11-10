import HeroSection from "@/components/hero-section";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import CTAButton from "@/components/cta-button";

const skills = ["A/B Testing", "Account Scoring", "API Integration", "Prompt Engineering", "Workflow Automation"];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="About"
        title="Blending automation with digital empathy."
        description="I’m Fermin Andujar (Ferm), formerly a personal trainer and massage therapist turned BDR, now an aspiring go-to-market engineer focused on systems that let teams spend more time with customers."
        image={{
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=960&q=80",
          alt: "Portrait of a professional smiling in a modern workspace."
        }}
        actions={[
          { href: "/resume.pdf", label: "Download resume" },
          { href: "/contact", label: "Contact", variant: "ghost" }
        ]}
      />

      <PageSection>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Toolset"
              title="Tool stack"
              description="My stack spans Cursor, Apify, ChatGPT, Claude, Clay, Cognism, Gong Engage, Salesforce, Superwhisper, Tella, Vidyard, and ZoomInfo."
            />
            <CTAButton href="/contact" label="Contact Ferm" />
          </div>
          <div className="rounded-3xl border border-pf-charcoal/10 bg-white/70 p-8 shadow-card">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-pf-muted">Core skills</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-pf-charcoal/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-pf-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}

