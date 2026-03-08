import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Book02Icon, StarIcon } from "@hugeicons/core-free-icons";
import useMotionPresets from "@/hooks/useMotionPresets";

const ReadingSection = () => {
 const { fadeInUp, containerAnim } = useMotionPresets();

 const currentBook = {
  title: "How to Win Friends and Influence People",
  author: "Dale Carnegie",
  category: "Psychology & Communication",
  insight:
   "Exploring fundamental techniques in handling people and the soft skills required to lead engineering teams effectively."
 };

 return (
  <motion.section
   initial="hide"
   whileInView="show"
   variants={containerAnim}
   viewport={{ once: true, amount: 0.2 }}
   className="w-full py-32 px-6 md:px-24 bg-background border-t border-border/10"
  >
   <div className="max-w-6xl mx-auto">
    <header className="mb-20 space-y-4">
     <motion.div variants={fadeInUp} className="flex items-center gap-3">
      <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest">
       04. current library
      </span>
      <div className="h-[1px] w-8 bg-border/40" />
     </motion.div>
     <motion.h2
      variants={fadeInUp}
      className="text-5xl md:text-7xl font-light lowercase tracking-tighter"
     >
      currently reading
     </motion.h2>
    </header>

    <motion.div
     variants={fadeInUp}
     className="group relative p-8 md:p-12 lg:p-16 bg-card/10 border border-border/40 rounded-[1rem] hover:border-accent/30 transition-all duration-500 overflow-hidden"
    >
     <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-8 space-y-12">
       <div className="space-y-6">
        <div className="flex items-center gap-2">
         <HugeiconsIcon icon={StarIcon} size={14} className="text-accent" />
         <span className="text-[10px] font-medium text-muted/40 lowercase tracking-widest">
          {currentBook.category}
         </span>
        </div>

        <div className="space-y-2">
         <h3 className="text-4xl md:text-6xl font-light lowercase tracking-tighter text-foreground/90 leading-tight">
          {currentBook.title}
         </h3>
         <p className="text-xl text-soft lowercase tracking-tight italic">
          by {currentBook.author}
         </p>
        </div>
       </div>

       <div className="max-w-2xl">
        <p className="text-lg md:text-xl font-light leading-relaxed text-muted/60 lowercase italic">
         "{currentBook.insight}"
        </p>
       </div>
      </div>

      <div className="lg:col-span-4 flex flex-col lg:items-end justify-between h-full space-y-8">
       <div className="flex items-center gap-3 bg-background/50 px-4 py-2 rounded-full border border-border/20 w-fit">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] font-medium text-foreground/60 lowercase tracking-widest">
         in progress
        </span>
       </div>

       <HugeiconsIcon
        icon={Book02Icon}
        size={48}
        className="text-muted/10 group-hover:text-accent/20 transition-colors duration-700 hidden lg:block"
       />
      </div>
     </div>

     <div className="absolute -bottom-12 -right-12 opacity-[0.02] pointer-events-none text-foreground">
      <HugeiconsIcon icon={Book02Icon} size={320} />
     </div>
    </motion.div>
   </div>
  </motion.section>
 );
};

export default ReadingSection;
