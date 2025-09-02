import React from "react";

const ExperienceSection = ({ experiences }) => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center mt-16 font-extrabold text-brand-purple text-2xl items-center"
        id="experience"
      >
        experience
      </div>
      <div>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="relative flex items-center mb-4 w-[80%] mx-auto"
          >
            <div className="rounded-xl w-full py-6">
              <h3 className="text-xl font-semibold text-brand-purple mb-1">
                {exp.title}
              </h3>
              <h4 className="text-lg text-brand-yellow font-medium mb-2">
                {exp.company}
              </h4>
              <p className="text-sm text-brand-yellow mb-3 font-medium">
                {exp.period}
              </p>
              <p className="text-brand-purple leading-relaxed max-w-[60%]">
                {exp.description.map((item) => (
                  <li>{item}</li>
                ))}
              </p>
            </div>
            <img
              src={exp.imgUrl}
              className="hidden lg:block w-full h-full rounded-lg max-w-xs"
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceSection;
