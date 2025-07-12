import React from "react";
import HomeIcon from "../assets/home.svg";
import AboutIcon from "../assets/about.svg";
import ExperienceIcon from "../assets/experience.svg";
import ContactIcon from "../assets/contact.svg";

const Navbar = () => {
  return (
    <nav className="font-atkinson flex bg-[#ffffff] text-[#575878] w-[70%] rounded-xl h-12 items-center mx-auto fixed top-6 left-1/2 transform -translate-x-1/2 justify-between backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-400 z-50">
      <p className="text-xl ml-8">Poorvi Bhatia</p>
      <div className="hidden lg:flex lg:justify-evenly lg:mr-8">
        <a href="#home" className="flex items-center mx-2">
          <img src={HomeIcon} className="w-6 h-6" />
          <p className="md:text-[18px] px-1">home</p>
        </a>
        <a href="#about" className="flex items-center mx-2">
          <img src={AboutIcon} className="w-6 h-6" />
          <p className="text-[18px] px-1">about</p>
        </a>
        <a href="#experience" className="flex items-center mx-2">
          <img src={ExperienceIcon} className="w-[18px] h-[18px]" />
          <p className="text-[18px] px-1">experience</p>
        </a>
        <a href="#contact" className="flex items-center mx-2">
          <img src={ContactIcon} className="w-6 h-6" />
          <p className="text-[18px] px-1">contact</p>
        </a>
      </div>
      <div className="lg:hidden text-4xl pb-1 mr-8">&#9776;</div>
    </nav>
  );
};

export default Navbar;
