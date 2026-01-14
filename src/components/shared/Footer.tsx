import { romanize } from "@charmingdc/romanify";

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full flex flex-col items-center gap-1 mt-[6rem] mb-2"
    >
      <p className="font-light"> Built with: </p>

      <h3 className="text-md tracking-tighter font-montserrat font-extrabold -mt-1">
        React.Js • TailwindCss
      </h3>

      <p className="font-light text-sm mt-1 mb-4">
        © {romanize(new Date().getFullYear())} Adebayo Muis
      </p>
    </section>
  );
};

export default Footer;
