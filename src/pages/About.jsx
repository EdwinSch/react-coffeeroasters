import Hero from "../components/Hero/Hero";

const About = () => {
  return (
    <main>
      <Hero
        variant={"hero-about"}
        heading={"heading-sm"}
        txtContent="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        headingContent="About us"
      ></Hero>
    </main>
  );
};

export default About;
