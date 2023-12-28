import EditProfile from "../../components/EditProfile/editProfile";
import AddRoles from "../../components/Roles&Permissions/addRoles";
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
      { path: "/dashboard/roles/addRole", element: <AddRoles /> },
      { path: "/dashboard/editProfile", element: <EditProfile /> },
    ],
  },
];

export default UserRoutes;
