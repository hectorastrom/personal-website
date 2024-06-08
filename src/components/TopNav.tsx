"use client";

import Image from "next/image";
import Link from "next/link";
import Handles from "./Handles";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="w-full bg-white shadow-lg p-4 flex items-center">
      {/* Image Section */}
      <div className="relative w-24 h-24 mr-6">
        <Image
          src="/images/me.png"
          alt="Picture of Hector from September 2023"
          width={500}
          height={500}
          className="object-cover rounded-full w-full h-full"
          priority={true}
        />
      </div>

      {/* Links Section */}
      <div className="flex-grow">
        <div className="flex justify-center items-center">
          <ul className="flex space-x-8 text-3xl">
            {[
              { href: "/", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/work", label: "Experience" },
              { href: "/blog", label: "Blog" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                  text-emphasis font-bold font-title hover:saturate-200
                  ${
                    isActive(link.href)
                      ? "underline decoration-pink-500/60 decoration-3"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Handles */}
        <div className="mt-4">
          <Handles />
        </div>
      </div>
    </div>
  );
}
