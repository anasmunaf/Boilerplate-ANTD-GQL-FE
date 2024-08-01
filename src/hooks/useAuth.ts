import { useDispatch } from "react-redux";
import { login, logout } from "../redux/slice/authSlice";
import { useApolloClient } from "@apollo/client";

const useAuth = () => {
  const dispatch = useDispatch();
  const client = useApolloClient();

  function logoutHandler() {
    client.clearStore();
    dispatch(logout());
  }

  return {
    login: (payload: any) => dispatch(login(payload)),
    logout: logoutHandler,
  };
};

export default useAuth;
