import React, { useState, useEffect } from "react";
import { UserCircleIcon, AcademicCapIcon, DocumentIcon, FolderIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load the active link from local storage if available
    const savedLink = localStorage.getItem("activeLink") || "home"; // Default to 'home'
    setActiveLink(savedLink);
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    localStorage.setItem("activeLink", link); // Save the active link to local storage
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white border-b border-b-sky-700 shadow-md shadow-sky-500 p-4">
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-8 h-8" />
              ) : (
                <Bars3Icon className="w-8 h-8" />
              )}
            </button>
          </div>
          <div className="text-lg font-bold absolute top-[19px] left-12">Logo</div>
        </div>
        <div
          className={`md:mt-0 flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 justify-center w-dvw md:flex ${isMenuOpen ? "block" : "hidden"} md:flex`}
        >
          <a
            href="#aboutMe"
            onClick={() => handleClick("aboutMe")}
            className={`p-2 flex justify-center items-center ${activeLink === "aboutMe" ? "text-sky-500 border-b-2 border-sky-500" : "border-b-2 border-transparent"}`}
          >
            <UserCircleIcon className="w-8 h-8 pr-2" />
            About Me
          </a>
          <a
            href="#projects"
            onClick={() => handleClick("projects")}
            className={`p-2 flex justify-center items-center ${activeLink === "projects" ? "text-sky-500 border-b-2 border-sky-500" : "border-b-2 border-transparent"}`}
          >
            <FolderIcon className="w-8 h-8 pr-2" />
            Projects
          </a>
          <a
            href="#education"
            onClick={() => handleClick("education")}
            className={`p-2 flex justify-center items-center ${activeLink === "education" ? "text-sky-500 border-b-2 border-sky-500" : "border-b-2 border-transparent"}`}
          >
            <AcademicCapIcon className="w-8 h-8 pr-2" />
            Education
          </a>
          <a
            href="#resume"
            onClick={() => handleClick("resume")}
            className={`p-2 flex justify-center items-center ${activeLink === "resume" ? "text-sky-500 border-b-2 border-sky-500" : "border-b-2 border-transparent"}`}
          >
            <DocumentIcon className="w-8 h-8 pr-2" />
            Resume
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
