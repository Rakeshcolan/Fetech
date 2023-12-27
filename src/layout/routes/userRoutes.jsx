import { Outlet } from "react-router-dom";
import ManageRoles from "../../pages/manageRoles";
import ManageSubAdmin from "../../pages/manageSubAdmin";
import ManageData from "../../pages/User/manageData";

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
