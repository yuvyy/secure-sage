import React, { useState } from "react";
import "../Styles/SearchComponent.css";

const SearchComponent = ({
  items,
  setFilteredItems,
  selectAll,
  setSelectAll,
  selectedChecks,
  setSelectedChecks,
  selectedCategory,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredItems(
      items.filter((item) => item.toLowerCase().includes(value))
    );
  };

  const handleSelectAllChange = () => {
    setSelectAll((prevSelectAll) => {
      const newSelectAll = !prevSelectAll;
      if (newSelectAll) {
        // Select all items
        setSelectedChecks((prevState) => ({
          ...prevState,
          [selectedCategory]: items,
        }));
      } else {
        // Deselect all items
        setSelectedChecks((prevState) => ({
          ...prevState,
          [selectedCategory]: [],
        }));
      }
      return newSelectAll;
    });
  };

  return (
    <div className="search-component">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <label className="select-all-label">
        <input
          type="checkbox"
          checked={selectAll}
          onChange={handleSelectAllChange}
          className="select-all-checkbox"
        />
        Select All
      </label>
    </div>
  );
};

export default SearchComponent;
