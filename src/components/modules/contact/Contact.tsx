import { PhoneCall } from "lucide-react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <BoxReveal boxColor={"#3B82F6"} duration={0.5}>
          <h2 className="text-gray-700 pt-8 md:pt-15 pb-5 text-2xl md:text-5xl">
            Contact Me
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={"#3B82F6"} duration={0.5}>
          <h2 className="text-gray-700 pt-8 md:pt-15 pb-5 text-xl md:text-3xl">
            Md. Sharifl Islam
          </h2>
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-gray-700">Contact</h2>

            <div className="flex items-center gap-4">
              <PhoneCall className="text-gray-700 w-6 h-6" />
              <span className="text-lg font-medium">
                +8801797579562, +8801762370111
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-green-500 w-6 h-6" />
              <a
                href="https://wa.me/8801762370111?text=Hello%20Shariful,%20I%20came%20from%20your%20portfolio%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-green-500 transition"
              >
                +8801762370111
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-5">
              <FaLinkedin className="text-blue-500 w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/shariful-islam-316895264/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-blue-400 transition break-words"
              >
                linkedin.com/in/shariful-islam-316895264/
              </a>
            </div>

          
        </BoxReveal>
      </div>
    </div>
  );
};

export default Contact;
