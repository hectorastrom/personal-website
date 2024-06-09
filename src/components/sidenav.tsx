"use client";

import Image from "next/image";
import Handles from "./Handles";
import NavLinks from "./NavLinks";

export default function SideNav() {
  return (
    <>
      <div className="grid grid-rows-10 grid-flow-col gap-y-0">
        <div className="row-span-4">
          <div className="relative w-56 h-56">
            <Image
              src="/images/me.png"
              alt="Picture of Hector from September 2023"
              width={500}
              height={500}
              className="object-contain w-full h-full"
              priority={true}
            />
          </div>
        </div>
        <h3 className="font-title text-center text-2xl sm:text-3xl font-bold text-emphasis mt-2">
          Hector Astrom
        </h3>
        <div className="row-span-1 -mt-2">
          <Handles />
        </div>
        <div className="row-span-4 -mt-4">
          <NavLinks layout="side" />
        </div>
      </div>
    </>
  );
}
