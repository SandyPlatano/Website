type CalendlyIconProps = React.SVGProps<SVGSVGElement>;

export function CalendlyIcon({ className, ...props }: CalendlyIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.25 13.17a.75.75 0 0 1-1.06 0 4.75 4.75 0 1 1 0-6.34.75.75 0 1 1-1.06 1.06 3.25 3.25 0 1 0 0 4.22.75.75 0 0 1 1.06 1.06Z" />
    </svg>
  );
}


