import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import Container from "@/components/container";
import { legalContent } from "@/content/legal";

export default function LegalPage() {
  return (
    <PageSection bleed className="bg-white">
      <Container className="space-y-12 py-24">
        <SectionHeading
          eyebrow="Legal notice"
          title="Legal placeholder information for the replica experience."
          description="Replace this content with your verified legal data before publishing. Structure mirrors the GTMwithFerm legal page."
        />

        <div className="space-y-10 text-sm leading-relaxed text-pf-charcoal/80">
          <section className="space-y-2">
            <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-pf-muted">Publisher</h3>
            <p>{legalContent.companyName}</p>
            <p>{legalContent.registration}</p>
            <p>{legalContent.publicationDirector}</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-pf-muted">Hosting</h3>
            <p>{legalContent.hosting.name}</p>
            <p>{legalContent.hosting.address}</p>
            <a href={legalContent.hosting.website} className="underline" target="_blank" rel="noreferrer noopener">
              {legalContent.hosting.website}
            </a>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-pf-muted">Copyright</h3>
            <p>{legalContent.copyrights}</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-semibold uppercase tracking-[0.2em] text-pf-muted">Credits</h3>
            <ul className="list-disc space-y-2 pl-6">
              {legalContent.credits.map((credit) => (
                <li key={credit}>{credit}</li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </PageSection>
  );
}

