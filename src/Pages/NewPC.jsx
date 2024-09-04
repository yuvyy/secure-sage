import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "../Styles/Home.css";

import PcForm from "../Components/PCForm";

export default function NewPC() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <div className="main-content">
        <Sidebar className="sidebar" />
        <div className="content-wrapper">
          <h1>Enter new PC</h1>
          <main className="center-content">
            <PcForm/>
          </main>
        </div>
      </div>
    </div>
  );
}
