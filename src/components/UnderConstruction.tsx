import { FaHammer } from "react-icons/fa";
import Link from "next/link";

export default function UnderConstruction() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center p-8 gap-y-10">
        <FaHammer className="hammer-animation text-6xl text-emphasis" />
        <h1 className="text-3xl">
          This page is still under construction. Please check back soon!
        </h1>
        <Link href="/" className="custom-link font-bold text-4xl">
          Return home
        </Link>
      </div>
    </>
  );
}
