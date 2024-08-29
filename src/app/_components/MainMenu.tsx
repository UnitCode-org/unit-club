"use client";

import CustomCursor from "@/components/animations/CustomCursor";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
    <>
      <CustomCursor
        opacityDelay={1}
        opacityDuration={0.5}
        animate={cursorVariant}
      >
        <>
          <div className="fixed -top-8 -left-4">
            <div className="bg-unit-gray-50 rounded-full p-1.5 h-fit w-fit opacity-50 mx-auto mt-3.5">
              <div className="bg-unit-gray-20 rounded-full p-2.5 h-fit w-fit"></div>
            </div>
          </div>
          <div className="font-medium">{cursorText}</div>
        </>
      </CustomCursor>
      <div className="flex w-full justify-center items-end gap-8">
        <div
          className="bg-black flex flex-col items-center rounded-t-full w-1/3 h-full relative overflow-hidden max-w-md group"
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
          <div className="absolute h-[60rem] w-[60rem] z-0 -left-80 -top-16 brightness-75 contrast-150 group-hover:brightness-50 transition-all duration-1000">
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
              (unitBlackHovered ? " py-60" : " pt-[30rem] pb-[0rem]")
            }
          >
            <Image
              src={"/images/logo/unit-black.svg"}
              alt="Unit Black"
              width={28}
              height={28}
            />
            <h1 className="font-albert-sans font-bold text-5xl mt-3">
              UNIT BLACK
            </h1>
            <p className="font-medium mt-4 opacity-0 group-hover:opacity-100 transition-all duration-1000">
              {" "}
              YOUR GATEWAY TO EXCLUSIVE
              <br /> EXPERIENCES AND ELITE CONNECTIONS
            </p>
          </div>
        </div>
        <Link
          href={"/365"}
          className="bg-black flex flex-col items-center rounded-t-full w-1/3 h-full relative overflow-hidden max-w-md group"
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
          <div className="absolute h-[60rem] w-[60rem] z-0 -left-20 -top-16 brightness-75 contrast-150 group-hover:brightness-50 transition-all duration-1000">
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
              (unit365Hovered ? " py-60" : " pt-[30rem] pb-[0rem]")
            }
          >
            <Image
              src={"/images/logo/unit-365.svg"}
              alt="Unit 365"
              width={42}
              height={42}
            />
            <h1 className="font-albert-sans font-bold text-5xl mt-3">
              UNIT 365
            </h1>
            <p className="font-medium mt-4 opacity-0 group-hover:opacity-100 transition-all duration-1000">
              {" "}
              YOUR GATEWAY TO EXCLUSIVE
              <br /> EXPERIENCES AND ELITE CONNECTIONS
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MainMenu;
