import React from "react";
import HomeIcon from "../assets/home.svg";
import AboutIcon from "../assets/about.svg";
import ExperienceIcon from "../assets/experience.svg";
import ContactIcon from "../assets/contact.svg";
import { useState } from "react";
import DarkModeBtn from "./DarkModeBtn";

const Hamburger = ({ isOpen }) => (
  <div className="w-6 h-6 flex justify-around flex-col z-10 md:hidden mr-8 cursor-pointer">
    <div
      className={`w-6 h-1 rounded-[10px] bg-brand-purple origin-[1px] transition-all duration-300 ease-linear ${
        isOpen ? "rotate-45" : "rotate-0"
      }`}
    ></div>
    <div
      className={`w-6 h-1 rounded-[10px] bg-brand-purple origin-[1px] transition-all duration-300 ease-linear ${
        isOpen ? "opacity-0" : "opacity-100"
      }`}
    ></div>
    <div
      className={`w-6 h-1 rounded-[10px] bg-brand-purple origin-[1px] transition-all duration-300 ease-linear ${
        isOpen ? "-rotate-45" : "rotate-0"
      }`}
    ></div>
  </div>
);

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const aboutIcon = (
    <a href="#about" className="flex items-center mx-2">
      <img src={AboutIcon} className="w-6 h-6" />
      <p className="text-[18px] px-1">about</p>
    </a>
  );

  const experienceIcon = (
    <a href="#experience" className="flex items-center mx-2">
      <img src={ExperienceIcon} className="w-[18px] h-[18px]" />
      <p className="text-[18px] px-1">experience</p>
    </a>
  );

  const contactIcon = (
    <a href="#contact" className="flex items-center mx-2">
      <img src={ContactIcon} className="w-6 h-6" />
      <p className="text-[18px] px-1">contact</p>
    </a>
  );

  return (
    <>
      <nav className="font-atkinson flex bg-[#ffffff] text-brand-purple w-[85%] rounded-xl h-12 items-center mx-auto fixed top-6 left-1/2 transform -translate-x-1/2 justify-between backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-400 z-50">
        <p className="text-xl ml-8">Poorvi Bhatia</p>
        <div className="hidden md:flex lg:justify-evenly md:mr-8">
          {aboutIcon}
          {experienceIcon}
          {contactIcon}
        </div>
        {/* <div className="flex items-center mr-8 gap-4"> */}
        {/* <div className="hidden md:block">
            <DarkModeBtn />
          </div> */}
        <div onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        {/* </div> */}
      </nav>
      <div
        className={`md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[85%] bg-[#ffffff] backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-400 rounded-xl z-50 transition-all duration-300 ease-in-out ${
          hamburgerOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } flex flex-col items-center text-brand-yellow text-[18px] font-extrabold`}
      >
        {["about", "experience", "contact"].map((item, idx) => (
          <a key={idx} href={`#${item}`} onClick={toggleHamburger}>
            {item}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
