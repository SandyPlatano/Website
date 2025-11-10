type LinkedInIconProps = React.SVGProps<SVGSVGElement>;

export function LinkedInIcon({ className, ...props }: LinkedInIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M20.451 2H3.549A1.55 1.55 0 0 0 2 3.554v16.892A1.55 1.55 0 0 0 3.549 22h16.902A1.55 1.55 0 0 0 22 20.446V3.554A1.55 1.55 0 0 0 20.451 2ZM8.339 18.339H5.674V9.92h2.665Zm-1.333-9.57h-.018a1.383 1.383 0 1 1 .018 0Zm11.333 9.57h-2.666v-4.56c0-1.145-.41-1.927-1.438-1.927-.785 0-1.252.53-1.458 1.04-.075.183-.094.437-.094.693v4.754h-2.666s.035-7.714 0-8.419h2.666v1.193a2.65 2.65 0 0 1 2.402-1.323c1.753 0 3.075 1.146 3.075 3.606Z" />
    </svg>
  );
}


