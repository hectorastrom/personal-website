"use client";

import Image from "next/image";
import Handles from "./Handles";
import NavLinks from "./NavLinks";
import NameTitle from "./NameTitle";

export default function TopNav() {
  return (
    <div className="w-full bg-white shadow-lg p-4 grid grid-cols-4 items-center">
      {/* Image Section */}
      <div className="row-span-2 col-span-1 flex justify-center">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28">
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

      {/* Name and Handles Section */}
      <div className="ml-2 my-2 col-span-3 flex flex-col justify-center">
        <div className="flex flex-wrap sm:flex-row items-center justify-between w-full">
          <NameTitle/>
          <div className="mb-1">
            <Handles />
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="w-full">
          <NavLinks layout="top" />
        </div>
      </div>
    </div>
  );
}
