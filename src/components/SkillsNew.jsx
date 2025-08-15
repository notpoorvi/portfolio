const Skills = ({ skillsList }) => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center mt-8 font-extrabold text-brand-purple text-2xl items-center"
        id="skills"
      >
        <p className="font-extrabold italic text-center">my toolkit</p>
      </div>
      <div className="flex overflow-hidden mx-auto mt-12 mb-36">
        <div className=" flex animate-[swipe_40s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">
          <div className="images flex">
            {skillsList.map(({ imgUrl, name }) => (
              <div className="image" key={name}>
                <img
                  className="max-w-20 h-20 object-contain px-1 mx-2 transition delay-150 duration-300 ease-in-out hover:scale-110"
                  src={imgUrl}
                  alt={name}
                />
              </div>
            ))}
          </div>
          <div className="images flex animate-">
            {skillsList.map(({ imgUrl, name }) => (
              <div className="image" key={name}>
                <img
                  className="max-w-20 h-20 object-contain px-1 mx-2 transition delay-150 duration-300 ease-in-out hover:scale-110"
                  src={imgUrl}
                  alt={name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
