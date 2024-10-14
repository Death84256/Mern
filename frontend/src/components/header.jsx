import React, { useState } from "react";
import {HomeIcon, AcademicCapIcon, DocumentIcon, FolderIcon} from '@heroicons/react/24/outline'

const header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center top-0 right-0 absolute items-center border-b border-b-sky-700 shadow-md shadow-sky-500 p-2 w-dvw">
      <div className="flex space-x-4 mx-16 px-16 w-auto justify-center items-center">
        <a
          onClick={() => handleClick('home')}
          className={`border-2 border-transparent rounded-lg flex justify-center items-center p-2 hover:border-sky-500 hover:bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 ${activeLink === 'home' ? 'active' : ''}`}
        >
          <HomeIcon className="size-10 px-2"/>
          Home
        </a>
        <a
          onClick={() => handleClick('projects')}
          className={`border-2 border-transparent rounded-lg flex justify-center items-center p-2 hover:border-sky-500 hover:bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 ${activeLink === 'projects' ? 'active' : ''}`}
        >
          <FolderIcon className="size-10 px-2"/>
          Projects
        </a>
        <a
          onClick={() => handleClick('education')}
          className={`border-2 border-transparent rounded-lg flex justify-center items-center p-2 hover:border-sky-500 hover:bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 ${activeLink === 'education' ? 'active' : ''}`}
        >
          <AcademicCapIcon className="size-10 px-2"/>
          Education
        </a>
        <a
          onClick={() => handleClick('resume')}
          className={`border-2 border-transparent rounded-lg flex justify-center items-center p-2 hover:border-sky-500 hover:bg-gradient-to-t from-sky-600 via-sky-400 to-sky-200 ${activeLink === 'resume' ? 'active' : ''}`}
        >
          <DocumentIcon className="size-10 px-2"/>
          Resume
        </a>
      </div>
    </div>
  );
};

export default header;
