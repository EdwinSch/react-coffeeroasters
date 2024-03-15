import { formData } from "../../data";
import { useState } from "react";

const Subscription = () => {
  const [selections, setSelections] = useState({});

  const handleSelectionChange = (setId, value) => {
    setSelections({ ...selections, [setId]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(selections);
  };

  return (
    <div className="subscription-container">
      {/* Categories */}
      <p>temp categories container</p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {formData.map((set) => (
          <div key={set.id} className="set-wrapper">
            <h3 className="set-heading">{set.heading}</h3>
            {set.options.map((option) => (
              <label key={option} className="container">
                <input
                  type="radio"
                  checked={selections[set.id] === option}
                  name="radio"
                  value={option}
                  onChange={() => handleSelectionChange(set.id, option)}
                />
                <span className="checkmark">{option}</span>
              </label>
            ))}
          </div>
        ))}

        <input className="btn" type="submit" value="Create my plan" />
      </form>
    </div>
  );
};

export default Subscription;
