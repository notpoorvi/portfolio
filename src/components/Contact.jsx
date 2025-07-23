import React from "react";
import LinkedinIcon from "../assets/linkedin.svg";
import MailIcon from "../assets/mail.svg";
import GithubIcon from "../assets/github.svg";

const NameEmailInput = ({ type }) => (
  <div className="mx-auto w-fit mt-4">
    <p className="text-[#575878] text-xl md:text-2xl italic">{type}</p>
    <input
      type="text"
      className="w-72 mid:w-[26rem] md:w-[32rem] h-12 text-xl bg-gray-200 text-[#575878] p-2 rounded-xl"
    />
  </div>
);

const MessageInput = () => (
  <div className="mx-auto w-fit mt-4">
    <p className="text-[#575878] text-xl md:text-2xl italic">message</p>
    <textarea className="w-72 mid:w-[26rem] md:w-[32rem] h-24 text-xl bg-gray-200 text-[#575878] p-2 rounded-xl" />
  </div>
);

const SendButton = () => {
  return (
    <a
      className="flex items-center bg-[#ffffff] text-[#575878] rounded-xl h-10 w-44 justify-around  mx-auto backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 mt-4 hover:text-[#8f8c60]"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="md:text-[18px] px-1">send message</p>
    </a>
  );
};

const Contact = () => {
  const contactIcons = [
    { img: LinkedinIcon, link: "https://www.linkedin.com/in/poorvi-bhatia/" },
    { img: MailIcon, link: "mailto:poorvi.b26@gmail.com" },
    { img: GithubIcon, link: "https://github.com/notpoorvi" },
  ];
  return (
    <div>
      <div className="mt-16 text-[#575878] text-center" id="contact">
        <p className="font-extrabold italic text-2xl">let's get in touch</p>
        <p className="text-lg md:text-xl mt-1 px-10">
          feel free to send me a message or reach out on my socials!
        </p>
      </div>
      <div className="flex space-x-4 justify-center mt-4">
        {contactIcons.map((icon, idx) => (
          <div
            key={idx}
            className="rounded-full backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 p-2 hover:bg-[#8f8c60]"
          >
            <a href={icon.link} target="_blank" rel="noopener">
              <img src={icon.img} className="w-sm h-sm md:w-md md:h-md" />
            </a>
          </div>
        ))}
      </div>
      <NameEmailInput type="name" />
      <NameEmailInput type="email" />
      <MessageInput />
      <SendButton />
    </div>
  );
};

export default Contact;
