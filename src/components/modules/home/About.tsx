import { BoxReveal } from "@/components/magicui/box-reveal";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <div
      id="about"
      className="bg-gray-100 py-2 md:py-15 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-5 flex flex-col items-center text-center space-y-8">
        
        {/* Heading */}
        <BoxReveal boxColor="#3B82F6" duration={0.5}>
          <h2 className="text-gray-700 text-3xl md:text-5xl font-bold">
            About Me
          </h2>
        </BoxReveal>

        {/* Paragraph 1 */}
        <BoxReveal boxColor="#3B82F6" duration={0.5}>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            I am a passionate Full Stack Developer with nearly 3 years of
            experience in building modern, user-friendly web applications.
            Coding started as a skill and turned into a true passion — I enjoy
            solving problems, creating meaningful projects, and writing clean,
            efficient code.
          </p>
        </BoxReveal>

        {/* Paragraph 2 */}
        <BoxReveal boxColor="#3B82F6" duration={0.5}>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl leading-relaxed">
            As a proud student of Programming Hero, I am constantly learning,
            keeping up with industry trends, and improving my development
            skills. I thrive in collaborative environments and love turning
            creative ideas into scalable digital solutions.
          </p>
        </BoxReveal>

        {/* Button */}
        <BoxReveal boxColor="#3B82F6" duration={0.5}>
          <Button className="border border-gray-400 text-gray-700 bg-gray-300 hover:bg-gray-400 cursor-pointer px-6 py-2 rounded-lg flex items-center gap-2">
            Explore
          </Button>
        </BoxReveal>
      </div>
    </div>
  );
}
