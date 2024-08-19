import { redirect } from "react-router-dom";
import { lazy } from "react";
import { authRoutes } from "../constants/routes";
import { AppLayout } from "../layout/app";

const authorized = [
  {
    id: "root",
    path: authRoutes.default,
    Component: AppLayout,
    children: [
      {
        index: true,
        Component: lazy(() => import("../pages/app/dashboard")),
      },
      {
        path: "*",
        loader: () => redirect(authRoutes.default),
      },
    ],
  },
];

export default authorized;
