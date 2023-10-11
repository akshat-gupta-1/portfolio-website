import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons-react';
const HeroSection = () => {
  return (
    <div className="mt-[70px] mb-12 md:my-[70px] grid gap-x-6 md:grid-cols-[300px_1fr] grid-cols-1">
      <img
        src="/My_image.jpg"
        alt=""
        className="w-[250px] h-[250px] rounded-full object-contain hover:scale-105 hover:duration-200 hover:ease-in justify-self-center"
      />
      <div className="text-text flex flex-col mt-12 items-center md:items-start">
        <h2 className="text-3xl font-bold">
          👋 Hi, I'm <span className="text-primary">Akshat</span>{' '}
          <span className="hidden sm:inline-block">
            (☉‿☉
            <span className="text-primary">✿</span>)
          </span>
        </h2>
        <div className="px-6 pt-4 text-center md:text-left">
          <p className=" text-sand9">
            A full-stack developer with a strong problem-solving mindset,
            dedicated to crafting websites that offer great user experiences.
          </p>
          <p className="text-sand9 mt-1">20, he/him</p>
          <div className="flex space-x-2 mt-2 md:justify-normal justify-center">
            <a href="https://www.linkedin.com/in/akshat-gupta-8a8017286/">
              <IconBrandLinkedin size={32} className="hover:text-primary" />
            </a>
            <a href="https://github.com/akshat-gupta-1">
              <IconBrandGithub size={32} className="hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
