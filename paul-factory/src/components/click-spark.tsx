"use client";

import { useRef, useCallback } from "react";

interface ClickSparkProps {
  sparkColor?: string;
  sparkCount?: number;
  sparkRadius?: number;
  children: React.ReactNode;
}

export default function ClickSpark({
  sparkColor = "#f86d54",
  sparkCount = 12,
  sparkRadius = 25,
  children,
}: ClickSparkProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const createSpark = useCallback(
    (x: number, y: number) => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const centerX = x - rect.left;
      const centerY = y - rect.top;

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("div");
        const angle = (Math.PI * 2 * i) / sparkCount;
        const velocity = 2 + Math.random() * 2;
        const distance = sparkRadius + Math.random() * sparkRadius;

        spark.style.position = "absolute";
        spark.style.left = `${centerX}px`;
        spark.style.top = `${centerY}px`;
        spark.style.width = "4px";
        spark.style.height = "4px";
        spark.style.borderRadius = "50%";
        spark.style.backgroundColor = sparkColor;
        spark.style.pointerEvents = "none";
        spark.style.zIndex = "9999";
        spark.style.boxShadow = `0 0 6px ${sparkColor}, 0 0 12px ${sparkColor}`;

        container.appendChild(spark);

        const startX = centerX;
        const startY = centerY;
        const endX = startX + Math.cos(angle) * distance;
        const endY = startY + Math.sin(angle) * distance;

        const animation = spark.animate(
          [
            {
              transform: `translate(0, 0) scale(1)`,
              opacity: 1,
            },
            {
              transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`,
              opacity: 0,
            },
          ],
          {
            duration: 500,
            easing: "ease-out",
          }
        );

        animation.onfinish = () => {
          spark.remove();
        };
      }
    },
    [sparkColor, sparkCount, sparkRadius]
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      createSpark(e.clientX, e.clientY);
    },
    [createSpark]
  );

  return (
    <div ref={containerRef} onClick={handleClick} className="relative">
      {children}
    </div>
  );
}

