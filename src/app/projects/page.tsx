import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card";
import HoverCard from "@/components/ui/HoverCard";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Link from "next/link";

// Define the structure of the project data
interface Project {
  id: string;
  image_path: string;
  name: string;
  date: string;
  description: string;
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
    <>
      <h1 className="text-2xl md:text-3xl text-emphasis font-bold pb-6">
        Projects
      </h1>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            key={project.id}
            id={project.id}
          >
            <HoverCard>
              <Card className={`h-full`}>
                <CardHeader className="overflow-hidden">
                  <div className="overflow-hidden">
                    <CardTitle>
                      {project.name}
                    </CardTitle>
                    <CardDescription>{project.date}</CardDescription>
                  </div>
                  <CardImage>
                    <Image
                      src={`/project_data/images/${project.image_path}`}
                      alt={project.name}
                      width={100}
                      height={100}
                      className="object-contain w-full h-full rounded-xl"
                    />
                  </CardImage>
                </CardHeader>
                <CardContent className="">{project.description}</CardContent>
                <CardFooter className="flex flex-wrap">
                  {project.tags.slice(0, 3).map((tag: string) => (
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
          </Link>
        ))}
      </div>
    </>
  );
}
