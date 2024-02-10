import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
export const UsermenuItems = [
  {
    path: "/",
    name: "Dashboard",
    icon: "",

    isNested: [
      {
        path: "/dashboard",
        name: "Manage SubAdmin",
        icon: <ManageAccountsIcon />,
      },
      {
        path: "/dashboard/data",
        name: "Manage Data",
        icon: <SettingsIcon />,
      },
      {
        path: "/dashboard/roles",
        name: "Manage Roles And Permission",
        icon: <ForumIcon />,
      },
    ],
  },
];

export const AdminMenuItems=[
    {
        path: "/",
        name: "Dashboard",
        icon: "",
        isNested:[

            {
                path: "/dashboard/subadmin",
                name: "Manage SubAdmin",
                icon:<ManageAccountsIcon/> ,
              },
              {
                path: "/dashboard/client",
                name: "Manage Clients",
                icon: <PeopleIcon/>,
              },
              {
                path: "/dashboard/chatbot",
                name: "Manage Chatbot",
                icon: <ForumIcon/>
              },
              {
                path: "/dashboard/subscription",
                name: "Manage Subscription",
                icon: <CardMembershipIcon/>,
              },
              {
                path: "/dashboard/roles",
                name: "Roles and Permission",
                icon: <SettingsIcon/>,
              },
              {
                path: "/dashboard/cms",
                name: "Manage CMS",
                icon: <SupportAgentIcon/>,
              },
              {
                path: "/dashboard/demo",
                name: "Request For Demo",
                icon:  <SettingsIcon/>,
              },
        ]
      },
]
export const AdminIconMenuItems=[
    {
        path: "/",
        icon: "",
        isNested:[

            {
                path: "/dashboard/subadmin",
                icon:<ManageAccountsIcon/> ,
              },
              {
                path: "/dashboard/client",
                icon: <PeopleIcon/>,
              },
              {
                path: "/dashboard/chatbot",    
                icon: <ForumIcon/>
              },
              {
                path: "/dashboard/subscription",
                icon: <CardMembershipIcon/>,
              },
              {
                path: "/dashboard/roles",
                icon: <SettingsIcon/>,
              },
              {
                path: "/dashboard/cms",
                icon: <SupportAgentIcon/>,
              },
              {
                path: "/dashboard/demo",  
                icon:  <SettingsIcon/>,
              },
        ]
      },
]


