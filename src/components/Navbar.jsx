import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-purple-600 dark:text-purple-400 font-bold"
      : "text-gray-800 dark:text-gray-200";

  return (
    <nav className="flex justify-center gap-8 py-6 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 items-center">
      <Link to="/" className={isActive("/")}>
        Home
      </Link>
      <Link to="/education" className={isActive("/education")}>
        Education
      </Link>
      <Link to="/projects" className={isActive("/projects")}>
        Projects
      </Link>
      <Link to="/skills" className={isActive("/skills")}>
        Skills
      </Link>
      <Link to="/contact" className={isActive("/contact")}>
        Contact
      </Link>
      <div className="ml-6">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
