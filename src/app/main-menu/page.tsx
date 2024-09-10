"use client";

import Navbar from "@/app/_components/Navbar";
import { AnimatePresence } from "framer-motion";
import MainMenu from "../_components/MainMenu";

export default function Home() {
  return (
    <main
      className={
        "bg-black text-white flex min-h-screen flex-col items-center justify-between"
      }
    >
      <Navbar hideLinks />
      <AnimatePresence>
        <MainMenu />
      </AnimatePresence>
    </main>
  );
}
