import { title } from "../../public/fonts/fonts";

export default function Home() {
  return (
    <>
      <h1
        className={`font-title text-6xl md:text-7xl lg:text-8xl font-bold text-rose-400 mt-5 `}
      >
        Hector Astrom
      </h1>
      <p className="pt-2 text-slate-500 text-md">Backend Developer</p>
    </>
  );
}

