import CTAButton from "@/components/cta-button";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";

export default function NotFound() {
  return (
    <PageSection variant="muted">
      <div className="flex flex-col items-center gap-10 text-center">
        <span className="rounded-full border border-pf-charcoal/15 bg-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-pf-muted">
          404
        </span>
        <SectionHeading
          align="center"
          title="This page has been reassigned."
          description="We can’t find the destination you were looking for. Let’s get you back to the work that matters."
        />
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="/" label="Back to homepage" />
        </div>
      </div>
    </PageSection>
  );
}

