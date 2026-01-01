import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ul
      onClick={() => navigate("/")}
      className="w-screen fixed top-0 flex items-center justify-between bg-[rgba(0,0,0,0.02)] backdrop-blur-md py-3 px-5 font-light z-50"
    >
      <li className="flex items-center gap-2">
        <img
          src="/illustrations/my-dp.png"
          alt="Adebayo Muis's Social Avatar"
          className="w-9 h-9 bg-card border border-border rounded-full"
        />

        <h1 className="text-lg font-normal"> Charmingdc </h1>
      </li>
    </ul>
  );
};

export default Navbar;
