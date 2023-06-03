import routes from "../utils/routes";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="text-neutral-white font-raleway capitalize flex items-center justify-between px-7 py-9">
      <img src={logo} alt="fylo-logo" className="w-24 tablet:w-[20vh]" />
      <ul className="flex gap-5 text-xs ">
        {routes.map((route) => {
          return (
            <li key={route.path} className="cursor-pointer">
              {route.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
