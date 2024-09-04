import React from "react";
import "../Styles/CategoryDisplay.css";

const CategoryDisplay = ({
  categories,
  selectedChecks,
  setSelectedCategory,
}) => {
  return (
    <div className="category-display">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setSelectedCategory(category.category)}
          className="category-button">
          {category.category} ({selectedChecks[category.category]?.length || 0})
        </button>
      ))}
    </div>
  );
};

export default CategoryDisplay;
