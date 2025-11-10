export type Testimonial = {
  client: string;
  name: string;
  role: string;
  quote: string;
  project: string;
  avatar: string;
  projectUrl: string;
};

export const testimonials: Testimonial[] = [
  {
    client: "TechFlow",
    name: "Sarah Chen",
    role: "Product Manager",
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    project: "Workflow automation overhaul",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop",
    projectUrl: "/#projects"
  },
  {
    client: "InnovateSphere",
    name: "Michael Rodriguez",
    role: "CTO",
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    project: "Revenue data enrichment",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop",
    projectUrl: "/#projects"
  },
  {
    client: "CloudScale",
    name: "Emily Watson",
    role: "Operations Director",
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    project: "Enablement dashboard design",
    avatar:
      "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=256&auto=format&fit=crop",
    projectUrl: "/#projects"
  },
  {
    client: "DataPro",
    name: "James Kim",
    role: "Engineering Lead",
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    project: "Outbound automation system",
    avatar:
      "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=256&auto=format&fit=crop",
    projectUrl: "/#projects"
  },
  {
    client: "FutureNet",
    name: "Lisa Thompson",
    role: "VP of Technology",
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    project: "GTM operations playbook",
    avatar:
      "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=256&auto=format&fit=crop",
    projectUrl: "/#projects"
  }
];

