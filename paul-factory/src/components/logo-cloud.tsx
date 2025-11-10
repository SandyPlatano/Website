import type { ClientLogo } from "@/content/clients";
import { cn } from "@/lib/cn";

type LogoCloudProps = {
  clients: ClientLogo[];
  className?: string;
};

export default function LogoCloud({ clients, className }: LogoCloudProps) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 md:grid-cols-4", className)}>
      {clients.map((client) => (
        <a
          key={client.name}
          href={client.href}
          className="group flex h-28 items-center justify-center rounded-3xl border border-pf-charcoal/10 bg-white/60 px-6 text-lg font-semibold uppercase tracking-[0.3em] text-pf-muted transition hover:border-pf-charcoal hover:text-pf-charcoal"
          target="_blank"
          rel="noreferrer noopener"
        >
          {client.logoText}
        </a>
      ))}
    </div>
  );
}

