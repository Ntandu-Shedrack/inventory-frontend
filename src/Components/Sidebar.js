import {
  // MoreVertical,
  ChevronLast,
  ChevronFirst,
  Moon,
  Sun,
} from "lucide-react";
import { useContext, createContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <aside
      className={`flex flex-col h-screen border-r shadow-sm transition-all ${
        expanded ? "w-64" : "w-20"
      } bg-white dark:bg-gray-900`}
    >
      {/* Sidebar Header */}
      <div className="p-4 pb-2 flex justify-between items-center">
        <img
          src="./app-logo.png"
          className={`overflow-hidden transition-all ${
            expanded ? "w-32" : "w-0"
          }`}
          alt="Logo"
        />
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {expanded ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>

      {/* Sidebar Items Container (Takes up all available space) */}
      <SidebarContext.Provider value={{ expanded }}>
        <ul className="flex-1 px-3">{children}</ul>
      </SidebarContext.Provider>

      {/* Theme Switcher - Fixed at Bottom */}
      <div className="p-3 mt-auto flex gap-2">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="flex items-center justify-center gap-3 p-2 rounded-lg w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
        >
          {theme === "light" ? (
            <Moon className="text-gray-600" />
          ) : (
            <Sun className="text-yellow-400" />
          )}
          <span
            className={`overflow-hidden transition-all ${
              expanded ? "w-auto" : "w-0 hidden"
            }`}
          >
            {theme === "light" ? "Dark" : "Light"}
          </span>
        </button>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export function SidebarItem({ icon, text, path }) {
  const { expanded } = useContext(SidebarContext);
  const location = useLocation();

  return (
    <Link to={path}>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group 
          ${
            location.pathname === path
              ? "bg-indigo-200 dark:bg-indigo-700 text-indigo-800 dark:text-white"
              : "hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0 hidden"
          }`}
        >
          {text}
        </span>
        {location.pathname === path && (
          <div className="absolute right-2 w-2 h-2 rounded bg-indigo-400 dark:bg-indigo-300" />
        )}
      </li>
    </Link>
  );
}

SidebarItem.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
