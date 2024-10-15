import React from "react";
import Net from "../images/logo/.net.png";
import Bootstrap from "../images/logo/bootstrap.png";
import Css from "../images/logo/css3.png";
import Csharp from "../images/logo/csharp.png";
import Git from "../images/logo/git.png";
import Github from "../images/logo/github.png";
import Java from "../images/logo/java.png";
import MySql from "../images/logo/mysql.png";
import NodeJs from "../images/logo/nodejs.png";
const logo = () => {
  return (
    <>
        <div className="flex justify-evenly items-center my-2 border-0 border-sky-500">
          <img src={Net} alt=".Net" className="w-16 h-16" />
          <img src={Bootstrap} alt="Bootstrap" className="w-16 h-16" />
          <img src={Css} alt="Css" className="w-16 h-16" />
          <img src={Csharp} alt="C#" className="w-16 h-16" />
          <img src={Git} alt="Git" className="w-16 h-16" />
        </div>
        <div className="flex justify-evenly items-center my-2 border-0 border-sky-500">
          <img src={Github} alt="Github" className="w-16 h-16" />
          <img src={Java} alt="Java" className="w-16 h-16" />
          <img src={MySql} alt="MySql" className="w-16 h-16" />
          <img src={NodeJs} alt="NodeJs" className="w-16 h-16" />
          <img src={Css} alt="Css" className="w-16 h-16" />
        </div>
        <div className="flex justify-evenly items-center my-2 border-0 border-sky-500">
          <img src={Net} alt=".Net" className="w-16 h-16" />
          <img src={Bootstrap} alt="Bootstrap" className="w-16 h-16" />
          <img src={Css} alt="Css" className="w-16 h-16" />
          <img src={Bootstrap} alt="Bootstrap" className="w-16 h-16" />
          <img src={Css} alt="Css" className="w-16 h-16" />
        </div>
        <div className="flex justify-evenly items-center my-2 border-0 border-sky-500">
          <img src={Net} alt=".Net" className="w-16 h-16" />
          <img src={Bootstrap} alt="Bootstrap" className="w-16 h-16" />
          <img src={Css} alt="Css" className="w-16 h-16" />
        </div>
        
    </>
  );
};

export default logo;
