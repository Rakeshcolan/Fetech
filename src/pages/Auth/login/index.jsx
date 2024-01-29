import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CenteredTextField from "../../../components/common/Field/CenteredTextField";
import logo from "../../../assests/images/connexLogo.png";
import { showToast } from "../../../components/commonToast/toastService";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addLoginApi } from "../../../redux/action/authAction";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate("/register");
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Name is required")
        .matches(/^[a-zA-Z\s]+$/, "Name can only contain alphabet characters"),
      password: Yup.string().required("password is required"),
    }),
    onSubmit: (values) => {
      let val = {
        username: values.username,
        password: values.password,
      };

        dispatch(addLoginApi(val,navigate));

      // navigate("/dashboard/client");
      // setOpenModal(false);
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
            id="username"
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
