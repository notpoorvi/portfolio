import { useState, useRef, useEffect } from "react";

const Skills = ({ skillsObj }) => {
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
    // observe the card element
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
    <>
      <div
        className="flex flex-col md:flex-row justify-center mt-8 mb-8 font-extrabold text-brand-purple text-2xl items-center"
        id="skills"
      >
        <p className="font-extrabold italic text-center">skills</p>
      </div>
      <div
        ref={cardRef}
        className="columns-1 mid:columns-2 gap-4 p-2 w-[80%] mx-auto space-y-4"
      >
        {Object.entries(skillsObj).map(([category, items]) => (
          <div
            key={category}
            className={`flex flex-col w-full max-w-sm px-4 py-2 bg-[#ffffff] text-brand-purple rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-400 mx-auto my-2 overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(87,88,120,0.5)] transition-all duration-150 ease-in-out hover:border-brand-purple ${
              // scroll animation
              isVisible
                ? // if the card is visible, apply fade-in-up animation
                  "opacity-100 translate-y-0 animate-fade-in-up"
                : // if the card is not visible, apply fade-out-down animation
                  "opacity-0 translate-y-8"
            }`} // scroll animation: fade-in-up
            style={{
              transition: isVisible
                ? // if the card is visible, apply fade-in animation
                  "opacity 1s ease-out, transform 0.5s ease-out"
                : // if the card is not visible, apply fade-out animation
                  "opacity 1s ease-out, transform 1s ease-out",
            }}
          >
            <h3 className="text-center text-xl mb-4 font-bold">{category}</h3>
            <div className="flex flex-row flex-wrap sm:grid-cols-4 gap-1 justify-center align-middle ">
              {items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-row items-center rounded-xl border border-gray-400 p-1"
                >
                  <img src={skill.imgUrl} alt={skill.name} className="w-6" />
                  <span className="text-sm md:text-base text-center p-1">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
