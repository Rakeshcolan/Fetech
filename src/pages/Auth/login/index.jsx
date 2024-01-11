import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CenteredTextField from "../../../components/common/Field/CenteredTextField";
import CommonTextFields from "../../../components/common/Field/CommonTextFIelds";
import logo from "../../../assests/images/connexLogo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (auth) => {
    if (auth == "User") {
      sessionStorage.setItem("ur", 1);
      sessionStorage.setItem("roles","USER")
    } else {
      sessionStorage.setItem("ur", 2);
      sessionStorage.setItem("roles","ADMIN")
    }
    navigate("/");
  };

  const handleNavigate = () => {
    navigate("/register")
  }

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
            id="Username"
            placeholder="Username"
          />
          <br />
          <CenteredTextField
            label="Password"
            id="Password"
            placeholder="Password"
          />
          <br />
          <div className="form-options">
            <label>
              <input type="checkbox" name="rememberMe" /> Remember Me
            </label>
            <span className="forgot-password">Forgot Password?</span>
          </div>
          <button className="loginBtn">Login</button>
          <br />
          <br />
          <div>
            <p>
              Don't have an account? <b style={{cursor:"pointer"}} onClick={handleNavigate}>SignUp</b>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
