import Image from "next/image";
import Link from "next/link";
import SquircleCard from "@/components/squircle-card";
import type { Testimonial } from "@/content/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <SquircleCard className="flex flex-col gap-6 rounded-[2.4rem] p-8">
      <div className="flex items-start gap-4">
        <div className="overflow-hidden rounded-2xl border border-white/40">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={72}
            height={72}
            className="h-18 w-18 object-cover"
          />
        </div>
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.3em] text-pf-muted">{testimonial.client}</p>
          <p className="text-lg font-semibold">{testimonial.name}</p>
          <p className="text-sm text-pf-muted">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-base leading-relaxed text-pf-charcoal/80">“{testimonial.quote}”</p>
      <div className="flex items-center justify-between text-sm text-pf-muted">
        <span>{testimonial.project}</span>
        <Link href={testimonial.projectUrl} className="underline underline-offset-4">
          View project
        </Link>
      </div>
    </SquircleCard>
  );
}

