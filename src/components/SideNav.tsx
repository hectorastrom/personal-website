"use client";

import NavLinks from "./NavLinks";
import NameTitle from "./NameTitle";
import SocialLinks from "./SocialLinks";

export default function SideNav() {
  return (
    <>
      <div className="flex flex-col items-start">
        <div className="mt-1">
          <NameTitle link={true} />
        </div>
        <div className="mt-2">
          <NavLinks layout="side" />
        </div>
        <SocialLinks variant="side" />
      </div>
    </>
  );
}
