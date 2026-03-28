import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

const links = [
 { path: "#about-section", label: "about" },
 { path: "#project-section", label: "projects" },
 { path: "#skills-section", label: "skills" },
 { path: "#contact-section", label: "contact" }
];

const Navbar = () => {
 const navigate = useNavigate();
 const { scrollY } = useScroll();

 const backgroundColor = useTransform(
  scrollY,
  [0, 100],
  ["rgb(var(--background) / 0)", "rgb(var(--background) / 0.4)"]
 );

 const backdropBlur = useTransform(
  scrollY,
  [0, 100],
  ["blur(0px)", "blur(12px)"]
 );

 const borderOpacity = useTransform(
  scrollY,
  [0, 100],
  ["rgb(var(--foreground) / 0)", "rgb(var(--foreground) / 0.05)"]
 );

 return (
  <motion.nav
   style={{
    backgroundColor,
    backdropFilter: backdropBlur,
    borderBottom: `1px solid`,
    borderBottomColor: borderOpacity
   }}
   className="fixed top-0 left-0 w-full z-50 px-6 border-b border-border md:px-24 py-4 transition-colors duration-300"
  >
   <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="w-full flex items-center justify-between"
   >
    <div className="w-20 h-6" onClick={() => navigate("/")}></div>

    <div className="flex items-center justify-end gap-3">
     {links.map(link => (
      <a
       href={link.path}
       className="text-[13px] text-muted/40 lowercase transition-colors duration-200 hover:text-accent hover:uppercase"
      >
       {link.label}
      </a>
     ))}
    </div>
   </motion.div>
  </motion.nav>
 );
};

export default Navbar;
