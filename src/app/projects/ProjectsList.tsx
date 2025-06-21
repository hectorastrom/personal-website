"use client";

import Link from "next/link";
import { useState } from "react";

interface Project {
  id: string;
  name: string;
  date: string;
}

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 5);
  const hasMoreProjects = projects.length > 5;

  return (
    <div className="space-y-0.5">
      {displayedProjects.map((project) => (
        <Link
          href={`/projects/${project.id}`}
          key={project.id}
          className="block rounded-lg p-2 transition-colors duration-200"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-body">
              {project.name}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {project.date.split('-')[0].trim()}
            </span>
          </div>
        </Link>
      ))}
      
      {hasMoreProjects && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full text-center py-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200 font-medium"
        >
          • • •
        </button>
      )}
    </div>
  );
} 