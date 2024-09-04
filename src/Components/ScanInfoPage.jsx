// import React, { useState, useEffect } from "react";
// import CategoryDisplay from "./CategoryDisplay";
// import SearchComponent from "./SearchComponent";
// import DisplayComponent from "./DisplayComponent";
// import "../Styles/ScanInfoPage.css";

// const data = [
//   { category: "category 1", tests: ["test1", "test2", "test3", "test4"] },
//   { category: "category 2", tests: ["test1", "test2", "test3", "test4"] },
//   { category: "category 3", tests: ["test1", "test2", "test3", "test4"] },
//   { category: "category 4", tests: ["test1", "test2", "test3", "test4"] },
//   { category: "category 5", tests: ["test1", "test2", "test3", "test4"] },
//   { category: "category 6", tests: ["test1", "test2", "test3", "test4"] },
//   { category: "category 7", tests: ["test1", "test2", "test3", "test4"] },
//   { category: "category 8", tests: ["test1", "test2", "test3", "test4"] },
//   { category: "category 9", tests: ["test1", "test2", "test3", "test4"] },
//   { category: "category 10", tests: ["test1", "test2", "test3"] },
// ];

// const ScanInfoPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(data[0].category);
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [selectedChecks, setSelectedChecks] = useState({});
//   const [selectAll, setSelectAll] = useState(false);

//   useEffect(() => {
//     const currentCategoryTests =
//       data.find((item) => item.category === selectedCategory)?.tests || [];
//     setFilteredItems(currentCategoryTests);
//     setSelectAll(
//       selectedChecks[selectedCategory]?.length === currentCategoryTests.length
//     );
//   }, [selectedCategory, selectedChecks]);

//   const handleSubmit = async () => {
//     const arrayData = data.map((category) => ({
//       category: category.category,
//       tests: selectedChecks[category.category] || [],
//     }));

//     try {
//       // const response = await fetch('http://localhost:5000/submit-array', {
//       //     method: 'POST',
//       //     headers: {
//       //         'Content-Type': 'application/json',
//       //     },
//       //     body: JSON.stringify(arrayData),
//       // });

//       // const result = await response.json();
//       // console.log('Response from API:', result);

//       // For demonstration purposes, log the response
//       console.log(arrayData);

//       // // Save the response to a JSON file
//       // const file = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
//       // const url = URL.createObjectURL(file);
//       // const a = document.createElement('a');
//       // a.href = url;
//       // a.download = 'response.json';
//       // a.click();
//       // URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Error sending data:", error);
//     }
//   };

//   return (
//     <div className="scan-info-page">
//       <div className="content-wrapper">
//         <CategoryDisplay
//           categories={data}
//           selectedChecks={selectedChecks}
//           setSelectedCategory={setSelectedCategory}
//         />
//         <div className="components-wrapper">
//           <SearchComponent
//             items={filteredItems}
//             setFilteredItems={setFilteredItems}
//             selectAll={selectAll}
//             setSelectAll={setSelectAll}
//             selectedChecks={selectedChecks}
//             setSelectedChecks={setSelectedChecks}
//             selectedCategory={selectedCategory}
//           />
//           <DisplayComponent
//             filteredItems={filteredItems}
//             selectedChecks={selectedChecks}
//             setSelectedChecks={setSelectedChecks}
//             selectedCategory={selectedCategory}
//           />
//         </div>
//       </div>
//       <div className="submit-button-wrapper">
//         <button onClick={handleSubmit} className="submit-button">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ScanInfoPage;
