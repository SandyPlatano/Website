type RibbonIconProps = React.SVGProps<SVGSVGElement>;

export function RibbonIcon({ className, ...props }: RibbonIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 2.5a7.5 7.5 0 1 1-7.5 7.5A7.5 7.5 0 0 1 12 2.5Z" />
      <path d="M8.23 13.94 7 21.5l4.5-2.7 4.5 2.7-1.23-7.56A8 8 0 0 1 12 16a8 8 0 0 1-3.77-2.06Z" opacity={0.9} />
      <path
        d="M12 4.5a5.5 5.5 0 1 0 5.5 5.5A5.5 5.5 0 0 0 12 4.5Zm0 1.5a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z"
        fill="white"
        opacity={0.35}
      />
    </svg>
  );
}


