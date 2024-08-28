"use client"

import { motion } from "framer-motion";
import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

function FadeIn({ children, delay, duration }: FadeInProps) {
  return (
      <motion.div
        key={Math.random()}
        className="font-medium text-unit-gray-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { delay: 0 } }}
        transition={{ duration: duration ? duration : 1, delay: delay ? delay : 0 }}
      >
        {children}
      </motion.div>
  );
}

export default FadeIn;