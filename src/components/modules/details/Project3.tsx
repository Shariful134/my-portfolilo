import { BoxReveal } from "@/components/magicui/box-reveal";
import style from "./Projects.module.css";
import { TextAnimate } from "@/components/magicui/text-animate";

const Project3 = () => {
  return (
    <div className={`${style.iamgeSetup2}`}>
      <div className="container mx-auto px-2">
        <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
          <h2 className="text-purple-400 px-2 pt-8 md:pt-15 pb-5 text-2xl md:text-5xl">
            📘 Project: Blogify – A Role-Based Blogging Platform
          </h2>
        </BoxReveal>

        <div>
          <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
            <p className="text-lg text-purple-400 max-w-2xl">🔍 Overview:</p>
            <p className="text-lg text-gray-300 max-w-2xl">
              Blogify is a full-featured backend application built with
              TypeScript, Express.js, Node.js, and MongoDB using Mongoose. It
              offers a secure and scalable blogging platform with distinct user
              roles – Admin and User – where users can create and manage their
              blogs, and admins have moderation capabilities.
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#AD46FF"} duration={0.5}>
            <h2 className="text-purple-400 pt-10 pb-5 text-2xl md:text-5xl">
              🌟 Core Features
            </h2>
          </BoxReveal>

          <div className="flex flex-col lg:flex-row justify-between pb-10 px-2 gap-5">
            <div>
              <TextAnimate
                className="text-lg text-purple-400 max-w-2xl"
                animation="slideLeft"
                by="character"
              >
                🔐 Authentication & Authorization
              </TextAnimate>
              <p className="text-lg text-gray-300 max-w-2xl">
                <li>JWT-based secure authentication</li>
                <li>Role-based access control (Admin/User)</li>
                <li>Admins are created manually in the database</li>
                <li>
                  Blocked users are restricted from performing any actions
                </li>
              </p>

              <TextAnimate
                className="text-lg mt-5 text-purple-400 max-w-2xl"
                animation="slideLeft"
                by="character"
              >
                ✍️ User Features
              </TextAnimate>
              <p className="text-lg text-gray-300 max-w-2xl">
                <li>User Registration and Login</li>
                <li>Create, Read, Update, and Delete (CRUD) own blogs</li>
                <li>Blogs include: title, content, author, timestamps</li>
              </p>

              <TextAnimate
                className="text-lg mt-5 text-purple-400 max-w-2xl"
                animation="slideLeft"
                by="character"
              >
                ⚠️ Robust Error Handling
              </TextAnimate>
              <p className="text-lg text-gray-300 max-w-2xl">
                <li>Zod validation with detailed error responses</li>
                <li>
                  Custom error classes for ZOD_ERROR, AUTH_ERROR,
                  AUTHORIZATION_ERROR, NOT_FOUND_ERROR, INTERNAL_SERVER_ERROR
                </li>
              </p>
              <TextAnimate
                className="text-lg text-purple-400 max-w-2xl"
                animation="slideLeft"
                by="character"
              >
                👮 Admin Features
              </TextAnimate>
              <p className="text-lg text-gray-300 max-w-2xl">
                <li>Can delete any blog</li>
                <li>Can block any user (sets isBlocked = true)</li>
                <li>Cannot update blogs</li>
                <li>Admin-only protected routes using middleware</li>
              </p>
            </div>

            <div>
              <TextAnimate
                className="text-lg mt-5 text-purple-400 max-w-2xl"
                animation="slideLeft"
                by="character"
              >
                🌍 Public Blog API
              </TextAnimate>
              <p className="text-lg text-gray-300 max-w-2xl">
                <li>Anyone can view published blogs</li>
                <li>Search blogs by keyword (in title/content)</li>
                <li>Sort blogs by title, createdAt, etc.</li>
                <li>Filter blogs by author</li>
              </p>

              <TextAnimate
                className="text-lg mt-5 text-purple-400 max-w-2xl"
                animation="slideLeft"
                by="character"
              >
                🛠 Tech Stack
              </TextAnimate>
              <p className="text-lg text-gray-300 max-w-2xl">
                <li>
                  <strong>Backend:</strong> Node.js, Express.js, TypeScript
                </li>
                <li>
                  <strong>Database:</strong> MongoDB (Mongoose)
                </li>
                <li>
                  <strong>Auth:</strong> JWT, bcrypt
                </li>
                <li>
                  <strong>Validation:</strong> Zod
                </li>
                <li>
                  <strong>Deployment:</strong> Render (or Vercel for testing)
                </li>
              </p>

              <TextAnimate
                className="text-lg mt-5 text-purple-400 max-w-2xl"
                animation="slideLeft"
                by="character"
              >
                📂 Important Links & Credentials
              </TextAnimate>
              <p className="text-lg text-gray-300 max-w-2xl">
                <li>
                  <strong>Live API:</strong> [Live URL here]
                </li>
                <li>
                  <strong>GitHub Repo (Server):</strong> [GitHub Link here]
                </li>
                <li>
                  <strong>Admin Login:</strong>
                </li>
                <ul className="pl-5">
                  <li>Email: admin@example.com</li>
                  <li>Password: admin123</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;
