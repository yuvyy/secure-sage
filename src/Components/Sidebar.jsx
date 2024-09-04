import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Sidebar.css"; // Import custom styles
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ArchiveIcon from "@mui/icons-material/Archive";
import HomeIcon from "@mui/icons-material/Home";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ChecklistIcon from "@mui/icons-material/Checklist";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}>
              <IconButton style={{ backgroundColor: "white" }}>
                <HomeIcon fontSize="large" />
              </IconButton>
              <span style={{ marginLeft: "10px", color: "white" }}>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/scripts"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}>
              <IconButton style={{ backgroundColor: "white" }}>
                <ChecklistIcon fontSize="large" />
              </IconButton>
              <span style={{ marginLeft: "10px", color: "white" }}>
                Select Scripts
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/results"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}>
              <IconButton style={{ backgroundColor: "white" }}>
                <SummarizeIcon fontSize="large" />
              </IconButton>
              <span style={{ marginLeft: "10px", color: "white" }}>
                View Result
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/newPc"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}>
              <IconButton style={{ backgroundColor: "white" }}>
                <AddIcon fontSize="large" />
              </IconButton>
              <span style={{ marginLeft: "10px", color: "white" }}>
                Add New PC
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/archive"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}>
              <IconButton style={{ backgroundColor: "white" }}>
                <ArchiveIcon fontSize="large" />
              </IconButton>
              <span style={{ marginLeft: "10px", color: "white" }}>
                Scan History
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
