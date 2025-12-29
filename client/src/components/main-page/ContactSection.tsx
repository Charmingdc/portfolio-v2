import { motion } from "motion/react";
import useMotionPresets from "@/hooks/useMotionPresets";

const ContactSection = () => {
  const motionPresets = useMotionPresets();
  const itemsVariant = motionPresets.fadeInUp;

  return (
    <motion.section
      initial="hide"
      whileInView="show"
      variants={itemsVariant}
      id="contact-section"
      className="w-full flex flex-col gap-3 px-8"
    >
      <span className="section-tag"> Contact me </span>

      <h2 className="section-heading"> • Get In Touch </h2>

      <p className="text-muted -mt-2">
        Interested in working together? We should queue up a time to chat. I’ll
        buy the coffee :)
      </p>
    </motion.section>
  );
};

export default ContactSection;
