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
          <span className=""> biotech</span>. I&apos;m also a committed{" "}
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
          This summer, I&apos;ll be between SF and Cambridge building the
          next-generation of health wearable: a device finally capable of{" "}
          <a
            className="custom-link"
            target="_blank"
            href="https://lucidmonitor.com/"
          >
            monitoring the brain
          </a>{""}.
        </span>
      </div>
    </>
  );
}

