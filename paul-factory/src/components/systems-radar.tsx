"use client";

import MetricsCounters from "@/components/metrics-counters";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";
import { cn } from "@/lib/cn";
import type { Metric } from "@/content/metrics";

type SystemsRadarProps = {
  metrics: Metric[];
  logos: LogoItem[];
  className?: string;
};

export default function SystemsRadar({ metrics, logos, className }: SystemsRadarProps) {
  return (
    <section
      className={cn(
        "h-full rounded-3xl border border-secondary-dark/10 bg-white/85 p-6 shadow-card md:p-8 lg:p-10",
        className
      )}
    >
      <div className="flex flex-col gap-6">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary-dark/70">Systems radar</p>
          <h2 className="text-xl font-semibold text-secondary-dark md:text-2xl">
            Telemetry across live automations, go-to-market signals, and ops rituals.
          </h2>
          <p className="text-sm leading-relaxed text-secondary-dark/70 md:text-base">
            These metrics pulse in the background of every engagement, spotting where to instrument, automate, and
            iterate next.
          </p>
        </header>

        <MetricsCounters metrics={metrics} className="bg-white border-secondary-dark/10 text-left" />

        <div className="rounded-2xl border border-secondary-dark/10 bg-secondary-dark/5 p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-secondary-dark/60">
                Stack signals
              </p>
              <p className="text-sm text-secondary-dark/80 md:text-base">
                Platforms, automations, and partners informing the next build cycle.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <LogoLoop
              logos={logos}
              speed={90}
              gap={32}
              logoHeight={40}
              pauseOnHover
              scaleOnHover
              ariaLabel="Systems radar stack logos"
              className="rounded-xl border border-secondary-dark/10 bg-white/70 px-4 py-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


