const Education = () => {
  return (
    <div className="bg-[#000000] min-h-screen">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <h2 className="text-purple-400 text-3xl md:text-5xl font-extrabold mb-14 text-center fadeSlideUp">
          Education & Training
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Textile Diploma */}
          <div
            className="border-l-4 border-purple-500 pl-6 relative bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-purple-600/50 transition-shadow transform hover:scale-[1.03] cursor-default fadeSlideUp"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="absolute top-0 left-[-12px] w-5 h-5 rounded-full bg-purple-500 pulseGlow"></span>
            <h3 className="text-purple-400 text-2xl font-semibold mb-3">
              Textile Diploma
            </h3>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-purple-300">Institute:</span>{" "}
              Barishal Textile Institute, Gournadi, Barishal
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-purple-300">Year:</span> 2021
              - 2025
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-purple-300">CGPA:</span> 3.34
              / 4.00
            </p>
          </div>

          {/* Higher Secondary Certificate */}
          <div
            className="border-l-4 border-purple-500 pl-6 relative bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-purple-600/50 transition-shadow transform hover:scale-[1.03] cursor-default fadeSlideUp"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="absolute top-0 left-[-12px] w-5 h-5 rounded-full bg-purple-500 pulseGlow"></span>
            <h3 className="text-purple-400 text-2xl font-semibold mb-3">
              Higher Secondary Certificate
            </h3>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-purple-300">Institute:</span>{" "}
              Tangail College, Tangail
            </p>
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-purple-300">Year:</span> 2020
              - 2022
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-purple-300">GPA:</span> 4.14 /
              5.00
            </p>
          </div>

          {/* Courses */}
          <div
            className="border-l-4 border-purple-500 pl-6 relative bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-purple-600/50 transition-shadow transform hover:scale-[1.03] cursor-default fadeSlideUp"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="absolute top-0 left-[-12px] w-5 h-5 rounded-full bg-purple-500 pulseGlow"></span>
            <h3 className="text-purple-400 text-2xl font-semibold mb-6">
              Courses
            </h3>

            <div className="mb-5">
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-purple-300">Course:</span>{" "}
                Complete Web Development
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-purple-300">
                  Institute:
                </span>{" "}
                Programming Hero
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-purple-300">Year:</span>{" "}
                2023 - 2024
              </p>
            </div>

            <div>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-purple-300">Course:</span>{" "}
                Next Level Web Development
              </p>
              <p className="text-gray-300 mb-1">
                <span className="font-semibold text-purple-300">
                  Institute:
                </span>{" "}
                Programming Hero
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-purple-300">Year:</span>{" "}
                2024 - 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
