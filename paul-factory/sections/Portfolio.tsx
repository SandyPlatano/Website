"use client";

import React from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { LayoutGrid, CardType } from "@/components/ui/layout-grid";

const ProjectOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Clay - Inbound Automation</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Certified in building automated inbound workflows and lead generation systems
      </p>
    </div>
  );
};

const ProjectTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Clay - CRM Enrichment</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Expert in data enrichment and CRM optimization using Clay automation
      </p>
    </div>
  );
};

const ProjectThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Clay - Outbound Certification</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Certified in outbound automation and sales outreach workflows
      </p>
    </div>
  );
};

const ProjectFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">research web app for sales reps</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Building go-to-market systems that streamline workflows and amplify team productivity
      </p>
    </div>
  );
};

const cards: CardType[] = [
  {
    id: 1,
    content: <ProjectOne />,
    className: "md:col-span-2",
    thumbnail: "/images/clay-inbound-automation.png", // Replace with your certification badge image
  },
  {
    id: 2,
    content: <ProjectTwo />,
    className: "col-span-1",
    thumbnail: "/images/clay-crm-enrichment.png", // Replace with your certification badge image
  },
  {
    id: 3,
    content: <ProjectThree />,
    className: "col-span-1",
    thumbnail: "/images/clay-outbound-certification.png", // Replace with your certification badge image
  },
  {
    id: 4,
    content: <ProjectFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-primary-background">
      <div className="content-width">
        <SectionHeader className="text-center">PROJECTS</SectionHeader>

        <div className="min-h-[600px] md:min-h-[800px]">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}

