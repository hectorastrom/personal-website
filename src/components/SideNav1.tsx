"use client";

import Handles from "./Handles1";
import NavLinks from "./NavLinks";
import NameTitle from "./NameTitle";
import MeImg from "./MeImg";

export default function SideNav() {
  return (
    <>
      <div className="grid grid-rows-10 grid-flow-col gap-y-0">
        <div className="row-span-4">
          <MeImg/>
        </div>
        <div className="mt-1 text-center">
          <NameTitle link={true} />
        </div>
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
