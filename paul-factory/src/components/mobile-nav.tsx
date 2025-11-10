"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/content/navigation";
import { cn } from "@/lib/cn";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-pf-charcoal/20"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span className="sr-only">Toggle menu</span>
        <div className="space-y-1.5">
          <span
            className={cn(
              "block h-0.5 w-5 bg-pf-charcoal transition-transform duration-200",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span className={cn("block h-0.5 w-5 bg-pf-charcoal transition-opacity", open && "opacity-0")} />
          <span
            className={cn(
              "block h-0.5 w-5 bg-pf-charcoal transition-transform duration-200",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </div>
      </button>
      <div
        id="mobile-menu"
        className={cn(
          "absolute left-0 right-0 top-full z-30 origin-top rounded-b-3xl border border-t-0 border-pf-charcoal/10 bg-white/95 px-6 pb-8 pt-4 shadow-xl transition-all backdrop-blur",
          open ? "scale-y-100 opacity-100 pointer-events-auto" : "pointer-events-none scale-y-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-4 text-sm font-medium uppercase tracking-[0.3em] text-pf-muted">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-pf-charcoal" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

