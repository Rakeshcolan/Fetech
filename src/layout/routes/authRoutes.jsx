import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Login = lazy(() => import("../../pages/Auth/login"));

const authRoutes = [
  {
    path: "/",
    element: (
      <div>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },
      // {
      //   path: "/register",
      //   element: <Register />,
      // },
      {
        path: "*",
        element: <h1>404</h1>,
      },
    ],
  },
];

export default authRoutes;
