import { HugeiconsIcon } from "@hugeicons/react";
import {
 ArrowLeft02Icon,
 LinkSquare01Icon,
 GithubIcon
} from "@hugeicons/core-free-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import useProjects from "@/hooks/useProjects";
import useMotionPresets from "@/hooks/useMotionPresets";

const ProjectOverview = ({ projectName }: { projectName: string }) => {
 const navigate = useNavigate();
 const { allProjects } = useProjects();
 const { fadeInUp } = useMotionPresets();

 const project = allProjects.find(
  project => project.name.toLowerCase() === projectName
 );

 if (!project)
  return (
   <div className="h-screen flex items-center justify-center font-black uppercase tracking-tighter text-4xl text-foreground">
    Project Not Found
   </div>
  );

 return (
  <motion.section
   initial="hide"
   animate="show"
   variants={{
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
   }}
   className="w-full max-w-7xl mx-auto pt-16 pb-24 px-6 md:px-12 bg-background min-h-screen"
  >
   <motion.button
    variants={fadeInUp}
    onClick={() => navigate(-1)}
    className="group flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-[10px] font-bold uppercase tracking-widest text-muted hover:text-foreground hover:border-foreground/20 transition-all mb-12"
   >
    <HugeiconsIcon
     icon={ArrowLeft02Icon}
     size={14}
     className="group-hover:-translate-x-1 transition-transform"
    />
    Back
   </motion.button>

   <header className="flex flex-col gap-10 mb-20">
    <div className="space-y-4">
     <motion.span
      variants={fadeInUp}
      className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/60"
     >
      Case Study — {project.type}
     </motion.span>
     <motion.h1
      variants={fadeInUp}
      className="text-6xl md:text-9xl font-black uppercase leading-[0.8] tracking-[-0.06em] text-foreground"
     >
      {project.name}
     </motion.h1>
    </div>

    <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
     <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-bold uppercase text-[10px] tracking-widest hover:opacity-90 transition-all"
     >
      <HugeiconsIcon icon={LinkSquare01Icon} size={16} /> Live Preview
     </a>
     {project.githubLink && (
      <a
       href={project.githubLink}
       target="_blank"
       rel="noopener noreferrer"
       className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full font-bold uppercase text-[10px] tracking-widest hover:border-foreground/40 transition-all text-foreground"
      >
       <HugeiconsIcon icon={GithubIcon} size={16} /> Source Code
      </a>
     )}
    </motion.div>
   </header>

   <div className="flex flex-col lg:flex-row gap-16 items-start">
    <div className="w-full lg:w-2/3 space-y-16">
     <motion.div
      variants={fadeInUp}
      className="rounded-3xl overflow-hidden border border-border bg-card shadow-2xl"
     >
      <img
       src={project.imgSources[0]}
       alt="Hero"
       className="w-full h-auto object-cover"
      />
     </motion.div>

     <motion.article variants={fadeInUp} className="space-y-8 max-w-2xl">
      <div className="space-y-4">
       <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/40 flex items-center gap-3">
        <span className="w-8 h-[1px] bg-border"></span>
        The Challenge
       </h2>
       {/* Softened typography: font-normal and base size for better reading UX */}
       <p className="text-base md:text-lg font-normal leading-relaxed tracking-normal text-card-foreground/90">
        {project.detailedDescription}
       </p>
      </div>
     </motion.article>

     <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-8">
      {project.imgSources.slice(1).map((img, i) => (
       <div
        key={i}
        className="rounded-3xl overflow-hidden border border-border bg-card"
       >
        <img
         src={img}
         className="w-full h-auto object-cover"
         alt={`Gallery ${i}`}
        />
       </div>
      ))}
     </motion.div>
    </div>

    <motion.aside
     variants={fadeInUp}
     className="w-full lg:w-1/3 lg:sticky lg:top-24 space-y-10 bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-border"
    >
     <div className="space-y-4">
      <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted/50">
       Technologies
      </h3>
      <div className="flex flex-wrap gap-2">
       {project.technologies.map(tech => (
        <span
         key={tech}
         className="text-[10px] font-medium py-1.5 px-3 bg-background border border-border rounded-full text-foreground/70"
        >
         {tech}
        </span>
       ))}
      </div>
     </div>

     <div className="grid grid-cols-2 lg:grid-cols-1 gap-10">
      <div className="space-y-1.5">
       <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted/50">
        Project Type
       </h3>
       <p className="text-sm font-semibold text-foreground/80 tracking-tight uppercase">
        {project.type}
       </p>
      </div>

      <div className="space-y-1.5">
       <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted/50">
        Timeline
       </h3>
       <p className="text-sm font-semibold text-foreground/80 tracking-tight uppercase">
        {project.date}
       </p>
      </div>
     </div>
    </motion.aside>
   </div>
  </motion.section>
 );
};

export default ProjectOverview;
