import { IconBrandGithubFilled } from '@tabler/icons-react';
const Footer = () => {
  return (
    <div className="w-full bg-text dark:bg-accent md:absolute md:bottom-0 static mt-20 md:mt-0 sm:h-10 h-16">
      <div className="mx-auto max-w-[900px] flex justify-between items-center px-8 h-full">
        <p className="text-secondary">
          Built with{' '}
          <span className="underline underline-offset-2 text-primary dark:text-[#fffaeb]">
            Astro
          </span>
          ,{' '}
          <span className="underline underline-offset-2 text-primary dark:text-[#fffaeb]">
            React
          </span>{' '}
          and{' '}
          <span className="underline underline-offset-2 text-primary dark:text-[#fffaeb]">
            TailwindCSS
          </span>
          .
        </p>
        <a href="">
          <IconBrandGithubFilled className="text-secondary hover:text-primary dark:hover:text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
