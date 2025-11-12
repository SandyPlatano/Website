'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverGlow?: boolean;
}

export default function GlowCard({
  children,
  className,
  glowColor = 'rgba(139, 92, 246, 0.5)',
  hoverGlow = true,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn('relative group', className)}
      whileHover={hoverGlow ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${glowColor}, rgba(59, 130, 246, 0.5))`,
        }}
      />
      
      {/* Content */}
      <div className="relative bg-transparent rounded-3xl overflow-visible">
        {children}
      </div>
    </motion.div>
  );
}

