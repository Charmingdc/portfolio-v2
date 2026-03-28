import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

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
   className="fixed top-0 left-0 w-full z-50 px-6 md:px-24 py-4 transition-colors duration-300"
  >
   <div className="max-w-6xl mx-auto flex justify-between items-center">
    <motion.div
     initial={{ opacity: 0, y: -10 }}
     animate={{ opacity: 1, y: 0 }}
     className="cursor-pointer group"
     onClick={() => navigate("/")}
    >
     <div className="flex flex-col">
      <span className="text-[10px] font-medium text-accent/60 lowercase tracking-[0.2em] mb-1">
       frontend engineer
      </span>
      <h1 className="text-sm font-light text-foreground/80 lowercase tracking-tighter transition-colors group-hover:text-accent">
       adebayo muis <span className="text-muted/20 ml-1">/</span>{" "}
       <span className="text-muted/40 font-mono text-[10px]">
        cout &lt;&lt; "charmingdc";
       </span>
      </h1>
     </div>
    </motion.div>

    <motion.div
     initial={{ opacity: 0, y: -10 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay: 0.1 }}
     className="hidden md:flex items-center gap-4"
    >
     <div className="flex items-center gap-2 px-4 py-2 bg-card/40 backdrop-blur-xl border border-border/40 rounded-full">
      <span className="relative flex h-1.5 w-1.5">
       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
       <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
      </span>
      <span className="text-[10px] font-medium lowercase text-foreground/60 tracking-tight">
       online
      </span>
     </div>
    </motion.div>
   </div>
  </motion.nav>
 );
};

export default Navbar;
