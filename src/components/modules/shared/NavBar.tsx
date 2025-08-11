"use client";
import { useUser } from "@/app/context/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../app/assests/img/web.png";
import { usePathname } from "next/navigation";
import { logout } from "@/app/services/auth";
import Loading from "./Loading";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export const protectedRoutes = ["/admin", "/admin/:page"];

const NavBar = () => {
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const pathname = usePathname();

  const handleLogOut = async () => {
    await logout();
    window.location.reload();
  };

  if (isLoading) return <Loading />;

  // Desktop links styling: active and inactive
  const linkClass = (path: string) =>
    pathname === path
      ? "bg-gray-400/25 text-gray-800 text-sm md:text-base font-semibold"
      : "text-gray-700 text-sm md:text-base font-semibold";

  // Mobile dropdown links styling: active and inactive
  const mobileLinkClass = (path: string) =>
    pathname === path
      ? "bg-gray-400/25 text-gray-800 text-sm md:text-base font-semibold"
      : "text-gray-700 text-sm md:text-base font-semibold";

  return (
    <div className="bg-gray-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto navbar p-0 m-0 h-16 pr-4 xl:pr-0 ps-0 lg:ps-5">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu bg-gray-50 menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link className={mobileLinkClass("/")} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={mobileLinkClass("/technology")} href="/technology">
                  Skills
                </Link>
              </li>
              <li>
                <Link className={mobileLinkClass("/projects")} href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className={mobileLinkClass("/education")} href="/education">
                  Education
                </Link>
              </li>
              <li>
                <Link className={mobileLinkClass("/contacts")} href="/contacts">
                  Contact
                </Link>
              </li>
              
            </ul>
          </div>
          <Link href="/">
            <Image src={logo} alt="Logo" width={90} height={90} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className={linkClass("/")} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={linkClass("/technology")} href="/technology">
                Skills
              </Link>
            </li>
            <li>
              <Link className={linkClass("/projects")} href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className={linkClass("/education")} href="/education">
                Education
              </Link>
            </li>
            <li>
              <Link className={linkClass("/contacts")} href="/contacts">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-15 rounded-full border border-white">
                  <Avatar>
                    <AvatarImage
                      src="https://i.postimg.cc/cJ2f9Sbj/Screenshot-79.png"
                      alt="Profile"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <a
              href="/cv/CV SHARIFUL ISLAM.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm md:text-base font-semibold"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
