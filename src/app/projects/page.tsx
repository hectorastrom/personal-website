import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HoverCard from "@/components/ui/HoverCard";
import Image from "next/image";
import fs from "fs";
import path from "path";

// Define the structure of the project data
interface Project {
  id: string;
  image_name: string;
  name: string;
  date: string;
  description: string;
  rowStart: string;
  colStart: string;
  rowSpan: string;
  colSpan: string;
  smRowStart: string;
  smColStart: string;
  smRowSpan: string;
  smColSpan: string;
  mdRowStart: string;
  mdColStart: string;
  mdRowSpan: string;
  mdColSpan: string;
  tags: string[];
  github?: string;
  website?: string;
  devpost?: string;
}

export default async function Page() {
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

  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <HoverCard key={project.id} id={project.id}>
          <Card key={project.id} className={`h-full`} id={project.id}>
            <CardHeader>
              <div className="flex flex-row justify-between items-center space-x-1">
                <CardTitle>{project.name}</CardTitle>
                <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl border-2 border-default/25">
                  <Image
                    src={`/project_data/images/${project.image_name}`}
                    alt={project.name}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full rounded-xl"
                  />
                </div>
              </div>
              <CardDescription>{project.date}</CardDescription>
            </CardHeader>
            <CardContent className="">{project.description}</CardContent>
            <CardFooter className="flex flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 mb-2 bg-gray-200 rounded-full px-2 py-1 text-xs md:text-sm lg:text-base"
                >
                  {tag}
                </span>
              ))}
            </CardFooter>
          </Card>
        </HoverCard>
      ))}
    </div>
  );
};
