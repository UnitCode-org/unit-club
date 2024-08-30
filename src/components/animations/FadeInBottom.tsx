"use client";

import { motion, Variant } from "framer-motion";
import React, { useRef } from "react";

interface TextFadeInBottomProps {
  children: React.ReactNode;
  y?: number;
  delay?: number;
}

export const FadeInBottom = ({
  children,
  y,
  delay,
}: TextFadeInBottomProps) => {
  return (
    <div className="h-fit w-fit overflow-clip">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            y: y || 60,
          },
          visible: {
            y: 0,
            transition: {
              duration: 1.5,
              ease: [0, 1, 0.58, 1.0],
              delay: delay ? delay : 0,
            },
          },
        }}
        aria-hidden
      >
        {children}
      </motion.div>
    </div>
  );
};
