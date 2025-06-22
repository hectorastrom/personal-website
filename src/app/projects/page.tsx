import fs from "fs";
import path from "path";
import Link from "next/link";
import ProjectsList from "./ProjectsList";
import { emphasisFont } from "@/lib/fonts";

// Define the structure of the project data
interface Project {
  id: string;
  name: string;
  date: string;
}

export default function Page() {
  // Read the JSON file
  const filePath = path.join(
    process.cwd(),
    "public",
    "project_data",
    "projects.json"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const defaults = data.defaults;
  const projects: Project[] = data.projects.map(
    (project: Partial<Project>) => ({
      ...defaults,
      ...project,
    })
  );

  // Sort projects by date in descending order (newest first)
  projects.sort((a, b) => {
    const dateA = parseInt(a.date.split('-')[0].trim());
    const dateB = parseInt(b.date.split('-')[0].trim());
    return dateB - dateA;
  });

  return (
    <>
      <h1 className={`text-2xl md:text-3xl text-emphasis font-bold ${emphasisFont.className} pb-6`}>
        Projects
      </h1>
      <ProjectsList projects={projects} />
    </>
  );
} 