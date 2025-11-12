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
    <footer id="contact" className="relative border-t border-white/20 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30 backdrop-blur-2xl">
      <Container className="py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-end">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent md:text-4xl">GTMwithFerm</h3>
              <p className="max-w-xl text-base text-white/90 md:text-lg">{siteInfo.tagline}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
              <a
                href={`mailto:${siteInfo.email}`}
                className="group inline-flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white/10 backdrop-blur-sm"
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  Email:
                </span>
                <span className="text-base text-white transition-colors group-hover:text-purple-300">
                  {siteInfo.email}
                </span>
              </a>
              <a
                href={`tel:${siteInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="group inline-flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-white/10 backdrop-blur-sm"
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                  Phone:
                </span>
                <span className="text-base text-white transition-colors group-hover:text-purple-300">
                  {siteInfo.phone}
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 text-sm shadow-lg">
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">Location</p>
              <p className="text-base font-semibold text-white">{siteInfo.location}</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              {footerLinks.map((link) => {
                const Icon = link.Icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-white/20 hover:border-white/50 hover:scale-105"
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
        <div className="mt-12 flex flex-col items-center gap-4">
          <span className="inline-block h-px w-full bg-white/20" aria-hidden="true" />
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/70">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <span className="inline-block h-3 w-px bg-white/30" aria-hidden="true" />
            <p className="text-center text-xs text-white/60">made by Ferm with Cursor</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

