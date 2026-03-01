import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { GitHubCalendar } from "react-github-calendar";
import useMotionPresets from "@/hooks/useMotionPresets";

const ContributionGraph = () => {
 const { fadeIn } = useMotionPresets();
 const currentYear = new Date().getFullYear();
 const [selectedYear, setSelectedYear] = useState<number>(currentYear);
 const [years, setYears] = useState<number[]>([]);
 const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

 useEffect(() => {
  const firstYear = 2024;
  const yearsArray = [];
  for (let year = firstYear; year <= currentYear; year++) {
   yearsArray.push(year);
  }
  setYears(yearsArray);
 }, [currentYear]);

 return (
  <div className="relative w-full flex flex-col gap-6">
   <div className="w-full flex items-center justify-between">
    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted">
     Github Engine Activity
    </span>

    <div className="relative">
     <button
      onClick={() => setIsDropDownOpen(prev => !prev)}
      className="flex items-center gap-2 px-4 py-1.5 bg-background border border-border rounded-full text-[11px] font-bold uppercase tracking-wider hover:border-foreground transition-colors"
     >
      {selectedYear}
      <HugeiconsIcon
       icon={isDropDownOpen ? ArrowUp01Icon : ArrowDown01Icon}
       size={12}
       className="text-soft"
      />
     </button>

     <AnimatePresence>
      {isDropDownOpen && (
       <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 4 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute right-0 top-full z-50 min-w-[100px] bg-card border border-border rounded-2xl p-2 shadow-2xl backdrop-blur-md"
       >
        {years
         .sort((a, b) => b - a)
         .map(year => (
          <button
           key={year}
           onClick={() => {
            setSelectedYear(year);
            setIsDropDownOpen(false);
           }}
           className="w-full text-left px-4 py-2 text-[11px] font-bold uppercase rounded-xl hover:bg-foreground hover:text-background transition-all"
          >
           {year}
          </button>
         ))}
       </motion.div>
      )}
     </AnimatePresence>
    </div>
   </div>

   <motion.div
    variants={fadeIn}
    className="w-full overflow-hidden cursor-crosshair"
    onClick={() => setIsDropDownOpen(false)}
   >
    <GitHubCalendar
     username="Charmingdc"
     year={selectedYear}
     fontSize={12}
     blockSize={12}
     blockMargin={4}
     errorMessage="Data sync failed."
    />
   </motion.div>
  </div>
 );
};

export default ContributionGraph;
