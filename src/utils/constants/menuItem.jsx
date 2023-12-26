import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
export const UsermenuItems = [
    
     {
        path: "/",
        name: "Dashboard",
        icon: "",
        isNested:[
            {
                path: "/dashboard/subadmin",
                name: "Manage SubAdmin",
                icon: "",
              },
              {
                path: "/dashboard/data",
                name: "Manage Data",
                icon: "",
              },
              {
                path: "/dashboard/roles",
                name: "Manage Roles And Permission",
                icon: "",
              }
        ]
      },

]

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
                icon: "",
              },
              {
                path: "/dashboard/roles",
                name: "Roles and Permission",
                icon: "",
              },
              {
                path: "/dashboard/cms",
                name: "Manage CMS",
                icon: "",
              },
              {
                path: "/dashboard/demo",
                name: "Request For Demo",
                icon: "",
              },
        ]
      },
]