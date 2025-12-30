import { useParams } from "react-router-dom";
import useScrollToTop from "@/hooks/useScrollToTop";

import ProjectsList from "@/components/projects-page/ProjectsList";

const ProjectsPage = () => {
  useScrollToTop();
  const { name } = useParams();

  return <>{name ? <h1> {name} </h1> : <ProjectsList />}</>;
};

export default ProjectsPage;
