import { regards } from "@/app/layout"

export default function Home() {
  return (
  <div className="py-10 px-10 font-regular flex-col justify-center items-center">
    <h1 className={` ${regards.className} text-6xl font-bold text-rose-400 mt-5 `}>Hector Astrom</h1>
    <p className="pt-2 text-slate-500 text-md">Backend Developer</p>
  </div> 
  );
}
