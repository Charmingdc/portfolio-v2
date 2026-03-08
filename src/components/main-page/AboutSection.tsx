import { motion } from "motion/react";
import ContributionGraph from "@/components/main-page/ContributionGraph";
import useMotionPresets from "@/hooks/useMotionPresets";
import { HugeiconsIcon } from "@hugeicons/react";
import { Download01Icon } from "@hugeicons/core-free-icons";

const AboutSection = () => {
 const { fadeInUp, containerAnim } = useMotionPresets();

 return (
  <motion.section
   id="about-section"
   initial="hide"
   whileInView="show"
   variants={containerAnim}
   viewport={{ once: true, amount: 0.1 }}
   className="w-full py-16 px-6 md:px-24 bg-background"
  >
   <div className="max-w-5xl">
    <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
     <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest">
      01. about
     </span>
     <div className="h-[1px] w-8 bg-border/40" />
    </motion.div>

    <div className="max-w-4xl space-y-16">
     <motion.div variants={fadeInUp} className="space-y-12">
      <p className="text-xl md:text-3xl font-light leading-snug text-foreground/80 max-w-3xl">
       i solve for the{" "}
       <span className="highlighted-text">complexity of the client-side</span>,
       building resilient systems that handle asynchronous data streams while
       maintaining 60fps interaction fidelity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
       <div className="space-y-3">
        <span className="text-[11px] text-muted/30 lowercase tracking-widest">
         technical path
        </span>
        <p className="text-sm md:text-base text-soft leading-relaxed font-light">
         based in nigeria, my focus over the last 3+ years has been mastering
         the <span className="text-foreground">react lifecycle</span> and its
         underlying reconciliation patterns. i specialize in creating
         predictable frontend environments where performance and scalability are
         baked into the core logic.
        </p>
       </div>
       <div className="space-y-3">
        <span className="text-[11px] text-muted/30 lowercase tracking-widest">
         philosophy
        </span>
        <p className="text-sm md:text-base text-soft leading-relaxed font-light">
         i prioritize{" "}
         <span className="highlighted-text">type-safe interaction logic</span>
         and memoization strategies that prevent layout thrashing. by treating
         the UI as a pure function of state, i build interfaces that remain
         stable even as the underlying business requirements shift and scale.
        </p>
       </div>
      </div>
     </motion.div>

     <motion.div variants={fadeInUp} className="space-y-6">
      <span className="text-[11px] text-muted/30 lowercase tracking-widest">
       open source activity
      </span>
      <div className="p-6 md:p-10 bg-card/10 border border-border/40 rounded-xl overflow-hidden">
       <ContributionGraph />
      </div>
     </motion.div>

     <motion.div variants={fadeInUp}>
      <a
       href="/resume.pdf"
       className="group inline-flex items-center gap-4 text-sm font-medium text-muted/60 hover:text-accent transition-all duration-500"
      >
       <div className="w-10 h-10 flex items-center justify-center rounded-full border border-border/60 group-hover:border-accent group-hover:bg-accent/5 transition-all">
        <HugeiconsIcon icon={Download01Icon} size={16} />
       </div>
       <span className="tracking-tight">download experience.pdf</span>
      </a>
     </motion.div>
    </div>
   </div>
  </motion.section>
 );
};

export default AboutSection;
