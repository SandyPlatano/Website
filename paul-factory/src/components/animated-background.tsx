'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2), transparent 60%)',
              'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.2), transparent 60%)',
              'radial-gradient(circle at 50% 20%, rgba(236, 72, 153, 0.2), transparent 60%)',
              'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2), transparent 60%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating orbs - reduced count and opacity */}
      {[...Array(3)].map((_, i) => {
        const positions = [
          { x: '20%', y: '30%' },
          { x: '80%', y: '60%' },
          { x: '50%', y: '80%' },
        ];
        const pos = positions[i] || { x: '50%', y: '50%' };
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${150 + i * 30}px`,
              height: `${150 + i * 30}px`,
              left: pos.x,
              top: pos.y,
              background: `radial-gradient(circle, ${
                ['rgba(139, 92, 246, 0.15)', 'rgba(59, 130, 246, 0.15)', 'rgba(236, 72, 153, 0.15)'][i % 3]
              }, transparent)`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}

