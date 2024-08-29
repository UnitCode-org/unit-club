"use client";

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import IntroKeyhole from "./_components/IntroKeyhole";
import { useState } from "react";
import IntroText from "./_components/IntroText";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [showKeyholeIntro, setShowKeyholeIntro] = useState(true);
  const [showTextIntro, setShowTextIntro] = useState(false);

  return (
    <main className={"flex min-h-screen flex-col items-center justify-between" + (showKeyholeIntro ? " cursor-none" : "")}>
      <Navbar hideLinks />
      <AnimatePresence>
        {showKeyholeIntro && (
          <IntroKeyhole onClick={() => {
            setShowKeyholeIntro(false);
             setTimeout(() => {
                setShowTextIntro(true);
             }, 1000);
          }} />
        )}
        {showTextIntro && (
          <IntroText />
        )}
      </AnimatePresence>
      {/* <Footer /> */}
    </main>
  );
}
