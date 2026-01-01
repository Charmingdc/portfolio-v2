import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useProjects from "@/hooks/useProjects";
import ProjectBox from "@/components/shared/ProjectBox";

const ProjectsList = () => {
  const navigate = useNavigate();
  const { allProjects } = useProjects();

  return (
    <section className="w-full flex flex-col gap-2 px-8 mt-[7rem]">
      <button
        onClick={() => navigate(-1)}
        className="w-fit flex items-center gap-2 text-sm text-muted hover:text-foreground transition mb-8"
      >
        <ArrowLeft size={16} />
        Back Home
      </button>

      <span className="section-tag"> Projects </span>

      <h1 className="section-heading"> • Some Featured Projects </h1>

      <p className="text-muted -mt-1 mb-4 ml-2">
        Some of my most notable projects, built with intention and attention to
        detail.
      </p>

      <article className="w-full flex items-center flex-wrap gap-6 mt-12">
        {allProjects.map((project, idx) => (
          <ProjectBox
            key={idx}
            project={project}
            idx={idx}
            animateOnce={false}
          />
        ))}
      </article>
    </section>
  );
};

export default ProjectsList;
