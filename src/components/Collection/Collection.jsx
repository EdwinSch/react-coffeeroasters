import { collection } from "../../data";

const Collection = () => {
  return (
    <section className="collection-container">
      {/* Floating header */}
      <h2 className="section-head">our collection</h2>

      {/* Collection map */}
      {collection.map((item) => {
        return (
          <article key={item.id} className="product-wrapper">
            <img className="product-img" src={item.img} alt={item.type} />
            <div className="gen-wrapper">
              <h3 className="product-heading">{item.type}</h3>
              <p className="body-txt product-txt">{item.desciption}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Collection;
