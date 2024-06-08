"use client";

import { useEffect, useState } from "react";
import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";

export default function ResponsiveNav() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Tailwind's sm breakpoint
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallScreen ? (
    <div className="w-full fixed top-0 left-0 z-10">
      <TopNav />
    </div>
  ) : (
    <div className="fixed sm:relative sm:block left-4 sm:left-0">
      <SideNav />
    </div>
  );
};


