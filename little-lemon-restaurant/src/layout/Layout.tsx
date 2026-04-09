import { Outlet } from "react-router-dom";

import { cn } from "@/libs/cn";

import { Navbar, Footer } from "./components";

const Layout = () => {
  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <Navbar />

      <article className={cn("flex flex-1 flex-col overflow-y-auto")}>
        <section className="flex-1">
          <Outlet />
        </section>

        <Footer />
      </article>
    </main>
  );
};

export default Layout;
