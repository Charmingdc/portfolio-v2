import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare01Icon } from "@hugeicons/core-free-icons";
import useMotionPresets from "@/hooks/useMotionPresets";

type Socials = {
 link: string;
 text: string;
};

const socials: Socials[] = [
 { link: "https://x.com/Charmingdc01", text: "Say hi on 𝕏" },
 { link: "https://medium.com/@adebayomuis", text: "Read my Articles" },
 { link: "https://github.com/Charmingdc", text: "Connect on Github" }
];

const HeroSection = () => {
 const { fadeInUp: itemVariants, containerAnim } = useMotionPresets();

 return (
  <motion.section
   id="hero-section"
   initial="hide"
   whileInView="show"
   variants={containerAnim}
   viewport={{ once: true, amount: 0.2 }}
   className="relative w-full min-h-screen flex flex-col items-center pt-20 pb-14 md:pb-0 px-6 bg-background text-foreground transition-colors duration-300"
  >
   <motion.h1
    variants={itemVariants}
    className="font-black uppercase text-center text-[15vw] md:text-[6.5rem] leading-[0.82] tracking-[-0.07em] mb-12"
   >
    <span className="relative inline-block bg-accent/30">
     <span className="absolute -left-[2px] top-0 w-[2px] h-[0.82em] bg-accent">
      <span className="absolute -top-[4px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-accent rounded-full"></span>
     </span>
     Frontend
     <br />
     Software
     <br />
     Engineer
     <span className="text-[0.4em] align-top ml-1 text-soft">©</span>
     <span className="absolute -right-[2px] bottom-0 w-[2px] h-[0.82em] bg-accent">
      <span className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-accent rounded-full"></span>
     </span>
    </span>
   </motion.h1>

   <motion.div
    variants={itemVariants}
    className="relative w-56 md:w-80 aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-md border-[4px] border-border mb-16"
   >
    <img
     src="/illustrations/my-x-dp.jpeg"
     className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105"
     alt="Charmingdc Avatar"
    />
   </motion.div>

   <motion.div
    variants={itemVariants}
    className="flex flex-wrap justify-center gap-3 max-w-2xl"
   >
    {socials.map((social, index) => (
     <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 px-5 py-2.5 bg-card backdrop-blur-sm border border-border rounded-full hover:bg-accent hover:text-background transition-all duration-300 ease-out"
     >
      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-card-foreground group-hover:text-background transition-colors">
       {social.text}
      </span>
      <HugeiconsIcon
       icon={LinkSquare01Icon}
       size={14}
       className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
      />
     </a>
    ))}
   </motion.div>

   <motion.div
    variants={itemVariants}
    className="mt-20 flex justify-between w-full max-w-5xl text-[10px] font-bold uppercase tracking-tighter text-muted px-4"
   >
    <p> Ede, Osun, Nigeria — {new Date().getFullYear()}</p>
    <p className="flex items-center gap-2">
     Available for new roles{" "}
     <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_#4ade80]"></span>
     </span>
    </p>
   </motion.div>
  </motion.section>
 );
};

export default HeroSection;
