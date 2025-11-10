import SquircleCard from "@/components/squircle-card";
import type { Service } from "@/content/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <SquircleCard className="flex flex-col gap-6 rounded-[2rem] p-8">
      <div className="flex items-center gap-3 text-2xl">
        <span className="text-3xl">{service.icon}</span>
        <h3 className="text-2xl font-semibold">{service.title}</h3>
      </div>
      <p className="text-sm text-pf-muted">{service.description}</p>
      <ul className="space-y-2 text-sm text-pf-muted">
        {service.bulletPoints.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-pf-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </SquircleCard>
  );
}

