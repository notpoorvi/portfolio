import { useState } from "react";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = ({ experiences }) => {
  const experienceTypes = ["project", "research", "other"];
  const [experienceType, setExperienceType] = useState("project");

  const filterExperiences = (experiences, type) => {
    return experiences.filter((exp) => exp.type === type);
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center mt-16 font-extrabold text-brand-purple text-2xl items-center mb-8"
        id="experience"
      >
        <p className="font-extrabold italic text-center ">experience —</p>

        <div className="flex justify-center space-x-7 font-extrabold md:ml-6">
          {experienceTypes.map((label, idx) => (
            <button
              key={idx}
              className={`hover:text-brand-yellow cursor-pointer transition-colors duration-200 ${
                experienceType === label ? "text-brand-yellow" : ""
              }`}
              onClick={() => setExperienceType(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      {filterExperiences(experiences, experienceType).map((exp, idx) => {
        console.log(`Image URL: ${exp.imgUrl}`);
        return (
          <ExperienceCard
            key={idx}
            imgUrl={exp.imgUrl}
            name={exp.name}
            date={exp.date}
            description={exp.description}
            techStack={exp.techStack || []}
            gitHubLink={exp.gitHubLink || ""}
            previewLink={exp.previewLink || ""}
            type={experienceType}
          />
        );
      })}
    </>
  );
};

export default ExperienceSection;
