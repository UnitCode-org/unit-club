import React from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Hero from "@/components/black-365/Hero";
import ScrollToDiscover from "@/components/black-365/ScrollToDiscover";
import Description from "@/components/black-365/Description";

function UnitBlackPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Navbar />
      <Hero logo="/videos/logo/Black.mp4" page="Black" />
      <ScrollToDiscover />
      <Description
        title="OF EXCLUSIVITY."
        highlightedText="PINNACLE"
        description={`From global summits to private galas, UC Black members are always at
      the heart of the action.<br /><br />Network and connect with the world's most influential individuals in intimate, invitation-only settings.`}
      />
      <Footer />
    </main>
  );
}

export default UnitBlackPage;
