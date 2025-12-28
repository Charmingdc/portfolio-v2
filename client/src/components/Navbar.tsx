const Navbar = () => {
  return (
    <ul className="w-screen fixed top-0 flex items-center justify-between bg-black/10 backdrop-blur-lg py-4 px-6 font-light z-50">
      <li className="flex items-center gap-2">
        <img
          src="/illustrations/my-dp.png"
          alt="Adebayo Muis's Social Avatar"
          className="w-9 h-9 border border-border rounded-full"
        />

        <h1 className="text-xl font-semibold"> Charmingdc </h1>
      </li>
    </ul>
  );
};

export default Navbar;
