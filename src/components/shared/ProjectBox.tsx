import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LinkSquare01Icon,
  InformationCircleIcon
} from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
import useMotionPresets from "@/hooks/useMotionPresets";
import type { Project } from "@/types";

interface ProjectBoxProps {
  project: Project;
  idx: number;
  animateOnce?: boolean;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  project,
  idx,
  animateOnce = true
}) => {
  const motionPresets = useMotionPresets();
  const cardVariants = motionPresets.fadeInLeft;

  return (
    <motion.div
      key={idx}
      initial="hide"
      whileInView="show"
      variants={cardVariants}
      viewport={{ once: animateOnce, amount: 0.2 }}
      className="w-full h-auto flex flex-col gap-4 p-6 border border-border rounded-2xl"
    >
      <img
        src={project.imgSources[0]}
        alt={`${project.name}'s Preview`}
        className="rounded-xl border border-border"
      />

      <h3 className="text-2xl font-black">{project.name}</h3>

      <p className="w-fit text-xs py-2 px-3 bg-card text-card-foreground rounded-2xl">
        {project.type}
      </p>

      <p className="text-muted">{project.description}</p>

      <div className="w-full flex items-center justify-between mt-1">
        <a
          href={project.liveUrl}
          target="_blank"
          className="flex items-center gap-2 text-accent"
        >
          Visit Site <HugeiconsIcon icon={LinkSquare01Icon} size={16} />
        </a>

        <Link
          to={`/projects/${project.name.toLowerCase()}`}
          className="flex items-center gap-2 text-accent"
        >
          See Overview <HugeiconsIcon icon={InformationCircleIcon} size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectBox;
