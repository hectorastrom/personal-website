import Link from "next/link";
import { emphasisFont } from "@/lib/fonts";

interface NameTitleProps {
    text? : string;
    link? : boolean;
}

export default function NameTitle({text = "Hector Astrom", link=false} : NameTitleProps) {
    return (
      <>
        <div
          className={`text-2xl sm:text-3xl font-bold text-emphasis ${emphasisFont.className}`}
          // className={`text-2xl sm:text-3xl font-bold text-emphasis ${emphasisFont.className} -rotate-2 md:-rotate-3`}
        >
          {link ? (
            <Link className="shine-effect" href="/">
              {text}
            </Link>
          ) : (
            `${text}`
          )}
        </div>
      </>
    );
}