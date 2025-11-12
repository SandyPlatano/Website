'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/content/navigation";
import { siteInfo } from "@/content/site";
import Container from "@/components/container";
import PillNav from "@/components/pill-nav";
import CTAButton from "@/components/cta-button";
import { cn } from "@/lib/cn";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        isScrolled ? "bg-pf-cream/95 backdrop-blur-sm" : "bg-pf-cream"
      )}
    >
      <Container className="relative flex items-center justify-between gap-4 py-3 md:py-4 lg:py-5">
        {/* Logo - Left */}
        <div className="flex-shrink-0 z-10">
          <Link 
            href="/" 
            className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-pf-accent hover:opacity-80 transition-opacity whitespace-nowrap"
            aria-label="Home"
          >
            GTMwithFerm
          </Link>
        </div>

        {/* Navigation - Center */}
        <div className="flex-1 flex justify-center min-w-0 px-2">
          <PillNav
            items={primaryNav}
            activeHref={pathname}
            baseColor="#f4f1eb"
            pillColor="#161528"
            pillTextColor="#f4f1eb"
            hoveredPillTextColor="#161528"
            navHeight="38px"
            pillPadding="16px"
            fontSize="13px"
            hideLogo={true}
            className="max-w-full"
          />
        </div>

        {/* Resume Button - Right */}
        <div className="flex-shrink-0 z-10">
          <CTAButton
            href="/resume.pdf"
            label="Resume"
            className="border-pf-charcoal/20 bg-white text-pf-charcoal hover:bg-pf-charcoal hover:text-white hover:border-pf-charcoal uppercase tracking-[0.15em] text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 sm:py-2 shadow-sm whitespace-nowrap"
            download
          />
        </div>
      </Container>
  </header>
  );
}

