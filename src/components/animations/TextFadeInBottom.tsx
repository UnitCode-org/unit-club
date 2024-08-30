"use client";

import { motion, Variant } from "framer-motion";
import { useRef } from "react";

interface TextFadeInBottomProps {
  text: string | string[];
  y?: number;
  delay?: number;
  staggerChildren?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
}

export const TextFadeInBottom = ({
  text,
  y,
  delay,
  staggerChildren,
  animation,
}: TextFadeInBottomProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);

  animation = {
    hidden: {
      y: y || 20,
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0, 1, 0.58, 1.0],
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerChildren || 0.015,
            delayChildren: delay || 0,
          },
        },
        hidden: {},
      }}
      aria-hidden
    >
      {textArray.map((line, lineIndex) => (
        <span className="block" key={`${line}-${lineIndex}`}>
          {line.split(" ").map((word, wordIndex) => (
            <span
              className="overflow-clip h-fit w-fit inline-block"
              key={`${word}-${wordIndex}`}
            >
              <motion.span className="inline-block" variants={animation}>
                {word}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};
