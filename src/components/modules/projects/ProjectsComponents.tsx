"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import tutorlink from "../../../app/assests/image/banner-2.png";
import bookshop from "../../../app/assests/image/BookShop.png";
import bloggin from "../../../app/assests/image/nbloging.jpg";
import book from "../../../app/assests/image/book.avif";

const ProjectsComponents = () => {
  const projects = [
    {
      title: "TutorLink",
      type: "FullStack",
      img: tutorlink,
      live: "https://tutorlink-client-side.vercel.app/",
      frontend: "https://github.com/Shariful134/portfolio-tutorlink-client",
      backend: "https://github.com/Shariful134/portfolio-tutorlink-server",
      detailsLink: "/project1",
    },
    {
      title: "Book Shop",
      type: "FullStack",
      img: bookshop,
      live: "https://job-placement-client-3.vercel.app/",
      frontend: "https://github.com/Shariful134/job-placement-client-3",
      backend: "https://github.com/Shariful134/job-placement-server-3",
      detailsLink: "/project2",
    },
    {
      title: "Blog API",
      type: "Backend",
      img: bloggin,
      live: "https://complete-assignment-3-blog-ph.vercel.app/",
      github: "https://github.com/Shariful134/Assignment-3-PH-Blog",
      adminEmail: "Shariful324@gmail.com",
      adminPassword: "Shariful02#J%",
      detailsLink: "/project3",
    },
    {
      title: "Book Shop",
      type: "Backend",
      img: book,
      live: "https://assignment2-project-nine.vercel.app",
      github: "https://github.com/Shariful134/Assignment-2-project",
      detailsLink: "/",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-20">
      <div className="container mx-auto px-6 xl:px-0 max-w-screen-xl">
        <h2 className="text-gray-700 text-4xl md:text-5xl font-bold text-center mb-16 drop-shadow-sm">
          All Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-lg shadow-sm shadow-white border border-gray-25  transition-colors duration-300 flex flex-col"
            >
              <Image
                src={project.img}
                alt={`${project.title} Project`}
                width={600}
                height={400}
                className="rounded-t-lg w-full h-48 md:h-52 object-cover"
              />

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-gray-700 text-xl md:text-2xl font-semibold mb-1">
                  {project.title}{" "}
                  <small className="text-sm text-gray-500 font-normal">
                    ({project.type})
                  </small>
                </h3>

                {project.live && (
                  <p className="text-gray-600 text-sm mb-1 truncate">
                    <span className="font-semibold text-gray-700">Live: </span>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-400"
                      title={project.live}
                    >
                      {project.live.replace(/^https?:\/\//, "")}
                    </a>
                  </p>
                )}

                {project.frontend && (
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-semibold text-gray7600">Frontend: </span>
                    <a
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-400"
                    >
                      GitHub Repo
                    </a>
                  </p>
                )}

                {project.backend && (
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-semibold text-gray-700">Backend: </span>
                    <a
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-400"
                    >
                      GitHub Repo
                    </a>
                  </p>
                )}

                {!project.backend && project.github && (
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-semibold text-gray-700">GitHub: </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-400"
                    >
                      Repo Link
                    </a>
                  </p>
                )}

                {project.adminEmail && (
                  <>
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-semibold text-gray-700">
                        Admin Email:{" "}
                      </span>
                      {project.adminEmail}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      <span className="font-semibold text-gray-700">
                        Admin Password:{" "}
                      </span>
                      {project.adminPassword}
                    </p>
                  </>
                )}

                <div className="mt-auto">
                  <Link href={project.detailsLink} passHref>
                    <Button  className="w-full shadow-sm shadow-white border border-gray-400 text-gray-700 bg-gray-300 hover:bg-gray-400 cursor-pointer px-6 py-2 rounded-lg flex items-center gap-2">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponents;
