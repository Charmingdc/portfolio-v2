import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import ProjectBox from "@/components/shared/ProjectBox";
import useProjects from "@/hooks/useProjects";

const ProjectSection = () => {
  const { projects } = useProjects();

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
          <ProjectBox key={idx} project={project} idx={idx} />
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
