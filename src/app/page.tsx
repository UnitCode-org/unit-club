"use client";

import Footer from "@/app/_components/Footer";
import Navbar from "@/app/_components/Navbar";
import IntroKeyhole from "./_components/IntroKeyhole";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar hideLinks />
      <IntroKeyhole />
      {/* <IntroText /> */}
      <Footer />
    </main>
  );
}
