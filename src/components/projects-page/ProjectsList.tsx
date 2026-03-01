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
   className="w-full bg-background min-h-screen pt-20 pb-24 overflow-hidden"
  >
   <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
    <motion.button
     variants={fadeInUp}
     onClick={() => navigate(-1)}
     className="group flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-[10px] font-bold uppercase tracking-widest text-muted hover:text-foreground transition-all mb-12"
    >
     <HugeiconsIcon
      icon={ArrowLeft02Icon}
      size={14}
      className="group-hover:-translate-x-1 transition-transform"
     />
     Back Home
    </motion.button>

    <header className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
     <div className="lg:w-1/3">
      <motion.span
       variants={fadeInUp}
       className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-4"
      >
       Archive — 001
      </motion.span>
      <motion.h1
       variants={fadeInUp}
       className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-[-0.06em]"
      >
       All
       <br />
       Works
      </motion.h1>
     </div>
     <div className="lg:w-2/3 lg:pt-14">
      <motion.p
       variants={fadeInUp}
       className="text-xl md:text-2xl font-normal leading-tight tracking-tight text-foreground/80 max-w-xl"
      >
       A horizontal exploration of digital products and technical experiments.
      </motion.p>
     </div>
    </header>
   </div>

   <motion.div
    variants={fadeInUp}
    className="flex flex-nowrap overflow-x-auto gap-8 px-6 md:px-[calc((100vw-1280px)/2+48px)] pb-12 snap-x snap-mandatory scrollbar-hide"
   >
    {allProjects.map((project, idx) => (
     <div
      key={idx}
      className="w-[85vw] md:w-[450px] lg:w-[550px] shrink-0 snap-center md:snap-start"
     >
      <ProjectBox project={project} animateOnce={false} />
     </div>
    ))}

    <div className="shrink-0 w-12 md:w-24" />
   </motion.div>
  </motion.section>
 );
};

export default ProjectsList;
