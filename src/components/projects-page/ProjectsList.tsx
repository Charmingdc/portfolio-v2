import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import useProjects from "@/hooks/useProjects";
import ProjectBox from "@/components/shared/ProjectBox";
import useMotionPresets from "@/hooks/useMotionPresets";

const ProjectsList = () => {
 const navigate = useNavigate();
 const { allProjects } = useProjects();
 const { fadeInUp } = useMotionPresets();

 return (
  <motion.section
   initial="hide"
   animate="show"
   variants={{
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
   }}
   className="w-full bg-background min-h-screen pt-16 pb-28 overflow-x-hidden"
  >
   <div className="max-w-6xl mx-auto px-6 mb-20">
    <motion.button
     variants={fadeInUp}
     onClick={() => navigate("/")}
     className="group flex items-center gap-2 text-xs font-medium lowercase text-muted/40 hover:text-accent transition-colors my-16"
    >
     <HugeiconsIcon
      icon={ArrowLeft02Icon}
      size={14}
      className="group-hover:-translate-x-1 transition-transform"
     />
     <span>back to home</span>
    </motion.button>

    <header className="space-y-10">
     <div className="space-y-4">
      <motion.div variants={fadeInUp} className="flex items-center gap-3">
       <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest">
        archive — 001
       </span>
       <div className="h-[1px] w-8 bg-border/40" />
      </motion.div>

      <motion.h1
       variants={fadeInUp}
       className="text-5xl md:text-8xl font-light lowercase tracking-tighter leading-none"
      >
       all works
      </motion.h1>
     </div>

     <motion.p
      variants={fadeInUp}
      className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 max-w-xl"
     >
      a continuous exploration of digital products and technical experiments.
     </motion.p>
    </header>
   </div>

   <motion.div
    variants={fadeInUp}
    className="flex flex-nowrap overflow-x-auto gap-6 md:gap-12 pb-12 snap-x snap-mandatory no-scrollbar scroll-px-6 md:scroll-px-24"
   >
    <div className="shrink-0 w-6 md:w-12 lg:w-24" />

    {allProjects.map((project, idx) => (
     <div
      key={idx}
      className="w-[85vw] md:w-[45vw] lg:w-[40vw] shrink-0 snap-center"
     >
      <ProjectBox project={project} animateOnce={false} />
     </div>
    ))}

    <div className="shrink-0 w-6 md:w-12 lg:w-24" />
   </motion.div>
  </motion.section>
 );
};

export default ProjectsList;
