const Education = () => {
  return (
    <div className="py-10 text-gray-800 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-center text-gray-700 text-4xl md:text-5xl font-bold tracking-tight drop-shadow-sm mb-14 fadeSlideUp">
          Education & Training
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Textile Diploma */}
          <div
            className="bg-gray-100 rounded-lg shadow-sm border border-gray-300 p-6 w-full max-w-2xl h-48 md:h-52 mx-auto md:mx-0 flex flex-col justify-center relative fadeSlideUp
              hover:shadow-white transition-shadow transform hover:scale-[1.03] cursor-default"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="absolute top-0 left-0 h-full w-1 bg-white rounded-l-md"></span>

            <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-3 z-10 relative">
              Textile Diploma
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative">
              <span className="font-semibold text-gray-700">Institute:</span>{" "}
              Barishal Textile Institute, Gournadi, Barishal
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative mt-1">
              <span className="font-semibold text-gray-700">Year:</span> 2021 - 2025
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative mt-1">
              <span className="font-semibold text-gray-700">CGPA:</span> 3.34 / 4.00
            </p>
          </div>

          {/* Higher Secondary Certificate */}
          <div
            className="bg-gray-100 rounded-lg shadow-sm border border-gray-300 p-6 w-full max-w-2xl h-48 md:h-52 mx-auto md:mx-0 flex flex-col justify-center relative fadeSlideUp
              hover:shadow-white transition-shadow transform hover:scale-[1.03] cursor-default"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="absolute top-0 left-0 h-full w-1 bg-white rounded-l-md"></span>

            <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-3 z-10 relative">
              Higher Secondary Certificate
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative">
              <span className="font-semibold text-gray-700">Institute:</span>{" "}
              Tangail College, Tangail
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative mt-1">
              <span className="font-semibold text-gray-700">Year:</span> 2020 - 2022
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed z-10 relative mt-1">
              <span className="font-semibold text-gray-700">GPA:</span> 4.14 / 5.00
            </p>
          </div>

          {/* Courses */}
          {/* <div
            className="bg-gray-100 rounded-lg shadow-md border border-gray-300 p-6 w-full max-w-2xl h-48 md:h-auto mx-auto md:mx-0 flex flex-col justify-center relative fadeSlideUp
              hover:shadow-white transition-shadow transform hover:scale-[1.03] cursor-default"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="absolute top-0 left-0 h-full w-1 bg-white rounded-l-md"></span>

            <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-6 z-10 relative">
              Traning
            </h3>

            <div className="z-10 relative">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-gray-700">Course:</span>{" "}
                Next Level Web Development
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-gray-700">Institute:</span>{" "}
                Programming Hero
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-gray-700">Year:</span> 2024 - 2025
              </p>
            </div>
          </div>
          <div
            className="bg-gray-100 rounded-lg shadow-md border border-gray-300 p-6 w-full max-w-2xl h-48 md:h-auto mx-auto md:mx-0 flex flex-col justify-center relative fadeSlideUp
              hover:shadow-white transition-shadow transform hover:scale-[1.03] cursor-default"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="absolute top-0 left-0 h-full w-1 bg-white rounded-l-md"></span>

            <h3 className="text-xl md:text-2xl text-gray-700 font-semibold mb-6 z-10 relative">
              Traning
            </h3>

            <div className="z-10 relative">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-gray-700">Course:</span>{" "}
                Mern Stack Development
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-gray-700">Institute:</span>{" "}
                Creative It Institute
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                <span className="font-semibold text-gray-700">Year:</span> 2024 - 2025
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Education;
