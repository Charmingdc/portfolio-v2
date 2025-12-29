import { motion } from "motion/react";
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
          I’m Adebayo Muis, a web developer focused on building clear, usable,
          and reliable web products. I care about writing code that makes sense,
          interfaces that feel intuitive, and systems that hold up as products
          grow.
        </motion.p>

        <motion.p variants={itemVariants}>
          I turn ideas and requirements into well-structured frontends that are
          responsive, accessible, and easy to maintain. I pay close attention to
          user flow, performance, and code quality so teams can move fast
          without accumulating unnecessary complexity.
        </motion.p>

        <motion.p variants={itemVariants}>
          I work with intention, asking the right questions, communicating
          clearly, and delivering work that’s practical and dependable. If
          you’re looking for a developer who values clarity, execution, and
          long-term maintainability, I’d be a strong addition to your team.
        </motion.p>
      </motion.article>
    </motion.section>
  );
};

export default AboutSection;
