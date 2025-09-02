import React, { useState, useEffect } from "react";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const words = [
    "software development.",
    "data science.",
    "machine learning.",
    "fullstack development.",
  ];
  const typingSpeed = 100;
  const backspaceSpeed = 50;
  const pauseTime = 2000;
  const backspacePause = 500;

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (isTyping) {
      if (charIndex < currentWord.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, pauseTime);
        return () => clearTimeout(timer);
      }
    } else {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, backspaceSpeed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsTyping(true);
        }, backspacePause);
        return () => clearTimeout(timer);
      }
    }
  }, [charIndex, currentWordIndex, isTyping, words]);

  return (
    <div
      className="text-brand-purple text-2xl md:text-3xl w-[75%] md:w-[65%] mt-40 mx-auto font-bold leading-snug md:leading-snug z-80"
      id="about"
    >
      Hello! I'm
      <p className="text-4xl mid:text-5xl text-brand-yellow py-2">
        Poorvi Bhatia
      </p>
      I'm a 4th year Computer Science student at Simon Fraser University with
      interests in{" "}
      <p className="text-brand-yellow font-extrabold font-mono tracking-tight">
        {displayText}
        <span className="animate-pulse text-3xl">|</span>
      </p>
    </div>
  );
};

export default Header;
