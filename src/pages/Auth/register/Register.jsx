import React from "react";
import { useNavigate } from "react-router-dom";
import CenteredTextField from "../../../components/common/Field/CenteredTextField";
import logo from "../../../assests/images/connexLogo.png";
import { useFormik } from "formik";
import { addLoginApi, addRegisterApi } from "../../../redux/action/authAction";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerApiReducer } from "../../../redux/slice/authSlice";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Link,
} from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = () => {
    navigate("/");
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email_id: "",
      mobile_no: "",
      password: "",
      isTermChecked: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Name is required")
        .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabet characters"),
      email_id: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
      mobile_no: Yup.string()
        .matches(/^[0-9]{10}$/, "Invalid phone number") // Check for 10-digit numeric phone number
        .required("Phone Number is required"),
      password: Yup.string().required("Password is required"),
      isTermChecked: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
    }),
    onSubmit: (values) => {
      let userroles = values.username === "fetechadmin";
      let val = {
        username: values.username,
        email_id: values.email_id,
        mobile_no: values.mobile_no,
        password: values.password,
        isTermChecked:values.isTermChecked,
        is_superuser: userroles,
      };
      dispatch(addRegisterApi(val, navigate));
      formik.resetForm();
    },
  });

  return (
    <div>
      <img
        src={logo}
        alt="Logo"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200px",
          height: "auto",
        }}
      />
      <div className="loginCard">
        <form onSubmit={formik.handleSubmit}>
          <div className="loginContainer">
            <h2>REGISTER</h2>
            <br />
            <CenteredTextField
              label="Username"
              id="username"
              placeholder="Username"
              formik={formik}
            />
            <br />
            <CenteredTextField
              label="Email"
              id="email_id"
              placeholder="Email"
              formik={formik}
            />{" "}
            <br />
            <CenteredTextField
              label="Phone Number"
              id="mobile_no"
              type="number"
              placeholder="Phone Number"
              formik={formik}
            />
            <br />
            <CenteredTextField
              label="Password"
              id="password"
              placeholder="Password"
              formik={formik}
            />
            <br />
            <FormGroup row>
              <FormControlLabel
              style={{marginBottom:"0px"}}
                control={
                  <Checkbox
                    checked={formik.values["isTermChecked"]}
                    onChange={(e) => {
                      formik.setFieldValue("isTermChecked", e.target.checked);
                    }}
                    name="isTermChecked"
                  />
                }
                label={
                  <span style={{ color: "#0880E8", fontSize: "14px" }}>
                    I agree to all the &nbsp;
                    <a href="">Terms and Privacy Policy</a>
                  </span>
                }
              />
              <FormHelperText style={{ color: "red",textAlign:"center",margin:"0px" }}>
                {formik.touched.isTermChecked && formik.errors.isTermChecked
                  ? formik.touched.isTermChecked && formik.errors.isTermChecked
                  : " "}
              </FormHelperText>
            </FormGroup>
            {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Label" /> */}
            {/* <div className="form-options">
            <label>
              <input id="isTermChecked" value={formik.values["isTermChecked"]} type="checkbox" name="rememberMe" /> I agree to all the{" "}
              <span style={{color:"#0880E8"}}>Terms</span> and <span style={{color:"#0880E8"}}> privacy policy</span>
            </label>
          </div> */}
            <button
              type="button"
              className="loginBtn"
              onClick={formik.handleSubmit}
            >
              Register
            </button>
            <br />
            <br />
            {/* <div>
            <p>
              Already have an account? <b style={{cursor:"pointer"}} onClick={handleNavigate}>SignIn</b>{" "}
            </p>
          </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
