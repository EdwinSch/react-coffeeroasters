import Navigation from "../Nav/Navigation";
import darklogo from "../../assets/dark-logo.svg";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = ({ navIsOpen, setNavIsOpen }) => {
  return (
    <header>
      <img src={darklogo} alt="logo" className="logo-img" />
      <div className="nav-wrapper">
        <Navigation variant={"dark"} aria-label="footer navigation" />
      </div>
      <button
        className="mobile-nav-btn"
        onClick={() => setNavIsOpen(!navIsOpen)}
        type="button"
      >
        {navIsOpen ? <IoClose /> : <IoMenu />}
      </button>
    </header>
  );
};

export default Header;
