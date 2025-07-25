import React from "react";
import Download from "../assets/download.svg";
import CV from "../assets/cv.pdf";

const ResumeButton = () => {
  return (
    <a
      className="flex items-center bg-[#ffffff] text-brand-purple rounded-xl h-10 w-44 justify-around  mx-auto backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 mt-10 transition delay-150 duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:text-brand-yellow hover:border-brand-purple"
      href={CV}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Download} className="w-6 h-6" />
      <p className="md:text-[18px] px-1">view my resume</p>
    </a>
  );
};

export default ResumeButton;
