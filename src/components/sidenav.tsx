import Image from "next/image";
import Link from "next/link";

export default function Sidenav() {
  return (
    <>
      <div className="grid grid-rows-8 grid-flow-col">
        <div className="row-span-4">
          <div className="relative w-36 h-36 md:w-44 md:h-44 lg:w-56 lg:h-56">
            <Image
              src="/images/me.png"
              alt="Picture of Hector"
              width={500} // Default width, doesn't matter
              height={500} // Default height
              className="object-contain w-full h-full"
              priority={true} // LCP, so this will preload it
            />
          </div>
        </div>
        <ul className={`text-4xl row-span-4 pl-2 mt-10`}>
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
