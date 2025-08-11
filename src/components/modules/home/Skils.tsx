const Skills = () => {
  return (
    <div className="py-10 text-gray-800 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className=" text-center text-gray-700 text-4xl md:text-5xl font-bold tracking-tight drop-shadow-sm mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
          <div
            className="bg-gray-100 rounded-lg shadow-sm border border-gray-300 p-6 w-full max-w-2xl h-48 md:h-52 mx-auto md:mx-0 flex flex-col justify-center relative fadeSlideUp
              hover:shadow-white transition-shadow transform hover:scale-[1.03] cursor-default"
            style={{ animationDelay: "0.1s" }}
          >
           
            <span className="absolute top-0 left-0 h-full w-1 bg-white rounded-l-md"></span>
           
            <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-3 z-10 relative">
              Languages
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative">
              <span className="font-semibold text-gray-700">Programming:</span>{" "}
              HTML, CSS, JavaScript, TypeScript, C
            </p>
          </div>

          {/* FrontEnd Card */}
          <div
            className="bg-gray-100 rounded-lg shadow-sm border border-gray-300 p-6 w-full max-w-2xl h-48 md:h-52 mx-auto md:mx-0 flex flex-col justify-center relative fadeSlideUp
              hover:shadow-white transition-shadow transform hover:scale-[1.03] cursor-default"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="absolute top-0 left-0 h-full w-1 bg-white rounded-l-md"></span>
           
            <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-3 z-10 relative">
              FrontEnd
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative">
              <span className="font-semibold text-gray-700">Frameworks:</span>{" "}
              Shadcn UI, Ant Design React, Vite, Redux, Next.js
            </p>
          </div>

          {/* BackEnd Card */}
          <div
            className="bg-gray-100 rounded-lg shadow-sm border border-gray-300 p-6 w-full max-w-2xl h-48 md:h-52 mx-auto md:mx-0 flex flex-col justify-center relative fadeSlideUp
              hover:shadow-white transition-shadow transform hover:scale-[1.03] cursor-default"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="absolute top-0 left-0 h-full w-1 bg-white rounded-l-md"></span>
           
            <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-3 z-10 relative">
              BackEnd
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative">
              <span className="font-semibold text-gray-700">Frameworks:</span>{" "}
              Node.js, Express.js
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-2 z-10 relative">
              <span className="font-semibold text-gray-700">Database:</span>{" "}
              MongoDB, Mongoose
            </p>
          </div>

          {/* Soft Skills Card */}
          <div
            className="bg-gray-100 rounded-lg shadow-sm border border-gray-300 p-6 w-full max-w-2xl h-48 md:h-52 mx-auto md:mx-0 flex flex-col justify-center relative fadeSlideUp
              hover:shadow-white transition-shadow transform hover:scale-[1.03] cursor-default"
            style={{ animationDelay: "0.7s" }}
          >
            <span className="absolute top-0 left-0 h-full w-1 bg-white rounded-l-md"></span>
           
            <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-3 z-10 relative">
              Soft Skills
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-2xl z-10 relative">
              Hard working, Quick learner, Active listening, Teamwork, Responsibility,
              Leadership, Motivation, Flexibility
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
