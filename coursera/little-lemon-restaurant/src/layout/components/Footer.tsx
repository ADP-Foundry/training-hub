import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import { cn } from "@/libs/cn";

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
];
export const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        {navbarLinks.map((navItem, ids) => (
          <Fragment key={navItem.path}>
            <NavLink to={navItem.path} className={cn("btn btn-ghost btn-xs")}>
              {navItem.name}
            </NavLink>
            {ids !== navbarLinks.length - 1 && (
              <div className="divider divider-horizontal mx-0 h-4 place-self-center" />
            )}
          </Fragment>
        ))}
      </nav>

      <aside>
        <p className="font-semibold">
          Copyright © {new Date().getFullYear()} - All right reserved by Little
          Lemon Restaurant
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
