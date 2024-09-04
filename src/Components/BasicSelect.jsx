import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function BasicSelect() {
  const [Os, setOs] = React.useState("");

  const handleChange = (event) => {
    setOs(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Os</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Os}
          label="Os"
          onChange={handleChange}>
          <MenuItem value={'Windows'}>Windows</MenuItem>
          <MenuItem value={'Mac'}>Mac</MenuItem>
          <MenuItem value={'Linux'}>Linux</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
