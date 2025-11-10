"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTAButton } from "@/components/shared/CTAButton";
import { RotateCcw } from "lucide-react";
import { useState } from "react";

export function About() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleResumeDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (isDownloading) return;
    
    setIsDownloading(true);
    
    try {
      // Fetch the PDF file
      const response = await fetch("/resume.pdf");
      const blob = await response.blob();
      
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.download = "Fermin_Andujar_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
      // Fallback to direct link if fetch fails
      window.open("/resume.pdf", "_blank");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="about" className="section-padding bg-primary-background">
      <div className="content-width">
        <SectionHeader>About Fermin</SectionHeader>

        <div className="bg-[#F8F5ED] rounded-3xl overflow-hidden shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] items-stretch">
            {/* Image Section - Left (40%) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full min-h-[400px] md:min-h-[500px]"
            >
              <div className="relative w-full h-full rounded-l-3xl md:rounded-r-none rounded-r-3xl md:rounded-br-none overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Ferm - GTM Engineer"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
            </motion.div>

            {/* Text Content Section - Right (60%) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col p-8 md:p-12 lg:p-16"
            >
              {/* Name and Age */}
              <h3 className="text-2xl md:text-3xl font-black text-[#201E32] uppercase tracking-tight mb-2">
                FERM, 34 YEARS OLD
              </h3>

              {/* Title with Icon */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-6 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-[#201E32]" />
                </div>
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#201E32] uppercase">
                  GTM ENGINEER
                </h4>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-5 flex-1">
                <p className="text-base md:text-lg text-[#201E32] leading-relaxed">
                  I&apos;m Ferm - a GTM Engineer who believes automation should make us more human, not less. My journey from personal training to go-to-market engineering might seem unusual, but it&apos;s given me a unique perspective on what really matters in sales and marketing.
                </p>

                <p className="text-base md:text-lg text-[#201E32] leading-relaxed">
                  In the gym, I learned that the best systems are the ones that empower people to focus on what they do best. The same is true in GTM. I build workflows in Clay, integrate APIs, and design data enrichment processes that strip away the busywork so teams can focus on genuine connections.
                </p>

                <p className="text-base md:text-lg text-[#201E32] leading-relaxed">
                  My technical background includes building computers (systematic problem-solving at its finest) and working with tools like Clay, Smartlead, ZoomInfo, and various APIs. But what sets me apart is digital empathy - using AI and automation to be more human rather than less.
                </p>
              </div>

              {/* Resume and Contact Buttons */}
              <div className="mt-8 pt-6 flex flex-wrap gap-4">
                <motion.a
                  href="/resume.pdf"
                  download="Fermin_Andujar_Resume.pdf"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-secondary-dark text-text-secondary hover:bg-secondary-dark/90 hover:scale-[1.02] focus:ring-secondary-dark cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isDownloading ? { scale: 1.02 } : {}}
                  whileTap={!isDownloading ? { scale: 0.98 } : {}}
                  onClick={handleResumeDownload}
                  aria-disabled={isDownloading}
                >
                  {isDownloading ? "DOWNLOADING..." : "DOWNLOAD RESUME"}
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-accent-coral text-secondary-dark hover:bg-accent-coral/90 hover:scale-[1.02] focus:ring-accent-coral cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONTACT
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
