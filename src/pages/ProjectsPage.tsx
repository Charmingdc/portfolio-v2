import { useParams } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";

import ProjectsList from "@/components/projects-page/ProjectsList";
import ProjectOverview from "@/components/projects-page/ProjectOverview";

const ProjectsPage = () => {
  useScrollToTop();
  const { name } = useParams();

  return (
    <>{name ? <ProjectOverview projectName={name} /> : <ProjectsList />}</>
  );
};

export default ProjectsPage;
