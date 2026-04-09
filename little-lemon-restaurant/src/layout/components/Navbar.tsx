import littlelemon_logo from "@/assets/Logo.svg";
import { cn } from "@/libs/cn";
import { NavLink } from "react-router-dom";
import { Fragment } from "react";

interface NavLink {
  name: string;
  path: string;
}
const navbarLinks: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Menu",
    path: "/menu",
  },
  {
    name: "Reservations",
    path: "/reservation",
  },
  {
    name: "Order Online",
    path: "/order-online",
  },
  {
    name: "Login",
    path: "/login",
  },
];

export const Navbar = () => {
  const fnIsActive = (isActive: boolean) => {
    return isActive
      ? "btn-warning text-warning-content font-bold"
      : "btn-ghost";
  };

  return (
    <header className="navbar bg-base-100 py-8 shadow-sm">
      <nav className="container mx-auto flex items-center justify-between">
        <NavLink to={"/"}>
          <img src={littlelemon_logo} alt="Little Lemon Logo" />
        </NavLink>

        <hgroup className="flex gap-2">
          {navbarLinks.map((navItem) => (
            <Fragment key={navItem.path}>
              <NavLink
                to={navItem.path}
                className={({ isActive }) =>
                  cn(
                    "btn btn-sm rounded-none border-transparent shadow-none",
                    fnIsActive(isActive),
                  )
                }
              >
                {navItem.name}
              </NavLink>
            </Fragment>
          ))}
        </hgroup>
      </nav>
    </header>
  );
};

export default Navbar;
