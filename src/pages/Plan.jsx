import Hero from "../components/Hero/Hero";
import Instructions from "../components/Instructions/Instructions";

const Plan = () => {
  return (
    <main>
      <Hero
        variant={"hero-plan"}
        heading={"heading-lg"}
        txtContent="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."
        headingContent="Create plan"
      />
      <Instructions addDark={"#333d4b"} />
    </main>
  );
};

export default Plan;
