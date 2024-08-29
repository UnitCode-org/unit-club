import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen max-w-screen-2xl">
      <div>
        <h1>UNIT</h1>
        <Image
          src="/images/logo/black.gif"
          width={280}
          height={280}
          alt="logo"
        />
        <h1>Black</h1>
      </div>
    </div>
  );
}

export default Hero;
