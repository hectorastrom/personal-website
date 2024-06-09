import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinksProps {
  layout: "top" | "side";
}

export default function NavLinks({ layout }: NavLinksProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const links = [
    { href: "/", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <ul
      className={
        layout === "top"
          ? "flex flex-wrap gap-y-0 justify-start gap-2 sm:gap-4 md:gap-8 text-xl sm:text-2xl"
          : "text-2xl row-span-4 mt-2" // sidenav layout
      }
    >
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`
              text-emphasis font-normal hover:saturate-200
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
  );
}
