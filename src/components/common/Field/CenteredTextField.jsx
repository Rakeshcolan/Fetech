import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

const CenteredTextField = ({ label, placeholder, ...props }) => {
  return (
    // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {/* <label>{label}</label> */}
      <TextField
        id="outlined-basic"
        // label={label}
        margin="normal"
        fullWidth
        type="text"
        variant="outlined"
        placeholder={placeholder}
        {...props}
        InputLabelProps={{
          shrink: false, // Stop label animation on click
        }}
        InputProps={{
          classes: {
            notchedOutline: "custom-notched-outline", // Use a custom class
          },
          style: { color: "black " },
          sx: {
            "& input::placeholder": {
              color: "black !important", // Change placeholder color
            },
          },
        }}
        sx={{
          //   width: "250px",
          backgroundColor: "#D9D9D9",
          borderRadius: "10px",
        }}
      />
    </Stack>
  );
};

export default CenteredTextField;
