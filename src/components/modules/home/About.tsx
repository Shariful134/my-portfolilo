import { BoxReveal } from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";
import image from "../../../app/assests/image/img5.avif";

import Image from "next/image";
export function About() {
  return (
    <div
      id="about"
      className="relative bg-[#0b0b0b] py-16 text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Silhouette Background"
          fill
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 flex flex-col items-center text-center space-y-6">
        <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
          <h2 className="text-purple-400 text-3xl md:text-5xl font-semibold">
            About Me
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            I am a dedicated Full Stack Developer with nearly 3 years of
            experience in coding and learning modern web technologies. Over the
            years, coding has grown from a skill into a true passion for me. I
            find joy in solving problems, building meaningful projects, and
            continuously pushing myself to improve.
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            As a motivated learner and a proud student of Programming Hero, I’m
            constantly sharpening my development skills and keeping up with
            industry trends. I thrive in collaborative environments and enjoy
            turning ideas into scalable digital solutions.
          </p>
        </BoxReveal>

        <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg mt-4">
            Explore
          </Button>
        </BoxReveal>
      </div>
    </div>
  );
}
