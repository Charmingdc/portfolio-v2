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
   <div className="flex flex-col gap-6 px-1 pr-5">
    <div className="space-y-3">
     <div className="space-y-1">
      <a
       href={project.liveUrl}
       target="_blank"
       rel="noopener noreferrer"
       className="w-full flex items-center justify-between"
      >
       <h3 className="text-2xl md:text-3xl font-light lowercase tracking-tighter text-foreground">
        {project.name}
       </h3>

       <HugeiconsIcon icon={LinkSquare01Icon} size={14} />
      </a>

      <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest">
       {project.type}
      </span>
     </div>

     <p className="text-sm md:text-base text-muted/50 lowercase leading-relaxed font-light max-w-2xl !mt-1.5">
      {project.detailedDescription}
     </p>

     <Link
      to={`/projects/${project.name.toLowerCase()}`}
      className="flex items-center gap-1 text-[10px] font-medium text-accent/60 lowercase tracking-widest underline underline-offset-1 decoration-dotted"
     >
      read case study
      <HugeiconsIcon icon={ArrowRight02Icon} size={14} />
     </Link>
    </div>
   </div>
  </motion.div>
 );
};

export default ProjectBox;
