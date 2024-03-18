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
    console.log("hello");
  };

  return (
    <div className="subscription-container">
      {/* Categories */}
      <p>temp categories container</p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {formData.map((set) => {
          // Sets
          return (
            <div key={set.id} className="set-wrapper">
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
      </form>
    </div>
  );
};

export default Subscription;
