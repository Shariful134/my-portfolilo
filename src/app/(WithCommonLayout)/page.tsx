import Education from "@/components/modules/education/Education";
import { About } from "@/components/modules/home/About";
import Banner from "@/components/modules/home/Banner";
import { MarqueeDemo } from "@/components/modules/home/Marquee";
import Skils from "@/components/modules/home/Skils";

import ProjectsComponents from "@/components/modules/projects/ProjectsComponents";

export default function page() {
  return (
    <div>
      <Banner></Banner>
      <div className="hidden md:block">
        <MarqueeDemo></MarqueeDemo>
      </div>
      <About></About>
       <Skils/>
      <ProjectsComponents />
      <Education></Education>
    </div>
  );
}
