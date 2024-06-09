import NameTitle from "@/components/NameTitle";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <NameTitle text="Hi!" />
        <p>
          I'm Hector, a rising sophomore at{" "}
          <a className="highlight-color" href="https://www.eecs.mit.edu/">
            MIT
          </a>{" "}
          studying Computer Science & Electrical Engineering.
        </p>
      </div>
    </>
  );
}

