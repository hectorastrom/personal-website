import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Handles() {
  return (
    <>
      <div className="mx-4 flex flex-row justify-center gap-6 border-emphasis border-opacity-75 border-2 rounded-md shadow-md p-1 text-primary text-2xl md:text-3xl">
        <Link href="mailto:hastrom@mit.edu">
          <MdEmail />
        </Link>
        <Link href="https://github.com/hectorastrom" target="_blank">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/hectorastrom" target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
}
