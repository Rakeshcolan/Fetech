import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

const CommonTextFields = ({
  id,
  label,
  formik,
  customStyles,
  disabled,
  placeholder,
  required,
  ...props
}) => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <label>{label}</label>
        {/* <TextField
          margin="normal"
          fullWidth
          type="text"
          variant="outlined"
          placeholder={placeholder}
          {...props}
          sx={{
            width: "50%",
          }}
        /> */}
         <TextField
          fullWidth
          id={id}
          margin="normal"
          disabled={disabled}
          type="text"
          placeholder={placeholder}
    
          // onChange={formik.handleChange}
          value={formik.values[id]}
          error={Boolean(formik.touched[id] && formik.errors[id])}
          helperText={<>{formik.touched[id] && formik.errors[id]}</>}
          variant="outlined"
          sx={{
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
            width: "50%",
            mt: 0,
            mb: 0,
            borderRadius: "10px",
            "& .MuiOutlinedInput-input": customStyles?.OutlinedInput,
          }}
          {...props}
        />
      </Stack>
    </>
  );
};

export default CommonTextFields;
