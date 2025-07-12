import React from "react";

const ExperienceCard = ({
  imgUrl,
  name,
  date,
  description,
  techStack,
  gitHubLink,
  previewLink,
}) => {
  return (
    <div className="bg-[#ffffff] text-[#575878] rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 max-w-sm md:max-w-lg mx-auto">
      <img
        className="h-52 md:h-72 object-cover mx-auto pt-4"
        src={imgUrl}
        alt=""
      />
      <div className="text-[#8f8c60] italic ml-5 md:ml-4 mt-2">
        <p className="font-bold text-l md:text-xl">{name}</p>
        <p className="font-semibold text-sm md:text-base">{date}</p>
      </div>
      <p className="mt-2 text-sm md:text-base w-[90%] md:w-[94%] mx-auto">
        {description}
      </p>
      <div className="flex mt-3 items-center mb-3 justify-around gap-6 md:gap-20">
        <div className="flex gap-2 w-[60%] text-xs md:text-sm flex-wrap justify-start">
          {techStack.map((item, idx) => (
            <div
              className="bg-[#ffffff] backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 p-[2px] rounded-lg "
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>
        {gitHubLink && (
          <a
            className="text-l md:text-xl bg-[#bcc4db] text-[#8f8c60] p-1 rounded-lg border border-gray-400"
            href={gitHubLink}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        )}
        {previewLink && (
          <a className="" href={previewLink} target="_blank" rel="noopener">
            Preview
          </a>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
