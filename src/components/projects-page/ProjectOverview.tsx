import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
 ArrowLeft02Icon,
 LinkSquare01Icon,
 GithubIcon,
 ArrowRight02Icon,
 Menu01Icon
} from "@hugeicons/core-free-icons";
import useProjects from "@/hooks/useProjects";
import useMotionPresets from "@/hooks/useMotionPresets";

const ProjectOverview = ({ projectName }: { projectName: string }) => {
 const navigate = useNavigate();
 const { allProjects } = useProjects();
 const { fadeInUp, containerAnim } = useMotionPresets();

 const currentIndex = allProjects.findIndex(
  p => p.name.toLowerCase() === projectName.toLowerCase()
 );
 const project = allProjects[currentIndex];
 const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

 if (!project)
  return (
   <div className="h-screen flex items-center justify-center font-light lowercase text-2xl text-foreground">
    project not found.
   </div>
  );

 return (
  <motion.section
   initial="hide"
   animate="show"
   variants={containerAnim}
   className="w-full pt-32 pb-32 px-6 md:px-24 bg-background min-h-screen"
  >
   <header className="max-w-6xl mx-auto space-y-12 mb-24">
    <div className="flex items-center gap-8">
     <motion.button
      variants={fadeInUp}
      onClick={() => navigate(-1)}
      className="group text-sm font-medium lowercase text-muted/40 hover:text-accent transition-colors flex items-center gap-2"
     >
      <HugeiconsIcon
       icon={ArrowLeft02Icon}
       size={14}
       className="group-hover:-translate-x-1 transition-transform"
      />
      <span>back to index</span>
     </motion.button>

     <motion.button
      variants={fadeInUp}
      onClick={() => navigate("/projects")}
      className="group text-sm font-medium lowercase text-muted/40 hover:text-accent transition-colors flex items-center gap-2"
     >
      <HugeiconsIcon
       icon={Menu01Icon}
       size={14}
       className="group-hover:rotate-90 transition-transform duration-300"
      />
      <span>back to lists</span>
     </motion.button>
    </div>

    <div className="space-y-4">
     <motion.span
      variants={fadeInUp}
      className="text-[10px] font-medium text-accent/60 lowercase tracking-widest"
     >
      case study — {project.type}
     </motion.span>
     <motion.h1
      variants={fadeInUp}
      className="text-6xl md:text-9xl font-light lowercase tracking-tighter leading-none"
     >
      {project.name}
     </motion.h1>
    </div>

    <motion.div variants={fadeInUp} className="flex gap-4">
     <a
      href={project.liveUrl}
      target="_blank"
      className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium lowercase text-xs hover:opacity-90 transition-all active:scale-[0.98]"
     >
      <HugeiconsIcon icon={LinkSquare01Icon} size={16} /> live site
     </a>
     {project.githubLink && (
      <a
       href={project.githubLink}
       target="_blank"
       className="flex items-center gap-2 px-6 py-3 bg-background border border-border/40 text-soft rounded-full font-medium lowercase text-xs hover:border-accent hover:text-accent transition-all active:scale-[0.98]"
      >
       <HugeiconsIcon icon={GithubIcon} size={16} /> source code
      </a>
     )}
    </motion.div>
   </header>

   <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-40">
    <div className="lg:col-span-8 space-y-32">
     <motion.div variants={fadeInUp}>
      <img
       src={project.imgSources[0]}
       alt="Hero Preview"
       className="w-full aspect-video object-cover rounded-[1rem] border border-border/10"
      />
     </motion.div>

     <div className="space-y-24">
      <motion.div variants={fadeInUp} className="space-y-6">
       <h2 className="text-[11px] text-muted/40 lowercase tracking-[0.2em] flex items-center gap-3">
        <div className="w-8 h-[1px] bg-border/40" /> project overview
       </h2>
       <p className="text-xl md:text-2xl font-light leading-relaxed text-foreground/90">
        {project.detailedDescription}
       </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-6">
       <h2 className="text-[11px] text-muted/40 lowercase tracking-[0.2em] flex items-center gap-3">
        <div className="w-8 h-[1px] bg-border/40" /> the challenge
       </h2>
       <p className="text-xl md:text-3xl font-light leading-snug text-foreground/80">
        {project.challenge}
       </p>
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-6">
       <h2 className="text-[11px] text-muted/40 lowercase tracking-[0.2em] flex items-center gap-3">
        <div className="w-8 h-[1px] bg-border/40" /> engineering approach
       </h2>
       <p className="text-lg md:text-xl font-light leading-relaxed text-soft">
        {project.approach}
       </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
       <img
        src={project.imgSources[1]}
        alt="Technical View"
        className="w-full h-auto rounded-[1rem] border border-border/10"
       />
      </motion.div>

      <motion.div variants={fadeInUp} className="space-y-6">
       <h2 className="text-[11px] text-muted/40 lowercase tracking-[0.2em] flex items-center gap-3">
        <div className="w-8 h-[1px] bg-border/40" /> the solution
       </h2>
       <p className="text-lg md:text-xl font-light leading-relaxed text-soft">
        {project.solution}
       </p>
      </motion.div>

      {project.imgSources[2] && (
       <motion.div variants={fadeInUp}>
        <img
         src={project.imgSources[2]}
         alt="Final view"
         className="w-full h-auto rounded-[1rem] border border-border/10"
        />
       </motion.div>
      )}
     </div>
    </div>

    <motion.aside
     variants={fadeInUp}
     className="lg:col-span-4 space-y-12 sticky top-32 h-fit pt-2"
    >
     <div className="space-y-4">
      <span className="text-[11px] text-muted/30 lowercase tracking-widest">
       technologies
      </span>
      <div className="flex flex-wrap gap-x-6 gap-y-3">
       {project.technologies.map(tech => (
        <span key={tech} className="text-xs font-medium lowercase text-soft">
         {tech}
        </span>
       ))}
      </div>
     </div>

     <div className="space-y-1">
      <span className="text-[11px] text-muted/30 lowercase tracking-widest">
       timeline
      </span>
      <p className="text-sm font-medium lowercase">{project.date}</p>
     </div>
    </motion.aside>
   </div>

   <footer className="max-w-6xl mx-auto border-t border-border/40 pt-24">
    <motion.div
     variants={fadeInUp}
     className="flex flex-col items-center text-center space-y-8"
    >
     <span className="text-[10px] font-medium text-muted/40 lowercase tracking-[0.4em]">
      up next ↳
     </span>
     <button
      onClick={() => {
       window.scrollTo(0, 0);
       navigate(`/projects/${nextProject.name.toLowerCase()}`);
      }}
      className="group space-y-4"
     >
      <h3 className="text-5xl md:text-8xl font-light lowercase tracking-tighter group-hover:text-accent transition-colors duration-500">
       {nextProject.name}
      </h3>
      <div className="flex items-center justify-center gap-2 text-muted/40 group-hover:text-foreground transition-colors">
       <span className="text-xs lowercase font-medium">view case study</span>
       <HugeiconsIcon
        icon={ArrowRight02Icon}
        size={16}
        className="group-hover:translate-x-1 transition-transform"
       />
      </div>
     </button>
    </motion.div>
   </footer>
  </motion.section>
 );
};

export default ProjectOverview;
