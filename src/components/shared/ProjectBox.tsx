import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare01Icon, ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
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
   className="group w-full flex flex-col gap-8 p-5 bg-card border border-border/10 rounded-[2rem] transition-all duration-500 hover:shadow-lg"
  >
   <Link
    to={`/projects/${project.name.toLowerCase()}`}
    className="relative w-full aspect-[4/3] overflow-hidden rounded-[1.8rem] bg-black isolate"
   >
    <img
     src={project.imgSources[0]}
     alt={`${project.name}'s Preview`}
     className="w-full h-full object-cover grayscale brightness-50 border-radius-[2rem] transition-all duration-700 scale-100 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
    />
   </Link>

   <div className="flex flex-col gap-4 px-2">
    <div className="flex justify-between items-start">
     <div className="space-y-1">
      <h3 className="text-3xl font-black uppercase tracking-[-0.04em] leading-none text-foreground">
       {project.name}
      </h3>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/60">
       {project.type}
      </p>
     </div>
    </div>

    <p className="text-sm leading-relaxed text-card-foreground/70 font-normal line-clamp-2">
     {project.description}
    </p>
   </div>

   <div className="flex items-center gap-3 px-1 mt-auto">
    <Link
     to={`/projects/${project.name.toLowerCase()}`}
     className="flex-1 flex items-center justify-between px-7 py-4 bg-foreground text-background rounded-3xl font-bold uppercase text-[11px] tracking-widest hover:bg-foreground/90 transition-all active:scale-[0.98]"
    >
     View Case Study
     <HugeiconsIcon
      icon={ArrowRight02Icon}
      size={18}
      className="group-hover:translate-x-1 transition-transform"
     />
    </Link>

    <a
     href={project.liveUrl}
     target="_blank"
     rel="noopener noreferrer"
     className="flex items-center justify-center w-14 h-14 bg-secondary/30 border border-border/20 rounded-2xl text-foreground hover:bg-foreground hover:text-background transition-all duration-300 active:scale-[0.98]"
    >
     <HugeiconsIcon icon={LinkSquare01Icon} size={20} />
    </a>
   </div>
  </motion.div>
 );
};

export default ProjectBox;
