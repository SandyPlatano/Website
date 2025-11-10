"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/fermin-andujar/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:andujar609@gmail.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-background border-t border-secondary-dark/10 py-12">
      <div className="content-width">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const isExternal = social.href.startsWith("http");
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="p-2 text-secondary-dark hover:text-accent-coral transition-colors cursor-pointer relative z-10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ pointerEvents: "auto" }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-secondary-dark/70">
            <p>&copy; {currentYear} P.Factory. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-secondary-dark transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-secondary-dark transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

