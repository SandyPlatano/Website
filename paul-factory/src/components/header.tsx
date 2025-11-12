'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/content/navigation";
import Container from "@/components/container";
import CTAButton from "@/components/cta-button";
import { cn } from "@/lib/cn";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    // Exact match for homepage
    if (href === '/') {
      return pathname === '/';
    }
    // For anchor links (/#about, /#contact), we don't highlight them as active
    // by default - this can be enhanced later with scroll-based detection
    if (href.startsWith('/#')) {
      return false;
    }
    // For other routes, check if pathname matches
    return pathname === href || pathname?.startsWith(href + '/');
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-pf-charcoal/10 transition-colors duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-pf-cream"
      )}
    >
      <Container className="relative flex items-center justify-between gap-6 py-4 md:py-5">
        {/* Logo - Left */}
        <div className="flex-shrink-0 z-10">
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-semibold leading-tight text-pf-accent hover:text-pf-accent-bold transition-colors whitespace-nowrap"
            aria-label="Home"
          >
            GTMwithFerm
          </Link>
        </div>

        {/* Navigation - Center (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {primaryNav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-xs font-semibold uppercase tracking-[0.3em] text-pf-charcoal hover:text-pf-accent transition-colors relative py-2",
                  active && "text-pf-accent"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pf-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Resume Button - Right (Desktop) */}
        <div className="hidden md:block flex-shrink-0 z-10">
          <CTAButton
            href="/resume.pdf"
            label="Resume"
            variant="primary"
            className="uppercase tracking-[0.15em] text-xs px-4 py-2 whitespace-nowrap"
            download
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-10 rounded-sm hover:bg-pf-charcoal/5 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={cn(
              "h-0.5 w-5 bg-pf-charcoal transition-all duration-300 origin-center rounded-full",
              isMobileMenuOpen && "rotate-45 translate-y-2"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-pf-charcoal transition-all duration-300 rounded-full",
              isMobileMenuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 bg-pf-charcoal transition-all duration-300 origin-center rounded-full",
              isMobileMenuOpen && "-rotate-45 -translate-y-2"
            )}
          />
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-pf-charcoal/10 shadow-lg md:hidden">
            <nav className="flex flex-col py-4">
              {primaryNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-pf-charcoal hover:text-pf-accent hover:bg-pf-cream/50 transition-colors",
                      active && "text-pf-accent bg-pf-cream/30"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="px-6 py-4 mt-2 border-t border-pf-charcoal/10">
                <CTAButton
                  href="/resume.pdf"
                  label="Resume"
                  variant="primary"
                  className="w-full uppercase tracking-[0.15em] text-xs px-4 py-2"
                  download
                />
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

