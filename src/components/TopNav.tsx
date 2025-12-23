"use client";

import NavLinks from "./NavLinks";
import NameTitle from "./NameTitle";
import SocialLinks from "./SocialLinks";

export default function TopNav() {
  return (
    <div className="w-full bg-slate-50 shadow-lg px-4 py-3 flex items-start justify-between gap-4 z-50">
      <div className="flex flex-col justify-start">
        <NameTitle link={true} />
        <NavLinks layout="top" />
      </div>

      <SocialLinks variant="top" />
    </div>
  );
}
