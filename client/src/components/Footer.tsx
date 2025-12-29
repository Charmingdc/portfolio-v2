const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full flex flex-col items-center gap-1 mt-[8rem]"
    >
      <p className="font-light"> Built with: </p>

      <h4 className="text-lg tracking-tighter font-montserrat font-black -mt-1">
        React.Js • TailwindCss
      </h4>

      <p className="font-light my-3">
        Copyright © {new Date().getFullYear()} Adebayo Muis
      </p>
    </section>
  );
};

export default Footer;
