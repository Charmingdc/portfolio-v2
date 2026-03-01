import { motion } from "motion/react";
import ContributionGraph from "@/components/main-page/ContributionGraph";
import useMotionPresets from "@/hooks/useMotionPresets";
import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon } from "@hugeicons/core-free-icons";

const AboutSection = () => {
 const { fadeInUp } = useMotionPresets();

 return (
  <motion.section
   id="about-section"
   initial="hide"
   whileInView="show"
   variants={{
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
   }}
   viewport={{ once: true, amount: 0.1 }}
   className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 bg-background"
  >
   <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
    <div className="lg:col-span-4 lg:sticky lg:top-24 z-10">
     <motion.span
      variants={fadeInUp}
      className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted/50 mb-4"
     >
      01 — About Me
     </motion.span>
     <motion.h2
      variants={fadeInUp}
      className="text-5xl md:text-7xl font-black uppercase leading-[0.85] tracking-[-0.06em] text-foreground"
     >
      The
      <br />
      Identity
     </motion.h2>

     <motion.div variants={fadeInUp} className="mt-10">
      <a
       href="/resume.pdf"
       download="Adebayo_Muis_CV.pdf"
       target="_blank"
       className="inline-flex items-center gap-4 p-4 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-all group"
      >
       <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-background border border-border rounded-xl group-hover:bg-foreground group-hover:text-background transition-colors">
        <HugeiconsIcon icon={Download01Icon} size={18} />
       </div>
       <div className="flex flex-col pr-4">
        <span className="text-[9px] font-bold uppercase tracking-widest text-muted/40">
         Experience
        </span>
        <p className="text-xs font-bold text-foreground uppercase tracking-tight">
         Download CV
        </p>
       </div>
      </a>
     </motion.div>
    </div>

    <div className="lg:col-span-8 space-y-16">
     <motion.div variants={fadeInUp} className="space-y-10">
      <p className="text-xl md:text-2xl font-normal leading-relaxed tracking-tight text-foreground/90 max-w-2xl">
       I like to build clear, reliable, and scalable web products with
       thoughtful user experiences, focusing on performance, accessibility, and
       long-term maintainability.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-border/60">
       <div className="space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted/40">
         Background
        </span>
        <p className="text-sm leading-relaxed text-card-foreground font-normal">
         I’m Adebayo Muis, a Nigeria-based frontend software engineer with 3+
         years of experience building real-world web applications, from small
         tools to full product interfaces.
        </p>
       </div>

       <div className="space-y-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted/40">
         Specialization
        </span>
        <p className="text-sm leading-relaxed text-card-foreground font-normal">
         A self-taught developer specializing in React, TypeScript, and Tailwind
         CSS. I take pride in writing clean, well-structured code and building
         interfaces that scale reliably.
        </p>
       </div>
      </div>
     </motion.div>

     <motion.div variants={fadeInUp} className="pt-8">
      <div className="mb-6 flex justify-between items-end px-1">
       <span className="text-[10px] font-bold uppercase tracking-widest text-muted/40">
        Open Source Contributions
       </span>
       <span className="text-[9px] font-mono text-muted/30 uppercase tracking-tighter">
        Github_Activity_v1.0
       </span>
      </div>
      <div className="p-8 bg-card border border-border rounded-[2.5rem] overflow-hidden shadow-inner shadow-black/20">
       <ContributionGraph />
      </div>
     </motion.div>
    </div>
   </div>
  </motion.section>
 );
};

export default AboutSection;
