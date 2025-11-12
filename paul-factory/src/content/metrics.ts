<<<<<<< HEAD
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
=======
// Metrics type definition
export type Metric = {
  id: string;
  label: string;
  value: number;
  unit?: string;
};

// Empty metrics array for now
export const metrics: Metric[] = [];
>>>>>>> fee0d70fb46ed3c6d5d9d5be632469ad43ddb08b

