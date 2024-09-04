"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import MembershipForm from "./_components/MembershipForm";
import MembershipHero from "./_components/MembershipHero";
import MembershipConfirmation from "./_components/MembershipConfirmation";
import { AnimatePresence } from "framer-motion";

function MembershipPage() {
  const [showMembershipHero, setShowMembershipHero] = useState(true);
  const [showMembershipConfirmation, setShowMembershipConfirmation] =
    useState(false);
  const [showMembershipForm, setShowMembershipForm] = useState(false);
  const [applyFor, setApplyFor] = useState("black");

  function handleHeroButtonClick() {
    setShowMembershipHero(false);
    setTimeout(() => {
      setShowMembershipConfirmation(true);
    }, 1500);
  }

  function handleConfirmationButtonClick() {
    setShowMembershipConfirmation(false);
    setTimeout(() => {
      setShowMembershipForm(true);
    }, 1500);
  }

  return (
    <main
      className={"flex min-h-screen flex-col items-center bg-black text-white"}
    >
      <Navbar />
      <AnimatePresence>
        {showMembershipHero && (
          <MembershipHero
            handleHeroButtonClick={handleHeroButtonClick}
            setApplyFor={setApplyFor}
          />
        )}
        {showMembershipConfirmation && (
          <MembershipConfirmation
            handleConfirmationButtonClick={handleConfirmationButtonClick}
          />
        )}
        {showMembershipForm && <MembershipForm applyFor={applyFor} />}
      </AnimatePresence>
    </main>
  );
}

export default MembershipPage;
