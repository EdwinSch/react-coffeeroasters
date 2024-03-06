import { Link } from "react-router-dom";

const Navigation = ({ variant }) => {
  return (
    <nav>
      <Link to={"/"} className={`nav-link ${variant}`}>
        home
      </Link>
      <Link to={"/about"} className={`nav-link ${variant}`}>
        about
      </Link>
      <Link to={"/plan"} className={`nav-link ${variant}`}>
        create your plan
      </Link>
    </nav>
  );
};

export default Navigation;
