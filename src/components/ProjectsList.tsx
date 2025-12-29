"use client";

import Link from "next/link";
import Image from "next/image";
import { emphasisFont } from "@/lib/fonts";

interface Project {
  id: string;
  name: string;
  date: string;
  image_path: string;
}

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {

  return (
    <div className="relative">
      {/* Projects list */}
      <div className="space-y-0">
        {projects.map((project, index) => (
          <div key={project.id} className="relative">
            <Link
              href={`/projects/${project.id}`}
              className="block rounded-lg p-2 transition-colors duration-200"
            >
              <div className="flex justify-between items-center">
                {/* Left side: project icon and name */}
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                    <Image
                      src={`/project_data/images/${project.image_path}`}
                      alt={project.name}
                      width={40}
                      height={40}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h2 className={`text-2xl font-bold text-body hover:text-emphasis`}>
                    {project.name}
                  </h2>
                </div>

                {/* Right side: year */}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {project.date.split('-')[0].trim()}
                </span>
              </div>
            </Link>

            {index < projects.length - 1 && (
              <div className="h-px bg-gray-200 dark:bg-gray-700 mx-2 mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 