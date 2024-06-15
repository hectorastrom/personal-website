import SideNav from "./SideNav1";
import TopNav from "./TopNav";

interface ResponsiveNavProps {
  className?: string;
}

export default function ResponsiveNav({className} : ResponsiveNavProps) {
  return (
    <div className={className}>
      <div className="hidden md:block fixed md:relative left-4 md:left-0 ml:-mt-12">
        <SideNav />
      </div>
      <div className="md:hidden w-screen fixed top-0 left-0 z-10">
        <TopNav />
      </div>
    </div>
  );
}
