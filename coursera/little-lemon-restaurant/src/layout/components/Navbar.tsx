import littlelemon_logo from "@/assets/lemon.png";
import { cn } from "@/libs/cn";
import { NavLink } from "react-router-dom";
import { Fragment, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  path: string;
}

const navbarLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/reservation" },
  { name: "Order Online", path: "/order" },
  { name: "Login", path: "/auth/login" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fnIsActive = (isActive: boolean) => {
    return isActive
      ? "btn-accent text-accent-content font-bold"
      : "btn-ghost text-black";
  };

  return (
    <header className="navbar bg-base-100 py-8 shadow-sm">
      <nav className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="flex w-full items-center justify-between md:w-auto">
          <NavLink to={"/"} className={cn("flex items-center gap-4")}>
            <img
              src={littlelemon_logo}
              alt="Little Lemon Logo"
              className="size-12"
            />
            <p className="font-serif text-base font-extrabold tracking-widest uppercase">
              Little Lemon
            </p>
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost transition-transform duration-300 active:scale-90 md:hidden"
          >
            {isOpen ? <X className="size-8" /> : <Menu className="size-8" />}
          </button>
        </div>

        <hgroup
          className={cn(
            "flex w-full flex-col transition-all duration-500 ease-in-out md:mt-0 md:flex md:max-h-full md:w-auto md:flex-row md:gap-2 md:opacity-100",
            isOpen
              ? "visible mt-8 max-h-125 opacity-100"
              : "invisible max-h-0 opacity-0 md:visible",
          )}
        >
          {navbarLinks.map((navItem) => (
            <Fragment key={navItem.path}>
              <NavLink
                to={navItem.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "btn btn-sm mb-2 w-full rounded-none border-transparent shadow-none md:mb-0 md:w-auto",
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
