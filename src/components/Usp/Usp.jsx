import { usps } from "../../data";

const Usp = () => {
  return (
    <section className="usps-container">
      <h2>Why choose us?</h2>
      <p className="body-txt choose-us-txt">
        A large part of our role is choosing which particular coffees will be
        featured in our range. This means working closely with the best coffee
        growers to give you a more impactful experience on every level.
      </p>
      <div className="usps-wrapper">
        {usps.map((item, index) => {
          return (
            <article key={index} className="item-wrapper">
              <figure className="item-icon">{item.icon}</figure>
              <h3>{item.title}</h3>
              <p className="body-txt item-txt">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Usp;
