import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <ul
      onClick={() => navigate("/")}
      className="w-screen fixed top-0 flex items-center justify-between
      bg-[rgba(0,0,0,0.02)] backdrop-blur-md py-3 px-5 font-light z-20"
    >
      <li className="flex items-center gap-2">
        <h1 className="text-md font-mono ml-[1rem]">{`• cout << "Charmingdc";`}</h1>
      </li>
    </ul>
  );
};

export default Navbar;
