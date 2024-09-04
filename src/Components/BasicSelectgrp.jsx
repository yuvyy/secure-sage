import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function BasicSelectGroup() {
  const [Group, setGroup] = React.useState("");

  const handleChange = (event) => {
    setGroup(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Group}
          label="Group"
          onChange={handleChange}>
          <MenuItem value={"Group 1"}>Group 1</MenuItem>
          <MenuItem value={"Group 2"}>Group 2</MenuItem>
          <MenuItem value={"Group 3"}>Group 2</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
