import React from "react";
import Image from "next/image";
import OtakoHubLogo from "@/../public/images/Logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="fixed z-50 flex h-24 w-full items-center bg-black justify-between px-4 shadow-md ">
        <div className="flex w-[73%] justify-between gap-5 sm:w-2/6 sm:justify-start md:w-[29%] lg:w-auto">
          <Link href="/home">
            <Image
              src={OtakoHubLogo}
              alt="Logo OtakoHub"
              width={360}
              height={0}
              sizes="100vw"
              className="p-2.5 pb-3"
            />
          </Link>
        </div>
      </header>
    </>
  );
}
