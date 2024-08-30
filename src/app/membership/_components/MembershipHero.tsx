import { TextFadeInBottom } from "@/components/animations/TextFadeInBottom";
import React from "react";

function MembershipHero() {
  return (
    <div className="text-center max-w-3xl">
      <h1 className="text-6xl font-albert-sans font-bold">
        <TextFadeInBottom y={100} staggerChildren={0.1} text="ALL ABOUT ACCESS" />
      </h1>
      <p>
        <TextFadeInBottom text="At Unit Club, membership is more than just access—it's an invitation to a world of exclusive opportunities, connections, and experiences tailored to the elite. Whether you're a global leader or an emerging talent, there's a place for you in our community." />
      </p>
      <p>By invitation or application only.</p>
    </div>
  );
}

export default MembershipHero;
