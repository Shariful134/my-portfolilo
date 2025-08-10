import Education from "@/components/modules/education/Education";
import { About } from "@/components/modules/home/About";
import Banner from "@/components/modules/home/Banner";
import { MarqueeDemo } from "@/components/modules/home/Marquee";

import ProjectsComponents from "@/components/modules/projects/ProjectsComponents";
import Technology from "@/components/modules/technology/TechNology";
export default function page() {
  return (
    <div>
      <Banner></Banner>
      <div className="hidden md:block">
        <MarqueeDemo></MarqueeDemo>
      </div>
      <About></About>
      <Technology></Technology>
      <ProjectsComponents />
      <Education></Education>
    </div>
  );
}
