const TechStack = () => {
  return (
    <div className="flex items-center md:space-x-12 my-2 md:flex-row flex-col">
      <h4 className="px-4 text-lg text-text font-semibold md:border-r-[3px] md:border-b-0 border-b-[3px] border-primary">
        Tech Stack
      </h4>
      <ul className="flex space-x-4 mt-2 md:mt-0 justify-center md:justify-normal md:items-center flex-wrap md:flex-nowrap space-y-4 md:space-y-0">
        <li className="mt-4 md:mt-0">
          <img
            src="https://skillicons.dev/icons?i=html,css"
            alt=""
            className="hover:-translate-y-2 cursor-pointer will-change-transform transition-transform duration-300 hover:transition-transform hover:duration-150 w-[110] h-[50px]"
          />
        </li>
        <li>
          <img
            src="https://skillicons.dev/icons?i=js,ts"
            alt=""
            className="hover:-translate-y-2 cursor-pointer will-change-transform transition-transform duration-300 hover:transition-transform hover:duration-150 w-[110] h-[50px]"
          />
        </li>
        <li>
          <img
            src="https://skillicons.dev/icons?i=react,tailwind"
            alt=""
            className="hover:-translate-y-2 cursor-pointer will-change-transform transition-transform duration-300 hover:transition-transform hover:duration-150 w-[110] h-[50px]"
          />
        </li>
        <li>
          <img
            src="https://skillicons.dev/icons?i=nodejs,mongodb"
            alt=""
            className="hover:-translate-y-2 cursor-pointer will-change-transform transition-transform duration-300 hover:transition-transform hover:duration-150 w-[110] h-[50px]"
          />
        </li>
        <li>
          <img
            src="https://skillicons.dev/icons?i=prisma,astro"
            alt=""
            className="hover:-translate-y-2 cursor-pointer will-change-transform transition-transform duration-300 hover:transition-transform hover:duration-150 w-[110] h-[50px]"
          />
        </li>
      </ul>
    </div>
  );
};

export default TechStack;
