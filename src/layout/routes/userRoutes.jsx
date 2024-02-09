import EditProfile from "../../components/EditProfile/editProfile";
import AddRoles from "../../components/Roles&Permissions/addRoles";
import Login from "../../pages/Auth/login";
import Register from "../../pages/Auth/register/Register";
import ManageRoles from "../../pages/manageRoles";
import EditRoles from "../../pages/manageRoles/editRoles";
import ManageSubAdmin from "../../pages/manageSubAdmin";
import EditSubAdmin from "../../pages/manageSubAdmin/editSubAdmin";
import ManageData from "../../pages/User/manageData";
import StripePayment from "../../pages/User/stripePayment";
import RootLayout from "../nav/rootLayout";

const UserRoutes = [
  {
    path: "/dashboard",
    element: <RootLayout />,
    children: [
      { index:true, element: <ManageSubAdmin /> },
      { path: "editsubadmin", element: <EditSubAdmin /> },
      { path: "data", element: <ManageData /> },
      { path: "roles", element: <ManageRoles /> },
      { path: "editroles", element: <EditRoles /> },
      { path: "addRole", element: <AddRoles /> },
      { path: "editProfile", element: <EditProfile /> },
      { path: "stripepayment", element: <StripePayment /> },
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
