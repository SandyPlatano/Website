export type Service = {
  title: string;
  description: string;
  bulletPoints: string[];
  icon: string;
};

export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom web applications and full-stack solutions that keep automation dependable and teams focused on meaningful work.",
    bulletPoints: ["React & Next.js builds", "API integrations", "Performance optimization", "Technical documentation"],
    icon: "💻"
  },
  {
    title: "UI/UX Design",
    description:
      "Human-centered product design with systems thinking, prototyping, and design ops that make complex journeys feel simple.",
    bulletPoints: ["Design systems", "Prototyping & testing", "Interaction design", "Visual direction"],
    icon: "🎨"
  },
  {
    title: "GTM Consulting",
    description:
      "Strategy, automation, and analytics support that unite marketing, sales, and success teams around a shared GTM playbook.",
    bulletPoints: ["Workflow automation", "Data enrichment", "Pipeline visibility", "Team enablement"],
    icon: "🚀"
  }
];

