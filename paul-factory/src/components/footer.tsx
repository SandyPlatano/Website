import Container from "@/components/container";
import { CalendlyIcon } from "@/components/icons/calendly";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { siteInfo } from "@/content/site";
import Link from "next/link";

const getCalendlyUrl = () => "https://calendly.com/gtmbyferm/30min";

const footerLinksBase = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fermin-andujar/",
    external: true,
    Icon: LinkedInIcon
  }
] as const;

const legalLinks = [
  { href: "/legal", label: "Legal" }
] as const;

export default function Footer() {
  const footerLinks = [
    ...footerLinksBase,
    {
      label: "Schedule time",
      href: getCalendlyUrl(),
      external: true,
      Icon: CalendlyIcon
    }
  ];

  return (
    <footer id="contact" className="border-t border-pf-charcoal/10 bg-white/80">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-end">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-3xl font-semibold leading-tight text-pf-accent md:text-4xl">GTMwithFerm</h3>
              <p className="max-w-xl text-base text-pf-muted md:text-lg">{siteInfo.tagline}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-pf-muted">
              <a
                href={`mailto:${siteInfo.email}`}
                className="group inline-flex items-center gap-3 rounded-lg px-2 py-1 transition-colors hover:bg-pf-charcoal/5"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pf-muted/70">
                  Email:
                </span>
                <span className="text-base text-pf-charcoal transition-colors group-hover:text-pf-charcoal/70">
                  {siteInfo.email}
                </span>
              </a>
              <a
                href={`tel:${siteInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="group inline-flex items-center gap-3 rounded-lg px-2 py-1 transition-colors hover:bg-pf-charcoal/5"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pf-muted/70">
                  Phone:
                </span>
                <span className="text-base text-pf-charcoal transition-colors group-hover:text-pf-charcoal/70">
                  {siteInfo.phone}
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-pf-charcoal/10 bg-white/60 p-6 text-sm text-pf-muted shadow-sm backdrop-blur">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.25em] text-pf-muted/80">Location</p>
              <p className="text-base font-medium text-pf-charcoal">{siteInfo.location}</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-pf-muted">
              {footerLinks.map((link) => {
                const Icon = link.Icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-pf-charcoal/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-colors hover:border-pf-charcoal hover:text-pf-charcoal"
                    {...(link.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                  >
                    {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <span className="inline-block h-px w-full bg-pf-muted/30" aria-hidden="true" />
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-pf-muted/70">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-pf-charcoal"
              >
                {link.label}
              </Link>
            ))}
            <span className="inline-block h-3 w-px bg-pf-muted/40" aria-hidden="true" />
            <p className="text-center text-xs text-pf-muted/60">made by Ferm with Cursor</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

