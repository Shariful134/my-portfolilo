import Image from "next/image";
import image from "../../../app/assests/image/img-1b.jpg";

import { AnimatedBeamMultipleOutputDemo } from "./AnimatedBeam";
const Skils = () => {
  // h-[100vh]
  return (
    <div
      id="skills"
      className="relative bg-[#0b0b0b] py-20 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Skills Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <h2
          className="text-center text-purple-400 text-4xl md:text-5xl font-extrabold mb-14
                 animate-fadeSlideUp animate-delay-100"
        >
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Skill Lists */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-16">
            {/* Technical Skills */}
            <div
              className="space-y-6 animate-fadeSlideUp animate-delay-300"
              style={{ animationFillMode: "forwards" }}
            >
              <h3 className="text-purple-400 text-2xl font-semibold mb-5 tracking-wide drop-shadow-lg">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-gray-300 text-base">
                <ul className="space-y-3 list-disc list-inside">
                  {[
                    "HTML",
                    "CSS",
                    "Bootstrap",
                    "Tailwind CSS",
                    "SASS",
                    "ShadCN UI",
                    "React.js",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="list-none sm:list-disc cursor-default transform transition-transform duration-300 hover:scale-110 hover:text-purple-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <ul className="list-none sm:list-disc space-y-3  list-inside">
                  {[
                    "Next.js",
                    "TypeScript",
                    "JavaScript",
                    "MongoDB",
                    "Mongoose",
                    "Node.js",
                    "Express.js",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="list-none sm:list-disc cursor-default transform transition-transform duration-300 hover:scale-110 hover:text-purple-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Soft Skills */}
            <div
              className="animate-fadeSlideUp animate-delay-500"
              style={{ animationFillMode: "forwards" }}
            >
              <h3 className="text-purple-400 text-2xl font-semibold mb-5 tracking-wide drop-shadow-lg">
                Soft Skills
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3 text-base max-w-md mx-auto md:mx-0">
                {[
                  "Effective Communication",
                  "Team Collaboration",
                  "Time Management",
                  "Self-Motivation",
                  "Leadership",
                ].map((skill) => (
                  <li
                    key={skill}
                    className="list-none sm:list-disc cursor-default transform transition-transform duration-300 hover:scale-110 hover:text-purple-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Animation or Graphic */}
          <div className="hidden md:flex justify-center items-center animate-fadeSlideUp animate-delay-700">
            <AnimatedBeamMultipleOutputDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
