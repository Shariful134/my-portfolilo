import { PhoneCall } from "lucide-react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Contact Section */}
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

          {/* LinkedIn & Github Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-gray-700">LinkedIn & Github</h2>

            <div className="flex items-center gap-4">
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

            <div className="flex items-center gap-4">
              <FaGithub className="text-gray-800 w-6 h-6" />
              <a
                href="https://github.com/Shariful134"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium hover:text-blue-400 transition break-words"
              >
                github.com/Shariful134
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-16 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shariful Islam. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
