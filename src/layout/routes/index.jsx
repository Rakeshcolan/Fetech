import React from "react";
import AdminRoutes from "./adminRoutes";
import guestRoutes from "./guestRoutes";
import UserRoutes from "./userRoutes";

const ROLES_ROUTES = {
  0: guestRoutes,
  1: UserRoutes,
  2: AdminRoutes,
};

export const getRoutes = (role) => {
  return ROLES_ROUTES[role];
};
