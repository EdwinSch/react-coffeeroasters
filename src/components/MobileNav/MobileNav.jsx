import { Link } from "react-router-dom";

const MobileNav = ({ setNavIsOpen }) => {
  return (
    <nav className="mobile-nav" aria-label="mobile navigation">
      <Link
        to={"/"}
        onClick={() => setNavIsOpen(false)}
        className="mobile-nav-link"
      >
        home
      </Link>
      <Link
        to={"/about"}
        onClick={() => setNavIsOpen(false)}
        className="mobile-nav-link"
      >
        about us
      </Link>
      <Link
        to={"/plan"}
        onClick={() => setNavIsOpen(false)}
        className="mobile-nav-link"
      >
        create your plan
      </Link>
    </nav>
  );
};

export default MobileNav;
