import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { GiRoundStar } from "react-icons/gi";
import HorDivider from "@/components/HorDivider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hector - Work",
  description: "Hector's Previous Work Experiences",
};

export default function Page() {
  // Links automatically created. Items in this exact order
  const courses: { [key: string]: string } = {
    "6.3900": "Introduction to Machine Learning",
    "6.1910": "Computation Structures",
    "6.1010": "Fundamentals of Programming",
    "6.1210": "Introduction to Algorithms",
    "6.1903": "C and Assembly",
    "6.1200": "Math for Computer Science",
    "18.600": "Probability and Random Variables",
    "18.06": "Linear Algebra",
    "6.2000": "Circuits and Electronics",
  };


  return (
    <>
      <h1 className="text-2xl lg:text-3xl text-emphasis font-bold pb-4">
        Work Experience
      </h1>

      <div className="py-4">
        <h3 className="text-opacity-75 text-default text-lg md:text-xl font-bold">
          Jan 2025 - Now
        </h3>
        <HorDivider gradient={false} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>MIT Brain & Cognitive Sciences</CardTitle>
          <CardDescription>Researcher @ Boyden Lab</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-2">
            <li>
              - Homogenized and{" "}
              <a
                className="custom-link"
                href="https://arxiv.org/abs/2411.12091"
                target="_blank"
              >
                open-sourced neural datasets
              </a>{" "}
              for next time-step neural activity modeling in <i>C. elegans</i>.
            </li>
          </ul>
        </CardContent>
        <CardFooter className="flex flex-row gap-x-4 md:gap-x-8">
          <a
            href="https://synthneuro.org/publications/scaling-properties-for-artificial-neural-network-models-of-a-small-nervous-system/"
            target="_blank"
            className="text-lg md:text-xl text-emphasis font-normal hover:saturate-200"
          >
            Overview
          </a>
          <a
            href="https://github.com/qsimeon/worm-data-preprocess"
            target="_blank"
            className="text-lg md:text-xl text-emphasis font-normal hover:saturate-200"
          >
            GitHub
          </a>
        </CardFooter>
      </Card>

      <div className="py-4">
        <h3 className="text-opacity-75 text-default text-lg md:text-xl font-bold">
          Dec 2023 - Jul 2024
        </h3>
        <HorDivider gradient={false} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>MIT Media Lab</CardTitle>
          <CardDescription>Researcher @ Sound(e)scape</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 mb-2">
            <li>
              - Designed experiments to determine psychoacoustic features of
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
              - Investigated machine learning architectures to predict
              restoration from psychoacoustic features of soundscapes
            </li>
            <li>
              - Awarded{" "}
              <GiRoundStar className="inline-block text-amber-400 mb-1" /> 2024
              MIT Outstanding UROP Student Award{" "}
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
      <h1 className="text-2xl lg:text-3xl text-emphasis font-bold pb-4 mt-12">
        Relevant Coursework
      </h1>
      <ul className="space-y-2">
        {Object.entries(courses).map(([courseCode, courseName]) => (
          <li key={courseCode} className="text-base md:text-lg lg:text-xl">
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
