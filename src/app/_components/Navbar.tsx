"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [openMobileSheet, setOpenMobileSheet] = React.useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex md:hidden flex-row gap-4 items-center justify-between w-full p-6">
        <div className="opacity-75">
          <Image src="/images/logo/unit-club.svg" width={28} height={28} alt="logo" />
        </div>
        <Sheet open={openMobileSheet} onOpenChange={setOpenMobileSheet}>
          <SheetTrigger asChild>
            <Button variant="secondary" className="rounded-full px-3 py-1.5 h-auto" onClick={() => setOpenMobileSheet(true)}>
              <Menu size={18} />
            </Button>
          </SheetTrigger>
          <SheetContent hideCloseButton className="w-screen h-screen flex flex-col" side={"top"}>
            <div className="flex justify-between items-center">
              <div className="opacity-75">
                <Image src="/images/logo/unit-club.svg" width={28} height={28} alt="logo" />
              </div>
              <Button variant="secondary" className="rounded-full px-3 py-1.5 h-auto" onClick={() => setOpenMobileSheet(false)}>
                <X size={18} />
              </Button>
            </div>
            <div className="flex flex-col gap-10 text-center flex-grow justify-center pb-8">
              <Link href="/" className="font-albert-sans font-semibold text-white text-4xl">
                HOME
              </Link>
              <Link href="/black" className="font-albert-sans font-semibold text-white text-4xl">
                UNIT BLACK
              </Link>
              <Link href="/365" className="font-albert-sans font-semibold text-white text-4xl">
                UNIT 365
              </Link>
              <Link href="/365" className="font-albert-sans font-semibold text-white text-4xl">
                MEMBERSHIP
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-row gap-4 items-center justify-between w-full py-8 px-10">
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
    </>
  );
}

export default Navbar;