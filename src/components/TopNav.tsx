"use client";

import Handles from "./Handles";
import NavLinks from "./NavLinks";
import NameTitle from "./NameTitle";
import MeImg from "./MeImg";

export default function TopNav() {
  return (
    <div className="w-full bg-slate-50 shadow-lg p-4 grid grid-cols-4 items-center">
      {/* Image Section */}
      <div className="row-span-2 col-span-1 flex justify-center">
        <MeImg/>
      </div>

      {/* Name and Handles Section */}
      <div className="ml-2 mb-2 mt-3 col-span-3 flex flex-col justify-center">
        <div className="flex flex-wrap sm:flex-row items-center justify-between w-full">
          <NameTitle link={true}/>
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
