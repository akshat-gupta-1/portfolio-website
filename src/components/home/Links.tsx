const Links = () => {
  return (
    <div className="mt-14 px-4">
      <p className="text-sand9 pb-2">
        Here are some links that might interest you:
      </p>
      <ul className="list-disc list-inside text-sand8 [&>li]:py-2">
        <li>
          <a
            href="/projects"
            className="text-primary hover:text-white hover:bg-primary underline ml-2"
          >
            project I've worked on
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-primary hover:text-white hover:bg-primary underline ml-2"
          >
            about me
          </a>
        </li>
        <li>
          <a
            href="/resume"
            className="text-primary hover:text-white hover:bg-primary underline ml-2"
          >
            view resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
