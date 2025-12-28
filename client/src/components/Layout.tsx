import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Layout = () => {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-accent focus:text-foreground focus:px-4 focus:py-2 focus:rounded-md focus:z-50 font-semibold transition-all"
      >
        Skip to main content
      </a>

      <header>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main
        id="main"
        className="w-screen flex flex-col items-center gap-[8.5rem]"
      >
        <Outlet />
      </main>

      <footer>{/* Footer content */}</footer>
    </>
  );
};

export default Layout;
