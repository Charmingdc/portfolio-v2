import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft02Icon,
  LinkSquare01Icon,
  GithubIcon
} from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";
import useProjects from "@/hooks/useProjects";

const ProjectOverview = ({ projectName }: { projectName: string }) => {
  const navigate = useNavigate();
  const { allProjects } = useProjects();

  const project = allProjects.find(
    project => project.name.toLowerCase() === projectName
  );

  if (!project)
    return <h1 className="text-2xl mt-[7rem]">No Project Found </h1>;

  return (
    <section
      aria-label={`${projectName}'s Overview`}
      className="w-full flex flex-col gap-3 px-6 mt-[7rem]"
    >
      <button
        onClick={() => navigate(-1)}
        className="w-fit flex items-center gap-2 text-sm text-muted hover:text-foreground transition mb-4"
      >
        <HugeiconsIcon icon={ArrowLeft02Icon} size={18} />
        Back
      </button>

      <h1 className="self-start text-2xl font-black"> {project.name} </h1>

      <div className="w-full flex items-center gap-4 mt-2">
        <a
          href={project.liveUrl}
          target="_blank"
          className="w-fit flex items-center gap-2 py-4 px-5 bg-card rounded-xl"
        >
          <HugeiconsIcon icon={LinkSquare01Icon} size={18} /> Live URL
        </a>

        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            className="w-fit flex items-center gap-2 py-4 px-5 bg-card rounded-xl"
          >
            <HugeiconsIcon icon={GithubIcon} size={18} /> Source
          </a>
        )}
      </div>

      <p> {project.description} </p>

      <img
        src={project.imgSources[0]}
        alt={`${project.name}'s Preview`}
        className="bg-card border-2 border-border rounded-xl"
      />

      <article
        aria-label={`${project.name}'s  details box`}
        className="w-full flex flex-col gap-6 bg-card text-card-foreground p-5 rounded-xl mt-4"
      >
        <div className="project-info-seperator">
          <h2 className="text-lg font-extrabold"> Description </h2>

          <p> {project.detailedDescription}</p>
        </div>

        <div className="project-info-seperator">
          <h2 className="text-lg font-extrabold"> Technologies </h2>

          <div className="w-full flex flex-wrap gap-2">
            {project.technologies.map(technology => (
              <span
                key={technology}
                className="w-fit text-xs bg-accent py-1 px-3 rounded-full"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="project-info-seperator">
          <h2 className="text-lg font-extrabold"> Type </h2>

          <p> {project.type}</p>
        </div>

        <div className="project-info-seperator">
          <h2 className="text-lg font-extrabold"> Date </h2>

          <p> {project.date} </p>
        </div>

        <div className="w-full flex flex-col gap-2 -mt-1">
          <h2 className="text-lg font-extrabold"> Gallery </h2>

          <div className="w-full flex flex-wrap gap-3">
            {project.imgSources.map(imgSource => (
              <img
                src={imgSource}
                alt={`${project.name}'s Screenshot`}
                className="rounded-xl"
              />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProjectOverview;
