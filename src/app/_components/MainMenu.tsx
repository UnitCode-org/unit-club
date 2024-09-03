"use client";

import CustomCursor from "@/components/animations/CustomCursor";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";

function MainMenu() {
  const [cursorText, setCursorText] = useState("");
  const variants = {
    default: {},
    project: {
      backgroundColor: "#D9D9D9",
      color: "#000",
      fontSize: "16px",
      padding: "0.75rem 2.5rem",
      borderRadius: "0.5rem",
    },
  };
  const [cursorVariant, setCursorVariant] = useState(variants.default);
  const [unitBlackHovered, setUnitBlackHovered] = useState(false);
  const [unit365Hovered, setUnit365Hovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <CustomCursor
        opacityDelay={1}
        opacityDuration={0.5}
        animate={cursorVariant}
      >
        <>
          <div className="font-medium">{cursorText}</div>
        </>
      </CustomCursor>
      <div className="flex flex-col md:flex-row w-screen h-screen justify-center items-center md:items-end gap-8 md:-mt-[5.75rem] -mt-[4.75rem] pt-20 pb-8 px-7 md:p-0">
        <Link
          href={"/black"}
          className="bg-black flex flex-col items-center justify-end rounded-t-full w-full md:w-1/3 h-2/3 relative overflow-hidden max-w-md group"
          onMouseEnter={() => {
            setCursorVariant(variants.project);
            setCursorText("ENTER");
            setUnitBlackHovered(true);
          }}
          onMouseLeave={() => {
            setCursorVariant(variants.default);
            setCursorText("");
            setUnitBlackHovered(false);
          }}
        >
          <div className="absolute bg-gray-600 z-10 w-full h-full opacity-25 group-hover:bg-gray-800 transition-all duration-1000"></div>
          <div className="absolute w-[40rem] h-[40rem] md:h-[60rem] md:w-[60rem] z-0 -left-40 md:-left-80 -top-16 brightness-75 contrast-150 group-hover:brightness-50 transition-all duration-1000">
            <video
              width="2000"
              height="2000"
              playsInline
              autoPlay
              muted
              loop
              className="object-cover h-full w-full"
            >
              <source src="/images/logo/Black.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            className={
              "z-10 flex flex-col items-center text-white text-center transition-all duration-1000" +
              (unitBlackHovered
                ? " md:pb-52 pb-6"
                : " md:pb-[0rem] md:-mb-4 pb-6")
            }
          >
            <Image
              src={"/images/logo/unit-black.svg"}
              alt="Unit Black"
              width={18}
              height={18}
              className="block md:hidden"
            />
            <Image
              src={"/images/logo/unit-black.svg"}
              alt="Unit Black"
              width={28}
              height={28}
              className="md:block hidden"
            />
            <h1 className="font-albert-sans font-bold md:text-5xl text-3xl mt-3">
              UNIT BLACK
            </h1>
            <p className="font-medium mt-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 hidden md:block">
              {" "}
              YOUR GATEWAY TO EXCLUSIVE
              <br /> EXPERIENCES AND ELITE CONNECTIONS
            </p>
          </div>
        </Link>
        <Link
          href={"/365"}
          className="bg-black flex flex-col items-center justify-end rounded-t-full w-full md:w-1/3 h-2/3 relative overflow-hidden max-w-md group"
          onMouseEnter={() => {
            setCursorVariant(variants.project);
            setCursorText("ENTER");
            setUnit365Hovered(true);
          }}
          onMouseLeave={() => {
            setCursorVariant(variants.default);
            setCursorText("");
            setUnit365Hovered(false);
          }}
        >
          <div className="absolute bg-gray-600 z-10 w-full h-full opacity-25 group-hover:bg-gray-800 transition-all duration-1000"></div>
          <div className="absolute w-[40rem] h-[40rem] md:h-[60rem] md:w-[60rem] z-0 left-0 md:-left-20 -top-16 brightness-75 contrast-150 group-hover:brightness-50 transition-all duration-1000">
            <video
              width="2000"
              height="2000"
              playsInline
              autoPlay
              muted
              loop
              className="object-cover h-full w-full"
            >
              <source src="/images/logo/365.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            className={
              "z-10 flex flex-col items-center text-white text-center transition-all duration-1000" +
              (unit365Hovered
                ? " md:pb-52 pb-6"
                : " md:pb-[0rem] md:-mb-4 pb-6")
            }
          >
            <Image
              src={"/images/logo/unit-365.svg"}
              alt="Unit 365"
              width={32}
              height={32}
              className="block md:hidden"
            />
            <Image
              src={"/images/logo/unit-365.svg"}
              alt="Unit 365"
              width={42}
              height={42}
              className="md:block hidden"
            />
            <h1 className="font-albert-sans font-bold md:text-5xl text-3xl mt-3">
              UNIT 365
            </h1>
            <p className="font-medium mt-4 opacity-0 group-hover:opacity-100 transition-all duration-1000 hidden md:block">
              {" "}
              YOUR GATEWAY TO EXCLUSIVE
              <br /> EXPERIENCES AND ELITE CONNECTIONS
            </p>
          </div>
        </Link>
      </div>
      <Footer />
    </motion.div>
  );
}

export default MainMenu;
