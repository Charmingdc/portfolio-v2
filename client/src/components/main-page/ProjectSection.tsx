import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import useProjects from "@/hooks/useProjects";
import useMotionPresets from "@/hooks/useMotionPresets";

const ProjectSection = () => {
  const { projects } = useProjects();
  const motionPresets = useMotionPresets();
  const cardVariants = motionPresets.fadeInLeft;

  return (
    <motion.section
      id="project-section"
      className="w-full flex flex-col gap-3 px-6"
      initial={{ opacity: 0, y: "1rem" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="section-tag">Portfolio</span>

      <h2 className="section-heading">• Some Things I've Built</h2>

      <p className="text-muted -mt-2 mb-4 ml-2">
        Blending mixes of the latest technologies to create innovative and
        problem-solving projects.
      </p>

      <motion.article className="w-full flex items-center flex-wrap gap-6 mt-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial="hide"
            whileInView="show"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full h-auto bg-card flex flex-col gap-4 p-7 border
            border-border rounded-lg"
          >
            <h3 className="text-2xl font-black opacity-10">
              .{String(idx + 1).padStart(2, "0")}
            </h3>

            <h3 className="text-2xl font-black">{project.name}</h3>

            <div className="font-bold">
              {project.technologies.map((technology, index) => (
                <span key={technology}>
                  {technology}
                  {index !== project.technologies.length - 1 && " + "}
                </span>
              ))}
            </div>

            <p className="text-muted">{project.description}</p>

            <a
              href={`/projects/${project.name}`}
              target="_blank"
              className="flex items-center gap-2 text-accent"
            >
              View Project <ExternalLink size={16} />
            </a>
          </motion.div>
        ))}

        <div className="w-full flex items-center justify-center -mt-1">
          <Link
            to="/projects"
            className="flex items-center justify-center gap-2 text-accent"
          >
            View all projects <ExternalLink size={16} />
          </Link>
        </div>
      </motion.article>
    </motion.section>
  );
};

export default ProjectSection;
