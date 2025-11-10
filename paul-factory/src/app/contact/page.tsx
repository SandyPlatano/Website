import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import Container from "@/components/container";
import CTAButton from "@/components/cta-button";
import { CalendlyIcon } from "@/components/icons/calendly";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { contactDetails } from "@/content/contact";

export default function ContactPage() {
  return (
    <>
      <PageSection bleed className="bg-pf-cream">
        <Container className="grid gap-12 py-24 md:grid-cols-2 md:items-start">
          <div className="space-y-6">
            <SectionHeading eyebrow="Contact" title="Let’s work together." />
            <div className="space-y-4 text-sm text-pf-muted">
              <p>
                Email:{" "}
                <a href={`mailto:${contactDetails.email}`} className="underline">
                  {contactDetails.email}
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href={`tel:${contactDetails.phone}`} className="underline">
                  {contactDetails.phone}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-pf-muted">
              {contactDetails.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full border border-pf-charcoal/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition-colors hover:border-pf-charcoal hover:text-pf-charcoal"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                >
                  {social.icon === "linkedin" ? (
                    <>
                      <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
                      <span>{social.label}</span>
                    </>
                  ) : (
                    <span>{social.label}</span>
                  )}
                </a>
              ))}
              <a
                href="https://calendly.com/gtmbyferm/30min?month=2025-11"
                className="inline-flex items-center gap-2 rounded-full border border-pf-charcoal/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-colors hover:border-pf-charcoal hover:text-pf-charcoal"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Book time"
              >
                <CalendlyIcon className="h-5 w-5" aria-hidden="true" />
                <span>BOOK TIME</span>
              </a>
            </div>
          </div>
          <form className="rounded-3xl border border-pf-charcoal/10 bg-white/80 p-8 shadow-card">
            <div className="grid gap-6">
              <label className="flex flex-col gap-2 text-sm font-medium text-pf-charcoal">
                Full name
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="rounded-2xl border border-pf-charcoal/15 bg-white px-4 py-3 text-base text-pf-charcoal outline-none transition focus:border-pf-charcoal"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-pf-charcoal">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-2xl border border-pf-charcoal/15 bg-white px-4 py-3 text-base text-pf-charcoal outline-none transition focus:border-pf-charcoal"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-pf-charcoal">
                Company
                <input
                  type="text"
                  placeholder="Apple"
                  className="rounded-2xl border border-pf-charcoal/15 bg-white px-4 py-3 text-base text-pf-charcoal outline-none transition focus:border-pf-charcoal"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-pf-charcoal">
                Message
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="rounded-2xl border border-pf-charcoal/15 bg-white px-4 py-3 text-base text-pf-charcoal outline-none transition focus:border-pf-charcoal"
                />
              </label>
              <div className="pt-2">
                <CTAButton href={`mailto:${contactDetails.email}`} label="Send message" />
              </div>
            </div>
          </form>
        </Container>
      </PageSection>
    </>
  );
}

