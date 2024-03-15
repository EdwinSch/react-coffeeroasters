const Option = ({ value, checked, onChange, option }) => {
  return (
    <label className="option-wrapper">
      <input type="radio" value={value} checked={checked} onChange={onChange} />
      <span className="inner-content">
        <h3 className="option-heading">{option.type}</h3>
        <p className="option-txt body-txt">{option.text}</p>
      </span>
    </label>
  );
};

export default Option;
