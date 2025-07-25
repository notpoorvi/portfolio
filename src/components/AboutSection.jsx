import React from "react";

const AboutSection = () => {
  return (
    <div>
      <p className="font-extrabold text-brand-purple text-2xl text-center mt-16 italic">
        about me
      </p>
      <div className="flex flex-col items-center text-brand-purple text-xl mt-6">
        <p className="text-left w-[75%] md:w-[65%]">
          My goal is to continuously learn, build technology that makes a real
          difference, and grow into a developer who creates solutions that
          matter.
        </p>
        <p className="text-left mt-8 w-[75%] md:w-[65%]">
          Currently I'm seeking opportunities to grow and contribute to
          impactful projects.
        </p>
        {/* <p className="text-left mt-8 w-[75%] md:w-[65%]">
          I'm also very passionate about{" "}
          <strong className="text-brand-yellow">photography</strong> and{" "}
          <strong className="text-brand-yellow">traveling</strong>!
        </p> */}
      </div>
    </div>
  );
};

export default AboutSection;
