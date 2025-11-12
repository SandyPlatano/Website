export type Metric = {
  label: string;
  value: string | number;
  description?: string;
};

export const defaultMetrics: Metric[] = [
  {
    label: "Automations",
    value: 0,
    description: "Active automation workflows"
  },
  {
    label: "Enrichments",
    value: 0,
    description: "Data enrichment operations"
  },
  {
    label: "Signals",
    value: 0,
    description: "Revenue signals tracked"
  }
];

