import Logo from "../Logo";
import Navigation from "../Nav/Navigation";

import { FaInstagram, FaXTwitter, FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <Logo variant={"#ffffff"} />
      <Navigation variant={"light"} />
      {/* Social Media Links */}
      <div className="socials-wrapper">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.x.com/" target="_blank" rel="noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://www.x.com/" target="_blank" rel="noreferrer">
          <FaSquareFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
