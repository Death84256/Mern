import React from "react";
import Header from "../components/header";
import ChatBubble from "../components/chatBubble";
import Logo from "../components/logo";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-stretch space-y-4 md:space-y-0 md:space-x-4 p-4 mt-10">
        <section className="flex flex-col justify-center items-center w-full md:w-full border-2 border-sky-500 p-5 px-24">
          <div className="flex flex-col items-start space-y-4 z-[-1]">
            <ChatBubble message="Hello, I'm Evanglemer" />
          </div>
          <div className="w-[450px] h-[450px] bg-sky-800 rounded-tr-3xl rounded-bl-3xl rounded-tl-[250px] rounded-br-[250px] bg-gradient-to-tr from-sky-900 via-sky-600 to-sky-400 animate-[spin_20s_linear_infinite] z-[-10]" />
          <div className="mt-24">
            Contact
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-full md:w-full border-2 border-sky-500 p-10">
          <div className="w-auto h-auto border-2 border-sky-500 p-2 rounded-xl">
            <div className="mt-1">
              <TypeAnimation
                sequence={["About Me...", 1000, "", 1000]}
                wrapper="p"
                speed={1}
                className="text-3xl font-extrabold"
                repeat={Infinity}
              />
            </div>
            <div className="mt-5 p-2 text-justify text-xl">
              I am a software developer with a passion for creating innovative
              and user-friendly applications. I have a strong background in
              computer programming, especially in the backend side and the
              database.
            </div>
            <div className="text-3xl font-extrabold p-2 mt-2">Skills</div>
            <div className="mt-1 z-[1]">
              <Logo className="hover:w-17 hover:h-17 z-10"/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
