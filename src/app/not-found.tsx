'use client';

import { usePathname } from "next/navigation";
import Link from "next/link"

export default function NotFound() {
    const pathname = usePathname()
    return (
      <>
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-emphasis text-5xl font-bold p-5">Error: 404</h1>
          <h3 className="text-xl">
            Uh oh! <span className="custom-link">{`hectorastrom${pathname}`}</span> does not exist.
          </h3>
          <Link href="/" className="m-10 custom-link font-bold text-4xl">Take me home!</Link>
        </div>
      </>
    );
}