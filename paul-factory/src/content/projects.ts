export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
    credit: string;
    creditUrl: string;
  };
};

export const featuredProjects: Project[] = [
  {
    slug: "clay-inbound-automation",
    title: "Clay — Inbound Automation",
    summary:
      "Certified inbound automation flows that qualify inbound leads, sync enriched data, and notify revenue teams in real time.",
    tags: ["Clay", "Automation", "Inbound"],
    image: {
      src: "/inbound-automation-certification.png",
      alt: "Clay inbound automation certification badge.",
      credit: "Clay",
      creditUrl: "https://clay.com"
    }
  },
  {
    slug: "clay-crm-enrichment",
    title: "Clay — CRM Enrichment",
    summary:
      "Data enrichment playbooks that keep CRM records fresh with revenue signals, buying committees, and intent scoring.",
    tags: ["Clay", "RevOps", "Data"],
    image: {
      src: "/crm-enrichment-certification.png",
      alt: "Clay CRM enrichment certification badge.",
      credit: "Clay",
      creditUrl: "https://clay.com"
    }
  },
  {
    slug: "clay-outbound-certification",
    title: "Clay — Outbound Certification",
    summary:
      "Outbound automation and sales outreach sequences that balance scale with personalization across the GTM stack.",
    tags: ["Clay", "Outbound", "Sales"],
    image: {
      src: "/outbound-automation-certification.png",
      alt: "Clay outbound automation certification badge.",
      credit: "Clay",
      creditUrl: "https://clay.com"
    }
  },
  {
    slug: "revenue-research-app",
    title: "Location Research Custom App",
    summary:
      "In-house web app for sales reps that gives them how many location a certain company has.",
    tags: ["Cursor", "Research", "Web App"],
    image: {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
      alt: "Sales enablement dashboard on a desktop monitor in a dimly lit office.",
      credit: "Ales Nesetril via Unsplash",
      creditUrl: "https://unsplash.com/photos/laptop-computer-on-glass-top-table-FwDcnvQv4nI"
    }
  }
];

export const moreProjects: Project[] = [];

