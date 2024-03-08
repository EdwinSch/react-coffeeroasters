import Hero from "../components/Hero/Hero";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Hero
      variant={"hero-lg"}
      heading={"heading-lg"}
      txtContent="Start your mornings with the world's best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule."
      headingContent="Great coffee made simple"
    >
      {/* Passing as component child */}
      <Link to={"/plan"} className="btn">
        Create your plan
      </Link>
    </Hero>
  );
};

export default Home;
