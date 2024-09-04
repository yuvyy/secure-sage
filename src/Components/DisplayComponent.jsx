import React from "react";
import "../Styles/DisplayComponent.css";

const DisplayComponent = ({
  filteredItems,
  selectedChecks,
  setSelectedChecks,
  selectedCategory,
}) => {
  const handleCheckChange = (item) => {
    setSelectedChecks((prevState) => {
      const categoryChecks = prevState[selectedCategory] || [];
      if (categoryChecks.includes(item)) {
        // If the item is already selected, remove it
        return {
          ...prevState,
          [selectedCategory]: categoryChecks.filter((check) => check !== item),
        };
      } else {
        // If the item is not selected, add it
        return {
          ...prevState,
          [selectedCategory]: [...categoryChecks, item],
        };
      }
    });
  };

  return (
    <div className="display-component">
      <table className="display-table">
        <thead>
          <tr>
            <th className="table-header">Select</th>
            <th className="table-header">Test Name</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems?.map((item, index) => (
            <tr key={index} className="table-row">
              <td className="table-cell">
                <input
                  type="checkbox"
                  checked={
                    selectedChecks[selectedCategory]?.includes(item) || false
                  }
                  onChange={() => handleCheckChange(item)}
                  className="checkbox"
                />
              </td>
              <td className="table-cell">{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayComponent;
