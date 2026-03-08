import { Link } from "react-router-dom";
import { motion } from "motion/react";
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
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
   }}
   viewport={{ once: true, amount: 0.1 }}
   className="w-full py-20 px-6 md:px-24 bg-background"
  >
   <div className="max-w-6xl mx-auto">
    <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
     <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest">
      03. selected works
     </span>
     <div className="h-[1px] w-8 bg-border/40" />
    </motion.div>

    <div className="space-y-24">
     <motion.p
      variants={fadeInUp}
      className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/80 max-w-2xl"
     >
      blending modern technologies to create{" "}
      <span className="highlighted-text">innovative</span> products with
      high-performance engineering.
     </motion.p>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
      {projects.slice(0, 4).map((project, idx) => (
       <div key={idx} className={idx % 2 !== 0 ? "md:mt-20" : ""}>
        <ProjectBox project={project} />
       </div>
      ))}
     </div>

     <motion.div variants={fadeInUp} className="pt-6">
      <Link
       to="/projects"
       className="group flex items-center gap-3 text-base font-medium lowercase text-muted/40 hover:text-accent transition-all duration-500"
      >
       <span>view the archive</span>
       <span className="text-xl group-hover:translate-x-1.5 transition-transform duration-500">
        →
       </span>
      </Link>
     </motion.div>
    </div>
   </div>
  </motion.section>
 );
};

export default ProjectSection;
