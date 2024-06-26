import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import HorDivider from "@/components/HorDivider";
import HoverGif from "@/components/HoverGif";

type TeamMember = {
  [name: string]: string;
};

type Project = {
  id: string;
  image_path: string;
  ss_path?: string;
  gif_path?: string;
  name: string;
  date: string;
  description: string;
  tags: string[];
  status: string;
  github?: string;
  website?: string;
  devpost?: string;
  role: string;
  overview: string[];
  note?: string;
  team?: TeamMember[];
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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { projects } = getProjectData();
  const project = projects.find((p: Project) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  const links = [
    { href: project.github, label: "GitHub" },
    { href: project.website, label: "Website" },
    { href: project.devpost, label: "Devpost" },
  ].filter((link) => link.href); // Filter out undefined links

  return (
    <>
      <div className="sm:-mt-6 md:-mt-8 min-h-screen text-default text-base md:text-lg">
        <div className="text-center mb-8">
          {/* Back button, only on wide screens */}
          <Link
            href="/projects"
            className="hidden sm:block text-emphasis font-normal hover:saturate-200"
          >
            <div className="flex justify-start gap-1 mb-4">
              <IoMdArrowRoundBack className="text-3xl -mt-0.5" />
              Back
            </div>
          </Link>

          <h1 className="text-2xl md:text-4xl font-bold text-emphasis">
            {project.name}
          </h1>
          <span className="mt-6">
            <h3 className="font-bold mt-4 inline-block">STATUS:</h3>
            <p className="inline"> {project.status}</p>
          </span>
        </div>
        {project.ss_path ? (
          <>
            <div className="glow-border-container mb-8">
              <div className="glow-border">
                <HoverGif
                  staticImage={`/project_data/screenshots/${project.ss_path}`}
                  gifImage={
                    project.gif_path
                      ? `/project_data/screenshots/${project.gif_path}`
                      : undefined
                  }
                  alt={`${project.name} Screenshot`}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="pb-8">
            <HorDivider />
          </div>
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* first col */}
          <div>
            <h2 className="text-lg md:text-xl font-bold text-emphasis mb-1">
              My Role
            </h2>
            <p className="mb-2">{project.role}</p>

            {project.team && (
              <>
                <h2 className="text-lg md:text-xl font-bold text-emphasis mb-1">
                  Team
                </h2>
                {/* Fixed Code */}
                <ul className="mb-2">
                  {project.team.map((member: TeamMember) => {
                    const name = Object.keys(member)[0];
                    const role = member[name];
                    return (
                      <li key={name} className="">
                        <span className="md:hidden">- {name}</span>
                        <span className="hidden md:inline">
                          - {name}; {role}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}

            <h2 className="text-lg md:text-xl font-bold text-emphasis mb-1">
              Tools and Software
            </h2>
            <div className="flex flex-wrap">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1 text-sm md:text-base lg:text-base"
                >
                  {tag}
                </span>
              ))}
            </div>

            {links.length > 0 && (
              <div className="mt-4">
                <h2 className="text-lg md:text-xl font-bold text-emphasis mb-1">
                  Links
                </h2>
                <ul className="flex flex-wrap gap-2 sm:gap-x-4 md:gap-x-8 text-lg md:text-xl text-emphasis font-normal">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        className="hover:saturate-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.note && (
              <div className="mt-4">
                <h2 className="text-emphasis font-bold mb-1 text-lg md:text-xl">
                  Note
                </h2>
                <p className="text-opacity-50 text-sm md:text-base">
                  {project.note}
                </p>
              </div>
            )}
          </div>

          {/* second col */}
          <div>
            <h2 className="text-lg md:text-xl font-bold text-emphasis mb-1">
              Overview
            </h2>
            <div>
              {project.overview.map((line: string, index: number) => (
                <p key={index} className="mb-4">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* end of grid */}
      </div>
    </>
  );
}
