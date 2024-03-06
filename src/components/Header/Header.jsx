import Logo from "../Logo";
import Navigation from "../Nav/Navigation";

const Header = () => {
  return (
    <header>
      <Logo variant={"#333D4B"} />
      <Navigation variant={"dark"} />
    </header>
  );
};

export default Header;
