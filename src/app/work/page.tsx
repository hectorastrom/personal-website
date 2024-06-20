import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { GiRoundStar } from "react-icons/gi";
import Link from "next/link";
import HorDivider from "@/components/HorDivider";

export default function Page() {
  const courses: { [key: string]: string } = {
    "6.1010": "Fundamentals of Programming",
    "6.1210": "Introduction to Algorithms",
    "6.1200": "Math for Computer Science",
    "18.06": "Linear Algebra",
    "6.3900": "Introduction to Machine Learning",
  };


  return (
    <>
      <h1 className="text-2xl md:text-3xl text-emphasis font-bold pb-6">
        Work Experience
      </h1>

      <div className="py-4">
        <h3 className="text-opacity-75 text-default text-md font-bold">2024</h3>
        <HorDivider gradient={false} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>MIT Media Lab</CardTitle>
          <CardDescription>Researcher @ Sound(e)scape</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              - Designed experiments to determine psychoacoustic properties of
              emotionally restorative soundscapes
            </li>
            <li>
              - Developed research software for analysis of large-scale{" "}
              <a
                className="custom-link"
                href="https://arxiv.org/pdf/2207.01078"
                target="_blank"
              >
                ARAUS dataset
              </a>{" "}
              using pandas, SciPy, and SQL
            </li>
            <li>
              - Awarded{" "}
              <GiRoundStar className="inline-block text-amber-400 mb-1" /> 2024
              Outstanding UROP Student Award{" "}
              <GiRoundStar className="inline-block text-amber-400 mb-1" />{" "}
              following InterNoise 2024 Abstract Submission
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex flex-row gap-x-4 md:gap-x-8">
          <a
            href="https://www.media.mit.edu/projects/sound-e-scape/overview/"
            target="_blank"
            className="text-lg md:text-xl text-emphasis font-normal hover:saturate-200"
          >
            Overview
          </a>
          <a
            href="https://github.com/hectorastrom/ARAUS-Soundscapes-Affective-Analysis"
            target="_blank"
            className="text-lg md:text-xl text-emphasis font-normal hover:saturate-200"
          >
            GitHub
          </a>
        </CardFooter>
      </Card>

      {/* school information */}
      <h1 className="text-2xl md:text-3xl text-emphasis font-bold pb-6 mt-12">
        Relevant Coursework
      </h1>
      <ul className="space-y-2">
        {Object.entries(courses).map(([courseCode, courseName]) => (
          <li key={courseCode}>
            -{" "}
            <a
              className="custom-link"
              target="_blank"
              href={`https://student.mit.edu/catalog/search.cgi?search=${courseCode}&style=verbatim`}
            >
              {courseCode}
            </a>{" "}
            ({courseName})
          </li>
        ))}
      </ul>
    </>
  );
}
