import React, { useState } from "react";
import LinkedinIcon from "../assets/linkedin.svg";
import MailIcon from "../assets/mail.svg";
import GithubIcon from "../assets/github.svg";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]+$/;

    if (!name.trim() || !nameRegex.test(name.trim())) {
      alert("Please enter a valid name (letters only)");
      return;
    }

    if (!email.trim() || !emailRegex.test(email.trim())) {
      alert("Please enter a valid email address");
      return;
    }

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
        setShowToast(true);

        // remove toast after 3 seconds
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch((e) => {
        console.error("Error sending email: ", e);
      });
  };

  return (
    <>
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 duration-300">
          <div
            id="toast-simple"
            className="flex items-center max-w-sm p-4 space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-400 shadow-sm bg-[#ffffff] text-brand-purple rounded-xl w-full justify-around  mx-auto backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-400"
            role="alert"
          >
            <svg
              className="w-5 h-5 text-brand-yellow rotate-45"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
              />
            </svg>
            <div className="ps-4 text-sm font-bold">
              Message sent successfully.
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* name field */}
        <div className="mx-auto w-fit mt-4">
          <p className="text-brand-purple text-xl md:text-2xl italic">name *</p>
          <input
            type="text"
            placeholder={`Your name`}
            className="w-72 mid:w-[26rem] md:w-[32rem] h-12 text-base md:text-l bg-gray-50 text-brand-purple p-4 rounded-xl border-2 border-transparent focus:outline-none focus:border-brand-purple transition-colors duration-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* email field */}
        <div className="mx-auto w-fit mt-4">
          <p className="text-brand-purple text-xl md:text-2xl italic">
            email *
          </p>
          <input
            type="email"
            placeholder={`Your email`}
            className="w-72 mid:w-[26rem] md:w-[32rem] h-12 text-base md:text-l bg-gray-50 text-brand-purple p-4 rounded-xl border-2 border-transparent focus:outline-none focus:border-brand-purple transition-colors duration-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* message field */}
        <div className="mx-auto w-fit mt-4">
          <p className="text-brand-purple text-xl md:text-2xl italic">
            message
          </p>
          <textarea
            className="w-72 mid:w-[26rem] md:w-[32rem] h-28 text-base md:text-l bg-gray-50 text-brand-purple p-4 rounded-xl border-2 border-transparent focus:outline-none focus:border-brand-purple transition-colors duration-200"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="flex items-center bg-[#ffffff] text-brand-purple rounded-xl h-10 w-44 justify-around  mx-auto backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 mt-4 hover:text-brand-yellow transition delay-150 duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-brand-purple"
        >
          <p className="md:text-[18px] px-1">send message</p>
        </button>
      </form>
    </>
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
            className="rounded-full backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 p-2 hover:shadow-xl transition-all duration-300 hover:border-brand-purple hover:scale-105 hover:-translate-y-1"
            style={{
              ":hover": {
                boxShadow:
                  "0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.4)",
              },
            }}
          >
            <a href={icon.link} target="_blank" rel="noopener">
              <img src={icon.img} className="w-sm h-sm md:w-md md:h-md" />
            </a>
          </div>
        ))}
      </div>
      <EmailForm />
    </div>
  );
};

export default Contact;
