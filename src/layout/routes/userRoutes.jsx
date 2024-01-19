import EditProfile from "../../components/EditProfile/editProfile";
import AddRoles from "../../components/Roles&Permissions/addRoles";
import Login from "../../pages/Auth/login";
import Register from "../../pages/Auth/login/Register";
import ManageRoles from "../../pages/manageRoles";
import EditRoles from "../../pages/manageRoles/editRoles";
import ManageSubAdmin from "../../pages/manageSubAdmin";
import EditSubAdmin from "../../pages/manageSubAdmin/editSubAdmin";
import ManageData from "../../pages/User/manageData";
import RootLayout from "../nav/rootLayout";

const UserRoutes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/dashboard/subadmin", element: <ManageSubAdmin /> },
      { path: "/dashboard/editsubadmin", element: <EditSubAdmin /> },
      { path: "/dashboard/data", element: <ManageData /> },
      { path: "/dashboard/roles", element: <ManageRoles /> },
      { path: "/dashboard/editroles", element: <EditRoles /> },
      { path: "/dashboard/roles/addRole", element: <AddRoles /> },
      { path: "/dashboard/editProfile", element: <EditProfile /> },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
];

export default UserRoutes;
