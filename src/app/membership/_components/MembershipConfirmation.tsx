"use client";

import { FadeInBottom } from "@/components/animations/FadeInBottom";
import { TextFadeInBottom } from "@/components/animations/TextFadeInBottom";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import React from "react";

interface MembershipConfirmationProps {
  handleConfirmationButtonClick: () => void;
}

function MembershipConfirmation({
  handleConfirmationButtonClick,
}: MembershipConfirmationProps) {
  return (
    <motion.div
      className="w-full h-full flex-grow flex flex-col items-center justify-center pb-20 mt-20"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-3xl px-10 md:px-6">
        <h1 className="text-5xl md:text-6xl font-albert-sans font-bold leading-[3.5rem]">
          <TextFadeInBottom
            y={100}
            staggerChildren={0.1}
            text="IT ALL STARTS HERE"
          />
        </h1>
        <p className="text-unit-gray-20 mt-12">
          <TextFadeInBottom text="Set aside 15 minutes to complete your application and showcase the essence of who you are. This is your opportunity to step into a world of exclusive experiences and elite connections. Ready to take the next step? Let’s begin!" />
        </p>
      </div>
      <div className="mt-10">
        <FadeInBottom>
          <Button
            className="px-7 py-6 text-md w-56"
            variant="default"
            onClick={handleConfirmationButtonClick}
          >
            START APPLICATION
          </Button>
        </FadeInBottom>
      </div>
    </motion.div>
  );
}

export default MembershipConfirmation;
