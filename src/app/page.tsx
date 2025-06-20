import React from "react";
import NameTitle from "@/components/NameTitle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4">
          <NameTitle text="Hej!" />
        </div>
        <p>
          I&apos;m Hector, a rising junior at{" "}
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
          My main interest lies at the intersection of machine learning and biotech/neuroscience.
          I&apos;m also a committed{" "}
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
          This summer, I&apos;ll be in SF building the
          next-generation health wearable: a device finally capable of{" "}
          <a
            className="custom-link"
            target="_blank"
            href="https://lucidmonitor.com/"
          >
            quantifying the brain.
          </a>
          {""}
        </span>
        <span>
          If that or any of my other work sounds interesting to you, don&apos;t
          hesitate to{" "}
          <Link href={"mailto:hastrom@mit.edu"} className="custom-link">
            reach out
          </Link>
          {"."}
        </span>
      </div>
    </>
  );
}

