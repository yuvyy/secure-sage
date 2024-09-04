import React, { useState } from 'react';

const categories = ['Category 1', 'Category 2', 'Category 3'];
const individualOptions = ['Option 1', 'Option 2', 'Option 3'];

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedIndividually, setSelectedIndividually] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const handleIndividualSelect = (option) => {
    setSelectedIndividually(prev => 
      prev.includes(option) 
        ? prev.filter(o => o !== option) 
        : [...prev, option]
    );
  };

  return (
    <div className="relative inline-block text-left ml-[10%] mt-[10%]">
      <button 
        onClick={toggleDropdown} 
        className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-blue-600"
      >
        <span>Select script</span>
        <span className="transform rotate-180 transition-transform duration-200">
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <div 
            className="cursor-pointer px-4 py-2 hover:bg-gray-100" 
            onClick={() => handleOptionClick('Select All')}
          >
            Select All
          </div>
          <div 
            className="cursor-pointer px-4 py-2 hover:bg-gray-100" 
            onClick={() => handleOptionClick('Select Category')}
          >
            Select Category
          </div>
          <div 
            className="cursor-pointer px-4 py-2 hover:bg-gray-100" 
            onClick={() => handleOptionClick('Select Individually')}
          >
            Select Individually
          </div>
        </div>
      )}
      {selectedOption === 'Select All' && (
        <div className="mt-2 space-y-2">
          {individualOptions.map(option => (
            <label key={option} className="flex items-center space-x-2 px-4 py-2 border-t border-gray-200 cursor-pointer">
              <input 
                type="checkbox" 
                checked 
                onChange={() => {}}
                className="form-checkbox"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
      {selectedOption === 'Select Category' && (
        <div className="mt-2 space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center space-x-2 px-4 py-2 border-t border-gray-200 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategorySelect(category)}
                className="form-checkbox"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      )}
      {selectedOption === 'Select Individually' && (
        <div className="mt-2 space-y-2">
          {individualOptions.map(option => (
            <label key={option} className="flex items-center space-x-2 px-4 py-2 border-t border-gray-200 cursor-pointer">
              <input 
                type="checkbox" 
                checked={selectedIndividually.includes(option)}
                onChange={() => handleIndividualSelect(option)}
                className="form-checkbox"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownButton;