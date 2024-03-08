const Hero = ({ children, variant, heading, txtContent, headingContent }) => {
  return (
    <section className={`hero ${variant}`}>
      <div className="hero-content">
        <h1 className={heading}>{headingContent}</h1>
        <p className="body-txt hero-txt">{txtContent}</p>
        {children}
      </div>
    </section>
  );
};

export default Hero;
