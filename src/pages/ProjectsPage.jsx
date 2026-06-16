import Projects from "../components/sections/Projects";
import AnimatedHero from "../components/common/SimpleHero";

const ProjectsPage = () => {
  return (
    <>
      <AnimatedHero path="/projects" title="My Works" />
      <Projects />
    </>
  );
};

export default ProjectsPage;
