'use client';

import { motion } from "framer-motion";
import PageSection from "@/components/page-section";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import CTAButton from "@/components/cta-button";
import RotatingText from "@/components/rotating-text";
import LogoLoop, { type LogoItem } from "@/components/LogoLoop";
import { featuredProjects } from "@/content/projects";
import AnimatedBackground from "@/components/animated-background";
import ParticleField from "@/components/particle-field";
import GlowCard from "@/components/glow-card";
import MagneticButton from "@/components/magnetic-button";
import Image from "next/image";
import Container from "@/components/container";

const tools = ["Cursor", "Apify", "ChatGPT", "Claude", "Clay", "Cognism", "Gong Engage", "Salesforce", "Superwhisper", "Tella", "Vidyard", "ZoomInfo"];

const toolLogos: LogoItem[] = tools.map((tool) => ({
  node: (
    <span className="rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-6 py-3 text-sm font-bold uppercase tracking-[0.3em] text-white whitespace-nowrap hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg">
      {tool}
    </span>
  ),
  title: tool,
  ariaLabel: tool
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function HomePage() {
  const allProjects = featuredProjects;

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-purple-950 via-blue-950 to-pink-950" />
      <AnimatedBackground />
      <ParticleField count={50} />
      
      {/* Hero Section - Absolutely Stunning */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30 backdrop-blur-xl -z-10" />
        
        <Container className="relative z-20">
          <motion.div
            className="text-center space-y-8 md:space-y-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p
                className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-white/80"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Go-to-Market Engineering
              </motion.p>
              
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  Building systems that
                </span>
                <span className="block mt-4">
                  <RotatingText
                    texts={["drive results.", "remove friction.", "amplify teams."]}
                    splitBy="words"
                    rotationInterval={3000}
                    staggerDuration={0.05}
                    mainClassName="inline-flex bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                    auto={true}
                    loop={true}
                  />
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Hello! I&apos;m <span className="font-bold text-purple-300">Fermin</span>, an aspiring go-to-market engineer crafting automation playbooks and enrichment workflows that let teams focus on what matters.
              </motion.p>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <MagneticButton href="#projects" className="text-lg px-10 py-5">
                  View Work
                </MagneticButton>
                <motion.a
                  href="/resume.pdf"
                  download
                  className="px-10 py-5 rounded-full font-semibold text-white bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Hero Image with 3D Effect */}
            <motion.div
              className="mt-16 relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-50 animate-pulse" />
                <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border-4 border-white/30 shadow-2xl backdrop-blur-xl bg-white/10">
                  <Image
                    src="/convention-hall.jpeg"
                    alt="Fermin at the IFA Convention in Las Vegas"
                    width={960}
                    height={1280}
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Projects Section - Enhanced */}
      <PageSection id="projects" innerClassName="py-20 md:py-28 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        
        <motion.div
          className="space-y-16 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionHeading
              title="Clay Certifications & GTM Builds"
              description="Automation playbooks, enrichment workflows, and enablement tools crafted for marketing, sales, and success teams."
              align="center"
              size="small"
            />
          </motion.div>
          
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10"
              variants={containerVariants}
            >
              {allProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlowCard
                    glowColor="rgba(139, 92, 246, 0.6)"
                    className="h-full"
                  >
                    <ProjectCard project={project} variant="compact" />
                  </GlowCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </PageSection>

      {/* About Section - Redesigned */}
      <PageSection id="about" bleed className="relative px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30 backdrop-blur-2xl" />
        
        <div className="mx-auto w-full max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <GlowCard
              glowColor="rgba(59, 130, 246, 0.6)"
              className="overflow-hidden"
            >
              <div className="p-8 md:p-12 lg:p-16">
                <motion.div
                  className="space-y-8 md:space-y-12"
                  variants={itemVariants}
                >
                  <div className="space-y-6">
                    <motion.div
                      className="space-y-4"
                      variants={itemVariants}
                    >
                      <p className="text-sm font-bold uppercase tracking-[0.4em] text-purple-600">About</p>
                      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                        About Ferm
                      </h2>
                    </motion.div>
                    
                    <motion.div
                      className="space-y-4 text-lg text-gray-700 leading-relaxed"
                      variants={itemVariants}
                    >
                      <p>
                        Hey, I&apos;m <span className="font-bold text-purple-600">Fermin (Ferm)</span>, formerly a personal trainer and massage therapist turned BDR, now an aspiring go-to-market engineer focused on systems that let teams spend more time with customers.
                      </p>
                      <p>
                        I&apos;m particularly passionate about helping teams escape the busywork trap so they can focus on what matters: <span className="font-semibold text-blue-600">genuine problem-solving and relationship building</span>.
                      </p>
                      <p>
                        You can catch me competing in beach volleyball, hiking or dancing bachata.
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="grid gap-6 sm:grid-cols-2"
                    variants={itemVariants}
                  >
                    <GlowCard
                      glowColor="rgba(139, 92, 246, 0.4)"
                      hoverGlow={true}
                      className="p-6"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.4em] text-purple-600 mb-3">Current Focus</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Learning Cursor
                      </p>
                    </GlowCard>
                    
                    <GlowCard
                      glowColor="rgba(236, 72, 153, 0.4)"
                      hoverGlow={true}
                      className="p-6"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.4em] text-pink-600 mb-3">Recent Win</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Built this website with Cursor
                      </p>
                    </GlowCard>
                  </motion.div>

                  <motion.div
                    className="space-y-6"
                    variants={itemVariants}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Tool Stack
                    </h3>
                    <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 p-6 border-2 border-purple-200/50">
                      <LogoLoop
                        logos={toolLogos}
                        speed={100}
                        direction="left"
                        gap={32}
                        logoHeight={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        fadeOutColor="rgb(255, 255, 255)"
                        ariaLabel="Tool stack logos"
                        className="py-2"
                        width="100%"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-4 sm:flex-row pt-4"
                    variants={itemVariants}
                  >
                    <MagneticButton href="/resume.pdf" className="w-full sm:w-auto">
                      Download Resume
                    </MagneticButton>
                  </motion.div>
                </motion.div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </PageSection>
    </>
  );
}
