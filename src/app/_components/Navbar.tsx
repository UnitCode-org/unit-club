"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  hideLinks?: boolean;
}

function Navbar({ hideLinks }: NavbarProps) {
  const [openMobileSheet, setOpenMobileSheet] = useState(false);
  const pathname = usePathname();

  const isFixed = pathname !== "/";

  const fadeInFromTop = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  return (
    <>
      {/* Mobile Navbar */}
      <motion.div
        {...fadeInFromTop}
        className={
          "flex md:hidden flex-row gap-4 items-center w-full p-6 z-10" +
          (!hideLinks ? " justify-between" : " justify-center") +
          (isFixed && " fixed top-0 left-0 w-full z-50 backdrop-blur-md")
        }
      >
        <div className={"opacity-75" + (hideLinks && " mx-auto")}>
          <Image
            src="/images/logo/unit-club.svg"
            width={28}
            height={28}
            alt="logo"
          />
        </div>
        {!hideLinks && (
          <Sheet open={openMobileSheet} onOpenChange={setOpenMobileSheet}>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                className="rounded-full px-3 py-1.5 h-auto"
                onClick={() => setOpenMobileSheet(true)}
              >
                <Menu size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent
              hideCloseButton
              className="w-screen h-screen flex flex-col"
              side={"top"}
            >
              <div className="flex justify-between items-center">
                <div className="opacity-75">
                  <Image
                    src="/images/logo/unit-club.svg"
                    width={28}
                    height={28}
                    alt="logo"
                  />
                </div>
                <Button
                  variant="secondary"
                  className="rounded-full px-3 py-1.5 h-auto"
                  onClick={() => setOpenMobileSheet(false)}
                >
                  <X size={18} />
                </Button>
              </div>
              <div className="flex flex-col gap-10 text-center flex-grow justify-center pb-8">
                <Link
                  href="/"
                  className="font-albert-sans font-semibold text-white text-4xl"
                >
                  HOME
                </Link>
                <Link
                  href="/black"
                  className="font-albert-sans font-semibold text-white text-4xl"
                >
                  UNIT BLACK
                </Link>
                <Link
                  href="/365"
                  className="font-albert-sans font-semibold text-white text-4xl"
                >
                  UNIT 365
                </Link>
                <Link
                  href="/membership"
                  className="font-albert-sans font-semibold text-white text-4xl"
                >
                  MEMBERSHIP
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </motion.div>

      {/* Desktop Navbar */}
      <motion.div
        {...fadeInFromTop}
        className={
          "flex justify-center items-center w-full" +
          (isFixed && " fixed top-0 left-0 z-50 backdrop-blur-md")
        }
      >
        <div className="hidden md:flex flex-row gap-4 items-center justify-between w-full max-w-screen-2xl py-8 px-10 z-10">
          {!hideLinks && (
            <div className="grow basis-0 flex items-center gap-10">
              <Link
                href="/"
                className="font-medium text-unit-gray-40 hover:text-white transition-colors"
              >
                HOME
              </Link>
              <Link
                href="/black"
                className="font-medium text-unit-gray-40 hover:text-white transition-colors"
              >
                UNIT BLACK
              </Link>
              <Link
                href="/365"
                className="font-medium text-unit-gray-40 hover:text-white transition-colors"
              >
                UNIT 365
              </Link>
            </div>
          )}
          <div className="opacity-75 mx-auto">
            <Image
              src="/images/logo/unit-club.svg"
              width={28}
              height={28}
              alt="logo"
            />
          </div>
          {!hideLinks && (
            <div className="flex gap-10 grow basis-0 items-center justify-end">
              <Link
                href="/membership"
                className="font-medium text-unit-gray-40 hover:text-white transition-colors"
              >
                MEMBERSHIP
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
