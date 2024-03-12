import { countries } from "../../data";

const Countries = () => {
  return (
    <section className="countries-container">
      <h3 className="countries-heading">Our headquarters</h3>
      <div className="countries-wrapper">
        {countries.map((country, index) => {
          return (
            <article key={index} className="country-wrapper">
              <img src={country.icon} alt={country.country} />
              <h4 className="country-name">{country.country}</h4>
              <p className="body-txt">{country.street}</p>
              <p className="body-txt">{country.city}</p>
              <p className="body-txt">{country.phone}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Countries;
