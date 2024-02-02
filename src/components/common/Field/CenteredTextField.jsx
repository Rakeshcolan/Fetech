import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";

const CenteredTextField = ({
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
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <TextField
        fullWidth
        id={id}
        margin="normal"
        type="text"
        variant="outlined"
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
        value={formik?.values[id]}
        error={Boolean(formik?.touched[id] && formik?.errors[id])}
        helperText={<>{formik?.touched[id] && formik?.errors[id]}</>}
        onBlur={formik?.handleBlur}
        InputLabelProps={{
          shrink: false,
        }}
        sx={{
          "& legend": { display: "none" },
          "& fieldset": { top: 0 },
          width: "100%",
          mt: 0,
          mb: 0,
          borderRadius: "10px",
          // backgroundColor: "#D9D9D9",
          
          "& .MuiOutlinedInput-input": customStyles?.OutlinedInput,
        }}
        // InputProps={{
        //   classes: {
        //     notchedOutline: "custom-notched-outline",
        //   },
        //   style: { color: "black" },
        //   sx: {
        //     borderRadius: "10px",
        //     "& input::placeholder": {
        //       color: "black !important",
        //     },
        //   },
        // }}
        // sx={{
        //   backgroundColor: "#D9D9D9",
        //   borderRadius: "10px",
        // }}
        {...props}
      />
    </Stack>
  );
};

export default CenteredTextField;
