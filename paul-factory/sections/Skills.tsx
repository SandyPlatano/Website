"use client";

import { motion } from "framer-motion";
import {
  Code,
  FileCode,
  Server,
  FileJson,
  GitBranch,
  Container,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContentCard } from "@/components/shared/ContentCard";

type ProficiencyLevel = "Expert" | "Experienced" | "Intermediate" | "Basic";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  proficiency: ProficiencyLevel;
}

const skills: Skill[] = [
  { name: "React", icon: Code, proficiency: "Expert" },
  { name: "TypeScript", icon: FileJson, proficiency: "Expert" },
  { name: "Node.js", icon: Server, proficiency: "Experienced" },
  { name: "Python", icon: FileCode, proficiency: "Experienced" },
  { name: "Git", icon: GitBranch, proficiency: "Expert" },
  { name: "Docker", icon: Container, proficiency: "Intermediate" },
];

const proficiencyColors: Record<ProficiencyLevel, string> = {
  Expert: "bg-accent-coral",
  Experienced: "bg-accent-coral/70",
  Intermediate: "bg-accent-coral/50",
  Basic: "bg-accent-coral/30",
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-primary-background">
      <div className="content-width">
        <SectionHeader>Skills & Toolbox</SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ContentCard className="text-center hover:scale-[1.02] transition-transform">
                <div className="w-16 h-16 rounded-xl bg-secondary-dark/10 flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-8 h-8 text-secondary-dark" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-dark">
                  {skill.name}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold text-white ${proficiencyColors[skill.proficiency]}`}
                  >
                    {skill.proficiency}
                  </span>
                </div>
              </ContentCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

