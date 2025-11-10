export type ProjectDetail = {
  slug: string;
  hero: {
    eyebrow?: string;
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
      caption?: string;
    };
    actionsLogo?: {
      src: string;
      alt: string;
      width: number;
      height: number;
      className?: string;
    };
  };
  overview: {
    title: string;
    paragraphs: string[];
    websiteUrl?: string;
  };
  meta: Array<{
    label: string;
    items: string[];
  }>;
};

const detailCollection: Record<string, ProjectDetail> = {
  "clay-inbound-automation": {
    slug: "clay-inbound-automation",
    hero: {
      eyebrow: "Projects",
      title: "Clay — Inbound Automation",
      description:
        "Certified inbound automation flows that qualify inbound leads, sync enriched data, and notify revenue teams in real time.",
      actionsLogo: {
        src: "/Clay%20Logo/Clay_Logo_Primary_Blk.svg",
        alt: "Clay logo",
        width: 200,
        height: 63,
        className: "h-8 md:h-10"
      },
      image: {
        src: "/inbound-automation-certification.png",
        alt: "Clay inbound automation certification badge.",
        caption: "Image courtesy of Clay"
      }
    },
    overview: {
      title: "Brief",
      paragraphs: [
        "Clay’s inbound pipeline needed a modern intake experience that could qualify prospects instantly, enrich company context, and surface handraisers to the right revenue team within minutes.",
        "We designed a certified Clay automation package that pairs granular lead scoring with enrichment from first-party and third-party sources. The flows ensure marketing, sales, and success teams receive actionable context as soon as a lead submits the form."
      ],
      websiteUrl: "https://app.clay.com/shared-workbook/share_0t5hfz8ie8wGCohktH2"
    },
    meta: [
      {
        label: "Role",
        items: ["Automation Architecture", "Technical Implementation", "Revenue Operations"]
      },
      {
        label: "Deliverables",
        items: ["Clay certified inbound workspace", "Scoring + routing logic", "Real-time revenue alerts"]
      },
      {
        label: "Date",
        items: ["2025"]
      }
    ]
  },
  "clay-crm-enrichment": {
    slug: "clay-crm-enrichment",
    hero: {
      eyebrow: "Projects",
      title: "Clay — CRM Enrichment",
      description:
        "Data enrichment playbooks that keep CRM records fresh with revenue signals, buying committees, and intent scoring.",
      actionsLogo: {
        src: "/Clay%20Logo/Clay_Logo_Primary_Blk.svg",
        alt: "Clay logo",
        width: 200,
        height: 63,
        className: "h-8 md:h-10"
      },
      image: {
        src: "/crm-enrichment-certification.png",
        alt: "Clay CRM enrichment certification badge.",
        caption: "Image courtesy of Clay"
      }
    },
    overview: {
      title: "Brief",
      paragraphs: [
        "Revenue teams struggled with dated CRM fields, broken attribution, and missing stakeholders. We built Clay enrichment runs that hydrate Salesforce and HubSpot with accurate roles, firmographics, and buying signals.",
        "Each playbook keeps the operations stack lightweight: Clay orchestrates data vendors, deduplicates contacts, and publishes changes only when confidence scores exceed pre-defined thresholds."
      ],
      websiteUrl: "https://app.clay.com/shared-workbook/share_0t5hfxgD825KJ5Wdwhy"
    },
    meta: [
      {
        label: "Role",
        items: ["Revenue Research", "Automation Strategy", "Systems Integration"]
      },
      {
        label: "Deliverables",
        items: ["Cross-vendor enrichment runs", "Confidence-based upserts", "Executive reporting"]
      },
      {
        label: "Date",
        items: ["2025"]
      }
    ]
  },
  "clay-outbound-certification": {
    slug: "clay-outbound-certification",
    hero: {
      eyebrow: "Projects",
      title: "Clay — Outbound Certification",
      description:
        "Outbound automation and sales outreach sequences that balance scale with personalization across the GTM stack.",
      actionsLogo: {
        src: "/Clay%20Logo/Clay_Logo_Primary_Blk.svg",
        alt: "Clay logo",
        width: 200,
        height: 63,
        className: "h-8 md:h-10"
      },
      image: {
        src: "/outbound-automation-certification.png",
        alt: "Clay outbound automation certification badge.",
        caption: "Image courtesy of Clay"
      }
    },
    overview: {
      title: "Brief",
      paragraphs: [
        "Outbound teams needed Clay-powered prospecting that kept reps focused on conversations instead of spreadsheets. We created a certification program that trains GTM teams on high-intent targeting and personalization frameworks.",
        "Every certification cohort follows a live build, turning raw data into campaigns that sync with outbound orchestration tools in real time."
      ],
      websiteUrl: "https://app.clay.com/shared-workbook/share_0t4cxjuxqHn6brR4ojC"
    },
    meta: [
      {
        label: "Role",
        items: ["Curriculum Design", "Outbound Strategy", "Clay Implementation"]
      },
      {
        label: "Deliverables",
        items: ["Certification runway", "Playbooks & templates", "Automation QA"]
      },
      {
        label: "Date",
        items: ["2025"]
      }
    ]
  },
  "revenue-research-app": {
    slug: "revenue-research-app",
    hero: {
      eyebrow: "Projects",
      title: "Location Research Custom App",
      description:
        "In-house web app for sales reps that reveals how many locations a given company operates with ready-to-use data exports.",
      actionsLogo: {
        src: "/cursor-brand-assets-20250924/General%20Logos/Cube/SVG/CUBE_2D_DARK.svg",
        alt: "Cursor cube logo",
        width: 128,
        height: 128,
        className: "h-12"
      },
      image: {
        src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        alt: "Sales enablement dashboard on a desktop monitor in a dimly lit office.",
        caption: "Photo credit: Ales Nesetril via Unsplash"
      }
    },
    overview: {
      title: "Brief",
      paragraphs: [
        "Regional sales teams needed a searchable, trusted dataset for multi-location prospects. We built a custom application with Clay and low-code tooling that aggregates listings, verifies counts, and exports clean spreadsheets instantly.",
        "The UI mirrors familiar RevOps dashboards so that adoption is immediate—reps can filter by region, industry, and revenue band without leaving the workspace."
      ],
      websiteUrl: "https://www.gtmbyferm.com"
    },
    meta: [
      {
        label: "Role",
        items: ["Product Strategy", "Full-Stack Development", "Data Quality"]
      },
      {
        label: "Deliverables",
        items: ["Location aggregation engine", "Permissions-aware UI", "Downloadable reports"]
      },
      {
        label: "Date",
        items: ["2025"]
      }
    ]
  }
};

export function getProjectDetail(slug: string) {
  return detailCollection[slug];
}

export function getAllProjectDetails() {
  return Object.values(detailCollection);
}


