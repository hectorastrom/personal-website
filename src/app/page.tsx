import React from "react";
import NameTitle from "@/components/NameTitle";
import Image from "next/image"
import Link from "next/link";
import { emphasisFont } from "@/lib/fonts";
import LastUpdated from "@/components/LastUpdated";
import { getLastCommit } from "@/lib/githubApi";
import { IoPin } from "react-icons/io5";

export default async function Home() {
  const buildInfo = await getLastCommit();
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-4">
          <NameTitle text="Hi!" />
        </div>

        <div>
          <Image
            src="/images/me_hiking.jpg"
            alt="Hiking to Mount Madison"
            width={320}
            height={240}
            className="hidden lg:block float-right object-cover rounded-sm shadow-lg max-w-xs w-full ml-12 mb-2 mr-2"
          />

          <p className="text-2xl mb-8">
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

          <p className="text-2xl mb-8">
            My research interests are in representation learning, generative
            models, and sample-efficiency. Previously, my work has played at the
            intersection of{" "}
            <a
              className={`custom-link ${emphasisFont.className}`}
              target="_blank"
              rel="noopener noreferrer"
              href="/projects/lucid"
            >
              neuroscience
            </a>{" "}
            and deep learning.
          </p>

          <p className="text-2xl mb-8">
            I pursue eudaimonia through the quest of contributing a{" "}
            <a
              className={`custom-link ${emphasisFont.className}`}
              target="_blank"
              rel="noopener noreferrer"
              href="/blog/2025-12-23-gigayear"
            >
              gigayear
            </a>{" "}
            to humanity. I am only interested in problems instrumental to this
            end.
          </p>

          <span className="text-2xl">
            If you find me or my work interesting, you should{" "}
            <Link
              href={"mailto:hastrom@mit.edu"}
              className={`custom-link ${emphasisFont.className}`}
            >
              reach out
            </Link>
            {"."}
          </span>
        </div>

        <div className="mt-2 text-sm text-gray-500 flex justify-between gap-2">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <IoPin />
            <span>Saltsjöbaden, Sweden</span>
          </div>
          <div>
            <LastUpdated
              lastUpdated={buildInfo.lastUpdated}
              commitHash={buildInfo.commitHash}
              showCommitHash={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
