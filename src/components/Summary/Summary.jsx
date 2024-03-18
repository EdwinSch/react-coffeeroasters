const Summary = ({ selections }) => {
  //Destructure
  const {
    1: firstChoice,
    2: secondChoice,
    3: thirdChoice,
    4: fourthChoice,
    5: fifthChoice,
  } = selections;

  return (
    <div className="summary-container">
      <h4 className="summary-heading">order summary</h4>
      <p className="summary-txt">
        “I drink my coffee as <span>{firstChoice}</span>, with a{" "}
        <span>{secondChoice}</span> type of bean. <span>{thirdChoice}</span>{" "}
        ground ala <span>{fourthChoice}</span>, sent to me{" "}
        <span>{fifthChoice}</span>.”
      </p>
      <p className="instruct body-txt">
        Is this correct? You can proceed to checkout or change anything within
        your selection if something is off.
      </p>
      <div className="checkout-wrapper">
        <p className="price">$ 14.00/mo</p>
        <a
          href="https://example.com/"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout
        </a>
      </div>
    </div>
  );
};

export default Summary;
