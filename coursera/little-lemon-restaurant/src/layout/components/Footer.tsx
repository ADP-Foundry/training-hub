import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/libs/cn";

interface NavLinkItem {
  name: string;
  path: string;
}

const navbarLinks: NavLinkItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Reservations", path: "/reservation" },
  { name: "Order Online", path: "/order-online" },
];

export const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="flex flex-wrap justify-center gap-4">
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
          Copyright © {getYear} - All right reserved by Little Lemon Restaurant
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
