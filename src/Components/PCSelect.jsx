import React, { useState } from "react";
import Select from "react-select";
import "../Styles/PCSelect.css"; // Ensure this path is correct
import pc1 from "../Assets/pc1.png"; // Ensure this path is correct
import grp from "../Assets/grpPc.png"; // Ensure this path is correct
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function PCSelect() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPc, setSelectedPc] = useState(null); // State for selected PC
  const [selectedGroup, setSelectedGroup] = useState(null); // State for selected group
  const [validationError, setValidationError] = useState(""); // State for validation error

  // Options for dropdowns
  const pcOptions = [
    { value: "pc1", label: "PC 1" },
    { value: "pc2", label: "PC 2" },
    { value: "pc3", label: "PC 3" },
  ];

  const groupOptions = [
    { value: "group1", label: "Group 1" },
    { value: "group2", label: "Group 2" },
    { value: "group3", label: "Group 3" },
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setSelectedPc(null); // Reset PC selection
    setSelectedGroup(null); // Reset group selection
    setValidationError(""); // Clear validation error
  };

  const handleDoneClick = () => {
    let selectedArray = [];

    if (selectedCard === "single" && !selectedPc) {
      setValidationError("Please select a PC.");
      return;
    } else if (selectedCard === "group" && !selectedGroup) {
      setValidationError("Please select a group.");
      return;
    } else {
      setValidationError("");

      // Create the array based on selection
      if (selectedCard === "single" && selectedPc) {
        selectedArray = [selectedPc.value];
      } else if (selectedCard === "group" && selectedGroup) {
        // Assuming group contains multiple PCs, you can structure it accordingly
        selectedArray = [selectedGroup.value];
      } else if (selectedCard === "all") {
        // Assuming 'all' means all PCs, populate accordingly
        selectedArray = pcOptions.map((pc) => pc.value);
      }

      // Pass the array as state to the redirected page
      navigate("/scripts", { state: { selectedItems: selectedArray } });
    }
  };

  return (
    <div className="pane">
      {selectedCard === null ? (
        <>
          <div className="card" onClick={() => handleCardClick("single")}>
            <div className="image">
              <img src={pc1} alt="PC Image" />
            </div>
            <h3>A single PC</h3>
          </div>
          <div className="card" onClick={() => handleCardClick("group")}>
            <div className="image">
              <img src={grp} alt="Group of PCs" />
            </div>
            <h3>Group of PCs</h3>
          </div>
          <div className="card" onClick={() => handleCardClick("all")}>
            <div className="image">
              <img src={pc1} alt="PC Image" />
            </div>
            <h3>All PCs</h3>
          </div>
        </>
      ) : (
        <div className="card">
          <div className="image">
            <img
              src={selectedCard === "group" ? grp : pc1}
              alt={selectedCard === "group" ? "Group of PCs" : "PC Image"}
            />
          </div>
          <h3>
            {selectedCard === "group"
              ? "Group of PCs"
              : selectedCard === "all"
              ? "All PCs"
              : "A single PC"}
          </h3>
          {selectedCard === "single" && (
            <div className="input-group">
              <label htmlFor="pc-select">Select PC</label>
              <Select
                id="pc-select"
                options={pcOptions}
                placeholder="Select a PC"
                onChange={(selectedOption) => setSelectedPc(selectedOption)}
                value={selectedPc}
              />
            </div>
          )}
          {selectedCard === "group" && (
            <div className="input-group">
              <label htmlFor="group-select">Select Group</label>
              <Select
                id="group-select"
                options={groupOptions}
                placeholder="Select a Group"
                onChange={(selectedOption) => setSelectedGroup(selectedOption)}
                value={selectedGroup}
              />
            </div>
          )}
          {validationError && (
            <div className="validation-error">{validationError}</div>
          )}
          <div className="button-group">
            <button
              className="back-button"
              onClick={() => setSelectedCard(null)}>
              Back
            </button>
            <button className="submit-button" onClick={handleDoneClick}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
