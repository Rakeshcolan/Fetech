import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

const CommonTextFields = ({ label, placeholder, ...props }) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <label>{label}</label>
        <TextField
          margin="normal"
          fullWidth
          type="text"
          variant="outlined"
          placeholder={placeholder}
          {...props}
          sx={{
            width: "50%",
          }}
        />
      </Stack>
    </>
  );
};

export default CommonTextFields;
