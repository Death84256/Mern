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
import Html from "../images/logo/html5.png";
import Php from "../images/logo/php.png";
import Python from "../images/logo/python.png";
import ReactJs from "../images/logo/reactjs.png";
import SQL from "../images/logo/sql.png";
import Vite from "../images/logo/vite.png";
import Tailwind from "../images/logo/tailwind.png";
import Abap from "../images/logo/abap.png";
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
          <img src={Html} alt="Html5" className="w-16 h-16" />
        </div>
        <div className="flex justify-evenly items-center my-2 border-0 border-sky-500">
          <img src={Php} alt="Php" className="w-16 h-16" />
          <img src={Python} alt="Python" className="w-16 h-16" />
          <img src={ReactJs} alt="ReactJs" className="w-16 h-16" />
          <img src={SQL} alt="Sql" className="w-16 h-16" />
          <img src={Vite} alt="Vite" className="w-16 h-16" />
        </div>
        <div className="flex justify-evenly items-center my-2 border-0 border-sky-500">
          <img src={Tailwind} alt="Tailwind" className="w-16 h-16" />
          <img src={Abap} alt="Abap" className="w-20 h-16" />
        </div>
        
    </>
  );
};

export default logo;
