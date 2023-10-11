import { projects } from './projects';
import ProjectCard from './projectCard';
const ProjectsPage = () => {
  return (
    <div className="mt-12">
      <h3 className="text-primary text-2xl font-bold">projects.</h3>
      <div className="space-y-8 mt-8">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            tech={item.tech}
            github={item.github}
            livePreview={item.livePreview}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
