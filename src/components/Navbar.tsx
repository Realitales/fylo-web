import routes from "../utils/routes";
import logo from "../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="text-neutral-white font-raleway capitalize flex items-center justify-between px-7 py-9 laptop:px-24 tablet:px-16">
      <img
        src={logo}
        alt="fylo-logo"
        className="w-24 tablet:w-28 laptop:w-28 desktop:w-32"
      />
      <ul className="flex gap-5 text-xs tablet:text-sm laptop:text-sm laptop:gap-16 ">
        {routes.map((route) => {
          return (
            <li
              key={route.path}
              className="cursor-pointer  hover:border-b-neutral-white hover:border-b-2 hover:font-bold"
            >
              {route.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
