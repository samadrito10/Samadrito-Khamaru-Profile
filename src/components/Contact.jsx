import { useState } from "react";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec] dark:from-[#0f172a] dark:to-[#1e293b] transition-all duration-500 px-4 py-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
        Contact Me
      </h2>

      {/* Contact info section */}
      <div className="flex flex-col sm:flex-row gap-6 mb-10 max-w-lg w-full justify-center">
        <a
  href="mailto:khamarusamadrito@gmail.com"
  className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg shadow-md px-6 py-3 hover:shadow-xl transition-shadow duration-300 cursor-pointer no-underline text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope className="text-2xl text-purple-600 dark:text-purple-400" />
  <span className="font-medium text-lg whitespace-nowrap">
    khamarusamadrito@gmail.com
  </span>
</a>


       <a
  href="https://www.instagram.com/samadritokhamaru/"
  className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg shadow-md px-6 py-3 hover:shadow-xl transition-shadow duration-300 cursor-pointer no-underline text-gray-800 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram className="text-2xl text-pink-500 dark:text-pink-400" />
  <span className="font-medium text-lg whitespace-nowrap">
    @samadritokhamaru
  </span>
</a>

      </div>

      {/* Contact form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
      >
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-semibold mb-1 block">
            Name
          </span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-semibold mb-1 block">
            Email
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700 dark:text-gray-300 font-semibold mb-1 block">
            Message
          </span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 transition resize-none"
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
