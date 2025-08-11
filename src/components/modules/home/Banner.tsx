import Image from "next/image";
import img1 from "../../../app/assests/img/sharifulR.png";
import img2 from "../../../app/assests/img/img-2.jpg";
import { Button } from "@/components/ui/button";

import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CiViewBoard } from "react-icons/ci";

import Link from "next/link";
import FlipWords from "@/components/ui/filpWords";


const Banner = () => {
  return (
    <div
      id="banner"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Background Image */}
      <Image
        src={img2}
        alt="Banner Background"
        fill
        className="object-cover opacity-20"
        priority
      />

      {/* Overlay Content */}
      <div className="relative container mx-auto py-20 px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side */}
          <div className="flex-1">
            <span className="inline-block  px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm mb-4">
              Welcome to my portfolio
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              <span className="text-gray-400">{"Hi, I'm"} </span> <span className="text-purple-400 ">Shariful Islam</span>
            </h1>

            <h3 className="text-lg text-gray-300 font-semibold mb-4">
              Jr.
              <FlipWords
        words={["Full Stack Developer", "Backend Developer", "Frontend Developer",]}
        duration={3000}
        className="text-purple-600"
      />
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I am a passionate full stack developer specialized in the MERN stack
              with experience building scalable, user-friendly applications.
              I love creating clean, efficient code and delivering high-quality solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/messaging/compose/?recipient=md-shariful-&body=Hello%20Shariful,%20I%20came%20from%20your%20portfolio%20website%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                  <FaLinkedin className="w-4 h-4" /> LinkedIn
                </Button>
              </a>

              <a
                href="https://wa.me/8801762370111?text=Hello%20Shariful,%20I%20came%20from%20your%20portfolio%20website."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cursor-pointer bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                  <FaWhatsapp className="w-4 h-4" /> WhatsApp
                </Button>
              </a>

              <Link
                href="/projects"
                
              >
                <Button className="cursor-pointer border border-purple-600 hover:bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                  <CiViewBoard  className="w-4 h-4" />Vew Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full border-4 border-gray-400 shadow-lg overflow-hidden">
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
