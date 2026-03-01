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
 const motionPresets = useMotionPresets();
 const itemVariants = motionPresets.fadeInUp;

 return (
  <motion.section
   id="hero-section"
   initial="hide"
   whileInView="show"
   variants={{
    hide: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
   }}
   viewport={{ once: true, amount: 0.2 }}
   className="relative w-full min-h-screen flex flex-col items-center pt-20 pb-14 md:pb-0 px-6 bg-background text-foreground transition-colors duration-300"
  >
   <motion.h1
    variants={itemVariants}
    className="font-black uppercase text-center text-[15vw] md:text-[6.5rem] leading-[0.82] tracking-[-0.07em] mb-12"
   >
    Frontend
    <br />
    Software
    <br />
    Engineer<span className="text-[0.4em] align-top ml-1 text-muted">©</span>
   </motion.h1>

   <motion.div
    variants={itemVariants}
    className="relative w-64 md:w-80 aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-[5px] border-border mb-16"
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
      className="group flex items-center gap-2 px-5 py-2.5 bg-card backdrop-blur-sm border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300 ease-out"
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
    <p>OSUN, NG — {new Date().getFullYear()}</p>
    <p>Status: Available</p>
   </motion.div>
  </motion.section>
 );
};

export default HeroSection;
