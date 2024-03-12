import Hero from "../components/Hero/Hero";
import Collection from "../components/Collection/Collection";
import Usp from "../components/Usp/Usp";
import Instructions from "../components/Instructions/Instructions";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero */}
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

      {/* Collection */}
      <Collection />

      {/* Why choose us? */}
      <Usp />

      {/* Instructions */}
      <Instructions>
        <Link to={"/plan"} className="btn btn-position">
          Create your plan
        </Link>
      </Instructions>
    </main>
  );
};

export default Home;
