import Link from "next/link";

interface NameTitleProps {
    text? : string;
    link? : boolean;
}

export default function NameTitle({text = "Hector Astrom", link=false} : NameTitleProps) {
    return (
      <>
        <div
          className={`text-2xl sm:text-3xl font-bold text-emphasis`}
          // className={`text-2xl sm:text-3xl font-bold text-emphasis -rotate-2 md:-rotate-3`}
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