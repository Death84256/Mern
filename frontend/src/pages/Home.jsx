import React from "react";
import Header from "../components/header";
import ChatBubble from "../components/chatBubble";
import Logo from "../components/logo";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row justify-evenly space-y-4 md:space-y-0 md:space-x-4 p-4 mt-10">
        <div className="w-auto md:w-1/2 mx-auto absolute top-28 left-0">
          <div className="flex flex-col items-start space-y-4">
            <ChatBubble message="Hello, I'm Evanglemer" />
          </div>
        </div>
        <div className="border-2 border-sky-500 flex justify-center items-center absolute left-36 top-[17rem] w-[590px] h-[590px] rounded-br-[310px] rounded-bl-3xl rounded-tr-3xl">
          <div className="w-[560px] h-[560px] bg-sky-800 rounded-tr-3xl rounded-bl-3xl rounded-tl-[250px] rounded-br-[250px] bg-gradient-to-tr from-sky-900 via-sky-600 to-sky-400 animate-[spin_20s_linear_infinite] z-[-10] " />
        </div>
        <div className="w-[600px] h-[650px] border-2 border-sky-500 absolute right-80 top-52 p-4">
          <div className="mt-1">
            <TypeAnimation
              sequence={["About Me...", 1000, "", 1000]}
              wrapper="p"
              speed={1}
              className="text-3xl font-extrabold"
              repeat={Infinity}
            />
          </div>
          <div className="border-2 border-sky-500 mt-5 p-2 text-justify text-xl">
            I am a software developer with a passion for creating innovative and
            user-friendly applications. I have a strong background in computer
            programming. Especially in the backend side and the database.
          </div>
          <div className="text-3xl font-extrabold p-2 mt-2">
            Skills
          </div>
          <div className="mt-1 p-2 border-2 border-sky-500 justify-center items-center">
            <Logo/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
