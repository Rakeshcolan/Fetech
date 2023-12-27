import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListIcon from "@mui/icons-material/List";
import { Outlet } from "react-router-dom";
import {
  AdminMenuItems,
  UsermenuItems,
} from "../../../utils/constants/menuItem";
import "./rootLayoutStyle.css";

const drawerWidth = 240;

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
          <ListItemText primary={name} />
          {open ? (
            <ExpandLessIcon className="listicon" />
          ) : (
            <ExpandMoreIcon className="listicon" />
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menuItems.isNested.map((nestedItem, index) => {
              const { name, path } = nestedItem;
              return (
                <ListItemButton
                  // component={Link}
                  to={path}
                  style={{ paddingLeft: 16 }}
                  key={`${index}-item`}
                  className="nested-list"
                  onClick={() => {
                    // highlightParent(path);
                  }}
                >
                  {/* <img src={RightIcon} alt="right-icon" /> */}
                  <ListItemText primary={name} />
                </ListItemButton>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={openDrawer}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(openDrawer && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div >
        <Drawer variant="permanent" className="layoutlist" open={openDrawer}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
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
      <span style={{ position: "relative", top: "77px", padding: "10px",width:"100%" }}>
        <Outlet />
      </span>
    </Box>
  );
}
