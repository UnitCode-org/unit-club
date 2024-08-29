import CustomCursor from "@/components/animations/CustomCursor";
import Image from "next/image";
import React from "react";

function MainMenu() {
  return (
    <>
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
      <div className="flex w-full justify-center items-end gap-8">
        <div className="bg-black flex flex-col items-center rounded-t-full w-1/3 h-full relative overflow-hidden max-w-md group">
          <div className="absolute bg-gray-600 z-10 w-full h-full opacity-25 group-hover:bg-gray-700 transition-all"></div>
          <div className="absolute h-[60rem] w-[60rem] z-0 -left-80 brightness-75 contrast-150 group-hover:brightness-50 transition-all">
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
          <div className="z-10 flex flex-col items-center text-white text-center py-60 px-12">
            <Image
              src={"/images/logo/unit-black.svg"}
              alt="Unit Black"
              width={28}
              height={28}
            />
            <h1 className="font-albert-sans font-bold text-5xl mt-3">
              UNIT BLACK
            </h1>
            <p className="font-medium mt-4">
              {" "}
              YOUR GATEWAY TO EXCLUSIVE
              <br /> EXPERIENCES AND ELITE CONNECTIONS
            </p>
          </div>
        </div>
        <div className="bg-black flex flex-col items-center rounded-t-full w-1/3 h-full relative overflow-hidden max-w-md group">
          <div className="absolute bg-gray-600 z-10 w-full h-full opacity-25 group-hover:bg-gray-700 transition-all"></div>
          <div className="absolute h-[60rem] w-[60rem] z-0 -left-20 brightness-75 contrast-150 group-hover:brightness-50 transition-all">
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
          <div className="z-10 flex flex-col items-center text-white text-center py-60 px-12">
            <Image
              src={"/images/logo/unit-365.svg"}
              alt="Unit 365"
              width={28}
              height={28}
            />
            <h1 className="font-albert-sans font-bold text-5xl mt-3">
              UNIT 365
            </h1>
            <p className="font-medium mt-4">
              {" "}
              YOUR GATEWAY TO EXCLUSIVE
              <br /> EXPERIENCES AND ELITE CONNECTIONS
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainMenu;
