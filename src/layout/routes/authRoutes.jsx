import { lazy } from "react";
import { Outlet } from "react-router-dom";
import ForgotPassword from "../../pages/Auth/forgotPassword";
import Register from "../../pages/Auth/register/Register";
import Payment from "../../pages/payment";
import StripePayment from "../../pages/User/stripePayment";

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
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/forgot",
        element: <ForgotPassword />,
      },
      { path: "/stripepayment", element: <StripePayment /> },
      {
        path: "*",
        element: <h1>404</h1>,
      },
    ],
  },
];

export default authRoutes;
