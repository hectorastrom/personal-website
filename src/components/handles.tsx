import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Handles() {
  return (
    <>
      <div className="mx-4 flex flex-row justify-between text-slate-700 text-3xl">
        <Link href="https://github.com/hectorastrom" target="_blank">
          <FaGithub />
        </Link>
        <Link href="mailto:hastrom@mit.edu">
          <MdEmail />
        </Link>
        <Link href="https://www.linkedin.com/in/hectorastrom" target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
}
