const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full flex flex-col items-center gap-1 mt-[6rem]"
    >
      <p className="font-light"> Built with: </p>

      <h3 className="text-lg tracking-tighter font-montserrat font-extrabold -mt-1">
        React.Js • TailwindCss
      </h3>

      <p className="font-light text-sm mt-1 mb-4">
        Copyright © {new Date().getFullYear()} Adebayo Muis
      </p>
    </section>
  );
};

export default Footer;
