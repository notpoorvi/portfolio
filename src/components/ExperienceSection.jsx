import React from "react";
import ExperienceCard from "./ExperienceCard";
import CampusConnect from "../assets/campusConnect.png";
import RosieLab from "../assets/rosielab.png";

const ExperienceSection = () => {
  const experienceTypes = ["projects", "research", "other"];

  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center mt-16 font-extrabold text-[#575878] text-2xl items-center mb-8"
        id="experience"
      >
        <p className="font-extrabold italic text-center ">experience —</p>

        <div className="flex justify-center space-x-7 font-extrabold md:ml-6">
          {experienceTypes.map((label, idx) => (
            <button key={idx} className="hover:text-[#8f8c60] cursor-pointer">
              {label}
            </button>
          ))}
        </div>
      </div>
      <ExperienceCard
        imgUrl={CampusConnect}
        name="Campus Connect AI"
        date="Mar. 2025 - May 2025"
        description="Local Knowledge RAG Chat bot for International Students as part of RBC Borealis' Let's Solve It 2025"
        techStack={[
          "Streamlit",
          "Python",
          "ChromaDB",
          "HuggingFace",
          "Mistral-7B",
        ]}
        gitHubLink="https://github.com/ayanahye/Campus-Connect-AI"
        previewLink={"https://google.com"}
        type="project"
      ></ExperienceCard>
      <ExperienceCard
        imgUrl={RosieLab}
        name="Research Assistant at Rosie Lab, SFU"
        date="Dec. 2025 - Cur."
        description={[
          "Benchmarked automatic speech recognition (ASR) models from OpenAI and Nvidia on untrained audio types, such as distanced and shouted speech, to evaluate performance gaps and model robustness",
          "Utilized PyTorch and Pandas to preprocess audio datasets, train models, and analyze results, gaining hands-on experience with deep learning frameworks and data manipulation.",
        ]}
        type="research"
      />
      <ExperienceCard
        imgUrl={
          "https://ixlab.cs.sfu.ca/static/img/siteAssets/globalAssets/ixlab.svg"
        }
        name="USRA at ixlab, SFU"
        date="May. 2025 - Aug. 2025"
        description={[
          "Benchmarked automatic speech recognition (ASR) models from OpenAI and Nvidia on untrained audio types, such as distanced and shouted speech, to evaluate performance gaps and model robustness",
          "Utilized PyTorch and Pandas to preprocess audio datasets, train models, and analyze results, gaining hands-on experience with deep learning frameworks and data manipulation.",
        ]}
        type="research"
      />
    </>
  );
};

export default ExperienceSection;
