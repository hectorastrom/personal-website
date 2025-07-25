import React from "react";
import NameTitle from "@/components/NameTitle";
import Link from "next/link";
import { emphasisFont } from "@/lib/fonts";
import LastUpdated from "@/components/LastUpdated";
import { getLastCommit } from "@/lib/githubApi";

export default async function Home() {
  const buildInfo = await getLastCommit();
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4">
          <NameTitle text="Välkommen!" />
        </div>
        <p className="text-2xl">
          I&apos;m Hector, a junior at{" "}
          <a
            className={`custom-link ${emphasisFont.className}`}
            target="_blank"
            href="https://www.eecs.mit.edu/"
          >
            MIT
          </a>{" "}
          studying EECS (6-2).
        </p>

        <p className="text-2xl">
          My main interest lies at the intersection of machine learning and
          biotech/neuroscience. I&apos;m also a committed{" "}
          <a
            className={`custom-link ${emphasisFont.className}`}
            target="_blank"
            href="https://mitathletics.com/sports/mcrewlt"
          >
            rower
          </a>
          {", "}
          outdoorsman, and an obsessive learner.
        </p>

        <span className="text-2xl">
          I&apos;m currently in SF building the next-generation health wearable:
          a device finally capable of{" "}
          <a
            className={`custom-link ${emphasisFont.className}`}
            target="_blank"
            href="https://lucidmonitor.com/"
          >
            quantifying the brain.
          </a>
          {""}
        </span>
        <span className="text-2xl">
          If that or any of my other work sounds interesting to you,{" "}
          <Link
            href={"mailto:hastrom@mit.edu"}
            className={`custom-link ${emphasisFont.className}`}
          >
            reach out
          </Link>
          {"."}
        </span>

        <div className="mt-2 text-right">
          <LastUpdated
            lastUpdated={buildInfo.lastUpdated}
            commitHash={buildInfo.commitHash}
            showCommitHash={false}
          />
        </div>
      </div>
    </>
  );
}

