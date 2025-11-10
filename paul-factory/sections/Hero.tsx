"use client";

import { motion } from "framer-motion";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";

export function Hero() {
  return (
    <section id="home" className="relative bg-primary-background section-padding pt-32 md:pt-40 overflow-hidden">
      <div className="content-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Main Headline */}
            <div className="mb-6">
              <LayoutTextFlip
                text="Building go-to-market systems that "
                words={["drive results", "remove friction", "amplify teams"]}
                className="text-3xl md:text-5xl lg:text-6xl font-black text-secondary-dark text-left leading-tight"
              />
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-secondary-dark mb-8 text-left"
            >
              Hello! I&apos;m Fermin, an aspiring Go To Market Engineer.
            </motion.p>
          </motion.div>

          {/* Right Side - Factory Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-full h-full min-h-[400px] lg:min-h-[500px]"
          >
            <div className="relative w-full h-full bg-secondary-dark rounded-3xl overflow-hidden flex items-center justify-center">
              {/* Placeholder for isometric factory illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-text-secondary/20 text-center p-8">
                  <svg
                    width="300"
                    height="300"
                    viewBox="0 0 300 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full max-w-md"
                  >
                    {/* Simple isometric factory placeholder */}
                    <rect
                      x="50"
                      y="150"
                      width="200"
                      height="100"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <rect
                      x="80"
                      y="120"
                      width="140"
                      height="80"
                      fill="currentColor"
                      opacity="0.4"
                    />
                    <rect
                      x="110"
                      y="90"
                      width="80"
                      height="60"
                      fill="currentColor"
                      opacity="0.5"
                    />
                    {/* Windows */}
                    <rect x="100" y="140" width="20" height="20" fill="currentColor" opacity="0.6" />
                    <rect x="140" y="140" width="20" height="20" fill="currentColor" opacity="0.6" />
                    <rect x="180" y="140" width="20" height="20" fill="currentColor" opacity="0.6" />
                    <rect x="100" y="110" width="20" height="20" fill="currentColor" opacity="0.6" />
                    <rect x="140" y="110" width="20" height="20" fill="currentColor" opacity="0.6" />
                    <rect x="180" y="110" width="20" height="20" fill="currentColor" opacity="0.6" />
                  </svg>
                  <p className="text-text-secondary/40 text-sm mt-4">
                    Factory Illustration Placeholder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

