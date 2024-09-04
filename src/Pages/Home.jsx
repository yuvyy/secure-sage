import React from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import "../Styles/Home.css";
import PCSelect from "../Components/PCSelect";
export default function Home() {
  return (
    <div className="container">
      <header>
        <Header />
      </header>
      <div className="main-content">
        <Sidebar className="sidebar" />
        <div className="content-wrapper">
          <h1>Select the Systems to Run Tests</h1>
          <main className="center-content">
            <PCSelect />
          </main>
          {/* <div className="h-screen w-screen">
            <ScanInfoPage />
          </div> */}
        </div>
      </div>
    </div>
  );
}
