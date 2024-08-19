import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/slice/authSlice";
import { useApolloClient } from "@apollo/client";
import { RootState } from "../redux/store";

const useAuth = () => {
  const dispatch = useDispatch();
  const client = useApolloClient();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  function logoutHandler() {
    client.clearStore();
    dispatch(logout());
  }

  return {
    login: (payload: any) => dispatch(login(payload)),
    logout: logoutHandler,
    isAuth,
  };
};

export default useAuth;
