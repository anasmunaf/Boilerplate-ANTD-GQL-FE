import {
  createBrowserRouter,
  redirect,
  RouterProviderProps,
} from "react-router-dom";
import { lazy } from "react";
import { authRoutes } from "../constants/routes";
import { AppLayout } from "../layout/app";

const router = createBrowserRouter([
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
]);

const authorized: RouterProviderProps = {
  router,
};

export default authorized;
