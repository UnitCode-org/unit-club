import { FadeInBottom } from "@/components/animations/FadeInBottom";
import { TextFadeInBottom } from "@/components/animations/TextFadeInBottom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

function MembershipHero() {
  return (
    <>
      <div className="w-full mt-4 max-h-64 overflow-clip">
        <video
          width="2856"
          height="528"
          playsInline
          autoPlay
          muted
          loop
          className="object-cover h-full w-full"
        >
          <source src="/videos/Membership.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text-center max-w-3xl mt-20">
        <h1 className="text-6xl font-albert-sans font-bold">
          <TextFadeInBottom
            y={100}
            staggerChildren={0.1}
            text="ALL ABOUT ACCESS"
          />
        </h1>
        <p className="text-unit-gray-20 mt-8">
          <TextFadeInBottom text="At Unit Club, membership is more than just access—it's an invitation to a world of exclusive opportunities, connections, and experiences tailored to the elite. Whether you're a global leader or an emerging talent, there's a place for you in our community." />
        </p>
        <p className="text-unit-gray-20 mt-4">
          <TextFadeInBottom
            staggerChildren={0.1}
            text="By invitation or application only."
          />
        </p>
      </div>
      <div className="w-full px-16 my-12">
        <Separator className="bg-unit-gray-60" />
      </div>
      <div className="flex gap-8">
        <FadeInBottom>
          <Button className="px-7 py-6 text-md" variant="default">
            APPLY FOR UC BLACK
          </Button>
        </FadeInBottom>
        <FadeInBottom delay={0.2}>
          <Button className="px-7 py-6 text-md" variant="default">
            APPLY FOR UC 365
          </Button>
        </FadeInBottom>
      </div>
    </>
  );
}

export default MembershipHero;
