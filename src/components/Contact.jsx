import React, { useState } from "react";
import LinkedinIcon from "../assets/linkedin.svg";
import MailIcon from "../assets/mail.svg";
import GithubIcon from "../assets/github.svg";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_a17ypcw";
    const templateId = "template_lzwakri";
    const publicKey = "iJoHL4iqpoymAn4vf";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Poorvi Bhatia",
      message: message,
    };
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((e) => {
        console.error("Error sending email: ", e);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* name field */}
      <div className="mx-auto w-fit mt-4">
        <p className="text-brand-purple text-xl md:text-2xl italic">name</p>
        <input
          type="text"
          placeholder={`What is your name?`}
          className="w-72 mid:w-[26rem] md:w-[32rem] h-12 text-base md:text-l bg-gray-200 text-brand-purple p-4 rounded-xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* email field */}
      <div className="mx-auto w-fit mt-4">
        <p className="text-brand-purple text-xl md:text-2xl italic">email</p>
        <input
          type="email"
          placeholder={`What is your email?`}
          className="w-72 mid:w-[26rem] md:w-[32rem] h-12 text-base md:text-l bg-gray-200 text-brand-purple p-4 rounded-xl"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* message field */}
      <div className="mx-auto w-fit mt-4">
        <p className="text-brand-purple text-xl md:text-2xl italic">message</p>
        <textarea
          className="w-72 mid:w-[26rem] md:w-[32rem] h-28 text-base md:text-l bg-gray-200 text-brand-purple p-4 rounded-xl"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="flex items-center bg-[#ffffff] text-brand-purple rounded-xl h-10 w-44 justify-around  mx-auto backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 mt-4 hover:text-brand-yellow"
      >
        <p className="md:text-[18px] px-1">send message</p>
      </button>
    </form>
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
      <div className="mt-16 text-brand-purple text-center" id="contact">
        <p className="font-extrabold italic text-2xl">let's get in touch</p>
        <p className="text-lg md:text-xl mt-1 px-10">
          feel free to send me a message or reach out on my socials!
        </p>
      </div>
      <div className="flex space-x-4 justify-center mt-4">
        {contactIcons.map((icon, idx) => (
          <div
            key={idx}
            className="rounded-full backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 p-2 hover:bg-brand-yellow"
          >
            <a href={icon.link} target="_blank" rel="noopener">
              <img src={icon.img} className="w-sm h-sm md:w-md md:h-md" />
            </a>
          </div>
        ))}
      </div>
      <EmailForm />
      {/* <div id="form">
        <NameEmailInput type="name" />
        <NameEmailInput type="email" />
        <MessageInput />
        <SendButton />
      </div> */}
    </div>
  );
};

export default Contact;
