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

  const navBtns = (type) => {
    return (
      <a
        href={`#${type}`}
        className="flex items-center mx-2 hover:bg-brand-purple-light rounded-lg p-1 hover:scale-105 transition delay-75 ease-in-out"
      >
        <p className="text-[18px] px-1 font-bold">{type}</p>
      </a>
    );
  };

  return (
    <>
      <nav className="font-atkinson flex bg-[#ffffff] text-brand-purple w-full h-16 items-center mx-auto fixed top-0 left-1/2 transform -translate-x-1/2 md:justify-around justify-between backdrop-filter backdrop-blur-lg bg-opacity-5 border border-gray-400 z-50">
        <p className="text-xl ml-8 font-extrabold">Poorvi Bhatia</p>
        <div className="hidden md:flex lg:justify-evenly md:mr-8">
          {navBtns("about")}
          {navBtns("portfolio")}
          {navBtns("skills")}
          {navBtns("experience")}
          {navBtns("contact")}
        </div>
        <div onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </nav>
      <div
        className={`md:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[85%] bg-[#ffffff] backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-400 rounded-xl z-50 transition-all duration-300 ease-in-out ${
          hamburgerOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } flex flex-col items-center text-brand-yellow text-xl font-extrabold `}
      >
        {["about", "portfolio", "skills", "experience", "contact"].map(
          (item, idx) => (
            <a
              key={idx}
              href={`#${item}`}
              onClick={toggleHamburger}
              className="hover:bg-white/30 p-1 hover:rounded-xl"
            >
              {item}
            </a>
          )
        )}
      </div>
    </>
  );
};

export default Navbar;
