import { motion } from "motion/react";
import ContributionGraph from "@/components/main-page/ContributionGraph";
import useMotionPresets from "@/hooks/useMotionPresets";

const AboutSection = () => {
  const motionPresets = useMotionPresets();
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
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex flex-col gap-3 pt-10 px-8 -mt-[8rem]"
    >
      <span className="section-tag"> About Me </span>
      <h2 className="section-heading"> • A Little About Me </h2>

      <motion.article className="w-full flex flex-col gap-4 mt-2">
        <motion.p
          initial="hide"
          whileInView="show"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          I like to build clear, reliable, and scalable web products with
          thoughtful user experiences, focusing on performance, accessibility,
          and long-term maintainability.
        </motion.p>

        <motion.p
          initial="hide"
          whileInView="show"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          I’m Adebayo Muis, a Nigeria-based frontend software engineer with 3+
          years of experience building real-world web applications, from small
          tools to full product interfaces, often integrating backend services
          to deliver complete, production-ready solutions.
        </motion.p>

        <motion.p
          initial="hide"
          whileInView="show"
          variants={itemVariants}
          viewport={{ once: true, amount: 0.2 }}
        >
          A self-taught developer, I specialise in React, TypeScript, and
          Tailwind CSS, and regularly work with Supabase, Firebase, and
          serverless functions. I take pride in writing clean, well-structured
          code and building interfaces that scale reliably as products and teams
          grow.
        </motion.p>
      </motion.article>

      <ContributionGraph />
    </motion.section>
  );
};

export default AboutSection;
