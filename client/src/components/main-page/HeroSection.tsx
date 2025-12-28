import { Github, Twitter, Linkedin } from "lucide-react";

type Socials = {
  link: string;
  text: string;
  icon: React.ReactNode;
};

const socials: Socials[] = [
  { link: "https://github.com/Charmingdc", text: "Github", icon: Github },
  { link: "https://x.com/Charmingdc01", text: "Say HI on X", icon: Twitter },
  {
    link: "https://linkedin.com/in/adebayo-muis",
    text: "Linkedin",
    icon: Linkedin
  }
];

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[70vh] flex flex-col gap-6 pt-36 px-6 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(150,160,166,0.06),transparent_50%)]"
    >
      <h1 className="tracking-tight text-6xl sm:text-7xl font-extrabold leading-[1.05]">
        Adebayo Muis<span className="text-accent">.</span>
      </h1>

      <h2 className="text-soft text-lg flex items-center gap-2">
        SWE — Frontend Engineer
        <span className="animate-pulse text-accent">|</span>
      </h2>

      <p className="text-muted max-w-md leading-relaxed -mt-4">
        I build pixel-perfect, accessible and human-centered web experiences.
      </p>

      <article className="flex items-center gap-4 mt-4 text-soft text-sm">
        {socials.map(social => {
          const Icon = social.icon;

          return (
            <a
              key={social.text}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 py-[0.3rem] border-b border-soft"
            >
              <Icon size={18}/> {social.text}
            </a>
          );
        })}
      </article>
    </section>
  );
};

export default HeroSection;
