import { motion } from "motion/react";
import useMotionPresets from "@/hooks/useMotionPresets";
import useTools from "@/hooks/useTools";

const SkillsSection = () => {
 const tools = useTools();
 const { fadeInUp } = useMotionPresets();

 return (
  <motion.section
   id="skills-section"
   initial="hide"
   whileInView="show"
   variants={{
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
   }}
   viewport={{ once: true, amount: 0.2 }}
   className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 bg-background"
  >
   <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
    <div className="md:w-1/3 md:sticky md:top-24">
     <motion.span
      variants={fadeInUp}
      className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted/50 mb-4"
     >
      02 — Expertise
     </motion.span>
     <motion.h2
      variants={fadeInUp}
      className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-[-0.06em]"
     >
      Tools &<br />
      Stack
     </motion.h2>
    </div>

    <div className="md:w-2/3 space-y-12">
     <motion.p
      variants={fadeInUp}
      className="text-xl md:text-2xl font-normal leading-tight tracking-tight text-foreground/80 max-w-xl"
     >
      Modern technologies and frameworks I use to build performant digital
      experiences.
     </motion.p>

     {/* THE MONOLITHIC GRID: Single rounded container with internal dividers */}
     <motion.div
      variants={fadeInUp}
      className="grid grid-cols-2 sm:grid-cols-3 overflow-hidden rounded-[2.5rem] border border-border bg-card/10"
     >
      {tools.map(tool => (
       <div
        key={tool.altText}
        className="group flex flex-col gap-6 p-8 border-r border-b border-border last:border-r-0 hover:bg-card/40 transition-colors duration-500"
       >
        {/* Subtle Icon Slot */}
        <div className="w-8 h-8 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
         <img
          src={tool.iconUrl}
          alt={tool.altText}
          className="w-full h-full object-contain"
         />
        </div>

        <div className="space-y-1">
         <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-muted/30">
          Tech
         </span>
         <span className="block text-[11px] font-black uppercase tracking-tight text-card-foreground group-hover:text-foreground transition-colors">
          {tool.altText}
         </span>
        </div>
       </div>
      ))}
     </motion.div>
    </div>
   </div>
  </motion.section>
 );
};

export default SkillsSection;
