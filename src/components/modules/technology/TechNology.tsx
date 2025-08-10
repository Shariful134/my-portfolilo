const Technology = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col xl:flex-row justify-between max-w-screen-xl gap-12">
      {/* Left Column */}
      <div className="space-y-12">
        <div
          className="animate-fade-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-purple-400 pt-8 md:pt-16 pb-6 text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            Skills
          </h2>
        </div>

        <div
          className="animate-fade-slide-up space-y-6"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="border-l-4 border-purple-500 pl-6 mb-10 rounded-md bg-gray-900 p-4">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold mb-3">
              Languages
            </h3>
            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">Programming:</span>{" "}
              Html, Css, JavaScript, TypeScript, C
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6 mb-10 rounded-md bg-gray-900 p-4">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold mb-3">
              FrontEnd
            </h3>
            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">Frameworks:</span>{" "}
              Shadcn UI, Ant Design React, Vite, Redux, Next.js
            </p>
          </div>
        </div>

        <div
          className="animate-fade-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="border-l-4 border-purple-500 pl-6 mb-10 rounded-md bg-gray-900 p-4">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold mb-3">
              BackEnd
            </h3>
            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">Frameworks:</span>{" "}
              Node.js, Express.js
            </p>
            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">Database:</span>{" "}
              MongoDB, Mongoose
            </p>
            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">Validation:</span>{" "}
              Zod, JWT
            </p>
          </div>
        </div>

        {/* New Soft Skills Section */}
        <div
          className="animate-fade-slide-up"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="border-l-4 border-purple-500 pl-6 mb-10 rounded-md bg-gray-900 p-4">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold mb-3">
              Soft Skills
            </h3>
            <p className="text-gray-300 mt-2 text-lg max-w-lg leading-relaxed">
              Hard working, Quick learner, Active listening, Teamwork,
              Responsibility, Management, Leadership, Motivation, Flexibility,
              Adaptability, Critical Analysis
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-12">
        <div
          className="animate-fade-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-purple-400 pt-8 md:pt-16 pb-6 text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
            Upcoming Skills
          </h2>
        </div>

        <div
          className="animate-fade-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="border-l-4 border-purple-500 pl-6 mb-10 rounded-md bg-gray-900 p-4">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold mb-3">
              Languages
            </h3>
            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">Programming:</span>{" "}
              C++, Python, Java
            </p>
          </div>
        </div>

        <div
          className="animate-fade-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="border-l-4 border-purple-500 pl-6 mb-10 rounded-md bg-gray-900 p-4">
            <h3 className="text-xl md:text-2xl text-purple-300 font-semibold mb-3">
              Backend Technologies
            </h3>

            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">Frameworks:</span>{" "}
              Node.js, Express.js
            </p>

            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">Databases:</span>{" "}
              PostgreSQL, SQL (RDBMS Concepts)
            </p>

            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">
                ORM & API Tools:
              </span>{" "}
              Prisma, GraphQL
            </p>

            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">
                Development Tools:
              </span>{" "}
              Vite, Jest
            </p>

            <p className="text-gray-300 mt-2 text-lg leading-relaxed">
              <span className="text-purple-400 font-medium">
                Cloud & DevOps:
              </span>{" "}
              Docker, AWS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
