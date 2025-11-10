// Metrics type definition
export type Metric = {
  id: string;
  label: string;
  value: number;
  unit?: string;
};

// Empty metrics array for now
export const metrics: Metric[] = [];

