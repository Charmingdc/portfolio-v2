import { motion } from "motion/react";
import useMotionPresets from "@/hooks/useMotionPresets";

type Socials = {
 link: string;
 text: string;
};

const socials: Socials[] = [
 { link: "https://x.com/Charmingdc01", text: "twitter" },
 { link: "https://medium.com/@adebayomuis", text: "articles" },
 { link: "https://github.com/Charmingdc", text: "github" }
];

const HeroSection = () => {
 const { fadeInUp: itemVariants, containerAnim } = useMotionPresets();

 return (
  <motion.section
   id="hero-section"
   initial="hide"
   animate="show"
   variants={containerAnim}
   className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-24 bg-background transition-colors duration-500 -mt-4"
  >
   <div className="max-w-4xl space-y-12">
    <motion.div variants={itemVariants} className="flex items-center gap-1">
     <span className="text-[10px] font-medium text-muted/40 lowercase tracking-[0.3em]">
      short intro ↳
     </span>
     <div className="self-end h-[1px] w-4 bg-border/40" />
    </motion.div>

    <motion.div variants={itemVariants}>
     <h1 className="w-[85%] text-3xl md:text-6xl font-light leading-tight tracking-tighter text-foreground lowercase">
      i build <span className="highlighted-text">resilient</span> frontend
      systems that stay fast and predictable, turning complex data into fluid,
      high-quality experiences that never break under pressure.
     </h1>
    </motion.div>

    <motion.div variants={itemVariants} className="flex gap-8 pt-4">
     {socials.map((social, index) => (
      <a
       key={index}
       href={social.link}
       target="_blank"
       rel="noopener noreferrer"
       className="text-xs font-medium text-muted/40 hover:text-accent transition-all duration-300 lowercase"
      >
       {social.text}
      </a>
     ))}
    </motion.div>
   </div>

   <motion.div
    variants={itemVariants}
    className="absolute bottom-14 left-6 md:left-24 flex items-center gap-4 text-[10px] font-medium text-muted/20 lowercase tracking-widest"
   >
    <span>ede, osun — ng</span>
    <span className="w-1 h-1 rounded-full bg-border/40" />
    <span>{new Date().getFullYear()}</span>
   </motion.div>
  </motion.section>
 );
};

export default HeroSection;
