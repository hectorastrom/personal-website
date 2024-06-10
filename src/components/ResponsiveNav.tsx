import SideNav from "./SideNav1";
import TopNav from "./TopNav";

export default function ResponsiveNav() {
  return (
    <>
      <div className="hidden md:block fixed md:relative left-4 md:left-0">
        <SideNav />
      </div>
      <div className="md:hidden w-screen fixed top-0 left-0 z-10">
        <TopNav />
      </div>
    </>
  );
}
