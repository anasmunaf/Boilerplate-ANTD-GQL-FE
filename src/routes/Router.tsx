import { RouterProvider } from "react-router-dom";
import authorized from "./authorized";
import unAuthorized from "./unAuthorized";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ApolloClient, useApolloClient } from "@apollo/client";

type Props = {};
const Router = (props: Props) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const route = isAuth ? authorized : unAuthorized;
  return <RouterProvider fallbackElement={<p>Initial Load...</p>} {...route} />;
};

export default Router;
