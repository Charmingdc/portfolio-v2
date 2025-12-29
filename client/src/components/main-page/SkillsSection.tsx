import { motion } from "motion/react";
import useMotionPresets from "@/hooks/useMotionPresets";
import useTools from "@/hooks/useTools";

const SkillsSection = () => {
  const tools = useTools();
  const motionPresets = useMotionPresets();
  const containerVariants = motionPresets.containerAnim;
  const itemVariants = motionPresets.fadeIn;

  return (
    <motion.section
      initial={{ opacity: 0, y: "-1rem" }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeInOut" }
      }}
      viewport={{ once: true, amount: 0.2 }}
      id="project-section"
      className="w-full flex flex-col gap-3 px-8"
    >
      <span className="section-tag"> Expertise </span>

      <h2 className="section-heading"> • Some Tools I've Worked With </h2>

      <p className="text-muted -mt-2 mb-4 ml-2">
        Technologies and tools I work with to turn ideas into functional,
        scalable solutions.
      </p>

      <motion.article
        initial="hide"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-wrap gap-3 mt-5"
      >
        {tools.map(tool => (
          <motion.div
            key={tool.altText}
            variants={itemVariants}
            className="flex items-center p-4 gap-2 border border-border rounded-lg"
          >
            <img
              src={tool.iconUrl}
              alt={tool.altText}
              className="w-6 h-6 rounded-sm"
            />
            <span> {tool.altText}</span>
          </motion.div>
        ))}
      </motion.article>
    </motion.section>
  );
};

export default SkillsSection;
