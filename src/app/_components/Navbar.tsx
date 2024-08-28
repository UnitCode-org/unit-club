import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-center justify-between w-full p-8">
      <div className="grow basis-0 flex items-center gap-10">
        <Link href="/" className="font-medium text-unit-gray-40 hover:text-white transition-colors">
          HOME
        </Link>
        <Link href="/black" className="font-medium text-unit-gray-40 hover:text-white transition-colors">
          UNIT BLACK
        </Link>
        <Link href="/365" className="font-medium text-unit-gray-40 hover:text-white transition-colors">
          UNIT 365
        </Link>
      </div>
      <div className="opacity-75">
        <Image src="/images/logo/unit-club.svg" width={28} height={28} alt="logo" />
      </div>
      <div className="flex gap-10 grow basis-0 items-center justify-end">
        <Link href="/membership" className="font-medium text-unit-gray-40 hover:text-white transition-colors">
          MEMBERSHIP
        </Link>
      </div>
    </div>
  );
}

export default Navbar;