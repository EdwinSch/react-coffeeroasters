const Instructions = ({ addDark, lightText, children }) => {
  return (
    <section
      className="instructions-container"
      style={{ backgroundColor: addDark }}
    >
      <h2 className="instr-heading">How it works</h2>
      <div className="steps-container">
        {/* Step 1 */}
        <article className="step-wrapper">
          <div className="pattern">
            <div className="dot"></div>
            <div className="stripe"></div>
          </div>
          <h3 className="step-number">01</h3>
          <h4 className="step-title" style={{ color: lightText }}>
            Pick your coffee
          </h4>
          <p className="body-txt step-txt" style={{ color: lightText }}>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </article>

        {/* Step 2 */}
        <article className="step-wrapper">
          <div className="pattern">
            <div className="dot"></div>
            <div className="stripe"></div>
          </div>
          <h3 className="step-number">02</h3>
          <h4 className="step-title" style={{ color: lightText }}>
            Choose the frequency
          </h4>
          <p className="body-txt step-txt" style={{ color: lightText }}>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </article>

        {/* Step 3 */}
        <article className="step-wrapper">
          <div className="pattern">
            <div className="dot"></div>
            <div className="stripe"></div>
          </div>
          <h3 className="step-number">03</h3>
          <h4 className="step-title" style={{ color: lightText }}>
            Receive and enjoy!
          </h4>
          <p className="body-txt step-txt" style={{ color: lightText }}>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </article>
      </div>

      {children}
    </section>
  );
};

export default Instructions;
