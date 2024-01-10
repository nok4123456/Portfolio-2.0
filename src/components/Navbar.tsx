import { NavLink } from "react-router-dom";

type NavOptionsProps = {
  toName: string;
  toPath: string;
};

type isActiveClassNameProps = {
  isActive: boolean;
};

const Navbar = () => {
  const isActiveClassName = ({ isActive }: isActiveClassNameProps) =>
    isActive ? "text-blue-500 " : "text-black ";
  const NavOptions = ({ toName, toPath }: NavOptionsProps) => {
    return (
      <NavLink
        to={toPath}
        className={({ isActive }) =>
          isActiveClassName({ isActive }) + "text-xl font-bold"
        }
      >
        {toName}
      </NavLink>
    );
  };
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-blue-200 opacity-70 items-center justify-center flex font-bold text-white shadow-md"
      >
        <p className="blue-gradient_text">KC</p>
      </NavLink>
      <NavOptions toName="Home" toPath="/" />
      <NavOptions toName="About" toPath="/about" />
      <NavOptions toName="Project" toPath="/project" />
      <NavOptions toName="Contact" toPath="/contact" />
    </header>
  );
};

export default Navbar;
