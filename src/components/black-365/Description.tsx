"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface DescriptionProps {
  title: string;
  highlightedText: string;
  description: string;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  highlightedText,
  description,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const animation = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0, 1, 0.58, 1.0],
      },
    },
  };

  const descriptionLines = description.split(/<br\s*\/?>/i);

  return (
    <section
      ref={ref}
      className="flex justify-center items-center max-w-screen-2xl min-h-screen px-6"
    >
      <div className="max-w-[600px] text-center">
        <motion.h1
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.015,
                delayChildren: 0,
              },
            },
            hidden: {},
          }}
          className="mb-12 text-5xl font-semibold leading-tight font-albert-sans"
        >
          {highlightedText.split(" ").map((word, index) => (
            <span
              className="inline-block overflow-clip h-fit w-fit"
              key={`highlight-${word}-${index}`}
            >
              <motion.span className="italic inline-block" variants={animation}>
                {word}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
          {title.split(" ").map((word, index) => (
            <span
              className="inline-block overflow-clip h-fit w-fit"
              key={`title-${word}-${index}`}
            >
              <motion.span className="inline-block" variants={animation}>
                {word}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </motion.h1>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.015,
                delayChildren: 0,
              },
            },
            hidden: {},
          }}
          aria-hidden
        >
          {descriptionLines.map((line, lineIndex) => (
            <div key={`line-${lineIndex}`}>
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
              {lineIndex < descriptionLines.length - 1 && <br />}{" "}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
