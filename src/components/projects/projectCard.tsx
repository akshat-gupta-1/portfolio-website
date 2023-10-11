import {
  IconBrandReact,
  IconBrandReactNative,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandSupabase,
  IconArrowUpRight,
  type TablerIconsProps,
} from '@tabler/icons-react';
type tech =
  | 'React'
  | 'ReactNative'
  | 'TailwindCSS'
  | 'NodeJS'
  | 'Typescript'
  | 'Javascript'
  | 'MongoDB'
  | 'Supabase';
const lookup: Record<tech, (props: TablerIconsProps) => JSX.Element> = {
  React: IconBrandReact,
  ReactNative: IconBrandReactNative,
  TailwindCSS: IconBrandTailwind,
  NodeJS: IconBrandNodejs,
  Typescript: IconBrandTypescript,
  Javascript: IconBrandJavascript,
  MongoDB: IconBrandMongodb,
  Supabase: IconBrandSupabase,
};
interface Props {
  title: string;
  description: string[];
  tech: string[];
  github: string;
  livePreview: string;
}
const ProjectCard = ({
  title,
  description,
  tech,
  github,
  livePreview,
}: Props) => {
  return (
    <div className="space-y-2 border-l-2 border-sand6 pl-4 hover:border-primary">
      <h5 className="text-text font-semibold text-lg">{title}</h5>
      <div className="flex space-x-2">
        <a
          href={livePreview}
          className="text-sand9 flex text-[15px] hover:text-text will-change-transform transition-transform duration-300 hover:transition-transform hover:duration-150 hover:translate-x-1 hover:-translate-y-1"
        >
          Live Preview <IconArrowUpRight />
        </a>
        <a
          href={github}
          className="text-sand9 flex text-[15px] hover:text-text will-change-transform transition-transform duration-300 hover:transition-transform hover:duration-150 hover:translate-x-1 hover:-translate-y-1"
        >
          Github <IconArrowUpRight />
        </a>
      </div>
      <ul className="list-disc list-outside text-sand9 text-[15px] ml-4">
        {description.map((item, index) => (
          <li key={index} className="py-1">
            {item}
          </li>
        ))}
      </ul>
      <ul className="flex flex-wrap">
        {tech.map((item, index) => {
          let Component = lookup[item as keyof typeof lookup];
          return (
            <li
              key={index}
              className="flex px-2 py-1 hover:text-primary cursor-pointer text-text"
            >
              <Component className="mr-1" />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProjectCard;
