import NameTitle from "@/components/NameTitle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4">
          <NameTitle text="Hey there!" />
        </div>
        <p>
          I&apos;m Hector, a sophomore at{" "}
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
          My main interest lies in applying machine learning to various fields,
          particularly <span className="">healthcare</span> and
          <span className=""> education</span>. I&apos;m also a committed{" "}
          <a
            className="custom-link"
            target="_blank"
            href="https://mitathletics.com/sports/mcrewlt"
          >
            rower,
          </a>{" "}
          outdoorsman, and an obsessive learner.
        </p>

        <span>
          Over the spring, I&apos;m learning all about the low-level
          architecture of computers, finally (hopefully) understanding
          probability, and grounding myself with classes in French and ethics.
        </span>
        <span>
          Beyond classes, I&apos;m continuing my{" "}
          <Link href={"/work"} className="custom-link">
            research
          </Link>
          {" "}at the Brain and Cognitive Sciences, working my way through the{" "}
          <a
            className="custom-link"
            target="_blank"
            href="https://arena-chapter1-transformer-interp.streamlit.app/"
          >
            ARENA
          </a>{" "}
          curriculum, and getting ready for a gritty spring season.
           Check out my latest{" "}
          <Link href={"/projects"} className="custom-link">
            work
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

