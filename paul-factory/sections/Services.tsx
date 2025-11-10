"use client";

import { motion } from "framer-motion";
import { Code, Palette, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContentCard } from "@/components/shared/ContentCard";

const services = [
  {
    icon: Code,
    title: "Web Development",
    offerings: [
      "Custom web applications",
      "React & Next.js development",
      "Full-stack solutions",
      "Performance optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    offerings: [
      "User interface design",
      "Design systems",
      "Prototyping & wireframing",
      "Brand identity design",
    ],
  },
  {
    icon: Rocket,
    title: "Consulting",
    offerings: [
      "Technical strategy",
      "Code reviews",
      "Architecture planning",
      "Team mentoring",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-primary-background">
      <div className="content-width">
        <SectionHeader>Services</SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ContentCard className="h-full flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
                <div className="w-24 h-24 rounded-2xl bg-accent-coral/10 flex items-center justify-center mb-6">
                  <service.icon className="w-12 h-12 text-accent-coral" />
                </div>
                <h3 className="text-2xl mb-6 text-secondary-dark">
                  {service.title}
                </h3>
                <ul className="space-y-3 text-left flex-1">
                  {service.offerings.map((offering) => (
                    <li
                      key={offering}
                      className="flex items-start gap-2 text-secondary-dark/80"
                    >
                      <span className="text-accent-coral mt-1">•</span>
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </ContentCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

