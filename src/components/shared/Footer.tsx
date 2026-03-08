import { useState, useEffect } from "react";
import { romanize } from "@charmingdc/romanify";

const Footer = () => {
 const [time, setTime] = useState(new Date());

 useEffect(() => {
  const timer = setInterval(() => {
   setTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
 }, []);

 return (
  <footer className="w-full py-16 px-6 md:px-24 bg-background">
   <div className="max-w-5xl mx-auto">
    <div className="pt-10 border-t border-border/40 flex flex-col md:flex-row justify-between items-start gap-12">
     <div className="space-y-3">
      <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest block">
       stack
      </span>
      <p className="text-xs font-light text-foreground/60 lowercase tracking-tight">
       react.js <span className="text-border/60 mx-2">/</span> tailwindcss{" "}
       <span className="text-border/60 mx-2">/</span> motion
      </p>
     </div>

     <div className="space-y-3 md:text-right">
      <span className="text-[10px] font-medium text-accent/60 lowercase tracking-widest block">
       legal
      </span>
      <p className="text-xs font-light text-foreground/60 lowercase tracking-tight">
       © {romanize(time.getFullYear())} adebayo muis
      </p>
     </div>
    </div>

    <div className="mt-12">
     <span className="text-[8px] text-muted/20 lowercase tracking-[0.4em] block">
      lagos, ng —{" "}
      {time.toLocaleTimeString([], {
       hour: "2-digit",
       minute: "2-digit",
       second: "2-digit",
       hour12: false
      })}
     </span>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
