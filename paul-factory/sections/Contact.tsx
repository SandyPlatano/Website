"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/shared/CTAButton";
import { Mail, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-secondary-dark text-text-secondary">
      <div className="content-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Let's Work Together</h2>
          <p className="text-lg md:text-xl text-text-secondary/80 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's create
            something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="mailto:andujar609@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-text-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>andujar609@gmail.com</span>
            </motion.a>

            <motion.a
              href="#"
              className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-text-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Schedule a Call</span>
            </motion.a>
          </div>

          <CTAButton variant="primary" href="mailto:andujar609@gmail.com">
            Start a Project
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}

