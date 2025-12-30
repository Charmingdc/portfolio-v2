import { motion } from "motion/react";
import { Github, Twitter } from "lucide-react";
import useMotionPresets from "@/hooks/useMotionPresets";

type Socials = {
  link: string;
  text: string;
  icon: React.ElementType;
};

const socials: Socials[] = [
  { link: "https://x.com/Charmingdc01", text: "Say HI on X", icon: Twitter },
  {
    link: "https://github.com/Charmingdc",
    text: "Connect on Github",
    icon: Github
  }
];

const containerVariants = {
  hide: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const HeroSection = () => {
  const motionPresets = useMotionPresets();
  const itemVariants = motionPresets.fadeInUp;

  return (
    <motion.section
      id="hero-section"
      initial="hide"
      whileInView="show"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full min-h-[75vh] flex flex-col gap-6 pt-[12rem] pb-2 px-8 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(150,160,166,0.06),transparent_50%)] md:min-h-fit md:pb-20"
    >
      <motion.h1
        variants={itemVariants}
        className="tracking-tight text-5xl font-black leading-[1.05] md:text-6xl"
      >
        Adebayo Muis.
      </motion.h1>

      <motion.h2
        variants={itemVariants}
        className="text-soft text-lg flex items-center gap-2 md:text-xl"
      >
        Frontend Software Engineer
        <span className="animate-pulse text-accent -ml-1">|</span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="max-w-[85%] text-muted leading-relaxed -mt-4"
      >
        I build clear, accessible, and production-ready web interfaces - with
        thoughtful backend integration.
      </motion.p>

      <motion.article
        variants={itemVariants}
        className="flex flex-col gap-2 mt-4 text-soft text-sm"
      >
        {socials.map(social => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.text}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              variants={itemVariants}
              className="w-fit flex items-center gap-2 py-[0.3rem] border-b border-soft transition-all duration-200 hover:border-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} /> {social.text}
            </motion.a>
          );
        })}
      </motion.article>
    </motion.section>
  );
};

export default HeroSection;
