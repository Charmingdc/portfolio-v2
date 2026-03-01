import { HugeiconsIcon } from "@hugeicons/react";
import {
 NewTwitterIcon,
 Linkedin02Icon,
 GithubIcon,
 Call02Icon,
 Mail02Icon
} from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
import useMotionPresets from "@/hooks/useMotionPresets";

const socials = [
 { link: "https://x.com/Charmingdc01", icon: NewTwitterIcon, label: "X" },
 {
  link: "https://linkedin.com/in/adebayomuis",
  icon: Linkedin02Icon,
  label: "LinkedIn"
 },
 { link: "https://github.com/Charmingdc", icon: GithubIcon, label: "Github" }
];

const ContactSection = () => {
 const { fadeInUp } = useMotionPresets();

 return (
  <motion.section
   id="contact-section"
   initial="hide"
   whileInView="show"
   variants={{
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
   }}
   viewport={{ once: true, amount: 0.2 }}
   className="w-full max-w-7xl mx-auto py-24 px-6 md:px-12 bg-background"
  >
   <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
    <div className="w-full md:w-1/3">
     <motion.span
      variants={fadeInUp}
      className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted mb-4"
     >
      04 — Connection
     </motion.span>
     <motion.h2
      variants={fadeInUp}
      className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-[-0.05em]"
     >
      Let's
      <br />
      Connect
     </motion.h2>
    </div>

    <div className="w-full md:w-2/3 space-y-10">
     <motion.p
      variants={fadeInUp}
      className="text-xl md:text-3xl font-medium leading-tight tracking-tight text-foreground max-w-xl"
     >
      Interested in working together? We should queue up a time to chat. I’ll
      buy the coffee.
     </motion.p>

     <motion.div
      variants={fadeInUp}
      className="flex flex-col sm:flex-row gap-3"
     >
      <a
       href="mailto:charmingdc002@gmail.com"
       className="flex-1 flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-all group"
      >
       <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-background border border-border rounded-full group-hover:bg-foreground group-hover:text-background transition-colors">
        <HugeiconsIcon icon={Mail02Icon} size={18} />
       </div>
       <div className="flex flex-col">
        <span className="text-[9px] font-bold uppercase tracking-widest text-muted">
         Email
        </span>
        <p className="text-xs font-bold text-foreground">
         charmingdc002@gmail.com
        </p>
       </div>
      </a>

      <a
       href="tel:+2347079983007"
       className="flex-1 flex items-center gap-4 p-5 bg-card border border-border rounded-2xl hover:border-foreground/20 transition-all group"
      >
       <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-background border border-border rounded-full group-hover:bg-foreground group-hover:text-background transition-colors">
        <HugeiconsIcon icon={Call02Icon} size={18} />
       </div>
       <div className="flex flex-col">
        <span className="text-[9px] font-bold uppercase tracking-widest text-muted">
         Call
        </span>
        <p className="text-xs font-bold text-foreground">+234 707 998 3007</p>
       </div>
      </a>
     </motion.div>

     <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
      {socials.map(social => (
       <a
        key={social.link}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center p-4 bg-card border border-border rounded-2xl hover:bg-foreground hover:text-background transition-all duration-300"
       >
        <HugeiconsIcon
         icon={social.icon}
         size={18}
         className="group-hover:scale-110 transition-transform"
        />
       </a>
      ))}
     </motion.div>
    </div>
   </div>
  </motion.section>
 );
};

export default ContactSection;
