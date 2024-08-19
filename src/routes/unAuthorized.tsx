import { redirect } from "react-router-dom";
import { PublicLayout } from "../layout/public";
import { lazy } from "react";
import { publicRoutes } from "../constants/routes";
import { DEV_VAR } from "../utils/config";

const unAuthorized = [
  {
    id: "root",
    path: publicRoutes.default,
    Component: PublicLayout,
    children: [
      {
        index: true,
        Component: lazy(() => import("../pages/public/login")),
      },
      {
        path: publicRoutes.forgotPassword,
        Component: lazy(() => import("../pages/public/forgot")),
      },
      {
        path: "*",
        loader: () => redirect(publicRoutes.default),
      },
    ],
  },
];

export default unAuthorized;
