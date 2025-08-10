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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="bg-purple-500 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto navbar p-0 m-0  pr-5 h-16 navbar ">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu bg-gray-900 menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  className={
                    pathname == "/"
                      ? "bg-gray-100/25 text-white sm:text-md md:text-lg font-semibold"
                      : " font-semibold text-white sm:text-md md:text-lg"
                  }
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname == "/technology"
                      ? "bg-gray-100/25 text-white sm:text-md md:text-lg font-semibold"
                      : "font-semibold text-white sm:text-md md:text-lg"
                  }
                  href="/technology"
                >
                  Skils
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname == "/projects"
                      ? "bg-gray-100/25 text-white sm:text-md md:text-lg font-semibold"
                      : "font-semibold text-white sm:text-md md:text-lg"
                  }
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname == "/education"
                      ? "bg-gray-100/25 text-white sm:text-md md:text-lg font-semibold"
                      : " font-semibold text-white sm:text-md md:text-lg"
                  }
                  href="/education"
                >
                  Education
                </Link>
              </li>

              <li>
                <Link
                  className={
                    pathname == "/contacts"
                      ? "bg-gray-100/25 text-white sm:text-md md:text-lg font-semibold"
                      : " font-semibold text-white sm:text-md md:text-lg"
                  }
                  href={"/contacts"}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  className={
                    pathname == "/blog"
                      ? "bg-gray-100/25 text-white  sm:text-md md:text-lg font-semibold"
                      : " font-semibold text-white sm:text-md md:text-lg"
                  }
                  href={"/blog"}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <Link href="/">
            <Image src={logo} alt="img" width={100} height={100}></Image>
          </Link>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className={
                  pathname == "/"
                    ? "bg-gray-100/25 sm:text-base md:text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname == "/technology"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href="/technology"
              >
                Skils
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname == "/projects"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathname == "/education"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href="/education"
              >
                Education
              </Link>
            </li>

            <li>
              <Link
                className={
                  pathname == "/contacts"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href={"/contacts"}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                className={
                  pathname == "/blog"
                    ? "bg-gray-100/25 text-lg font-semibold"
                    : "text-lg font-semibold"
                }
                href={"/blog"}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end pb-0 mb-0">
          <div className="navbar-end pb-0 mb-0">
  {user ? (
    <>
      {user?.role == "user" && (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            <div className="w-15 rounded-full border border-whtie">
              <Avatar>
                <AvatarImage
                  src="https://i.postimg.cc/cJ2f9Sbj/Screenshot-79.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profilef--gg
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLogOut}>logout</button>
            </li>
          </ul>
        </div>
      )}
      {user?.role == "admin" && (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            <div className="w-15 rounded-full border border-whtie">
              <Avatar>
                <AvatarImage
                  src="https://i.postimg.cc/cJ2f9Sbj/Screenshot-79.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLogOut}>logout</button>
            </li>
          </ul>
        </div>
      )}
    </>
  ) : (
   
    <a
      href="/cv/CV SHARIFUL ISLAM.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className=" btn bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
    >
      <Download className="w-4 h-4" /> Resume
    </a>
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
