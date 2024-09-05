"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/app/_components/Navbar";
import IntroKeyhole from "./_components/IntroKeyhole";
import IntroText from "./_components/IntroText";
import { AnimatePresence } from "framer-motion";
import MainMenu from "./_components/MainMenu";
import CustomCursor from "@/components/animations/CustomCursor";

export default function Home() {
  const searchParams = useSearchParams();
  const [showKeyholeIntro, setShowKeyholeIntro] = useState(false);
  const [showTextIntro, setShowTextIntro] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);

  useEffect(() => {
    if (searchParams.has("main-menu")) {
      setShowMainMenu(true);
      setShowKeyholeIntro(false);
      setShowTextIntro(false);
    } else {
      setShowKeyholeIntro(true);
      setShowTextIntro(false);
      setShowMainMenu(false);
    }
  }, [searchParams]);

  return (
    <main
      className={
        "bg-black text-white flex min-h-screen flex-col items-center justify-between"
      }
    >
      <Suspense fallback={<div></div>}>
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
      </Suspense>
    </main>
  );
}
