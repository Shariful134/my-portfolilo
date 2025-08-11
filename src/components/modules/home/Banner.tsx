import Image from "next/image";
import img1 from "../../../app/assests/img/sharifulR.png";
import { Button } from "@/components/ui/button";

import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CiViewBoard } from "react-icons/ci";

import Link from "next/link";
import FlipWords from "@/components/ui/filpWords";

const Banner = () => {
  return (
    <div id="banner" className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-6 xl:px-0 py-20 ">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side */}
          <div className="flex-1">
            <span className="inline-block px-4 py-1 bg-gray-300/25 text-gray-600 rounded-full text-sm mb-4">
              Welcome to my portfolio
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Hi, I'm <span className="text-gray-700">Shariful Islam</span>
            </h1>

            <h3 className="text-lg text-gray-700 font-semibold mb-4">
              Jr.{" "}
              <FlipWords
                words={[
                  "Full Stack Developer",
                  "Backend Developer",
                  "Frontend Developer",
                ]}
                duration={3000}
                className="text-gray-700"
              />
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Iam Passionate Full Stack Developer skilled in React.js, Next.js, Redux Toolkit, TypeScript, Node.js, Express.js, Mongoose and MongoDB. Proficient in HTML5, CSS3, Tailwind CSS, and JavaScript (ES6+) with experience in building responsive, scalable, and high-performance applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/messaging/compose/?recipient=md-shariful-&body=Hello%20Shariful,%20I%20came%20from%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                  <FaLinkedin className="w-4 h-4" /> LinkedIn
                </Button>
              </a>

              <a
                href="https://wa.me/8801762370111?text=Hello%20Shariful,%20I%20came%20from%20your%20portfolio%20website."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cursor-pointer bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                  <FaWhatsapp className="w-4 h-4" /> WhatsApp
                </Button>
              </a>

              <Link href="/projects">
                <Button className="border border-gray-400 text-gray-700 bg-gray-300 hover:bg-gray-400 cursor-pointer px-6 py-2 rounded-lg flex items-center gap-2">
                  <CiViewBoard className="w-4 h-4" /> View Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <Image
                src={img1}
                alt="Profile"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
