import { PhoneCall } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#020817] text-gray-300">
      <footer className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Contact Section */}
          <div className="flex-1 space-y-5">
            <h2 className="text-2xl font-bold text-purple-400">Contact</h2>

            <div className="flex items-center gap-3">
              <PhoneCall className="text-purple-400 text-2xl" />
              <span className="text-base">+8801797579562, +8801762370111</span>
            </div>

            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-green-400 text-2xl" />
              <span className="text-base">+8801762370111</span>
            </div>
          </div>

          {/* LinkedIn Section */}
          <div className="flex-1 space-y-5">
            <h2 className="text-2xl font-bold text-purple-400">
              LinkedIn & Github
            </h2>

            <div className="flex items-start gap-3">
              <FaLinkedin className="text-blue-500 text-2xl mt-1" />
              <a
                href="https://www.linkedin.com/in/shariful-islam-316895264/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 text-base break-words"
              >
                https://www.linkedin.com/in/shariful-islam-316895264/
              </a>
            </div>
            <div className="flex items-start gap-3">
              <FaGithub className="text-blue-500 text-2xl mt-1" />
              <a
                href=" https://github.com/Shariful134"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 text-base break-words"
              >
                https://github.com/Shariful134
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Shariful Islam. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
