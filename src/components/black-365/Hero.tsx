"use client";

import { motion } from "framer-motion";

interface HeroProps {
  logo: string;
  page: string;
}

const Hero: React.FC<HeroProps> = ({ logo, page }) => {
  return (
    <section className="flex justify-center items-center min-h-screen max-w-screen-2xl font-albert-sans">
      <motion.div
        className={`flex flex-col md:flex-row items-center ${
          page === "Black" && "lg:ml-8 xl:ml-16"
        } text-7xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold font-albertSans`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="mb-36 lg:mb-44 hidden md:block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          UNIT
        </motion.h1>
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-96 lg:w-128 h-auto"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <source src={logo} type="video/mp4" />
        </motion.video>
        <motion.h1
          className="mt-36 lg:mt-44 hidden md:block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {page.toUpperCase()}
        </motion.h1>
        <motion.h1
          className="md:hidden mt-8 text-center leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          UNIT
          <br />
          {page.toUpperCase()}
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default Hero;
