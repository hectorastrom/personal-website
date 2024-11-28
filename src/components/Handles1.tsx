import { ReactNode } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


interface IconLinkProps {
  href: string;
  children: ReactNode;
}


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
    <div className="flex justify-between gap-2 md:p-1 border-none md:border-solid md:border-emphasis md:border-opacity-75 md:border-2 rounded-md md:shadow-md text-primary text-2xl sm:text-3xl">
      <div className="relative group">
        <IconLink href="mailto:hastrom@mit.edu">
          <MdEmail />
        </IconLink>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-default bg-opacity-85 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
          hastrom@mit.edu
        </div>
      </div>
      <div className="relative group">
        <IconLink href="https://github.com/hectorastrom">
          <FaGithub />
        </IconLink>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-default bg-opacity-85 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
          @hectorastrom
        </div>
      </div>
      <div className="relative group">
        <IconLink href="https://www.linkedin.com/in/hectorastrom">
          <FaLinkedin />
        </IconLink>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-sm text-white bg-default bg-opacity-85 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
          @hectorastrom
        </div>
      </div>
    </div>
  );
}
