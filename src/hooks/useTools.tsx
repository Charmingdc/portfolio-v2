interface ToolsProps {
  iconUrl: string;
  altText: string;
}

const useTools = () => {
  const tools: ToolsProps[] = [
    { iconUrl: "/icons/icon-html.svg", altText: "Html" },
    { iconUrl: "/icons/icon-css.svg", altText: "Css" },
    { iconUrl: "/icons/icon-js.png", altText: "JavaScript" },
    { iconUrl: "/icons/icon-typescript.png", altText: "Typescript" },
    { iconUrl: "/icons/jquery.jpeg", altText: "JQuery" },
    { iconUrl: "/icons/icon-tailwind.png", altText: "Tailwindcss" },
    { iconUrl: "/icons/icon-react.png", altText: "React.Js" },
    { iconUrl: "icons/icon-nextjs.png", altText: "Next.Js" },
    { iconUrl: "/icons/icon-supabase.png", altText: "Supabase" },
    { iconUrl: "/icons/icon-firebase.png", altText: "Firebase" },
    { iconUrl: "/icons/framer.png", altText: "Framer" },
    { iconUrl: "/icons/icon-github.png", altText: "Github" },
    { iconUrl: "/icons/seo.png", altText: "Seo" },
    { iconUrl: "/icons/etc.png", altText: "And others" }
  ];

  return tools;
};

export default useTools;
