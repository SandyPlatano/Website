'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { primaryNav } from "@/content/navigation";
import { siteInfo } from "@/content/site";
import Container from "@/components/container";
import PillNav from "@/components/pill-nav";
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
        isScrolled ? "bg-transparent" : "bg-pf-cream"
      )}
    >
      <Container className="relative flex items-center justify-center py-4">
        <PillNav
          items={primaryNav}
          activeHref={pathname}
          logoSrc="/favicon.ico"
          logoAlt={`${siteInfo.name} logo`}
          baseColor="#161528"
          pillColor="#f4f1eb"
          pillTextColor="#161528"
          hoveredPillTextColor="#f4f1eb"
          className="mx-auto"
        />
      </Container>
  </header>
  );
}

