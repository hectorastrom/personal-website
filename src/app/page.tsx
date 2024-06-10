import NameTitle from "@/components/NameTitle";
import Link from "next/link";
import { FaHandPeace } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4">
          <NameTitle text="Hey there!" />
        </div>
        <p>
          I'm Hector, a rising sophomore at{" "}
          <a
            className="custom-link"
            target="_blank"
            href="https://www.eecs.mit.edu/"
          >
            MIT
          </a>{" "}
          studying Computer Science & Electrical Engineering (6-2).
        </p>

        <p>
          My main interest lies at the intersection of machine learning and
          healthcare. I'm also a{" "}
          <a
            className="custom-link"
            target="_blank"
            href="https://mitathletics.com/sports/mcrewlt"
          >
            committed rower,
          </a>{" "}
          nature lover, and an obsessive learner.
        </p>

        <span>
          Come see what I'm up to this{" "}
          <Link href={"/projects"} className="custom-link">
            summer,
          </Link>{" "}
          read my{" "}
          <Link href={"/blog"} className="custom-link">
            blog,
          </Link>{" "}
          or{" "}
          <Link href={"mailto:hastrom@mit.edu"} className="custom-link">
            connect
          </Link>{" "}
          with me on a project!
        </span>
      </div>
    </>
  );
}

