"use client";

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import IntroKeyhole from "./_components/IntroKeyhole";
import { useState } from "react";
import IntroText from "./_components/IntroText";
import { AnimatePresence } from "framer-motion";
import MainMenu from "./_components/MainMenu";

export default function Home() {
  const [showKeyholeIntro, setShowKeyholeIntro] = useState(true);
  const [showTextIntro, setShowTextIntro] = useState(false);
  const [showMainMenu, setShowMainMenu] = useState(false);

  return (
    <main
      className={
        "flex min-h-screen flex-col items-center justify-between cursor-none"
      }
    >
      <Navbar hideLinks />
      <AnimatePresence>
        {showKeyholeIntro && (
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
        )}
        {showTextIntro && <IntroText />}
        {showMainMenu && <MainMenu />}
      </AnimatePresence>
    </main>
  );
}
