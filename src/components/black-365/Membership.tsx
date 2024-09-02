"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import useMedia from "use-media";
import Image from "next/image";
import { Button } from "../ui/button";

interface MembershipProps {
  description: string;
}

const Membership: React.FC<MembershipProps> = ({ description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = useMedia({ maxWidth: "767px" });

  const initialHeight = isMobile ? "47px" : "175px";

  return (
    <section className="flex flex-col justify-center items-center w-full max-w-screen-2xl mb-12 md:mb-20 px-4 md:px-12">
      <motion.div
        className="w-full rounded-xl md:rounded-2xl border border-gray-500 bg-[#0f0f0f] overflow-hidden cursor-pointer relative"
        initial={{
          height: initialHeight,
        }}
        animate={{
          height: isHovered ? "auto" : initialHeight,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src="/images/gradients/membership-gradient.svg"
              alt="Membership Gradient"
              layout="fill"
              objectFit="cover"
              priority
            />
          </motion.div>
        )}
        <h1 className="font-albert-sans font-semibold text-lg xs:text-xl md:text-4xl lg:text-5xl text-center p-2 md:p-16 relative z-10">
          MEMBERSHIP REQUIREMENTS
        </h1>
        <motion.p
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-center text-sm md:text-base lg:text-lg md:mb-12 max-w-[600px] mx-auto p-6 md:p-0 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <div className="flex justify-center mb-6 md:mb-16 relative z-50">
          <Button size="lg" className="w-52">
            BUY UNIT
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Membership;
