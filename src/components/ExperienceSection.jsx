import React from "react";
import ExperienceCard from "./ExperienceCard";
import ExampleImage from "../assets/example.png";

const ExperienceSection = () => {
  const experienceTypes = ["projects", "research", "other"];

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center mt-16 font-extrabold text-[#575878] text-2xl items-center mb-8"
        id="experience"
      >
        <p className="font-extrabold italic text-center ">experience —</p>

        <div className="flex space-x-10 font-extrabold ml-6">
          {experienceTypes.map((label, idx) => (
            <button key={idx} className="hover:text-[#8f8c60] cursor-pointer">
              {label}
            </button>
          ))}
        </div>
      </div>
      <ExperienceCard
        imgUrl={ExampleImage}
        name="Campus Connect AI"
        date="Mar. 2025 - May 2025"
        description="Local Knowledge RAG Chat bot for International Students as part of RBC Borealis’ Let’s Solve It 2025"
        techStack={[
          "Streamlit",
          "Python",
          "ChromaDB",
          "HuggingFace",
          "Mistral-7B",
        ]}
        gitHubLink="https://github.com/ayanahye/Campus-Connect-AI"
        previewLink={null}
      ></ExperienceCard>
    </>
  );
};

export default ExperienceSection;
