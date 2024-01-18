import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CenteredTextField from "../../../components/common/Field/CenteredTextField";
import logo from "../../../assests/images/connexLogo.png";
import { showToast } from "../../../components/commonToast/toastService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (auth) => {
    if (auth == "User") {
      sessionStorage.setItem("ur", 1);
      sessionStorage.setItem("roles", "USER");
      showToast("Welcome Admin", "success");
    } else {
      sessionStorage.setItem("ur", 2);
      sessionStorage.setItem("roles", "ADMIN");
      showToast("Welcome Admin", "success");
    }
    navigate("/");
  };

  const handleNavigate = () => {
    navigate("/register");
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "User",
      email_id: "",
      mobile_no: "7896523415",
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
      let val = {
        username: values.name,
        email_id: values.email_id,
        mobile_no: values.mobile_no,
        password: values.password,
      };
      //  dispatch(addClientApi(val));
      // navigate("/dashboard/client");
      // setOpenModal(false);
    },
  });

  return (
    <div>
      This is Login page
      <Button
        onClick={() => {
          handleLogin("User");
        }}
      >
        please login to see User Routes
      </Button>
      <Button
        onClick={() => {
          handleLogin("Admin");
        }}
      >
        please login to see Admin Routes
      </Button>
      <img
        src={logo}
        alt="Logo"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "200px", // Adjust the width as needed
          height: "auto", // Maintain aspect ratio
        }}
      />
      <div className="loginCard">
        <div className="loginContainer">
          <h2>LOGIN</h2>
          <br />
          <CenteredTextField
            label="Username"
            id="email_id"
            placeholder="Username"
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
              <input type="checkbox" name="rememberMe" /> Remember Me
            </label>
            <span className="forgot-password">Forgot Password?</span>
          </div>
          <button className="loginBtn" onClick={formik.handleSubmit}>Login</button>
          <br />
          <br />
          <div>
            <p>
              Don't have an account?{" "}
              <b style={{ cursor: "pointer" }} onClick={handleNavigate}>
                SignUp
              </b>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
