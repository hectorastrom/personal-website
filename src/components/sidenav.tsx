import Image from "next/image";
import Link from "next/link";
import Handles from "./Handles";

export default function SideNav() {
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
        <ul className="text-3xl row-span-4 pl-2 mx-4 mt-2">
          <li>
            <Link className="link" href="/">
              About
            </Link>
          </li>
          <li>
            <Link className="link" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" href="/work">
              Experience
            </Link>
          </li>
          <li>
            <Link className="link" href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
