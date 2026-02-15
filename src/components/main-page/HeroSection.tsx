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
  {
    link: "https://medium.com/@adebayomuis",
    text: "Read my Articles"
  },
  {
    link: "https://github.com/Charmingdc",
    text: "Connect on Github"
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
      className="relative w-full min-h-[75vh] flex flex-col gap-6 pt-[6rem] pb-24 px-8 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(140,150,156,0.06),transparent_50%)] md:min-h-fit md:pb-20"
    >
      <div className="relative w-48 h-48 flex items-center">
        <motion.img
          variants={itemVariants}
          src="/illustrations/my-x-dp.jpeg"
          className="w-36 h-36 object-cover bg-background border-4 border-border rounded-full"
          alt="Charmingdc Avatar"
        ></motion.img>

        <span className="absolute right-[32%] bottom-[20%] w-4 h-4 bg-green-400 rounded-full shadow-[0_0_8px_2px_rgba(34,197,94,0.7)] animate-pulse"></span>
      </div>

      <motion.h1
        variants={itemVariants}
        className="w-[80%] tracking-tight text-2xl font-black leading-[1.05] md:text-3xl"
      >
        Hi 👋🏼,{" "}
        <span className="underline underline-offset-2 decoration-1 decoration-soft decoration-wavy">
          I'm Adebayo Muis.
        </span>
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
        className="max-w-[85%] text-muted leading-relaxed -mt-5"
      >
        I build clear, accessible, and production-ready web interfaces - with
        thoughtful backend integration.
      </motion.p>

      <motion.article
        variants={itemVariants}
        className="flex flex-wrap gap-y-2 gap-x-3 mt-4 text-soft text-sm"
      >
        {socials.map(social => (
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
            {social.text} <HugeiconsIcon icon={LinkSquare01Icon} size={17} />
          </motion.a>
        ))}
      </motion.article>
    </motion.section>
  );
};

export default HeroSection;
