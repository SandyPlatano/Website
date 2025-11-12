export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  websiteUrl?: string;
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
      "This Clay build pulls location data, expansion signals, acquisitions, and competitive intel to route leads to the right rep, then enriches everything and pushes it to HubSpot and Slack. Sales reps know who they are talking to before they pick up the phone.",
    tags: ["Clay", "Automation", "Inbound"],
    websiteUrl: "https://app.clay.com/shared-workbook/share_0t5hfz8ie8wGCohktH2",
    image: {
      src: "/inbound-automation-certification-removebg-preview.png",
      alt: "Clay inbound automation certification badge.",
      credit: "Clay",
      creditUrl: "https://clay.com"
    }
  },
  {
    slug: "clay-crm-enrichment",
    title: "Clay — CRM Enrichment",
    summary:
      "This workflow enriches inbound leads from HubSpot by finding missing company domains, validating work emails, enriching LinkedIn profiles, standardizing job titles, analyzing LinkedIn activity and tenure, checking for previous company connections, and syncing all the enriched data back to HubSpot.",
    tags: ["Clay", "RevOps", "Data"],
    websiteUrl: "https://app.clay.com/shared-workbook/share_0t5hfxgD825KJ5Wdwhy",
    image: {
      src: "/crm-enrichment-certification-removebg-preview.png",
      alt: "Clay CRM enrichment certification badge.",
      credit: "Clay",
      creditUrl: "https://clay.com"
    }
  },
  {
    slug: "clay-outbound-certification",
    title: "Clay — Outbound Certification",
    summary:
      "This workflow finds YouTube creators' emails, analyzes their content and business model, then generates personalized cold outreach emails pitching Circle, so based on whether they're high-growth, offer courses, or need general community solutions.",
    tags: ["Clay", "Outbound", "Sales"],
    websiteUrl: "https://app.clay.com/shared-workbook/share_0t4cxjuxqHn6brR4ojC",
    image: {
      src: "/outbound-automation-certification-removebg-preview.png",
      alt: "Clay outbound automation certification badge.",
      credit: "Clay",
      creditUrl: "https://clay.com"
    }
  },
  {
    slug: "revenue-research-app",
    title: "Location Research Cursor App",
    summary:
      "In-house web app for sales reps that gives them how many location a certain company has.",
    tags: ["Cursor", "Research", "Web App"],
    websiteUrl: "https://www.gtmwithferm.com",
    image: {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      alt: "Warm, naturally lit workspace with research materials and location data on a desk.",
      credit: "Scott Graham via Unsplash",
      creditUrl: "https://unsplash.com/photos/research-workspace-5fNmWej4tAA"
    }
  }
];

export const moreProjects: Project[] = [];

