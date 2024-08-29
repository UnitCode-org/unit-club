"use client";

import CustomCursor from "@/components/animations/CustomCursor";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IntroKeyholeProps {
  onClick?: () => void;
}

function IntroKeyhole({ onClick }: IntroKeyholeProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/images/gallery/1.png",
    "/images/gallery/2.png",
    "/images/gallery/3.png",
    "/images/gallery/4.png",
    "/images/gallery/5.png",
    "/images/gallery/6.png",
    "/images/gallery/7.png",
    "/images/gallery/8.png",
    "/images/gallery/9.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedImage((selectedImage) => {
        if (selectedImage === images.length - 1) {
          return 0;
        } else {
          return selectedImage + 1;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="bg-black fixed w-screen h-screen flex justify-center items-center"
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      <CustomCursor opacityDelay={1} opacityDuration={0.5}>
        <div className="fixed -top-8 -left-14">
          <p className="font-medium text-unit-gray-20 text-nowrap">
            CLICK TO ENTER
          </p>
          <div className="bg-unit-gray-50 rounded-full p-1.5 h-fit w-fit opacity-50 mx-auto mt-3.5">
            <div className="bg-unit-gray-20 rounded-full p-2.5 h-fit w-fit"></div>
          </div>
        </div>
      </CustomCursor>
      <div className="w-80 h-80 relative">
        <div className="keyhole-mask w-full h-full">
          <motion.div className="w-full h-full absolute">
            <Image
              src={
                selectedImage > 0
                  ? images[selectedImage - 1]
                  : images[images.length - 1]
              }
              width={1311}
              height={738}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full h-full absolute"
            key={selectedImage}
          >
            <Image
              src={images[selectedImage]}
              width={1311}
              height={738}
              alt="logo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <p className="font-medium text-center text-unit-gray-20 mt-24 block md:hidden">
          CLICK TO ENTER
        </p>
      </div>
    </motion.div>
  );
}

export default IntroKeyhole;
