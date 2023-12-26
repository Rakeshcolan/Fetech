import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./adminRoutes";
import guestRoutes from "./guestRoutes";
import TestRoutes from "./testRoutes";
import UserRoutes from "./userRoutes";

const ROLES_ROUTES = {
  0: guestRoutes,
  1: UserRoutes,
  2: AdminRoutes,
};

export const getRoutes = (role) => {
  return ROLES_ROUTES[role];
};
