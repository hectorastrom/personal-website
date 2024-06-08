import Link from "next/link";
import { ReactNode } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Define the props type for IconLink
interface IconLinkProps {
  href: string;
  children: ReactNode;
}

// Reusable IconLink component with typed props
function IconLink({ href, children }: IconLinkProps) {
  return (
    <Link
      href={href}
      className="hover:text-emphasis hover:saturate-200"
      target={href.startsWith("http") ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}

export default function Handles() {
  return (
    <div className="flex flex-row justify-around gap-6 border-emphasis border-opacity-75 border-2 rounded-md shadow-md p-1 text-primary text-3xl">
      <IconLink href="mailto://hastrom@mit.edu">
        <MdEmail />
      </IconLink>
      <IconLink href="https://github.com/hectorastrom">
        <FaGithub />
      </IconLink>
      <IconLink href="https://www.linkedin.com/in/hectorastrom">
        <FaLinkedin />
      </IconLink>
    </div>
  );
}
