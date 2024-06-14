import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

type TeamMember = {
  [name: string]: string;
};

type Project = {
  id: string;
  image_name: string;
  ss_name: string;
  name: string;
  date: string;
  description: string;
  tags: string[];
  status: string;
  github?: string;
  website?: string;
  devpost?: string;
  role: string;
  overview: string;
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
          {/* Back button, only on big screens */}
          <Link
            href="/projects"
            className="text-emphasis font-normal hover:saturate-200 hidden md:block"
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
        <div className="glow-border-container mb-8">
          <div className="glow-border">
            <Image
              src={`/project_data/screenshots/${project.ss_name}`}
              alt={`${project.name} Screenshot`}
              width={1600}
              height={900}
              priority={true}
              className="absolute left-0 top-0 object-contain w-full h-full rounded-xl"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
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
                  className="mr-2 mb-1 bg-gray-200 rounded-full px-2 py-1 text-sm md:text-base lg:text-base"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* second col */}
          <div>
            <h2 className="text-lg md:text-xl font-bold text-emphasis mb-1">
              Overview
            </h2>
            <p>{project.overview}</p>

            {project.note && (
              <div className="mt-4">
                <p className="text-emphasis font-bold text-lg md:text-xl">
                  Note:
                </p>
                <p className="text-opacity-50">{project.note}</p>
              </div>
            )}
          </div>
        </div>
        {/* end of grid */}
        {links.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg md:text-xl font-bold text-emphasis mb-1">
              Links
            </h2>
            <ul className="flex flex-wrap gap-2 sm:gap-4 md:gap-8 text-lg sm:text-lg md:text-xl">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    className="text-emphasis font-normal hover:saturate-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
