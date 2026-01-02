import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen has-grain">
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
        className="w-screen flex flex-col items-center gap-[8rem]"
      >
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
