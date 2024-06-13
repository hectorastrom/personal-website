

import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import Handles from "@/components/Handles1";

type Project = {
  id: string;
  image_name: string;
  name: string;
  date: string;
  description: string;
  tags: string[];
  github?: string;
  website?: string;
  devpost?: string;
};

const getProjectData = () => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "project_data",
    "projects.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(jsonData);
};

export async function generateStaticParams() {
  const { projects } = getProjectData();
  return projects.map((project: { id: string }) => ({ slug: project.id }));
}

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const { projects } = getProjectData();
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="sm:-mt-6 md:-mt-8 min-h-screen text-default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-emphasis">{project.name}</h1>
            <Handles/>
          </div>
          <div className="relative border-2 rounded-xl border-emphasis\20 p-4 shadow-md mb-8">
            <Image
              src={`/project_data/images/${project.image_name}`}
              alt={`${project.name} Screenshot`}
              width={250}
              height={250}
              className="object-contain w-full h-full rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-emphasis mb-4">My Role</h2>
              <p className="mb-2">
                Team lead — Design Competition, Rapid Research, Interaction
                Design, Visual Design, Rapid Prototyping
              </p>
              <h2 className="text-2xl font-bold text-emphasis mb-4">Team</h2>
              <p className="mb-2">Xavier Woo</p>
              <p>Elson Liang</p>
              <h2 className="text-2xl font-bold text-emphasis mb-4">
                Timeline & Result
              </h2>
              <p>48 Hours, 2nd place out of 985 teams</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emphasis mb-4">
                Overview
              </h2>
              <p>
                Spotlight is an entertainment streaming platform that aims to
                foster authentic interactions between friends. The app bolsters
                the notion that entertainment is best experienced around the
                presence of others, especially in moments where we&apos;re inevitably
                disconnected.
              </p>
              <p className="mt-4">
                Spotlight has features like instant messaging and real-time
                watch parties that cater to small groups of friends. The
                platform differs from large streaming platforms by leveraging a
                user&apos;s immediate social circle to surface content aligned with
                their shared preferences.
              </p>
              <p className="mt-4 text-emphasis">
                This case study is a revisionary approach to our original 2nd
                place competition entry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
