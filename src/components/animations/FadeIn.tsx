"use client"

import React from 'react';
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

function FadeIn({ children, delay, duration }: FadeInProps) {
  return (
    <motion.div
      className="font-medium text-unit-gray-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration ? duration : 1, delay: delay ? delay : 0 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;