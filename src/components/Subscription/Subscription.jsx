import { formData } from "../../data";
import { useState } from "react";
import Option from "../Option/Option";

const Subscription = () => {
  const [selections, setSelections] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // OnChange: update selections and validate if all options are checked
  const handleSelectionChange = (setId, value) => {
    const updatedSelections = { ...selections, [setId]: value.type };
    setSelections(updatedSelections);
    const isFormValid =
      Object.keys(updatedSelections).length === formData.length;
    setIsFormValid(isFormValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selections);
  };

  return (
    <form onSubmit={handleSubmit} className="form-control">
      {/* Categories */}
      <div className="categories-wrapper">
        {formData.map((set) => {
          return (
            <a key={set.id} href={`#${set.setName}`} className="cat-link">
              <span>0{set.id}</span> {set.setName}
            </a>
          );
        })}
      </div>

      {/* Options */}
      <div className="options-container">
        {formData.map((set) => {
          // Sets
          return (
            <div key={set.id} className="set-wrapper" id={set.setName}>
              <h2 className="set-heading">{set.heading}</h2>

              {/* Radio buttons */}
              <div className="radio-btns-wrapper">
                {set.options.map((option, index) => {
                  return (
                    <Option
                      key={index}
                      value={option}
                      checked={selections[set.id] === option.type}
                      onChange={() => handleSelectionChange(set.id, option)}
                      option={option}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

        {isFormValid ? (
          <input className="btn" type="submit" value="Create my plan" />
        ) : (
          <input
            className="btn btn-disabled"
            type="submit"
            value="Create my plan"
            disabled
          />
        )}
      </div>
    </form>
  );
};

export default Subscription;
