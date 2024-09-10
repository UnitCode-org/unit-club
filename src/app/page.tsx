"use client";

import { useState } from "react";
import Navbar from "@/app/_components/Navbar";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "@/components/animations/CustomCursor";
import IntroKeyhole from "./_components/IntroKeyhole";
import IntroText from "./_components/IntroText";
import MainMenu from "./_components/MainMenu";

export default function Home() {
  const [showKeyholeIntro, setShowKeyholeIntro] = useState(true);
  const [showTextIntro, setShowTextIntro] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);

  return (
    <main
      className={
        "bg-black text-white flex min-h-screen flex-col items-center justify-between"
      }
    >
      <Navbar hideLinks />
      <AnimatePresence>
        {showKeyholeIntro && (
          <>
            <CustomCursor opacityDelay={1} opacityDuration={0.5}>
              <div className="fixed -top-12 -left-14">
                <p className="font-medium text-unit-gray-20 text-nowrap">
                  CLICK TO ENTER
                </p>
              </div>
            </CustomCursor>
            <IntroKeyhole
              onClick={() => {
                setShowKeyholeIntro(false);
                setTimeout(() => {
                  setShowTextIntro(true);
                }, 1000);
                setTimeout(() => {
                  setShowTextIntro(false);
                }, 9000);
                setTimeout(() => {
                  setShowMainMenu(true);
                }, 10000);
              }}
            />
          </>
        )}
        {showTextIntro && <IntroText />}
        {showMainMenu && <MainMenu />}
      </AnimatePresence>
    </main>
  );
}
