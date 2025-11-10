"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type JourneySection = {
  id: string;
  label: string;
  eyebrow?: string;
  description?: string;
  accent?: string;
  content: ReactNode;
};

type ScrollJourneyProps = {
  sections: JourneySection[];
  className?: string;
};

type SectionProgress = Record<string, number>;

const observerThresholds = Array.from({ length: 21 }, (_, index) => index / 20);

export default function ScrollJourney({ sections, className }: ScrollJourneyProps) {
  const sectionRefs = useRef(new Map<string, HTMLElement>());
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);
  const [progress, setProgress] = useState<SectionProgress>(() => {
    const initial: SectionProgress = {};
    sections.forEach((section, index) => {
      initial[section.id] = index === 0 ? 0.6 : 0;
    });
    return initial;
  });
  const progressRef = useRef(progress);

  const stickySections = useMemo(() => sections, [sections]);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    setProgress((previous) => {
      const next: SectionProgress = {};
      sections.forEach((section) => {
        next[section.id] = previous[section.id] ?? 0;
      });
      return next;
    });
  }, [sections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let nextActiveId = activeId;
        const nextProgress: SectionProgress = {};
        let bestRatio = activeId ? progressRef.current[activeId] ?? 0 : 0;

        entries.forEach((entry) => {
          const { target, intersectionRatio, isIntersecting } = entry;
          const id = target.getAttribute("data-journey-id");
          if (!id) return;

          const clampedRatio = Math.min(Math.max(intersectionRatio, 0), 1);
          nextProgress[id] = clampedRatio;

          if (isIntersecting) {
            if (!nextActiveId || clampedRatio > bestRatio + 0.05) {
              nextActiveId = id;
              bestRatio = clampedRatio;
            }
          }
        });

        setProgress((previous) => ({ ...previous, ...nextProgress }));
        if (nextActiveId && nextActiveId !== activeId) {
          setActiveId(nextActiveId);
        }
      },
      {
        threshold: observerThresholds,
        rootMargin: "-20% 0px -40% 0px"
      }
    );

    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeId, sections]);

  const handleSectionRef = (id: string) => (element: HTMLElement | null) => {
    if (!element) {
      sectionRefs.current.delete(id);
      return;
    }
    sectionRefs.current.set(id, element);
  };

  const activeIndex = stickySections.findIndex((item) => item.id === activeId);
  const getProgressForIndex = (index: number) => {
    const section = stickySections[index];
    if (!section) return 0;
    const baseProgress = progress[section.id] ?? 0;
    if (section.id === activeId) {
      return Math.min(1, Math.max(0, baseProgress));
    }
    if (activeIndex > index) return 1;
    if (activeIndex < index) return Math.min(1, Math.max(0, baseProgress));
    return Math.min(1, Math.max(0, baseProgress));
  };

  return (
    <div className={cn("relative", className)}>
      <div className="mx-auto flex w-full max-w-6xl gap-12 px-6 pb-24 pt-12 md:px-10 lg:px-12">
        <aside className="sticky top-28 hidden h-fit w-64 flex-shrink-0 lg:block">
          <div className="space-y-6 rounded-3xl border border-pf-charcoal/10 bg-white/65 p-6 shadow-card backdrop-blur">
            <div className="space-y-1">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-pf-muted">
                Journey
              </p>
              <h2 className="text-lg font-semibold text-pf-charcoal">
                How the story unfolds
              </h2>
            </div>
            <ol className="space-y-4">
              {stickySections.map((section, index) => {
                const sectionProgress = getProgressForIndex(index);
                const isActive = section.id === activeId;
                return (
                  <li key={section.id} className="relative pl-7">
                    <motion.span
                      layout
                      className="absolute left-2 top-1.5 h-2 w-2 rounded-full bg-pf-muted"
                      animate={{
                        scale: isActive ? 1.35 : 1,
                        backgroundColor: isActive ? "#060010" : "#9a95a7"
                      }}
                      transition={{ duration: 0.25 }}
                    />
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-pf-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="relative h-1 flex-1 overflow-hidden rounded-full bg-pf-muted/20">
                          <motion.span
                            className="absolute inset-y-0 left-0 rounded-full bg-pf-charcoal"
                            animate={{ width: `${sectionProgress * 100}%` }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                          />
                        </span>
                      </div>
                      <div>
                        <p
                          className={cn(
                            "text-sm font-semibold text-pf-charcoal transition",
                            isActive ? "text-pf-charcoal" : "text-pf-charcoal/80"
                          )}
                        >
                          {section.label}
                        </p>
                        {section.description ? (
                          <p className="text-xs text-pf-muted">{section.description}</p>
                        ) : null}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>
        <div className="flex-1 space-y-32">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              data-journey-id={section.id}
              ref={handleSectionRef(section.id)}
              className="scroll-mt-40 space-y-6"
            >
              {section.eyebrow ? (
                <p className="text-xs uppercase tracking-[0.4em] text-pf-muted">{section.eyebrow}</p>
              ) : null}
              {section.content}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}


