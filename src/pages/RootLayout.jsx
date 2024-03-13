import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MobileNav from "../components/MobileNav/MobileNav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const RootLayout = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <Header navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      {navIsOpen && (
        <div className="nav-overlay">
          <MobileNav setNavIsOpen={setNavIsOpen} />
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
