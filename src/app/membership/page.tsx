import React from "react";
import MembershipHero from "./_components/MembershipHero";
import Navbar from "../_components/Navbar";

function MembershipPage() {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center"
      }
    >
      <Navbar />
      <MembershipHero />
    </main>
  );
}

export default MembershipPage;