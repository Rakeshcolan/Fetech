import { Outlet } from "react-router-dom";
import Dashboard from "../../pages/Admin/dashboard";
import MAangeChatbot from "../../pages/Admin/manageChatBot";
import ManageClients from "../../pages/Admin/manageClient";
import ManageCMS from "../../pages/Admin/manageCms";
import ManageDemo from "../../pages/Admin/manageDemo";
import ManageSubscription from "../../pages/Admin/manageSubscription";
import ManageRoles from "../../pages/manageRoles";
import ManageSubAdmin from "../../pages/manageSubAdmin";


import RootLayout from "../nav/rootLayout";

const AdminRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {path:"",element:<Dashboard/>},
      { path: "/dashboard/subadmin", element: <ManageSubAdmin /> },
      { path: "/dashboard/client", element: <ManageClients /> },
      { path: "/dashboard/chatbot", element: <MAangeChatbot /> },
      { path: "/dashboard/subscription", element: <ManageSubscription /> },
      { path: "/dashboard/roles", element: <ManageRoles /> },
      { path: "/dashboard/cms", element: <ManageCMS /> },
      { path: "/dashboard/demo", element: <ManageDemo /> },
    ],
  },
];

export default AdminRoutes;
