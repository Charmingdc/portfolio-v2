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
 { link: "https://x.com/Charmingdc01", icon: NewTwitterIcon, label: "x" },
 {
  link: "https://linkedin.com/in/adebayomuis",
  icon: Linkedin02Icon,
  label: "linkedin"
 },
 { link: "https://github.com/Charmingdc", icon: GithubIcon, label: "github" }
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
   className="w-full py-16 px-6 md:px-24 bg-background"
  >
   <div className="max-w-5xl">
    <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
     <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest">
      04. connection
     </span>
     <div className="h-[1px] w-8 bg-border/40" />
    </motion.div>

    <div className="max-w-4xl space-y-16">
     <div className="space-y-8">
      <motion.h2
       variants={fadeInUp}
       className="text-5xl md:text-8xl font-light lowercase tracking-tighter leading-[0.85]"
      >
       let's
       <br />
       connect
      </motion.h2>

      <motion.p
       variants={fadeInUp}
       className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 max-w-xl"
      >
       interested in working together? we should queue up a time to chat. i’ll
       buy the coffee.
      </motion.p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <motion.a
       variants={fadeInUp}
       href="mailto:charmingdc002@gmail.com"
       className="group flex items-center justify-between p-6 rounded-xl border border-border/40 hover:border-accent transition-all duration-500"
      >
       <div className="space-y-1">
        <span className="text-[10px] text-muted/30 lowercase tracking-widest">
         email
        </span>
        <p className="text-lg font-light text-foreground lowercase tracking-tight">
         charmingdc002@gmail.com
        </p>
       </div>
       <HugeiconsIcon
        icon={Mail02Icon}
        size={20}
        className="text-muted/20 group-hover:text-accent group-hover:translate-x-1 transition-all"
       />
      </motion.a>

      <motion.a
       variants={fadeInUp}
       href="tel:+2347079983007"
       className="group flex items-center justify-between p-6 rounded-xl border border-border/40 hover:border-accent transition-all duration-500"
      >
       <div className="space-y-1">
        <span className="text-[10px] text-muted/30 lowercase tracking-widest">
         phone
        </span>
        <p className="text-lg font-light text-foreground lowercase tracking-tight">
         +234 707 998 3007
        </p>
       </div>
       <HugeiconsIcon
        icon={Call02Icon}
        size={20}
        className="text-muted/20 group-hover:text-accent group-hover:translate-x-1 transition-all"
       />
      </motion.a>
     </div>

     <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 pt-4">
      {socials.map(social => (
       <a
        key={social.link}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
       >
        <div className="w-1.5 h-1.5 rounded-full bg-muted/20 group-hover:bg-accent group-hover:scale-125 transition-all duration-500" />
        <span className="text-sm font-medium text-muted/40 lowercase tracking-tight group-hover:text-foreground transition-all duration-500">
         {social.label}
        </span>
       </a>
      ))}
     </motion.div>
    </div>
   </div>
  </motion.section>
 );
};

export default ContactSection;
