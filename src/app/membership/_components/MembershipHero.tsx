import { FadeInBottom } from "@/components/animations/FadeInBottom";
import { TextFadeInBottom } from "@/components/animations/TextFadeInBottom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";

interface MembershipHeroProps {
  handleHeroButtonClick: () => void;
  setApplyFor: Dispatch<SetStateAction<string>>;
}

function MembershipHero({
  handleHeroButtonClick,
  setApplyFor,
}: MembershipHeroProps) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center bg-black text-white mt-4 md:mt-20"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full mt-4 max-h-64 overflow-clip md:block hidden">
        <video
          width="2856"
          height="528"
          playsInline
          autoPlay
          muted
          loop
          className="object-cover h-full w-full"
        >
          <source src="/videos/Membership.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text-center max-w-3xl mt-20 px-10 md:px-6">
        <h1 className="text-5xl md:text-6xl font-albert-sans font-bold leading-[3.5rem]">
          <TextFadeInBottom
            y={100}
            staggerChildren={0.1}
            text="ALL ABOUT ACCESS"
          />
        </h1>
        <p className="text-unit-gray-20 mt-8">
          <TextFadeInBottom text="At Unit Club, membership is more than just access—it's an invitation to a world of exclusive opportunities, connections, and experiences tailored to the elite. Whether you're a global leader or an emerging talent, there's a place for you in our community." />
        </p>
        <p className="text-unit-gray-20 mt-4">
          <TextFadeInBottom
            staggerChildren={0.1}
            text="By invitation or application only."
          />
        </p>
      </div>
      <div className="w-full md:px-16 px-6 my-12">
        <Separator className="bg-unit-gray-60" />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <FadeInBottom>
          <Button
            className="px-7 py-6 text-md w-56"
            variant="default"
            onClick={() => {
              handleHeroButtonClick();
              setApplyFor("black");
            }}
          >
            APPLY FOR UC BLACK
          </Button>
        </FadeInBottom>
        <FadeInBottom delay={0.2}>
          <Button
            className="px-7 py-6 text-md w-56"
            variant="default"
            onClick={() => {
              handleHeroButtonClick();
              setApplyFor("365");
            }}
          >
            APPLY FOR UC 365
          </Button>
        </FadeInBottom>
      </div>
    </motion.div>
  );
}

export default MembershipHero;
