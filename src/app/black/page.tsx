import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Hero from "@/components/black-365/Hero";

function UnitBlackPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}

export default UnitBlackPage;
