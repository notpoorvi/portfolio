import React from "react";

const ExperienceButton = ({ buttonText, link }) => (
  <a
    className="text-l mid:text-xl bg-[#bcc4db] hover:bg-[#8f8c60] hover:text-[#575878] text-[#8f8c60] p-1 rounded-lg border border-gray-400"
    href={link}
    target="_blank"
    rel="noopener"
  >
    {buttonText}
  </a>
);

const ProjectCard = ({
  imgUrl,
  name,
  date,
  description,
  techStack,
  gitHubLink,
  previewLink,
}) => {
  return (
    <div className="bg-[#ffffff] text-[#575878] rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 max-w-xs mid:max-w-md md:max-w-xl mx-auto my-4">
      <img
        className="h-48 mid:h-64 md:h-80 object-cover mx-auto pt-4 pr-4 pl-4 md:mb-4"
        src={imgUrl}
        alt=""
      />
      <div className="text-[#8f8c60] italic md:ml-4 pt-4 pl-4 pr-4 md:p-0">
        <p className="font-bold text-l mid:text-xl md:text-2xl">{name}</p>
        <p className="font-semibold text-sm mid:text-base md:text-lg">{date}</p>
      </div>
      <p className="mt-2 text-sm mid:text-base md:text-lg w-[90%] mid:w-[92%] md:w-[94%] mx-auto">
        {description}
      </p>
      <div className="flex my-3 items-center justify-around gap-6 md:gap-20">
        <div className="flex gap-2 w-[60%] text-sm mid:text-base md:text-base flex-wrap justify-start">
          {techStack.map((item, idx) => (
            <div
              className="bg-[#ffffff] backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 p-[2px] rounded-lg "
              key={idx}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          {gitHubLink && (
            <ExperienceButton buttonText="Github" link={gitHubLink} />
          )}
          {previewLink && (
            <ExperienceButton buttonText="Preview" link={previewLink} />
          )}
        </div>
      </div>
    </div>
  );
};

const ResearchOtherCard = ({ imgUrl, name, date, description }) => {
  return (
    <div className="bg-[#ffffff] text-[#575878] rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 max-w-xs mid:max-w-md md:max-w-xl mx-auto my-4">
      <div className="flex items-center md:mt-4 mb-3 pl-4 pr-4">
        <img
          className="h-10 mid:h-13 md:h-16 object-cover pt-4 md:mb-4 flex-shrink-0"
          src={imgUrl}
          alt=""
        />
        <div className="text-[#8f8c60] italic ml-4 pt-4 md:p-0">
          <p className="font-bold text-l mid:text-xl md:text-2xl">{name}</p>
          <p className="font-semibold text-sm mid:text-base md:text-lg">
            {date}
          </p>
        </div>
      </div>
      <ul className="mt-2 text-sm mid:text-base md:text-lg w-[80%] md:w-[90%] mx-auto mb-4 space-y-2">
        {description.map((item, idx) => (
          <li className="list-disc" key={idx}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceCard = ({
  imgUrl,
  name,
  date,
  description,
  techStack,
  gitHubLink,
  previewLink,
  type,
}) => {
  switch (type) {
    case "project":
      return (
        <ProjectCard
          imgUrl={imgUrl}
          name={name}
          date={date}
          description={description}
          techStack={techStack}
          gitHubLink={gitHubLink}
          previewLink={previewLink}
        />
      );

    case "research":
      return (
        <ResearchOtherCard
          imgUrl={imgUrl}
          name={name}
          date={date}
          description={description}
        />
      );

    case "other":
      break;
  }
};

export default ExperienceCard;
