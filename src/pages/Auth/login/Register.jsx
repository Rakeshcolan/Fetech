import React from "react";
import { useNavigate } from "react-router-dom";
import CenteredTextField from "../../../components/common/Field/CenteredTextField";
import logo from "../../../assests/images/connexLogo.png";

const Register = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/")
  }

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
          <h2>REGISTER</h2>
          <br />
          <CenteredTextField
            label="Username"
            id="Username"
            placeholder="Username"
          />
          <br />
          <CenteredTextField
            label="Email"
            id="Email"
            placeholder="Email"
          />{" "}
          <br />
          <CenteredTextField
            label="Phone Number"
            id="Phone Number"
            placeholder="Phone Number"
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
              <input type="checkbox" name="rememberMe" /> I agree to all the{" "}
              <span style={{color:"#0880E8"}}>Terms</span> and <span style={{color:"#0880E8"}}> privacy policy</span>
            </label>
          </div>
          <button className="loginBtn">Register</button>
          <br />
          <br />
          <div>
            <p>
              Already have an account? <b style={{cursor:"pointer"}} onClick={handleNavigate}>SignIn</b>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
