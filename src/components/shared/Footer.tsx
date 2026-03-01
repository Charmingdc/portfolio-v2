import { romanize } from "@charmingdc/romanify";

const Footer = () => {
 return (
  <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 bg-background">
   <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="flex flex-col items-center md:items-start gap-1">
     <p className="text-[10px] font-bold uppercase tracking-widest text-muted">
      Built with
     </p>
     <p className="text-xs font-mono font-bold text-foreground">
      React.Js <span className="text-muted mx-1">\\</span> TailwindCss
     </p>
    </div>

    <div className="flex flex-col items-center md:items-end gap-1">
     <p className="text-[10px] font-bold uppercase tracking-widest text-muted">
      Copyright
     </p>
     <p className="text-xs font-mono font-bold text-foreground uppercase tracking-tighter">
      © {romanize(new Date().getFullYear())} Adebayo Muis
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
