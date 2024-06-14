import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import React from "react";
import Image from "next/image";
import Handles from "@/components/Handles1";
import Link from "next/link";

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
  overview: string;
  role: string;
  team?: string[];
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
      <div className="sm:-mt-6 md:-mt-8 min-h-screen text-default">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-emphasis">{project.name}</h1>
            <span className="font-bold">STATUS: </span>
            <p className="inline">{project.status}</p>
          </div>
          <div className="glow-border-container mb-8">
            <div className="glow-border">
              <Image
                src={`/project_data/screenshots/${project.ss_name}`}
                alt={`${project.name} Screenshot`}
                width={1600}
                height={900}
                priority={true}
                className="object-contain w-full h-full rounded-xl"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-emphasis mb-2">My Role</h2>
              <p className="mb-2">{project.role}</p>
              {project.team && (
                <>
                  <h2 className="text-2xl font-bold text-emphasis mb-2">
                    Team
                  </h2>
                  {project.team.map((member: string, index: number) => (
                    <p key={index} className="mb-2">
                      {member}
                    </p>
                  ))}
                </>
              )}
              <h2 className="text-2xl font-bold text-emphasis mb-2">
                Tools and Software
              </h2>
              <div className="flex flex-wrap">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1 text-xs md:text-sm lg:text-base"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emphasis mb-2">
                Overview
              </h2>
              <p>{project.overview}</p>
            </div>
          </div>
          {links.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-emphasis mb-2">Links</h2>
              <ul className="flex flex-wrap gap-2 sm:gap-4 md:gap-8 text-xl sm:text-2xl">
                {links.map((link, index) => (
                  <li key={index}>
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
      </div>
    </>
  );
};

export default ProjectPage;
