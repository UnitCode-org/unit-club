import React from "react";
import MembershipHero from "./_components/MembershipHero";
import Navbar from "../_components/Navbar";
import MembershipConfirmation from "./_components/MembershipConfirmation";
import MembershipForm from "./_components/MembershipForm";

function MembershipPage() {
  return (
    <main
      className={
        "flex min-h-screen flex-col items-center"
      }
    >
      <Navbar />
      {/* <MembershipHero /> */}
      {/* <MembershipConfirmation /> */}
      <MembershipForm />
    </main>
  );
}

export default MembershipPage;