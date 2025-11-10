import HeroSection from "@/components/hero-section";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import AutoGrid from "@/components/auto-grid";
import ServiceCard from "@/components/service-card";
import CTAButton from "@/components/cta-button";
import { services } from "@/content/services";

const processSteps = [
  {
    title: "Discover & Diagnose",
    description:
      "We audit your GTM stack, map handoffs, and identify the highest-impact automation or UX opportunities inside Clay, your CRM, and analytics tools."
  },
  {
    title: "Design & Prototype",
    description:
      "I translate insights into system diagrams, UI prototypes, and playbooks that align sales, marketing, and success around a shared workflow."
  },
  {
    title: "Automate & Integrate",
    description:
      "From Clay and Smartlead sequences to custom APIs, we implement, test, and document every integration so it slots neatly into your stack."
  },
  {
    title: "Enable & Iterate",
    description:
      "I stay close to your operators with training, dashboards, and iteration cadences that preserve momentum and surface new experiments."
  }
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Services"
        title="Designing, automating, and operationalizing your GTM engine."
        description="From Next.js product surfaces to Clay workflows and revenue operations, I partner with teams that want dependable systems and human-centered experiences."
        image={{
          src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=960&q=80",
          alt: "Team aligning around a roadmap with laptops and strategy boards."
        }}
        actions={[{ href: "/contact", label: "Request a playbook" }]}
      />

      <PageSection>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Expertise"
            title="Where we can collaborate."
            description="Every engagement blends strategy, design, and automation so your revenue teams stay aligned and ship faster."
          />
          <AutoGrid>
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </AutoGrid>
        </div>
      </PageSection>

      <PageSection variant="muted">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Process"
            title="A rhythm built for modern GTM teams."
            description="Each phase keeps stakeholders synced while giving us room to experiment, validate, and document the work."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-pf-charcoal/10 bg-white/80 p-8 shadow-card transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <p className="text-xs uppercase tracking-[0.4em] text-pf-muted">Step 0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-pf-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Let’s collaborate"
            title="Ready to map your next activation?"
            description="Share your goals and current stack, and I’ll draft a roadmap covering automation, UX, and enablement milestones."
            align="center"
          />
          <CTAButton href="/contact" label="Start the conversation" />
        </div>
      </PageSection>
    </>
  );
}

