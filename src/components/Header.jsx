import React, { useState, useEffect } from "react";

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const words = ["software development", "data science", "machine learning"];
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
  }, [charIndex, currentWordIndex, isTyping]);

  return (
    <div className="text-[#575878] text-2xl w-[60%] mt-40 mx-auto font-bold">
      hello! i'm Poorvi, a 3rd year Computer Science student at Simon Fraser
      University with interests in{" "}
      <span className="text-[#8f8c60] font-extrabold">
        {displayText}
        <span className="animate-pulse text-3xl">|</span>
      </span>
    </div>
  );
};

export default Header;
