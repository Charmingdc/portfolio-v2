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
    show: { opacity: 1, transition: { staggerChildren: 0.02 } }
   }}
   viewport={{ once: true, amount: 0.2 }}
   className="w-full py-16 px-6 md:px-24 bg-background"
  >
   <div className="max-w-5xl">
    <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
     <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest">
      02. expertise
     </span>
     <div className="h-[1px] w-8 bg-border/40" />
    </motion.div>

    <div className="max-w-4xl space-y-12">
     <motion.p
      variants={fadeInUp}
      className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 max-w-2xl"
     >
      i leverage a modern suite of tools to build{" "}
      <span className="highlighted-text">performant</span> and resilient digital
      products.
     </motion.p>

     <div className="flex flex-wrap gap-x-10 gap-y-8 pt-4">
      {tools.map(tool => (
       <motion.div
        key={tool.altText}
        variants={fadeInUp}
        className="group flex items-center gap-4 cursor-default"
       >
        <div className="relative flex items-center justify-center">
         <div className="w-1.5 h-1.5 rounded-full bg-muted/20 group-hover:bg-accent group-hover:scale-125 transition-all duration-500" />

         <div className="absolute w-4 h-4 rounded-full border border-accent/0 group-hover:border-accent/20 transition-all duration-500" />
        </div>

      
        <span className="text-base md:text-lg font-medium text-muted/40 lowercase tracking-tight group-hover:text-foreground transition-all duration-500">
         {tool.altText}
        </span>
       </motion.div>
      ))}
     </div>
    </div>
   </div>
  </motion.section>
 );
};

export default SkillsSection;
