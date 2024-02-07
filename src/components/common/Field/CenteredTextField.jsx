import React from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CenteredTextField = ({
  id,
  label,
  formik,
  customStyles,
  disabled,
  placeholder,
  required,
  type ="text",
  handleShowPassword,
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
      position = "relative"
    >
      <TextField

        fullWidth
        id={id}
        margin="normal"
        type={type}
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
      { id==="password" && <VisibilityIcon sx={{position:"absolute",right:"5px",bottom:"10px",fontWeight:"400px"}} onClick={()=>handleShowPassword()}></VisibilityIcon>}
      
      
    </Stack>
  );
};

export default CenteredTextField;
