import React from "react";

const ResumeModal = ({ show, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Blurred, darkened background */}
      <div
        className="absolute inset-0 backdrop-blur-md bg-black/60 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div
        className={`relative w-full max-w-4xl h-[90vh] rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 bg-white dark:bg-gray-900 ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 text-2xl hover:text-red-500 transition-transform hover:scale-125 z-10"
        >
          &times;
        </button>

        {/* Resume PDF */}
        <iframe
          src="/SAMADRITO_KHAMARU_RESUME_.pdf"
          title="Resume"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeModal;
