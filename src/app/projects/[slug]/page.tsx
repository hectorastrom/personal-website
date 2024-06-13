

import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import React from "react";

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
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      {/* Add more project details here */}
    </div>
  );
};

export default ProjectPage;
