import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, LinkSquare01Icon } from "@hugeicons/core-free-icons";
import useMotionPresets from "@/hooks/useMotionPresets";
import type { Project } from "@/types";

interface ProjectBoxProps {
 project: Project;
 animateOnce?: boolean;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
 project,
 animateOnce = true
}) => {
 const { fadeInUp } = useMotionPresets();

 return (
  <motion.div
   initial="hide"
   whileInView="show"
   variants={fadeInUp}
   viewport={{ once: animateOnce, amount: 0.2 }}
   className="group w-full space-y-6"
  >
   <Link
    to={`/projects/${project.name.toLowerCase()}`}
    className="block relative w-full aspect-video overflow-hidden rounded-[1rem] bg-muted/5 border border-border/10 isolate"
   >
    <img
     src={project.imgSources[0]}
     alt={project.name}
     className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-1000 ease-out"
    />
   </Link>

   <div className="flex flex-col gap-6 px-1">
    <div className="space-y-4">
     <div className="space-y-1">
      <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest">
       {project.type}
      </span>
      <h3 className="text-2xl md:text-3xl font-light lowercase tracking-tighter text-foreground">
       {project.name}
      </h3>
     </div>

     <p className="text-sm md:text-base text-muted/50 lowercase leading-relaxed font-light max-w-2xl">
      {project.description}
     </p>
    </div>

    <div className="flex items-center gap-4 pt-2">
     <Link
      to={`/projects/${project.name.toLowerCase()}`}
      className="flex items-center gap-4 px-6 py-3 bg-foreground text-background rounded-full font-medium lowercase text-xs hover:bg-accent transition-all duration-300"
     >
      <span>case study</span>
      <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
     </Link>

     <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-xs font-medium lowercase text-muted/40 hover:text-foreground transition-all duration-300"
     >
      <HugeiconsIcon icon={LinkSquare01Icon} size={16} />
      <span>live preview</span>
     </a>
    </div>
   </div>
  </motion.div>
 );
};

export default ProjectBox;
