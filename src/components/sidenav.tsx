"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Handles from "./Handles";

export default function SideNav() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <div className="grid grid-rows-9 grid-flow-col">
        <div className="row-span-4">
          <div className="relative w-56 h-56">
            <Image
              src="/images/me.png"
              alt="Picture of Hector from September 2023"
              width={500} // Default width, doesn't matter
              height={500} // Default height
              className="object-contain w-full h-full"
              priority={true} // LCP, so this will preload it
            />
          </div>
        </div>
        <div className="row-span-1 mt-3">
          <Handles />
        </div>
        <ul className="text-3xl row-span-4 mt-2">
          {[
            { href: "/", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/work", label: "Work" },
            { href: "/blog", label: "Blog" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                text-emphasis font-bold font-title hover:saturate-200
                ${isActive(link.href) ? "underline decoration-pink-500/60 decoration-3" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
