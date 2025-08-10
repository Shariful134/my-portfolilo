"use client";

import style from "./Project.module.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import tutorlink from "../../../app/assests/image/banner-2.png";
import bookshop from "../../../app/assests/image/BookShop.png";
import bloggin from "../../../app/assests/image/nbloging.jpg";
import book from "../../../app/assests/image/book.avif";
const ProjectsComponents = () => {
  return (
    <div className={`${style.iamgeSetup}`}>
      <div className="container mx-auto px-4 max-w-screen-xl py-10">
        <h2 className="text-purple-400 text-3xl md:text-5xl font-bold text-center mb-12">
          All Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg animated-border">
            <Image
              src={tutorlink}
              alt="TutorLink Project"
              width={600}
              height={400}
              className="rounded-lg mb-4 w-full h-60 object-cover"
            />
            <h3 className="text-purple-400 text-2xl font-semibold mb-2">
              TutorLink{" "}
              <small className="text-sm text-gray-400">(FullStack)</small>
            </h3>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-semibold text-purple-400">Live:</span>{" "}
              <a
                href="https://tutorlink-client-side.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm"
              >
                tutorlink-client-side.vercel.app
              </a>
            </p>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-semibold text-purple-400">Frontend:</span>{" "}
              <a
                href="https://github.com/Shariful134/portfolio-tutorlink-client"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub Link
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-purple-400">Backend:</span>{" "}
              <a
                href="https://github.com/Shariful134/portfolio-tutorlink-server"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub Link
              </a>
            </p>
            <Link href="/project1" passHref>
              <Button className="mt-4 bg-purple-500 hover:bg-purple-600">
                Details
              </Button>
            </Link>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg animated-border">
            <Image
              src={bookshop}
              alt="Book Shop"
              width={600}
              height={400}
              className="rounded-lg mb-4 w-full h-60 object-cover"
            />
            <h3 className="text-purple-400 text-2xl font-semibold mb-2">
              Book Shop{" "}
              <small className="text-sm text-gray-400">(FullStack)</small>
            </h3>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-semibold text-purple-400">Live:</span>{" "}
              <a
                href="https://job-placement-client-3.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm"
              >
                job-placement-client-3.vercel.app
              </a>
            </p>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-semibold text-purple-400">Frontend:</span>{" "}
              <a
                href="https://github.com/Shariful134/job-placement-client-3"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub Link
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-purple-400">Backend:</span>{" "}
              <a
                href="https://github.com/Shariful134/job-placement-server-3"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub Link
              </a>
            </p>
            <Link href="/project2" passHref>
              <Button className="mt-4 bg-purple-500 hover:bg-purple-600">
                Details
              </Button>
            </Link>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg animated-border">
            <Image
              src={bloggin}
              alt="Blog Backend"
              width={600}
              height={400}
              className="rounded-lg mb-4 w-full h-60 object-cover"
            />
            <h3 className="text-purple-400 text-2xl font-semibold mb-2">
              Blog API{" "}
              <small className="text-sm text-gray-400">(Backend)</small>
            </h3>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-semibold text-purple-400">Live:</span>{" "}
              <a
                href="https://complete-assignment-3-blog-ph.vercel.app/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend Live Link
              </a>
            </p>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-semibold text-purple-400">GitHub:</span>{" "}
              <a
                href="https://github.com/Shariful134/Assignment-3-PH-Blog"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-purple-400">
                Admin Email:
              </span>{" "}
              Shariful324@gmail.com
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-purple-400">
                Admin Password:
              </span>{" "}
              Shariful02#J%
            </p>
            <Link href="/project3" passHref>
              <Button className="mt-4 bg-purple-500 hover:bg-purple-600">
                Details
              </Button>
            </Link>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg animated-border">
            <Image
              src={book}
              alt="Assignment 2 Backend"
              width={600}
              height={400}
              className="rounded-lg mb-4 w-full h-60 object-cover"
            />
            <h3 className="text-purple-400 text-2xl font-semibold mb-2">
              Book Shop{" "}
              <small className="text-sm text-gray-400">(Backend)</small>
            </h3>
            <p className="text-gray-300 text-sm mb-1">
              <span className="font-semibold text-purple-400">Live:</span>{" "}
              <a
                href="https://assignment2-project-nine.vercel.app"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                assignment2-project-nine.vercel.app
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              <span className="font-semibold text-purple-400">GitHub:</span>{" "}
              <a
                href="https://github.com/Shariful134/Assignment-2-project"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </p>
            <Link href="/" passHref>
              <Button className="mt-4 bg-purple-500 hover:bg-purple-600">
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponents;
