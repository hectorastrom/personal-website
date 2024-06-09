import Link from "next/link";
import { usePathname } from "next/navigation";


export default function TopNavLinks() {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <>
          <ul className="flex flex-wrap gap-y-0 justify-start gap-2 sm:gap-4 md:gap-8 text-2xl sm:text-3xl">
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
                  text-emphasis font-title hover:saturate-200
                  ${
                    isActive(link.href)
                      ? "underline decoration-pink-500 decoration-3"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </>
    )
}