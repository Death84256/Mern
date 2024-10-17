import React from "react";
import { TypeAnimation } from "react-type-animation";

const ChatBubble = ({ message }) => {
  return (
    <div className="relative max-w-6xl p-4 rounded-lg bg-sky-400 text-white self-end inline-block whitespace-pre-wrap mx-auto">
      <TypeAnimation
        sequence={[message, 
            1000, 
            "",]} 
        speed={20}
        wrapper="p"
        className="text-2xl"
        cursor={true}
        repeat={Infinity}
      />
      <div className="absolute left-3 bottom-0 transform translate-x-1/2 translate-y-1/2">
        <div className="bg-sky-400 w-4 h-4 transform rotate-45" />
      </div>
    </div>
  );
};

export default ChatBubble;
