import { Outlet } from "react-router-dom";
import ManageData from "../../pages/User/manageData";
import ManageRoles from "../../pages/User/manageRoles";
import ManageSubAdmin from "../../pages/User/manageSubAdmin";
import RootLayout from "../nav/rootLayout";

const UserRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/dashboard/subadmin", element: <ManageSubAdmin /> },
      { path: "/dashboard/data", element: <ManageData /> },
      { path: "/dashboard/roles", element: <ManageRoles /> },
    ],
  },
];

export default UserRoutes;
