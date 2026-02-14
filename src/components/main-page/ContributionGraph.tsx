import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUp01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { GitHubCalendar } from "react-github-calendar";

import useMotionPresets from "@/hooks/useMotionPresets";

const ContributionGraph = () => {
  const { fadeInLeft, fadeIn } = useMotionPresets();

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
  }, []);

  return (
    <motion.article
      aria-label="my contribution graph"
      initial="hide"
      whileInView="show"
      variants={fadeInLeft}
      viewport={{ once: true }}
      className="relative w-full flex flex-col items-center gap-4 p-2 border
      border-border rounded-md mt-4"
    >
      <div className="w-full flex items-center justify-between text-soft font-extrabold pt-0 pb-2 border-b border-border">
        <span>My Contribution Graph</span>

        <button
          className="w-20 flex items-center justify-center gap-1"
          onClick={() => setIsDropDownOpen(prev => !prev)}
        >
          {selectedYear}{" "}
          {isDropDownOpen ? (
            <HugeiconsIcon icon={ArrowUp01Icon} />
          ) : (
            <HugeiconsIcon icon={ArrowDown01Icon} />
          )}
        </button>
      </div>

      {isDropDownOpen && (
        <motion.div
          initial="hide"
          whileInView="show"
          variants={fadeIn}
          className="absolute right-4 top-10 w-fit flex flex-col bg-card gap-2 py-2 px-4"
        >
          {years
            .sort((a, b) => b - a)
            .map(year => (
              <motion.button
                key={year}
                onClick={() => {
                  setIsDropDownOpen(false);
                  setSelectedYear(year);
                }}
                className="border-b border-border"
              >
                {year}
              </motion.button>
            ))}
        </motion.div>
      )}

      <div className="w-full" onClick={() => setIsDropDownOpen(false)}>
        <GitHubCalendar
          username="Charmingdc"
          year={selectedYear}
          errorMessage="Uhhh, seems like my contribution graph fails to load"
        />
      </div>
    </motion.article>
  );
};

export default ContributionGraph;
