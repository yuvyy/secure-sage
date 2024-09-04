import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "../Styles/Home.css";
export default function History() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <div className="main-content">
        <Sidebar className="sidebar" />
        <div className="content-wrapper">
          <h1>Scan History appears here</h1>
          <main className="center-content"></main>
        </div>
      </div>
    </div>
  );
}
