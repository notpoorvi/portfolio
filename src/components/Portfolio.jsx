import { useState, useRef, useEffect } from "react";

const ExperienceButton = ({ buttonText, link }) => (
  <a
    className="text-base mid:text-l bg-[#ffffff] text-brand-purple backdrop-blur-lg bg-opacity-10 transition delay-150 duration-300 ease-in-out hover:scale-105 p-1 rounded-lg border border-gray-400 hover:shadow-lg hover:text-brand-yellow hover:border-brand-purple"
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
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to detect when the card is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve the card once it is visible
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // trigger when 10% of the card is visible
        rootMargin: "-50px", // 50px margin to trigger earlier
      }
    );
    // Observe the card element
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        bg-[#ffffff] text-brand-purple rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 
        max-w-md mid:max-w-lg md:max-w-xl mx-auto my-2 
        flex flex-col h-fit overflow-hidden
        hover:scale-[1.035] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(87,88,120,0.5)]
        transition-[transform,box-shadow] duration-300 hover:border-brand-purple
        ${
          // scroll animation
          isVisible
            ? // if the card is visible, apply fade-in-up animation
              "opacity-100 translate-y-0 animate-fade-in-up"
            : // if the card is not visible, apply fade-out-down animation
              "opacity-0 translate-y-8"
        }
      `}
      // scroll animation: fade-in-up
      style={{
        transition: isVisible
          ? // if the card is visible, apply fade-in animation
            "opacity 1s ease-out, transform 1s ease-out"
          : // if the card is not visible, apply fade-out animation
            "opacity 1s ease-out, transform 1s ease-out, box-shadow 0.3s ease-out",
      }}
    >
      {/* image */}
      <div className="w-full h-48 md:h-52 lg:h-56 p-4 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-lg "
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
      <div className="columns-1 md:columns-2 xl:columns-3 gap-4 md:gap-6 lg:gap-8 py-10 px-4 w-[90%] mx-auto space-y-4">
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

export default Portfolio;
