import { MenuItem, TextField, inputLabelClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UilAngleDown } from "@iconscout/react-unicons";

function CommonDropDown({
  id,
  label,
  formik,
  options,
  sx,
  customStyles,
  defaultValue,
  value,
  disabled,
  required,
  customChange,
  statusChecker = false,
}) {
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    setSelectedValue(formik.values[id] || defaultValue || value);
  }, [defaultValue, formik.values, id, value]);
  const showOption = (option)=>{
    let optiontext;
    switch (label) {
      case "Subscriptions Plan":
       optiontext =  `Tier${option?.subscription_id}`
        break;
      case "Billing":
        optiontext = `Tier${option?.subscription_id} -${option?.subscription_amount}`
        break;
    
      default:
        optiontext = option?.label || option?.designation
        break;
    }
    return  optiontext;
  }


  return (
    <div className="formik-select-wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <label style={{ fontSize: "16px",  }}>
          {label}
          {required && <span className="field-required">*</span>}
        </label>
        <TextField
          size="small"
          id={id}
          select
          fullWidth
          margin="normal"
          name={id}
          disabled={disabled}
          onBlur={formik.handleBlur}
          onChange={(e) => {
            formik.handleChange(e);
            if (customChange) customChange(e);
          }}
          value={formik.values[id] || defaultValue}
          className="select-menu-item"
          variant="outlined"
          error={Boolean(formik.touched[id] && formik.errors[id])}
          helperText={<>{formik.touched[id] && formik.errors[id]}</>}
          sx={{
            ".MuiOutlinedInput-notchedOutline": sx?.outlinedInput,
            "& .MuiOutlinedInput-input": customStyles?.OutlinedInput,
            ...sx?.root,
            "& legend": { display: "none" },
            "& fieldset": { top: 0 },
            width: "50%",
            mt: 0,
            mb: 0,
          }}
          InputProps={{
            ...customStyles?.startAdornment,
            sx: {
              color: selectedValue === defaultValue ? "#bbbbbb" : "black",
              [`&.${inputLabelClasses.shrink}`]: {
                color: selectedValue === defaultValue ? "#bbbbbb" : "black",
              },
              ...sx?.inputProps,
            },
          }}
          SelectProps={{
            IconComponent: UilAngleDown,
            MenuProps: {
              PaperProps: {
                style: {
                  maxHeight: "250px",
                },
              },
            },
          }}
        >
          {selectedValue === defaultValue && (
            <MenuItem value={defaultValue} disabled hidden>
              {defaultValue}
            </MenuItem>
          )}
          {options?.map((option) => (
                                                                     
            <MenuItem key={option.id} value={option.designation_id||option.subscription_id||option.value  }>
              {statusChecker && (
                <div
                  className={option.active ? "active-dot" : "non-active-dot"}
                ></div>
              )}
              {showOption(option)}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}

export default CommonDropDown;
