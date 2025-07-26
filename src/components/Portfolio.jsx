import React from "react";

const ExperienceButton = ({ buttonText, link }) => (
  <a
    className="text-base mid:text-l bg-[#ffffff] text-brand-purple backdrop-blur-lg bg-opacity-10 transition delay-150 duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:text-brand-yellow p-1 rounded-lg border border-gray-400"
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
    <div className="bg-[#ffffff] text-brand-purple rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 max-w-md mid:max-w-lg md:max-w-xl mx-auto my-2 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_20px_rgba(87,88,120,0.5)] flex flex-col h-fit">
      {/* image */}
      <div className="w-full h-48 md:h-52 lg:h-56 p-4 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-lg cursor-pointer"
          src={imgUrl}
          alt={name}
        />
      </div>
      {/* project name and date */}
      <div className="text-brand-yellow italic px-4 flex-shrink-0">
        {/* name */}
        <p className="font-bold text-xl md:text-2xl">{name}</p>
        {/* date */}
        <p className="lg:block font-semibold text-base md:text-lg">{date}</p>
      </div>
      {/* description */}
      <div className="flex-grow px-4 py-2">
        <p className="text-sm mid:text-base ">
          {description /*.slice(0, 70) + "..." */}
        </p>
      </div>
      {/* tech stack + links */}
      <div className="flex mt-2 mb-4 items-center justify-between gap-2 flex-shrink-0">
        {/* tech stack */}
        <div className="px-4 flex gap-1 text-[10px] flex-wrap justify-start">
          {techStack.map((item, idx) => (
            <div
              className="bg-[#ffffff] backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 p-[6px] rounded-2xl font-mono"
              key={idx}
            >
              {item.toUpperCase()}
            </div>
          ))}
        </div>
        {/* links */}
        <div className="px-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
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

const Portfolio = ({ projects }) => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center mt-16 font-extrabold text-brand-purple text-2xl items-center"
        id="portfolio"
      >
        <p className="font-extrabold italic text-center">portfolio</p>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6 lg:gap-8 py-10 px-4 w-[90%] mx-auto space-y-4">
        {projects.map((exp, idx) => {
          return (
            <div key={idx} className="break-inside-avoid">
              <ProjectCard
                imgUrl={exp.imgUrl}
                name={exp.name}
                date={exp.date}
                description={exp.description}
                techStack={exp.techStack || []}
                gitHubLink={exp.gitHubLink || ""}
                previewLink={exp.previewLink || ""}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

// const Portfolio = ({ projects }) => {
//   return (
//     <>
//       <div
//         className="flex flex-col md:flex-row justify-center mt-16 font-extrabold text-brand-purple text-2xl items-center"
//         id="portfolio"
//       >
//         <p className="font-extrabold italic text-center">portfolio</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-10 px-4 w-[90%] mx-auto">
//         {projects.map((exp, idx) => {
//           return (
//             <ProjectCard
//               key={idx}
//               imgUrl={exp.imgUrl}
//               name={exp.name}
//               date={exp.date}
//               description={exp.description}
//               techStack={exp.techStack || []}
//               gitHubLink={exp.gitHubLink || ""}
//               previewLink={exp.previewLink || ""}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };

export default Portfolio;
