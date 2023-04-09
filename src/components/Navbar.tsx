import navigations from "../utils/navigations";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="text-neutral-white font-raleway capitalize flex items-center justify-between px-7 py-9">
      <img src={logo} alt="fylo-logo" className="w-24" />
      <ul className="flex gap-7 text-sm ">
        {navigations.map((navigation) => {
          return <li key={navigation.path}>{navigation.name}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
