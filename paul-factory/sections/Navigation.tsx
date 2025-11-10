"use client";

import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconUser, IconMessage, IconBriefcase } from "@tabler/icons-react";

export function Navigation() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-secondary-dark" />,
    },
    {
      name: "Projects",
      link: "#portfolio",
      icon: <IconBriefcase className="h-4 w-4 text-secondary-dark" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-secondary-dark" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <IconMessage className="h-4 w-4 text-secondary-dark" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}

