import React from "react";
import BasicSelect from "./BasicSelect";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import "../Styles/form.css";
import BasicSelectgrp from "./BasicSelectgrp";
export default function PcForm() {
  return (
    <div className="container1">
      <form action="">
        <label htmlFor="">Enter New Pc Name</label>
        <input type="text" placeholder="PC name" />
        <label htmlFor="">Enter PC MAC Address</label>
        <input type="text" placeholder="MAC Address" />

        <label htmlFor="">Enter Username</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="">Enter Password</label>
        <input type="text" placeholder="Password" />
        <label htmlFor="">Select OS installed in system</label>
        <BasicSelect />
        <label htmlFor="">Select Group of system</label>
        <BasicSelectgrp />
        <Button variant="contained" endIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </div>
  );
}
