import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare01Icon } from "@hugeicons/core-free-icons";
import ProjectBox from "@/components/shared/ProjectBox";
import useProjects from "@/hooks/useProjects";
import useMotionPresets from "@/hooks/useMotionPresets";

const ProjectSection = () => {
 const { projects } = useProjects();
 const { fadeInUp } = useMotionPresets();

 return (
  <motion.section
   id="project-section"
   initial="hide"
   whileInView="show"
   variants={{
    hide: { opacity: 0 },
    show: {
     opacity: 1,
     transition: { staggerChildren: 0.15 }
    }
   }}
   viewport={{ once: true, amount: 0.1 }}
   className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 bg-background"
  >
   <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
    <div className="w-full md:w-1/3 md:sticky md:top-32 z-10 self-start">
     <motion.span
      variants={fadeInUp}
      className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted/50 mb-4"
     >
      03 — Portfolio
     </motion.span>
     <motion.h2
      variants={fadeInUp}
      className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-[-0.06em] text-foreground"
     >
      Selected
      <br />
      Works
     </motion.h2>
    </div>

    <div className="w-full md:w-2/3 space-y-16">
     <motion.p
      variants={fadeInUp}
      className="text-xl md:text-2xl font-normal leading-tight tracking-tight text-foreground/80 max-w-xl"
     >
      Blending the latest technologies to create innovative, problem-solving
      projects with a focus on high-performance interfaces.
     </motion.p>

     <motion.div
      variants={fadeInUp}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
     >
      {projects.map((project, idx) => (
       <div key={idx} className="w-full">
        <ProjectBox project={project} />
       </div>
      ))}
     </motion.div>

     <motion.div
      variants={fadeInUp}
      className="pt-12 border-t border-border/60 flex justify-center md:justify-start"
     >
      <Link
       to="/projects"
       className="group flex items-center gap-4 px-10 py-5 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-all duration-300"
      >
       <div className="flex flex-col items-start pr-4 border-r border-border/60">
        <span className="text-[9px] font-bold uppercase tracking-widest text-muted/40">
         Archive
        </span>
        <span className="text-xs font-black uppercase tracking-tight text-foreground">
         Explore All
        </span>
       </div>
       <HugeiconsIcon
        icon={LinkSquare01Icon}
        size={20}
        className="text-muted/60 group-hover:text-foreground group-hover:translate-x-1 transition-all"
       />
      </Link>
     </motion.div>
    </div>
   </div>
  </motion.section>
 );
};

export default ProjectSection;
