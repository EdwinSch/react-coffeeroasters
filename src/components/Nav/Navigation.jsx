import { Link } from "react-router-dom";

const Navigation = ({ variant, label }) => {
  return (
    <nav aria-label={label}>
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
