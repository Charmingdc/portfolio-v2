import { motion } from "motion/react";
import ContributionGraph from "@/components/main-page/ContributionGraph";
import useMotionPresets from "@/hooks/useMotionPresets";

const AboutSection = () => {
  const motionPresets = useMotionPresets();
  const containerVariants = motionPresets.containerAnim;
  const itemVariants = motionPresets.fadeInLeft;

  return (
    <motion.section
      id="project-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
      variants={itemVariants}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex flex-col gap-3 pt-10 px-8 -mt-[8rem]"
    >
      <span className="section-tag"> About Me </span>
      <h2 className="section-heading"> • A Little About Me </h2>

      <motion.article
        initial="hide"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col gap-4 mt-2"
      >
        <motion.p variants={itemVariants}>
          Frontend software engineer building clear and reliable web products.
          I’ve worked on real-world projects ranging from small tools to full
          product interfaces, often integrating backend services to deliver
          complete, production-ready features.
        </motion.p>

        <motion.p variants={itemVariants}>
          I specialise in React, TypeScript, and TailwindCss, and regularly work
          with Supabase, Firebase, and serverless functions, with a strong focus
          on accessibility, performance, and long-term maintainability.
        </motion.p>
      </motion.article>

      <ContributionGraph />
    </motion.section>
  );
};

export default AboutSection;
