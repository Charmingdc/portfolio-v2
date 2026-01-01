import { Twitter, Linkedin, Mail, Github } from "lucide-react";
import { motion } from "motion/react";
import useMotionPresets from "@/hooks/useMotionPresets";

type Socials = {
  link: string;
  label: string;
  icon: React.ElementType;
};

const socials: Socials[] = [
  {
    link: "https://x.com/Charmingdc01",
    label: "Adebayo Muis X ( Formerly Twitter ) profile link",
    icon: Twitter
  },
  {
    link: "https://linkedin.com/in/adebayomuis",
    label: "Adebayo Muis Linkedin profile link",
    icon: Linkedin
  },
  {
    link: "mailto:charmingdc002@gmail.com",
    label: "Contact email address",
    icon: Mail
  },
  {
    link: "https://github.com/Charmingdc",
    label: "Adebayo Muis github accountlink",
    icon: Github
  }
];

const ContactSection = () => {
  const motionPresets = useMotionPresets();
  const containerVariants = motionPresets.containerAnim;
  const sectionVariant = motionPresets.fadeInUp;
  const itemsVariant = motionPresets.fadeIn;

  return (
    <motion.section
      initial="hide"
      whileInView="show"
      variants={sectionVariant}
      viewport={{ once: true, amount: 0.2 }}
      id="contact-section"
      className="w-full flex flex-col gap-3 px-8"
    >
      <span className="section-tag"> Contact me </span>

      <h2 className="section-heading"> • Get In Touch </h2>

      <p className="text-muted -mt-2">
        Interested in working together? We should queue up a time to chat. I’ll
        buy the coffee :)
      </p>

      <motion.article
        aria-label="contact links"
        initial="hide"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex items-center gap-4 mt-4"
      >
        {socials.map(social => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.link}
              aria-label={social.label}
              href={social.link}
              target="_blank"
              variants={itemsVariant}
              whileHover={{ scale: 0.5 }}
              className="flex items-center justify-center p-4 border border-border rounded-xl transition-all duration-200 active:text-accent hover:text-accent"
            >
              <Icon />
            </motion.a>
          );
        })}
      </motion.article>
    </motion.section>
  );
};

export default ContactSection;
