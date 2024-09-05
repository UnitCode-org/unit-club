"use client";

import { motion } from "framer-motion";

function ScrollToDiscover() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center text-sm md:text-lg -mt-8 md:-mt-12"
    >
      <h1>SCROLL TO DISCOVER</h1>
    </motion.section>
  );
}

export default ScrollToDiscover;
