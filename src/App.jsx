// import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import SignUp from "./Pages/SignUp";
import "./App.css";
import NewPC from "./Pages/newPC";
import Results from "./Pages/Results";
import History from "./Pages/History";
import ScriptSelect from "./Pages/ScriptSelect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scripts" element={<ScriptSelect />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route path="/newPc" element={<NewPC />} />
        <Route path="/results" element={<Results />} />
        <Route path="/archive" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
