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
    <a
      href={href}
      className="hover:text-emphasis hover:saturate-200"
      target={href.startsWith("http") ? "_blank" : "_self"}
    >
      {children}
    </a>
  );
}

export default function Handles() {
  return (
    <div className="flex justify-between md:p-1 border-none md:border-solid md:border-emphasis md:border-opacity-75 md:border-2 rounded-md md:shadow-md text-primary text-2xl sm:text-3xl">
      <IconLink href="mailto:hastrom@mit.edu">
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
