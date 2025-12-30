import { Link } from "react-router-dom";
import { ExternalLink, Layers, Github } from "lucide-react";
import { motion } from "motion/react";
import useMotionPresets from "@/hooks/useMotionPresets";
import type { Project } from "@/types";

const ProjectBox = ({ project, idx }: { project: Project; idx: number }) => {
  const motionPresets = useMotionPresets();
  const cardVariants = motionPresets.fadeInLeft;

  return (
    <motion.div
      key={idx}
      initial="hide"
      whileInView="show"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full h-auto flex flex-col gap-4 p-6 border border-border rounded-xl"
    >
      <div className="w-full flex items-center justify-between">
        <h3 className="text-2xl font-black opacity-10">
          .{String(idx + 1).padStart(2, "0")}
        </h3>

        {project.githubLink && (
          <a
            aria-label={`${project.name}'s github repository link`}
            href={project.githubLink}
            target="_blank"
            className="w-fit flex items-center gap-2 p-2 border border-border rounded-lg"
          >
            Source <Github size={14} />
          </a>
        )}
      </div>

      <h3 className="text-2xl font-black">{project.name}</h3>

      <div className="flex flex-wrap gap-2 font-bold">
        {project.technologies.map(technology => (
          <span key={technology} className="w-fit py-1 border-b border-border">
            {technology}
          </span>
        ))}
      </div>

      <p className="text-muted">{project.description}</p>

      <div className="w-full flex items-center justify-between mt-1">
        <Link
          to={project.liveUrl}
          className="flex items-center gap-2 text-accent"
        >
          Live Url <ExternalLink size={16} />
        </Link>

        <Link
          to={`/projects/${project.name}`}
          className="flex items-center gap-2 text-accent"
        >
          Behind the Build <Layers size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
