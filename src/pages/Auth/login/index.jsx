import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (auth) => {
    if(auth == "User"){

      sessionStorage.setItem("ur", 1);
    }
    else {
      sessionStorage.setItem('ur',2)
    }
    navigate("/");
  };
  return (
    <div>
      This is Login page
      <Button
        onClick={() => {
          handleLogin('User');
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
    </div>
  );
};

export default Login;
