const Education = () => {
  const educationList = [
    {
      title: "B.Tech in Computer Science Engineering",
      institution: "Techno Bengal Institute of Technology, Kolkata",
      duration: "2022 - 2026 (Expected)",
      details: "",
    },
    {
      title: "Higher Secondary School (10+2)",
      institution: "Bidhannagar Govt. High School, Kolkata",
      duration: "2020 - 2022",
      details: "Subjects: Physics, Maths, Chemistry, Computer Science",
    },
    {
      title: "Secondary School (10th Boards)",
      institution: "Bidhannagar Municipal School, Kolkata",
      duration: "Completed 2020",
      details: "",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec] dark:from-[#0f172a] dark:to-[#1e293b] transition-all duration-500">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Education
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {educationList.map(({ title, institution, duration, details }, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-1">{institution}</p>
            <p className="text-gray-500 dark:text-gray-400 mt-1 italic">{duration}</p>
            {details && (
              <p className="text-gray-600 dark:text-gray-300 mt-2">{details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
