import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HeroSection from "@/components/hero-section";
import PageSection from "@/components/page-section";
import CTAButton from "@/components/cta-button";
import { getAllProjectDetails, getProjectDetail } from "@/content/project-details";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllProjectDetails().map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const detail = getProjectDetail(params.slug);

  if (!detail) {
    return {
      title: "Project | Ferm"
    };
  }

  return {
    title: `${detail.hero.title} | Ferm Projects`,
    description: detail.hero.description
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const detail = getProjectDetail(params.slug);

  if (!detail) {
    notFound();
  }

  const { hero, overview, meta } = detail;

  return (
    <div className="bg-pf-cream text-pf-charcoal">
      <HeroSection
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        image={hero.image}
        actionsLogo={hero.actionsLogo}
        actions={
          overview.websiteUrl
            ? [{ href: overview.websiteUrl, label: "View live project", variant: "ghost" }]
            : undefined
        }
      />

      <PageSection variant="muted">
        <div className="grid gap-12 md:grid-cols-[2fr,1fr] md:items-start lg:gap-16">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-pf-muted">{overview.title}</p>
            <div className="space-y-4 text-base text-pf-charcoal/90">
              {overview.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {overview.websiteUrl ? (
              <CTAButton href={overview.websiteUrl} label="Visit live project" variant="primary" />
            ) : null}
          </div>

          <aside className="space-y-8 rounded-[2rem] border border-pf-charcoal/10 bg-white p-8 text-pf-charcoal shadow-card">
            {meta.map((group) => (
              <div key={group.label} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-pf-muted">
                  {group.label}
                </h3>
                <ul className="space-y-2 text-sm text-pf-charcoal/80">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>
        </div>
      </PageSection>
    </div>
  );
}


