import { FaGithub, FaLinkedin } from "react-icons/fa";
import myPhoto from "./myphoto.jpg"; // 🖼 Replace with your actual image file name
import { Link } from "react-router-dom";
import ResumeModal from "./ResumeModal";
import { useState } from "react";



  const Home = () => {
  const [showModal, setShowModal] = useState(false);

return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec] dark:from-[#0f172a] dark:to-[#1e293b] transition-all duration-500 px-4">

      {/* Glowing animated ring with hover effect */}
      <div className="relative w-56 h-56 mb-6 group hover:scale-105 hover:rotate-1 transition-all duration-500 ease-in-out">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500 blur-xl animate-pulse opacity-70 z-0 group-hover:blur-2xl group-hover:opacity-90"></div>
        <div className="relative w-56 h-56 rounded-full overflow-hidden border-[6px] border-white dark:border-gray-700 shadow-xl z-10 group-hover:shadow-2xl transition-all duration-500">
          <img
            src={myPhoto}
            alt="Samadrito Khamaru"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
          />
        </div>
      </div>

      {/* Name & tagline */}
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center">
        Hi, I'm Samadrito Khamaru
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mt-2">
        Aspiring AI Engineer & Full Stack Developer
      </p>

      {/* Social Icons */}
      <div className="flex gap-6 mt-4">
        <a
          href="https://github.com/samadrito10"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub className="text-3xl text-gray-700 dark:text-white hover:text-purple-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/samadrito-khamaru-67b190282?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin className="text-3xl text-gray-700 dark:text-white hover:text-blue-500" />
        </a>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
  className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 shadow-md hover:scale-105 transition-all ml-4"
  onClick={() => setShowModal(true)}
>
  Resume
</button>


  <Link to="/contact">
  <button className="bg-gray-300 dark:bg-gray-700 dark:text-white px-5 py-2 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 shadow-md hover:scale-105 transition-all">
    Contact Me
  </button>
</Link>
<ResumeModal show={showModal} onClose={() => setShowModal(false)} />
  
      </div>
    </div>
  );
};

export default Home;
