import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
 return (
  <div className="relative min-h-screen">
   <div className="min-screen inset-0 bg-overlay/60 pointer-events-auto z-30">
    <a
     href="#main"
     className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-accent focus:text-foreground focus:px-4 focus:py-2 focus:rounded-md focus:z-50 font-semibold transition-all"
    >
     Skip to main content
    </a>

    {/*
       <header>
          <nav>
            <Navbar />
          </nav>
        </header>
   */}

    <main
     id="main"
     className="w-screen flex flex-col items-center bg-background"
    >
     <Outlet />
    </main>

    <footer>
     <Footer />
    </footer>
   </div>
  </div>
 );
};

export default Layout;
