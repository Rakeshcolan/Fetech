import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListIcon from "@mui/icons-material/List";
import { Link, useNavigate,useLocation } from "react-router-dom";
import {
  AdminIconMenuItems,
  AdminMenuItems,
  UsermenuItems,
} from "../../../utils/constants/menuItem";
import "./rootLayoutStyle.css";
import Logo from "../../../assests/images/connexLogo.png";

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


  
  function MultipleList({ menuItems }) {
    const { name, path } = menuItems;
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    let location = useLocation();
    const handleClick = (e) => {
      e.preventDefault();
      setOpen((prev) => !prev);
    };
    return (
      <>
        <ListItemButton  component={Link} to={path} className="multi-list" onClick={handleClick}>
          <ListIcon sx={{ marginRight: "8px" }} />
          <ListItemText  primary={name} 
          onClick={() => navigate("/dashboard")} 
          />
          {/* {open ? (
            <ExpandLessIcon
              className="listicon"
              sx={{ color: "white !important" }}
            />
          ) : (
            <ExpandMoreIcon
              className="listicon"
              sx={{ color: "white !important" }}
            />
          )} */}
        </ListItemButton>
        {/* <Collapse in={open} timeout="auto" unmountOnExit> */}
          <List component="div" disablePadding>
            {menuItems.isNested.map((nestedItem, index) => {
              const { name, path, icon } = nestedItem;
             let isActive = location.pathname === path;
              return (
                <div key={index}>
                  <ListItemButton
                    component={Link}
                    to={path}
                    style={{
                      backgroundColor: isActive ? "#00E785" : "",
                      color: isActive ? "black" : "",
                      margin: isActive ? "0px 18px 0px 0px" : "",
                      borderRadius: isActive ? "10px" : "",
                      display: "flex",
                    }}
                    key={`${index}-item`}
                    className="nested-list"
                  
                    sx={{
                      "&:hover": {
                        color: "#00E785",
                      },
                
                    }}
                  >
                    <span style={{ margin: "9px" }}>{icon}</span>
                    <ListItemText primary={name} className={isActive?"menuname":"menunameIsActive"}
                      // style={{whiteSpace:"nowrap"}}
                    //  sx={{
                    //   '& .css-10hburv-MuiTypography-root':{
                    //     fontWeight:isActive? "800 !important":"",
                    //     whiteSpace:"normal"
                    //   }


                    //  }} 
                      />
                  </ListItemButton>
                </div>
              );
            })}
          </List>
        {/* </Collapse> */}
      </>
    );
  }

export const Layout = ({openDrawer})=>{
    const [layoutData, setLayoutData] = useState([]);
    let sessionValue = sessionStorage.getItem("ur");

    useEffect(() => {
        if (sessionValue == 1) {
          setLayoutData(UsermenuItems);
        } else {
          setLayoutData(openDrawer?AdminMenuItems:AdminIconMenuItems);
        }
      }, [openDrawer, sessionValue]);
    
    return (
        <>
             <div>
        <Drawer variant="permanent" className="layoutlist" open={openDrawer}>
          <img src={Logo} className="logo" style={{ width: "100%" }} />
          <List>
            {layoutData.map((items, index) => {
              return items.isNested ? (
                <MultipleList   menuItems={items} key={index} />
              ) : (
                <></>
              );
            })}
          </List>
        </Drawer>
      </div>
        </>
    )
}