import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    sessionStorage.setItem("ur", 1);
    navigate("/");
  };
  return (
    <div>
      This is Login page
      <Button
        onClick={() => {
          handleLogin();
        }}
      >
        please login to see test Routes
      </Button>
    </div>
  );
};

export default Login;
