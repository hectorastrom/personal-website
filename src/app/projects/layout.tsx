import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hector - Projects",
  description: "Things I've Built",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 