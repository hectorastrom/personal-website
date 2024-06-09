"use client";

import Image from "next/image";
import Handles from "./Handles";
import TopNavLinks from "./TopNavLinks";

export default function TopNav() {
  return (
    <div className="w-full bg-white shadow-lg p-4 flex items-center h-fit">
      {/* Image Section */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 mr-4 sm:mr-6 flex-shrink-0">
        <Image
          src="/images/me.png"
          alt="Picture of Hector from September 2023"
          width={500}
          height={500}
          className="object-contain rounded-full w-full h-full"
          priority={true}
        />
      </div>

      {/* Links and Handles Section */}
      <div className="flex-grow">
        <div className="font-title text-2xl sm:text-3xl font-bold text-pink-500">
          Hector Astrom
        </div>
        <div className="-mt-3 w-full">
          {/* Wrapper to align both TopNavLinks and Handles */}
          <div className="inline-block">
            <TopNavLinks />
            <div className="mt-4">
              <Handles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
