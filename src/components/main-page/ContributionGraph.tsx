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
  <div className="relative w-full flex flex-col gap-8">
   <div className="w-full flex items-center justify-between">
    <span className="text-[11px] font-medium lowercase text-muted/40 tracking-tight">
     github activity record
    </span>

    <div className="relative">
     <button
      onClick={() => setIsDropDownOpen(prev => !prev)}
      className="flex items-center gap-2 text-sm font-medium lowercase text-soft hover:text-accent transition-colors"
     >
      {selectedYear}
      <HugeiconsIcon
       icon={isDropDownOpen ? ArrowUp01Icon : ArrowDown01Icon}
       size={12}
       className="opacity-40"
      />
     </button>

     <AnimatePresence>
      {isDropDownOpen && (
       <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 8 }}
        exit={{ opacity: 0, y: -5 }}
        className="absolute right-0 top-full z-50 min-w-[80px] bg-background border border-border/50 rounded-xl p-1 shadow-sm backdrop-blur-xl"
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
           className="w-full text-left px-3 py-1.5 text-xs lowercase rounded-lg hover:bg-accent/10 hover:text-accent transition-all"
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
    className="w-full overflow-x-auto no-scrollbar cursor-crosshair"
    onClick={() => setIsDropDownOpen(false)}
   >
    <div className="min-w-[700px] md:min-w-full">
     <GitHubCalendar
      username="Charmingdc"
      year={selectedYear}
      fontSize={12}
      blockSize={11}
      blockMargin={4}
      errorMessage="data sync failed."
     />
    </div>
   </motion.div>
  </div>
 );
};

export default ContributionGraph;
