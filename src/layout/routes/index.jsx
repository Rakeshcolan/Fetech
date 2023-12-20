import React from "react";
import { Route, Routes } from "react-router-dom";
import guestRoutes from "./guestRoutes";
import TestRoutes from "./testRoutes";


const ROLES_ROUTES = {
  0: guestRoutes,
  1: TestRoutes,
  2: 0,
  3: 0,
  4: 0,
  6: 0,
  5: 0,
  7: 0,
  8: 0,
};

export const getRoutes = (role) => {
  return ROLES_ROUTES[role];
};
