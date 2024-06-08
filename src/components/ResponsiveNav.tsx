import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";

export default function ResponsiveNav() {
  return (
    <>
      <div className="hidden sm:block fixed sm:relative left-4 sm:left-0">
        <SideNav />
      </div>
      <div className="sm:hidden w-full fixed top-0 left-0 z-10">
        <TopNav />
      </div>
    </>
  );
}
