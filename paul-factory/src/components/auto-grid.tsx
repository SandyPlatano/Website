import { cn } from "@/lib/cn";

type AutoGridProps = React.HTMLAttributes<HTMLDivElement> & {
  minItemWidth?: string;
};

export default function AutoGrid({
  className,
  minItemWidth = "18rem",
  style,
  ...props
}: AutoGridProps) {
  return (
    <div
      className={cn("grid gap-6 md:gap-8", className)}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minItemWidth}), 1fr))`, ...style }}
      {...props}
    />
  );
}

