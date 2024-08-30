import { FadeInBottom } from "@/components/animations/FadeInBottom";
import { TextFadeInBottom } from "@/components/animations/TextFadeInBottom";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import React from 'react';

function MembershipConfirmation() {
  return (
    <div className="w-full h-full flex-grow flex flex-col items-center justify-center pb-20">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-albert-sans font-bold">
          <TextFadeInBottom
            y={100}
            staggerChildren={0.1}
            text="IT ALL STARTS HERE"
          />
        </h1>
        <p className="text-unit-gray-20 mt-12">
          <TextFadeInBottom text="Set aside 15 minutes to complete your application and showcase the essence of who you are. This is your opportunity to step into a world of exclusive experiences and elite connections. Ready to take the next step? Let’s begin!" />
        </p>
      </div>
      <div className="mt-10">
        <FadeInBottom>
          <Button className="px-7 py-6 text-md" variant="default">
            START APPLICATION
          </Button>
        </FadeInBottom>
      </div>
    </div>
  );
}

export default MembershipConfirmation;