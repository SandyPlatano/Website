"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/cn";

type PillNavItem = {
  href: string;
  label: string;
  ariaLabel?: string;
};

type PillNavProps = {
  items: readonly PillNavItem[];
  logoSrc?: string;
  logoAlt?: string;
  logoText?: string;
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
  navHeight?: string;
  pillPadding?: string;
  fontSize?: string;
  hideLogo?: boolean;
};

function isExternalLink(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#") ||
    href.includes("#") // Treat any link with # as anchor link (e.g., /#about)
  );
}

export default function PillNav({
  items,
  logoSrc = "/favicon.ico",
  logoAlt = "Logo",
  logoText,
  activeHref,
  className,
  ease = "power3.easeOut",
  baseColor = "#fff",
  pillColor = "#060010",
  hoveredPillTextColor = "#060010",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
  navHeight = "30px",
  pillPadding = "12px",
  fontSize = "14px",
  hideLogo = false
}: PillNavProps) {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLSpanElement | null>(null);

  const internalItems = useMemo(() => items ?? [], [items]);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) {
          return;
        }

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const white = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) {
          gsap.set(label, { y: 0 });
        }

        if (white) {
          gsap.set(white, { y: h + 12, opacity: 0 });
        }

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          {
            scale: 1.2,
            xPercent: -50,
            duration: 2,
            ease,
            overwrite: "auto"
          },
          0
        );

        if (label) {
          tl.to(
            label,
            {
              y: -(h + 8),
              duration: 2,
              ease,
              overwrite: "auto"
            },
            0
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
          tl.to(
            white,
            {
              y: 0,
              opacity: 1,
              duration: 2,
              ease,
              overwrite: "auto"
            },
            0
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, scaleY: 1, y: 0 });
    }

    if (initialLoadAnimation) {
      const logo = logoRef.current;
      const navItems = navItemsRef.current;

      if (logo) {
        gsap.set(logo, { scale: 0 });
        gsap.to(logo, {
          scale: 1,
          duration: 0.6,
          ease
        });
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, {
          width: "auto",
          duration: 0.6,
          ease
        });
      }
    }

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [internalItems, ease, initialLoadAnimation]);

  const handleEnter = (index: number) => {
    const tl = tlRefs.current[index];
    if (!tl) return;
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto"
    });
  };

  const handleLeave = (index: number) => {
    const tl = tlRefs.current[index];
    if (!tl) return;
    activeTweenRefs.current[index]?.kill();
    activeTweenRefs.current[index] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto"
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: "auto"
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll<HTMLElement>(".hamburger-line");
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: "top center"
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          scaleY: 1,
          duration: 0.2,
          ease,
          transformOrigin: "top center",
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const logoSize = `calc(${navHeight} - 2px)`;
  
  const cssVars: Record<string, string> = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": resolvedPillTextColor,
    "--nav-h": navHeight,
    "--logo": logoSize,
    "--pill-pad-x": pillPadding,
    "--pill-gap": "2px"
  };

  const renderLogo = () => {
    // If logoText is provided, render as text logo
    if (logoText) {
      const homeHref = internalItems?.[0]?.href || "/";
      const logoContent = (
        <span
          className="text-3xl font-semibold leading-tight text-pf-accent md:text-4xl"
          ref={(el) => {
            logoRef.current = el;
          }}
        >
          {logoText}
        </span>
      );

      if (isExternalLink(homeHref)) {
        return (
          <a href={homeHref} aria-label="Home" className="no-underline">
            {logoContent}
          </a>
        );
      }

      return (
        <Link href={homeHref} aria-label="Home" className="no-underline">
          {logoContent}
        </Link>
      );
    }

    // Otherwise, render as image logo (original behavior)
    const logoClasses =
      "rounded-full p-1.5 inline-flex items-center justify-center overflow-hidden";
    const style = {
      width: "var(--nav-h)",
      height: "var(--nav-h)",
      background: "var(--base, #000)"
    };

    const image = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={logoSrc}
        alt={logoAlt}
        ref={logoImgRef}
        className="block h-full w-full object-cover"
      />
    );

    if (!internalItems?.[0]) {
      return (
        <span
          className={logoClasses}
          style={style}
          ref={(el) => {
            logoRef.current = el;
          }}
        >
          {image}
        </span>
      );
    }

    const homeHref = internalItems[0].href;
    const content = (
      <span
        className={logoClasses}
        style={style}
        onMouseEnter={handleLogoEnter}
        ref={(el) => {
          logoRef.current = el;
        }}
      >
        {image}
      </span>
    );

    if (isExternalLink(homeHref)) {
      return (
        <a href={homeHref} aria-label="Home">
          {content}
        </a>
      );
    }

    return (
      <Link href={homeHref} aria-label="Home">
        {content}
      </Link>
    );
  };

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center gap-8 md:w-auto",
        className
      )}
      style={cssVars}
    >
      {!hideLogo && renderLogo()}
      <div
        ref={navItemsRef}
        className="relative hidden items-center rounded-full md:flex"
        style={{
          height: "var(--nav-h)",
          background: "var(--base, #000)"
        }}
      >
        <ul
          role="menubar"
          className="m-0 flex h-full list-none items-stretch p-[3px]"
          style={{ gap: "var(--pill-gap)" }}
        >
          {internalItems.map((item, index) => {
            const isActive = activeHref === item.href;

            const pillStyle: React.CSSProperties = {
              background: "var(--pill-bg, #fff)",
              color: "var(--pill-text, var(--base, #000))",
              paddingLeft: "var(--pill-pad-x)",
              paddingRight: "var(--pill-pad-x)"
            };

            const basePillClasses =
              `relative inline-flex h-full cursor-pointer items-center justify-center overflow-hidden rounded-full px-0 font-semibold uppercase tracking-[0.2px] text-current no-underline`;
            
            const pillTextStyle: React.CSSProperties = {
              fontSize: fontSize
            };

            const pillContent = (
              <>
                <span
                  className="hover-circle pointer-events-none absolute left-1/2 bottom-0 z-[1] block rounded-full scale-0"
                  style={{ background: "var(--base, #000)", willChange: "transform" }}
                  aria-hidden="true"
                  ref={(el) => {
                    circleRefs.current[index] = el;
                  }}
                />
                <span className="label-stack relative inline-block leading-[1]">
                  <span
                    className="pill-label relative z-[2] inline-block leading-[1]"
                    style={{ ...pillTextStyle, willChange: "transform" }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="pill-label-hover absolute left-0 top-0 z-[3] inline-block translate-y-full opacity-0"
                    style={{
                      ...pillTextStyle,
                      color: "var(--hover-text, #fff)",
                      willChange: "transform, opacity",
                      pointerEvents: "none"
                    }}
                    aria-hidden="true"
                  >
                    {item.label}
                  </span>
                </span>
                {isActive ? (
                  <span
                    className="absolute left-1/2 -bottom-[6px] z-[4] h-3 w-3 -translate-x-1/2 rounded-full"
                    style={{ background: "var(--base, #000)" }}
                    aria-hidden="true"
                  />
                ) : null}
              </>
            );

            const handleEnterWrapper = () => handleEnter(index);
            const handleLeaveWrapper = () => handleLeave(index);

            if (isExternalLink(item.href)) {
              return (
                <li key={item.href} role="none" className="flex h-full">
                  <a
                    role="menuitem"
                    href={item.href}
                    className={basePillClasses}
                    style={pillStyle}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={handleEnterWrapper}
                    onMouseLeave={handleLeaveWrapper}
                  >
                    {pillContent}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.href} role="none" className="flex h-full">
                <Link
                  role="menuitem"
                  href={item.href}
                  className={basePillClasses}
                  style={pillStyle}
                  aria-label={item.ariaLabel || item.label}
                  onMouseEnter={handleEnterWrapper}
                  onMouseLeave={handleLeaveWrapper}
                >
                  {pillContent}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        ref={hamburgerRef}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
        className="relative flex h-[var(--nav-h)] w-[var(--nav-h)] cursor-pointer items-center justify-center gap-1 rounded-full border-0 bg-[var(--base,#000)] p-0 text-current md:hidden"
        type="button"
      >
        <span
          className="hamburger-line h-0.5 w-4 origin-center rounded transition-all"
          style={{ 
            background: "var(--pill-bg, #fff)",
            transitionDuration: "10ms",
            transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)"
          }}
        />
        <span
          className="hamburger-line h-0.5 w-4 origin-center rounded transition-all"
          style={{ 
            background: "var(--pill-bg, #fff)",
            transitionDuration: "10ms",
            transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)"
          }}
        />
      </button>

      <div
        ref={mobileMenuRef}
        className="absolute left-0 right-0 top-[calc(var(--nav-h)+1rem)] z-[998] origin-top rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] md:hidden"
        style={{
          ...cssVars,
          background: "var(--base, #f0f0f0)"
        }}
      >
        <ul className="m-0 flex list-none flex-col gap-[3px] p-[3px]">
          {internalItems.map((item) => {
            const defaultStyle: React.CSSProperties = {
              background: "var(--pill-bg, #fff)",
              color: "var(--pill-text, #fff)"
            };

            const hoverIn = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              event.currentTarget.style.background = "var(--base)";
              event.currentTarget.style.color = "var(--hover-text, #fff)";
            };

            const hoverOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              event.currentTarget.style.background = "var(--pill-bg, #fff)";
              event.currentTarget.style.color = "var(--pill-text, #fff)";
            };

            const linkClasses =
              "block rounded-[50px] px-4 py-3 font-medium transition-all duration-200";
            
            const mobileLinkStyle: React.CSSProperties = {
              fontSize: fontSize,
              transitionTimingFunction: "cubic-bezier(0.25,0.1,0.25,1)"
            };

            const handleClose = () => {
              setIsMobileMenuOpen(false);
            };

            if (isExternalLink(item.href)) {
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={linkClasses}
                    style={{ ...defaultStyle, ...mobileLinkStyle }}
                    onMouseEnter={hoverIn}
                    onMouseLeave={hoverOut}
                    onClick={handleClose}
                  >
                    {item.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={linkClasses}
                  style={{ ...defaultStyle, ...mobileLinkStyle }}
                  onMouseEnter={hoverIn}
                  onMouseLeave={hoverOut}
                  onClick={handleClose}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


