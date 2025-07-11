import React from "react";
import HomeIcon from "../assets/home.svg";
import AboutIcon from "../assets/about.svg";
import ExperienceIcon from "../assets/experience.svg";
import ContactIcon from "../assets/contact.svg";

const Navbar = () => {
  return (
    <div className="font-atkinson flex bg-[#F4EBD3] text-[#575878] w-[60%] rounded-lg h-10 items-center mx-auto sticky top-8 justify-between">
      <p className="text-xl ml-8 md:text-2xl">Poorvi Bhatia</p>
      <div className="hidden md:flex md:justify-evenly md:mr-8">
        <div className="flex items-center mx-2">
          <img src={HomeIcon} className="w-6 h-6" />
          <p className="md:text-[18px] px-1">home</p>
        </div>
        <div className="flex items-center mx-2">
          <img src={AboutIcon} className="w-6 h-6" />
          <p className="text-[18px] px-1">about</p>
        </div>
        <div className="flex items-center mx-2">
          <img src={ExperienceIcon} className="w-[18px] h-[18px]" />
          <p className="text-[18px] px-1">experience</p>
        </div>
        <div className="flex items-center mx-2">
          <img src={ContactIcon} className="w-6 h-6" />
          <p className="text-[18px] px-1">contact</p>
        </div>
      </div>
      <div className="md:hidden text-4xl pb-1 mr-8">&#9776;</div>
    </div>
  );
};

export default Navbar;
