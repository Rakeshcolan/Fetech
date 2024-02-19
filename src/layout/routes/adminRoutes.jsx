// import EditProfile from "../../components/EditProfile/editProfile";
// import AddRoles from "../../components/Roles&Permissions/addRoles";
// import Dashboard from "../../pages/Admin/dashboard";
// import MAangeChatbot from "../../pages/Admin/manageChatBot";
// import CreateChatBot from "../../pages/Admin/manageChatBot/createChatBot";
// import ManageClients from "../../pages/Admin/manageClient";
// import ManageCMS from "../../pages/Admin/manageCms";
// import ManageDemo from "../../pages/Admin/manageDemo";
// import ManageSubscription from "../../pages/Admin/manageSubscription";
// import EditSubscription from "../../pages/Admin/manageSubscription/editSubscription";
// import ManageRoles from "../../pages/manageRoles";
// import EditRoles from "../../pages/manageRoles/editRoles";
// import ManageSubAdmin from "../../pages/manageSubAdmin";
// import EditSubAdmin from "../../pages/manageSubAdmin/editSubAdmin";
// import Payment from "../../pages/payment";
// import RootLayout from "../nav/rootLayout";

import { lazy } from "react";
import ChatBotPreview from "../../components/chatbotpreview";

const RootLayout = lazy(()=>import ('../nav/rootLayout'))
const Dashboard = lazy(() =>
  import("../../pages/Admin/dashboard")
);
const ManageSubAdmin = lazy(() =>
  import("../../pages/manageSubAdmin")
);
const ManageClients = lazy(() =>
  import("../../pages/Admin/manageClient")
);
const MAangeChatbot = lazy(() =>
  import("../../pages/Admin/manageChatBot")
);
const ManageSubscription = lazy(() =>
  import("../../pages/Admin/manageSubscription")
);
const ManageRoles = lazy(() =>
  import("../../pages/manageRoles")
);
const ManageCMS = lazy(() =>
  import("../../pages/Admin/manageCms")
);
const ManageDemo = lazy(() =>
  import("../../pages/Admin/manageDemo")
);
const CreateChatBot = lazy(() =>
  import("../../pages/Admin/manageChatBot/createChatBot")
);
const AddRoles = lazy(() =>
  import("../../components/Roles&Permissions/addRoles")
);
const EditProfile = lazy(() =>
  import("../../components/EditProfile/editProfile")
);
const EditRoles = lazy(() =>
  import("../../pages/manageRoles/editRoles")
);
const EditSubAdmin = lazy(() =>
  import("../../pages/manageSubAdmin/editSubAdmin")
);
const EditSubscription = lazy(() =>
  import("../../pages/Admin//manageSubscription/editSubscription")
);
const Payment = lazy(() =>
  import("../../pages/payment")
);

const AdminRoutes = [
  {
    path: "/dashboard",
    element: <RootLayout />,
    children: [
      {index:true, element: <Dashboard /> },
      { path: "subadmin", element: <ManageSubAdmin /> },
      { path: "client", element: <ManageClients /> },
      { path: "chatbot", element: <MAangeChatbot /> },
      { path: "subscription", element: <ManageSubscription /> },
      { path: "roles", element: <ManageRoles /> },
      { path: "cms", element: <ManageCMS /> },
      { path: "demo", element: <ManageDemo /> },
      { path: "flowpage", element: <CreateChatBot /> },
      { path: "addrole", element: <AddRoles /> },
      { path: "editroles", element: <EditRoles /> },
      { path: "editProfile", element: <EditProfile /> },
      { path: "editsubadmin", element: <EditSubAdmin /> },
      { path: "editsubscription", element: <EditSubscription /> },
    ],
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {path:'/chatbotpreview',element:<ChatBotPreview/>},
  {
    path:'/*',
    element:<h1>Page Not Found</h1>
  }
];

export default AdminRoutes;
