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
  const handleChange = (e) => {
    formik.handleChange(e);
  };

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
          fullWidth
          id={id}
          margin="normal"
          disabled={disabled}
          type="text"
          placeholder={placeholder}
          onChange={handleChange}  // Add onChange handler
          value={formik.values[id]}
          error={Boolean(formik.touched[id] && formik.errors[id])}
          helperText={<>{formik.touched[id] && formik.errors[id]}</>}
          onBlur={formik.handleBlur}  
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
