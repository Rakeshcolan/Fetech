import React from "react";
import { useNavigate } from "react-router-dom";
import CenteredTextField from "../../../components/common/Field/CenteredTextField";
import logo from "../../../assests/images/connexLogo.png";
import { useFormik } from "formik";
import { addLoginApi, addRegisterApi } from "../../../redux/action/authAction";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { registerApiReducer } from "../../../redux/slice/authSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = () => {
    navigate("/");
  };

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     email_id: "",
  //     mobile_no: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     username: Yup.string()
  //       .required("Name is required")
  //       .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabet characters"),
  //     email_id: Yup.string()
  //       .required("Email is required")
  //       .email("Invalid email format"),
  //     mobile_no: Yup.string()
  //       .matches(/^[0-9]{10}$/, "Invalid phone number (should be 10 digits)")
  //       .required("Phone number is required"),
  //     password: Yup.string().required("Password is required"),
  //   }),
  //   onSubmit: async (values) => {
  //     let val = {
  //       username: values.username,
  //       last_name: values.last_name,
  //       email_id: values.email_id,
  //       mobile_no: values.mobile_no,
  //       password: values.password,
  //       is_superuser: true,
  //     };
  //     dispatch(registerApi(val,navigate));
  //   },
  // });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      email_id: "",
      mobile_no: "",
      password: "",
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
        .required("PhoneNumber is required"),
      password: Yup.string().required("password is required"),
    }),
    onSubmit: (values) => {
      let userroles = values.username === "fetechadmin";
      let val = {
        username: values.username,
        email_id: values.email_id,
        mobile_no: values.mobile_no,
        password: values.password,
        is_superuser:userroles
      };
        dispatch(addRegisterApi(val,navigate));
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
          <div className="form-options">
            <label>
              <input type="checkbox" name="rememberMe" /> I agree to all the{" "}
              <span style={{color:"#0880E8"}}>Terms</span> and <span style={{color:"#0880E8"}}> privacy policy</span>
            </label>
          </div>
          <button type="button" className="loginBtn" onClick={formik.handleSubmit}>Register</button>
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
