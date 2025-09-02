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
      <div className="w-[80%] mx-auto flex flex-col items-center mt-8 mb-16">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`p-4 flex flex-col lg:flex-row items-center mb-4 shadow-md rounded-xl border-brand-purple hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(87,88,120,0.5)] transition-all duration-150 ease-in-out ${
              idx % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="rounded-xl w-[28rem] py-2">
              <h3 className="text-xl font-semibold text-brand-purple mb-1">
                {exp.title}
              </h3>
              <h4 className="text-lg text-brand-yellow font-medium mb-2">
                {exp.company}
              </h4>
              <p className="text-sm text-brand-yellow mb-3 font-medium">
                {exp.period}
              </p>
              <ul className="text-brand-purple leading-relaxed">
                {exp.description.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block w-[24rem] lg:px-6">
              <img
                src={exp.imgUrl}
                className="w-full h-auto rounded-lg lg:max-h-36 object-cover"
                alt={`${exp.company} experience`}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceSection;
