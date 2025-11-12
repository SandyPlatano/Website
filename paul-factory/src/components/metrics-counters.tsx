"use client";

<<<<<<< HEAD
import { cn } from "@/lib/cn";
import type { Metric } from "@/content/metrics";

=======
import type { Metric } from "@/content/metrics";

// Stub component for metrics counters
// TODO: Implement metrics counters component
>>>>>>> fee0d70fb46ed3c6d5d9d5be632469ad43ddb08b
type MetricsCountersProps = {
  metrics: Metric[];
  className?: string;
};

export default function MetricsCounters({ metrics, className }: MetricsCountersProps) {
<<<<<<< HEAD
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-3", className)}>
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="rounded-2xl border border-secondary-dark/10 bg-white/80 p-4 shadow-sm"
        >
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-dark/60">
              {metric.label}
            </p>
            <p className="text-2xl font-semibold text-secondary-dark md:text-3xl">
              {metric.value}
            </p>
            {metric.description && (
              <p className="text-xs text-secondary-dark/70">{metric.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
=======
  return null;
>>>>>>> fee0d70fb46ed3c6d5d9d5be632469ad43ddb08b
}

