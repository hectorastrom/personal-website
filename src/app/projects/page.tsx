import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  rowEnd: string;
  colEnd: string;
  tags: string[];
  github: string;
  website : string;
  devpost : string;
}

const Page = async () => {
  // Read the JSON file
  const filePath = path.join(process.cwd(), "public", "project_data", "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const projects: Project[] = JSON.parse(fileContents);

  return (
    <div className="grid grid-flow-col gap-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          className={`${project.rowStart} ${project.colStart} ${project.rowEnd} ${project.colEnd}`}
          id={project.id}
        >
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row justify-between items-center">
                {project.name}
                <div className="h-12 w-12 md:h-182 md:w-18 rounded-full border-2">
                  <Image
                    src={`/project_data/images/${project.image_name}`}
                    alt={project.name}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full rounded-full"
                  />
                </div>
              </div>
            </CardTitle>

            <CardDescription>{project.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.description}</p>
          </CardContent>
          <CardFooter>
            {project.tags.map((tag) => (
                <>
                <span key={tag}>{tag}, </span>
                </>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Page;
