import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { Outlet, useNavigate } from "react-router-dom";

import "./rootLayoutStyle.css";
import profileImg from "../../../assests/images/Ellipse 58.png";
import { Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { ArrowBack } from "@mui/icons-material";
import { Layout } from "./layout";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const drawerWidth = 280;

export default function RootLayout() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  //setting adming and user routes

  const [openDrawer, setOpenDrawer] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  //to show dropdown lists

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = () => {
    navigate("/dashboard/editProfile");
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    sessionStorage.clear("ur");
    sessionStorage.clear("roles");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        open={openDrawer}
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              position: "relative",
              color: "black",
            }}
          >
            {openDrawer ? (
              <MenuIcon style={{ color: "black" }} />
            ) : (
              <ArrowBack style={{ color: "black" }} />
            )}
          </IconButton>
          <Avatar
            alt="Profile Logo"
            src={profileImg} // Replace with the path to your profile logo image
            sx={{
              width: "60px",
              height: "60px",
              marginLeft: "auto",
              cursor: "pointer",
            }} // Adjust the margin as needed
            onClick={handleProfileClick}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ borderRadius: "10px" }}
          >
            <MenuItem
              onClick={handleRedirect}
              sx={{
                "&:hover": {
                  backgroundColor: "#c4cdd5",
                  fontSize: "16px !important",
                },
              }}
            >
              <PermIdentityIcon
                sx={{ marginRight: "10px", fontSize: "20px" }}
              />
              Edit Profile
            </MenuItem>
            <MenuItem
              onClick={handleLogOut}
              sx={{
                "&:hover": {
                  backgroundColor: "#c4cdd5",
                  fontSize: "16px !important",
                },
              }}
            >
              <LogoutIcon sx={{ fontSize: "20px", marginRight: "10px" }} />
              Sign Out
            </MenuItem>
            {/* Add more menu items as needed */}
          </Menu>
        </Toolbar>
      </AppBar>
      <Layout openDrawer={openDrawer} />
      <span
        style={{
          position: "relative",
          top: "77px",
          padding: "10px",
          width: "100%",
        }}
      >
        <Outlet />
      </span>
    </Box>
  );
}
