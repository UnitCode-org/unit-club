import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 items-center justify-between w-full py-8 px-10 max-w-screen-2xl">
      <div className="grow basis-0">
        <Image
          src="/images/logo/unit-club.svg"
          width={28}
          height={28}
          alt="logo"
        />
      </div>
      <p className="font-albert-sans">@2024 - Copyright Unit Network</p>
      <div className="flex gap-10 grow basis-0 items-center justify-end">
        <div className="flex gap-10">
          <Link href="https://t.me/unit_club" target="_blank">
            <Image
              src="/images/socials/telegram.svg"
              width={20}
              height={20}
              alt="logo"
            />
          </Link>
          <Link href="https://instagram.com/unit_club" target="_blank">
            <Image
              src="/images/socials/instagram.svg"
              width={20}
              height={20}
              alt="logo"
            />
          </Link>
          <Link href="https://twitter.com/unit_club" target="_blank">
            <Image
              src="/images/socials/twitter.svg"
              width={24}
              height={20}
              alt="logo"
            />
          </Link>
          <Link href="https://www.facebook.com/unit.club" target="_blank">
            <Image
              src="/images/socials/facebook.svg"
              width={20}
              height={20}
              alt="logo"
            />
          </Link>
          <Link href="https://wa.me/59999430000" target="_blank">
            <Image
              src="/images/socials/whatsapp.svg"
              width={20}
              height={20}
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
