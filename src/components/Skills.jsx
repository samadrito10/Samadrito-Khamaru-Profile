import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "SQL", icon: <FaDatabase className="text-gray-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Java", icon: <span className="text-red-600 text-4xl font-bold">J</span> },
  { name: "C", icon: <span className="text-blue-600 text-4xl font-bold">C</span> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-100 dark:bg-gray-800 transition duration-500">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Skills & Technologies
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 shadow-md rounded-xl p-4 hover:scale-105 transition transform duration-300"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-gray-800 dark:text-white text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
