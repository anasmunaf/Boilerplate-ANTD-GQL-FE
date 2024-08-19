import { createBrowserRouter, RouterProvider } from "react-router-dom";
import authorized from "./authorized";
import unAuthorized from "./unAuthorized";
import { DEV_VAR } from "../utils/config";
import { useAuth } from "../hooks";

const Router = () => {
  const { isAuth } = useAuth();

  const routes = isAuth ? authorized : unAuthorized;
  const router = createBrowserRouter(routes, {
    basename: DEV_VAR.BASE_DOMAIN,
  });

  return <RouterProvider router={router} />;
};

export default Router;
