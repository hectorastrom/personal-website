import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import React from "react";
import Link from "next/link";
import HorDivider from "@/components/HorDivider";
import HoverGif from "@/components/HoverGif";
import type { Metadata } from "next";
import { emphasisFont } from "@/lib/fonts";

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
  hackathon_page?: string;
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

// Dynamically generate metadata based on the project slug
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { projects } = getProjectData();
  const project = projects.find((p: Project) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return {
    title: `Hector Project's - ${project.name}`,
    description: project.description,
  };
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
    { href: project.hackathon_page, label: "Hackathon Page" },
  ].filter((link) => link.href); // Filter out undefined links

  const renderOverviewLine = (line: string, index: number) => {
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = markdownLinkRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.substring(lastIndex, match.index));
      }

      parts.push(
        <a
          key={`link-${index}-${parts.length}`}
          className={`custom-link ${emphasisFont.className}`}
          target="_blank"
          href={match[2]}
        >
          {match[1]}
        </a>
      );

      lastIndex = markdownLinkRegex.lastIndex;
    }

    if (lastIndex < line.length) {
      parts.push(line.substring(lastIndex));
    }

    if (parts.length === 0) {
      parts.push(line);
    }

    return (
      <p key={index} className="mb-4">
        {parts}
      </p>
    );
  };

  return (
    <>
      <div className="min-h-screen text-default text-base md:text-lg">
        <Link
          href="/projects"
          className={`text-sm text-slate-500 hover:text-slate-700 ${emphasisFont.className}`}
        >
          ← Back to projects
        </Link>

        <div className="text-center mb-8">
          <h1
            className={`text-2xl md:text-4xl font-bold text-emphasis ${emphasisFont.className}`}
          >
            {project.name}
          </h1>
          <span className="mt-6">
            <h3 className="font-bold mt-4 inline-block">STATUS:</h3>
            <p className="inline"> {project.status}</p>
          </span>
        </div>
        {/* if we have at least a static image, we'll try to render it */}
        {/* if we have a gif on top of that, we'll render the gif on hover */}
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* first col */}
          <div className="md:col-span-1">
            <h2
              className={`text-lg md:text-xl font-bold text-emphasis mb-1 ${emphasisFont.className}`}
            >
              My Role
            </h2>
            <p className="mb-2">{project.role}</p>

            {project.team && (
              <>
                <h2
                  className={`text-lg md:text-xl font-bold text-emphasis mb-1 ${emphasisFont.className}`}
                >
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
            {project.tags && project.tags.length > 0 && (
              <>
                <h2
                  className={`text-lg md:text-xl font-bold text-emphasis mb-1 ${emphasisFont.className}`}
                >
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
              </>
            )}

            {links.length > 0 && (
              <div className="mt-4">
                <ul
                  className={`flex flex-wrap gap-2 sm:gap-x-4 md:gap-x-8 text-lg md:text-xl text-emphasis font-normal ${emphasisFont.className}`}
                >
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
                <h2
                  className={`text-emphasis font-bold mb-1 text-lg md:text-xl ${emphasisFont.className}`}
                >
                  Note
                </h2>
                <p className="text-opacity-50 text-sm md:text-base">
                  {project.note}
                </p>
              </div>
            )}
          </div>

          {/* second col */}
          <div className="md:col-span-2">
            <h2
              className={`text-lg md:text-xl font-bold text-emphasis mb-1 ${emphasisFont.className}`}
            >
              Overview
            </h2>
            <div>
              {project.overview.map((line: string, index: number) =>
                renderOverviewLine(line, index)
              )}
            </div>
          </div>
        </div>
        {/* end of grid */}
      </div>
    </>
  );
}
