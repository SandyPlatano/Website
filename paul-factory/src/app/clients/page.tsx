import type { Metadata } from "next";
import HeroSection from "@/components/hero-section";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import LogoCloud from "@/components/logo-cloud";
import CTAButton from "@/components/cta-button";
import { clients } from "@/content/clients";
import { testimonials } from "@/content/testimonials";

export const metadata: Metadata = {
  title: "Clients",
  description: "Partners and clients across SaaS, retail, culture, and lifestyle. See testimonials from long-term collaborations built on trust.",
};

export default function ClientsPage() {
  return (
    <>
      <HeroSection
        eyebrow="Clients"
        title="Placeholder partners across SaaS, retail, culture, and lifestyle."
        description="This page mirrors the client showcase of GTMwithFerm with typography-based logos sourced from open networks."
        image={{
          src: "https://images.unsplash.com/photo-1604079628040-94301bb21b71?auto=format&fit=crop&w=960&q=80",
          alt: "Conference meeting room with people collaborating.",
          caption: "Photography via Unsplash (placeholder)"
        }}
        actions={[]}
      />

      <PageSection>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Partners"
            title="A cross-industry selection."
            description="Replace these placeholder names with your actual clients. Each tile links to a neutral resource today."
          />
          <LogoCloud clients={clients} />
        </div>
      </PageSection>

      <PageSection variant="muted">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Long-term collaborations thrive on trust."
            description="Testimonials are repeated from the home page to echo the GTMwithFerm layout."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-pf-charcoal/10 bg-white/70 p-6 shadow-card">
                <p className="text-xs uppercase tracking-[0.35em] text-pf-muted">{testimonial.client}</p>
                <p className="mt-4 text-sm text-pf-charcoal/80">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold">
                  {testimonial.name} — <span className="text-pf-muted">{testimonial.role}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Join the roster"
            title="Let’s design your next launch together."
            description="Tell us about your goals, timelines, and team structure. We’ll reply with a placeholder collaboration plan ready for customization."
            align="center"
          />
        </div>
      </PageSection>
    </>
  );
}

