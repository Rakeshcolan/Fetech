import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListIcon from "@mui/icons-material/List";
import { Outlet, useNavigate } from "react-router-dom";
import {
  AdminMenuItems,
  UsermenuItems,
} from "../../../utils/constants/menuItem";
import "./rootLayoutStyle.css";
import Logo from "../../../assests/images/connexLogo.png";
import profileImg from "../../../assests/images/Ellipse 58.png";
import { Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function RootLayout() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = React.useState(true);
  const [layoutData, setLayoutData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  //setting adming and user routes
  let sessionValue = sessionStorage.getItem("ur");
  useEffect(() => {
    if (sessionValue == 1) {
      setLayoutData(UsermenuItems);
    } else {
      setLayoutData(AdminMenuItems);
    }
  }, [sessionValue]);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  //to show dropdown lists
  function MultipleList({ menuItems }) {
    const { name, path } = menuItems;
    const [open, setOpen] = useState(true);
    const handleClick = (e) => {
      e.preventDefault();
      setOpen((prev) => !prev);
    };
    return (
      <>
        <ListItemButton to={path} className="multi-list" onClick={handleClick}>
          <ListIcon sx={{ marginRight: "8px" }} />
          <ListItemText primary={name} onClick={() => navigate("/")} />
          {open ? (
            <ExpandLessIcon
              className="listicon"
              sx={{ color: "white !important" }}
            />
          ) : (
            <ExpandMoreIcon
              className="listicon"
              sx={{ color: "white !important" }}
            />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menuItems.isNested.map((nestedItem, index) => {
              const { name, path, icon } = nestedItem;
              return (
                <>
                  <ListItemButton
                    // component={Link}
                    to={path}
                    style={{ paddingLeft: 16, display: "flex" }}
                    key={`${index}-item`}
                    className="nested-list"
                    onClick={() => {
                      // highlightParent(path);
                    }}
                    sx={{
                      "&:hover": {
                        color: "#00E785",
                      },
                      "&:active, &:focus": {
                        backgroundColor: "#00E785 !important",
                        color: "black !important",
                        borderRadius: "10px",
                        margin: "0px 20px",
                      },
                    }}
                  >
                    <span style={{ margin: "9px" }}>{icon}</span>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = () => {
    navigate("/dashboard/editProfile");
    setAnchorEl(null)
  };

  const handleLogOut = () => {
    sessionStorage.clear("ur")
    sessionStorage.clear("roles")
    navigate("/")
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
            color="white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              position: "relative",
              left: "250px",
              color: "black",
              ...(openDrawer && { display: "none" }),
            }}
          >
            <MenuIcon />
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
              sx={{ "&:hover": { backgroundColor: "#c4cdd5",fontSize:"16px !important" } }}
            >
              <PermIdentityIcon sx={{marginRight:"10px",fontSize:"20px"}} />
              Edit Profile
            </MenuItem>
            <MenuItem
              onClick={handleLogOut}
              sx={{ "&:hover": { backgroundColor: "#c4cdd5",fontSize:"16px !important" } }}
            >
              <LogoutIcon sx={{fontSize:"20px",marginRight:"10px"}} />
              Sign Out
            </MenuItem>
            {/* Add more menu items as needed */}
          </Menu>
        </Toolbar>
      </AppBar>
      <div>
        <Drawer variant="permanent" className="layoutlist" open={openDrawer}>
          <img src={Logo} className="logo" style={{ width: "100%" }} />
          {/* <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon style={{ color: "white !important" }} />
              ) : (
                <ChevronLeftIcon style={{ color: "white !important" }} />
              )}
            </IconButton>
          </DrawerHeader> */}
          <List>
            {layoutData.map((items, index) => {
              return items.isNested ? (
                <MultipleList menuItems={items} key={index} />
              ) : (
                //   <SingleList menuItems={items} key={index} />
                <></>
              );
            })}
          </List>
        </Drawer>
      </div>
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
